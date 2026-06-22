import type { MathExerciseItem } from "./math-a1-types";

export const GENERATED_ALGEBRA_LESSONS = new Set([
  "A6-4", "A6-5", "A7-5",
  "A9-1", "A9-2", "A9-3", "A9-4", "A9-5", "A9-6",
  "A10-1", "A10-2", "A10-3", "A10-4", "A10-5", "A10-6",
  "A11-1", "A11-2", "A11-3",
  "A12-1", "A12-2", "A12-3",
  "A13-1", "A13-2", "A13-3", "A13-4", "A13-5", "A13-6", "A13-7",
]);

const ri = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = <T,>(values: readonly T[]) => values[ri(0, values.length - 1)]!;
const signed = (value: number) => value < 0 ? `− ${Math.abs(value)}` : `+ ${value}`;
const answer = (value: number | string) => String(value).replace(".", ",");

function item(id: string, promptFr: string, value: number | string, type: MathExerciseItem["type"] = "number"): MathExerciseItem {
  const normalized = String(value);
  const variants = new Set([normalized, normalized.replace(/−/g, "-")]);
  if (normalized.includes(".")) variants.add(normalized.replace(".", ","));
  const acceptable = [...variants];
  return { id, promptFr, type, acceptable };
}

function expression(a: number, variable: string, b = 0) {
  return `${a === 1 ? "" : a}${variable}${b === 0 ? "" : ` ${signed(b)}`}`;
}

function generateOne(lessonId: string, id: string): MathExerciseItem {
  const variable = pick(["x", "a", "n", "y"] as const);
  const x = ri(-9, 12);
  const a = ri(2, 9);
  const b = ri(-12, 12);

  switch (lessonId) {
    case "A6-4": {
      if (Math.random() < 0.5) {
        const percent = pick([5, 10, 15, 20, 25, 30, 40, 50]);
        const base = ri(4, 80) * 10;
        const result = base * (100 - percent) / 100;
        return item(id, `Un article coûte ${base} CHF avec une réduction de ${percent} %. Quel est son prix final ?`, result);
      }
      const total = ri(4, 20) * 5;
      const percent = pick([20, 25, 40, 50, 60, 75, 80]);
      const part = total * percent / 100;
      return item(id, `${answer(part)} réussites sur ${total} correspondent à quel taux de réussite ?`, percent, "short_text");
    }
    case "A6-5": {
      const mode = ri(0, 3);
      const percent = pick([5, 10, 15, 20, 25, 30, 40, 50]);
      const base = ri(4, 80) * 10;
      if (mode === 0) return item(id, `Calculez ${percent} % de ${base}.`, base * percent / 100);
      if (mode === 1) {
        const total = ri(4, 20) * 5;
        const part = total * percent / 100;
        return item(id, `${answer(part)} personnes sur ${total} représentent quel pourcentage ?`, percent, "short_text");
      }
      const factor = mode === 2 ? 1 + percent / 100 : 1 - percent / 100;
      return item(id, `Une valeur de ${base} est ${mode === 2 ? "augmentée" : "réduite"} de ${percent} %. Quelle est la nouvelle valeur ?`, base * factor);
    }
    case "A7-5": {
      const value = Math.random() < 0.7 ? -ri(1, 100) : ri(1, 100);
      return item(id, `Calculez |${value}|.`, Math.abs(value));
    }
    case "A9-1":
    case "A9-3": {
      const result = a * x + b;
      return item(id, `Calculez ${expression(a, variable, b)} pour ${variable} = ${x}.`, result);
    }
    case "A9-2": {
      const mode = ri(0, 2);
      if (mode === 0) return item(id, `Dans ${expression(a, variable, b || 3)}, quel est le coefficient de ${variable} ?`, a);
      if (mode === 1) return item(id, `Dans ${expression(a, variable, b || 4)}, quelle est la constante ?`, b || 4);
      const c = ri(2, 8);
      return item(id, `Combien de termes contient l'expression ${a}${variable}² ${signed(b || 3)}${variable} + ${c} ?`, 3);
    }
    case "A9-4": {
      const c = ri(1, 9);
      const subtract = Math.random() < 0.5 && a > c;
      const coefficient = subtract ? a - c : a + c;
      return item(id, `Réduisez ${a}${variable} ${subtract ? "−" : "+"} ${c}${variable}.`, `${coefficient}${variable}`, "short_text");
    }
    case "A9-5": {
      const inner = ri(1, 9);
      const minus = Math.random() < 0.5;
      const constant = a * inner * (minus ? -1 : 1);
      return item(id, `Développez ${a}(${variable} ${minus ? "−" : "+"} ${inner}).`, expression(a, variable, constant), "short_text");
    }
    case "A9-6": {
      const factor = ri(2, 9);
      const c = ri(1, 9);
      const minus = Math.random() < 0.5;
      return item(id, `Factorisez ${factor * a}${variable} ${minus ? "−" : "+"} ${factor * c}.`, `${factor}(${a}${variable} ${minus ? "−" : "+"} ${c})`, "short_text");
    }
    case "A10-1":
    case "A10-3": {
      const result = a * x + b;
      return item(id, `Résolvez ${expression(a, "x", b)} = ${result}.`, x);
    }
    case "A10-2":
      return item(id, `Résolvez ${a}x = ${a * x}.`, x);
    case "A10-4": {
      const inside = ri(1, 8);
      const minus = Math.random() < 0.5;
      const target = a * (x + (minus ? -inside : inside));
      return item(id, `Résolvez ${a}(x ${minus ? "−" : "+"} ${inside}) = ${target}.`, x);
    }
    case "A10-5": {
      const denominator = ri(2, 9);
      const solution = ri(-8, 12) * denominator;
      const constant = ri(-5, 8);
      const result = solution / denominator + constant;
      return item(id, `Résolvez x/${denominator} ${signed(constant)} = ${result}.`, solution);
    }
    case "A10-6": {
      const solution = ri(2, 30);
      const constant = ri(2, 15);
      return item(id, `Le ${a === 2 ? "double" : `${a} fois`} d'un nombre augmenté de ${constant} vaut ${a * solution + constant}. Quel est ce nombre ?`, solution);
    }
    case "A11-1": {
      let other = ri(-20, 20);
      while (other === x) other = ri(-20, 20);
      return item(id, `${x} □ ${other} : écrivez le bon symbole (< ou >).`, x < other ? "<" : ">", "short_text");
    }
    case "A11-2":
    case "A11-3": {
      const relation = pick(["<", ">", "≤", "≥"] as const);
      const boundary = ri(-10, 15);
      return item(id, `Résolvez ${a}x ${signed(b)} ${relation} ${a * boundary + b}. Donnez la borne.`, boundary);
    }
    case "A12-1": {
      const y = ri(-8, 10);
      const sum = x + y;
      return item(id, `Système : x + y = ${sum} et y = ${y}. Quelle est la valeur de x ?`, x);
    }
    case "A12-2": {
      const y = ri(-8, 10);
      const first = a * x + y;
      const second = a * x - y;
      return item(id, `Système : ${a}x + y = ${first} et ${a}x − y = ${second}. Quelle est la valeur de x ?`, x);
    }
    case "A12-3": {
      const first = ri(1, 20);
      const second = ri(1, 20);
      return item(id, `La somme de deux nombres est ${first + second} et leur différence est ${Math.abs(first - second)}. Quel est le plus grand nombre ?`, Math.max(first, second));
    }
    case "A13-1":
    case "A13-2":
    case "A13-3": {
      const result = a * x + b;
      const wording = lessonId === "A13-3" ? `Sur la droite f(x) = ${expression(a, "x", b)}, quelle est l'ordonnée du point d'abscisse ${x} ?` : `f(x) = ${expression(a, "x", b)}. Calculez f(${x}).`;
      return item(id, wording, result);
    }
    case "A13-4": {
      if (Math.random() < 0.25) return item(id, `f(x) = ${a}x. Quel est le coefficient directeur ?`, a);
      return item(id, `f(x) = ${a}x. Calculez f(${x}).`, a * x);
    }
    case "A13-5": {
      const askSlope = Math.random() < 0.5;
      return item(id, `f(x) = ${expression(a, "x", b)}. ${askSlope ? "Quel est le coefficient directeur ?" : "Quelle est l'ordonnée à l'origine ?"}`, askSlope ? a : b);
    }
    case "A13-6": {
      const x1 = ri(-4, 4);
      const x2 = x1 + ri(1, 5);
      const y1 = a * x1 + b;
      const y2 = a * x2 + b;
      return item(id, `Points A(${x1} ; ${y1}) et B(${x2} ; ${y2}). Calculez la pente.`, a);
    }
    case "A13-7": {
      if (Math.random() < 0.5) return item(id, `f(x) = ${expression(a, "x", b)}. Calculez f(${x}).`, a * x + b);
      const target = a * x + b;
      return item(id, `f(x) = ${expression(a, "x", b)}. Pour quelle valeur de x a-t-on f(x) = ${target} ?`, x);
    }
    default:
      return item(id, `Calculez ${a} × ${Math.abs(x)}.`, a * Math.abs(x));
  }
}

export function generateAlgebraQuestions(lessonId: string, count = 5, seedLabel = "practice"): MathExerciseItem[] {
  return Array.from({ length: count }, (_, index) => generateOne(lessonId, `${lessonId}-${seedLabel}-${index + 1}-${ri(1000, 9999)}`));
}
