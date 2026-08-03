import type { GrammarLesson } from "../../grammar-data";
import { A1_CONJ_L00 } from "./grammaire-r1.1b";

/** G1.1 — Les pronoms sujets */
export const A1_GR_L01: GrammarLesson = {
  slug: "a1-gr-l01",
  code: "G1.1",
  level: "A1",
  title: "Les pronoms sujets",
  theory: [
    {
      type: "heading",
      text: "Pourquoi utiliser un pronom ?",
    },
    {
      type: "plain_list",
      items: [
        "Un pronom remplace une personne ou un nom pour éviter la répétition.",
      ],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "Ali parle.",
        "Ali habite en Suisse.",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "heading",
      text: "Les pronoms personnels sujets",
    },
    {
      type: "grid",
      pronounGrid: true,
      headers: ["Singulier", "Pluriel"],
      rows: [
        ["je → moi", "nous → plusieurs personnes et moi"],
        ["tu → un ami", "vous → plusieurs personnes"],
        ["il → un homme", "ils → plusieurs hommes"],
        ["elle → une femme", "elles → plusieurs femmes"],
      ],
    },
    {
      type: "heading",
      text: "Cas spéciaux",
    },
    {
      type: "highlight",
      label: "ON",
      noBulletItems: [0, 1, 2],
      inlineArrows: true,
      items: [
        "On utilise « on » pour représenter plusieurs personnes (= {a}nous{/a}). Il est très utilisé à l'{a}oral familier{/a}. Le verbe est {a}toujours au singulier{/a}.",
        "On va au magasin. → Nous allons au magasin.",
        "En Suisse, on parle français. → Les gens parlent français.",
      ],
    },
    {
      type: "highlight",
      label: "TU",
      noBulletItems: [0, 1],
      items: [
        "On utilise « tu » pour parler à une personne qu'on connaît, dans une situation familière.",
        "{a}Tu{/a} ({a}un ami{/a}) es fatiguée ?",
      ],
    },
    {
      type: "highlight",
      label: "VOUS",
      noBulletItems: [0, 1, 2],
      items: [
        "On utilise « vous » quand on ne connaît pas la personne ou que le statut est différent (élève–professeur).",
        "On appelle cela la forme de politesse.",
        "Madame, vous allez bien ?",
      ],
    },
    {
      type: "highlight",
      label: "ILS",
      noBulletItems: [0, 1, 2],
      inlineArrows: true,
      items: [
        "On utilise « ils » quand il y a un groupe mixte de femmes et d'hommes.",
        "Même s'il y a beaucoup de femmes et un seul homme.",
        "Ali ♂ et Alona ♀ → ils",
      ],
    },
    {
      type: "heading",
      text: "Comment choisir ?",
    },
    {
      type: "grid",
      headers: ["Nom", "Pronom"],
      rows: [
        ["Ali ♂", "il"],
        ["Alona ♀", "elle"],
        ["Ali ♂ et moi", "nous"],
        ["Alona ♀ et toi", "vous"],
        ["Ali ♂ et Hamed ♂", "ils"],
        ["Alona ♀ et Iryna ♀", "elles"],
        ["Ali ♂ et Alona ♀", "ils"],
      ],
    },
    {
      type: "highlight",
      label: "Astuce",
      noFirstBullet: true,
      items: [
        "Posez la question « Qui fait l'action ? », c'est le sujet de la phrase.",
      ],
    },
    {
      type: "grid",
      headers: ["Phrase", "Question", "Sujet", "Résultat"],
      rows: [
        ["Alona ♀ mange.", "Qui mange ?", "Alona", "Elle mange."],
        ["Ali ♂ et Alona ♀ jouent.", "Qui jouent ?", "Ali et Alona", "Ils jouent."],
      ],
    },
  ],
  // Exercices pronoms (anciens exercices de la leçon conjugaison / fusion actuelle)
  exercises: A1_CONJ_L00.exercises,
};
