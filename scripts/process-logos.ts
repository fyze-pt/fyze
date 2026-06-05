import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

// Patacas — black-on-transparent → white-on-transparent (visible em fundo escuro)
async function patacasInvert() {
  const file = "public/logos/patacas-bar.png";
  const { data, info } = await sharp(file)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += channels) {
    if (out[i + 3] > 0) {
      // Onde tem opacidade, força branco
      out[i] = 255;
      out[i + 1] = 255;
      out[i + 2] = 255;
    }
  }
  await sharp(out, { raw: { width, height, channels } })
    .png()
    .toFile("public/logos/patacas-bar-white.png");
  console.log("patacas-bar-white.png gerado");
}

// Active Body — remove fundo branco + converte texto preto em branco
// (resultado: logo legível em fundo escuro com o accent colorido preservado)
async function activeBodyCutout() {
  const file = "public/logos/active-body.png";
  const { data, info } = await sharp(file)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += channels) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    // Pixels brancos (>240) viram transparentes
    if (r > 240 && g > 240 && b > 240) {
      out[i + 3] = 0;
      continue;
    }
    // Pixels pretos/quase-pretos (<70) viram brancos opacos
    if (r < 70 && g < 70 && b < 70) {
      out[i] = 255;
      out[i + 1] = 255;
      out[i + 2] = 255;
    }
  }
  await sharp(out, { raw: { width, height, channels } })
    .png()
    .toFile("public/logos/active-body-cutout.png");
  console.log("active-body-cutout.png gerado");
}

async function main() {
  await patacasInvert();
  await activeBodyCutout();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
