import {
  pickA102Question,
  pickA102FracQuestion,
  pickA103SystemQuestion,
  pickA104SystemQuestion,
} from "../lib/curriculum/content/math/a10-template-gens.ts";

function test(name, fn, n = 200) {
  let ok = 0;
  let fail = 0;
  for (let i = 0; i < n; i++) {
    try {
      const q = fn();
      if (!q) fail++;
      else ok++;
    } catch {
      fail++;
    }
  }
  console.log(`${name}: ok=${ok} fail=${fail}`);
}

test("A10.1 ex2 easy", () => pickA102Question(1));
test("A10.1 ex2 hard", () => pickA102Question(2));
test("A10.2 easy", () => pickA102FracQuestion(1));
test("A10.2 hard", () => pickA102FracQuestion(2));
test("A10.3 easy", () => pickA103SystemQuestion(1));
test("A10.3 hard", () => pickA103SystemQuestion(2));
test("A10.4 easy", () => pickA104SystemQuestion(1));
test("A10.4 hard", () => pickA104SystemQuestion(2));
