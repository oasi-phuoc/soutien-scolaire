/**
 * Valide les pools de questions d'écoute Expression orale (E1–E14).
 * Usage : npx tsx scripts/validate-express-pools.ts [--lesson E5-2]
 *
 * Règles :
 * - pool ≥ 3 questions (CO), textQ uniques
 * - ≥ 1 vrai/faux, ≥ 1 saisie (1 mot), QCM image si illustrable
 * - le tirage CO produit 3 questions : ≥1 QCM texte + ≥1 saisie,
 *   ≤1 image, ≤1 VF ; formats distincts autant que possible
 */
import { EXPRESS_ORAL_BY_ID } from "../lib/curriculum/content/communication/express-index";
import {
  buildExpressListeningTasks,
  type ExpressMultiQuestion,
} from "../lib/curriculum/content/communication/express-listening-helpers";
import {
  lessonCeEmailPool,
  lessonCePool,
} from "../lib/curriculum/content/communication/express-types";
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
  const cePool = lessonCePool(lesson);
  const ceEmailPool = lessonCeEmailPool(lesson);
  const exs = [
    ...(lesson.exercises ?? []),
    ...(lesson.evalExercises ?? []),
    ...cePool,
    ...ceEmailPool,
  ];

  // CE / PO / PE — présence et cohérence
  if (cePool.length === 0) warn(lessonId, "aucun texte CE message");
  else if (cePool.length < 20) warn(lessonId, `pool CE message : ${cePool.length} (< 20)`);
  for (const ce of cePool) {
    if (!ce.readingText?.trim()) err(`${lessonId}/${ce.id}`, "CE sans readingText");
  }
  if (ceEmailPool.length === 0) warn(lessonId, "aucun texte CE e-mail");
  else if (ceEmailPool.length < 20) warn(lessonId, `pool CE e-mail : ${ceEmailPool.length} (< 20)`);
  for (const ce of ceEmailPool) {
    if (!ce.readingText?.trim()) err(`${lessonId}/${ce.id}`, "CE e-mail sans readingText");
  }
  for (const dlg of lesson.poDialogues ?? []) {
    const studentA = dlg.lines.filter((l) => l.role === "A").length;
    const studentB = dlg.lines.filter((l) => l.role === "B").length;
    if (dlg.lines.length !== 10) {
      err(`${lessonId}/${dlg.id}`, `dialogue PO : ${dlg.lines.length} lignes (attendu 10 pour 5 répliques)`);
    }
    if (studentA !== 5 || studentB !== 5) {
      err(`${lessonId}/${dlg.id}`, `dialogue PO : A=${studentA} B=${studentB} (attendu 5/5)`);
    }
  }
  if (lesson.poDialogues && lesson.poDialogues.length < 20) {
    warn(lessonId, `pool PO : ${lesson.poDialogues.length} situations (< 20)`);
  }
  for (const p of lesson.pePrompts ?? []) {
    if (p.minWords !== 50 && p.minWords !== 80) {
      err(`${lessonId}/${p.id}`, `minWords PE = ${p.minWords} (attendu 50 A1 / 80 A2)`);
    }
    if (p.maxWords <= p.minWords) err(`${lessonId}/${p.id}`, "maxWords PE ≤ minWords");
  }
  if (lesson.pePrompts && lesson.pePrompts.length < 20) {
    warn(lessonId, `pool PE : ${lesson.pePrompts.length} consignes (< 20)`);
  }
  if (lesson.peEmailPrompts && lesson.peEmailPrompts.length < 20) {
    warn(lessonId, `pool PE e-mail : ${lesson.peEmailPrompts.length} consignes (< 20)`);
  }
  for (const p of lesson.peEmailPrompts ?? []) {
    if (!p.sourceMessage?.body?.trim()) err(`${lessonId}/${p.id}`, "PE e-mail sans sourceMessage");
  }

  for (const ex of exs) {
    if (ex.type !== "listening" || !ex.questionPool) continue;
    const ctx = `${lessonId}/${ex.id}`;
    const pool = ex.questionPool;

    if (pool.length < 3) err(ctx, `pool trop petit (${pool.length} < 3)`);

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
    const defaultCount = ex.audioSrc && !ex.readingText ? 3 : 5;
    const tasks = buildExpressListeningTasks(pool, ex.questionCount ?? defaultCount, "validate-seed");
    const stats = { text: 0, image: 0, vf: 0, fill: 0 };
    for (const t of tasks) {
      if (t.kind === "fill") stats.fill++;
      else if (t.image) stats.image++;
      else if (
        t.choices.length === 3 &&
        (
          (t.choices[0]!.label === "Oui" &&
            t.choices[1]!.label === "Non" &&
            t.choices[2]!.label === "On ne sait pas") ||
          (t.choices[0]!.label === "Vrai" &&
            t.choices[1]!.label === "Faux" &&
            t.choices[2]!.label === "On ne sait pas")
        )
      ) {
        stats.vf++;
      }
      else stats.text++;
    }
    const expectTotal = Math.min(ex.questionCount ?? defaultCount, pool.length);
    if (pool.length >= expectTotal && tasks.length !== expectTotal) {
      err(ctx, `tirage ${tasks.length} tâches (attendu ${expectTotal}) — ${JSON.stringify(stats)}`);
    }
    if (pool.length >= expectTotal) {
      if (stats.text < 1) err(ctx, `tirage : ${stats.text} QCM texte (attendu ≥1) — ${JSON.stringify(stats)}`);
      if (stats.fill !== 1) err(ctx, `tirage : ${stats.fill} saisie (attendu 1)`);
      if (stats.vf > 1) err(ctx, `tirage : ${stats.vf} vrai/faux (attendu ≤1)`);
      if (stats.image > 1) err(ctx, `tirage : ${stats.image} QCM image (attendu ≤1)`);
      if (vfCount > 0 && expectTotal >= 3 && stats.vf !== 1) {
        // Pour 3 questions : fill+text+vf (ou image) — VF attendu si présent et pas d'image prise
        // Si image a été prise à la place du VF, OK
        if (stats.vf === 0 && stats.image === 0) {
          err(ctx, `tirage : ${stats.vf} vrai/faux (attendu 1 car pool VF dispo)`);
        }
      }
      // Le QCM texte est le seul format répétable pour atteindre la cible.
      const otherUnique =
        (stats.image > 0 ? 1 : 0) + (stats.vf > 0 ? 1 : 0) + (stats.fill > 0 ? 1 : 0);
      const maxText = Math.max(1, expectTotal - otherUnique);
      if (stats.text > maxText) {
        err(ctx, `tirage : trop de QCM texte (${stats.text} > ${maxText}) — ${JSON.stringify(stats)}`);
      }
    }

    // Saisie = un seul mot — uniquement pour la CO (audio), pas la CE
    if (ex.audioSrc && !ex.readingText) {
      for (const q of pool) {
        if (!q.fillAnswer) continue;
        if (/\s/.test(q.fillAnswer.trim())) {
          err(ctx, `saisie multi-mots interdite : « ${q.fillAnswer} » (${q.id})`);
        }
        for (const a of q.fillAccept ?? []) {
          if (/\s/.test(a.trim())) {
            warn(ctx, `fillA multi-mots : « ${a} » (${q.id})`);
          }
        }
      }
    }
  }
}

console.log(`\n${errors} erreur(s), ${warnings} avertissement(s)`);
process.exit(errors > 0 ? 1 : 0);
