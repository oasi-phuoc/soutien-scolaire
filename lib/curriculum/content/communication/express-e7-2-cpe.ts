import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPoDialogue,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}


/* ── Compréhension écrite — E7.2 Pratiquer une activité sportive ── */

const E7_2_CE_TEXT_1 = `Base de loisirs du Lac — Programme d'été

La base de loisirs du Lac est ouverte tous les jours.
La base est ouverte de 9 h à 18 h.
Le matin, vous pouvez faire du canoé-kayak sur le lac.
Vous pouvez aussi prendre un cours de voile.
L'après-midi, il y a de l'escalade et du VTT dans la forêt.
Les cours pour les débutants ont lieu le mardi et le jeudi.
Ils commencent à 10 h.
La location d'un VTT coûte 15 € la journée.
Attention ! Avec la pluie, les activités sur le lac sont annulées.
Avec beaucoup de vent, elles sont annulées aussi.
Inscription à l'accueil de la base.`;

const E7_2_CE_POOL_1 = buildExpressPool("e7-2-ce-1", [
q({
    id: "ce-q1",
    textQ: "Quelles activités peut-on faire le matin ?",
    text: [
      "Du canoé-kayak et de la voile",
      "De l'escalade et du VTT",
      "Du tennis et de la natation",
    ],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez aussi prendre un cours de _________.",
    fill: "voile",
    vfQ: "Le matin, on peut faire du canoé-kayak sur le lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où fait-on l'escalade et le VTT ?",
    text: ["Dans la forêt", "Sur la plage", "À la montagne"],
    textC: 0,
    img: ["forêt", "plage", "montagne"],
    imgC: 0,
    fillQ: "L'après-midi, il y a de l'escalade et du VTT dans la _________.",
    fill: "forêt",
    fillA: ["foret"],
    vfQ: "L'escalade a lieu le matin.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand ont lieu les cours pour les débutants ?",
    text: ["Le mardi et le jeudi à 10 h", "Le lundi à 9 h", "Le week-end à 14 h"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Les cours pour les débutants ont lieu le mardi et le _________.",
    fill: "jeudi",
    vfQ: "Les cours pour les débutants commencent à 10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte la location d'un VTT pour la journée ?",
    text: ["15 €", "5 €", "50 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "La location d'un VTT coûte _________ € la journée.",
    fill: "15",
    fillA: ["quinze"],
    vfQ: "La location d'un VTT coûte 50 € la journée.",
    vfC: 1,
  }),
  q({
    id: "ce-q5",
    textQ: "Que se passe-t-il quand il pleut ?",
    text: [
      "Les activités sur le lac sont annulées",
      "Toutes les activités continuent",
      "La base ferme toute la journée",
    ],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Avec la pluie, les activités sur le lac sont _________.",
    fill: "annulées",
    fillA: ["annulees", "annulée", "annulee"],
    vfQ: "Avec beaucoup de vent, les activités sur le lac sont annulées.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où faut-il s'inscrire pour une activité ?",
    text: ["À l'accueil de la base", "Sur internet", "Par téléphone"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription à l'_________ de la base.",
    fill: "accueil",
    vfQ: "Le prix des cours de voile est indiqué dans le texte.",
    vfC: 2,
  }),
  q({
    id: "ce-q7",
    textQ: "À quelle heure la base de loisirs ouvre-t-elle ?",
    text: ["À 9 h", "À 8 h", "À 10 h"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "La base est ouverte de 9 h à _________ h.",
    fill: "18",
    fillA: ["dix-huit"],
    vfQ: "La base de loisirs est fermée le dimanche.",
    vfC: 1,
  }),
]);

const E7_2_CE_TEXT_2 = `Club sportif Les Aigles — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_2 = buildExpressPool("e7-2-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_3 = `Club sportif Le Stade — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_3 = buildExpressPool("e7-2-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_4 = `Club sportif Sport Plus — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_4 = buildExpressPool("e7-2-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_5 = `Club sportif Active Life — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_5 = buildExpressPool("e7-2-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_6 = `Club sportif Fit Club — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_6 = buildExpressPool("e7-2-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_7 = `Club sportif Energy — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_7 = buildExpressPool("e7-2-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_8 = `Club sportif Champion — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_8 = buildExpressPool("e7-2-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_9 = `Club sportif Victoire — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_9 = buildExpressPool("e7-2-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_10 = `Club sportif Dynamo — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_10 = buildExpressPool("e7-2-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_11 = `Club sportif Olympique — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_11 = buildExpressPool("e7-2-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_12 = `Club sportif Riviera Sport — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_12 = buildExpressPool("e7-2-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_13 = `Club sportif Montagne Active — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_13 = buildExpressPool("e7-2-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_14 = `Club sportif Aqua Club — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_14 = buildExpressPool("e7-2-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_15 = `Club sportif Tennis Club — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_15 = buildExpressPool("e7-2-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_16 = `Club sportif Vélo Club — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_16 = buildExpressPool("e7-2-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_17 = `Club sportif Escalade Plus — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_17 = buildExpressPool("e7-2-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_18 = `Club sportif Nature Sport — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_18 = buildExpressPool("e7-2-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_19 = `Club sportif Forme Club — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_19 = buildExpressPool("e7-2-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

const E7_2_CE_TEXT_20 = `Club sportif Bouge Club — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.`;

const E7_2_CE_POOL_20 = buildExpressPool("e7-2-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Quand a lieu la natation ?",
    text: ["Lundi et mercredi", "Tous les jours", "Seulement le dimanche"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Natation : lundi et _________.",
    fill: "mercredi",
    vfQ: "La natation est lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Heure du VTT ?",
    text: ["Samedi à 9 h", "Lundi à 6 h", "Vendredi soir"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "VTT : samedi matin, départ à _________ h.",
    fill: "9",
    vfQ: "Le VTT part à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Prix par trimestre ?",
    text: ["120 €", "50 €", "200 €"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Tarif : _________ € par trimestre.",
    fill: "120",
    vfQ: "Le tarif est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Faut-il apporter des chaussures ?",
    text: ["Oui", "Non, tout est fourni", "Seulement des gants"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Équipement fourni sauf _________ de sport.",
    fill: "chaussures",
    vfQ: "Il faut apporter des chaussures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment s'inscrire ?",
    text: ["Sur place ou par e-mail", "Par téléphone seulement", "Par courrier"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Inscription : sur place ou par _________.",
    fill: "e-mail",
    fillA: ["email", "mail"],
    vfQ: "On peut s'inscrire par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand annuler un cours ?",
    text: ["24 h avant", "Le jour même", "Jamais"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Annulation jusqu'à _________ h avant.",
    fill: "24",
    vfQ: "Il faut annuler 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Horaires du centre ?",
    text: ["7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin"],
    textC: 0,
    img: ["serveur", "vendeur", "professeur"],
    imgC: 0,
    fillQ: "Centre ouvert de 7 h à _________ h.",
    fill: "22",
    vfQ: "Le centre ferme à 22 h.",
    vfC: 0,
  }),
]);

export const E7_2_CE: CommunicationExercise[] = [
  readingPoolExercise({
    id: "e7-2-ce-1",
    readingText: E7_2_CE_TEXT_1,
    questionPool: E7_2_CE_POOL_1,
  }),
  readingPoolExercise({
    id: "e7-2-ce-2",
    readingText: E7_2_CE_TEXT_2,
    questionPool: E7_2_CE_POOL_2,
  }),
  readingPoolExercise({
    id: "e7-2-ce-3",
    readingText: E7_2_CE_TEXT_3,
    questionPool: E7_2_CE_POOL_3,
  }),
  readingPoolExercise({
    id: "e7-2-ce-4",
    readingText: E7_2_CE_TEXT_4,
    questionPool: E7_2_CE_POOL_4,
  }),
  readingPoolExercise({
    id: "e7-2-ce-5",
    readingText: E7_2_CE_TEXT_5,
    questionPool: E7_2_CE_POOL_5,
  }),
  readingPoolExercise({
    id: "e7-2-ce-6",
    readingText: E7_2_CE_TEXT_6,
    questionPool: E7_2_CE_POOL_6,
  }),
  readingPoolExercise({
    id: "e7-2-ce-7",
    readingText: E7_2_CE_TEXT_7,
    questionPool: E7_2_CE_POOL_7,
  }),
  readingPoolExercise({
    id: "e7-2-ce-8",
    readingText: E7_2_CE_TEXT_8,
    questionPool: E7_2_CE_POOL_8,
  }),
  readingPoolExercise({
    id: "e7-2-ce-9",
    readingText: E7_2_CE_TEXT_9,
    questionPool: E7_2_CE_POOL_9,
  }),
  readingPoolExercise({
    id: "e7-2-ce-10",
    readingText: E7_2_CE_TEXT_10,
    questionPool: E7_2_CE_POOL_10,
  }),
  readingPoolExercise({
    id: "e7-2-ce-11",
    readingText: E7_2_CE_TEXT_11,
    questionPool: E7_2_CE_POOL_11,
  }),
  readingPoolExercise({
    id: "e7-2-ce-12",
    readingText: E7_2_CE_TEXT_12,
    questionPool: E7_2_CE_POOL_12,
  }),
  readingPoolExercise({
    id: "e7-2-ce-13",
    readingText: E7_2_CE_TEXT_13,
    questionPool: E7_2_CE_POOL_13,
  }),
  readingPoolExercise({
    id: "e7-2-ce-14",
    readingText: E7_2_CE_TEXT_14,
    questionPool: E7_2_CE_POOL_14,
  }),
  readingPoolExercise({
    id: "e7-2-ce-15",
    readingText: E7_2_CE_TEXT_15,
    questionPool: E7_2_CE_POOL_15,
  }),
  readingPoolExercise({
    id: "e7-2-ce-16",
    readingText: E7_2_CE_TEXT_16,
    questionPool: E7_2_CE_POOL_16,
  }),
  readingPoolExercise({
    id: "e7-2-ce-17",
    readingText: E7_2_CE_TEXT_17,
    questionPool: E7_2_CE_POOL_17,
  }),
  readingPoolExercise({
    id: "e7-2-ce-18",
    readingText: E7_2_CE_TEXT_18,
    questionPool: E7_2_CE_POOL_18,
  }),
  readingPoolExercise({
    id: "e7-2-ce-19",
    readingText: E7_2_CE_TEXT_19,
    questionPool: E7_2_CE_POOL_19,
  }),
  readingPoolExercise({
    id: "e7-2-ce-20",
    readingText: E7_2_CE_TEXT_20,
    questionPool: E7_2_CE_POOL_20,
  }),
];

/* ── Production orale — dialogues à jouer ──────────────────────────────────── */


const MONITEUR = { title: "Le moniteur", vous: "le moniteur / la monitrice" };
const CLIENT = { title: "Le client", vous: "le client / la cliente" };
const AMI_1 = { title: "Le premier ami", vous: "le premier ami / la première amie" };
const AMI_2 = { title: "Le deuxième ami", vous: "le deuxième ami / la deuxième amie" };


export const E7_2_PO: ExpressPoDialogue[] = [
{
    id: "e7-2-po-1",
    title: "S'inscrire à un cours de voile",
    context: "Vous êtes à la base de loisirs. Vous voulez apprendre la voile.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Je peux vous aider ?" },
      { role: "B", text: "Bonjour, je voudrais prendre des cours de voile." },
      { role: "A", text: "Vous savez déjà faire de la voile ?" },
      { role: "B", text: "Non, je suis débutant." },
      { role: "A", text: "Les cours pour les débutants sont le mardi et le jeudi à 10 h." },
      { role: "B", text: "Très bien. Un cours dure combien de temps ?" },
      { role: "A", text: "Deux heures. C'est 25 € le cours." },
      { role: "B", text: "Parfait, je m'inscris pour mardi !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-2-po-2",
    title: "Louer un VTT",
    context: "Vous voulez louer un vélo pour la journée.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Bonjour, je voudrais louer un VTT, s'il vous plaît." },
      { role: "A", text: "Pour la journée ou la demi-journée ?" },
      { role: "B", text: "Pour la journée. C'est combien ?" },
      { role: "A", text: "15 € la journée, avec le casque." },
      { role: "B", text: "Très bien. Il y a de beaux chemins pour le vélo ici ?" },
      { role: "A", text: "Oui, il y a un joli chemin dans la forêt, derrière le lac." },
      { role: "B", text: "Super, merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-2-po-3",
    title: "Choisir un sport ensemble",
    context: "Il fait beau. Vous choisissez une activité avec un ami.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Il fait beau aujourd'hui ! On joue au tennis ?" },
      { role: "B", text: "Ah non, je déteste le tennis. On peut faire du VTT ?" },
      { role: "A", text: "Il fait trop chaud pour le vélo…" },
      { role: "B", text: "Alors on fait du canoé-kayak sur le lac ?" },
      { role: "A", text: "Bonne idée ! J'adore le canoé-kayak." },
      { role: "B", text: "On peut louer un canoé à la base de loisirs." },
      { role: "A", text: "D'accord. On y va à quelle heure ?" },
      { role: "B", text: "À 14 h, après le déjeuner !" },
      { role: "A", text: "Parfait, j'ai toutes les infos." },
      { role: "B", text: "Super. À bientôt !" },
],
  },
  {
    id: "e7-2-po-4",
    title: "La météo et l'activité",
    context: "Vous téléphonez à la base de loisirs : vous voulez savoir si votre cours a lieu.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Base de loisirs du Lac, bonjour !" },
      { role: "B", text: "Bonjour, j'ai un cours de voile à 11 h. Il a lieu aujourd'hui ?" },
      { role: "A", text: "Il y a beaucoup de vent ce matin, le cours est annulé." },
      { role: "B", text: "Ah dommage… Et demain ?" },
      { role: "A", text: "Demain, il fait beau. Le cours est à 11 h, comme d'habitude." },
      { role: "B", text: "Parfait. Je dois apporter quelque chose ?" },
      { role: "A", text: "Non, nous prêtons tout le matériel." },
      { role: "B", text: "Merci, à demain !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-2-po-5",
    title: "Apprendre à nager",
    context: "Vous ne savez pas nager et vous voulez prendre des cours.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Qu'est-ce que je peux faire pour vous ?" },
      { role: "B", text: "Bonjour, je ne sais pas nager et je voudrais apprendre." },
      { role: "A", text: "Pas de problème ! Il y a des cours pour les adultes débutants." },
      { role: "B", text: "C'est quand ?" },
      { role: "A", text: "Le mardi soir à 18 h, à la piscine." },
      { role: "B", text: "Et le cours coûte combien ?" },
      { role: "A", text: "12 € le cours, ou 100 € pour dix cours." },
      { role: "B", text: "Je prends dix cours. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-2-po-6",
    title: "Une sortie en canoé-kayak",
    context: "Vous réservez une sortie en canoé-kayak pour deux personnes.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Bonjour, on peut faire du canoé-kayak aujourd'hui ?" },
      { role: "A", text: "Oui, il y a une sortie à 10 h. Vous êtes combien ?" },
      { role: "B", text: "Deux personnes. La sortie dure combien de temps ?" },
      { role: "A", text: "Deux heures, sur le lac et sur la rivière." },
      { role: "B", text: "Il faut savoir nager ?" },
      { role: "A", text: "Oui, et vous portez un gilet de sauvetage." },
      { role: "B", text: "D'accord, on réserve pour 10 h !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-2-po-7",
    title: "Le sport de chacun",
    context: "Vous parlez des sports que vous pratiquez avec un collègue.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Tu fais du sport, toi ?" },
      { role: "B", text: "Oui, je fais de la natation le lundi et du vélo le week-end. Et toi ?" },
      { role: "A", text: "Moi, je fais de l'escalade avec mon frère." },
      { role: "B", text: "L'escalade ? Ce n'est pas dangereux ?" },
      { role: "A", text: "Non, on grimpe avec un casque et une corde." },
      { role: "B", text: "Et tu en fais où ?" },
      { role: "A", text: "En salle en hiver, et en montagne en été." },
      { role: "B", text: "Super ! Je veux bien essayer un jour." },
      { role: "A", text: "Merci pour votre aide." },
      { role: "B", text: "Je vous en prie. Bonne journée !" },
],
  },
  {
    id: "e7-2-po-8",
    title: "Le cours d'escalade",
    context: "Vous demandez des informations sur le cours d'escalade.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Vous avez une question ?" },
      { role: "B", text: "Oui, je voudrais essayer l'escalade. Il y a un cours aujourd'hui ?" },
      { role: "A", text: "Oui, à 11 h. Il dure deux heures." },
      { role: "B", text: "Je n'ai jamais fait d'escalade. C'est un problème ?" },
      { role: "A", text: "Non, c'est un cours pour les débutants." },
      { role: "B", text: "Qu'est-ce qu'il faut apporter ?" },
      { role: "A", text: "Des baskets et une bouteille d'eau. Nous prêtons le casque." },
      { role: "B", text: "Parfait, je m'inscris !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-2-po-9",
    title: "Un week-end au ski",
    context: "Vous préparez un week-end à la montagne avec un ami.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Tu viens à la montagne ce week-end ? Les pistes ouvrent samedi !" },
      { role: "B", text: "Oui ! Mais je ne sais pas faire du ski…" },
      { role: "A", text: "Tu peux prendre un cours de ski débutant le samedi matin." },
      { role: "B", text: "Bonne idée. Et toi, tu skies ?" },
      { role: "A", text: "Oui, mais je voudrais essayer le surf cette année." },
      { role: "B", text: "Il fait quel temps ce week-end ?" },
      { role: "A", text: "Il neige vendredi et il fait beau samedi. C'est parfait !" },
      { role: "B", text: "Super, on part vendredi soir !" },
      { role: "A", text: "Merci pour le cours !" },
      { role: "B", text: "De rien. À la prochaine !" },
],
  },
  {
    id: "e7-2-po-10",
    title: "Un match de tennis",
    context: "Vous proposez un match de tennis à un collègue.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Tu joues au tennis, non ?" },
      { role: "B", text: "Oui, je joue le samedi matin. Pourquoi ?" },
      { role: "A", text: "On fait un match ensemble ce week-end ?" },
      { role: "B", text: "D'accord ! On joue où ?" },
      { role: "A", text: "Au stade, il y a des courts de tennis. C'est 10 € l'heure." },
      { role: "B", text: "Très bien. Samedi à 9 h, ça te va ?" },
      { role: "A", text: "Parfait. J'apporte les balles." },
      { role: "B", text: "Et moi, je te prête une raquette si tu veux !" },
      { role: "A", text: "Bon courage pour la suite !" },
      { role: "B", text: "Merci, toi aussi !" },
],
  },
  {
    id: "e7-2-po-11",
    title: "S'inscrire à la natation",
    context: "Vous voulez apprendre à nager.",
    roleA: { title: "Le moniteur", vous: "le moniteur / la monitrice" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, cours de natation ?" },
      { role: "B", text: "Oui, lundi et mercredi." },
      { role: "A", text: "Je suis débutant." },
      { role: "B", text: "Pas de problème." },
      { role: "A", text: "Je m'inscris." },
      { role: "B", text: "120 € le trimestre." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-2-po-12",
    title: "Louer un VTT",
    context: "Vous louez un vélo.",
    roleA: { title: "L'employé", vous: "l'employé / l'employée" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Un VTT pour l'après-midi ?" },
      { role: "B", text: "Oui, 25 €." },
      { role: "A", text: "Casque inclus ?" },
      { role: "B", text: "Oui." },
      { role: "A", text: "Merci." },
      { role: "B", text: "Bonne balade !" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-2-po-13",
    title: "Cours annulé",
    context: "Le cours est annulé.",
    roleA: { title: "Le moniteur", vous: "le moniteur / la monitrice" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Le cours de ce soir ?" },
      { role: "B", text: "Annulé, le moniteur est malade." },
      { role: "A", text: "Et demain ?" },
      { role: "B", text: "Normal, à 18 h." },
      { role: "A", text: "Merci." },
      { role: "B", text: "Désolé." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-2-po-14",
    title: "Escalade",
    context: "Premier cours d'escalade.",
    roleA: { title: "Le moniteur", vous: "le moniteur / la monitrice" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Première fois." },
      { role: "B", text: "Pas de souci. Chaussures là." },
      { role: "A", text: "C'est haut !" },
      { role: "B", text: "Allez-y doucement." },
      { role: "A", text: "Merci." },
      { role: "B", text: "Bravo !" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-2-po-15",
    title: "Météo",
    context: "Il pleut, sortie annulée ?",
    roleA: { title: "Le moniteur", vous: "le moniteur / la monitrice" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "On fait le VTT ?" },
      { role: "B", text: "Non, il pleut. Reporté samedi." },
      { role: "A", text: "D'accord." },
      { role: "B", text: "Je vous préviens." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-2-po-16",
    title: "Tennis",
    context: "Vous réservez un court.",
    roleA: { title: "L'employé", vous: "l'employé / l'employée" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Un court à 16 h ?" },
      { role: "B", text: "Oui, court 3." },
      { role: "A", text: "Raquettes ?" },
      { role: "B", text: "Location 5 €." },
      { role: "A", text: "Merci." },
      { role: "B", text: "Bon match !" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-2-po-17",
    title: "Ski",
    context: "Vous vous renseignez sur le ski.",
    roleA: { title: "Le moniteur", vous: "le moniteur / la monitrice" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Cours de ski ?" },
      { role: "B", text: "En janvier, 200 € la semaine." },
      { role: "A", text: "Matériel inclus ?" },
      { role: "B", text: "Skis et bâtons oui." },
      { role: "A", text: "Je réfléchis." },
      { role: "B", text: "Pas de souci." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-2-po-18",
    title: "Sport entre amis",
    context: "Vous proposez une activité.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "L'amie", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "On fait du vélo samedi ?" },
      { role: "B", text: "Bonne idée !" },
      { role: "A", text: "9 h ?" },
      { role: "B", text: "Parfait." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-2-po-19",
    title: "Niveau",
    context: "Quel niveau pour le cours ?",
    roleA: { title: "Le moniteur", vous: "le moniteur / la monitrice" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Quel niveau ?" },
      { role: "B", text: "Débutant." },
      { role: "A", text: "Groupe débutant mardi." },
      { role: "B", text: "Je m'inscris." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-2-po-20",
    title: "Abonnement",
    context: "Vous prenez un abonnement.",
    roleA: { title: "L'employé", vous: "l'employé / l'employée" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Abonnement mensuel ?" },
      { role: "B", text: "50 €, tous les cours." },
      { role: "A", text: "Je prends." },
      { role: "B", text: "Voici votre carte." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
];


/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E7_2_PE: ExpressPePrompt[] = [
{
    id: "e7-2-pe-1",
    title: "Proposer une activité",
    situation: "Il fait très beau ce week-end.",
    instruction: "Écrivez un message à un ami : proposez une activité sportive, donnez le lieu et l'heure du rendez-vous.",
    points: ["L'activité proposée", "Le lieu", "Le jour et l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-2",
    title: "Mon sport préféré",
    situation: "Votre professeur de français vous demande de présenter votre sport préféré.",
    instruction: "Décrivez votre sport préféré : pourquoi vous l'aimez, où et quand vous le pratiquez.",
    points: ["Le sport et pourquoi vous l'aimez", "Où vous le pratiquez", "Quand vous le pratiquez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-3",
    title: "Inscription à un cours",
    situation: "Vous voulez apprendre la voile à la base de loisirs.",
    instruction: "Écrivez un e-mail : dites que vous êtes débutant(e), demandez les horaires des cours et le prix.",
    points: ["Votre niveau (débutant)", "Une question sur les horaires", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-4",
    title: "Raconter une journée sportive",
    situation: "Hier, vous avez passé la journée à la base de loisirs avec des amis.",
    instruction: "Racontez votre journée : les activités du matin, celles de l'après-midi et votre moment préféré.",
    points: ["L'activité du matin", "L'activité de l'après-midi", "Votre moment préféré"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-5",
    title: "Le programme selon la météo",
    situation: "Samedi, il fait beau. Dimanche, il pleut.",
    instruction: "Écrivez le programme du week-end pour votre famille : une activité pour samedi, une activité pour dimanche et une explication avec la météo.",
    points: ["L'activité de samedi", "L'activité de dimanche", "La météo des deux jours"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-6",
    title: "Reporter une sortie",
    situation: "Vous devez faire du vélo avec un ami demain, mais la météo annonce de la pluie.",
    instruction: "Écrivez un message à votre ami : expliquez le problème, proposez une autre date ou une autre activité.",
    points: ["La météo de demain", "Une nouvelle date", "Une autre idée d'activité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-7",
    title: "Les sports de ma famille",
    situation: "Vous préparez un week-end sportif : chaque personne de la famille choisit une activité.",
    instruction: "Décrivez les activités du week-end : qui fait quoi, où et quand.",
    points: ["Trois personnes et leurs sports", "Le lieu des activités", "Le moment (jour, heure)"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-8",
    title: "Louer des vélos",
    situation: "Vous voulez louer des vélos pour toute la famille pendant les vacances.",
    instruction: "Écrivez un e-mail au magasin de location : le nombre de vélos, la durée de la location et une question sur le prix.",
    points: ["Le nombre de vélos", "La durée de la location", "Une question sur le prix ou les casques"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-9",
    title: "Comparer deux sports",
    situation: "Un ami hésite entre la natation et l'escalade.",
    instruction: "Comparez les deux sports : les avantages de chaque sport et votre conseil pour votre ami.",
    points: ["Les avantages de la natation", "Les avantages de l'escalade", "Votre conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-10",
    title: "Conseils à un débutant",
    situation: "Un ami veut commencer le sport, mais il ne sait pas quoi choisir.",
    instruction: "Donnez-lui des conseils : un sport facile pour commencer, le matériel nécessaire et une idée de cours pour débutants.",
    points: ["Un sport pour commencer", "Le matériel nécessaire", "Une idée de cours débutant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-11",
    title: "Mon sport préféré",
    situation: "Parlez de votre sport.",
    instruction: "Décrivez pourquoi vous aimez ce sport.",
    points: ["Le sport", "Pourquoi", "Fréquence"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-2-pe-12",
    title: "Proposer une activité",
    situation: "Invitez un ami.",
    instruction: "Proposez une sortie sportive.",
    points: ["L'activité", "Date et heure", "Équipement"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-2-pe-13",
    title: "Inscription club",
    situation: "Vous voulez vous inscrire.",
    instruction: "Écrivez au club : sport choisi et questions.",
    points: ["Le sport", "Vos questions", "Disponibilités"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-2-pe-14",
    title: "Journée sportive",
    situation: "Racontez une journée.",
    instruction: "Décrivez une journée de sport.",
    points: ["Le matin", "L'après-midi", "Impressions"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-2-pe-15",
    title: "Météo et sport",
    situation: "Le temps change vos plans.",
    instruction: "Expliquez comment la météo influence vos activités.",
    points: ["Beau temps", "Mauvais temps", "Alternative"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-2-pe-16",
    title: "Conseils débutant",
    situation: "Un ami commence le running.",
    instruction: "Donnez des conseils.",
    points: ["Équipement", "Fréquence", "Sécurité"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-2-pe-17",
    title: "Comparer sports",
    situation: "Tennis ou natation ?",
    instruction: "Comparez deux sports.",
    points: ["Sport 1", "Sport 2", "Préférence"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-2-pe-18",
    title: "Reporter sortie",
    situation: "Vous ne pouvez pas venir.",
    instruction: "Écrivez à votre ami pour reporter.",
    points: ["L'excuse", "Nouvelle date", "Excuses"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-2-pe-19",
    title: "Famille et sport",
    situation: "Décrivez les sports de votre famille.",
    instruction: "Qui fait quoi et à quelle fréquence.",
    points: ["Membre 1", "Membre 2", "Ensemble"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-2-pe-20",
    title: "Louer du matériel",
    situation: "Vous louez du matériel.",
    instruction: "Décrivez la location : quoi, prix, durée.",
    points: ["Le matériel", "Le prix", "La durée"],
    minWords: 50,
    maxWords: 120,
  },
];
