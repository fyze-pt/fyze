#!/usr/bin/env tsx
/**
 * Converte uma logo colorida em uma versão "branca recortada":
 * pixels com brilho acima do threshold → branco opaco
 * pixels com brilho abaixo do threshold → totalmente transparente
 *
 * Uso:
 *   npx tsx scripts/whiten-logo.ts <input.png> <output.png> [threshold]
 *
 * Threshold default: 80 (0-255). Ajuste se a logo tiver cores escuras importantes.
 */

import sharp from "sharp";

async function whiten(
  input: string,
  output: string,
  threshold: number,
): Promise<void> {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.alloc(data.length);

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = channels === 4 ? data[i + 3] : 255;

    // Luminância percebida (formula Rec. 601)
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    if (a < 30 || lum < threshold) {
      // pixel transparente ou escuro → totalmente transparente
      out[i] = 0;
      out[i + 1] = 0;
      out[i + 2] = 0;
      out[i + 3] = 0;
    } else {
      // pixel claro → branco com alpha proporcional ao brilho
      const t = Math.min(255, Math.round(((lum - threshold) / (255 - threshold)) * 255 + 80));
      out[i] = 255;
      out[i + 1] = 255;
      out[i + 2] = 255;
      out[i + 3] = Math.min(a, t);
    }
  }

  await sharp(out, { raw: { width, height, channels } })
    .png()
    .toFile(output);

  console.log(`✓ ${output} (threshold ${threshold})`);
}

const [, , input, output, thresholdStr] = process.argv;

if (!input || !output) {
  console.error("Uso: npx tsx scripts/whiten-logo.ts <input> <output> [threshold]");
  process.exit(1);
}

const threshold = thresholdStr ? Number(thresholdStr) : 80;
whiten(input, output, threshold).catch((e) => {
  console.error(e);
  process.exit(1);
});
