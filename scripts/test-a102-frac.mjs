import { pickA102FracQuestion } from "../lib/curriculum/content/math/a10-template-gens.ts";

const origRandom = Math.random;
for (let t = 0; t < 30; t++) {
  let ok = 0;
  let fail = 0;
  for (let attempt = 0; attempt < 50; attempt++) {
    Math.random = () => (t + 0.5) / 30;
    try {
      pickA102FracQuestion();
      ok++;
    } catch {
      fail++;
    }
  }
  console.log(`T${t + 1} ok=${ok} fail=${fail}`);
}
Math.random = origRandom;
