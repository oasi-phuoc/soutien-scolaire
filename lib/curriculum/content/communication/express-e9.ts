import {
  A2,
  dialogueBlock,
  lessonFromListening,
  phraseBankToDialogue,
  prereqItems,
  t,
} from "./express-lesson-factory";
import { E9_1_TRAINING, E9_1_EVAL, E9_2_TRAINING, E9_2_EVAL, E9_3_TRAINING, E9_3_EVAL, E9_4_TRAINING, E9_4_EVAL, E9_5_TRAINING, E9_5_EVAL } from "./express-e9-listening";
import {
  E9_1_CE, E9_1_PO, E9_1_PE,
  E9_2_CE, E9_2_PO, E9_2_PE,
  E9_3_CE, E9_3_PO, E9_3_PE,
  E9_4_CE, E9_4_PO, E9_4_PE,
  E9_5_CE, E9_5_PO, E9_5_PE,
} from "./express-e9-cpe";
import { E9_1_CE_EMAIL, E9_1_PE_EMAIL, E9_2_CE_EMAIL, E9_2_PE_EMAIL, E9_3_CE_EMAIL, E9_3_PE_EMAIL, E9_4_CE_EMAIL, E9_4_PE_EMAIL, E9_5_CE_EMAIL, E9_5_PE_EMAIL } from "./express-e9-email";
import type { CommunicationLesson } from "./express-types";

export const EXPRESS_E9_1: CommunicationLesson = lessonFromListening({
  id: "E9-1",
  code: "E9.1",
  title: "Faire des achats",
  prerequisiteFrenchSlugs: ["a1-gr-l23"],
  prerequisiteCommIds: ["E8-1"],
  theory: [
    { type: "heading", text: "Faire des achats", black: true, trans: t("Shopping") },
    prereqItems([
      { code: "G2.10", title: "Les adjectifs qualificatifs", href: "/francais/grammaire/a1-gr-l23" },
    ]),
    {
      type: "plain",
      text: "Pour faire des achats, on compare le **neuf** et l'**occasion**, on parle du **prix**, de la **garantie** et du **service après-vente**.",
      trans: t("When shopping, we compare new and second-hand items, and talk about price, warranty and after-sales service."),
    },
    { type: "highlight", title: "La place de l'adjectif", trans: t("La place de l'adjectif") },
    {
      type: "plain",
      text: "En général, l'adjectif est placé **après** le nom : des commentaires **positifs**, un lave-linge pas **cher**. Mais certains adjectifs sont placés **avant** : une **nouvelle** machine, en très **bon** état.",
      trans: t("Usually the adjective comes after the noun, but some common adjectives come before (nouveau, bon, petit…)."),
    },
    {
      type: "section",
      items: [
        "un lave-linge **pas cher**",
        "des commentaires **positifs**",
        "une **nouvelle** machine",
        "en très **bon** état"
],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        [
                "Ça coûte combien ?",
                "Ça fait 200 euros."
        ],
        [
                "Vous avez en d'occasion ?",
                "Oui, regardez sur Leboncoin."
        ],
        [
                "Je peux le rapporter ?",
                "Oui, avec le ticket de caisse."
        ],
        [
                "Il est sous garantie ?",
                "Non, il n'est plus sous garantie."
        ]
],
      transHeaders: { en: ["Question", "Possible answer"] },
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    dialogueBlock(
      A2(4),
      "Audio 004",
      phraseBankToDialogue([
      "Mon lave-linge est tombé en panne.",
      "Tu vas le faire réparer ?",
      "Non, il n'est plus sous garantie.",
      "Je préfère acheter un lave-linge d'occasion.",
      "T'as regardé sur Leboncoin ?",
      "Oui, j'ai trouvé un lave-linge pas cher et en très bon état.",
      "Je vous appelle parce que j'ai acheté un téléphone portable sur votre site, mais il est en panne.",
      "D'accord. Pourriez-vous me donner la référence de la commande ?",
      "Vous proposez un service de livraison à domicile ?",
      "Je viens rapporter ce manteau. Il ne me va pas.",
      "Nous avons d'autres tailles si vous souhaitez échanger.",
      "Non, je voudrais un remboursement, s'il vous plaît."
]),
    ),
    {
      type: "vocab",
      items: [
        { fr: "d'occasion", example: "J'achète un frigo d'occasion." },
        { fr: "sous garantie", example: "Le téléphone est encore sous garantie." },
        { fr: "remboursement", example: "Je voudrais un remboursement." },
        { fr: "ticket de caisse", example: "Vous avez le ticket de caisse ?" },
        { fr: "livraison", example: "Il n'y a pas de livraison." },
        { fr: "soldes", example: "C'est les soldes jusqu'au 19 juillet." },
      ],
    },
  ],
  training: E9_1_TRAINING,
  evalAudios: E9_1_EVAL,
  ceExercises: E9_1_CE,
  ceEmailExercises: E9_1_CE_EMAIL,
  poDialogues: E9_1_PO,
  pePrompts: E9_1_PE,
  peEmailPrompts: E9_1_PE_EMAIL,
});

export const EXPRESS_E9_2: CommunicationLesson = lessonFromListening({
  id: "E9-2",
  code: "E9.2",
  title: "Se déplacer",
  prerequisiteFrenchSlugs: ["a1-conj-l28"],
  prerequisiteCommIds: ["E9-1"],
  theory: [
    { type: "heading", text: "Se déplacer", black: true, trans: t("Getting around") },
    prereqItems([
      { code: "C2.1", title: "Passé récent et présent continu", href: "/francais/conjugaison/a1-conj-l28" },
    ]),
    {
      type: "plain",
      text: "Pour se déplacer, on parle de **voiture**, **transports en commun**, **pannes** et **itinéraires**.",
      trans: t("Getting around means talking about cars, public transport, breakdowns and routes."),
    },
    { type: "highlight", title: "Le passé récent (venir de)", trans: t("Le passé récent (venir de)") },
    {
      type: "plain",
      text: "Le **passé récent** = **venir de + infinitif** : je **viens de** louer une voiture ; ils **viennent d'**annoncer une panne.",
      trans: t("The recent past uses venir de + infinitive: I have just rented a car."),
    },
    {
      type: "section",
      items: [
        "Je **viens de** louer une voiture.",
        "Le propriétaire **vient de** faire le contrôle technique.",
        "Des travaux **viennent de** débuter.",
        "Je **viens de** partir du bureau."
],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        [
                "Tu y vas comment ?",
                "Je viens de louer une voiture."
        ],
        [
                "Il y a une assurance ?",
                "Oui, c'est compris."
        ],
        [
                "Je prends quel bus ?",
                "Le bus de nuit N5."
        ],
        [
                "C'est un ticket commun ?",
                "Oui, parking et tram."
        ]
],
      transHeaders: { en: ["Question", "Possible answer"] },
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    dialogueBlock(
      A2(12),
      "Audio 012",
      phraseBankToDialogue([
      "Je viens de louer une voiture pour le week-end.",
      "Tu es passé par une agence ?",
      "Non, un service entre particuliers. Tu t'inscris, tu enregistres ton permis, et tu loues.",
      "Il y a une assurance ?",
      "Oui, c'est compris. Le propriétaire vient de faire le contrôle technique.",
      "Et pour l'essence ?",
      "Je dois faire le plein avant de rendre la voiture.",
      "Tu peux aussi prendre le tram avec un ticket commun pour le parking."
]),
    ),
    {
      type: "vocab",
      items: [
        { fr: "covoiturage", example: "Les trajets en covoiturage ne sont pas pratiques." },
        { fr: "parc relais", example: "Laisse ta voiture au parc relais." },
        { fr: "embouteillage", example: "Il y a des embouteillages sur la D5." },
        { fr: "station-service", example: "Fais le plein à la station-service." },
        { fr: "desservie", example: "La station n'est plus desservie." },
        { fr: "navette", example: "Une navette va être proposée." },
      ],
    },
  ],
  training: E9_2_TRAINING,
  evalAudios: E9_2_EVAL,
  ceExercises: E9_2_CE,
  ceEmailExercises: E9_2_CE_EMAIL,
  poDialogues: E9_2_PO,
  pePrompts: E9_2_PE,
  peEmailPrompts: E9_2_PE_EMAIL,
});

export const EXPRESS_E9_3: CommunicationLesson = lessonFromListening({
  id: "E9-3",
  code: "E9.3",
  title: "Chercher un logement",
  prerequisiteFrenchSlugs: ["a1-conj-l20"],
  prerequisiteCommIds: ["E9-2"],
  theory: [
    { type: "heading", text: "Chercher un logement", black: true, trans: t("Looking for housing") },
    prereqItems([
      { code: "C3.1", title: "Le futur proche", href: "/francais/conjugaison/a1-conj-l20" },
    ]),
    {
      type: "plain",
      text: "Pour chercher un logement, on parle de **type** (studio, T2, T3), de **visite**, de **loyer** et de **bail**.",
      trans: t("When looking for housing, we talk about flat types, viewings, rent and leases."),
    },
    { type: "highlight", title: "Le futur proche", trans: t("Le futur proche") },
    {
      type: "plain",
      text: "Le **futur proche** = **aller + infinitif** : nous **allons organiser** les visites ; les locataires **vont emménager** demain.",
      trans: t("The near future uses aller + infinitive."),
    },
    {
      type: "section",
      items: [
        "Nous **allons organiser** les visites.",
        "Les locataires **vont emménager** demain.",
        "Je **vais vous donner** l'adresse.",
        "Tu **vas signer** le bail ?"
],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        [
                "Il est libre ?",
                "Oui, disponible / Non, plus disponible."
        ],
        [
                "C'est à quel étage ?",
                "Au 5e, dernier étage."
        ],
        [
                "Il y a un ascenseur ?",
                "Oui, l'immeuble est moderne."
        ],
        [
                "Je dois m'inscrire ?",
                "Non, pas besoin."
        ]
],
      transHeaders: { en: ["Question", "Possible answer"] },
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    dialogueBlock(
      A2(20),
      "Audio 020",
      phraseBankToDialogue([
      "Je cherche un appartement à louer.",
      "Quel type d'appartement vous intéresse : un studio, un T2 ?",
      "Est-ce que c'est proche de la gare ?",
      "Oui, c'est à 5 minutes à pied.",
      "Est-ce que le studio est toujours disponible ?",
      "Oui, il est libre à partir de mars. / Non, il n'est plus disponible.",
      "L'appartement se trouve dans le quartier de la Banque.",
      "Pouvez-vous me donner l'adresse exacte ?",
      "Est-ce que c'est lumineux ?",
      "Oui, l'appartement est exposé sud.",
      "L'appartement est rénové ?",
      "Non, mais l'état général est excellent."
]),
    ),
    {
      type: "vocab",
      items: [
        { fr: "charges comprises", example: "490 €, charges comprises." },
        { fr: "exposé sud", example: "La terrasse est exposée sud." },
        { fr: "état des lieux", example: "On fait l'état des lieux." },
        { fr: "coup de cœur", example: "C'est un coup de cœur !" },
        { fr: "bail", example: "Tu signes le bail quand ?" },
        { fr: "emménager", example: "Ils vont emménager demain." },
      ],
    },
  ],
  training: E9_3_TRAINING,
  evalAudios: E9_3_EVAL,
  ceExercises: E9_3_CE,
  ceEmailExercises: E9_3_CE_EMAIL,
  poDialogues: E9_3_PO,
  pePrompts: E9_3_PE,
  peEmailPrompts: E9_3_PE_EMAIL,
});

export const EXPRESS_E9_4: CommunicationLesson = lessonFromListening({
  id: "E9-4",
  code: "E9.4",
  title: "Faire des démarches administratives",
  prerequisiteFrenchSlugs: ["a1-conj-l29"],
  prerequisiteCommIds: ["E9-3"],
  theory: [
    { type: "heading", text: "Faire des démarches administratives", black: true, trans: t("Administrative procedures") },
    prereqItems([
      { code: "C2.2", title: "Passé composé avec avoir", href: "/francais/conjugaison/a1-conj-l29" },
    ]),
    {
      type: "plain",
      text: "Pour les démarches, on parle de **titre de séjour**, de **banque**, de **courrier recommandé** et de **justificatifs**.",
      trans: t("Administrative steps include residence permits, banking and registered mail."),
    },
    { type: "highlight", title: "Le passé composé avec avoir", trans: t("Le passé composé avec avoir") },
    {
      type: "plain",
      text: "Au **passé composé avec avoir** : j'**ai choisi** un forfait ; nous **avons résilié** ; vous **avez retiré** de l'argent.",
      trans: t("Passé composé with avoir: auxiliary + past participle."),
    },
    {
      type: "section",
      items: [
        "J'**ai choisi** un forfait à 25 €.",
        "Nous **avons résilié** le contrat.",
        "Vous **avez retiré** l'argent.",
        "Ils **ont réussi** à ouvrir un compte."
],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        [
                "Je dois envoyer une recommandée ?",
                "Non, une lettre simple suffit."
        ],
        [
                "Quand faire la demande ?",
                "Au moins 60 jours avant."
        ],
        [
                "Quels documents ?",
                "Justificatif de domicile et pièce d'identité."
        ],
        [
                "C'est combien ?",
                "4,55 € pour une recommandée."
        ]
],
      transHeaders: { en: ["Question", "Possible answer"] },
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    dialogueBlock(
      A2(28),
      "Audio 028",
      phraseBankToDialogue([
      "Je voudrais renouveler mon titre de séjour.",
      "Vous devez envoyer votre carte de séjour qui arrive à expiration.",
      "Je dois envoyer une lettre recommandée ?",
      "Non, une lettre simple suffit, avec un justificatif de domicile et des photos d'identité.",
      "Quand dois-je faire ma demande ?",
      "Au moins 60 jours avant l'expiration.",
      "Tu as pris ton forfait chez quel opérateur ?",
      "Green Mobile, mais c'est un peu cher.",
      "Demande-leur une réduction : tu es un client fidèle !"
]),
    ),
    {
      type: "vocab",
      items: [
        { fr: "titre de séjour", example: "Renouveler mon titre de séjour." },
        { fr: "justificatif de domicile", example: "Une facture d'électricité." },
        { fr: "livret A", example: "Ouvrir un livret A pour épargner." },
        { fr: "accusé de réception", example: "Preuve que la lettre est reçue." },
        { fr: "forfait", example: "Un forfait à 25 €." },
        { fr: "résilier", example: "Résilier un abonnement." },
      ],
    },
  ],
  training: E9_4_TRAINING,
  evalAudios: E9_4_EVAL,
  ceExercises: E9_4_CE,
  ceEmailExercises: E9_4_CE_EMAIL,
  poDialogues: E9_4_PO,
  pePrompts: E9_4_PE,
  peEmailPrompts: E9_4_PE_EMAIL,
});

export const EXPRESS_E9_5: CommunicationLesson = lessonFromListening({
  id: "E9-5",
  code: "E9.5",
  title: "S'informer sur l'actualité",
  prerequisiteFrenchSlugs: ["a1-conj-l30"],
  prerequisiteCommIds: ["E9-4"],
  theory: [
    { type: "heading", text: "S'informer sur l'actualité", black: true, trans: t("Following the news") },
    prereqItems([
      { code: "C2.3", title: "Passé composé avec être", href: "/francais/conjugaison/a1-conj-l30" },
    ]),
    {
      type: "plain",
      text: "Pour s'informer, on utilise la **télé**, la **radio**, la **presse** et les **médias en ligne**.",
      trans: t("We get news from TV, radio, the press and online media."),
    },
    { type: "highlight", title: "Le passé composé avec être", trans: t("Le passé composé avec être") },
    {
      type: "plain",
      text: "Au **passé composé avec être** : je **suis partie** ; il **est rentré** ; ils **sont sortis**.",
      trans: t("Passé composé with être: agreement with the subject."),
    },
    {
      type: "section",
      items: [
        "Hier je **suis partie** tard.",
        "Je **suis rentré** et j'ai regardé le JT.",
        "Ils **sont sortis** ce matin.",
        "Tu **es allé(e)** sur le site ?"
],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        [
                "Tu regardes le JT où ?",
                "Sur Arte à 19 h 45."
        ],
        [
                "Tu lis quel journal ?",
                "La newsletter de Ouest-France."
        ],
        [
                "Tu écoutes la radio ?",
                "Oui, France Inter à 8 h."
        ],
        [
                "C'est une offre numérique ?",
                "Oui, 100 % numérique."
        ]
],
      transHeaders: { en: ["Question", "Possible answer"] },
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    dialogueBlock(
      A2(36),
      "Audio 036",
      phraseBankToDialogue([
      "Tu as regardé les infos hier soir ?",
      "Non, je lis la presse en ligne.",
      "Tu es abonnée à un journal ?",
      "Je reçois la newsletter de Ouest-France.",
      "Moi, je préfère le journal télévisé sur Arte.",
      "Hier, je suis rentré tard et j'ai regardé le journal de 20 heures sur France 2.",
      "Ce matin j'ai écouté la radio sur France Inter."
]),
    ),
    {
      type: "vocab",
      items: [
        { fr: "journal télévisé / JT", example: "Je regarde le JT." },
        { fr: "newsletter", example: "Je reçois une newsletter." },
        { fr: "faits divers", example: "Accident sur l'autoroute." },
        { fr: "abonnement", example: "Offre d'abonnement numérique." },
        { fr: "podcast", example: "Des podcasts de journalistes." },
        { fr: "presse régionale", example: "La presse quotidienne régionale." },
      ],
    },
  ],
  training: E9_5_TRAINING,
  evalAudios: E9_5_EVAL,
  ceExercises: E9_5_CE,
  ceEmailExercises: E9_5_CE_EMAIL,
  poDialogues: E9_5_PO,
  pePrompts: E9_5_PE,
  peEmailPrompts: E9_5_PE_EMAIL,
});

export const EXPRESS_E9_LESSONS: CommunicationLesson[] = [
  EXPRESS_E9_1, EXPRESS_E9_2, EXPRESS_E9_3, EXPRESS_E9_4, EXPRESS_E9_5,
];
