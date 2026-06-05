import { chromium } from "playwright";
import sharp from "sharp";
import { mkdir, unlink } from "node:fs/promises";
import { join } from "node:path";

const TARGETS: { url: string; slug: string }[] = [
  { url: "https://goactivebody.pt", slug: "active-body" },
  { url: "https://desentuupclean.pt", slug: "desentuup-clean" },
];

const OUT_DIR = "public/cases-img/websites";

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();

  for (const { url, slug } of TARGETS) {
    console.log(`\n=== ${slug} (${url}) ===`);

    // Desktop viewport
    const desktop = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
    });
    const dpage = await desktop.newPage();
    try {
      await dpage.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      // settle animations
      await dpage.waitForTimeout(2500);
    } catch (e) {
      console.warn(`  ${url} timeout, capturing anyway`);
    }

    const tmpDesktopHero = join(OUT_DIR, `_${slug}-desktop-hero.png`);
    const tmpDesktopFull = join(OUT_DIR, `_${slug}-desktop-full.png`);
    await dpage.screenshot({ path: tmpDesktopHero, fullPage: false });
    await dpage.screenshot({ path: tmpDesktopFull, fullPage: true });
    console.log("  ✓ desktop hero + full");

    await desktop.close();

    // Mobile viewport
    const mobile = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });
    const mpage = await mobile.newPage();
    try {
      await mpage.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      await mpage.waitForTimeout(2500);
    } catch (e) {
      console.warn(`  ${url} mobile timeout`);
    }
    const tmpMobile = join(OUT_DIR, `_${slug}-mobile.png`);
    await mpage.screenshot({ path: tmpMobile, fullPage: true });
    console.log("  ✓ mobile full");
    await mobile.close();

    // Optimize → webp
    const targets = [
      { src: tmpDesktopHero, out: `${slug}-hero.webp` },
      { src: tmpDesktopFull, out: `${slug}-1.webp` },
      { src: tmpMobile, out: `${slug}-mobile.webp` },
    ];
    for (const { src, out } of targets) {
      // Cap dimensions: webp max 16383, but we want reasonable file sizes
      const meta = await sharp(src).metadata();
      const targetW = Math.min(1920, meta.width ?? 1920);
      const ratio = targetW / (meta.width ?? 1920);
      const projHeight = Math.round((meta.height ?? 0) * ratio);
      let pipeline = sharp(src).resize({ width: targetW, withoutEnlargement: true });
      if (projHeight > 8000) {
        // Long pages: capture only the top 8000 px after resize
        pipeline = pipeline.extract({ left: 0, top: 0, width: targetW, height: 8000 });
      }
      await pipeline.webp({ quality: 85 }).toFile(join(OUT_DIR, out));
      await unlink(src).catch(() => {});
      console.log(`  optimized → ${out}`);
    }
  }

  await browser.close();
  console.log("\nFeito.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
