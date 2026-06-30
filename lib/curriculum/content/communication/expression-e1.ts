import type { CommunicationLesson } from "./communication-p1-1";

export const EXPRESSION_E1_1: CommunicationLesson = {
  id: "PE-1",
  code: "PE.1",
  title: "Base",
  theory: [
    { type: "heading", text: "Rédiger un texte simple et clair" },
    { type: "plain", text: "Avant d'écrire, il faut se poser trois questions essentielles." },
    {
      type: "numbered",
      items: [
        "À qui est-ce que j'écris ?",
        "Pourquoi est-ce que j'écris ?",
        "Quelles informations dois-je donner ?",
      ],
    },
    { type: "heading", text: "Ce qu'il faut faire" },
    { type: "highlight", title: "1. Comprendre", items: ["Lire la consigne deux fois et entourer les mots importants."] },
    { type: "highlight", title: "2. Préparer", items: ["Noter les idées principales avec des mots-clés."] },
    { type: "highlight", title: "3. Organiser", items: ["Mettre les idées dans un ordre logique."] },
    { type: "highlight", title: "4. Rédiger", items: ["Écrire des phrases courtes avec un sujet et un verbe."] },
    { type: "highlight", title: "5. Relire", items: ["Vérifier les majuscules, les points et les mots oubliés."] },
    { type: "heading", text: "Construire le texte" },
    { type: "highlight", title: "1. Au début", items: ["Saluer et annoncer le sujet."] },
    { type: "section", text: "Bonjour Sara, je t'écris pour t'inviter." },
    { type: "highlight", title: "2. Au milieu", items: ["Donner les informations utiles."] },
    { type: "section", text: "La fête est samedi à 15 heures chez moi." },
    { type: "highlight", title: "3. À la fin", items: ["Terminer et saluer."] },
    { type: "section", text: "J'espère que tu peux venir. À bientôt !" },
    {
      type: "highlight",
      title: "Éléments à connaître",
      items: [
        "Écrire entre 30 et 40 mots.",
        "Utiliser surtout le présent et le futur proche.",
        "Relier les idées avec et, mais, parce que, puis et ensuite.",
        "Utiliser une majuscule au début et un point à la fin de chaque phrase.",
      ],
    },
    {
      type: "note",
      text: "À éviter : traduire mot à mot, écrire une seule phrase très longue, oublier la consigne ou utiliser des mots dont on ne connaît pas le sens.",
    },
    { type: "heading", text: "Exemple complet" },
    {
      type: "highlight",
      title: "Inviter une amie",
      items: [
        "Bonjour Lina,",
        "Je t'écris pour t'inviter à mon anniversaire. La fête est samedi prochain à 15 heures chez moi. Nous allons manger un gâteau et écouter de la musique. Tu peux venir avec ta sœur.",
        "J'espère que tu seras là. À bientôt !",
        "Nadia",
      ],
    },
  ],
  exercises: [],
  writingLevel: "base",
};

export const EXPRESSION_E1_2: CommunicationLesson = {
  id: "PE-2",
  code: "PE.2",
  title: "Moyen",
  theory: [
    { type: "heading", text: "Développer et organiser ses idées" },
    { type: "subheading", text: "Préparer un plan" },
    {
      type: "table",
      headers: ["Partie", "Question à se poser"],
      rows: [
        ["Introduction", "Quel est le sujet et pourquoi est-il important ?"],
        ["Développement", "Quels faits, détails ou exemples expliquent mon idée ?"],
        ["Conclusion", "Quel est mon bilan, mon avis ou ma demande ?"],
      ],
    },
    {
      type: "highlight",
      title: "Éléments à connaître",
      items: [
        "Écrire entre 60 et 80 mots en plusieurs paragraphes.",
        "Raconter avec le passé composé et décrire avec l'imparfait.",
        "Parler d'un projet avec le futur proche ou le futur simple.",
        "Exprimer son opinion avec à mon avis, je pense que, selon moi.",
        "Organiser avec d'abord, ensuite, puis, enfin, cependant et donc.",
      ],
    },
    { type: "subheading", text: "Rendre le texte cohérent" },
    {
      type: "table",
      headers: ["Besoin", "Connecteurs utiles"],
      rows: [
        ["Ajouter", "de plus, aussi, également"],
        ["Expliquer", "parce que, car, en effet"],
        ["Opposer", "mais, pourtant, cependant"],
        ["Conclure", "donc, finalement, pour conclure"],
      ],
    },
    {
      type: "note",
      text: "À éviter : répéter toujours le même mot, changer de temps sans raison, mélanger le registre formel et familier ou ajouter des informations hors sujet.",
    },
    { type: "heading", text: "Exemple complet" },
    {
      type: "highlight",
      title: "Raconter une sortie",
      items: [
        "Samedi dernier, je suis allé au musée avec ma classe. Au début, je pensais que la visite serait ennuyeuse, mais le guide était très intéressant.",
        "D'abord, nous avons découvert une exposition sur l'histoire de la ville. Ensuite, nous avons participé à un atelier. Pendant que le guide expliquait une ancienne technique, nous dessinions notre propre affiche.",
        "Finalement, j'ai beaucoup apprécié cette sortie parce que j'ai appris de nouvelles choses. À mon avis, notre classe devrait visiter plus souvent des lieux culturels.",
      ],
    },
  ],
  exercises: [],
  writingLevel: "moyen",
};

export const EXPRESSION_E1_3: CommunicationLesson = {
  id: "PE-3",
  code: "PE.3",
  title: "Avancé",
  theory: [
    { type: "heading", text: "Construire un texte développé et convaincant" },
    { type: "subheading", text: "Définir une intention précise" },
    {
      type: "highlight",
      title: "Objectifs possibles",
      items: [
        "Informer avec des faits exacts et bien organisés.",
        "Raconter en donnant un contexte, des événements et un bilan.",
        "Argumenter avec une opinion, des raisons et des exemples.",
        "Convaincre en tenant compte du lecteur et des objections possibles.",
      ],
    },
    {
      type: "table",
      headers: ["Partie", "Fonction"],
      rows: [
        ["Introduction", "Présenter le thème, le contexte et la question principale."],
        ["Argument 1", "Annoncer une idée, l'expliquer et donner un exemple précis."],
        ["Argument 2", "Ajouter ou nuancer avec un nouveau point de vue."],
        ["Conclusion", "Résumer sans répéter et proposer une ouverture ou une solution."],
      ],
    },
    {
      type: "highlight",
      title: "Éléments à connaître",
      items: [
        "Écrire entre 120 et 150 mots avec des paragraphes équilibrés.",
        "Varier les phrases simples et complexes.",
        "Nuancer avec certes, toutefois, en revanche, même si et bien que.",
        "Exprimer la cause et la conséquence avec puisque, grâce à, à cause de, par conséquent.",
        "Choisir un registre cohérent et reprendre les idées avec des pronoms ou des synonymes.",
      ],
    },
    { type: "subheading", text: "Relire efficacement" },
    {
      type: "table",
      headers: ["Lecture", "Vérification"],
      rows: [
        ["1. Le contenu", "Ai-je répondu à toutes les parties de la consigne ?"],
        ["2. L'organisation", "Chaque paragraphe développe-t-il une seule idée principale ?"],
        ["3. La langue", "Les accords, les temps, les pronoms et les prépositions sont-ils corrects ?"],
        ["4. Le style", "Puis-je supprimer une répétition ou remplacer un mot imprécis ?"],
      ],
    },
    {
      type: "note",
      text: "À éviter : accumuler des idées sans exemple, employer des connecteurs au hasard, écrire des phrases trop longues ou introduire une nouvelle idée importante dans la conclusion.",
    },
    { type: "heading", text: "Exemple complet" },
    {
      type: "highlight",
      title: "Faut-il limiter l'usage du téléphone à l'école ?",
      items: [
        "Le téléphone portable est devenu un outil quotidien. Pourtant, son utilisation à l'école fait débat, car il peut être utile tout en perturbant les apprentissages.",
        "D'une part, le téléphone permet de rechercher rapidement une information ou d'utiliser certaines applications pédagogiques. Par exemple, un élève peut consulter un dictionnaire ou enregistrer une consigne. D'autre part, les notifications détournent facilement l'attention et peuvent encourager la triche.",
        "À mon avis, une interdiction totale n'est pas nécessaire. Il serait préférable d'autoriser le téléphone uniquement lorsque l'enseignant le demande. Ainsi, les élèves apprendraient à utiliser cet outil de manière responsable sans nuire au travail de la classe.",
      ],
    },
  ],
  exercises: [],
  writingLevel: "avance",
};
