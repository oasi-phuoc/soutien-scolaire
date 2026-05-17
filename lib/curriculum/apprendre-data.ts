// Apprendre (general tab) lesson content — theory + exercises.

import type { TheoryBlock, Exercise } from "./conjugation-data";

export type AprendreLesson = {
  slug: string;
  code: string;
  level: string;
  section: "A0" | "A1" | "A2" | "B1" | "B2";
  title: string;
  theory: TheoryBlock[];
  theory2?: TheoryBlock[];
  midExercises?: Exercise[];
  exercises: Exercise[];
};

// ── A0 — Se présenter ─────────────────────────────────────────────────────────

const a0SePresenter: AprendreLesson = {
  slug: "a0-se-presenter",
  code: "A.0",
  level: "A0",
  section: "A0",
  title: "Se présenter",
  theory: [
    // ── Identité ──────────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Mon identité",
    },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Comment vous appelez-vous ?", "Je m'appelle Phuoc VAN"],
        ["Quel est votre prénom ?", "Mon prénom est Phuoc"],
        ["Quel est votre nom de famille ?", "Mon nom de famille est VAN"],
      ],
    },
    {
      type: "highlight",
      label: "Attention",
      items: [
        "En français, le NOM DE FAMILLE s'écrit souvent en majuscules.",
        "Prénom : Phuoc → NOM : VAN",
      ],
    },
    // ── Âge ───────────────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Mon âge",
    },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Quel âge avez-vous ?", "J'ai 37 ans"],
        ["Quelle est votre date de naissance ?", "Je suis né le 8 octobre 1987"],
      ],
    },
    {
      type: "note",
      text: "On dit J'AI … ANS (avec le verbe avoir). On ne dit pas « J'ai 37 années ».",
    },
    // ── Nationalité ───────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Ma nationalité",
    },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Quelle est votre nationalité ?", "Je suis vietnamien / vietnamienne"],
        ["Quelle langue parlez-vous ?", "Je parle le vietnamien"],
        ["De quel pays venez-vous ?", "Je viens du Vietnam"],
      ],
    },
    // ── Domicile ──────────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Mon domicile",
    },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Où habitez-vous ?", "J'habite à Aproz"],
        ["Quelle est votre adresse ?", "L'adresse est Chemin du Carolet 14"],
        ["Quel est votre code postal ?", "Le code postal est 1994"],
      ],
    },
    // ── Profession ────────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Ma profession",
    },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Quel est votre métier ?", "Je suis enseignant / enseignante"],
        ["Où travaillez-vous ?", "Je travaille à l'école"],
      ],
    },
    // ── Loisirs ───────────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Mes loisirs",
    },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Qu'est-ce que vous aimez faire ?", "J'aime dessiner"],
      ],
    },
    // ── Famille ───────────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Ma famille",
    },
    {
      type: "grid",
      headers: ["Lien de parenté", "Phrase complète"],
      rows: [
        ["Ma femme", "Ma femme s'appelle Thuy"],
        ["Ma fille", "Ma fille s'appelle Alicia"],
        ["Mon fils", "Mon fils s'appelle Eliott"],
      ],
    },
    // ── Astuce tu/vous ────────────────────────────────────────────────────────
    {
      type: "highlight",
      label: "Astuce",
      items: [
        "Utilisez VOUS avec un adulte inconnu, un professeur ou dans une situation formelle.",
        "Utilisez TU avec un ami, un enfant ou un membre de la famille.",
      ],
    },
  ],
  exercises: [
    // ── Ex 1 ─────────────────────────────────────────────────────────────────
    {
      type: "write",
      title: "Exercice 1",
      instruction: "Complétez les phrases avec vos informations personnelles.",
      prompts: [
        "Bonjour, je m'appelle …",
        "Je suis … (nationalité).",
        "J'ai … ans.",
        "Je suis né(e) le … (date de naissance).",
        "Je viens de … (pays).",
        "Je parle le …",
        "J'habite à … (ville).",
      ],
    },
    // ── Ex 2 ─────────────────────────────────────────────────────────────────
    {
      type: "write",
      title: "Exercice 2 — Formulaire administratif",
      instruction: "Remplissez le formulaire avec vos informations.",
      prompts: [
        "Nom :",
        "Prénom :",
        "Âge :",
        "Adresse :",
        "Fait à : …                     Le : …",
      ],
    },
    // ── Ex 3 ─────────────────────────────────────────────────────────────────
    {
      type: "write",
      title: "Exercice 3 — Ma fiche d'identité",
      instruction: "Complétez votre fiche d'identité complète.",
      prompts: [
        "Nom :",
        "Prénom :",
        "Nationalité :",
        "Pays d'origine :",
        "Date de naissance :",
        "État civil :",
        "Profession :",
        "Loisirs :",
      ],
    },
    // ── Ex 4 ─────────────────────────────────────────────────────────────────
    {
      type: "match",
      title: "Exercice 4",
      instruction: "Reliez les débuts de phrases à leur fin correcte.",
      pairs: [
        { left: "Comment ça …", right: "… va ?" },
        { left: "Enchanté de …", right: "… faire ta connaissance." },
        { left: "Je viens …", right: "… de France." },
        { left: "Salut, je suis …", right: "… français." },
      ],
    },
    // ── Ex 5 ─────────────────────────────────────────────────────────────────
    {
      type: "write",
      title: "Exercice 5 — Dialogue",
      instruction: "Complétez le dialogue en répondant à la place de Karim.",
      prompts: [
        "Fatima : Salut, comment tu t'appelles ?\nKarim : …",
        "Fatima : Et toi, tu es d'où ?\nKarim : …",
        "Fatima : Tu as quel âge ?\nKarim : …",
      ],
    },
    // ── Ex 6 ─────────────────────────────────────────────────────────────────
    {
      type: "fill",
      title: "Exercice 6 — Dialogue formel",
      instruction: "Complétez le dialogue entre un élève et un professeur.",
      items: [
        { sentence: "Élève : Bonjour, comment ___ -vous ?", hint: "allez", answer: "allez" },
        { sentence: "Professeur : Très bien, merci. Et ___ ?", hint: "vous", answer: "vous" },
        { sentence: "Élève : Je ___ bien, merci.", hint: "vais", answer: "vais" },
      ],
    },
    // ── Ex 7 ─────────────────────────────────────────────────────────────────
    {
      type: "qcm",
      title: "Exercice 7",
      instruction: "Choisissez le bon mot pour compléter chaque phrase.",
      items: [
        {
          sentence: "Salut ! ___ va ?",
          choices: ["Ça", "Il", "Comment"],
          correctIdx: 0,
        },
        {
          sentence: "Comment ___ vous appelez-vous ?",
          choices: ["tu", "vous", "elle"],
          correctIdx: 1,
        },
        {
          sentence: "Enchanté de ___ connaître.",
          choices: ["ton", "te", "ta"],
          correctIdx: 1,
        },
      ],
    },
    // ── Ex 8 ─────────────────────────────────────────────────────────────────
    {
      type: "write",
      title: "Exercice 8 — Questions personnelles",
      instruction: "Répondez aux questions avec une phrase complète.",
      prompts: [
        "Comment tu t'appelles ?",
        "D'où viens-tu ?",
        "Quel âge as-tu ?",
      ],
    },
    // ── Ex 9 ─────────────────────────────────────────────────────────────────
    {
      type: "write",
      title: "Exercice 9 — Grand formulaire",
      instruction: "Remplissez ce formulaire complet avec vos informations personnelles.",
      prompts: [
        "Nom de famille :",
        "Prénom :",
        "Âge :",
        "Nationalité :",
        "Adresse :",
        "Code postal :",
        "Téléphone :",
        "Courriel :",
      ],
    },
    // ── Ex 10 ────────────────────────────────────────────────────────────────
    {
      type: "write",
      title: "Exercice 10 — Corrigez les erreurs",
      instruction: "Ces phrases contiennent des erreurs. Récrivez-les correctement.",
      prompts: [
        "Salut, j'habite de Sion. → …",
        "Je t'appelle VAN Phuoc. → …",
        "Enchanté connaître de te. → …",
        "Aujourd'hui, j'ai 19 âge. → …",
        "Je parle la français en classe. → …",
      ],
    },
    // ── Ex 11 ────────────────────────────────────────────────────────────────
    {
      type: "write",
      title: "Exercice 11 — Compréhension écrite",
      instruction:
        'Lisez le texte, puis répondez aux questions.\n\n' +
        '« Bonjour, je m\'appelle Amina. J\'ai 24 ans et je viens d\'Iran. ' +
        'Je parle persan et un peu de français. J\'ai deux sœurs et un frère. ' +
        'J\'aime lire des livres et cuisiner. Je suis professeur d\'histoire. ' +
        'J\'adore le chocolat et je n\'aime pas le café. »',
      prompts: [
        "Elle vient de quel pays ?",
        "Elle a combien de sœurs ?",
        "Quel est son métier ?",
        "Qu'est-ce qu'elle n'aime pas boire ?",
      ],
    },
  ],
};

// ── Registry ──────────────────────────────────────────────────────────────────

export const ALL_APPRENDRE_LESSONS: AprendreLesson[] = [a0SePresenter];

export function getAprendreLesson(slug: string): AprendreLesson | undefined {
  return ALL_APPRENDRE_LESSONS.find((l) => l.slug === slug);
}
