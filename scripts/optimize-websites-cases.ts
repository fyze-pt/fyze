import { mkdir, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "public/cases-img/websites");

const MAX_WIDTH = 1920;
const QUALITY = 85;

const TARGETS: { src: string; out: string }[] = [
  // Boteco Dona Luzia — website
  {
    src: "public/notion/boteco-dona-luzia-ok/ad66c7ad19.png",
    out: "boteco-dona-luzia-hero.webp",
  },
  {
    src: "public/notion/boteco-dona-luzia-ok/03b3057c8b.png",
    out: "boteco-dona-luzia-1.webp",
  },
  {
    src: "public/notion/boteco-dona-luzia-ok/8e2b891e75.png",
    out: "boteco-dona-luzia-2.webp",
  },
  // Active Body — website
  {
    src: "public/notion/active-body-ok/dc49e27121.png",
    out: "active-body-hero.webp",
  },
  {
    src: "public/notion/active-body-ok/a53dc73852.png",
    out: "active-body-1.webp",
  },
  {
    src: "public/notion/active-body-ok/e185fa38e7.png",
    out: "active-body-2.webp",
  },
  // Desentuup Clean — website
  {
    src: "public/notion/desentuup-clean-ok/e5065b3183.png",
    out: "desentuup-clean-hero.webp",
  },
  {
    src: "public/notion/desentuup-clean-ok/94a8b861ef.png",
    out: "desentuup-clean-1.webp",
  },
];

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  let totalIn = 0;
  let totalOut = 0;

  for (const { src, out } of TARGETS) {
    const inPath = join(ROOT, src);
    const outPath = join(OUT_DIR, out);

    try {
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
        `${src}  →  ${out}  (${(inStat.size / 1024).toFixed(0)}KB → ${(outStat.size / 1024).toFixed(0)}KB, -${ratio}%)`,
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
