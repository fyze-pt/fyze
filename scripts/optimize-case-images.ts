import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const CASES_FILE = join(ROOT, "src/data/cases.ts");
const SRC_DIR = join(ROOT, "public/notion");
const OUT_DIR = join(ROOT, "public/cases-img");

const MAX_WIDTH = 1920;
const QUALITY = 85;

async function fileExists(p: string) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const source = await readFile(CASES_FILE, "utf8");

  const matches = Array.from(
    source.matchAll(/\/notion\/[^"']+\.(?:jpg|jpeg|png|webp|gif)/gi),
  );
  const paths = Array.from(new Set(matches.map((m) => m[0])));

  console.log(`Found ${paths.length} referenced images.\n`);

  let updated = source;
  let totalIn = 0;
  let totalOut = 0;

  for (const webPath of paths) {
    const rel = webPath.replace(/^\/notion\//, "");
    const inPath = join(SRC_DIR, rel);
    const outRel = rel.replace(/\.(jpg|jpeg|png|gif)$/i, ".webp");
    const outPath = join(OUT_DIR, outRel);
    const newWebPath = `/cases-img/${outRel.replace(/\\/g, "/")}`;

    if (!(await fileExists(inPath))) {
      console.warn(`MISSING source: ${inPath}`);
      continue;
    }

    await mkdir(dirname(outPath), { recursive: true });

    const inStat = await stat(inPath);
    totalIn += inStat.size;

    await sharp(inPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);

    const outStat = await stat(outPath);
    totalOut += outStat.size;

    const ratio = ((1 - outStat.size / inStat.size) * 100).toFixed(0);
    console.log(
      `${rel}  →  ${outRel}  (${(inStat.size / 1024 / 1024).toFixed(1)}MB → ${(outStat.size / 1024).toFixed(0)}KB, -${ratio}%)`,
    );

    updated = updated.split(webPath).join(newWebPath);
  }

  await writeFile(CASES_FILE, updated, "utf8");

  console.log(
    `\nTotal:  ${(totalIn / 1024 / 1024).toFixed(1)}MB  →  ${(totalOut / 1024 / 1024).toFixed(1)}MB`,
  );
  console.log(`cases.ts updated.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
