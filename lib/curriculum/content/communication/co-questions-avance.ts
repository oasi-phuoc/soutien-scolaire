import { buildPool, type COMultiQuestion } from "./co-questions-helpers";

const CONVERSATION_1 = buildPool("avance", "conversation-1", [
  {
    id: "ac1-q1", textQ: "Qui est Nadia ?", text: ["La nièce de l'interlocutrice","Sa fille","Sa copine"], textC: 0,
    img: ["Nièce","Fille","Copine"], imgC: 0,
    fillQ: "Nadia est la _________ de l'interlocutrice.", fill: "nièce",
    fillA: ["niece"],
  },
  {
    id: "ac1-q2", textQ: "Qu'est-ce que StarMyName.com ?", text: ["Un site de chansons personnalisées","Un groupe de musique","Une boutique de CD"], textC: 0,
    img: ["Site chansons","Groupe","Boutique CD"], imgC: 0,
    fillQ: "StarMyName.com propose des chansons _________.", fill: "personnalisées",
    fillA: ["personnalisees"],
  },
  {
    id: "ac1-q3", textQ: "Combien coûte environ l'album ?", text: ["30 €","50 €","100 €"], textC: 0,
    img: ["30 €","50 €","100 €"], imgC: 0,
    fillQ: "L'album coûte un peu moins de ___ €.", fill: "30"
  },
  {
    id: "ac1-q4", textQ: "Au bout de combien de temps reçoit-on l'album ?", text: ["Deux ou trois jours","Deux semaines","Un mois"], textC: 0,
    img: ["2-3 jours","2 semaines","1 mois"], imgC: 0,
    fillQ: "L'album arrive après ___ ou trois jours.", fill: "deux",
    fillA: ["2"],
  },
  {
    id: "ac1-q5", textQ: "Combien de prénoms figurent sur le site ?", text: ["Plus de 700","Plus de 70","Plus de 7 000"], textC: 0,
    img: ["700+","70+","7000+"], imgC: 0,
    fillQ: "Le site propose plus de ___ prénoms.", fill: "700"
  },
  {
    id: "ac1-q6", textQ: "Qui a créé le site StarMyName ?", text: ["Olivier","Nadia","Jacqueline"], textC: 0,
    img: ["Olivier","Nadia","Jacqueline"], imgC: 0,
    fillQ: "Le créateur du site s'appelle _________.", fill: "Olivier",
    fillA: ["olivier"],
  },
]);

const CONVERSATION_2 = buildPool("avance", "conversation-2", [
  {
    id: "ac2-q1", textQ: "Quel sport pratique Jacqueline cette année ?", text: ["L'urban-training","Le qi-gong","Le yoga"], textC: 0,
    img: ["Urban-training","Qi-gong","Yoga"], imgC: 0,
    fillQ: "Jacqueline fait de l'_________-training.", fill: "urban",
    fillA: ["urban-training"],
  },
  {
    id: "ac2-q2", textQ: "Où se pratique l'urban-training ?", text: ["Dans la rue","En salle uniquement","À la piscine"], textC: 0,
    img: ["Rue","Salle","Piscine"], imgC: 0,
    fillQ: "Ce sport se pratique dans la _________.", fill: "rue"
  },
  {
    id: "ac2-q3", textQ: "Quel type de chaussures faut-il ?", text: ["Des chaussures de running","Des baskets montantes","Des chaussures de ville"], textC: 0,
    img: ["Running","Montantes","Ville"], imgC: 0,
    fillQ: "Il faut des chaussures de _________.", fill: "running"
  },
  {
    id: "ac2-q4", textQ: "Combien de temps dure l'échauffement ?", text: ["Environ dix minutes","Cinq minutes","Vingt minutes"], textC: 0,
    img: ["10 min","5 min","20 min"], imgC: 0,
    fillQ: "L'échauffement dure environ ___ minutes.", fill: "dix",
    fillA: ["10"],
  },
  {
    id: "ac2-q5", textQ: "Quel exemple d'exercice est cité ?", text: ["Des abdos sur des marches","De la natation","Du vélo"], textC: 0,
    img: ["Abdos marches","Natation","Vélo"], imgC: 0,
    fillQ: "On peut faire des abdos sur des _________.", fill: "marches"
  },
  {
    id: "ac2-q6", textQ: "Combien de temps dure la séance au total ?", text: ["Une heure","Trente minutes","Deux heures"], textC: 0,
    img: ["1 h","30 min","2 h"], imgC: 0,
    fillQ: "La séance dure une _________.", fill: "heure"
  },
]);

const CONVERSATION_3 = buildPool("avance", "conversation-3", [
  {
    id: "ac3-q1", textQ: "Quelles personnes sont les plus vulnérables aux arnaques ?", text: ["Les personnes âgées","Les jeunes","Les étudiants"], textC: 0,
    img: ["Personnes âgées","Jeunes","Étudiants"], imgC: 0,
    fillQ: "Les personnes _________ sont les plus vulnérables.", fill: "âgées",
    fillA: ["agees"],
  },
  {
    id: "ac3-q2", textQ: "De qui les escrocs se font-ils parfois passer ?", text: ["De faux policiers ou agents du gaz","De médecins","De livreurs"], textC: 0,
    img: ["Faux policiers","Médecins","Livreurs"], imgC: 0,
    fillQ: "Ils se font passer pour de faux _________.", fill: "policiers"
  },
  {
    id: "ac3-q3", textQ: "Que peuvent demander les seniors à un visiteur ?", text: ["Son nom et sa carte professionnelle","Son numéro de téléphone","Une facture"], textC: 0,
    img: ["Carte pro","Téléphone","Facture"], imgC: 0,
    fillQ: "Ils peuvent demander la carte _________.", fill: "professionnelle"
  },
  {
    id: "ac3-q4", textQ: "Quelle autre arnaque est mentionnée ?", text: ["Les démarcheurs qui surfacturent","Les faux emails","Les appels internationaux"], textC: 0,
    img: ["Démarcheurs","Emails","Appels"], imgC: 0,
    fillQ: "Les _________ proposent des travaux trop chers.", fill: "démarcheurs",
    fillA: ["demarcheurs"],
  },
  {
    id: "ac3-q5", textQ: "Comment s'appelle le plan d'action national ?", text: ["Opération tranquillité seniors","Plan sécurité 2010","Mission seniors"], textC: 0,
    img: ["Tranquillité seniors","Sécurité 2010","Mission seniors"], imgC: 0,
    fillQ: "Le plan s'appelle Opération tranquillité _________.", fill: "seniors"
  },
  {
    id: "ac3-q6", textQ: "Qu'est-ce qui rend les seniors plus fragiles ?", text: ["L'isolement","La télévision","Les médicaments"], textC: 0,
    img: ["Isolement","Télévision","Médicaments"], imgC: 0,
    fillQ: "C'est l'_________ qui les rend vulnérables.", fill: "isolement"
  },
]);

const CONVERSATION_4 = buildPool("avance", "conversation-4", [
  {
    id: "ac4-q1", textQ: "Quel problème a Madame Bonnefoy en hiver ?", text: ["De la dépression saisonnière","Une fracture","Une allergie"], textC: 0,
    img: ["Dépression saisonnière","Fracture","Allergie"], imgC: 0,
    fillQ: "Elle souffre de dépression _________.", fill: "saisonnière",
    fillA: ["saisonniere"],
  },
  {
    id: "ac4-q2", textQ: "Quel traitement la patiente souhaite-t-elle essayer ?", text: ["La luminothérapie","Une opération","Un régime"], textC: 0,
    img: ["Luminothérapie","Opération","Régime"], imgC: 0,
    fillQ: "Elle veut essayer la _________.", fill: "luminothérapie",
    fillA: ["luminotherapie"],
  },
  {
    id: "ac4-q3", textQ: "Combien de temps durent les séances recommandées ?", text: ["30 minutes","10 minutes","Une heure"], textC: 0,
    img: ["30 min","10 min","1 h"], imgC: 0,
    fillQ: "Les séances durent ___ minutes.", fill: "30"
  },
  {
    id: "ac4-q4", textQ: "Quelle puissance minimale pour la lampe ?", text: ["1 500 lux","500 lux","3 000 lux"], textC: 0,
    img: ["1500 lux","500 lux","3000 lux"], imgC: 0,
    fillQ: "Il faut une lampe de ___ lux minimum.", fill: "1500",
    fillA: ["1 500"],
  },
  {
    id: "ac4-q5", textQ: "Quel est le prix d'un appareil de luminothérapie ?", text: ["200 € à 300 €","50 € à 100 €","500 € à 600 €"], textC: 0,
    img: ["200-300 €","50-100 €","500-600 €"], imgC: 0,
    fillQ: "Il faut compter ___ € à 300 €.", fill: "200"
  },
  {
    id: "ac4-q6", textQ: "Combien coûtent environ les simulateurs d'aube ?", text: ["100 €","30 €","500 €"], textC: 0,
    img: ["100 €","30 €","500 €"], imgC: 0,
    fillQ: "Les simulateurs d'aube coûtent environ ___ €.", fill: "100"
  },
]);

const CONVERSATION_5 = buildPool("avance", "conversation-5", [
  {
    id: "ac5-q1", textQ: "Où a lieu la réunion pour créer l'AMAP ?", text: ["À Limons","À Paris","À Lyon"], textC: 0,
    img: ["Limons","Paris","Lyon"], imgC: 0,
    fillQ: "La réunion a lieu à _________.", fill: "Limons",
    fillA: ["limons"],
  },
  {
    id: "ac5-q2", textQ: "Que signifie AMAP ?", text: ["Association pour le maintien de l'agriculture paysanne","Association des marchés agricoles parisiens","Aide aux maraîchers et producteurs"], textC: 0,
    img: ["Maintien agriculture","Marchés parisiens","Aide maraîchers"], imgC: 0,
    fillQ: "AMAP signifie association pour le maintien de l'agriculture _________.", fill: "paysanne"
  },
  {
    id: "ac5-q3", textQ: "Comment est calculé le prix de la part ?", text: ["Budget annuel divisé par le nombre d'inscrits","Prix du marché chaque semaine","Un tarif fixe imposé"], textC: 0,
    img: ["Budget / inscrits","Prix marché","Tarif fixe"], imgC: 0,
    fillQ: "Le budget est divisé par le nombre de personnes _________.", fill: "inscrites",
    fillA: ["inscrits"],
  },
  {
    id: "ac5-q4", textQ: "À quelle fréquence reçoivent les membres leur panier ?", text: ["Un par semaine","Un par mois","Un par jour"], textC: 0,
    img: ["1 / semaine","1 / mois","1 / jour"], imgC: 0,
    fillQ: "Les membres achètent un panier par _________.", fill: "semaine"
  },
  {
    id: "ac5-q5", textQ: "Pour combien de personnes est prévu un panier ?", text: ["Une famille de quatre","Une personne seule","Dix personnes"], textC: 0,
    img: ["4 personnes","1 personne","10 personnes"], imgC: 0,
    fillQ: "Un panier correspond à une famille de ___ personnes.", fill: "quatre",
    fillA: ["4"],
  },
  {
    id: "ac5-q6", textQ: "Quel avantage pour le fermier ?", text: ["Vendre sa production avec peu de pertes","Gagner un concours","Exporter à l'étranger"], textC: 0,
    img: ["Peu de pertes","Concours","Export"], imgC: 0,
    fillQ: "Le fermier a très peu de _________ et de gaspillages.", fill: "pertes"
  },
]);

const CONVERSATION_6 = buildPool("avance", "conversation-6", [
  {
    id: "ac6-q1", textQ: "Depuis quand propose-t-on ce service en entreprise ?", text: ["Depuis 2003","Depuis 2010","Depuis 1990"], textC: 0,
    img: ["2003","2010","1990"], imgC: 0,
    fillQ: "Le service existe depuis _________.", fill: "2003"
  },
  {
    id: "ac6-q2", textQ: "D'où proviennent les fruits ?", text: ["De vergers en Plaine de Versailles","D'importation","De serres en Bretagne"], textC: 0,
    img: ["Versailles","Import","Bretagne"], imgC: 0,
    fillQ: "Les vergers sont en Plaine de _________.", fill: "Versailles",
    fillA: ["versailles"],
  },
  {
    id: "ac6-q3", textQ: "Combien de livraisons par semaine au maximum ?", text: ["Cinq","Deux","Dix"], textC: 0,
    img: ["5","2","10"], imgC: 0,
    fillQ: "Il y a entre une et ___ livraisons par semaine.", fill: "cinq",
    fillA: ["5"],
  },
  {
    id: "ac6-q4", textQ: "Quel tarif pour deux paniers ou plus par semaine ?", text: ["45 € hors taxes","48 € hors taxes","30 € hors taxes"], textC: 0,
    img: ["45 € HT","48 € HT","30 € HT"], imgC: 0,
    fillQ: "Deux paniers ou plus coûtent ___ € hors taxes.", fill: "45"
  },
  {
    id: "ac6-q5", textQ: "Combien paie en moyenne un salarié pour 3 fruits ?", text: ["1 €","3 €","5 €"], textC: 0,
    img: ["1 €","3 €","5 €"], imgC: 0,
    fillQ: "La participation moyenne est de ___ € pour 3 fruits.", fill: "1"
  },
  {
    id: "ac6-q6", textQ: "Quels fruits en décembre 2010 sont cités ?", text: ["Des clémentines et des litchis","Des fraises","Des melons"], textC: 0,
    img: ["Clémentines","Fraises","Melons"], imgC: 0,
    fillQ: "En décembre, il y avait des _________ et des litchis.", fill: "clémentines",
    fillA: ["clementines"],
  },
]);

const CONVERSATION_7 = buildPool("avance", "conversation-7", [
  {
    id: "ac7-q1", textQ: "Combien de bises dans la majorité des régions de France ?", text: ["2 bises","1 bise","4 bises"], textC: 0,
    img: ["2","1","4"], imgC: 0,
    fillQ: "Dans la majorité des régions, on fait ___ bises.", fill: "2",
    fillA: ["deux"],
  },
  {
    id: "ac7-q2", textQ: "Combien de bises dans la région de Brest ?", text: ["Une seule","Trois","Quatre"], textC: 0,
    img: ["1","3","4"], imgC: 0,
    fillQ: "À Brest, on ne fait qu'___ bise.", fill: "une",
    fillA: ["1"],
  },
  {
    id: "ac7-q3", textQ: "Combien de bises dans le Massif Central ?", text: ["3","2","1"], textC: 0,
    img: ["3","2","1"], imgC: 0,
    fillQ: "Dans le Massif Central, on en fait _________.", fill: "3",
    fillA: ["trois"],
  },
  {
    id: "ac7-q4", textQ: "Pourquoi embrasse-t-on parfois les enfants ?", text: ["Pour les réconforter après un bobo","Pour les punir","Pour les faire dormir"], textC: 0,
    img: ["Réconforter","Punir","Dormir"], imgC: 0,
    fillQ: "On les réconforte quand ils ont un petit _________.", fill: "bobo"
  },
  {
    id: "ac7-q5", textQ: "Quand s'embrasse-t-on sous le gui ?", text: ["Au nouvel an","À Pâques","En été"], textC: 0,
    img: ["Nouvel an","Pâques","Été"], imgC: 0,
    fillQ: "On s'embrasse sous le gui au _________ an.", fill: "nouvel",
    fillA: ["nouvel an"],
  },
  {
    id: "ac7-q6", textQ: "Quelle expression cite Michèle pour le nouvel an ?", text: ["Au gui l'an neuf !","Bonne année !","Joyeux Noël !"], textC: 0,
    img: ["Au gui l'an neuf","Bonne année","Joyeux Noël"], imgC: 0,
    fillQ: "On dit « Au gui l'___ neuf ! »", fill: "an"
  },
]);

const CONVERSATION_8 = buildPool("avance", "conversation-8", [
  {
    id: "ac8-q1", textQ: "Quel pourcentage de volontaires ont une activité professionnelle chez Passerelles et Compétences ?", text: ["80 %","50 %","20 %"], textC: 0,
    img: ["80 %","50 %","20 %"], imgC: 0,
    fillQ: "___ % des volontaires ont une activité professionnelle.", fill: "80"
  },
  {
    id: "ac8-q2", textQ: "Qu'est-ce que le bénévolat de compétences ?", text: ["Mettre sa compétence professionnelle au service d'associations","Travailler gratuitement toute l'année","Faire du sport pour une association"], textC: 0,
    img: ["Compétence pro","Toute l'année","Sport"], imgC: 0,
    fillQ: "C'est mettre sa compétence _________ au service d'associations.", fill: "professionnelle"
  },
  {
    id: "ac8-q3", textQ: "Quels domaines sont les plus recherchés ?", text: ["Informatique, communication et marketing","Cuisine et restauration","Agriculture"], textC: 0,
    img: ["Info / com","Cuisine","Agriculture"], imgC: 0,
    fillQ: "Les domaines recherchés sont l'informatique, la communication et le _________.", fill: "marketing"
  },
  {
    id: "ac8-q4", textQ: "Quel est le rôle de Passerelles et Compétences ?", text: ["Mettre en relation bénévoles et associations","Financer les associations","Former les retraités"], textC: 0,
    img: ["Mise en relation","Financement","Formation"], imgC: 0,
    fillQ: "L'association met en relation les bénévoles et les _________.", fill: "associations"
  },
  {
    id: "ac8-q5", textQ: "Quelle est la deuxième association évoquée ?", text: ["Voisin-Âge","Les Restos du Cœur","Secours populaire"], textC: 0,
    img: ["Voisin-Âge","Restos du Cœur","Secours pop."], imgC: 0,
    fillQ: "La deuxième association s'appelle _________.", fill: "Voisin-Âge",
    fillA: ["voisin-age", "voisin age"],
  },
  {
    id: "ac8-q6", textQ: "Dans quelle ville se déroule le reportage ?", text: ["Paris","Lyon","Marseille"], textC: 0,
    img: ["Paris","Lyon","Marseille"], imgC: 0,
    fillQ: "Le reportage se passe à _________.", fill: "Paris",
    fillA: ["paris"],
  },
]);

export const CO_QUESTION_POOLS_AVANCE: Record<string, COMultiQuestion[]> = {
  "avance-conversation-1": CONVERSATION_1,
  "avance-conversation-2": CONVERSATION_2,
  "avance-conversation-3": CONVERSATION_3,
  "avance-conversation-4": CONVERSATION_4,
  "avance-conversation-5": CONVERSATION_5,
  "avance-conversation-6": CONVERSATION_6,
  "avance-conversation-7": CONVERSATION_7,
  "avance-conversation-8": CONVERSATION_8,
};
