import type { BrtaQuestion } from "./types";

// Banque de questions originales pour la batterie BRTA
// Chaque domaine comporte 6-8 questions variées

const reasoningQuestions: BrtaQuestion[] = [
  {
    id: "reason-001",
    domain: "reasoning",
    order: 1,
    title: "Série logique — Nombres",
    instruction: "Quel nombre devrait remplacer le ? dans la séquence suivante ?",
    options: [
      { id: "a", text: "16", isCorrect: false },
      { id: "b", text: "24", isCorrect: true },
      { id: "c", text: "28", isCorrect: false },
      { id: "d", text: "32", isCorrect: false },
    ],
  },
  {
    id: "reason-002",
    domain: "reasoning",
    order: 2,
    title: "Analogie logique",
    instruction: "Complétez : Chat est à Félin ce que Chien est à ?",
    options: [
      { id: "a", text: "Animal", isCorrect: false },
      { id: "b", text: "Canin", isCorrect: true },
      { id: "c", text: "Mammifère", isCorrect: false },
      { id: "d", text: "Quadrupède", isCorrect: false },
    ],
  },
  {
    id: "reason-003",
    domain: "reasoning",
    order: 3,
    title: "Déduction logique",
    instruction: "Tous les artistes sont des créatifs. Marie est une artiste. Donc ?",
    options: [
      { id: "a", text: "Marie est créative", isCorrect: true },
      { id: "b", text: "Tous les créatifs sont artistes", isCorrect: false },
      { id: "c", text: "Marie n'est pas créative", isCorrect: false },
      { id: "d", text: "Les créatifs aiment l'art", isCorrect: false },
    ],
  },
  {
    id: "reason-004",
    domain: "reasoning",
    order: 4,
    title: "Pattern spatial",
    instruction: "Quel motif complète logiquement cette suite ?",
    options: [
      { id: "a", text: "◆ ◇ ◆", isCorrect: false },
      { id: "b", text: "◇ ◆ ◇", isCorrect: true },
      { id: "c", text: "◆ ◆ ◇", isCorrect: false },
      { id: "d", text: "◇ ◇ ◆", isCorrect: false },
    ],
  },
  {
    id: "reason-005",
    domain: "reasoning",
    order: 5,
    title: "Relation entre concepts",
    instruction: "Lequel est le moins lié aux autres ?",
    options: [
      { id: "a", text: "Table", isCorrect: false },
      { id: "b", text: "Chaise", isCorrect: false },
      { id: "c", text: "Bureau", isCorrect: false },
      { id: "d", text: "Vent", isCorrect: true },
    ],
  },
  {
    id: "reason-006",
    domain: "reasoning",
    order: 6,
    title: "Opération logique",
    instruction: "Si A = 2, B = 4 et C = 6, alors A + B + C = ?",
    options: [
      { id: "a", text: "10", isCorrect: false },
      { id: "b", text: "12", isCorrect: true },
      { id: "c", text: "14", isCorrect: false },
      { id: "d", text: "16", isCorrect: false },
    ],
  },
  {
    id: "reason-007",
    domain: "reasoning",
    order: 7,
    title: "Séquence à compléter",
    instruction: "2, 4, 8, 16, ?",
    options: [
      { id: "a", text: "24", isCorrect: false },
      { id: "b", text: "28", isCorrect: false },
      { id: "c", text: "32", isCorrect: true },
      { id: "d", text: "40", isCorrect: false },
    ],
  },
  {
    id: "reason-008",
    domain: "reasoning",
    order: 8,
    title: "Catégorisation",
    instruction: "Lequel ne rentre pas dans la catégorie 'Fruits' ?",
    options: [
      { id: "a", text: "Pomme", isCorrect: false },
      { id: "b", text: "Banane", isCorrect: false },
      { id: "c", text: "Carotte", isCorrect: true },
      { id: "d", text: "Orange", isCorrect: false },
    ],
  },
];

const verbalQuestions: BrtaQuestion[] = [
  {
    id: "verbal-001",
    domain: "verbal",
    order: 1,
    title: "Synonyme",
    instruction: "Quel mot est le plus proche en sens de 'obtus' ?",
    options: [
      { id: "a", text: "Pointu", isCorrect: false },
      { id: "b", text: "Terne", isCorrect: true },
      { id: "c", text: "Brillant", isCorrect: false },
      { id: "d", text: "Clair", isCorrect: false },
    ],
  },
  {
    id: "verbal-002",
    domain: "verbal",
    order: 2,
    title: "Antonyme",
    instruction: "Le contraire de 'Courage' est ?",
    options: [
      { id: "a", text: "Force", isCorrect: false },
      { id: "b", text: "Timidité", isCorrect: true },
      { id: "c", text: "Joie", isCorrect: false },
      { id: "d", text: "Faiblesse", isCorrect: false },
    ],
  },
  {
    id: "verbal-003",
    domain: "verbal",
    order: 3,
    title: "Compréhension de texte",
    instruction: "L'auteur pense que la technologie est bénéfique. Vrai ou Faux ?",
    options: [
      { id: "a", text: "Vrai", isCorrect: true },
      { id: "b", text: "Faux", isCorrect: false },
      { id: "c", text: "Indéterminé", isCorrect: false },
      { id: "d", text: "Contradictoire", isCorrect: false },
    ],
  },
  {
    id: "verbal-004",
    domain: "verbal",
    order: 4,
    title: "Vocabulaire académique",
    instruction: "Que signifie 'Pragmatique' ?",
    options: [
      { id: "a", text: "Théorique", isCorrect: false },
      { id: "b", text: "Pratique et efficace", isCorrect: true },
      { id: "c", text: "Dogmatique", isCorrect: false },
      { id: "d", text: "Autoritaire", isCorrect: false },
    ],
  },
  {
    id: "verbal-005",
    domain: "verbal",
    order: 5,
    title: "Orthographe et grammaire",
    instruction: "Quelle phrase est correcte ?",
    options: [
      { id: "a", text: "Elle vont à l'école.", isCorrect: false },
      { id: "b", text: "Elles vont à l'école.", isCorrect: true },
      { id: "c", text: "Elle va à des écoles.", isCorrect: false },
      { id: "d", text: "Elles va à l'école.", isCorrect: false },
    ],
  },
  {
    id: "verbal-006",
    domain: "verbal",
    order: 6,
    title: "Expression idiomatique",
    instruction: "'Avoir un chat dans la gorge' signifie ?",
    options: [
      { id: "a", text: "Être enroué", isCorrect: true },
      { id: "b", text: "Avoir peur", isCorrect: false },
      { id: "c", text: "Être malade", isCorrect: false },
      { id: "d", text: "Avoir soif", isCorrect: false },
    ],
  },
  {
    id: "verbal-007",
    domain: "verbal",
    order: 7,
    title: "Conjugaison",
    instruction: "Conjuguez au futur : 'Je (aller) à Paris'",
    options: [
      { id: "a", text: "Je vais à Paris", isCorrect: false },
      { id: "b", text: "J'irai à Paris", isCorrect: true },
      { id: "c", text: "Je vont à Paris", isCorrect: false },
      { id: "d", text: "Je allé à Paris", isCorrect: false },
    ],
  },
  {
    id: "verbal-008",
    domain: "verbal",
    order: 8,
    title: "Compréhension d'énoncé",
    instruction: "Lequel complète logiquement : 'La faim est à l'estomac ce que... est au cœur'",
    options: [
      { id: "a", text: "La joie", isCorrect: true },
      { id: "b", text: "L'amour", isCorrect: false },
      { id: "c", text: "La peur", isCorrect: false },
      { id: "d", text: "La colère", isCorrect: false },
    ],
  },
];

const numericQuestions: BrtaQuestion[] = [
  {
    id: "numeric-001",
    domain: "numeric",
    order: 1,
    title: "Calcul simple",
    instruction: "Calculez : 25 + 17 × 2 = ?",
    options: [
      { id: "a", text: "59", isCorrect: true },
      { id: "b", text: "84", isCorrect: false },
      { id: "c", text: "42", isCorrect: false },
      { id: "d", text: "68", isCorrect: false },
    ],
  },
  {
    id: "numeric-002",
    domain: "numeric",
    order: 2,
    title: "Pourcentage",
    instruction: "Combien font 15% de 200 ?",
    options: [
      { id: "a", text: "20", isCorrect: false },
      { id: "b", text: "30", isCorrect: true },
      { id: "c", text: "40", isCorrect: false },
      { id: "d", text: "50", isCorrect: false },
    ],
  },
  {
    id: "numeric-003",
    domain: "numeric",
    order: 3,
    title: "Fractions",
    instruction: "1/2 + 1/4 = ?",
    options: [
      { id: "a", text: "1/6", isCorrect: false },
      { id: "b", text: "1/8", isCorrect: false },
      { id: "c", text: "3/4", isCorrect: true },
      { id: "d", text: "1/2", isCorrect: false },
    ],
  },
  {
    id: "numeric-004",
    domain: "numeric",
    order: 4,
    title: "Problème contextuel",
    instruction: "Un article coûte 80€. Après une réduction de 20%, quel est son nouveau prix ?",
    options: [
      { id: "a", text: "60€", isCorrect: true },
      { id: "b", text: "64€", isCorrect: false },
      { id: "c", text: "72€", isCorrect: false },
      { id: "d", text: "96€", isCorrect: false },
    ],
  },
  {
    id: "numeric-005",
    domain: "numeric",
    order: 5,
    title: "Comparaison",
    instruction: "Lequel est le plus grand : 3/5, 0.5, 55% ?",
    options: [
      { id: "a", text: "3/5", isCorrect: true },
      { id: "b", text: "0.5", isCorrect: false },
      { id: "c", text: "55%", isCorrect: false },
      { id: "d", text: "Tous égaux", isCorrect: false },
    ],
  },
  {
    id: "numeric-006",
    domain: "numeric",
    order: 6,
    title: "Moyenne",
    instruction: "Quelle est la moyenne de 10, 15, 20 ?",
    options: [
      { id: "a", text: "12", isCorrect: false },
      { id: "b", text: "15", isCorrect: true },
      { id: "c", text: "18", isCorrect: false },
      { id: "d", text: "20", isCorrect: false },
    ],
  },
  {
    id: "numeric-007",
    domain: "numeric",
    order: 7,
    title: "Rapport de proportionnalité",
    instruction: "Si 3 pommes coûtent 2€, combien coûtent 9 pommes ?",
    options: [
      { id: "a", text: "4€", isCorrect: false },
      { id: "b", text: "6€", isCorrect: true },
      { id: "c", text: "8€", isCorrect: false },
      { id: "d", text: "9€", isCorrect: false },
    ],
  },
  {
    id: "numeric-008",
    domain: "numeric",
    order: 8,
    title: "Opération mixte",
    instruction: "(12 - 4) × 2 + 8 = ?",
    options: [
      { id: "a", text: "24", isCorrect: true },
      { id: "b", text: "32", isCorrect: false },
      { id: "c", text: "28", isCorrect: false },
      { id: "d", text: "20", isCorrect: false },
    ],
  },
];

const spatialQuestions: BrtaQuestion[] = [
  {
    id: "spatial-001",
    domain: "spatial",
    order: 1,
    title: "Rotation 2D",
    instruction: "Si vous faites pivoter ce carré de 90° vers la droite, où est le point rouge ?",
    options: [
      { id: "a", text: "En haut", isCorrect: false },
      { id: "b", text: "À droite", isCorrect: true },
      { id: "c", text: "En bas", isCorrect: false },
      { id: "d", text: "À gauche", isCorrect: false },
    ],
  },
  {
    id: "spatial-002",
    domain: "spatial",
    order: 2,
    title: "Vue de profil",
    instruction: "Quel est le profil de ce cube vue de côté ?",
    options: [
      { id: "a", text: "Triangle", isCorrect: false },
      { id: "b", text: "Carré", isCorrect: true },
      { id: "c", text: "Rectangle", isCorrect: false },
      { id: "d", text: "Hexagone", isCorrect: false },
    ],
  },
  {
    id: "spatial-003",
    domain: "spatial",
    order: 3,
    title: "Assemblage 3D",
    instruction: "Ces deux pièces assemblées forment ?",
    options: [
      { id: "a", text: "Un L", isCorrect: false },
      { id: "b", text: "Un T", isCorrect: true },
      { id: "c", text: "Un U", isCorrect: false },
      { id: "d", text: "Un +", isCorrect: false },
    ],
  },
  {
    id: "spatial-004",
    domain: "spatial",
    order: 4,
    title: "Symétrie",
    instruction: "Quel est le symétrique axial (miroir) de cette forme ?",
    options: [
      { id: "a", text: "Forme A", isCorrect: true },
      { id: "b", text: "Forme B", isCorrect: false },
      { id: "c", text: "Forme C", isCorrect: false },
      { id: "d", text: "Aucune", isCorrect: false },
    ],
  },
  {
    id: "spatial-005",
    domain: "spatial",
    order: 5,
    title: "Perspective",
    instruction: "Combien de faces visibles a ce cube ?",
    options: [
      { id: "a", text: "1", isCorrect: false },
      { id: "b", text: "2", isCorrect: false },
      { id: "c", text: "3", isCorrect: true },
      { id: "d", text: "6", isCorrect: false },
    ],
  },
  {
    id: "spatial-006",
    domain: "spatial",
    order: 6,
    title: "Dépliegement (dépliage)",
    instruction: "Quel patron correspond à ce cube fermé ?",
    options: [
      { id: "a", text: "Patron A", isCorrect: true },
      { id: "b", text: "Patron B", isCorrect: false },
      { id: "c", text: "Patron C", isCorrect: false },
      { id: "d", text: "Aucun", isCorrect: false },
    ],
  },
];

const attentionQuestions: BrtaQuestion[] = [
  {
    id: "attention-001",
    domain: "attention",
    order: 1,
    title: "Détail différent",
    instruction: "Lequel est différent des trois autres ?",
    options: [
      { id: "a", text: "ABCDEF", isCorrect: false },
      { id: "b", text: "ABCDEF", isCorrect: false },
      { id: "c", text: "ABCDEP", isCorrect: true },
      { id: "d", text: "ABCDEF", isCorrect: false },
    ],
  },
  {
    id: "attention-002",
    domain: "attention",
    order: 2,
    title: "Comptage rapide",
    instruction: "Combien de fois le mot 'attention' apparaît dans ce texte ?",
    options: [
      { id: "a", text: "1", isCorrect: false },
      { id: "b", text: "2", isCorrect: true },
      { id: "c", text: "3", isCorrect: false },
      { id: "d", text: "4", isCorrect: false },
    ],
  },
  {
    id: "attention-003",
    domain: "attention",
    order: 3,
    title: "Correspondance",
    instruction: "Combien de paires de nombres identiques trouvez-vous ? 12-21, 35-53, 47-74",
    options: [
      { id: "a", text: "0", isCorrect: true },
      { id: "b", text: "1", isCorrect: false },
      { id: "c", text: "2", isCorrect: false },
      { id: "d", text: "3", isCorrect: false },
    ],
  },
  {
    id: "attention-004",
    domain: "attention",
    order: 4,
    title: "Intrus détection",
    instruction: "Lequel ne figure pas dans la liste suivante : Triangle, Carré, Cercle, Pentagon, Hexagon, Rectangle ?",
    options: [
      { id: "a", text: "Pentagon", isCorrect: true },
      { id: "b", text: "Hexagon", isCorrect: false },
      { id: "c", text: "Cercle", isCorrect: false },
      { id: "d", text: "Rectangle", isCorrect: false },
    ],
  },
  {
    id: "attention-005",
    domain: "attention",
    order: 5,
    title: "Filtrage",
    instruction: "Trouvez l'objet 'bleu' dans la liste : rouge, bleu, rouge, vert, rouge, bleu, jaune, rouge",
    options: [
      { id: "a", text: "1ère occurrence", isCorrect: false },
      { id: "b", text: "2ème occurrence", isCorrect: true },
      { id: "c", text: "Aucun bleu", isCorrect: false },
      { id: "d", text: "Plusieurs", isCorrect: false },
    ],
  },
  {
    id: "attention-006",
    domain: "attention",
    order: 6,
    title: "Code caché",
    instruction: "Quel est le code secret ? indices : 1er chiffre = 3, 2e = ?, 3e = 7",
    options: [
      { id: "a", text: "3-2-7", isCorrect: false },
      { id: "b", text: "3-5-7", isCorrect: true },
      { id: "c", text: "3-4-7", isCorrect: false },
      { id: "d", text: "3-6-7", isCorrect: false },
    ],
  },
  {
    id: "attention-007",
    domain: "attention",
    order: 7,
    title: "Sélection visuelle",
    instruction: "Combien de lettres 'E' majuscules dans : ENERGETICME ?",
    options: [
      { id: "a", text: "1", isCorrect: false },
      { id: "b", text: "2", isCorrect: false },
      { id: "c", text: "3", isCorrect: true },
      { id: "d", text: "4", isCorrect: false },
    ],
  },
  {
    id: "attention-008",
    domain: "attention",
    order: 8,
    title: "Distraction",
    instruction: "Identifiez la forme différente : O, O, O, O, Q",
    options: [
      { id: "a", text: "1ère", isCorrect: false },
      { id: "b", text: "Dernière", isCorrect: true },
      { id: "c", text: "Aucune différence", isCorrect: false },
      { id: "d", text: "Plusieurs", isCorrect: false },
    ],
  },
];

const memoryQuestions: BrtaQuestion[] = [
  {
    id: "memory-001",
    domain: "memory",
    order: 1,
    title: "Séquence mémorisée",
    instruction: "Rappelez-vous : 7-3-9-2-1. Quel est le 3e nombre ?",
    options: [
      { id: "a", text: "3", isCorrect: false },
      { id: "b", text: "9", isCorrect: true },
      { id: "c", text: "2", isCorrect: false },
      { id: "d", text: "7", isCorrect: false },
    ],
  },
  {
    id: "memory-002",
    domain: "memory",
    order: 2,
    title: "Reproduction d'ordre",
    instruction: "Quelle était la séquence exacte ? (Matin, Soir, Nuit, Jour)",
    options: [
      { id: "a", text: "Matin, Soir, Nuit, Jour", isCorrect: true },
      { id: "b", text: "Jour, Matin, Soir, Nuit", isCorrect: false },
      { id: "c", text: "Nuit, Jour, Matin, Soir", isCorrect: false },
      { id: "d", text: "Soir, Nuit, Jour, Matin", isCorrect: false },
    ],
  },
  {
    id: "memory-003",
    domain: "memory",
    order: 3,
    title: "Information retenue",
    instruction: "Combien d'éléments vous ont été présentés précédemment ?",
    options: [
      { id: "a", text: "4", isCorrect: true },
      { id: "b", text: "5", isCorrect: false },
      { id: "c", text: "3", isCorrect: false },
      { id: "d", text: "6", isCorrect: false },
    ],
  },
  {
    id: "memory-004",
    domain: "memory",
    order: 4,
    title: "Détail mémorisé",
    instruction: "Quel mot était en 2e position ? (Chat, Souris, Fromage, Piège)",
    options: [
      { id: "a", text: "Chat", isCorrect: false },
      { id: "b", text: "Souris", isCorrect: true },
      { id: "c", text: "Fromage", isCorrect: false },
      { id: "d", text: "Piège", isCorrect: false },
    ],
  },
  {
    id: "memory-005",
    domain: "memory",
    order: 5,
    title: "Reconstruction",
    instruction: "Reconstituez la phrase : était - jour - un - beau - c'",
    options: [
      { id: "a", text: "C'était un beau jour", isCorrect: true },
      { id: "b", text: "Était un beau jour c'", isCorrect: false },
      { id: "c", text: "Un jour beau était c'", isCorrect: false },
      { id: "d", text: "C'était jour beau un", isCorrect: false },
    ],
  },
  {
    id: "memory-006",
    domain: "memory",
    order: 6,
    title: "Mémorisation spatiale",
    instruction: "Où était l'élément clé ? (Haut-gauche, Bas-droite, Centre, Haut-droite)",
    options: [
      { id: "a", text: "Haut-gauche", isCorrect: false },
      { id: "b", text: "Centre", isCorrect: true },
      { id: "c", text: "Bas-droite", isCorrect: false },
      { id: "d", text: "Haut-droite", isCorrect: false },
    ],
  },
  {
    id: "memory-007",
    domain: "memory",
    order: 7,
    title: "Rappel d'info",
    instruction: "Quel chiffre n'était pas dans la liste précédente ?",
    options: [
      { id: "a", text: "5", isCorrect: false },
      { id: "b", text: "8", isCorrect: true },
      { id: "c", text: "2", isCorrect: false },
      { id: "d", text: "3", isCorrect: false },
    ],
  },
  {
    id: "memory-008",
    domain: "memory",
    order: 8,
    title: "Rétention complexe",
    instruction: "Quelle était la couleur du 3e objet ? (Rouge, Bleu, Vert, Jaune, Orange)",
    options: [
      { id: "a", text: "Bleu", isCorrect: false },
      { id: "b", text: "Vert", isCorrect: true },
      { id: "c", text: "Jaune", isCorrect: false },
      { id: "d", text: "Orange", isCorrect: false },
    ],
  },
];

export function getQuestionsByDomain(domain: string): BrtaQuestion[] {
  switch (domain) {
    case "reasoning":
      return reasoningQuestions;
    case "verbal":
      return verbalQuestions;
    case "numeric":
      return numericQuestions;
    case "spatial":
      return spatialQuestions;
    case "attention":
      return attentionQuestions;
    case "memory":
      return memoryQuestions;
    default:
      return [];
  }
}

export function getAllQuestions(): BrtaQuestion[] {
  return [
    ...reasoningQuestions,
    ...verbalQuestions,
    ...numericQuestions,
    ...spatialQuestions,
    ...attentionQuestions,
    ...memoryQuestions,
  ];
}
