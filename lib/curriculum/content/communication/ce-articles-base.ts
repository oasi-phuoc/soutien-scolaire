/** Articles « Lire des informations » — CE base (pool 10 textes A1). */

export type CEArticleBaseQuestion =
  | {
      prompt: string;
      choices: { label: string; image?: string }[];
      correct: number;
      image?: boolean;
      answer?: undefined;
      accept?: undefined;
    }
  | {
      prompt: string;
      answer: string;
      accept?: string[];
      choices?: undefined;
      correct?: undefined;
      image?: undefined;
    };

export type CEArticleBaseItem = {
  title: string;
  sections: { heading: string; body: string; image?: string; imageLabel?: string }[];
  questions: CEArticleBaseQuestion[];
};

export const CE_ARTICLES_BASE: CEArticleBaseItem[] = [
  {
    title: "Améliorez votre mémoire !",
    sections: [
      {
        heading: "L'alimentation",
        body: "Mangez des légumes frais, des noix et du poisson. Buvez de l'eau régulièrement.",
        imageLabel: "Alimentation",
      },
      {
        heading: "Le sport",
        body: "La marche, le vélo et la danse stimulent le cerveau et aident à rester concentré.",
        imageLabel: "Sport",
      },
      {
        heading: "L'activité mentale",
        body: "Jouez à des jeux de société, lisez un texte ou racontez une histoire à un ami.",
        imageLabel: "Activité mentale",
      },
    ],
    questions: [
      {
        prompt: "Que conseille-t-on de manger ?",
        choices: [{ label: "Des légumes frais" }, { label: "Beaucoup de viande" }, { label: "Seulement du sucre" }],
        correct: 0,
      },
      {
        prompt: "Quel sport est conseillé ?",
        choices: [{ label: "La marche" }, { label: "La boxe" }, { label: "Le ski nautique" }],
        correct: 0,
      },
      { prompt: "Quelle boisson est conseillée ?", answer: "eau", accept: ["de l'eau", "l eau"] },
      {
        prompt: "Quelle activité mentale peut-on faire ?",
        choices: [{ label: "Jouer à des jeux de société" }, { label: "Dormir toute la journée" }, { label: "Ne rien lire" }],
        correct: 0,
      },
      {
        prompt: "Pourquoi faut-il faire du sport ?",
        choices: [{ label: "Pour stimuler le cerveau" }, { label: "Pour oublier les règles" }, { label: "Pour éviter les amis" }],
        correct: 0,
      },
      { prompt: "À qui peut-on raconter une histoire ?", answer: "ami", accept: ["un ami", "à un ami"] },
      {
        prompt: "Quel est le sujet principal de l'article ?",
        choices: [{ label: "La mémoire" }, { label: "Le voyage" }, { label: "La météo" }],
        correct: 0,
      },
    ],
  },
  {
    title: "Bien vivre en hiver",
    sections: [
      {
        heading: "Se protéger du froid",
        body: "Portez un manteau chaud, des gants et de bonnes chaussures quand il neige.",
        imageLabel: "Froid",
      },
      {
        heading: "Rester en forme",
        body: "Même en hiver, sortez marcher un peu et aérez votre logement chaque jour.",
        imageLabel: "Hiver",
      },
      {
        heading: "Éviter les maladies",
        body: "Lavez-vous souvent les mains et reposez-vous si vous êtes fatigué.",
        imageLabel: "Lavage des mains",
      },
    ],
    questions: [
      {
        prompt: "Que faut-il porter quand il fait froid ?",
        choices: [{ label: "Un manteau chaud" }, { label: "Un maillot de bain" }, { label: "Des sandales" }],
        correct: 0,
      },
      {
        prompt: "Que faut-il faire même en hiver ?",
        choices: [{ label: "Sortir marcher un peu" }, { label: "Rester au lit toute la journée" }, { label: "Fermer toutes les fenêtres pour toujours" }],
        correct: 0,
      },
      { prompt: "Que faut-il aérer chaque jour ?", answer: "logement", accept: ["le logement", "maison", "appartement"] },
      {
        prompt: "Que faut-il laver souvent ?",
        choices: [{ label: "Les mains" }, { label: "Les chaussures" }, { label: "Les fenêtres" }],
        correct: 0,
      },
      {
        prompt: "Que faire si on est fatigué ?",
        choices: [{ label: "Se reposer" }, { label: "Courir toute la nuit" }, { label: "Ne pas dormir" }],
        correct: 0,
      },
      { prompt: "Quel vêtement protège les mains ?", answer: "gants", accept: ["des gants"] },
      {
        prompt: "Quel est le sujet de l'article ?",
        choices: [{ label: "Bien vivre en hiver" }, { label: "Acheter une voiture" }, { label: "Choisir un film" }],
        correct: 0,
      },
    ],
  },
  {
    title: "Manger équilibré chaque jour",
    sections: [
      {
        heading: "Les fruits et légumes",
        body: "Mangez des fruits et des légumes à chaque repas. Choisissez des produits de saison : ils coûtent moins cher et ont plus de goût.",
        imageLabel: "Fruits",
      },
      {
        heading: "L'eau",
        body: "Buvez de l'eau pendant la journée. Limitez les boissons sucrées et les sodas.",
        imageLabel: "Eau",
      },
      {
        heading: "Les repas",
        body: "Prenez le temps de manger tranquillement. Évitez de sauter le petit-déjeuner.",
        imageLabel: "Repas",
      },
    ],
    questions: [
      {
        prompt: "Que faut-il manger à chaque repas ?",
        choices: [{ label: "Des fruits et des légumes" }, { label: "Seulement du pain" }, { label: "Des bonbons" }],
        correct: 0,
      },
      {
        prompt: "Pourquoi choisir des produits de saison ?",
        choices: [{ label: "Ils coûtent moins cher" }, { label: "Ils sont interdits" }, { label: "Ils sont toujours surgelés" }],
        correct: 0,
      },
      { prompt: "Que faut-il boire pendant la journée ?", answer: "eau", accept: ["de l'eau", "l eau"] },
      {
        prompt: "Que faut-il limiter ?",
        choices: [{ label: "Les sodas" }, { label: "Les légumes" }, { label: "L'eau" }],
        correct: 0,
      },
      {
        prompt: "Que faut-il éviter de sauter ?",
        choices: [{ label: "Le petit-déjeuner" }, { label: "Le week-end" }, { label: "Les vacances" }],
        correct: 0,
      },
      { prompt: "Comment faut-il manger ?", answer: "tranquillement", accept: ["prendre le temps", "lentement", "calmement"] },
      {
        prompt: "Quel est le sujet de l'article ?",
        choices: [{ label: "Manger équilibré" }, { label: "Réparer une voiture" }, { label: "Apprendre l'anglais" }],
        correct: 0,
      },
    ],
  },
  {
    title: "Bien dormir la nuit",
    sections: [
      {
        heading: "Avant de dormir",
        body: "Éteignez la télévision et le téléphone une heure avant de vous coucher. Lisez un livre ou écoutez de la musique douce.",
        imageLabel: "Soir",
      },
      {
        heading: "Dans la chambre",
        body: "Gardez la chambre sombre et calme. Aérez la pièce quelques minutes chaque soir.",
        imageLabel: "Chambre",
      },
      {
        heading: "Les horaires",
        body: "Couchez-vous et levez-vous à des heures régulières, même le week-end.",
        imageLabel: "Horaires",
      },
    ],
    questions: [
      {
        prompt: "Que faut-il éteindre avant de dormir ?",
        choices: [{ label: "La télévision et le téléphone" }, { label: "Le radiateur" }, { label: "La lumière dehors" }],
        correct: 0,
      },
      {
        prompt: "Que peut-on faire avant de se coucher ?",
        choices: [{ label: "Lire un livre" }, { label: "Jouer à un jeu vidéo bruyant" }, { label: "Boire beaucoup de café" }],
        correct: 0,
      },
      { prompt: "Comment doit être la chambre ?", answer: "sombre et calme", accept: ["sombre", "calme", "sombre et silencieuse"] },
      {
        prompt: "Que faut-il aérer chaque soir ?",
        choices: [{ label: "La pièce" }, { label: "La voiture" }, { label: "Le frigo" }],
        correct: 0,
      },
      {
        prompt: "Quand faut-il se coucher et se lever ?",
        choices: [{ label: "À des heures régulières" }, { label: "À n'importe quelle heure" }, { label: "Seulement le dimanche" }],
        correct: 0,
      },
      { prompt: "Combien de temps avant le coucher faut-il éteindre le téléphone ?", answer: "une heure", accept: ["1 heure", "1 h"] },
      {
        prompt: "Quel est le sujet de l'article ?",
        choices: [{ label: "Bien dormir" }, { label: "Cuisiner un gâteau" }, { label: "Choisir des chaussures" }],
        correct: 0,
      },
    ],
  },
  {
    title: "Se déplacer en ville",
    sections: [
      {
        heading: "Les transports",
        body: "Préférez le bus, le tram ou le vélo pour vos trajets courts. Vous gagnez du temps et vous bougez un peu.",
        imageLabel: "Transports",
      },
      {
        heading: "À pied",
        body: "Pour les petites distances, marchez. Traversez toujours aux passages piétons.",
        imageLabel: "Marche",
      },
      {
        heading: "En voiture",
        body: "Si vous prenez la voiture, partagez-la avec un collègue ou un voisin quand c'est possible.",
        imageLabel: "Voiture",
      },
    ],
    questions: [
      {
        prompt: "Que faut-il préférer pour les trajets courts ?",
        choices: [{ label: "Le bus, le tram ou le vélo" }, { label: "L'avion" }, { label: "Le bateau" }],
        correct: 0,
      },
      {
        prompt: "Que peut-on gagner en prenant les transports ?",
        choices: [{ label: "Du temps" }, { label: "Une maison" }, { label: "Un examen" }],
        correct: 0,
      },
      { prompt: "Où faut-il traverser la rue ?", answer: "passages piétons", accept: ["aux passages piétons", "passage piéton", "au passage piéton"] },
      {
        prompt: "Que faire pour les petites distances ?",
        choices: [{ label: "Marcher" }, { label: "Prendre l'avion" }, { label: "Rester assis" }],
        correct: 0,
      },
      {
        prompt: "Avec qui peut-on partager la voiture ?",
        choices: [{ label: "Un collègue ou un voisin" }, { label: "Personne" }, { label: "Un animal seulement" }],
        correct: 0,
      },
      { prompt: "Quel moyen de transport est cité avec le bus et le tram ?", answer: "vélo", accept: ["le vélo", "bicyclette"] },
      {
        prompt: "Quel est le sujet de l'article ?",
        choices: [{ label: "Se déplacer en ville" }, { label: "Acheter un téléphone" }, { label: "Apprendre à nager" }],
        correct: 0,
      },
    ],
  },
  {
    title: "Utiliser Internet prudemment",
    sections: [
      {
        heading: "Les mots de passe",
        body: "Choisissez un mot de passe long et différent pour chaque site. Ne le donnez jamais à un inconnu.",
        imageLabel: "Mot de passe",
      },
      {
        heading: "Les messages",
        body: "Méfiez-vous des courriels qui demandent vos informations bancaires. Une vraie banque ne demande pas cela par message.",
        imageLabel: "Messages",
      },
      {
        heading: "Les achats",
        body: "Sur Internet, vérifiez l'adresse du site avant de payer. Gardez une copie de vos commandes.",
        imageLabel: "Achats",
      },
    ],
    questions: [
      {
        prompt: "Comment doit être un bon mot de passe ?",
        choices: [{ label: "Long et différent pour chaque site" }, { label: "Toujours « 1234 »" }, { label: "Le même partout" }],
        correct: 0,
      },
      {
        prompt: "À qui ne faut-il jamais donner son mot de passe ?",
        choices: [{ label: "À un inconnu" }, { label: "À soi-même" }, { label: "À un livre" }],
        correct: 0,
      },
      { prompt: "Que demandent parfois les faux messages ?", answer: "informations bancaires", accept: ["des informations bancaires", "coordonnées bancaires", "données bancaires"] },
      {
        prompt: "Que fait une vraie banque ?",
        choices: [{ label: "Elle ne demande pas vos infos par message" }, { label: "Elle demande toujours votre mot de passe par SMS" }, { label: "Elle ferme tous les comptes" }],
        correct: 0,
      },
      {
        prompt: "Que faut-il vérifier avant de payer ?",
        choices: [{ label: "L'adresse du site" }, { label: "La couleur du ciel" }, { label: "Le nom du voisin" }],
        correct: 0,
      },
      { prompt: "Que faut-il garder après une commande ?", answer: "une copie", accept: ["copie de la commande", "une copie des commandes"] },
      {
        prompt: "Quel est le sujet de l'article ?",
        choices: [{ label: "Utiliser Internet prudemment" }, { label: "Planter un jardin" }, { label: "Réparer un vélo" }],
        correct: 0,
      },
    ],
  },
  {
    title: "Faire ses courses intelligemment",
    sections: [
      {
        heading: "Avant d'acheter",
        body: "Faites une liste avant d'aller au magasin. Regardez aussi ce qu'il reste dans le frigo.",
        imageLabel: "Liste",
      },
      {
        heading: "Au magasin",
        body: "Comparez les prix et les dates de péremption. Évitez d'acheter trop de produits inutiles.",
        imageLabel: "Magasin",
      },
      {
        heading: "Après les courses",
        body: "Rangez rapidement les aliments au frais. Utilisez d'abord les produits qui se périment bientôt.",
        imageLabel: "Rangement",
      },
    ],
    questions: [
      {
        prompt: "Que faut-il faire avant d'aller au magasin ?",
        choices: [{ label: "Faire une liste" }, { label: "Tout jeter" }, { label: "Fermer le magasin" }],
        correct: 0,
      },
      {
        prompt: "Que faut-il regarder dans le frigo ?",
        choices: [{ label: "Ce qu'il reste" }, { label: "La télévision" }, { label: "Les chaussures" }],
        correct: 0,
      },
      { prompt: "Que faut-il comparer au magasin ?", answer: "les prix", accept: ["prix", "les prix et les dates", "prix et dates"] },
      {
        prompt: "Que faut-il éviter d'acheter ?",
        choices: [{ label: "Trop de produits inutiles" }, { label: "Du pain" }, { label: "De l'eau" }],
        correct: 0,
      },
      {
        prompt: "Où faut-il ranger rapidement les aliments ?",
        choices: [{ label: "Au frais" }, { label: "Sur le balcon en plein soleil" }, { label: "Dans la voiture" }],
        correct: 0,
      },
      { prompt: "Quels produits faut-il utiliser en premier ?", answer: "qui se périment bientôt", accept: ["ceux qui se périment bientôt", "les produits bientôt périmés", "ceux qui périment bientôt"] },
      {
        prompt: "Quel est le sujet de l'article ?",
        choices: [{ label: "Faire ses courses intelligemment" }, { label: "Apprendre le piano" }, { label: "Choisir un film" }],
        correct: 0,
      },
    ],
  },
  {
    title: "Rester en forme sans salle de sport",
    sections: [
      {
        heading: "Bouger chaque jour",
        body: "Montez les escaliers à pied. Descendez du bus une station plus tôt et finissez à pied.",
        imageLabel: "Escaliers",
      },
      {
        heading: "À la maison",
        body: "Faites dix minutes d'étirements le matin. Dansez ou faites du jardinage le week-end.",
        imageLabel: "Maison",
      },
      {
        heading: "Avec des amis",
        body: "Proposez une balade ou un match de ballon. C'est plus facile de bouger à plusieurs.",
        imageLabel: "Amis",
      },
    ],
    questions: [
      {
        prompt: "Comment monter les étages ?",
        choices: [{ label: "À pied" }, { label: "Toujours en ascenseur" }, { label: "En courant la nuit seulement" }],
        correct: 0,
      },
      {
        prompt: "Que peut-on faire avec le bus ?",
        choices: [{ label: "Descendre une station plus tôt" }, { label: "Dormir dans le bus" }, { label: "Conduire le bus" }],
        correct: 0,
      },
      { prompt: "Combien de minutes d'étirements le matin ?", answer: "dix", accept: ["10", "10 minutes", "dix minutes"] },
      {
        prompt: "Que peut-on faire le week-end ?",
        choices: [{ label: "Danser ou jardiner" }, { label: "Rester sans bouger" }, { label: "Fermer toutes les fenêtres" }],
        correct: 0,
      },
      {
        prompt: "Pourquoi bouger avec des amis ?",
        choices: [{ label: "C'est plus facile" }, { label: "C'est interdit" }, { label: "C'est inutile" }],
        correct: 0,
      },
      { prompt: "Que peut-on proposer aux amis ?", answer: "une balade", accept: ["balade", "un match", "un match de ballon"] },
      {
        prompt: "Quel est le sujet de l'article ?",
        choices: [{ label: "Rester en forme" }, { label: "Acheter une télévision" }, { label: "Réparer un ordinateur" }],
        correct: 0,
      },
    ],
  },
  {
    title: "Préparer sa rentrée scolaire",
    sections: [
      {
        heading: "Le matériel",
        body: "Préparez vos cahiers, stylos et livrets avant le premier jour. Écrivez votre nom sur chaque affaire.",
        imageLabel: "Matériel",
      },
      {
        heading: "L'emploi du temps",
        body: "Lisez l'emploi du temps avec attention. Notez les jours de sport et les devoirs importants.",
        imageLabel: "Emploi du temps",
      },
      {
        heading: "Le sommeil",
        body: "Une semaine avant la rentrée, couchez-vous un peu plus tôt. Vous serez moins fatigué le lundi.",
        imageLabel: "Sommeil",
      },
    ],
    questions: [
      {
        prompt: "Que faut-il préparer avant le premier jour ?",
        choices: [{ label: "Cahiers, stylos et livrets" }, { label: "Une valise de vacances" }, { label: "Un vélo de course" }],
        correct: 0,
      },
      {
        prompt: "Que faut-il écrire sur chaque affaire ?",
        choices: [{ label: "Son nom" }, { label: "Un dessin seulement" }, { label: "Rien" }],
        correct: 0,
      },
      { prompt: "Que faut-il lire avec attention ?", answer: "emploi du temps", accept: ["l'emploi du temps", "l emploi du temps"] },
      {
        prompt: "Que faut-il noter ?",
        choices: [{ label: "Les jours de sport" }, { label: "Les films au cinéma" }, { label: "Les numéros de loterie" }],
        correct: 0,
      },
      {
        prompt: "Quand faut-il se coucher un peu plus tôt ?",
        choices: [{ label: "Une semaine avant la rentrée" }, { label: "Après les vacances d'été suivantes" }, { label: "Jamais" }],
        correct: 0,
      },
      { prompt: "Pourquoi se coucher plus tôt avant la rentrée ?", answer: "moins fatigué", accept: ["pour être moins fatigué", "être moins fatigué le lundi", "moins de fatigue"] },
      {
        prompt: "Quel est le sujet de l'article ?",
        choices: [{ label: "Préparer sa rentrée" }, { label: "Choisir un restaurant" }, { label: "Réparer une porte" }],
        correct: 0,
      },
    ],
  },
  {
    title: "Vivre ensemble dans un immeuble",
    sections: [
      {
        heading: "Le bruit",
        body: "Après 22 h, parlez moins fort et baissez la musique. Respectez le sommeil des voisins.",
        imageLabel: "Bruit",
      },
      {
        heading: "Les parties communes",
        body: "Laissez le hall et les escaliers propres. Ne laissez pas vos sacs devant la porte des autres.",
        imageLabel: "Hall",
      },
      {
        heading: "Les déchets",
        body: "Triez le papier, le verre et les ordures. Descendez les poubelles le jour indiqué.",
        imageLabel: "Déchets",
      },
    ],
    questions: [
      {
        prompt: "Que faire après 22 h ?",
        choices: [{ label: "Parler moins fort" }, { label: "Faire une fête plus grande" }, { label: "Appeler tous les voisins" }],
        correct: 0,
      },
      {
        prompt: "Que faut-il baisser le soir ?",
        choices: [{ label: "La musique" }, { label: "Les rideaux dehors" }, { label: "Le soleil" }],
        correct: 0,
      },
      { prompt: "Que faut-il laisser propres ?", answer: "hall et escaliers", accept: ["le hall", "les escaliers", "le hall et les escaliers"] },
      {
        prompt: "Où ne faut-il pas laisser ses sacs ?",
        choices: [{ label: "Devant la porte des autres" }, { label: "Dans son appartement" }, { label: "Dans son sac à dos" }],
        correct: 0,
      },
      {
        prompt: "Que faut-il trier ?",
        choices: [{ label: "Le papier, le verre et les ordures" }, { label: "Seulement les fleurs" }, { label: "Les chaussures des voisins" }],
        correct: 0,
      },
      { prompt: "Quand faut-il descendre les poubelles ?", answer: "le jour indiqué", accept: ["jour indiqué", "au jour indiqué"] },
      {
        prompt: "Quel est le sujet de l'article ?",
        choices: [{ label: "Vivre ensemble dans un immeuble" }, { label: "Apprendre à cuisiner" }, { label: "Choisir un animal" }],
        correct: 0,
      },
    ],
  },
];
