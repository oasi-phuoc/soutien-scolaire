import type { PlacementLevel } from "./types";

export type FrenchTrainingElements = {
  grammaire: string[];
  conjugaison: string[];
  vocabulaire: string[];
};

/** Résumé des acquis attendus par niveau d'entraînement (A1 / A2 / B1). */
export const FRENCH_TRAINING_ELEMENTS: Record<PlacementLevel, FrenchTrainingElements> = {
  base: {
    grammaire: [
      "Articles définis et indéfinis (le, la, les / un, une, des)",
      "Genre des noms et accord des adjectifs (masculin / féminin)",
      "Structure de la phrase : sujet + verbe + complément",
      "Négation avec ne…pas",
      "C'est, ce sont, il est, ils sont",
      "Questions simples (est-ce que, intonation, qui, quoi, où, quand, comment)",
      "Adjectifs possessifs (mon, ton, son…) et démonstratifs (ce, cette, ces)",
      "Articles et expressions partitives (du, de la, un peu de, beaucoup de)",
      "Prépositions de lieu (dans, sur, à côté de, en face de…)",
    ],
    conjugaison: [
      "Pronoms sujets : je, tu, il/elle, nous, vous, ils/elles",
      "Être et avoir au présent",
      "Verbes en -er au présent (parler, habiter, aimer…)",
      "Verbes de mouvement (aller, venir, partir, arriver…)",
      "Verbes pronominaux courants (se lever, s'appeler, se coucher)",
      "Verbes modaux : pouvoir, vouloir, devoir, falloir",
      "Futur proche : aller + infinitif",
    ],
    vocabulaire: [
      "Identité : salutations, nationalités, famille, descriptions simples",
      "Temps : jours, mois, dates, heure, saisons et météo",
      "Logement : pièces, meubles, problèmes du quotidien",
      "École : matières, matériel scolaire, consignes",
      "Vêtements, couleurs et accessoires",
      "Nourriture : fruits, légumes, quantités, restaurant de base",
      "Santé : parties du corps, symptômes simples, pharmacie",
      "Ville et déplacements : transports, directions, lieux publics",
    ],
  },
  moyen: {
    grammaire: [
      "Passé composé avec avoir et avec être (accord du participe passé)",
      "Imparfait : description, habitude et contexte",
      "Passé composé ou imparfait ? (événement / description)",
      "Futur simple et futur proche : choisir selon le contexte",
      "Comparatif et superlatif (plus, moins, aussi… que ; le meilleur)",
      "Pronoms relatifs qui et que",
      "Pronoms COD et COI (le, la, les, lui, leur)",
      "Pronoms y et en",
      "Marqueurs de temps (hier, demain, depuis, pendant, il y a…)",
      "Cause et conséquence (parce que, donc, grâce à, à cause de)",
      "Négation élargie (ne…jamais, ne…rien, ne…personne)",
    ],
    conjugaison: [
      "Verbes irréguliers fréquents au présent (faire, prendre, savoir, connaître…)",
      "Verbes en -ir (finir, choisir) et formes du 3ᵉ groupe (partir, venir)",
      "Passé composé : participes réguliers et irréguliers",
      "Imparfait des verbes réguliers et irréguliers (être, avoir…)",
      "Futur simple : réguliers et bases irrégulières essentielles",
      "Conditionnel de politesse (je voudrais, pourriez-vous…)",
      "Impératif (tu, nous, vous) et consignes",
      "Passé récent : venir de + infinitif",
    ],
    vocabulaire: [
      "Vie quotidienne : courses, transports, logement, démarches administratives",
      "Vie sociale : invitations, réseaux, événements, associations",
      "Loisirs et vacances : gastronomie, activités, tourisme",
      "Santé et bien-être : alimentation, sport, comparaison ville / campagne",
      "Études et travail : formation, recherche d'emploi, entretien, entreprise",
      "Services et voyages : gare, aéroport, hôtel, restaurant",
      "Médias et actualité : presse, radio, Internet",
    ],
  },
  avance: {
    grammaire: [
      "Conditionnel présent et passé (hypothèses, regrets, politesse)",
      "Subjonctif après il faut que, vouloir que, bien que…",
      "Gérondif : en + participe présent (simultanéité, manière)",
      "Discours indirect et reprise des temps",
      "Voix passive et formulations impersonnelles (il est dit que…)",
      "Connecteurs d'argumentation (certes, toutefois, en revanche, néanmoins)",
      "Exprimer l'opinion, la concession et la nuance",
      "Structure introduction – développement – conclusion",
      "Rédaction de courriers formels (objet, formules, registre)",
    ],
    conjugaison: [
      "Maîtrise des temps du récit : passé composé, imparfait, plus-que-parfait",
      "Futur simple et conditionnel dans les hypothèses (si + imparfait → conditionnel)",
      "Subjonctif présent : formation et emplois fréquents",
      "Concordance des temps dans le discours rapporté",
      "Impératif avec pronoms compléments",
      "Formes composées utiles à l'argumentation (avoir dû, venir de, être en train de)",
    ],
    vocabulaire: [
      "Monde du travail : CV, entretien, conditions de travail, formation professionnelle",
      "Santé et société : système de santé, bien-être, enjeux sociaux",
      "Environnement et citoyenneté : écologie, déchets, énergie, démocratie locale",
      "Médias et documents authentiques : presse, courriels, annonces, articles",
      "Exprimer sentiments, opinions et arguments avec précision",
      "Champ lexical de la réclamation, la proposition et la négociation",
      "Vocabulaire de l'actualité et des projets personnels ou professionnels",
    ],
  },
};
