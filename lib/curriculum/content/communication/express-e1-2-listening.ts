import { buildListeningAudio, type FixedQ } from "./express-lesson-factory";

const qs = (prefix: string, items: Omit<FixedQ, "id">[]): FixedQ[] =>
  items.map((item, i) => ({ ...item, id: `${prefix}-q${i + 1}` }));

export const E1_2_TRAINING = [
  buildListeningAudio({
    id: "e1-2-016",
    level: "A1",
    num: 16,
    transcript: `- Regarde, j'ai une photo du mariage de ma sœur !
- Le mariage de ta sœur Sonia ou de ta sœur Marie ?
- De Sonia... Marie est célibataire. Et toi, ta famille ? Tu as une sœur ou un frère ?
- Non, nous sommes trois : mon père, ma mère et moi.
- Regarde la photo, voici mes parents.
- Et lui, c'est qui ?
- C'est mon frère Simon.
- Et la petite femme blonde, c'est…
- C'est Sandra, la femme de Simon.
- Ton frère a des enfants ?
- Oui regarde, voici leurs enfants, Andréa et Lisa.
- Alors tes parents sont déjà grands-parents ?
- Oui, ce sont de jeunes grands-parents !`,
    questions: qs("016", [
      {
        format: "text",
        textQ: "De qui est le mariage sur la photo ?",
        text: ["Sonia", "Marie", "Sandra"],
        textC: 0,
      },
      {
        format: "image",
        textQ: "Qui est Sandra ?",
        text: ["La femme de Simon", "La sœur de Marie", "La mère"],
        textC: 0,
        img: ["Femme", "Homme", "Enfant"],
        imgC: 0,
      },
      {
        format: "fill",
        textQ: "Comment s'appelle le frère ?",
        text: ["Simon", "Andréa", "Lisa"],
        textC: 0,
        fillQ: "Le frère s'appelle _________.",
        fill: "Simon",
      },
      {
        format: "vf",
        textQ: "Marie est mariée.",
        text: ["Vrai", "Faux", "On ne sait pas"],
        textC: 1,
        vfQ: "Marie est mariée.",
        vfC: 1,
      },
      {
        format: "text",
        textQ: "Combien de personnes dans la famille de l'ami ?",
        text: ["Trois", "Quatre", "Cinq"],
        textC: 0,
      },
      {
        format: "fill",
        textQ: "Noms des enfants",
        text: ["Andréa et Lisa", "Sonia et Marie", "Simon et Sandra"],
        textC: 0,
        fillQ: "Les enfants s'appellent Andréa et _________.",
        fill: "Lisa",
      },
      {
        format: "vf",
        textQ: "Les parents sont grands-parents.",
        text: ["Vrai", "Faux", "On ne sait pas"],
        textC: 0,
        vfQ: "Les parents sont déjà grands-parents.",
        vfC: 0,
      },
      {
        format: "image",
        textQ: "Que regardent-ils ?",
        text: ["Une photo", "Un film", "Un livre"],
        textC: 0,
        img: ["Carte", "Téléphone", "Maison"],
        imgC: 0,
      },
    ]),
  }),
  buildListeningAudio({
    id: "e1-2-022",
    level: "A1",
    num: 22,
    transcript: `Papa, maman, voici mon ami Fabien. Il est étudiant dans mon université. Fabien, voici mes parents : Simon et Flavie. Et le grand brun là, c'est mon frère Sébastien.`,
    questions: qs("022", [
      {
        format: "text",
        textQ: "Comment s'appelle l'ami ?",
        text: ["Fabien", "Simon", "Sébastien"],
        textC: 0,
      },
      {
        format: "fill",
        textQ: "Profession de Fabien",
        text: ["étudiant", "professeur", "cuisinier"],
        textC: 0,
        fillQ: "Fabien est _________.",
        fill: "étudiant",
        fillA: ["etudiant"],
      },
      {
        format: "vf",
        textQ: "Les parents s'appellent Simon et Flavie.",
        text: ["Vrai", "Faux", "On ne sait pas"],
        textC: 0,
        vfQ: "Les parents s'appellent Simon et Flavie.",
        vfC: 0,
      },
      {
        format: "image",
        textQ: "Qui est le grand brun ?",
        text: ["Le frère Sébastien", "Fabien", "Le père"],
        textC: 0,
        img: ["Homme", "Femme", "Enfant"],
        imgC: 0,
      },
      {
        format: "text",
        textQ: "Où étudie Fabien ?",
        text: ["À l'université", "Au lycée", "À l'école"],
        textC: 0,
      },
      {
        format: "fill",
        textQ: "Prénom de la mère",
        text: ["Flavie", "Sandra", "Marie"],
        textC: 0,
        fillQ: "La mère s'appelle _________.",
        fill: "Flavie",
      },
    ]),
  }),
  buildListeningAudio({
    id: "e1-2-023",
    level: "A1",
    num: 23,
    transcript: `Regarde, voici la photo d'anniversaire de mes 18 ans ! La jeune fille blonde, c'est moi ! Et voici papa, ton papi. Le petit roux, c'est mon frère Thomas, il est veuf.`,
    questions: qs("023", [
      {
        format: "text",
        textQ: "Quel anniversaire célèbre-t-on sur la photo ?",
        text: ["18 ans", "20 ans", "30 ans"],
        textC: 0,
      },
      {
        format: "image",
        textQ: "Qui est la jeune fille blonde ?",
        text: ["La narratrice", "La mère", "Une amie"],
        textC: 0,
        img: ["Femme", "Homme", "Enfant"],
        imgC: 0,
      },
      {
        format: "fill",
        textQ: "Prénom du frère",
        text: ["Thomas", "Simon", "Fabien"],
        textC: 0,
        fillQ: "Le frère s'appelle _________.",
        fill: "Thomas",
      },
      {
        format: "vf",
        textQ: "Thomas est marié.",
        text: ["Vrai", "Faux", "On ne sait pas"],
        textC: 1,
        vfQ: "Thomas est marié.",
        vfC: 1,
      },
      {
        format: "text",
        textQ: "Comment est Thomas physiquement ?",
        text: ["Petit et roux", "Grand et brun", "Blond"],
        textC: 0,
      },
      {
        format: "vf",
        textQ: "Papa est le papi de l'interlocuteur.",
        text: ["Vrai", "Faux", "On ne sait pas"],
        textC: 0,
        vfQ: "Papa est présenté comme « ton papi ».",
        vfC: 0,
      },
    ]),
  }),
  buildListeningAudio({
    id: "e1-2-024",
    level: "A1",
    num: 24,
    transcript: `En général, les familles françaises ont un ou deux enfants. Les parents sont jeunes. Ils ont entre 30 et 35 ans et sont souvent mariés ou pacsés. Mais ils peuvent aussi être séparés ou divorcés.`,
    questions: qs("024", [
      {
        format: "text",
        textQ: "Combien d'enfants ont en général les familles françaises ?",
        text: ["Un ou deux", "Trois ou quatre", "Cinq"],
        textC: 0,
      },
      {
        format: "fill",
        textQ: "Âge des parents",
        text: ["30 et 35", "20 et 25", "40 et 45"],
        textC: 0,
        fillQ: "Les parents ont entre _________ et 35 ans.",
        fill: "30",
      },
      {
        format: "vf",
        textQ: "Les parents sont toujours mariés.",
        text: ["Vrai", "Faux", "On ne sait pas"],
        textC: 1,
        vfQ: "Les parents sont toujours mariés.",
        vfC: 1,
      },
      {
        format: "text",
        textQ: "Quels états civils sont cités ?",
        text: ["Mariés, pacsés, séparés, divorcés", "Seulement mariés", "Seulement célibataires"],
        textC: 0,
      },
      {
        format: "image",
        textQ: "De quoi parle le texte ?",
        text: ["La famille", "L'école", "Le travail"],
        textC: 0,
        img: ["Famille", "École", "Bureau"],
        imgC: 0,
      },
      {
        format: "vf",
        textQ: "Les parents sont décrits comme jeunes.",
        text: ["Vrai", "Faux", "On ne sait pas"],
        textC: 0,
        vfQ: "Les parents sont jeunes.",
        vfC: 0,
      },
    ]),
  }),
];

export const E1_2_EVAL = [
  buildListeningAudio({
    id: "e1-2-025",
    level: "A1",
    num: 25,
    transcript: `- Allô Laurie ?
- Non, je suis sa mère.
- Pardon madame, bonjour. Je suis une amie de Laurie. Je m'appelle Laura.
- Bonjour Laura. J'appelle ma fille.`,
    questions: qs("025", [
      {
        format: "text",
        textQ: "Qui répond au téléphone ?",
        text: ["La mère de Laurie", "Laurie", "Laura"],
        textC: 0,
      },
      {
        format: "fill",
        textQ: "Prénom de l'amie",
        text: ["Laura", "Laurie", "Marie"],
        textC: 0,
        fillQ: "L'amie s'appelle _________.",
        fill: "Laura",
      },
      {
        format: "vf",
        textQ: "Laura parle directement à Laurie.",
        text: ["Vrai", "Faux", "On ne sait pas"],
        textC: 1,
        vfQ: "Laura parle directement à Laurie.",
        vfC: 1,
      },
      {
        format: "image",
        textQ: "Quel moyen de communication ?",
        text: ["Téléphone", "Lettre", "SMS seulement"],
        textC: 0,
        img: ["Téléphone", "Carte", "Maison"],
        imgC: 0,
      },
      {
        format: "text",
        textQ: "Que fait la mère à la fin ?",
        text: ["Elle appelle sa fille", "Elle raccroche", "Elle invite Laura"],
        textC: 0,
      },
      {
        format: "vf",
        textQ: "Laura est une amie de Laurie.",
        text: ["Vrai", "Faux", "On ne sait pas"],
        textC: 0,
        vfQ: "Laura est une amie de Laurie.",
        vfC: 0,
      },
    ]),
  }),
  buildListeningAudio({
    id: "e1-2-026",
    level: "A1",
    num: 26,
    transcript: `- Léa, j'ai une question : qui c'est, la jeune femme brune là-bas ?
- Mais Agnès, regarde bien, c'est Nathalie, ma sœur !
- Elle a quel âge, ta sœur ?
- Elle a 30 ans.
- Elle est en couple ?
- Oui, elle est mariée !
- Ah bon ? Son mari s'appelle comment ?
- John, il est là, regarde. Le grand homme roux.
- Lui ? Il est français ?
- Non, John est anglais. Il est cuisinier. Il est très sympa.
- Il a un frère ?
- Non, il a une sœur, Megan. Elle, elle est pacsée et elle a deux enfants, un fils et une fille.`,
    questions: qs("026", [
      {
        format: "text",
        textQ: "Qui est Nathalie ?",
        text: ["La sœur de Léa", "La mère d'Agnès", "Une amie"],
        textC: 0,
      },
      {
        format: "fill",
        textQ: "Âge de Nathalie",
        text: ["30", "20", "40"],
        textC: 0,
        fillQ: "Nathalie a _________ ans.",
        fill: "30",
        fillA: ["trente", "30 ans"],
      },
      {
        format: "vf",
        textQ: "John est français.",
        text: ["Vrai", "Faux", "On ne sait pas"],
        textC: 1,
        vfQ: "John est français.",
        vfC: 1,
      },
      {
        format: "image",
        textQ: "Quelle est la profession de John ?",
        text: ["Cuisinier", "Professeur", "Médecin"],
        textC: 0,
        img: ["Cuisinier", "Professeur", "Médecin"],
        imgC: 0,
      },
      {
        format: "text",
        textQ: "Comment s'appelle la sœur de John ?",
        text: ["Megan", "Nathalie", "Léa"],
        textC: 0,
      },
      {
        format: "fill",
        textQ: "Nationalité de John",
        text: ["anglais", "français", "espagnol"],
        textC: 0,
        fillQ: "John est _________.",
        fill: "anglais",
        fillA: ["Anglais"],
      },
      {
        format: "vf",
        textQ: "Megan a deux enfants.",
        text: ["Vrai", "Faux", "On ne sait pas"],
        textC: 0,
        vfQ: "Megan a deux enfants.",
        vfC: 0,
      },
      {
        format: "text",
        textQ: "Nathalie est-elle mariée ?",
        text: ["Oui", "Non", "On ne sait pas"],
        textC: 0,
      },
    ]),
  }),
];
