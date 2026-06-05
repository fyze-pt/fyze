#!/usr/bin/env tsx
/**
 * Notion API helper — usado por Claude para buscar contexto do workspace
 * durante o desenvolvimento (não roda no site).
 *
 * Uso:
 *   npx tsx scripts/notion.ts whoami
 *   npx tsx scripts/notion.ts search "termo"
 *   npx tsx scripts/notion.ts page <page_id>
 *   npx tsx scripts/notion.ts blocks <page_or_block_id>
 *   npx tsx scripts/notion.ts db <database_id> [--filter '{...}']
 *   npx tsx scripts/notion.ts client "<nome ou trecho>"   → markdown limpo + imagens em public/notion/<slug>/
 */

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { extname, join, resolve } from "node:path";

function loadEnv() {
  try {
    const raw = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, "");
    }
  } catch {
    /* ignore */
  }
}
loadEnv();

const TOKEN = process.env.NOTION_API_KEY;
if (!TOKEN) {
  console.error("NOTION_API_KEY ausente em .env.local");
  process.exit(1);
}

const NOTION_VERSION = "2022-06-28";
const BASE = "https://api.notion.com/v1";

type Json = Record<string, any>;

async function notion(path: string, init: RequestInit = {}): Promise<Json> {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  const text = await res.text();
  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }
  if (!res.ok) {
    console.error(`HTTP ${res.status}`, body);
    process.exit(1);
  }
  return body as Json;
}

// --- helpers ---------------------------------------------------------------

function slugify(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "page";
}

function richText(rt: Json[] | undefined): string {
  if (!rt) return "";
  return rt
    .map((t) => {
      let txt = t.plain_text ?? "";
      const a = t.annotations ?? {};
      if (a.code) txt = `\`${txt}\``;
      if (a.bold) txt = `**${txt}**`;
      if (a.italic) txt = `*${txt}*`;
      if (a.strikethrough) txt = `~~${txt}~~`;
      if (t.href) txt = `[${txt}](${t.href})`;
      return txt;
    })
    .join("");
}

function pageTitle(page: Json): string {
  const props = page.properties ?? {};
  for (const v of Object.values<Json>(props)) {
    if (v?.type === "title") return richText(v.title) || "Untitled";
  }
  return "Untitled";
}

async function getAllChildren(blockId: string): Promise<Json[]> {
  const out: Json[] = [];
  let cursor: string | undefined;
  do {
    const url = `/blocks/${blockId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ""}`;
    const res = await notion(url);
    out.push(...(res.results ?? []));
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return out;
}

async function downloadImage(url: string, outDir: string): Promise<string> {
  mkdirSync(outDir, { recursive: true });
  const hash = createHash("sha1").update(url).digest("hex").slice(0, 10);
  // tenta extrair extensão da URL antes da query
  const noQuery = url.split("?")[0];
  let ext = extname(noQuery).toLowerCase();
  if (!/^\.(png|jpe?g|webp|gif|svg|avif)$/.test(ext)) ext = ".jpg";
  const filename = `${hash}${ext}`;
  const filepath = resolve(outDir, filename);
  if (!existsSync(filepath)) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`download falhou ${res.status} ${url}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(filepath, buf);
  }
  // retorna caminho público relativo ao site
  const publicRel = filepath.split(/[\\/]public[\\/]/).pop() ?? filename;
  return `/${publicRel.replace(/\\/g, "/")}`;
}

async function blocksToMarkdown(
  blocks: Json[],
  imgDir: string,
  depth = 0,
): Promise<string> {
  const lines: string[] = [];
  const indent = "  ".repeat(depth);

  for (const b of blocks) {
    const t = b.type;
    const data = b[t] ?? {};
    let line = "";

    switch (t) {
      case "paragraph":
        line = richText(data.rich_text);
        break;
      case "heading_1":
        line = `# ${richText(data.rich_text)}`;
        break;
      case "heading_2":
        line = `## ${richText(data.rich_text)}`;
        break;
      case "heading_3":
        line = `### ${richText(data.rich_text)}`;
        break;
      case "bulleted_list_item":
        line = `- ${richText(data.rich_text)}`;
        break;
      case "numbered_list_item":
        line = `1. ${richText(data.rich_text)}`;
        break;
      case "to_do":
        line = `- [${data.checked ? "x" : " "}] ${richText(data.rich_text)}`;
        break;
      case "toggle":
        line = `> ${richText(data.rich_text)}`;
        break;
      case "quote":
        line = `> ${richText(data.rich_text)}`;
        break;
      case "callout":
        line = `> ${richText(data.rich_text)}`;
        break;
      case "code":
        line = `\`\`\`${data.language ?? ""}\n${richText(data.rich_text)}\n\`\`\``;
        break;
      case "divider":
        line = `---`;
        break;
      case "image": {
        const src = data.type === "external" ? data.external?.url : data.file?.url;
        if (src) {
          const local = await downloadImage(src, imgDir);
          const caption = richText(data.caption);
          line = `![${caption}](${local})`;
        }
        break;
      }
      case "video":
      case "file":
      case "pdf": {
        const src = data.type === "external" ? data.external?.url : data.file?.url;
        if (src) line = `[${t}](${src})`;
        break;
      }
      case "bookmark":
      case "embed":
      case "link_preview":
        line = data.url ? `[${data.url}](${data.url})` : "";
        break;
      case "child_page":
        line = `**(sub-página)** ${data.title}  (id: ${b.id})`;
        break;
      case "table":
      case "column_list":
      case "column":
        line = ""; // os filhos são renderizados abaixo
        break;
      default:
        line = `<!-- ${t} -->`;
    }

    if (line) lines.push(indent + line);

    if (b.has_children) {
      const children = await getAllChildren(b.id);
      const sub = await blocksToMarkdown(children, imgDir, depth + 1);
      if (sub) lines.push(sub);
    }
  }

  return lines.join("\n");
}

function isNotionId(s: string): boolean {
  return /^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$/i.test(
    s.trim(),
  );
}

async function findPageByQuery(query: string): Promise<Json> {
  // Se é um ID do Notion, busca direto
  if (isNotionId(query)) {
    return await notion(`/pages/${query.trim()}`);
  }

  const res = await notion("/search", {
    method: "POST",
    body: JSON.stringify({
      query,
      filter: { property: "object", value: "page" },
      page_size: 25,
    }),
  });
  const results: Json[] = res.results ?? [];
  if (results.length === 0) {
    console.error(`Nenhuma página encontrada para "${query}"`);
    process.exit(1);
  }
  const lc = query.toLowerCase();
  const exact = results.find((p) => pageTitle(p).toLowerCase() === lc);
  if (exact) return exact;
  const contains = results.find((p) => pageTitle(p).toLowerCase().includes(lc));
  if (contains) return contains;

  console.error(
    `Nenhum match para "${query}". Títulos retornados:\n` +
      results.map((p) => `  - ${pageTitle(p)}`).join("\n"),
  );
  process.exit(1);
}

function propertiesSummary(page: Json): string {
  const lines: string[] = [];
  const props = page.properties ?? {};
  for (const [k, v] of Object.entries<Json>(props)) {
    let val = "";
    switch (v.type) {
      case "title":
      case "rich_text":
        val = richText(v[v.type]);
        break;
      case "select":
        val = v.select?.name ?? "";
        break;
      case "multi_select":
        val = (v.multi_select ?? []).map((x: Json) => x.name).join(", ");
        break;
      case "status":
        val = v.status?.name ?? "";
        break;
      case "url":
        val = v.url ?? "";
        break;
      case "email":
        val = v.email ?? "";
        break;
      case "phone_number":
        val = v.phone_number ?? "";
        break;
      case "number":
        val = v.number == null ? "" : String(v.number);
        break;
      case "checkbox":
        val = v.checkbox ? "true" : "false";
        break;
      case "date":
        val = v.date?.start ?? "";
        break;
      case "people":
        val = (v.people ?? []).map((p: Json) => p.name ?? p.id).join(", ");
        break;
      case "files":
        val = (v.files ?? [])
          .map((f: Json) => f.external?.url ?? f.file?.url ?? "")
          .filter(Boolean)
          .join(", ");
        break;
      default:
        continue;
    }
    if (val) lines.push(`- **${k}:** ${val}`);
  }
  return lines.join("\n");
}

// --- commands --------------------------------------------------------------

const [, , cmd, ...args] = process.argv;

async function downloadFile(url: string, outPath: string): Promise<void> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download falhou ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await import("node:fs/promises").then((fs) => fs.writeFile(outPath, buf));
}

async function transcodeToMp4(input: string, output: string): Promise<void> {
  const { spawn } = await import("node:child_process");
  // require resolução em runtime para que o script funcione mesmo sem @types do pacote
  const ffmpegPath = (await import("ffmpeg-static")).default as unknown as string;

  return new Promise((resolve, reject) => {
    const args = [
      "-y", // overwrite output
      "-i", input,
      "-c:v", "libx264",
      "-preset", "medium",
      "-crf", "27",
      "-vf", "scale='min(1280,iw)':-2", // max 1280 width, even height
      "-c:a", "aac",
      "-b:a", "96k",
      "-movflags", "+faststart", // streaming-friendly
      "-pix_fmt", "yuv420p", // browser compat
      output,
    ];
    const proc = spawn(ffmpegPath, args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    proc.stderr.on("data", (d) => { stderr += d.toString(); });
    proc.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exit ${code}\n${stderr.slice(-1000)}`));
    });
  });
}

async function extractPoster(input: string, output: string): Promise<void> {
  const { spawn } = await import("node:child_process");
  const ffmpegPath = (await import("ffmpeg-static")).default as unknown as string;
  return new Promise((resolve, reject) => {
    const args = [
      "-y",
      "-ss", "0.5",
      "-i", input,
      "-frames:v", "1",
      "-vf", "scale='min(1280,iw)':-2",
      "-q:v", "85",
      output,
    ];
    const proc = spawn(ffmpegPath, args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    proc.stderr.on("data", (d) => { stderr += d.toString(); });
    proc.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg poster exit ${code}\n${stderr.slice(-500)}`));
    });
  });
}

async function findVideoBlocks(blockId: string, acc: Json[] = []): Promise<Json[]> {
  const children = await getAllChildren(blockId);
  for (const b of children) {
    if (b.type === "video") acc.push(b);
    if (b.has_children) await findVideoBlocks(b.id, acc);
  }
  return acc;
}

async function cmdVideos(query: string) {
  const page = await findPageByQuery(query);
  const title = pageTitle(page);
  const slug = slugify(title);
  const outDir = resolve(process.cwd(), "public", "cases-img", slug, "videos");
  mkdirSync(outDir, { recursive: true });

  console.log(`Buscando vídeos em "${title}"...`);
  const videos = await findVideoBlocks(page.id);
  if (!videos.length) {
    console.log("Nenhum vídeo encontrado.");
    return;
  }
  console.log(`${videos.length} vídeo(s) encontrado(s).\n`);

  const fs = await import("node:fs/promises");
  const tmpDir = resolve(process.cwd(), ".tmp-videos");
  mkdirSync(tmpDir, { recursive: true });

  let i = 0;
  const manifest: { src: string; poster: string; originalName: string }[] = [];
  for (const v of videos) {
    i += 1;
    const data = v.video ?? {};
    const url = data.type === "external" ? data.external?.url : data.file?.url;
    if (!url) {
      console.warn(`#${i}: sem URL (skip)`);
      continue;
    }
    const noQuery = url.split("?")[0];
    const ext = noQuery.match(/\.([a-z0-9]+)$/i)?.[1]?.toLowerCase() ?? "mov";
    const originalName = decodeURIComponent(noQuery.split("/").pop() ?? `video-${i}.${ext}`);
    const tmpPath = join(tmpDir, `${i}.${ext}`);
    const mp4Out = join(outDir, `${i}.mp4`);
    const posterOut = join(outDir, `${i}.webp`);

    console.log(`#${i}  ${originalName}`);
    console.log(`     ↓ download`);
    await downloadFile(url, tmpPath);
    const inSize = (await fs.stat(tmpPath)).size;

    console.log(`     ⚙ transcode → mp4`);
    await transcodeToMp4(tmpPath, mp4Out);
    const outSize = (await fs.stat(mp4Out)).size;

    console.log(`     🖼 poster → webp`);
    await extractPoster(tmpPath, posterOut);

    await fs.unlink(tmpPath).catch(() => {});

    const ratio = ((1 - outSize / inSize) * 100).toFixed(0);
    console.log(
      `     ${(inSize / 1024 / 1024).toFixed(1)}MB → ${(outSize / 1024 / 1024).toFixed(1)}MB  (-${ratio}%)\n`,
    );

    manifest.push({
      src: `/cases-img/${slug}/videos/${i}.mp4`,
      poster: `/cases-img/${slug}/videos/${i}.webp`,
      originalName,
    });
  }

  console.log("\n=== Manifest pra colar em cases.ts ===");
  console.log(JSON.stringify(manifest, null, 2));
}

async function cmdClient(query: string) {
  const page = await findPageByQuery(query);
  const title = pageTitle(page);
  const slug = slugify(title);
  const imgDir = resolve(process.cwd(), "public", "notion", slug);

  const blocks = await getAllChildren(page.id);
  const md = await blocksToMarkdown(blocks, imgDir);
  const props = propertiesSummary(page);

  console.log(`# ${title}`);
  console.log(``);
  console.log(`<!-- notion_id: ${page.id} -->`);
  console.log(`<!-- notion_url: ${page.url} -->`);
  console.log(`<!-- slug: ${slug} -->`);
  if (props) {
    console.log(``);
    console.log(`## Propriedades`);
    console.log(props);
  }
  console.log(``);
  console.log(`## Conteúdo`);
  console.log(``);
  console.log(md || "_(página vazia)_");
}

async function main() {
  switch (cmd) {
    case "whoami": {
      console.log(JSON.stringify(await notion("/users/me"), null, 2));
      break;
    }
    case "search": {
      const out = await notion("/search", {
        method: "POST",
        body: JSON.stringify({ query: args.join(" "), page_size: 25 }),
      });
      console.log(JSON.stringify(out, null, 2));
      break;
    }
    case "page": {
      if (!args[0]) throw new Error("falta page_id");
      console.log(JSON.stringify(await notion(`/pages/${args[0]}`), null, 2));
      break;
    }
    case "blocks": {
      if (!args[0]) throw new Error("falta block_or_page_id");
      console.log(JSON.stringify(await getAllChildren(args[0]), null, 2));
      break;
    }
    case "db": {
      if (!args[0]) throw new Error("falta database_id");
      const fi = args.indexOf("--filter");
      const body = fi >= 0 && args[fi + 1] ? JSON.parse(args[fi + 1]) : {};
      console.log(
        JSON.stringify(
          await notion(`/databases/${args[0]}/query`, {
            method: "POST",
            body: JSON.stringify(body),
          }),
          null,
          2,
        ),
      );
      break;
    }
    case "client": {
      if (!args.length) throw new Error("uso: client \"<nome ou trecho>\"");
      await cmdClient(args.join(" "));
      break;
    }
    case "videos": {
      if (!args.length) throw new Error("uso: videos \"<nome ou trecho>\"");
      await cmdVideos(args.join(" "));
      break;
    }
    default:
      console.error(
        "comandos: whoami | search <q> | page <id> | blocks <id> | db <id> [--filter '{...}'] | client \"<nome>\" | videos \"<nome>\"",
      );
      process.exit(1);
  }
}

main();
