import type { VocabLesson } from "../../vocabulary-data";

export const A0_SE_PRESENTER: VocabLesson = {
  slug: "a0-se-presenter",
  code: "V.1",
  level: "A1",
  title: "Se présenter",
  theory: [
    { type: "heading", text: "Mon identité" },
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
    { type: "heading", text: "Mon âge" },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Quel âge avez-vous ?", "J'ai 37 ans"],
        ["Quelle est votre date de naissance ?", "Je suis né le 8 octobre 1987"],
      ],
    },
    { type: "note", text: "On dit J'AI … ANS (avec le verbe avoir). On ne dit pas « J'ai 37 années »." },
    { type: "heading", text: "Ma nationalité" },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Quelle est votre nationalité ?", "Je suis vietnamien / vietnamienne"],
        ["Quelle langue parlez-vous ?", "Je parle le vietnamien"],
        ["De quel pays venez-vous ?", "Je viens du Vietnam"],
      ],
    },
    { type: "heading", text: "Mon domicile" },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Où habitez-vous ?", "J'habite à Aproz"],
        ["Quelle est votre adresse ?", "L'adresse est Chemin du Carolet 14"],
        ["Quel est votre code postal ?", "Le code postal est 1994"],
      ],
    },
    { type: "heading", text: "Ma profession" },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Quel est votre métier ?", "Je suis enseignant / enseignante"],
        ["Où travaillez-vous ?", "Je travaille à l'école"],
      ],
    },
    { type: "heading", text: "Mes loisirs" },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [["Qu'est-ce que vous aimez faire ?", "J'aime dessiner"]],
    },
    { type: "heading", text: "Ma famille" },
    {
      type: "grid",
      headers: ["Lien de parenté", "Phrase complète"],
      rows: [
        ["Ma femme", "Ma femme s'appelle Thuy"],
        ["Ma fille", "Ma fille s'appelle Alicia"],
        ["Mon fils", "Mon fils s'appelle Eliott"],
      ],
    },
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
    {
      type: "write",
      title: "Exercice 2 — Formulaire administratif",
      instruction: "Remplissez le formulaire avec vos informations.",
      prompts: ["Nom :", "Prénom :", "Âge :", "Adresse :", "Fait à : …                     Le : …"],
    },
    {
      type: "write",
      title: "Exercice 3 — Ma fiche d'identité",
      instruction: "Complétez votre fiche d'identité complète.",
      prompts: ["Nom :", "Prénom :", "Nationalité :", "Pays d'origine :", "Date de naissance :", "État civil :", "Profession :", "Loisirs :"],
    },
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
    {
      type: "qcm",
      title: "Exercice 7",
      instruction: "Choisissez le bon mot pour compléter chaque phrase.",
      items: [
        { sentence: "Salut ! ___ va ?", choices: ["Ça", "Il", "Comment"], correctIdx: 0 },
        { sentence: "Comment ___ vous appelez-vous ?", choices: ["tu", "vous", "elle"], correctIdx: 1 },
        { sentence: "Enchanté de ___ connaître.", choices: ["ton", "te", "ta"], correctIdx: 1 },
      ],
    },
    {
      type: "write",
      title: "Exercice 8 — Questions personnelles",
      instruction: "Répondez aux questions avec une phrase complète.",
      prompts: ["Comment tu t'appelles ?", "D'où viens-tu ?", "Quel âge as-tu ?"],
    },
    {
      type: "write",
      title: "Exercice 9 — Grand formulaire",
      instruction: "Remplissez ce formulaire complet avec vos informations personnelles.",
      prompts: ["Nom de famille :", "Prénom :", "Âge :", "Nationalité :", "Adresse :", "Code postal :", "Téléphone :", "Courriel :"],
    },
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
    {
      type: "write",
      title: "Exercice 11 — Compréhension écrite",
      instruction:
        "Lisez le texte, puis répondez aux questions.\n\n" +
        "« Bonjour, je m'appelle Amina. J'ai 24 ans et je viens d'Iran. " +
        "Je parle persan et un peu de français. J'ai deux sœurs et un frère. " +
        "J'aime lire des livres et cuisiner. Je suis professeur d'histoire. " +
        "J'adore le chocolat et je n'aime pas le café. »",
      prompts: [
        "Elle vient de quel pays ?",
        "Elle a combien de sœurs ?",
        "Quel est son métier ?",
        "Qu'est-ce qu'elle n'aime pas boire ?",
      ],
    },
    {
      type: "fill",
      title: "Exercice 12 — Complétez avec les mots",
      instruction: "Complétez les phrases avec les mots : 25 ans · léo · mon numéro · quel âge · nationalité · m'appelle",
      items: [
        { sentence: "Vous avez ___ ?", hint: "quel âge", answer: "quel âge" },
        { sentence: "J'ai ___ .", hint: "25 ans", answer: "25 ans" },
        { sentence: "Enchanté, moi c'est ___ .", hint: "léo", answer: "léo" },
        { sentence: "Quelle est ta ___ ?", hint: "nationalité", answer: "nationalité" },
        { sentence: "Je ___ Nicolas.", hint: "m'appelle", answer: "m'appelle" },
        { sentence: "___ , c'est le 07 14 54 19 30.", hint: "Mon numéro", answer: "Mon numéro" },
      ],
    },
    {
      type: "write",
      title: "Exercice 13 — Dictée",
      instruction: "Écoutez votre professeur et écrivez les mots que vous entendez.",
      prompts: ["Mot 1 :", "Mot 2 :", "Mot 3 :", "Mot 4 :", "Mot 5 :"],
    },
    {
      type: "write",
      title: "Exercice 14 — Compréhension écrite",
      instruction:
        "Lisez le texte, puis répondez aux questions.\n\n" +
        "« Salut ! Je suis Farid. Je viens de Kaboul, une grande ville en Afghanistan. " +
        "J'ai 30 ans. Dans ma famille, il y a ma mère, mon père, trois frères et moi. " +
        "La musique traditionnelle afghane est ma préférée. »",
      prompts: [
        "Quel est le prénom du garçon ?",
        "Il y a combien d'enfants dans sa famille ?",
        "Il vient de quel pays ?",
        "Quel genre de musique il aime écouter ?",
      ],
    },
    {
      type: "write",
      title: "Exercice 15 — Fiche d'accueil",
      instruction:
        "Lisez la fiche et répondez aux questions.\n\n" +
        "━━━━ FICHE D'ACCUEIL ET D'ORIENTATION ━━━━\n" +
        "☐ Homme   ☑ Femme\n" +
        "Nom : BENALI         Prénom : Nadia\n" +
        "Adresse : 7, avenue des Platanes\n" +
        "          34000 Montpellier\n" +
        "Téléphone : 07 23 45 67 89\n" +
        "Âge : 31 ans\n" +
        "Nationalité : algérienne\n" +
        "Année d'arrivée en France : 2019\n" +
        "Profession : comptable\n" +
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      prompts: [
        "La personne est un homme ou une femme ?",
        "Quel est son prénom ?",
        "La personne a quel âge ?",
        "Quelle est sa nationalité ?",
        "Quelle est sa profession ?",
      ],
    },
    {
      type: "write",
      title: "Exercice 16 — Présentez une personne",
      instruction:
        "Exemple — Thomas Beaumont :\n" +
        "• Il s'appelle Thomas Beaumont.\n" +
        "• Il est suisse.\n" +
        "• Il est pompier.\n" +
        "• Il a 29 ans.\n\n" +
        "Présentez maintenant ces personnes :\n\n" +
        "1. Leila Nakbi — algérienne — dentiste — 34 ans\n" +
        "2. Marco Fontana — italien — cuisinier — 41 ans\n" +
        "3. Priya Singh — indienne — étudiante — 20 ans\n" +
        "4. Une personne de votre choix\n" +
        "5. Présentez-vous",
      prompts: ["Leila Nakbi :", "Marco Fontana :", "Priya Singh :", "Personne de mon choix :", "Moi :"],
    },
  ],
};
