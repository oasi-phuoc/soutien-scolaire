import { buildListeningAudio, type FixedQ } from "./express-lesson-factory";

const qs = (prefix: string, items: Omit<FixedQ, "id">[]): FixedQ[] =>
  items.map((item, i) => ({ ...item, id: `${prefix}-q${i + 1}` }));

export const E9_1_TRAINING = [
  buildListeningAudio({
    id: "e9-1-004",
    level: "A2",
    num: 4,
    transcript: `- Mon lave-linge est tombé en panne.
- Tu vas le faire réparer ?
- Non, il n'est plus sous garantie.
- Je préfère acheter un lave-linge d'occasion.
- T'as regardé sur Leboncoin ?
- Oui, j'ai trouvé un lave-linge pas cher et en très bon état.
- Je vous appelle parce que j'ai acheté un téléphone portable sur votre site, mais il est en panne.
- D'accord. Pourriez-vous me donner la référence de la commande ?
- Vous proposez un service de livraison à domicile ?
- Je viens rapporter ce manteau. Il ne me va pas.
- Nous avons d'autres tailles si vous souhaitez échanger.
- Non, je voudrais un remboursement, s'il vous plaît.
- Très bien. Vous avez le ticket de caisse ?`,
    questions: qs("004", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Achats", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["panne", "voyage", "silence"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      fillQ: "Mon lave-linge est tombé en _________.",
      fill: "panne",
    },
    {
      format: "fill",
      textQ: "Mon lave-linge est tombé en panne.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Mon lave-linge est tombé en panne. _________",
      fill: "Vrai",
      vfQ: "Mon lave-linge est tombé en panne.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "L'enregistrement est en français.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      vfQ: "L'enregistrement est en français.",
      vfC: 0,
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-1-001",
    level: "A2",
    num: 1,
    transcript: `- Allô !
- Allô Raphaël, c'est Jules ! Comment ça va ?
- Très bien, et toi ?
- Bien, mais mon lave-linge est tombé en panne.
- Ah ! Tu vas le faire réparer ?
- Non, il est vieux et il n'est plus sous garantie, alors je vais acheter une nouvelle machine.
- Oui, je comprends. « Bien chez soi » fait des promotions en ce moment sur le rayon électroménager. Il y a des offres en magasin et sur leur site.
- Ah, je ne savais pas. Mais le centre commercial est loin de chez moi, et si je commande sur le site Internet, il faut attendre quelques semaines. Alors je préfère acheter un lave-linge d'occasion.
- Oui, c'est vrai que c'est plus rapide et souvent moins cher. T'as regardé sur Leboncoin ?
- Oui, et justement, je t'appelle pour ça. À côté de chez moi, j'ai trouvé un lave-linge pas cher et en très bon état. Et le vendeur a des commentaires positifs. Mais il n'y a pas de service de livraison. Tu pourrais m'aider à le porter ?
- Bien sûr !`,
    questions: qs("001", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Achats", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["Comment", "voyage", "silence"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      fillQ: "Allô Raphaël, c'est Jules ! _________ ça va ?",
      fill: "Comment",
    },
    {
      format: "fill",
      textQ: "Bien, mais mon lave-linge est tombé en panne.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Bien, mais mon lave-linge est tombé en panne. _________",
      fill: "Vrai",
      vfQ: "Bien, mais mon lave-linge est tombé en panne.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "L'enregistrement est en français.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      vfQ: "L'enregistrement est en français.",
      vfC: 0,
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-1-005",
    level: "A2",
    num: 5,
    transcript: `C'est les soldes chez « Voularty » ! Jusqu'au 19 juillet, profitez de réductions exceptionnelles sur tout le rayon multimédia ! Ordinateurs, tablettes et smartphones à petit prix ! Les offres sont disponibles sur le site Internet et en magasin, alors n'attendez plus !`,
    questions: qs("005", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Achats", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["n'attendez", "voyage", "silence"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      fillQ: "C'est les soldes chez « Voularty » ! Jusqu'au 19 juillet, profitez de réducti…",
      fill: "n'attendez",
    },
    {
      format: "fill",
      textQ: "C'est les soldes chez « Voularty » ! Jusqu'au 19 juillet, profitez de réductions exceptionnelles sur tout le r",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "C'est les soldes chez « Voularty » ! Jusqu'au 19 juillet, profitez de réductions exceptionnelles sur tout le r _________",
      fill: "Vrai",
      vfQ: "C'est les soldes chez « Voularty » ! Jusqu'au 19 juillet, profitez de réductions exceptionnelles sur tout le r",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "L'enregistrement donne-t-il des informations ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["19", "999", "0"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "19",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-1-006",
    level: "A2",
    num: 6,
    transcript: `- Bonjour monsieur. Je viens rapporter ce manteau. Il ne me va pas.
- D'accord, madame. Nous avons d'autres tailles si vous souhaitez échanger.
- Non, je voudrais un remboursement, s'il vous plaît.
- Très bien. Vous avez le ticket de caisse ?
- Oui, tenez.`,
    questions: qs("006", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Achats", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["manteau", "voyage", "silence"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      fillQ: "Bonjour monsieur. Je viens rapporter ce _________. Il ne me va pas.",
      fill: "manteau",
    },
    {
      format: "fill",
      textQ: "Bonjour monsieur. Je viens rapporter ce manteau. Il ne me va pas.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Bonjour monsieur. Je viens rapporter ce manteau. Il ne me va pas. _________",
      fill: "Vrai",
      vfQ: "Bonjour monsieur. Je viens rapporter ce manteau. Il ne me va pas.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "L'enregistrement est en français.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      vfQ: "L'enregistrement est en français.",
      vfC: 0,
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  })
];

export const E9_1_EVAL = [
  buildListeningAudio({
    id: "e9-1-007",
    level: "A2",
    num: 7,
    transcript: `- Service après-vente, Matthieu à votre écoute.
- Bonjour monsieur. Je vous appelle parce que j'ai acheté un téléphone portable sur votre site mais, depuis hier, il ne s'allume plus.
- D'accord. Pourriez-vous me donner la référence de la commande ?
- Oui, c'est la commande VF3367Y.
- J'y suis. Il s'agit d'un smartphone commandé le 20 août 2020 qui est encore sous garantie. Donc je vous envoie un bon de retour par e-mail, et vous pouvez retourner le smartphone au service réparation.
- Très bien. Merci monsieur !`,
    questions: qs("007", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Achats", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["écoute", "voyage", "silence"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      fillQ: "Service après-vente, Matthieu à votre _________.",
      fill: "écoute",
    },
    {
      format: "fill",
      textQ: "Service après-vente, Matthieu à votre écoute.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Service après-vente, Matthieu à votre écoute. _________",
      fill: "Vrai",
      vfQ: "Service après-vente, Matthieu à votre écoute.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["20", "999", "0"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "20",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-1-008",
    level: "A2",
    num: 8,
    transcript: `Bonjour madame. Je vous appelle parce que j'ai vu votre annonce pour la vente d'un réfrigérateur et je voudrais vous poser quelques questions. De quelle couleur est le frigo ? Quelles sont ses dimensions ? Est-ce qu'il est encore sous garantie ? Je voudrais aussi savoir si vous proposez un service de livraison à domicile ou s'il faut venir le chercher. Vous pouvez m'appeler au 06.14.53.76.84. À bientôt !`,
    questions: qs("008", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Achats", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["bientôt", "voyage", "silence"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      fillQ: "Bonjour madame. Je vous appelle parce que j'ai vu votre annonce pour la vente…",
      fill: "bientôt",
    },
    {
      format: "fill",
      textQ: "Bonjour madame. Je vous appelle parce que j'ai vu votre annonce pour la vente d'un réfrigérateur et je voudrai",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Bonjour madame. Je vous appelle parce que j'ai vu votre annonce pour la vente d'un réfrigérateur et je voudrai _________",
      fill: "Vrai",
      vfQ: "Bonjour madame. Je vous appelle parce que j'ai vu votre annonce pour la vente d'un réfrigérateur et je voudrai",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["06", "999", "0"],
      textC: 0,
      img: ["Magasin", "Téléphone", "Voiture"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "06",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  })
];

export const E9_2_TRAINING = [
  buildListeningAudio({
    id: "e9-2-012",
    level: "A2",
    num: 12,
    transcript: `- Je viens de louer une voiture pour le week-end.
- Tu es passé par une agence ?
- Non, un service entre particuliers. Tu t'inscris, tu enregistres ton permis, et tu loues.
- Il y a une assurance ?
- Oui, c'est compris. Le propriétaire vient de faire le contrôle technique.
- Et pour l'essence ?
- Je dois faire le plein avant de rendre la voiture.
- Tu peux aussi prendre le tram avec un ticket commun pour le parking.`,
    questions: qs("012", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Transports", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["week", "voyage", "silence"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      fillQ: "Je viens de louer une voiture pour le _________-end.",
      fill: "week",
    },
    {
      format: "fill",
      textQ: "Je viens de louer une voiture pour le week-end.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Je viens de louer une voiture pour le week-end. _________",
      fill: "Vrai",
      vfQ: "Je viens de louer une voiture pour le week-end.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "L'enregistrement est en français.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      vfQ: "L'enregistrement est en français.",
      vfC: 0,
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-2-009",
    level: "A2",
    num: 9,
    transcript: `- Salut Vincent ! Tu sais comment aller au mariage de Thomas le week-end prochain ?
- Oui, je viens de louer une voiture. Je pensais prendre le train, mais c'est plus long et plus cher.
- Et en covoiturage ?
- Les trajets proposés ne sont pas pratiques.
- Dommage. Tu es passé par une agence pour la location ?
- Non, un service de location de voitures entre particuliers. Ça s'appelle « Loue ma voiture ! ». Tu connais ?
- Pas du tout. Mais… c'est sûr comme service ?
- Oui, c'est sûr et simple. Tu t'inscris, tu enregistres une pièce d'identité et ton permis de conduire, et tu loues une voiture.
- Il y a une assurance ?
- Oui, c'est compris. Et pour cette voiture, le propriétaire vient de faire le contrôle technique.
- Et pour l'essence ?
- À la fin du week-end, je dois juste faire le plein dans une station-service avant de rendre la voiture.`,
    questions: qs("009", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Transports", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["prochain", "voyage", "silence"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      fillQ: "Salut Vincent ! Tu sais comment aller au mariage de Thomas le week-end procha…",
      fill: "prochain",
    },
    {
      format: "fill",
      textQ: "Oui, je viens de louer une voiture. Je pensais prendre le train, mais c'est plus long et plus cher.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Oui, je viens de louer une voiture. Je pensais prendre le train, mais c'est plus long et plus cher. _________",
      fill: "Vrai",
      vfQ: "Oui, je viens de louer une voiture. Je pensais prendre le train, mais c'est plus long et plus cher.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "L'enregistrement est en français.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      vfQ: "L'enregistrement est en français.",
      vfC: 0,
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Oui", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Oui",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-2-013",
    level: "A2",
    num: 13,
    transcript: `- Bonjour monsieur. Je viens d'avoir un petit accident et le clignotant ne marche plus.
- D'accord madame, je vais regarder et vérifier l'état général du véhicule. Je vous appelle dans la journée pour la réparation.`,
    questions: qs("013", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Transports", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["marche", "voyage", "silence"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      fillQ: "Bonjour monsieur. Je viens d'avoir un petit accident et le clignotant ne marc…",
      fill: "marche",
    },
    {
      format: "fill",
      textQ: "Bonjour monsieur. Je viens d'avoir un petit accident et le clignotant ne marche plus.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Bonjour monsieur. Je viens d'avoir un petit accident et le clignotant ne marche plus. _________",
      fill: "Vrai",
      vfQ: "Bonjour monsieur. Je viens d'avoir un petit accident et le clignotant ne marche plus.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "L'enregistrement donne-t-il des informations ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "L'enregistrement est en français.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      vfQ: "L'enregistrement est en français.",
      vfC: 0,
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-2-014",
    level: "A2",
    num: 14,
    transcript: `Chers voyageurs, pour améliorer notre réseau de transports, des travaux sur la ligne 5 viennent de débuter. La station « Victor Hugo » n'est plus desservie, mais des bus de remplacement sont à votre disposition. Votre ticket de transport reste valable.`,
    questions: qs("014", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Transports", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["valable", "voyage", "silence"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      fillQ: "Chers voyageurs, pour améliorer notre réseau de transports, des travaux sur l…",
      fill: "valable",
    },
    {
      format: "fill",
      textQ: "Chers voyageurs, pour améliorer notre réseau de transports, des travaux sur la ligne 5 viennent de débuter. La",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Chers voyageurs, pour améliorer notre réseau de transports, des travaux sur la ligne 5 viennent de débuter. La _________",
      fill: "Vrai",
      vfQ: "Chers voyageurs, pour améliorer notre réseau de transports, des travaux sur la ligne 5 viennent de débuter. La",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "L'enregistrement donne-t-il des informations ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["5", "999", "0"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "5",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  })
];

export const E9_2_EVAL = [
  buildListeningAudio({
    id: "e9-2-015",
    level: "A2",
    num: 15,
    transcript: `- Bonsoir monsieur, je viens d'entendre l'annonce. Donc, il y a une panne sur la ligne 8 ?
- Oui, et malheureusement le trafic est interrompu.
- Je dois aller Place de la République. Est-ce que je peux prendre le bus 14 ?
- Non, le service des bus termine à 23 h 00. Mais vous pouvez prendre le bus de nuit N5 qui vous laisse rue Voltaire, donc pas loin. Sinon, on vient de m'informer qu'une navette va être proposée dans une petite heure.`,
    questions: qs("015", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Transports", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["ligne", "voyage", "silence"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      fillQ: "Bonsoir monsieur, je viens d'entendre l'annonce. Donc, il y a une panne sur l…",
      fill: "ligne",
    },
    {
      format: "fill",
      textQ: "Oui, et malheureusement le trafic est interrompu.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Oui, et malheureusement le trafic est interrompu. _________",
      fill: "Vrai",
      vfQ: "Oui, et malheureusement le trafic est interrompu.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["8", "999", "0"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "8",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Oui", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Oui",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-2-016",
    level: "A2",
    num: 16,
    transcript: `- Salut Laure ! Je viens de partir du bureau, donc je vais chercher ma voiture et j'arrive !
- Très bien ! Mais ils viennent d'annoncer un véhicule en panne sur la D5 et il y a des embouteillages. Tu devrais peut-être laisser ta voiture au parc relais et prendre le tram. En plus, c'est difficile de stationner dans mon quartier.
- Oui, t'as raison. C'est un ticket commun pour le parking et le tram ?
- Oui, avec transports illimités pour la journée.
- D'accord ! À tout à l'heure !`,
    questions: qs("016", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Transports", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["j'arrive", "voyage", "silence"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      fillQ: "Salut Laure ! Je viens de partir du bureau, donc je vais chercher ma voiture …",
      fill: "j'arrive",
    },
    {
      format: "fill",
      textQ: "Salut Laure ! Je viens de partir du bureau, donc je vais chercher ma voiture et j'arrive !",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Salut Laure ! Je viens de partir du bureau, donc je vais chercher ma voiture et j'arrive ! _________",
      fill: "Vrai",
      vfQ: "Salut Laure ! Je viens de partir du bureau, donc je vais chercher ma voiture et j'arrive !",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "L'enregistrement est en français.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Bus", "Voiture", "Train"],
      imgC: 0,
      vfQ: "L'enregistrement est en français.",
      vfC: 0,
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  })
];

export const E9_3_TRAINING = [
  buildListeningAudio({
    id: "e9-3-020",
    level: "A2",
    num: 20,
    transcript: `- Je cherche un appartement à louer.
- Quel type d'appartement vous intéresse : un studio, un T2 ?
- Est-ce que c'est proche de la gare ?
- Oui, c'est à 5 minutes à pied.
- Est-ce que le studio est toujours disponible ?
- Oui, il est libre à partir de mars. / Non, il n'est plus disponible.
- L'appartement se trouve dans le quartier de la Banque.
- Pouvez-vous me donner l'adresse exacte ?
- Est-ce que c'est lumineux ?
- Oui, l'appartement est exposé sud.
- L'appartement est rénové ?
- Non, mais l'état général est excellent.
- Alors, cette visite ? Tu penses quoi du studio ?
- Un coup de cœur ! J'adore !
- Les visites sont organisées la semaine prochaine.
- Est-ce que je dois m'inscrire ?
- Non, pas besoin !
- Tu signes le bail quand ?
- J'attends la réponse de l'agence.`,
    questions: qs("020", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Location", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["louer", "voyage", "silence"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      fillQ: "Je cherche un appartement à _________.",
      fill: "louer",
    },
    {
      format: "fill",
      textQ: "Je cherche un appartement à louer.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Je cherche un appartement à louer. _________",
      fill: "Vrai",
      vfQ: "Je cherche un appartement à louer.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["5", "999", "0"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "5",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-3-017",
    level: "A2",
    num: 17,
    transcript: `- Agence du Rhône, bonjour.
- Bonjour monsieur. Je cherche un appartement à louer. Sur votre site, il y a deux annonces intéressantes. Je voudrais vous poser quelques questions…
- Bien sûr. Quels appartements vous intéressent ?
- Le T3 dans le quartier de la Banque et le T2, rue Ancienne.
- Désolé, le T2 n'est plus disponible. Les nouveaux locataires vont emménager demain.
- Déjà ? Bon, et le T3, il est libre ?
- Oui, il est disponible. Nous allons organiser les visites la semaine prochaine.
- Très bien… Cet appartement est à quel étage ?
- Au 5e, c'est le dernier étage de l'immeuble. Vous avez une jolie vue sur les montagnes.
- Il y a bien un ascenseur ?
- Bien sûr, l'immeuble est moderne et l'appartement est rénové.
- Parfait. Les visites, c'est quel jour ? Est-ce que je dois m'inscrire ?
- Mardi prochain de 17 heures à 19 heures, pas besoin de vous inscrire. Je vais vous donner l'adresse exacte.`,
    questions: qs("017", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Location", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["Rhône", "voyage", "silence"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      fillQ: "Agence du _________, bonjour.",
      fill: "Rhône",
    },
    {
      format: "fill",
      textQ: "Agence du Rhône, bonjour.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Agence du Rhône, bonjour. _________",
      fill: "Vrai",
      vfQ: "Agence du Rhône, bonjour.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["17", "999", "0"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "17",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-3-021",
    level: "A2",
    num: 21,
    transcript: `Vous allez voir, c'est un bel appartement. Ici un grand salon de 19 m2. Là, vous avez deux chambres et deux salles de bain. La cuisine est équipée. Et regardez cette belle terrasse exposée sud. Vous avez une magnifique vue sur le parc !`,
    questions: qs("021", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Location", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["parc", "voyage", "silence"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      fillQ: "Vous allez voir, c'est un bel appartement. Ici un grand salon de 19 m2. Là, v…",
      fill: "parc",
    },
    {
      format: "fill",
      textQ: "Vous allez voir, c'est un bel appartement. Ici un grand salon de 19 m2. Là, vous avez deux chambres et deux sa",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Vous allez voir, c'est un bel appartement. Ici un grand salon de 19 m2. Là, vous avez deux chambres et deux sa _________",
      fill: "Vrai",
      vfQ: "Vous allez voir, c'est un bel appartement. Ici un grand salon de 19 m2. Là, vous avez deux chambres et deux sa",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "L'enregistrement donne-t-il des informations ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["19", "999", "0"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "19",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-3-022",
    level: "A2",
    num: 22,
    transcript: `- Bonjour, vous êtes Madame Norin, la gardienne ?
- Oui, c'est moi.
- Je viens d'avoir votre numéro par l'agence immobilière. Je voudrais visiter le studio au rez-de-chaussée.
- Il y a une visite groupée demain à 16 h. Venez avec votre dossier complet.
- D'accord, merci madame.`,
    questions: qs("022", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Location", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["gardienne", "voyage", "silence"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      fillQ: "Bonjour, vous êtes Madame Norin, la _________ ?",
      fill: "gardienne",
    },
    {
      format: "fill",
      textQ: "Je viens d'avoir votre numéro par l'agence immobilière. Je voudrais visiter le studio au rez-de-chaussée.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Je viens d'avoir votre numéro par l'agence immobilière. Je voudrais visiter le studio au rez-de-chaussée. _________",
      fill: "Vrai",
      vfQ: "Je viens d'avoir votre numéro par l'agence immobilière. Je voudrais visiter le studio au rez-de-chaussée.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["16", "999", "0"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "16",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Oui", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Oui",
    }
    ]),
  })
];

export const E9_3_EVAL = [
  buildListeningAudio({
    id: "e9-3-023",
    level: "A2",
    num: 23,
    transcript: `- Une visite d'appartement, c'est rapide, soyez préparé ! Écoutez les conseils de notre spécialiste.
- Avant de visiter, étudiez le quartier. Regardez la rue : y a-t-il des commerces, une poste ? Observez aussi l'immeuble : est-il moderne, rénové, calme ? Vous allez être content d'avoir un ascenseur si votre futur appartement est au dernier étage. Parlez avec le gardien.
- Et pendant la visite ?
- Regardez tout. Un salon lumineux, une jolie vue sont bien sûr importants, mais vérifiez surtout l'état de l'appartement.`,
    questions: qs("023", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Location", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["spécialiste", "voyage", "silence"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      fillQ: "Une visite d'appartement, c'est rapide, soyez préparé ! Écoutez les conseils …",
      fill: "spécialiste",
    },
    {
      format: "fill",
      textQ: "Une visite d'appartement, c'est rapide, soyez préparé ! Écoutez les conseils de notre spécialiste.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Une visite d'appartement, c'est rapide, soyez préparé ! Écoutez les conseils de notre spécialiste. _________",
      fill: "Vrai",
      vfQ: "Une visite d'appartement, c'est rapide, soyez préparé ! Écoutez les conseils de notre spécialiste.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "L'enregistrement est en français.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      vfQ: "L'enregistrement est en français.",
      vfC: 0,
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-3-024",
    level: "A2",
    num: 24,
    transcript: `- Salut Flo, alors cette visite ? Tu penses quoi du studio ?
- Salut Allan. C'est un coup de cœur ! Il est grand — 35 m2 — et exposé est-ouest.
- Et le quartier ?
- C'est à 5 minutes d'une station de métro. Je vais aussi discuter avec le gardien pour savoir si c'est calme. Bon, 490 € de loyer c'est un peu cher, mais les charges sont comprises, alors je pense que ça va aller.
- Tu signes le bail quand ?
- Attends, attends… l'agence va me donner une réponse demain.`,
    questions: qs("024", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Location", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["studio", "voyage", "silence"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      fillQ: "Salut Flo, alors cette visite ? Tu penses quoi du _________ ?",
      fill: "studio",
    },
    {
      format: "fill",
      textQ: "Salut Allan. C'est un coup de cœur ! Il est grand — 35 m2 — et exposé est-ouest.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Salut Allan. C'est un coup de cœur ! Il est grand — 35 m2 — et exposé est-ouest. _________",
      fill: "Vrai",
      vfQ: "Salut Allan. C'est un coup de cœur ! Il est grand — 35 m2 — et exposé est-ouest.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["35", "999", "0"],
      textC: 0,
      img: ["Maison", "Clé", "Camion"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "35",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Oui", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Oui",
    }
    ]),
  })
];

export const E9_4_TRAINING = [
  buildListeningAudio({
    id: "e9-4-028",
    level: "A2",
    num: 28,
    transcript: `- Je voudrais renouveler mon titre de séjour.
- Vous devez envoyer votre carte de séjour qui arrive à expiration.
- Je dois envoyer une lettre recommandée ?
- Non, une lettre simple suffit, avec un justificatif de domicile et des photos d'identité.
- Quand dois-je faire ma demande ?
- Au moins 60 jours avant l'expiration.
- Tu as pris ton forfait chez quel opérateur ?
- Green Mobile, mais c'est un peu cher.
- Demande-leur une réduction : tu es un client fidèle !`,
    questions: qs("028", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Titre de séjour", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["séjour", "voyage", "silence"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      fillQ: "Je voudrais renouveler mon titre de _________.",
      fill: "séjour",
    },
    {
      format: "fill",
      textQ: "Je voudrais renouveler mon titre de séjour.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Je voudrais renouveler mon titre de séjour. _________",
      fill: "Vrai",
      vfQ: "Je voudrais renouveler mon titre de séjour.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["60", "999", "0"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "60",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-4-025",
    level: "A2",
    num: 25,
    transcript: `- Personne suivante... J'ai dit : Personne suivante ! Bonjour !
- Bonjour, je voudrais des informations pour renouveler mon titre de séjour qui expire dans 5 mois.
- Pour faire une demande de renouvellement, vous devez envoyer votre carte de séjour qui arrive à expiration.
- Pouvez-vous me donner l'adresse postale ?
- C'est écrit sur ce papier.
- Je dois envoyer une lettre recommandée ?
- Non, utilisez une lettre simple au tarif normal. Avec la carte, vous envoyez ce formulaire avec votre nom, celui de votre conjoint et de vos enfants à charge, un justificatif de domicile et 3 photos d'identité. N'oubliez pas d'ajouter un timbre fiscal.
- Quand est-ce que je dois faire ma demande ?
- N'attendez pas trop ! Envoyez votre demande au moins 60 jours avant la date d'expiration de votre carte.
- Merci pour ces informations, j'ai tout noté.`,
    questions: qs("025", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Titre de séjour", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["suivante", "voyage", "silence"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      fillQ: "Personne _________... J'ai dit : Personne _________ ! Bonjour !",
      fill: "suivante",
    },
    {
      format: "fill",
      textQ: "Personne suivante... J'ai dit : Personne suivante ! Bonjour !",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Personne suivante... J'ai dit : Personne suivante ! Bonjour ! _________",
      fill: "Vrai",
      vfQ: "Personne suivante... J'ai dit : Personne suivante ! Bonjour !",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["5", "999", "0"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "5",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-4-029",
    level: "A2",
    num: 29,
    transcript: `- Tu as pris ton forfait chez quel opérateur ?
- Green Mobile, mais c'est un peu cher.
- Ah bon ? Tu payes combien par mois ?
- J'ai choisi un forfait à 25 € pour 6 h avec sms illimités.
- Oui, c'est cher. Tu es client chez eux depuis combien de temps ?
- Ça doit faire 5 ans.
- Tu es un client fidèle alors demande-leur une réduction sur ton forfait !
- Tu as raison ! Je vais faire ça !`,
    questions: qs("029", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Titre de séjour", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["opérateur", "voyage", "silence"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      fillQ: "Tu as pris ton forfait chez quel _________ ?",
      fill: "opérateur",
    },
    {
      format: "fill",
      textQ: "Green Mobile, mais c'est un peu cher.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Green Mobile, mais c'est un peu cher. _________",
      fill: "Vrai",
      vfQ: "Green Mobile, mais c'est un peu cher.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["25", "999", "0"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "25",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Oui", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Oui",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-4-030",
    level: "A2",
    num: 30,
    transcript: `- En plus de votre compte courant, vous pouvez ouvrir un livret A.
- Qu'est-ce que c'est ?
- C'est un compte qui vous permet d'épargner… d'économiser. Vous choisissez le montant que vous souhaitez mettre de côté tous les mois. C'est automatique.
- Et si j'ai besoin d'utiliser cet argent ?
- Aucun problème ! Vous pouvez à tout moment retirer l'argent du livret.
- Et je peux y mettre la somme que je veux ?
- Oui, mais n'oubliez pas, le montant maximum est de 23 000 € !`,
    questions: qs("030", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Titre de séjour", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["livret", "voyage", "silence"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      fillQ: "En plus de votre compte courant, vous pouvez ouvrir un _________ A.",
      fill: "livret",
    },
    {
      format: "fill",
      textQ: "En plus de votre compte courant, vous pouvez ouvrir un livret A.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "En plus de votre compte courant, vous pouvez ouvrir un livret A. _________",
      fill: "Vrai",
      vfQ: "En plus de votre compte courant, vous pouvez ouvrir un livret A.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["23", "999", "0"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "23",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  })
];

export const E9_4_EVAL = [
  buildListeningAudio({
    id: "e9-4-031",
    level: "A2",
    num: 31,
    transcript: `- Pour ouvrir un compte il faut un justificatif de domicile et une pièce d'identité. Comptez 1 semaine pour avoir votre carte bancaire et 2 semaines pour votre chéquier.
- Comme justificatif, j'ai pris une facture de téléphone portable.
- Non, il faut plutôt une facture d'électricité.`,
    questions: qs("031", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Titre de séjour", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["chéquier", "voyage", "silence"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      fillQ: "Pour ouvrir un compte il faut un justificatif de domicile et une pièce d'iden…",
      fill: "chéquier",
    },
    {
      format: "fill",
      textQ: "Pour ouvrir un compte il faut un justificatif de domicile et une pièce d'identité. Comptez 1 semaine pour avoi",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Pour ouvrir un compte il faut un justificatif de domicile et une pièce d'identité. Comptez 1 semaine pour avoi _________",
      fill: "Vrai",
      vfQ: "Pour ouvrir un compte il faut un justificatif de domicile et une pièce d'identité. Comptez 1 semaine pour avoi",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "L'enregistrement donne-t-il des informations ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["1", "999", "0"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "1",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-4-032",
    level: "A2",
    num: 32,
    transcript: `- Je voudrais envoyer une lettre recommandée. Comment ça fonctionne ?
- Avec une lettre recommandée vous recevez chez vous un accusé de réception : c'est la preuve que le destinataire a bien reçu votre lettre.
- Et c'est combien ?
- C'est 4,55 €.`,
    questions: qs("032", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Titre de séjour", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["fonctionne", "voyage", "silence"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      fillQ: "Je voudrais envoyer une lettre recommandée. Comment ça _________ ?",
      fill: "fonctionne",
    },
    {
      format: "fill",
      textQ: "Avec une lettre recommandée vous recevez chez vous un accusé de réception : c'est la preuve que le destinatair",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Avec une lettre recommandée vous recevez chez vous un accusé de réception : c'est la preuve que le destinatair _________",
      fill: "Vrai",
      vfQ: "Avec une lettre recommandée vous recevez chez vous un accusé de réception : c'est la preuve que le destinatair",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["4", "999", "0"],
      textC: 0,
      img: ["Passeport", "Ticket", "Carte"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "4",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Oui", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Oui",
    }
    ]),
  })
];

export const E9_5_TRAINING = [
  buildListeningAudio({
    id: "e9-5-036",
    level: "A2",
    num: 36,
    transcript: `- Tu as regardé les infos hier soir ?
- Non, je lis la presse en ligne.
- Tu es abonnée à un journal ?
- Je reçois la newsletter de Ouest-France.
- Moi, je préfère le journal télévisé sur Arte.
- Hier, je suis rentré tard et j'ai regardé le journal de 20 heures sur France 2.
- Ce matin j'ai écouté la radio sur France Inter.`,
    questions: qs("036", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Médias", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["soir", "voyage", "silence"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      fillQ: "Tu as regardé les infos hier _________ ?",
      fill: "soir",
    },
    {
      format: "fill",
      textQ: "Non, je lis la presse en ligne.",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Non, je lis la presse en ligne. _________",
      fill: "Vrai",
      vfQ: "Non, je lis la presse en ligne.",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["20", "999", "0"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "20",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Oui", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Oui",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-5-033",
    level: "A2",
    num: 33,
    transcript: `- Tu as regardé les infos hier soir ? Ils ont parlé de la crise économique…
- Non, hier je suis partie tard du bureau. Tu sais, je ne regarde pas beaucoup la télé, je lis la presse en ligne.
- Tu es abonnée à un journal ?
- Je reçois la newsletter de Ouest-France et je lis aussi les articles des journaux et des magazines gratuits.
- Moi, je n'aime pas lire, je préfère regarder le journal télévisé.
- Tu regardes le JT sur quelle chaîne ?
- Sur Arte à 19 h 45. Je m'intéresse à l'actualité en France bien sûr mais aussi en Europe ! Hier, je suis rentré tard et j'ai regardé le journal de 20 heures sur France 2.
- Tu écoutes la radio aussi ?
- Oui ! Ce matin j'ai écouté l'interview du ministre de l'Économie au journal de 8 h sur France Inter.`,
    questions: qs("033", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Médias", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["économique", "voyage", "silence"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      fillQ: "Tu as regardé les infos hier soir ? Ils ont parlé de la crise _________…",
      fill: "économique",
    },
    {
      format: "fill",
      textQ: "Tu as regardé les infos hier soir ? Ils ont parlé de la crise économique…",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Tu as regardé les infos hier soir ? Ils ont parlé de la crise économique… _________",
      fill: "Vrai",
      vfQ: "Tu as regardé les infos hier soir ? Ils ont parlé de la crise économique…",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["19", "999", "0"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "19",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-5-037",
    level: "A2",
    num: 37,
    transcript: `- Tiens, regarde… j'ai acheté 3 magazines pour lire à la plage : l'Express pour l'actualité économique et politique, Elle pour la mode et Télérama pour l'actualité culturelle.
- Et tu n'as pas pris l'Équipe pour le sport ?
- Zut, j'ai oublié !`,
    questions: qs("037", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Médias", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["culturelle", "voyage", "silence"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      fillQ: "Tiens, regarde… j'ai acheté 3 magazines pour lire à la plage : l'Express pour…",
      fill: "culturelle",
    },
    {
      format: "fill",
      textQ: "Tiens, regarde… j'ai acheté 3 magazines pour lire à la plage : l'Express pour l'actualité économique et politi",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Tiens, regarde… j'ai acheté 3 magazines pour lire à la plage : l'Express pour l'actualité économique et politi _________",
      fill: "Vrai",
      vfQ: "Tiens, regarde… j'ai acheté 3 magazines pour lire à la plage : l'Express pour l'actualité économique et politi",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "Y a-t-il des questions dans l'enregistrement ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["3", "999", "0"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "3",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-5-038",
    level: "A2",
    num: 38,
    transcript: `Bonjour à tous, vous êtes sur France Inter, il est 8 heures. Les titres du jour. Accident sur l'autoroute A7 : 30 blessés. Nouveau projet social du gouvernement contre la crise économique. L'épidémie de grippe. Neige sur les routes et enfin du football avec le match PSG-OM.`,
    questions: qs("038", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Médias", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["match", "voyage", "silence"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      fillQ: "Bonjour à tous, vous êtes sur France Inter, il est 8 heures. Les titres du jo…",
      fill: "match",
    },
    {
      format: "fill",
      textQ: "Bonjour à tous, vous êtes sur France Inter, il est 8 heures. Les titres du jour. Accident sur l'autoroute A7 :",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Bonjour à tous, vous êtes sur France Inter, il est 8 heures. Les titres du jour. Accident sur l'autoroute A7 : _________",
      fill: "Vrai",
      vfQ: "Bonjour à tous, vous êtes sur France Inter, il est 8 heures. Les titres du jour. Accident sur l'autoroute A7 :",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "L'enregistrement donne-t-il des informations ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["8", "999", "0"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "8",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  })
];

export const E9_5_EVAL = [
  buildListeningAudio({
    id: "e9-5-039",
    level: "A2",
    num: 39,
    transcript: `Découvrez notre offre spéciale d'abonnement 100 % numérique à Tout Savoir : accès illimité au site et à l'appli avec plus de 40 contenus par semaine, la chaîne Tout Savoir TV en replay et en live 24h/24, des podcasts de nos journalistes ! Et en plus… 6 numéros numériques par an ! Profitez de notre offre spéciale jusqu'au 10 octobre, 88 % de réduction. 1 € par mois au lieu de 8,35 €.`,
    questions: qs("039", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Médias", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["lieu", "voyage", "silence"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      fillQ: "Découvrez notre offre spéciale d'abonnement 100 % numérique à Tout Savoir : a…",
      fill: "lieu",
    },
    {
      format: "fill",
      textQ: "Découvrez notre offre spéciale d'abonnement 100 % numérique à Tout Savoir : accès illimité au site et à l'appl",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Découvrez notre offre spéciale d'abonnement 100 % numérique à Tout Savoir : accès illimité au site et à l'appl _________",
      fill: "Vrai",
      vfQ: "Découvrez notre offre spéciale d'abonnement 100 % numérique à Tout Savoir : accès illimité au site et à l'appl",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "L'enregistrement donne-t-il des informations ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["100", "999", "0"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "100",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  }),
  buildListeningAudio({
    id: "e9-5-040",
    level: "A2",
    num: 40,
    transcript: `Voici le résultat de notre étude « Les Français et l'information sur Internet ». Les auteurs ont analysé les données de connexion de 2 372 personnes de plus de 18 ans sur 30 jours consécutifs. Les Français passent en moyenne 3 % de leur temps sur internet, sur des sources d'information en ligne, soit 4,9 minutes de connexion par jour. Les sources d'information les plus consultées sont la presse quotidienne régionale, l'actualité sportive et la presse quotidienne nationale.`,
    questions: qs("040", [
    {
      format: "text",
      textQ: "De quoi parle surtout cet enregistrement ?",
      text: ["Médias", "Un match de football", "La météo uniquement"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Complétez selon l'audio.",
      text: ["nationale", "voyage", "silence"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      fillQ: "Voici le résultat de notre étude « Les Français et l'information sur Internet…",
      fill: "nationale",
    },
    {
      format: "fill",
      textQ: "Voici le résultat de notre étude « Les Français et l'information sur Internet ». Les auteurs ont analysé les d",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      fillQ: "Voici le résultat de notre étude « Les Français et l'information sur Internet ». Les auteurs ont analysé les d _________",
      fill: "Vrai",
      vfQ: "Voici le résultat de notre étude « Les Français et l'information sur Internet ». Les auteurs ont analysé les d",
      vfC: 0,
    },
    {
      format: "vf",
      textQ: "Quel élément est lié à la situation ?",
      text: ["Vrai", "Faux", "On ne sait pas"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      vfQ: "Quel élément est lié à la situation ?",
      vfC: 0,
    },
    {
      format: "text",
      textQ: "L'enregistrement donne-t-il des informations ?",
      text: ["Oui", "Non", "On ne sait pas"],
      textC: 0,
    },
    {
      format: "image",
      textQ: "Quel chiffre entendez-vous ?",
      text: ["2", "999", "0"],
      textC: 0,
      img: ["Radio", "Journal", "Téléphone"],
      imgC: 0,
      fillQ: "Vous entendez le nombre _________.",
      fill: "2",
    },
    {
      format: "fill",
      textQ: "La première réplique est-elle une question ?",
      text: ["Non", "On ne sait pas", "Peut-être"],
      textC: 0,
      fillQ: "La première réplique est-elle une question ? _________",
      fill: "Non",
    }
    ]),
  })
];

