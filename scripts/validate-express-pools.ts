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
  return q.imageChoices.length === 3 && q.imageChoices.every((c) => !!c.image);
}

/** Dossier d'une image de choix (homogénéité par question). */
function imageFolder(path: string): string {
  if (path.startsWith("/assets/words/lecture/")) return "lecture";
  if (path.startsWith("/assets/expression/images/scene/")) return "scene";
  if (path.startsWith("/assets/words/vocab/")) return "vocab";
  return "autre";
}

for (const [lessonId, lesson] of Object.entries(EXPRESS_ORAL_BY_ID)) {
  if (onlyLesson && lessonId !== onlyLesson) continue;
  const exs = [
    ...(lesson.exercises ?? []),
    ...(lesson.evalExercises ?? []),
    ...(lesson.ceExercise ? [lesson.ceExercise] : []),
  ];

  // CE / PO / PE — présence et cohérence
  if (lesson.ceExercise && !lesson.ceExercise.readingText?.trim()) {
    err(lessonId, "ceExercise sans readingText");
  }
  for (const dlg of lesson.poDialogues ?? []) {
    if (dlg.lines.length < 6) warn(`${lessonId}/${dlg.id}`, `dialogue PO court (${dlg.lines.length} répliques)`);
    if (!dlg.lines.some((l) => l.role === "A") || !dlg.lines.some((l) => l.role === "B")) {
      err(`${lessonId}/${dlg.id}`, "dialogue PO sans alternance de rôles");
    }
  }
  if (lesson.poDialogues && lesson.poDialogues.length < 10) {
    warn(lessonId, `pool PO : ${lesson.poDialogues.length} situations (< 10)`);
  }
  for (const p of lesson.pePrompts ?? []) {
    if (p.minWords !== 50 && p.minWords !== 80) {
      err(`${lessonId}/${p.id}`, `minWords PE = ${p.minWords} (attendu 50 A1 / 80 A2)`);
    }
    if (p.maxWords <= p.minWords) err(`${lessonId}/${p.id}`, "maxWords PE ≤ minWords");
  }
  if (lesson.pePrompts && lesson.pePrompts.length < 10) {
    warn(lessonId, `pool PE : ${lesson.pePrompts.length} consignes (< 10)`);
  }

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

    // Homogénéité des images d'une même question (jamais vocab, jamais mélange)
    for (const q of pool) {
      const imgs = q.imageChoices.map((c) => c.image).filter(Boolean);
      if (imgs.length === 0) continue;
      const folders = new Set(imgs.map(imageFolder));
      if (folders.has("vocab")) err(ctx, `${q.id} : image du dossier vocabulaire interdite`);
      if (imgs.length === 3 && folders.size > 1) {
        err(ctx, `${q.id} : images de dossiers mélangés (${[...folders].join(", ")})`);
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
