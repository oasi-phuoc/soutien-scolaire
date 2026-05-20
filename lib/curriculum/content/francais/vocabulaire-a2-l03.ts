import type { VocabLesson } from "../../vocabulary-data";

export const A2_VOC_L03: VocabLesson = {
  slug: "a2-voc-l03",
  code: "V.15",
  level: "A2",
  title: "Le monde du travail",
  theory: [
    { type: "heading", text: "Les métiers" },
    {
      type: "vocab",
      title: "Professions courantes",
      items: [
        "un médecin / une médecin (doctor)",
        "un professeur / une professeure (teacher)",
        "un vendeur / une vendeuse (salesperson)",
        "un cuisinier / une cuisinière (cook)",
        "un informaticien / une informaticienne (IT specialist)",
        "un comptable (accountant)",
        "un avocat / une avocate (lawyer)",
        "un infirmier / une infirmière (nurse)",
        "un ingénieur / une ingénieure (engineer)",
        "un directeur / une directrice (manager)",
        "un secrétaire / une secrétaire",
        "un plombier (plumber)",
        "un électricien / une électricienne",
      ],
    },
    {
      type: "heading", text: "Les lieux de travail",
    },
    {
      type: "vocab",
      title: "Où travaille-t-on ?",
      items: [
        "une entreprise (company)",
        "un bureau (office)",
        "une usine (factory)",
        "un magasin (shop)",
        "un hôpital",
        "une école / un lycée",
        "un restaurant",
        "un chantier (construction site)",
        "à domicile / en télétravail (working from home)",
      ],
    },
    {
      type: "heading", text: "Expressions avec AVOIR",
    },
    {
      type: "rule",
      text: "Expressions idiomatiques avec AVOIR dans le monde du travail.",
      examples: [
        { correct: "Il a de la chance : il a un bon salaire." },
        { correct: "J'ai besoin de plus d'expérience." },
        { correct: "Elle a le choix entre deux offres d'emploi." },
        { correct: "Il a une bonne situation (= stable job)." },
        { correct: "Tu as de l'expérience dans ce domaine ?" },
      ],
    },
    {
      type: "heading", text: "Chercher du travail",
    },
    {
      type: "vocab",
      title: "Vocabulaire de la recherche d'emploi",
      items: [
        "un CV (curriculum vitae)",
        "une offre d'emploi (job offer)",
        "un entretien d'embauche (job interview)",
        "poser sa candidature (to apply)",
        "un employeur (employer)",
        "un employé (employee)",
        "un salaire (salary)",
        "un contrat (contract)",
        "le temps plein / le temps partiel (full-time / part-time)",
        "un stage (internship)",
        "être au chômage (to be unemployed)",
      ],
    },
    {
      type: "note",
      text: "En France, Pôle Emploi est l'agence nationale pour l'emploi (remplacée par France Travail depuis 2024).",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le métier et le lieu de travail",
      instruction: "Reliez chaque métier à son lieu de travail habituel.",
      pairs: [
        { left: "un médecin", right: "un hôpital / un cabinet" },
        { left: "un professeur", right: "une école / un lycée" },
        { left: "un cuisinier", right: "un restaurant" },
        { left: "un vendeur", right: "un magasin" },
        { left: "un comptable", right: "un bureau / une entreprise" },
        { left: "un plombier", right: "chez les clients" },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases",
      instruction: "Complétez chaque phrase avec le bon mot.",
      items: [
        { sentence: "Pour postuler, j'envoie mon ___ et une lettre de motivation.", hint: "CV", answer: "CV" },
        { sentence: "Elle a un ___ d'embauche demain pour un poste de comptable.", hint: "entretien", answer: "entretien" },
        { sentence: "Il cherche une ___ d'emploi dans le secteur informatique.", hint: "offre", answer: "offre" },
        { sentence: "Je travaille à temps ___ : 20 heures par semaine.", hint: "partiel", answer: "partiel" },
        { sentence: "J'ai ___ de prendre des vacances, je suis épuisé.", hint: "besoin", answer: "besoin" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon mot",
      instruction: "Choisissez le mot correct pour compléter la phrase.",
      items: [
        { sentence: "Elle ___ dans une grande entreprise depuis 5 ans.", choices: ["travaille", "habite", "étudie", "voyage"], correctIdx: 0 },
        { sentence: "Un ___ est un accord entre l'employeur et l'employé.", choices: ["contrat", "CV", "stage", "salaire"], correctIdx: 0 },
        { sentence: "Il n'a pas de travail en ce moment, il est au ___.", choices: ["chômage", "bureau", "stage", "congé"], correctIdx: 0 },
        { sentence: "Je ___ de la chance : j'ai trouvé un emploi rapidement.", choices: ["ai", "suis", "fais", "prends"], correctIdx: 0 },
      ],
    },
  ],
};
