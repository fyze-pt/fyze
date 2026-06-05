import { mkdir, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SRC_DIR = join(ROOT, "public/Selecionadas");
const OUT_BASE = join(ROOT, "public/cases-img");

const MAX_WIDTH = 1920;
const QUALITY = 85;

const TARGETS: { src: string; out: string }[] = [
  // Capas de cases (cases.ts heroImage)
  { src: "active body - capa case.jpg", out: "active-body/cover.webp" },
  { src: "capa - deseintuple clean.jpg", out: "desentuup-clean-ok/cover.webp" },
  { src: "capa cases - dona luzia.jpg", out: "boteco-dona-luzia-ok/cover.webp" },
  { src: "capa do case - o porto.jpg", out: "oporto-ok/cover.webp" },
  { src: "teixeira - cases.jpg", out: "teixeira-wine-bar-ok/cover.webp" },
  // Imagens extras para galerias
  { src: "desintupclean - cases.jpg", out: "desentuup-clean-ok/extra.webp" },
  { src: "teixeira - incluir no case.jpg", out: "teixeira-wine-bar-ok/extra.webp" },
  { src: "influencer - colocar na parte do boteco que fala sobre influencer.jpg", out: "boteco-dona-luzia-ok/influencer.webp" },
  // Bastidores em /sobre
  { src: "sobre - making of.jpg", out: "sobre/making-of.webp" },
  { src: "sobre - producao de video.jpg", out: "sobre/producao-video-1.webp" },
  { src: "sobre - producao de vídeo.jpg", out: "sobre/producao-video-2.webp" },
  { src: "sobre - produção de vídeo.jpg", out: "sobre/producao-video-3.webp" },
  { src: "sobre - produção de imagens.jpg", out: "sobre/producao-imagens.webp" },
];

async function main() {
  let totalIn = 0;
  let totalOut = 0;

  for (const { src, out } of TARGETS) {
    const inPath = join(SRC_DIR, src);
    const outPath = join(OUT_BASE, out);

    try {
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
        `${src}  →  ${out}  (${(inStat.size / 1024 / 1024).toFixed(1)}MB → ${(outStat.size / 1024).toFixed(0)}KB, -${ratio}%)`,
      );
    } catch (e) {
      console.warn(`SKIP ${src}: ${(e as Error).message}`);
    }
  }

  console.log(
    `\nTotal:  ${(totalIn / 1024 / 1024).toFixed(1)}MB  →  ${(totalOut / 1024 / 1024).toFixed(2)}MB`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
