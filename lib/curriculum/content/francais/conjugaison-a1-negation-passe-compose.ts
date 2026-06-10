import type { ConjLesson } from "../../conjugation-data";

export const NEGATION_PASSE_COMPOSE: ConjLesson = {
  slug: "negation-passe-compose",
  code: "G4.6",
  level: "A1",
  title: "Négation au passé composé",
  theory: [
    {
      type: "plain_list",
      items: [
        "Au passé composé, la négation encadre l'auxiliaire (avoir ou être), pas le participe passé.",
      ],
    },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["J'ai mangé", "Je n'ai pas mangé"],
        ["Tu es parti", "Tu n'es pas parti"],
        ["Elle a fini", "Elle n'a pas fini"],
        ["Nous avons vu", "Nous n'avons pas vu"],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Structure : sujet + ne + auxiliaire + pas + participe passé",
      ],
    },
    {
      type: "plain_list",
      items: [
        "Avec d'autres mots négatifs : jamais, plus, rien, personne (après le participe passé pour personne).",
      ],
    },
    {
      type: "grid",
      headers: ["Mot négatif", "Exemple"],
      rows: [
        ["jamais", "Je n'ai jamais mangé de sushi."],
        ["plus", "Il n'a plus travaillé ici."],
        ["rien", "Nous n'avons rien vu."],
        ["personne", "Elle n'a vu personne."],
      ],
    },
  ],
  exercises: [
    {
      type: "fill",
      title: "Mettez les phrases au passé composé négatif (ne … pas)",
      instruction: "Complétez avec la forme négative.",
      items: [],
      poolSize: 6,
      pool: [
        { sentence: "Il ___ (ne pas finir) ses devoirs.", hint: "ne pas finir", answer: "n'a pas fini" },
        { sentence: "Nous ___ (ne pas voir) ce film.", hint: "ne pas voir", answer: "n'avons pas vu" },
        { sentence: "Elle ___ (ne pas aller) à la fête.", hint: "ne pas aller", answer: "n'est pas allée" },
        { sentence: "Tu ___ (ne pas manger) ce matin.", hint: "ne pas manger", answer: "n'as pas mangé" },
        { sentence: "Ils ___ (ne pas venir) hier.", hint: "ne pas venir", answer: "ne sont pas venus" },
        { sentence: "Je ___ (ne pas comprendre) la leçon.", hint: "ne pas comprendre", answer: "n'ai pas compris" },
        { sentence: "Vous ___ (ne pas partir) à l'heure.", hint: "ne pas partir", answer: "n'êtes pas partis" },
        { sentence: "Elle ___ (ne pas lire) ce livre.", hint: "ne pas lire", answer: "n'a pas lu" },
        { sentence: "Nous ___ (ne pas dormir) bien.", hint: "ne pas dormir", answer: "n'avons pas dormi" },
        { sentence: "Il ___ (ne pas répondre) au message.", hint: "ne pas répondre", answer: "n'a pas répondu" },
        { sentence: "Tu ___ (ne pas prendre) ton sac.", hint: "ne pas prendre", answer: "n'as pas pris" },
        { sentence: "Je ___ (ne pas rester) longtemps.", hint: "ne pas rester", answer: "ne suis pas resté" },
        { sentence: "Vous ___ (ne pas écrire) la lettre.", hint: "ne pas écrire", answer: "n'avez pas écrit" },
      ],
    },
    {
      type: "fill",
      title: "Transformez avec le mot négatif indiqué",
      instruction: "Complétez avec la forme négative indiquée.",
      items: [],
      poolSize: 6,
      pool: [
        { sentence: "Je ___ (ne jamais visiter) Paris.", hint: "ne jamais visiter", answer: "n'ai jamais visité" },
        { sentence: "Il ___ (ne plus travailler) ici.", hint: "ne plus travailler", answer: "n'a plus travaillé" },
        { sentence: "Nous ___ (ne rien comprendre) à l'examen.", hint: "ne rien comprendre", answer: "n'avons rien compris" },
        { sentence: "Elle ___ (ne jamais goûter) ce plat.", hint: "ne jamais goûter", answer: "n'a jamais goûté" },
        { sentence: "Tu ___ (ne plus sortir) le soir.", hint: "ne plus sortir", answer: "n'es plus sorti" },
        { sentence: "Ils ___ (ne rien dire) pendant la réunion.", hint: "ne rien dire", answer: "n'ont rien dit" },
        { sentence: "Je ___ (ne jamais perdre) mes clés.", hint: "ne jamais perdre", answer: "n'ai jamais perdu" },
        { sentence: "Elle ___ (ne plus entendre) cette chanson.", hint: "ne plus entendre", answer: "n'a plus entendu" },
        { sentence: "Vous ___ (ne rien faire) hier.", hint: "ne rien faire", answer: "n'avez rien fait" },
        { sentence: "Il ___ (ne jamais boire) de café.", hint: "ne jamais boire", answer: "n'a jamais bu" },
        { sentence: "Nous ___ (ne plus vivre) en France.", hint: "ne plus vivre", answer: "n'avons plus vécu" },
      ],
    },
    {
      type: "fill",
      title: "Répondez à la question à la forme négative",
      instruction: "Répondez négativement à la question.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "— Tu as vu Marie hier ? — Non, je ___ (ne pas voir).", hint: "ne pas voir", answer: "ne l'ai pas vue" },
        { sentence: "— Vous êtes allés au marché ? — Non, nous ___ (ne pas aller).", hint: "ne pas aller", answer: "n'y sommes pas allés" },
        { sentence: "— Il a fini le projet ? — Non, il ___ (ne pas finir).", hint: "ne pas finir", answer: "ne l'a pas fini" },
        { sentence: "— Tu as mangé ce matin ? — Non, je ___ (ne rien manger).", hint: "ne rien manger", answer: "n'ai rien mangé" },
        { sentence: "— Elle est venue à la fête ? — Non, elle ___ (ne pas venir).", hint: "ne pas venir", answer: "n'est pas venue" },
        { sentence: "— Ils ont compris la leçon ? — Non, ils ___ (ne rien comprendre).", hint: "ne rien comprendre", answer: "n'ont rien compris" },
        { sentence: "— Tu as voyagé en train ? — Non, je ___ (ne jamais voyager).", hint: "ne jamais voyager", answer: "n'ai jamais voyagé" },
        { sentence: "— Vous avez rencontré quelqu'un ? — Non, nous ___ (ne voir personne).", hint: "ne voir personne", answer: "n'avons vu personne" },
      ],
    },
  ],
};
