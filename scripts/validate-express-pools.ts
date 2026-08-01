/**
 * Valide les pools de questions d'écoute Expression orale (E1–E14).
 * Usage : npx tsx scripts/validate-express-pools.ts [--lesson E5-2]
 *
 * Règles :
 * - pool ≥ 4 questions, textQ uniques
 * - ≥ 1 question illustrable (QCM image), ≥ 1 vrai/faux, ≥ 1 saisie
 * - le tirage produit 2 QCM texte + 1 image (si dispo) + 1 VF + 1 saisie
 */
import { EXPRESS_ORAL_BY_ID } from "../lib/curriculum/content/communication/express-index";
import {
  buildExpressListeningTasks,
  type ExpressMultiQuestion,
} from "../lib/curriculum/content/communication/express-listening-helpers";
import { ceCoImageSource } from "../lib/curriculum/word-image-resolver";

const onlyLesson = process.argv.includes("--lesson")
  ? process.argv[process.argv.indexOf("--lesson") + 1]
  : null;

let errors = 0;
let warnings = 0;

function err(ctx: string, msg: string) {
  errors++;
  console.log(`ERREUR  ${ctx} — ${msg}`);
}
function warn(ctx: string, msg: string) {
  warnings++;
  console.log(`avert.  ${ctx} — ${msg}`);
}

function norm(s: string): string {
  return s.trim().toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
}

function isImageable(q: ExpressMultiQuestion): boolean {
  return (
    q.imageChoices.length === 3 &&
    q.imageChoices.every((c) => !!ceCoImageSource(c.image, c.label))
  );
}

for (const [lessonId, lesson] of Object.entries(EXPRESS_ORAL_BY_ID)) {
  if (onlyLesson && lessonId !== onlyLesson) continue;
  const exs = [...(lesson.exercises ?? []), ...(lesson.evalExercises ?? [])];
  for (const ex of exs) {
    if (ex.type !== "listening" || !ex.questionPool) continue;
    const ctx = `${lessonId}/${ex.id}`;
    const pool = ex.questionPool;

    if (pool.length < 4) err(ctx, `pool trop petit (${pool.length} < 4)`);

    const seen = new Map<string, string>();
    for (const q of pool) {
      const key = norm(q.textQ);
      if (seen.has(key)) err(ctx, `textQ dupliqué : « ${q.textQ} » (${seen.get(key)} / ${q.id})`);
      seen.set(key, q.id);

      if (new Set(q.textChoices.map(norm)).size !== 3) {
        err(ctx, `${q.id} : choix texte non distincts (${q.textChoices.join(" / ")})`);
      }
      if (q.textCorrect < 0 || q.textCorrect > 2) err(ctx, `${q.id} : textCorrect invalide`);
      if (!q.textQ.trim().endsWith("?")) warn(ctx, `${q.id} : textQ sans « ? » (${q.textQ})`);
      if (/quel nom entendez|est en français|réplique est-elle/i.test(q.textQ)) {
        err(ctx, `${q.id} : question générique interdite (${q.textQ})`);
      }
      if (q.vfQ) {
        if (q.vfQ.trim().endsWith("?")) err(ctx, `${q.id} : vfQ est une question (${q.vfQ})`);
        if (typeof q.vfCorrect !== "number") err(ctx, `${q.id} : vfQ sans vfCorrect`);
      }
      if (q.fillQ && !q.fillQ.includes("___")) {
        err(ctx, `${q.id} : fillQ sans trou « ___ » (${q.fillQ})`);
      }
      if (q.fillQ && !q.fillAnswer) err(ctx, `${q.id} : fillQ sans réponse`);
      if (q.fillAnswer && q.fillAnswer.length > 30) {
        warn(ctx, `${q.id} : réponse saisie longue (${q.fillAnswer})`);
      }
    }

    const imageable = pool.filter(isImageable).length;
    const vfCount = pool.filter((q) => q.vfQ && typeof q.vfCorrect === "number").length;
    const fillCount = pool.filter((q) => q.fillQ?.includes("___") && q.fillAnswer).length;
    if (vfCount === 0) err(ctx, "aucune question vrai/faux");
    if (fillCount === 0) err(ctx, "aucune question à saisir");
    if (imageable === 0) warn(ctx, "aucune question illustrable (QCM image)");

    // Composition du tirage
    const tasks = buildExpressListeningTasks(pool, ex.questionCount ?? 5, "validate-seed");
    const stats = { text: 0, image: 0, vf: 0, fill: 0 };
    for (const t of tasks) {
      if (t.kind === "fill") stats.fill++;
      else if (t.image) stats.image++;
      else if (t.choices.length === 3 && t.choices[0]!.label === "Vrai") stats.vf++;
      else stats.text++;
    }
    const expectTotal = imageable > 0 ? 5 : 4;
    if (pool.length >= expectTotal && tasks.length !== expectTotal) {
      err(ctx, `tirage ${tasks.length} tâches (attendu ${expectTotal}) — ${JSON.stringify(stats)}`);
    }
    if (pool.length >= expectTotal) {
      if (stats.text < 2) err(ctx, `tirage : ${stats.text} QCM texte (attendu 2) — ${JSON.stringify(stats)}`);
      if (stats.vf !== 1) err(ctx, `tirage : ${stats.vf} vrai/faux (attendu 1)`);
      if (stats.fill !== 1) err(ctx, `tirage : ${stats.fill} saisie (attendu 1)`);
      if (imageable > 0 && stats.image !== 1) err(ctx, `tirage : ${stats.image} QCM image (attendu 1)`);
    }
  }
}

console.log(`\n${errors} erreur(s), ${warnings} avertissement(s)`);
process.exit(errors > 0 ? 1 : 0);
