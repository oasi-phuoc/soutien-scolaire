// ─── Types for base level (multi-format questions) ───────────────────────────

export type CEImageChoice = { emoji: string; label: string };

export type CEMultiQuestion = {
  id: string;
  textQ: string;
  textChoices: [string, string, string, string];
  textCorrect: number;
  imageQ: string;
  imageChoices: [CEImageChoice, CEImageChoice, CEImageChoice, CEImageChoice];
  imageCorrect: number;
  fillQ: string;
  fillAnswer: string;
  fillAccept?: string[];
};

export type CETextMulti = {
  id: string;
  title: string;
  body: string;
  questions: CEMultiQuestion[];
};

export type CEFormatType = "text" | "image" | "fill";
export type CEAssignedQuestion = { q: CEMultiQuestion; format: CEFormatType };
export type CEBaseSession = { text: CETextMulti; questions: CEAssignedQuestion[] };

// ─── Helpers ─────────────────────────────────────────────────────────────────

const ic = (emoji: string, label: string): CEImageChoice => ({ emoji, label });

// ─── Base texts (A1) — 10 texts × 10 questions × 3 formats ──────────────────

const CE_TEXTS_BASE: CETextMulti[] = [
  // ── 1. Soirée raclette (email) ─────────────────────────────────────────────
  {
    id: "base-raclette",
    title: "Une soirée raclette",
    body: `De : antoine.martin@bluewin.ch
Objet : Soirée raclette vendredi !

Salut Sophie !

Je t'invite à une soirée raclette chez moi, le vendredi 10 novembre à 19h. Tu peux apporter du vin rouge ? J'ai le fromage à raclette et les pommes de terre. Ma femme Claire prépare une salade verte.

Nous serons six personnes : toi, moi, Claire, Marc, Julie et Karim.

J'habite au 5, chemin du Lac à Vevey. Le bus 201 s'arrête juste en face.

Confirme ta présence par message, s'il te plaît.

À vendredi !
Antoine`,
    questions: [
      {
        id: "r1", textQ: "Quel type de soirée Antoine organise-t-il ?",
        textChoices: ["Une fondue", "Une raclette", "Un barbecue", "Un repas de pâtes"], textCorrect: 1,
        imageQ: "Quel type de soirée Antoine organise-t-il ?",
        imageChoices: [ic("🫕","Fondue"), ic("🧀","Raclette"), ic("🔥","Barbecue"), ic("🍝","Pâtes")], imageCorrect: 1,
        fillQ: "C'est une soirée _________.", fillAnswer: "raclette",
      },
      {
        id: "r2", textQ: "Quel jour a lieu la soirée ?",
        textChoices: ["Jeudi 9 novembre", "Vendredi 10 novembre", "Samedi 11 novembre", "Dimanche 12 novembre"], textCorrect: 1,
        imageQ: "Quel jour a lieu la soirée ?",
        imageChoices: [ic("📅","Jeudi 9"), ic("📅","Vendredi 10"), ic("📅","Samedi 11"), ic("📅","Dimanche 12")], imageCorrect: 1,
        fillQ: "La soirée a lieu le _________ 10 novembre.", fillAnswer: "vendredi",
      },
      {
        id: "r3", textQ: "À quelle heure commence la soirée ?",
        textChoices: ["17 heures", "18 heures", "19 heures", "20 heures"], textCorrect: 2,
        imageQ: "À quelle heure commence la soirée ?",
        imageChoices: [ic("⏰","17h"), ic("⏰","18h"), ic("⏰","19h"), ic("⏰","20h")], imageCorrect: 2,
        fillQ: "La soirée commence à _________ heures.", fillAnswer: "19", fillAccept: ["19h", "dix-neuf"],
      },
      {
        id: "r4", textQ: "Qu'est-ce que Sophie doit apporter ?",
        textChoices: ["Du fromage à raclette", "Du vin rouge", "Une salade verte", "Des pommes de terre"], textCorrect: 1,
        imageQ: "Qu'est-ce que Sophie doit apporter ?",
        imageChoices: [ic("🧀","Du fromage"), ic("🍷","Du vin rouge"), ic("🥗","Une salade"), ic("🥔","Des pommes de terre")], imageCorrect: 1,
        fillQ: "Sophie apporte du vin _________.", fillAnswer: "rouge",
      },
      {
        id: "r5", textQ: "Qui prépare la salade verte ?",
        textChoices: ["Antoine", "Sophie", "Claire", "Marc"], textCorrect: 2,
        imageQ: "Qui prépare la salade verte ?",
        imageChoices: [ic("👨","Antoine"), ic("👩","Sophie"), ic("👩","Claire"), ic("👨","Marc")], imageCorrect: 2,
        fillQ: "C'est _________ qui prépare la salade.", fillAnswer: "Claire", fillAccept: ["claire"],
      },
      {
        id: "r6", textQ: "Combien de personnes participent à la soirée ?",
        textChoices: ["Quatre personnes", "Cinq personnes", "Six personnes", "Sept personnes"], textCorrect: 2,
        imageQ: "Combien de personnes participent à la soirée ?",
        imageChoices: [ic("4️⃣","4 personnes"), ic("5️⃣","5 personnes"), ic("6️⃣","6 personnes"), ic("7️⃣","7 personnes")], imageCorrect: 2,
        fillQ: "Il y a _________ personnes à la soirée.", fillAnswer: "six", fillAccept: ["6"],
      },
      {
        id: "r7", textQ: "Dans quelle ville habite Antoine ?",
        textChoices: ["Lausanne", "Genève", "Vevey", "Montreux"], textCorrect: 2,
        imageQ: "Dans quelle ville habite Antoine ?",
        imageChoices: [ic("🏙️","Lausanne"), ic("🌊","Genève"), ic("🏠","Vevey"), ic("🎸","Montreux")], imageCorrect: 2,
        fillQ: "Antoine habite à _________.", fillAnswer: "Vevey", fillAccept: ["vevey"],
      },
      {
        id: "r8", textQ: "Quel bus s'arrête en face de chez Antoine ?",
        textChoices: ["Bus 101", "Bus 201", "Bus 301", "Bus 211"], textCorrect: 1,
        imageQ: "Quel bus s'arrête en face de chez Antoine ?",
        imageChoices: [ic("🚌","101"), ic("🚌","201"), ic("🚌","301"), ic("🚌","211")], imageCorrect: 1,
        fillQ: "Le bus _________ s'arrête en face.", fillAnswer: "201",
      },
      {
        id: "r9", textQ: "Comment Sophie doit-elle confirmer sa présence ?",
        textChoices: ["Par téléphone", "Par message", "Par email", "En personne"], textCorrect: 1,
        imageQ: "Comment Sophie doit-elle confirmer sa présence ?",
        imageChoices: [ic("📞","Téléphone"), ic("💬","Message"), ic("📧","Email"), ic("🚶","En personne")], imageCorrect: 1,
        fillQ: "Sophie confirme par _________.", fillAnswer: "message",
      },
      {
        id: "r10", textQ: "Qui a envoyé cet email ?",
        textChoices: ["Sophie", "Claire", "Antoine", "Karim"], textCorrect: 2,
        imageQ: "Qui a envoyé cet email ?",
        imageChoices: [ic("👩","Sophie"), ic("👩","Claire"), ic("👨","Antoine"), ic("🧑","Karim")], imageCorrect: 2,
        fillQ: "Cet email est envoyé par _________.", fillAnswer: "Antoine", fillAccept: ["antoine"],
      },
    ],
  },

  // ── 2. Club de fitness (lettre de bienvenue) ───────────────────────────────
  {
    id: "base-fitness",
    title: "Bienvenue au Fitness Lausanne",
    body: `De : info@fitnesslausanne.ch
Objet : Bienvenue au Fitness Lausanne !

Bienvenue au Fitness Lausanne !

Pour utiliser la salle, vous devez avoir l'équipement suivant :
— des chaussures de sport propres ;
— une tenue de sport (t-shirt, short ou legging) ;
— une serviette.

Les chaussures de ville (bottines, talons…) sont interdites dans la salle.

Apportez votre propre bouteille d'eau. L'accès aux vestiaires et aux douches est inclus dans votre abonnement.

La salle est ouverte tous les jours de 6h à 22h, sauf le dimanche : fermeture à 14h.

Thomas Keller
Responsable`,
    questions: [
      {
        id: "f1", textQ: "Quel type d'établissement envoie ce message ?",
        textChoices: ["Un club de tennis", "Une salle de fitness", "Une piscine", "Un club de natation"], textCorrect: 1,
        imageQ: "Quel type d'établissement envoie ce message ?",
        imageChoices: [ic("🎾","Club tennis"), ic("🏋️","Salle fitness"), ic("🏊","Piscine"), ic("🚴","Cyclisme")], imageCorrect: 1,
        fillQ: "C'est un message du Fitness _________.", fillAnswer: "Lausanne", fillAccept: ["lausanne"],
      },
      {
        id: "f2", textQ: "Quelles chaussures sont interdites dans la salle ?",
        textChoices: ["Les chaussures de sport", "Les chaussures de ville", "Les baskets propres", "Toutes les chaussures"], textCorrect: 1,
        imageQ: "Quelles chaussures sont interdites dans la salle ?",
        imageChoices: [ic("👟","Chaussures sport"), ic("👞","Chaussures ville"), ic("🩴","Sandales"), ic("🥾","Bottes")], imageCorrect: 1,
        fillQ: "Les chaussures de _________ sont interdites.", fillAnswer: "ville",
      },
      {
        id: "f3", textQ: "À quelle heure la salle ouvre-t-elle normalement ?",
        textChoices: ["5h", "6h", "7h", "8h"], textCorrect: 1,
        imageQ: "À quelle heure la salle ouvre-t-elle normalement ?",
        imageChoices: [ic("⏰","5h"), ic("⏰","6h"), ic("⏰","7h"), ic("⏰","8h")], imageCorrect: 1,
        fillQ: "La salle ouvre à _________ heures du matin.", fillAnswer: "6", fillAccept: ["6h", "six"],
      },
      {
        id: "f4", textQ: "À quelle heure ferme la salle le dimanche ?",
        textChoices: ["12h", "13h", "14h", "22h"], textCorrect: 2,
        imageQ: "À quelle heure ferme la salle le dimanche ?",
        imageChoices: [ic("⏰","12h"), ic("⏰","13h"), ic("⏰","14h"), ic("⏰","22h")], imageCorrect: 2,
        fillQ: "Le dimanche, la salle ferme à _________ heures.", fillAnswer: "14", fillAccept: ["14h", "quatorze"],
      },
      {
        id: "f5", textQ: "Qu'est-ce qu'on doit apporter comme accessoire ?",
        textChoices: ["Un casque de vélo", "Une serviette", "Un cadenas", "Des haltères"], textCorrect: 1,
        imageQ: "Qu'est-ce qu'on doit apporter comme accessoire ?",
        imageChoices: [ic("🪖","Casque"), ic("🏖️","Serviette"), ic("🔒","Cadenas"), ic("💪","Haltères")], imageCorrect: 1,
        fillQ: "Il faut apporter une _________ et sa bouteille d'eau.", fillAnswer: "serviette",
      },
      {
        id: "f6", textQ: "Qu'est-ce qui est inclus dans l'abonnement ?",
        textChoices: ["Les cours collectifs", "Les vestiaires et douches", "La location de serviette", "Un coach personnel"], textCorrect: 1,
        imageQ: "Qu'est-ce qui est inclus dans l'abonnement ?",
        imageChoices: [ic("🎯","Cours collectifs"), ic("🚿","Vestiaires/douches"), ic("🏖️","Serviette"), ic("🤝","Coach")], imageCorrect: 1,
        fillQ: "L'accès aux vestiaires et aux _________ est inclus.", fillAnswer: "douches",
      },
      {
        id: "f7", textQ: "À quelle heure ferme la salle normalement le soir ?",
        textChoices: ["20h", "21h", "22h", "Minuit"], textCorrect: 2,
        imageQ: "À quelle heure ferme la salle normalement le soir ?",
        imageChoices: [ic("⏰","20h"), ic("⏰","21h"), ic("⏰","22h"), ic("⏰","Minuit")], imageCorrect: 2,
        fillQ: "La salle ferme à _________ heures le soir.", fillAnswer: "22", fillAccept: ["22h", "vingt-deux"],
      },
      {
        id: "f8", textQ: "Que doit-on apporter pour boire ?",
        textChoices: ["Le club fournit de l'eau", "Sa propre bouteille d'eau", "Des boissons énergisantes", "Du jus de fruits"], textCorrect: 1,
        imageQ: "Que doit-on apporter pour boire ?",
        imageChoices: [ic("🚰","Eau fournie"), ic("💧","Sa bouteille"), ic("⚡","Boisson énergie"), ic("🍹","Jus")], imageCorrect: 1,
        fillQ: "Il faut apporter sa propre _________ d'eau.", fillAnswer: "bouteille",
      },
      {
        id: "f9", textQ: "Qui a signé ce message ?",
        textChoices: ["Le président du club", "Thomas Keller, responsable", "Un coach", "La secrétaire"], textCorrect: 1,
        imageQ: "Qui a signé ce message ?",
        imageChoices: [ic("🏆","Président"), ic("👨‍💼","Thomas Keller"), ic("🏋️","Un coach"), ic("👩‍💼","Secrétaire")], imageCorrect: 1,
        fillQ: "Le message est signé par Thomas _________.", fillAnswer: "Keller", fillAccept: ["keller"],
      },
      {
        id: "f10", textQ: "Quels équipements de sport sont mentionnés ?",
        textChoices: ["Un maillot et un bonnet", "Un t-shirt, short ou legging", "Un survêtement et des gants", "Une veste et un pantalon"], textCorrect: 1,
        imageQ: "Quels équipements de sport sont mentionnés ?",
        imageChoices: [ic("🩱","Maillot et bonnet"), ic("👕","T-shirt, short, legging"), ic("🧤","Survêtement et gants"), ic("🧥","Veste et pantalon")], imageCorrect: 1,
        fillQ: "La tenue doit être un t-shirt, short ou _________.", fillAnswer: "legging",
      },
    ],
  },

  // ── 3. Note de courses ─────────────────────────────────────────────────────
  {
    id: "base-note-courses",
    title: "Note de la maison",
    body: `Philippe,

Je suis partie faire des courses. Il faut que tu lances le lave-linge, c'est urgent ! Nos amis Cécile et David arrivent à 18h30 pour dîner. Prépare quelque chose à grignoter. Il y a des chips et du jus de pomme dans le placard.

Je rentre vers 19h. On peut commander une fondue au Restaurant La Cloche (026 921 45 67) ou préparer une quiche.

À tout à l'heure !
Léa`,
    questions: [
      {
        id: "n1", textQ: "Pourquoi Léa est-elle partie ?",
        textChoices: ["Pour aller travailler", "Pour faire des courses", "Pour rendre visite à des amis", "Pour aller chez le médecin"], textCorrect: 1,
        imageQ: "Pourquoi Léa est-elle partie ?",
        imageChoices: [ic("💼","Travailler"), ic("🛒","Faire des courses"), ic("👥","Voir des amis"), ic("🏥","Médecin")], imageCorrect: 1,
        fillQ: "Léa est partie faire des _________.", fillAnswer: "courses",
      },
      {
        id: "n2", textQ: "Quelle est la tâche urgente de Philippe ?",
        textChoices: ["Commander la fondue", "Préparer la quiche", "Lancer le lave-linge", "Appeler le restaurant"], textCorrect: 2,
        imageQ: "Quelle est la tâche urgente de Philippe ?",
        imageChoices: [ic("📞","Appeler restaurant"), ic("🍕","Commander à manger"), ic("👕","Lancer lave-linge"), ic("🧹","Faire le ménage")], imageCorrect: 2,
        fillQ: "Philippe doit lancer le lave-_________.", fillAnswer: "linge",
      },
      {
        id: "n3", textQ: "À quelle heure arrivent Cécile et David ?",
        textChoices: ["17h30", "18h", "18h30", "19h"], textCorrect: 2,
        imageQ: "À quelle heure arrivent Cécile et David ?",
        imageChoices: [ic("⏰","17h30"), ic("⏰","18h"), ic("⏰","18h30"), ic("⏰","19h")], imageCorrect: 2,
        fillQ: "Les amis arrivent à _________ heures 30.", fillAnswer: "18", fillAccept: ["18h", "dix-huit"],
      },
      {
        id: "n4", textQ: "Qu'est-ce qu'il y a dans le placard ?",
        textChoices: ["Du pain et du fromage", "Des chips et du jus de pomme", "Des biscuits et du lait", "Des fruits et du yaourt"], textCorrect: 1,
        imageQ: "Qu'est-ce qu'il y a dans le placard ?",
        imageChoices: [ic("🍞","Pain et fromage"), ic("🍟","Chips et jus pomme"), ic("🍪","Biscuits et lait"), ic("🍎","Fruits et yaourt")], imageCorrect: 1,
        fillQ: "Il y a des chips et du jus de _________ dans le placard.", fillAnswer: "pomme",
      },
      {
        id: "n5", textQ: "À quelle heure Léa rentre-t-elle ?",
        textChoices: ["18h30", "19h", "19h30", "20h"], textCorrect: 1,
        imageQ: "À quelle heure Léa rentre-t-elle ?",
        imageChoices: [ic("⏰","18h30"), ic("⏰","19h"), ic("⏰","19h30"), ic("⏰","20h")], imageCorrect: 1,
        fillQ: "Léa rentre vers _________ heures.", fillAnswer: "19", fillAccept: ["19h", "dix-neuf"],
      },
      {
        id: "n6", textQ: "Quel repas peut-on commander ?",
        textChoices: ["Une pizza", "Des spaghettis", "Une fondue", "Un poulet rôti"], textCorrect: 2,
        imageQ: "Quel repas peut-on commander ?",
        imageChoices: [ic("🍕","Pizza"), ic("🍝","Spaghettis"), ic("🫕","Fondue"), ic("🍗","Poulet rôti")], imageCorrect: 2,
        fillQ: "On peut commander une _________ au restaurant.", fillAnswer: "fondue",
      },
      {
        id: "n7", textQ: "Comment s'appelle le restaurant ?",
        textChoices: ["La Fontaine", "La Cloche", "Le Lac", "La Fondue"], textCorrect: 1,
        imageQ: "Comment s'appelle le restaurant ?",
        imageChoices: [ic("⛲","La Fontaine"), ic("🔔","La Cloche"), ic("🌊","Le Lac"), ic("🫕","La Fondue")], imageCorrect: 1,
        fillQ: "Le restaurant s'appelle La _________.", fillAnswer: "Cloche", fillAccept: ["cloche"],
      },
      {
        id: "n8", textQ: "Quelle autre option culinaire est proposée ?",
        textChoices: ["Faire une pizza", "Préparer une quiche", "Commander des sushis", "Faire une raclette"], textCorrect: 1,
        imageQ: "Quelle autre option culinaire est proposée ?",
        imageChoices: [ic("🍕","Pizza"), ic("🥧","Quiche"), ic("🍱","Sushis"), ic("🧀","Raclette")], imageCorrect: 1,
        fillQ: "On peut aussi préparer une _________.", fillAnswer: "quiche",
      },
      {
        id: "n9", textQ: "Qui a écrit cette note ?",
        textChoices: ["Philippe", "Cécile", "David", "Léa"], textCorrect: 3,
        imageQ: "Qui a écrit cette note ?",
        imageChoices: [ic("👨","Philippe"), ic("👩","Cécile"), ic("👨","David"), ic("👩","Léa")], imageCorrect: 3,
        fillQ: "Cette note est écrite par _________.", fillAnswer: "Léa", fillAccept: ["lea", "léa"],
      },
      {
        id: "n10", textQ: "À qui est adressée cette note ?",
        textChoices: ["À Cécile", "À David", "À Philippe", "À Léa elle-même"], textCorrect: 2,
        imageQ: "À qui est adressée cette note ?",
        imageChoices: [ic("👩","Cécile"), ic("👨","David"), ic("👨","Philippe"), ic("👩","Léa")], imageCorrect: 2,
        fillQ: "La note est écrite pour _________.", fillAnswer: "Philippe", fillAccept: ["philippe"],
      },
    ],
  },

  // ── 4. Invitation anniversaire ─────────────────────────────────────────────
  {
    id: "base-anniversaire",
    title: "Une invitation d'anniversaire",
    body: `Lausanne, 8 mars

Chère Emma,

J'ai bientôt 30 ans, le 20 mars ! J'organise une fête chez moi à Prilly, le samedi 18 mars, à partir de 19h.

Tu peux venir ? Tu peux apporter une bouteille de vin blanc ou des gâteaux.

Voici mon adresse : 8, chemin des Vignes, à Prilly. Je suis juste à côté du centre commercial Malley. Le bus numéro 1 passe devant chez moi.

Confirme ta venue par message, s'il te plaît.

À bientôt !
Nadia`,
    questions: [
      {
        id: "a1", textQ: "Quel anniversaire Nadia va-t-elle fêter ?",
        textChoices: ["20 ans", "25 ans", "30 ans", "40 ans"], textCorrect: 2,
        imageQ: "Quel anniversaire Nadia va-t-elle fêter ?",
        imageChoices: [ic("🎂","20 ans"), ic("🎂","25 ans"), ic("🎂","30 ans"), ic("🎂","40 ans")], imageCorrect: 2,
        fillQ: "Nadia fête ses _________ ans.", fillAnswer: "30", fillAccept: ["trente"],
      },
      {
        id: "a2", textQ: "Quand a lieu la fête ?",
        textChoices: ["Le 8 mars", "Le 18 mars", "Le 20 mars", "Le 30 mars"], textCorrect: 1,
        imageQ: "Quand a lieu la fête ?",
        imageChoices: [ic("📅","8 mars"), ic("📅","18 mars"), ic("📅","20 mars"), ic("📅","30 mars")], imageCorrect: 1,
        fillQ: "La fête a lieu le _________ mars.", fillAnswer: "18", fillAccept: ["dix-huit"],
      },
      {
        id: "a3", textQ: "À quelle heure commence la fête ?",
        textChoices: ["17h", "18h", "19h", "20h"], textCorrect: 2,
        imageQ: "À quelle heure commence la fête ?",
        imageChoices: [ic("⏰","17h"), ic("⏰","18h"), ic("⏰","19h"), ic("⏰","20h")], imageCorrect: 2,
        fillQ: "La fête commence à _________ heures.", fillAnswer: "19", fillAccept: ["19h", "dix-neuf"],
      },
      {
        id: "a4", textQ: "Qu'est-ce qu'Emma peut apporter ?",
        textChoices: ["Du vin rouge ou des fleurs", "Du vin blanc ou des gâteaux", "De la bière ou des chips", "Des fruits ou un dessert"], textCorrect: 1,
        imageQ: "Qu'est-ce qu'Emma peut apporter ?",
        imageChoices: [ic("🍷","Vin rouge/fleurs"), ic("🥂","Vin blanc/gâteaux"), ic("🍺","Bière/chips"), ic("🍎","Fruits/dessert")], imageCorrect: 1,
        fillQ: "Emma peut apporter du vin blanc ou des _________.", fillAnswer: "gâteaux", fillAccept: ["gateau", "gateaux", "gâteau"],
      },
      {
        id: "a5", textQ: "Dans quelle commune habite Nadia ?",
        textChoices: ["Lausanne", "Morges", "Prilly", "Renens"], textCorrect: 2,
        imageQ: "Dans quelle commune habite Nadia ?",
        imageChoices: [ic("🏙️","Lausanne"), ic("🏘️","Morges"), ic("🏡","Prilly"), ic("🏘️","Renens")], imageCorrect: 2,
        fillQ: "Nadia habite à _________.", fillAnswer: "Prilly", fillAccept: ["prilly"],
      },
      {
        id: "a6", textQ: "Quel est le numéro dans l'adresse de Nadia ?",
        textChoices: ["N° 5", "N° 7", "N° 8", "N° 18"], textCorrect: 2,
        imageQ: "Quel est le numéro dans l'adresse de Nadia ?",
        imageChoices: [ic("🏠","N° 5"), ic("🏠","N° 7"), ic("🏠","N° 8"), ic("🏠","N° 18")], imageCorrect: 2,
        fillQ: "Nadia habite au _________, chemin des Vignes.", fillAnswer: "8", fillAccept: ["huit"],
      },
      {
        id: "a7", textQ: "Quel point de repère est mentionné près de chez Nadia ?",
        textChoices: ["Une école", "Une gare", "Un centre commercial", "Un parc"], textCorrect: 2,
        imageQ: "Quel point de repère est mentionné près de chez Nadia ?",
        imageChoices: [ic("🏫","École"), ic("🚉","Gare"), ic("🛍️","Centre commercial"), ic("🌳","Parc")], imageCorrect: 2,
        fillQ: "Il y a le centre commercial _________ à côté.", fillAnswer: "Malley", fillAccept: ["malley"],
      },
      {
        id: "a8", textQ: "Quel bus passe devant chez Nadia ?",
        textChoices: ["Bus 1", "Bus 3", "Bus 8", "Bus 18"], textCorrect: 0,
        imageQ: "Quel bus passe devant chez Nadia ?",
        imageChoices: [ic("🚌","Bus 1"), ic("🚌","Bus 3"), ic("🚌","Bus 8"), ic("🚌","Bus 18")], imageCorrect: 0,
        fillQ: "Le bus numéro _________ passe devant chez elle.", fillAnswer: "1", fillAccept: ["un"],
      },
      {
        id: "a9", textQ: "Comment Emma doit-elle confirmer sa présence ?",
        textChoices: ["Par email", "Par téléphone", "Par message", "En personne"], textCorrect: 2,
        imageQ: "Comment Emma doit-elle confirmer sa présence ?",
        imageChoices: [ic("📧","Email"), ic("📞","Téléphone"), ic("💬","Message"), ic("🚶","En personne")], imageCorrect: 2,
        fillQ: "Emma doit confirmer par _________.", fillAnswer: "message",
      },
      {
        id: "a10", textQ: "Qui a envoyé cette invitation ?",
        textChoices: ["Emma", "Claire", "Nadia", "Sophie"], textCorrect: 2,
        imageQ: "Qui a envoyé cette invitation ?",
        imageChoices: [ic("👩","Emma"), ic("👩","Claire"), ic("👩","Nadia"), ic("👩","Sophie")], imageCorrect: 2,
        fillQ: "L'invitation est envoyée par _________.", fillAnswer: "Nadia", fillAccept: ["nadia"],
      },
    ],
  },

  // ── 5. Fête du village (affiche) ───────────────────────────────────────────
  {
    id: "base-fete-village",
    title: "La fête du village de Savièse",
    body: `La fête du village de Savièse !

Le week-end prochain, c'est la fête du village de Savièse, en Valais !

Venez rencontrer vos voisins et partager un bon moment. L'événement a lieu dans les rues du village.

Il y a des stands pour boire et manger : bière valaisanne, raclette, gâteaux de ménage et jus de pomme.

Le café est offert par la commune.

La fête commence à 11h et se termine à 23h. Les jeux pour enfants commencent à 14h.

Besoin de renseignements ? Écrivez à : mairie@saveise.ch`,
    questions: [
      {
        id: "v1", textQ: "Quel type d'événement est organisé ?",
        textChoices: ["Une fête nationale", "La fête du village", "Un concert", "Un marché"], textCorrect: 1,
        imageQ: "Quel type d'événement est organisé ?",
        imageChoices: [ic("🇨🇭","Fête nationale"), ic("🏘️","Fête du village"), ic("🎵","Concert"), ic("🛒","Marché")], imageCorrect: 1,
        fillQ: "C'est la fête du _________ de Savièse.", fillAnswer: "village",
      },
      {
        id: "v2", textQ: "Dans quel canton se trouve Savièse ?",
        textChoices: ["Vaud", "Fribourg", "Valais", "Berne"], textCorrect: 2,
        imageQ: "Dans quel canton se trouve Savièse ?",
        imageChoices: [ic("🍇","Vaud"), ic("🐻","Fribourg"), ic("⛰️","Valais"), ic("🌻","Berne")], imageCorrect: 2,
        fillQ: "Savièse se trouve dans le canton du _________.", fillAnswer: "Valais", fillAccept: ["valais"],
      },
      {
        id: "v3", textQ: "Qu'est-ce qu'on peut manger à la fête ?",
        textChoices: ["De la fondue et des spaghettis", "De la raclette et des gâteaux de ménage", "Des pizzas et des saucisses", "Des pâtes et de la salade"], textCorrect: 1,
        imageQ: "Qu'est-ce qu'on peut manger ?",
        imageChoices: [ic("🫕","Fondue et spaghettis"), ic("🧀","Raclette et gâteaux"), ic("🍕","Pizzas et saucisses"), ic("🍝","Pâtes et salade")], imageCorrect: 1,
        fillQ: "On peut manger de la raclette et des gâteaux de _________.", fillAnswer: "ménage",
      },
      {
        id: "v4", textQ: "À quelle heure commence la fête ?",
        textChoices: ["9h", "10h", "11h", "12h"], textCorrect: 2,
        imageQ: "À quelle heure commence la fête ?",
        imageChoices: [ic("⏰","9h"), ic("⏰","10h"), ic("⏰","11h"), ic("⏰","12h")], imageCorrect: 2,
        fillQ: "La fête commence à _________ heures.", fillAnswer: "11", fillAccept: ["11h", "onze"],
      },
      {
        id: "v5", textQ: "À quelle heure se termine la fête ?",
        textChoices: ["21h", "22h", "23h", "Minuit"], textCorrect: 2,
        imageQ: "À quelle heure se termine la fête ?",
        imageChoices: [ic("⏰","21h"), ic("⏰","22h"), ic("⏰","23h"), ic("⏰","Minuit")], imageCorrect: 2,
        fillQ: "La fête se termine à _________ heures.", fillAnswer: "23", fillAccept: ["23h", "vingt-trois"],
      },
      {
        id: "v6", textQ: "À quelle heure commencent les jeux pour enfants ?",
        textChoices: ["11h", "12h", "13h", "14h"], textCorrect: 3,
        imageQ: "À quelle heure commencent les jeux pour enfants ?",
        imageChoices: [ic("⏰","11h"), ic("⏰","12h"), ic("⏰","13h"), ic("⏰","14h")], imageCorrect: 3,
        fillQ: "Les jeux pour enfants commencent à _________ heures.", fillAnswer: "14", fillAccept: ["14h", "quatorze"],
      },
      {
        id: "v7", textQ: "Qu'est-ce qui est offert gratuitement ?",
        textChoices: ["La bière", "La raclette", "Le café", "Le jus de pomme"], textCorrect: 2,
        imageQ: "Qu'est-ce qui est offert gratuitement ?",
        imageChoices: [ic("🍺","Bière"), ic("🧀","Raclette"), ic("☕","Café"), ic("🍎","Jus de pomme")], imageCorrect: 2,
        fillQ: "Le _________ est offert par la commune.", fillAnswer: "café",
      },
      {
        id: "v8", textQ: "Qui offre le café ?",
        textChoices: ["Les organisateurs", "La commune", "Un sponsor", "Un commerçant"], textCorrect: 1,
        imageQ: "Qui offre le café ?",
        imageChoices: [ic("👥","Organisateurs"), ic("🏛️","La commune"), ic("📢","Sponsor"), ic("🏪","Commerçant")], imageCorrect: 1,
        fillQ: "Le café est offert par la _________.", fillAnswer: "commune",
      },
      {
        id: "v9", textQ: "Quelle boisson régionale peut-on boire ?",
        textChoices: ["Bière genevoise", "Bière valaisanne", "Vin vaudois", "Eau minérale"], textCorrect: 1,
        imageQ: "Quelle boisson régionale peut-on boire ?",
        imageChoices: [ic("🍺","Bière genevoise"), ic("🍺","Bière valaisanne"), ic("🍷","Vin vaudois"), ic("💧","Eau minérale")], imageCorrect: 1,
        fillQ: "On peut boire de la bière _________ et du jus de pomme.", fillAnswer: "valaisanne", fillAccept: ["valaisane"],
      },
      {
        id: "v10", textQ: "Comment peut-on obtenir des renseignements ?",
        textChoices: ["Par téléphone", "En personne à la mairie", "Par email", "Par courrier"], textCorrect: 2,
        imageQ: "Comment peut-on obtenir des renseignements ?",
        imageChoices: [ic("📞","Téléphone"), ic("🚶","En personne"), ic("📧","Email"), ic("✉️","Courrier")], imageCorrect: 2,
        fillQ: "Pour des renseignements, écrivez à mairie@_________.", fillAnswer: "saveise.ch", fillAccept: ["saveise"],
      },
    ],
  },

  // ── 6. Petites annonces ────────────────────────────────────────────────────
  {
    id: "base-annonces",
    title: "Petites annonces",
    body: `PETITES ANNONCES — Valais

Vente — Guitare acoustique
Je vends une guitare acoustique Yamaha, très bon état. Je pars vivre à l'étranger.
Prix : 180 CHF. Appelez au 079 456 78 90. Disponible le soir à partir de 18h.
— Marco

Cours de guitare
Étudiant en musique à la HEM de Genève, je propose des cours de guitare ou de basse. J'enseigne depuis 10 ans. Disponible le mercredi et le samedi, de 14h à 18h. Je me déplace chez vous.
Prix : 30 CHF l'heure. Écrivez à : cours@musique.ch

Cherche garde d'enfants
Cherche personne sérieuse pour garder deux enfants (5 et 7 ans) les lundis de 16h à 19h.
20 CHF de l'heure. Envoyez un SMS au 078 321 45 67.
— Famille Dupont`,
    questions: [
      {
        id: "p1", textQ: "Qu'est-ce que Marco vend ?",
        textChoices: ["Une guitare électrique", "Une guitare acoustique", "Une basse", "Un piano"], textCorrect: 1,
        imageQ: "Qu'est-ce que Marco vend ?",
        imageChoices: [ic("🎸","Guitare électrique"), ic("🎸","Guitare acoustique"), ic("🎸","Basse"), ic("🎹","Piano")], imageCorrect: 1,
        fillQ: "Marco vend une guitare _________.", fillAnswer: "acoustique",
      },
      {
        id: "p2", textQ: "Combien coûte la guitare ?",
        textChoices: ["120 CHF", "150 CHF", "180 CHF", "200 CHF"], textCorrect: 2,
        imageQ: "Combien coûte la guitare ?",
        imageChoices: [ic("💰","120 CHF"), ic("💰","150 CHF"), ic("💰","180 CHF"), ic("💰","200 CHF")], imageCorrect: 2,
        fillQ: "La guitare coûte _________ CHF.", fillAnswer: "180",
      },
      {
        id: "p3", textQ: "À partir de quelle heure peut-on appeler Marco ?",
        textChoices: ["16h", "17h", "18h", "19h"], textCorrect: 2,
        imageQ: "À partir de quelle heure peut-on appeler Marco ?",
        imageChoices: [ic("⏰","16h"), ic("⏰","17h"), ic("⏰","18h"), ic("⏰","19h")], imageCorrect: 2,
        fillQ: "Marco est disponible le soir à partir de _________ heures.", fillAnswer: "18", fillAccept: ["18h", "dix-huit"],
      },
      {
        id: "p4", textQ: "Quels cours propose l'étudiant en musique ?",
        textChoices: ["Piano et violon", "Guitare ou basse", "Chant et piano", "Batterie et guitare"], textCorrect: 1,
        imageQ: "Quels cours propose l'étudiant en musique ?",
        imageChoices: [ic("🎹","Piano et violon"), ic("🎸","Guitare ou basse"), ic("🎤","Chant et piano"), ic("🥁","Batterie et guitare")], imageCorrect: 1,
        fillQ: "Il propose des cours de guitare ou de _________.", fillAnswer: "basse",
      },
      {
        id: "p5", textQ: "Combien coûte une heure de cours de musique ?",
        textChoices: ["20 CHF", "25 CHF", "30 CHF", "35 CHF"], textCorrect: 2,
        imageQ: "Combien coûte une heure de cours de musique ?",
        imageChoices: [ic("💰","20 CHF"), ic("💰","25 CHF"), ic("💰","30 CHF"), ic("💰","35 CHF")], imageCorrect: 2,
        fillQ: "Le cours de musique coûte _________ CHF l'heure.", fillAnswer: "30", fillAccept: ["trente"],
      },
      {
        id: "p6", textQ: "Quels jours l'étudiant donne-t-il des cours ?",
        textChoices: ["Lundi et jeudi", "Mardi et vendredi", "Mercredi et samedi", "Jeudi et dimanche"], textCorrect: 2,
        imageQ: "Quels jours l'étudiant donne-t-il des cours ?",
        imageChoices: [ic("📅","Lundi et jeudi"), ic("📅","Mardi et vendredi"), ic("📅","Mercredi et samedi"), ic("📅","Jeudi et dimanche")], imageCorrect: 2,
        fillQ: "Il est disponible le mercredi et le _________.", fillAnswer: "samedi",
      },
      {
        id: "p7", textQ: "Combien d'enfants faut-il garder pour la famille Dupont ?",
        textChoices: ["Un enfant", "Deux enfants", "Trois enfants", "Quatre enfants"], textCorrect: 1,
        imageQ: "Combien d'enfants faut-il garder ?",
        imageChoices: [ic("👶","1 enfant"), ic("👧","2 enfants"), ic("👨‍👧‍👦","3 enfants"), ic("👪","4 enfants")], imageCorrect: 1,
        fillQ: "Il y a _________ enfants à garder.", fillAnswer: "deux", fillAccept: ["2"],
      },
      {
        id: "p8", textQ: "Quel jour faut-il garder les enfants ?",
        textChoices: ["Le mardi", "Le jeudi", "Le lundi", "Le vendredi"], textCorrect: 2,
        imageQ: "Quel jour faut-il garder les enfants ?",
        imageChoices: [ic("📅","Mardi"), ic("📅","Jeudi"), ic("📅","Lundi"), ic("📅","Vendredi")], imageCorrect: 2,
        fillQ: "La garde a lieu le _________.", fillAnswer: "lundi",
      },
      {
        id: "p9", textQ: "Combien paye-t-on pour la garde d'enfants ?",
        textChoices: ["15 CHF/h", "20 CHF/h", "25 CHF/h", "30 CHF/h"], textCorrect: 1,
        imageQ: "Combien paye-t-on pour la garde d'enfants ?",
        imageChoices: [ic("💰","15 CHF/h"), ic("💰","20 CHF/h"), ic("💰","25 CHF/h"), ic("💰","30 CHF/h")], imageCorrect: 1,
        fillQ: "La garde est payée _________ CHF de l'heure.", fillAnswer: "20", fillAccept: ["vingt"],
      },
      {
        id: "p10", textQ: "Comment répondre à l'annonce de garde d'enfants ?",
        textChoices: ["Par email", "Par téléphone", "Par SMS", "En personne"], textCorrect: 2,
        imageQ: "Comment répondre à l'annonce de garde d'enfants ?",
        imageChoices: [ic("📧","Email"), ic("📞","Téléphone"), ic("💬","SMS"), ic("🚶","En personne")], imageCorrect: 2,
        fillQ: "Pour la garde, envoyez un _________ au 078 321 45 67.", fillAnswer: "SMS", fillAccept: ["sms", "message"],
      },
    ],
  },

  // ── 7. Email sortie scolaire ───────────────────────────────────────────────
  {
    id: "base-sortie-musee",
    title: "Sortie au Musée d'Histoire de Berne",
    body: `De : simon.perret@ecole-sion.ch
Objet : Sortie au Musée d'Histoire de Berne

Bonjour,

Nous allons au Musée d'Histoire de Berne vendredi prochain. Rendez-vous à 8h45 devant l'école.

Pour aller au musée, prenez le train depuis la gare de Sion. Descendez à Berne. Sortez de la gare et traversez le pont. Continuez tout droit sur la Kirchenfeldstrasse. Le musée est sur la droite, au numéro 5.

Le tarif normal est de 13 CHF, mais comme nous sommes un groupe scolaire, le prix est de 5 CHF par personne.

À vendredi,
M. Perret
Professeur de français`,
    questions: [
      {
        id: "s1", textQ: "Où va la classe ?",
        textChoices: ["Au Musée d'Art de Lausanne", "Au Musée d'Histoire de Berne", "Au Musée du Léman à Genève", "Au Musée de la Nature à Sion"], textCorrect: 1,
        imageQ: "Où va la classe ?",
        imageChoices: [ic("🖼️","Musée Art Lausanne"), ic("🏛️","Musée Histoire Berne"), ic("🌊","Musée Léman Genève"), ic("🌿","Musée Nature Sion")], imageCorrect: 1,
        fillQ: "La classe va au Musée d'Histoire de _________.", fillAnswer: "Berne", fillAccept: ["berne"],
      },
      {
        id: "s2", textQ: "À quelle heure est le rendez-vous ?",
        textChoices: ["8h00", "8h30", "8h45", "9h00"], textCorrect: 2,
        imageQ: "À quelle heure est le rendez-vous ?",
        imageChoices: [ic("⏰","8h00"), ic("⏰","8h30"), ic("⏰","8h45"), ic("⏰","9h00")], imageCorrect: 2,
        fillQ: "Le rendez-vous est à 8 heures _________.", fillAnswer: "45", fillAccept: ["8h45", "quarante-cinq"],
      },
      {
        id: "s3", textQ: "Où est le point de rendez-vous ?",
        textChoices: ["À la gare", "À l'arrêt de bus", "Devant l'école", "Devant le musée"], textCorrect: 2,
        imageQ: "Où est le point de rendez-vous ?",
        imageChoices: [ic("🚉","À la gare"), ic("🚌","À l'arrêt bus"), ic("🏫","Devant l'école"), ic("🏛️","Devant le musée")], imageCorrect: 2,
        fillQ: "Le rendez-vous est devant l'_________.", fillAnswer: "école",
      },
      {
        id: "s4", textQ: "Quel moyen de transport utilise-t-on ?",
        textChoices: ["Le bus", "Le tramway", "Le train", "La voiture"], textCorrect: 2,
        imageQ: "Quel moyen de transport utilise-t-on ?",
        imageChoices: [ic("🚌","Bus"), ic("🚋","Tramway"), ic("🚆","Train"), ic("🚗","Voiture")], imageCorrect: 2,
        fillQ: "On prend le _________ depuis Sion.", fillAnswer: "train",
      },
      {
        id: "s5", textQ: "D'où part le train ?",
        textChoices: ["De la gare de Berne", "De la gare de Lausanne", "De la gare de Sion", "De la gare de Genève"], textCorrect: 2,
        imageQ: "D'où part le train ?",
        imageChoices: [ic("🚉","Berne"), ic("🚉","Lausanne"), ic("🚉","Sion"), ic("🚉","Genève")], imageCorrect: 2,
        fillQ: "Le train part depuis la gare de _________.", fillAnswer: "Sion", fillAccept: ["sion"],
      },
      {
        id: "s6", textQ: "Quel est le tarif normal du musée ?",
        textChoices: ["8 CHF", "10 CHF", "13 CHF", "15 CHF"], textCorrect: 2,
        imageQ: "Quel est le tarif normal du musée ?",
        imageChoices: [ic("💰","8 CHF"), ic("💰","10 CHF"), ic("💰","13 CHF"), ic("💰","15 CHF")], imageCorrect: 2,
        fillQ: "Le tarif normal est de _________ CHF.", fillAnswer: "13", fillAccept: ["treize"],
      },
      {
        id: "s7", textQ: "Combien paye chaque élève pour entrer ?",
        textChoices: ["3 CHF", "5 CHF", "8 CHF", "10 CHF"], textCorrect: 1,
        imageQ: "Combien paye chaque élève pour entrer ?",
        imageChoices: [ic("💰","3 CHF"), ic("💰","5 CHF"), ic("💰","8 CHF"), ic("💰","10 CHF")], imageCorrect: 1,
        fillQ: "Les élèves payent _________ CHF par personne.", fillAnswer: "5", fillAccept: ["cinq"],
      },
      {
        id: "s8", textQ: "Quel jour a lieu la sortie ?",
        textChoices: ["Jeudi prochain", "Vendredi prochain", "Samedi prochain", "Lundi prochain"], textCorrect: 1,
        imageQ: "Quel jour a lieu la sortie ?",
        imageChoices: [ic("📅","Jeudi"), ic("📅","Vendredi"), ic("📅","Samedi"), ic("📅","Lundi")], imageCorrect: 1,
        fillQ: "La sortie a lieu _________ prochain.", fillAnswer: "vendredi",
      },
      {
        id: "s9", textQ: "Après avoir traversé le pont, que faut-il faire ?",
        textChoices: ["Tourner à droite", "Tourner à gauche", "Continuer tout droit", "Prendre le bus"], textCorrect: 2,
        imageQ: "Après avoir traversé le pont, que faut-il faire ?",
        imageChoices: [ic("➡️","Tourner droite"), ic("⬅️","Tourner gauche"), ic("⬆️","Continuer droit"), ic("🚌","Prendre bus")], imageCorrect: 2,
        fillQ: "Après le pont, continuez tout _________ sur la Kirchenfeldstrasse.", fillAnswer: "droit",
      },
      {
        id: "s10", textQ: "Qui a envoyé cet email ?",
        textChoices: ["Le directeur de l'école", "M. Perret, professeur de français", "Le musée de Berne", "La commune de Sion"], textCorrect: 1,
        imageQ: "Qui a envoyé cet email ?",
        imageChoices: [ic("👨‍💼","Directeur"), ic("👨‍🏫","M. Perret"), ic("🏛️","Le musée"), ic("🏛️","La commune")], imageCorrect: 1,
        fillQ: "L'email est envoyé par M. Perret, professeur de _________.", fillAnswer: "français", fillAccept: ["francais"],
      },
    ],
  },

  // ── 8. Mode d'emploi ───────────────────────────────────────────────────────
  {
    id: "base-mode-emploi",
    title: "Lecteur MP3 — Mode d'emploi",
    body: `Lecteur MP3 — mode d'emploi (modèle Swiss Sound Pro)

— Pour allumer le lecteur, appuyez sur le bouton ON/OFF pendant 3 secondes.
— Pour mettre en veille, maintenez le bouton STOP enfoncé pendant 5 secondes.
  Le message « À bientôt ! » apparaît sur l'écran.
— Pour lire une chanson, appuyez sur PLAY.
— Pour mettre en pause, appuyez sur STOP.
— Pour changer de chanson, appuyez sur PRÉCÉDENT ou SUIVANT.
— Pour régler le volume, appuyez sur VOLUME pendant 2 secondes,
  puis sur (–) pour diminuer ou (+) pour augmenter.
— Pour écouter la radio, appuyez sur RADIO pendant 3 secondes.`,
    questions: [
      {
        id: "m1", textQ: "Comment allume-t-on le lecteur MP3 ?",
        textChoices: ["On appuie sur PLAY", "On appuie sur ON/OFF pendant 3 secondes", "On appuie sur VOLUME pendant 5 secondes", "On le branche à l'électricité"], textCorrect: 1,
        imageQ: "Comment allume-t-on le lecteur MP3 ?",
        imageChoices: [ic("▶️","Appuyer sur PLAY"), ic("🔘","ON/OFF 3 sec"), ic("🔊","VOLUME 5 sec"), ic("🔌","Brancher")], imageCorrect: 1,
        fillQ: "Pour allumer, appuyer sur ON/OFF pendant _________ secondes.", fillAnswer: "3", fillAccept: ["trois"],
      },
      {
        id: "m2", textQ: "Combien de secondes faut-il pour mettre en veille ?",
        textChoices: ["2 secondes", "3 secondes", "4 secondes", "5 secondes"], textCorrect: 3,
        imageQ: "Combien de secondes faut-il pour mettre en veille ?",
        imageChoices: [ic("⏱️","2 secondes"), ic("⏱️","3 secondes"), ic("⏱️","4 secondes"), ic("⏱️","5 secondes")], imageCorrect: 3,
        fillQ: "Pour la veille, maintenir le bouton STOP pendant _________ secondes.", fillAnswer: "5", fillAccept: ["cinq"],
      },
      {
        id: "m3", textQ: "Quel message apparaît en veille ?",
        textChoices: ["« Au revoir ! »", "« Bonne nuit ! »", "« À bientôt ! »", "« Standby »"], textCorrect: 2,
        imageQ: "Quel message apparaît en veille ?",
        imageChoices: [ic("💬","Au revoir !"), ic("💬","Bonne nuit !"), ic("💬","À bientôt !"), ic("💬","Standby")], imageCorrect: 2,
        fillQ: "En veille, le message « À _________ ! » apparaît.", fillAnswer: "bientôt", fillAccept: ["bientot"],
      },
      {
        id: "m4", textQ: "Comment lit-on une chanson ?",
        textChoices: ["On appuie sur STOP", "On appuie sur PLAY", "On appuie sur PRÉCÉDENT", "On appuie sur VOLUME"], textCorrect: 1,
        imageQ: "Comment lit-on une chanson ?",
        imageChoices: [ic("⏹️","STOP"), ic("▶️","PLAY"), ic("⏮️","PRÉCÉDENT"), ic("🔊","VOLUME")], imageCorrect: 1,
        fillQ: "Pour _________ une chanson, appuyez sur PLAY.", fillAnswer: "lire", fillAccept: ["écouter", "ecouter", "jouer"],
      },
      {
        id: "m5", textQ: "Comment change-t-on de chanson ?",
        textChoices: ["PLAY puis STOP", "PRÉCÉDENT ou SUIVANT", "VOLUME + ou –", "ON/OFF"], textCorrect: 1,
        imageQ: "Comment change-t-on de chanson ?",
        imageChoices: [ic("⏸️","PLAY puis STOP"), ic("⏮️⏭️","PRÉCÉDENT/SUIVANT"), ic("🔊","VOLUME +/-"), ic("🔘","ON/OFF")], imageCorrect: 1,
        fillQ: "Pour changer de chanson, appuyez sur PRÉCÉDENT ou _________.", fillAnswer: "SUIVANT", fillAccept: ["suivant"],
      },
      {
        id: "m6", textQ: "Combien de secondes faut-il pour régler le volume ?",
        textChoices: ["1 seconde", "2 secondes", "3 secondes", "5 secondes"], textCorrect: 1,
        imageQ: "Combien de secondes faut-il pour régler le volume ?",
        imageChoices: [ic("⏱️","1 seconde"), ic("⏱️","2 secondes"), ic("⏱️","3 secondes"), ic("⏱️","5 secondes")], imageCorrect: 1,
        fillQ: "Pour régler le volume, appuyer sur VOLUME pendant _________ secondes.", fillAnswer: "2", fillAccept: ["deux"],
      },
      {
        id: "m7", textQ: "Quel bouton permet de diminuer le volume ?",
        textChoices: ["Le bouton +", "Le bouton –", "Le bouton STOP", "Le bouton PLAY"], textCorrect: 1,
        imageQ: "Quel bouton permet de diminuer le volume ?",
        imageChoices: [ic("➕","Bouton +"), ic("➖","Bouton –"), ic("⏹️","STOP"), ic("▶️","PLAY")], imageCorrect: 1,
        fillQ: "Pour diminuer le volume, appuyez sur ___.", fillAnswer: "–", fillAccept: ["moins", "-"],
      },
      {
        id: "m8", textQ: "Combien de secondes faut-il pour écouter la radio ?",
        textChoices: ["2 secondes", "3 secondes", "4 secondes", "5 secondes"], textCorrect: 1,
        imageQ: "Combien de secondes faut-il pour écouter la radio ?",
        imageChoices: [ic("⏱️","2 secondes"), ic("⏱️","3 secondes"), ic("⏱️","4 secondes"), ic("⏱️","5 secondes")], imageCorrect: 1,
        fillQ: "Pour écouter la radio, appuyer sur RADIO pendant _________ secondes.", fillAnswer: "3", fillAccept: ["trois"],
      },
      {
        id: "m9", textQ: "Comment met-on la musique en pause ?",
        textChoices: ["On appuie sur PLAY", "On appuie sur STOP", "On appuie sur PRÉCÉDENT", "On éteint le lecteur"], textCorrect: 1,
        imageQ: "Comment met-on la musique en pause ?",
        imageChoices: [ic("▶️","PLAY"), ic("⏹️","STOP"), ic("⏮️","PRÉCÉDENT"), ic("🔘","Éteindre")], imageCorrect: 1,
        fillQ: "Pour mettre en _________,  appuyez sur STOP.", fillAnswer: "pause",
      },
      {
        id: "m10", textQ: "Quel est le nom du modèle de ce lecteur ?",
        textChoices: ["Swiss Sound Basic", "Swiss Sound Pro", "Swiss Sound Max", "Swiss Sound Mini"], textCorrect: 1,
        imageQ: "Quel est le nom du modèle de ce lecteur ?",
        imageChoices: [ic("🎵","Swiss Sound Basic"), ic("🎵","Swiss Sound Pro"), ic("🎵","Swiss Sound Max"), ic("🎵","Swiss Sound Mini")], imageCorrect: 1,
        fillQ: "Le modèle s'appelle Swiss Sound ___.", fillAnswer: "Pro", fillAccept: ["pro"],
      },
    ],
  },

  // ── 9. Invitation mariage ─────────────────────────────────────────────────
  {
    id: "base-mariage",
    title: "Union de Céline et Thomas",
    body: `UNION DE CÉLINE ET THOMAS

Vous êtes invité à la cérémonie de mariage organisée à l'église de Savièse, le samedi 14 juin à 14h30.

Un repas a lieu ensuite au Château de Villa, à Sierre.

Pour accéder au château depuis l'église, prenez la direction de Sierre sur la route principale. Au rond-point, prenez la deuxième sortie. Le château est sur votre gauche.

Le repas sera servi à partir de 18h30.
La soirée dansante a lieu dans la grande salle jusqu'à 1h du matin.

Confirmez votre présence avant le 15 mai à : celineethomas@mariage.ch`,
    questions: [
      {
        id: "w1", textQ: "Qui se marie ?",
        textChoices: ["Sophie et Marc", "Céline et Thomas", "Marie et Pierre", "Léa et David"], textCorrect: 1,
        imageQ: "Qui se marie ?",
        imageChoices: [ic("💑","Sophie et Marc"), ic("💑","Céline et Thomas"), ic("💑","Marie et Pierre"), ic("💑","Léa et David")], imageCorrect: 1,
        fillQ: "Le mariage est celui de Céline et _________.", fillAnswer: "Thomas", fillAccept: ["thomas"],
      },
      {
        id: "w2", textQ: "Où a lieu la cérémonie ?",
        textChoices: ["À la mairie de Sion", "À l'église de Savièse", "Au Château de Villa", "Dans un parc"], textCorrect: 1,
        imageQ: "Où a lieu la cérémonie ?",
        imageChoices: [ic("🏛️","Mairie de Sion"), ic("⛪","Église de Savièse"), ic("🏰","Château de Villa"), ic("🌳","Dans un parc")], imageCorrect: 1,
        fillQ: "La cérémonie a lieu à l'église de _________.", fillAnswer: "Savièse", fillAccept: ["savièse", "saveise"],
      },
      {
        id: "w3", textQ: "À quelle heure commence la cérémonie ?",
        textChoices: ["13h", "13h30", "14h", "14h30"], textCorrect: 3,
        imageQ: "À quelle heure commence la cérémonie ?",
        imageChoices: [ic("⏰","13h"), ic("⏰","13h30"), ic("⏰","14h"), ic("⏰","14h30")], imageCorrect: 3,
        fillQ: "La cérémonie commence à 14 heures _________.", fillAnswer: "30", fillAccept: ["trente"],
      },
      {
        id: "w4", textQ: "Où a lieu le repas ?",
        textChoices: ["À l'église de Savièse", "À la mairie de Sierre", "Au Château de Villa", "Dans un restaurant"], textCorrect: 2,
        imageQ: "Où a lieu le repas ?",
        imageChoices: [ic("⛪","Église Savièse"), ic("🏛️","Mairie Sierre"), ic("🏰","Château de Villa"), ic("🍽️","Restaurant")], imageCorrect: 2,
        fillQ: "Le repas a lieu au Château de _________, à Sierre.", fillAnswer: "Villa", fillAccept: ["villa"],
      },
      {
        id: "w5", textQ: "À quelle heure est servi le repas ?",
        textChoices: ["17h", "17h30", "18h", "18h30"], textCorrect: 3,
        imageQ: "À quelle heure est servi le repas ?",
        imageChoices: [ic("⏰","17h"), ic("⏰","17h30"), ic("⏰","18h"), ic("⏰","18h30")], imageCorrect: 3,
        fillQ: "Le repas est servi à partir de 18 heures _________.", fillAnswer: "30", fillAccept: ["trente"],
      },
      {
        id: "w6", textQ: "Jusqu'à quelle heure dure la soirée dansante ?",
        textChoices: ["Minuit", "1h du matin", "2h du matin", "3h du matin"], textCorrect: 1,
        imageQ: "Jusqu'à quelle heure dure la soirée dansante ?",
        imageChoices: [ic("⏰","Minuit"), ic("⏰","1h du matin"), ic("⏰","2h du matin"), ic("⏰","3h du matin")], imageCorrect: 1,
        fillQ: "La soirée dansante dure jusqu'à _________ heure du matin.", fillAnswer: "1", fillAccept: ["une", "1h"],
      },
      {
        id: "w7", textQ: "Avant quelle date faut-il confirmer ?",
        textChoices: ["Avant le 1er mai", "Avant le 15 mai", "Avant le 1er juin", "Avant le 14 juin"], textCorrect: 1,
        imageQ: "Avant quelle date faut-il confirmer ?",
        imageChoices: [ic("📅","1er mai"), ic("📅","15 mai"), ic("📅","1er juin"), ic("📅","14 juin")], imageCorrect: 1,
        fillQ: "Il faut confirmer avant le _________ mai.", fillAnswer: "15", fillAccept: ["quinze"],
      },
      {
        id: "w8", textQ: "Quelle direction prendre en sortant de l'église ?",
        textChoices: ["Direction Sion", "Direction Sierre", "Direction Martigny", "Direction Genève"], textCorrect: 1,
        imageQ: "Quelle direction prendre en sortant de l'église ?",
        imageChoices: [ic("🏙️","Sion"), ic("🏘️","Sierre"), ic("⛰️","Martigny"), ic("🌊","Genève")], imageCorrect: 1,
        fillQ: "Depuis l'église, prenez la direction de _________.", fillAnswer: "Sierre", fillAccept: ["sierre"],
      },
      {
        id: "w9", textQ: "Quelle sortie prendre au rond-point ?",
        textChoices: ["La première sortie", "La deuxième sortie", "La troisième sortie", "Continuer tout droit"], textCorrect: 1,
        imageQ: "Quelle sortie prendre au rond-point ?",
        imageChoices: [ic("🔄","1ère sortie"), ic("🔄","2ème sortie"), ic("🔄","3ème sortie"), ic("⬆️","Tout droit")], imageCorrect: 1,
        fillQ: "Au rond-point, prenez la _________ sortie.", fillAnswer: "deuxième", fillAccept: ["2ème", "2e", "deuxieme"],
      },
      {
        id: "w10", textQ: "Comment confirme-t-on sa présence ?",
        textChoices: ["Par téléphone", "Par courrier", "Par email", "En personne"], textCorrect: 2,
        imageQ: "Comment confirme-t-on sa présence ?",
        imageChoices: [ic("📞","Téléphone"), ic("✉️","Courrier"), ic("📧","Email"), ic("🚶","En personne")], imageCorrect: 2,
        fillQ: "On confirme par email à celineethomas@mariage.___.", fillAnswer: "ch",
      },
    ],
  },

  // ── 10. Programme d'activités ──────────────────────────────────────────────
  {
    id: "base-activites",
    title: "Activités du Centre culturel de Sion",
    body: `Activités du Centre culturel de Sion

Arts créatifs : ouvert à tous.
  Jeudi : 17h30 – 19h30.
  Tarifs : 10 CHF par trimestre (gratuit pour les moins de 16 ans).
  Samedi : 15h – 17h.

Cuisine du monde : adultes uniquement.
  Jours et horaires : à déterminer.
  Nous cherchons un animateur pour cet atelier.

Atelier du mercredi : bricolage, couture, musique…
  Le thème change chaque mercredi !
  Horaires : 10h – 11h45.
  Tarifs : adultes 2 CHF / enfants 0,50 CHF.

Contact : info@culturelsion.ch`,
    questions: [
      {
        id: "c1", textQ: "Quels jours ont lieu les arts créatifs ?",
        textChoices: ["Lundi et mercredi", "Mardi et vendredi", "Jeudi et samedi", "Mercredi et dimanche"], textCorrect: 2,
        imageQ: "Quels jours ont lieu les arts créatifs ?",
        imageChoices: [ic("📅","Lundi et mercredi"), ic("📅","Mardi et vendredi"), ic("📅","Jeudi et samedi"), ic("📅","Mercredi et dimanche")], imageCorrect: 2,
        fillQ: "Les arts créatifs ont lieu le jeudi et le _________.", fillAnswer: "samedi",
      },
      {
        id: "c2", textQ: "Quel est le tarif des arts créatifs pour les moins de 16 ans ?",
        textChoices: ["2 CHF", "5 CHF", "10 CHF", "Gratuit"], textCorrect: 3,
        imageQ: "Quel est le tarif pour les moins de 16 ans ?",
        imageChoices: [ic("💰","2 CHF"), ic("💰","5 CHF"), ic("💰","10 CHF"), ic("🎁","Gratuit")], imageCorrect: 3,
        fillQ: "Les arts créatifs sont _________ pour les moins de 16 ans.", fillAnswer: "gratuits", fillAccept: ["gratuit", "gratis"],
      },
      {
        id: "c3", textQ: "Qui peut participer à la cuisine du monde ?",
        textChoices: ["Les enfants uniquement", "Les jeunes uniquement", "Les adultes uniquement", "Tout le monde"], textCorrect: 2,
        imageQ: "Qui peut participer à la cuisine du monde ?",
        imageChoices: [ic("👶","Enfants seuls"), ic("🧒","Jeunes seuls"), ic("👨‍👩","Adultes seuls"), ic("👨‍👩‍👧","Tout le monde")], imageCorrect: 2,
        fillQ: "La cuisine du monde est réservée aux _________ uniquement.", fillAnswer: "adultes",
      },
      {
        id: "c4", textQ: "À quelle heure commence l'atelier du mercredi ?",
        textChoices: ["9h", "9h30", "10h", "10h30"], textCorrect: 2,
        imageQ: "À quelle heure commence l'atelier du mercredi ?",
        imageChoices: [ic("⏰","9h"), ic("⏰","9h30"), ic("⏰","10h"), ic("⏰","10h30")], imageCorrect: 2,
        fillQ: "L'atelier du mercredi commence à _________ heures.", fillAnswer: "10", fillAccept: ["10h", "dix"],
      },
      {
        id: "c5", textQ: "À quelle heure se termine l'atelier du mercredi ?",
        textChoices: ["11h", "11h30", "11h45", "12h"], textCorrect: 2,
        imageQ: "À quelle heure se termine l'atelier du mercredi ?",
        imageChoices: [ic("⏰","11h"), ic("⏰","11h30"), ic("⏰","11h45"), ic("⏰","12h")], imageCorrect: 2,
        fillQ: "L'atelier du mercredi se termine à 11h _________.", fillAnswer: "45", fillAccept: ["quarante-cinq"],
      },
      {
        id: "c6", textQ: "Combien coûte l'atelier du mercredi pour un adulte ?",
        textChoices: ["0,50 CHF", "1 CHF", "2 CHF", "5 CHF"], textCorrect: 2,
        imageQ: "Combien coûte l'atelier du mercredi pour un adulte ?",
        imageChoices: [ic("💰","0,50 CHF"), ic("💰","1 CHF"), ic("💰","2 CHF"), ic("💰","5 CHF")], imageCorrect: 2,
        fillQ: "L'atelier du mercredi coûte _________ CHF pour les adultes.", fillAnswer: "2", fillAccept: ["deux"],
      },
      {
        id: "c7", textQ: "Combien coûte l'atelier du mercredi pour un enfant ?",
        textChoices: ["0,50 CHF", "1 CHF", "1,50 CHF", "2 CHF"], textCorrect: 0,
        imageQ: "Combien coûte l'atelier du mercredi pour un enfant ?",
        imageChoices: [ic("💰","0,50 CHF"), ic("💰","1 CHF"), ic("💰","1,50 CHF"), ic("💰","2 CHF")], imageCorrect: 0,
        fillQ: "Pour les enfants, l'atelier du mercredi coûte 0,___ CHF.", fillAnswer: "50", fillAccept: ["cinquante centimes", "0.50"],
      },
      {
        id: "c8", textQ: "Qu'est-ce qui change chaque mercredi ?",
        textChoices: ["Le lieu", "L'horaire", "Le thème", "Le prix"], textCorrect: 2,
        imageQ: "Qu'est-ce qui change chaque mercredi ?",
        imageChoices: [ic("📍","Le lieu"), ic("⏰","L'horaire"), ic("🎨","Le thème"), ic("💰","Le prix")], imageCorrect: 2,
        fillQ: "Le _________ change chaque mercredi.", fillAnswer: "thème", fillAccept: ["theme"],
      },
      {
        id: "c9", textQ: "Quelles activités propose l'atelier du mercredi ?",
        textChoices: ["Sport et musique", "Bricolage, couture et musique", "Dessin et peinture", "Cuisine et jardinage"], textCorrect: 1,
        imageQ: "Quelles activités propose l'atelier du mercredi ?",
        imageChoices: [ic("⚽","Sport et musique"), ic("🔨","Bricolage, couture, musique"), ic("🎨","Dessin et peinture"), ic("🍳","Cuisine et jardinage")], imageCorrect: 1,
        fillQ: "L'atelier propose du bricolage, de la couture et de la _________.", fillAnswer: "musique",
      },
      {
        id: "c10", textQ: "Comment contacter le centre culturel ?",
        textChoices: ["Par téléphone", "Par email", "En personne", "Par courrier"], textCorrect: 1,
        imageQ: "Comment contacter le centre culturel ?",
        imageChoices: [ic("📞","Téléphone"), ic("📧","Email"), ic("🚶","En personne"), ic("✉️","Courrier")], imageCorrect: 1,
        fillQ: "Le centre se trouve à _________.", fillAnswer: "Sion", fillAccept: ["sion"],
      },
    ],
  },
];

// ─── Session creation ─────────────────────────────────────────────────────────

export function createBaseSession(): CEBaseSession {
  const text = CE_TEXTS_BASE[Math.floor(Math.random() * CE_TEXTS_BASE.length)]!;
  const shuffled = [...text.questions].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 5);
  const formats: CEFormatType[] = ["text", "text", "image", "image", "fill"];
  const shuffledFormats = [...formats].sort(() => Math.random() - 0.5);
  return {
    text,
    questions: selected.map((q, i) => ({ q, format: shuffledFormats[i]! })),
  };
}

export function checkFillAnswer(userInput: string, canonical: string, accept?: string[]): boolean {
  const norm = (s: string) =>
    s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[.,!?]/g, "").trim();
  const user = norm(userInput);
  const all = [canonical, ...(accept ?? [])].map(norm);
  return all.some((a) => a !== "" && user === a);
}

// ─── Existing types for moyen / avancé ───────────────────────────────────────

export type CEQuestion = {
  question: string;
  choices: string[];
  correct: number;
};

export type CEText = {
  id: string;
  level: "base" | "moyen" | "avance";
  title: string;
  body: string;
  questions: CEQuestion[];
};

const CE_TEXTS: CEText[] = [
  // ──── MOYEN (A2/B1) ────────────────────────────────────────────────────────
  {
    id: "moyen-langues", level: "moyen",
    title: "La Suisse et ses langues",
    body: "La Suisse est un petit pays au cœur de l'Europe. Elle a quatre langues officielles : l'allemand, le français, l'italien et le romanche. L'allemand est parlé par environ 63 % de la population, principalement dans le centre et le nord du pays. Le français est la langue de l'ouest, qu'on appelle la Romandie. L'italien est parlé dans le canton du Tessin, au sud. Le romanche est une langue très ancienne parlée par seulement 1 % de la population, dans les Grisons.\n\nCette diversité linguistique est une richesse pour la Suisse, mais aussi un défi. Les Suisses apprennent souvent plusieurs langues à l'école. Beaucoup de personnes parlent au moins deux des langues nationales en plus de l'anglais.",
    questions: [
      { question: "Combien de langues officielles la Suisse a-t-elle ?", choices: ["Deux", "Trois", "Quatre", "Cinq"], correct: 2 },
      { question: "Quel pourcentage de la population parle allemand ?", choices: ["Environ 40 %", "Environ 55 %", "Environ 63 %", "Environ 70 %"], correct: 2 },
      { question: "Comment appelle-t-on la partie francophone de la Suisse ?", choices: ["Le Valais", "La Romandie", "Le Tessin", "Les Grisons"], correct: 1 },
      { question: "Dans quel canton parle-t-on principalement l'italien ?", choices: ["Le Valais", "Les Grisons", "Genève", "Le Tessin"], correct: 3 },
      { question: "Quel est le défi de la diversité linguistique selon le texte ?", choices: ["Les gens ne se comprennent pas", "Les Suisses doivent apprendre plusieurs langues", "Il n'y a pas de langue commune", "L'anglais remplace les langues nationales"], correct: 1 },
      { question: "Quelle proportion de Suisses parle le romanche ?", choices: ["1 %", "5 %", "10 %", "20 %"], correct: 0 },
    ],
  },
  {
    id: "moyen-logement", level: "moyen",
    title: "Trouver un logement en Suisse",
    body: "Trouver un appartement en Suisse peut être difficile, surtout dans les grandes villes comme Genève ou Zurich. Les loyers sont parmi les plus élevés d'Europe. Pour louer un appartement, il faut généralement fournir plusieurs documents : une pièce d'identité, les trois derniers bulletins de salaire, une attestation de l'office des poursuites et des lettres de référence.\n\nLe processus peut prendre plusieurs semaines, car il y a souvent beaucoup de candidats pour un seul appartement. Il est conseillé de visiter plusieurs logements avant de faire votre choix. La durée du préavis pour quitter un logement est généralement de trois mois. En Suisse, les contrats de location sont le plus souvent à durée indéterminée.",
    questions: [
      { question: "Dans quelles villes les loyers sont-ils particulièrement élevés ?", choices: ["Berne et Lausanne", "Genève et Zurich", "Bâle et Lugano", "Sion et Fribourg"], correct: 1 },
      { question: "Quel document permet de vérifier qu'on n'a pas de dettes ?", choices: ["La pièce d'identité", "Les bulletins de salaire", "L'attestation de l'office des poursuites", "Les lettres de référence"], correct: 2 },
      { question: "Combien de bulletins de salaire faut-il fournir ?", choices: ["Un", "Deux", "Trois", "Six"], correct: 2 },
      { question: "Pourquoi le processus peut-il prendre plusieurs semaines ?", choices: ["Les propriétaires sont très occupés", "Il y a beaucoup de candidats", "Les documents sont compliqués", "La loi oblige d'attendre"], correct: 1 },
      { question: "Quelle est la durée habituelle du préavis pour quitter un logement ?", choices: ["Un mois", "Deux mois", "Trois mois", "Six mois"], correct: 2 },
      { question: "Comment sont généralement les contrats de location en Suisse ?", choices: ["Pour un an seulement", "À durée déterminée", "À durée indéterminée", "Pour six mois"], correct: 2 },
    ],
  },
  {
    id: "moyen-sante", level: "moyen",
    title: "La santé en Suisse",
    body: "En Suisse, tout le monde est obligé d'avoir une assurance maladie. Cette assurance, appelée l'assurance de base, couvre les soins médicaux essentiels. Chaque personne choisit sa caisse maladie et peut changer d'assureur chaque année au mois de novembre. La prime mensuelle dépend de l'âge, du canton et du modèle d'assurance choisi.\n\nAvec l'assurance de base, les personnes doivent payer une franchise annuelle. La franchise standard est de 300 francs pour les adultes, mais elle peut aller jusqu'à 2 500 francs. Plus la franchise est élevée, plus la prime mensuelle est basse. En cas de maladie, vous pouvez consulter un médecin généraliste qui peut vous référer à un spécialiste si nécessaire.",
    questions: [
      { question: "L'assurance maladie est-elle obligatoire en Suisse ?", choices: ["Non, c'est facultatif", "Oui, pour tout le monde", "Seulement pour les étrangers", "Seulement pour les employés"], correct: 1 },
      { question: "Quand peut-on changer de caisse maladie ?", choices: ["À tout moment", "En janvier", "En novembre", "En juillet"], correct: 2 },
      { question: "De quoi dépend la prime mensuelle ?", choices: ["Du salaire uniquement", "De l'âge et du travail", "De l'âge, du canton et du modèle choisi", "Seulement du canton"], correct: 2 },
      { question: "Quel est le montant de la franchise standard pour les adultes ?", choices: ["100 francs", "200 francs", "300 francs", "500 francs"], correct: 2 },
      { question: "Quel est l'effet d'une franchise élevée sur la prime ?", choices: ["La prime augmente", "La prime reste la même", "La prime diminue", "Cela dépend de la caisse"], correct: 2 },
      { question: "Qui peut vous envoyer chez un spécialiste ?", choices: ["L'assurance", "Le pharmacien", "Un médecin généraliste", "L'hôpital"], correct: 2 },
    ],
  },
  {
    id: "moyen-travail", level: "moyen",
    title: "Chercher un emploi en Suisse",
    body: "Trouver un emploi en Suisse demande de la préparation. Il est important d'avoir un curriculum vitae (CV) bien structuré, qui présente vos expériences professionnelles, vos formations et vos compétences linguistiques. En Suisse, les employeurs accordent beaucoup d'importance aux langues parlées, surtout si le poste nécessite de communiquer avec des clients ou des collègues de différentes régions.\n\nLes offres d'emploi se trouvent sur des sites internet comme jobs.ch ou Indeed, mais aussi dans les journaux locaux et les offices régionaux de placement (ORP). Ces derniers peuvent aider les personnes sans emploi à trouver un travail en proposant des formations, des conseils et un suivi personnalisé. En Suisse, le taux de chômage est généralement l'un des plus bas d'Europe.",
    questions: [
      { question: "Qu'est-ce qu'un CV doit présenter selon le texte ?", choices: ["Uniquement les diplômes", "Les expériences, formations et compétences linguistiques", "Seulement les références", "Le salaire souhaité"], correct: 1 },
      { question: "Pourquoi les langues sont-elles importantes pour les employeurs suisses ?", choices: ["C'est une obligation légale", "Pour communiquer avec des clients ou collègues de différentes régions", "Pour travailler à l'étranger", "C'est une tradition suisse"], correct: 1 },
      { question: "Qu'est-ce que l'ORP ?", choices: ["Un site internet d'offres d'emploi", "L'office régional de placement", "Un syndicat de travailleurs", "Une école professionnelle"], correct: 1 },
      { question: "Quels services propose l'ORP ?", choices: ["Uniquement des formations", "Des formations, conseils et suivi personnalisé", "Seulement un suivi financier", "Des offres d'emploi exclusivement"], correct: 1 },
      { question: "Comment est le taux de chômage en Suisse selon le texte ?", choices: ["Parmi les plus élevés d'Europe", "Dans la moyenne européenne", "Parmi les plus bas d'Europe", "Le plus bas du monde"], correct: 2 },
    ],
  },
  {
    id: "moyen-transport", level: "moyen",
    title: "Les transports en commun en Suisse",
    body: "La Suisse possède l'un des réseaux de transports en commun les plus denses et les plus ponctuels au monde. Les trains, les bus, les trams et les bateaux sont coordonnés pour permettre des correspondances faciles et rapides. Les horaires sont respectés avec une précision remarquable.\n\nPour utiliser les transports suisses, il existe plusieurs types de billets. Le billet classique est acheté pour un trajet précis. L'abonnement demi-tarif permet de voyager à moitié prix sur tout le réseau et est très populaire. L'abonnement général (AG) donne accès à l'ensemble des transports publics sans limitation. Pour les jeunes de moins de 25 ans, l'abonnement junior offre des réductions importantes. La ponctualité et la propreté des transports suisses sont souvent citées comme des exemples à suivre.",
    questions: [
      { question: "Qu'est-ce qui est dit des transports suisses dans le texte ?", choices: ["Ils sont peu développés", "Ils sont parmi les plus denses et ponctuels au monde", "Ils sont coûteux et peu fiables", "Ils sont uniquement pour les grandes villes"], correct: 1 },
      { question: "Que permet l'abonnement demi-tarif ?", choices: ["Voyager gratuitement", "Voyager à moitié prix sur tout le réseau", "Utiliser uniquement les trains", "Voyager gratuitement le week-end"], correct: 1 },
      { question: "Que donne l'abonnement général (AG) ?", choices: ["La moitié du prix sur les trains", "L'accès à tous les transports sans limitation", "L'accès aux trains uniquement", "Des réductions pour les familles"], correct: 1 },
      { question: "À qui s'adresse l'abonnement junior ?", choices: ["Aux moins de 16 ans", "Aux moins de 20 ans", "Aux moins de 25 ans", "Aux moins de 30 ans"], correct: 2 },
      { question: "Qu'est-ce qui est cité comme exemple à suivre pour les transports suisses ?", choices: ["Le prix et la technologie", "La ponctualité et la propreté", "La vitesse et le confort", "La fréquence et la diversité"], correct: 1 },
    ],
  },

  // ──── AVANCÉ (B1/B2) ───────────────────────────────────────────────────────
  {
    id: "avance-integration", level: "avance",
    title: "L'intégration en Suisse",
    body: "L'intégration des personnes étrangères en Suisse est un processus complexe qui touche de nombreux aspects de la vie : la langue, le travail, l'école, les relations sociales et la compréhension des institutions. La Suisse accueille une proportion importante d'étrangers — environ 25 % de la population résidente — ce qui en fait l'un des pays les plus cosmopolites d'Europe.\n\nPour faciliter l'intégration, la Confédération et les cantons proposent diverses mesures. Les cours de langue sont souvent la première étape, car maîtriser l'une des langues nationales est essentiel pour s'insérer dans la vie professionnelle et sociale. Des programmes de conseil et d'accompagnement sont également disponibles pour aider les nouveaux arrivants à comprendre le fonctionnement de la société suisse : le système scolaire, les obligations administratives, la culture du travail et les valeurs civiques.\n\nL'intégration est cependant un processus à double sens : elle implique des efforts de la part des personnes qui arrivent, mais aussi de la société d'accueil. Les employeurs, les écoles, les communes et les associations jouent tous un rôle dans la création d'un environnement inclusif.",
    questions: [
      { question: "Quel pourcentage de la population suisse est composé d'étrangers ?", choices: ["Environ 10 %", "Environ 15 %", "Environ 25 %", "Environ 35 %"], correct: 2 },
      { question: "Quelle est décrite comme la première étape de l'intégration ?", choices: ["Trouver un emploi", "Apprendre une langue nationale", "Inscrire ses enfants à l'école", "Comprendre les institutions"], correct: 1 },
      { question: "Quels acteurs sont mentionnés comme jouant un rôle dans l'intégration ?", choices: ["Uniquement les écoles et communes", "Les employeurs, écoles, communes et associations", "Seulement la Confédération", "Uniquement les étrangers eux-mêmes"], correct: 1 },
      { question: "Comment le texte définit-il l'intégration ?", choices: ["Comme un processus unilatéral", "Comme une obligation légale", "Comme un processus à double sens", "Comme un processus uniquement culturel"], correct: 2 },
      { question: "Qu'est-ce qui est dit sur la Suisse en termes de cosmopolitisme ?", choices: ["Elle est parmi les moins cosmopolites", "Elle est l'un des pays les plus cosmopolites d'Europe", "Elle a fermé ses frontières", "Elle accueille peu d'étrangers"], correct: 1 },
      { question: "Quel aspect n'est pas mentionné comme touché par l'intégration ?", choices: ["Le travail", "La religion", "L'école", "Les relations sociales"], correct: 1 },
      { question: "Quel est le rôle des programmes de conseil mentionnés dans le texte ?", choices: ["Apprendre le français uniquement", "Aider à comprendre le fonctionnement de la société suisse", "Fournir un emploi aux nouveaux arrivants", "Gérer les demandes d'asile"], correct: 1 },
    ],
  },
  {
    id: "avance-politique", level: "avance",
    title: "Le système politique suisse",
    body: "La Suisse est une démocratie directe fédérale. Elle est composée de 26 cantons qui ont chacun leurs propres lois et leur propre gouvernement. Au niveau fédéral, le pouvoir législatif est exercé par le Parlement, qui comprend deux chambres : le Conseil national (200 membres) et le Conseil des États (46 membres). Le pouvoir exécutif est exercé par le Conseil fédéral, composé de sept membres élus par le Parlement pour une durée de quatre ans.\n\nCe qui rend la Suisse unique, c'est son système de démocratie directe. Les citoyens peuvent intervenir directement dans les décisions politiques grâce à deux instruments principaux. L'initiative populaire permet à 100 000 citoyens de proposer une modification de la Constitution. Le référendum, obligatoire ou facultatif, permet au peuple de voter sur des lois décidées par le Parlement.\n\nCe système signifie que les citoyens votent plusieurs fois par an sur des questions variées. Certains voient dans ce système un modèle de participation citoyenne ; d'autres estiment qu'il peut ralentir le processus législatif.",
    questions: [
      { question: "De combien de cantons la Suisse est-elle composée ?", choices: ["23", "24", "26", "28"], correct: 2 },
      { question: "Combien de membres compte le Conseil national ?", choices: ["46", "100", "200", "246"], correct: 2 },
      { question: "Pour quelle durée les membres du Conseil fédéral sont-ils élus ?", choices: ["Deux ans", "Quatre ans", "Six ans", "À vie"], correct: 1 },
      { question: "Combien de signatures faut-il pour une initiative populaire ?", choices: ["10 000", "50 000", "100 000", "200 000"], correct: 2 },
      { question: "Quelle est la différence entre initiative et référendum ?", choices: ["Il n'y en a pas", "L'initiative propose une modification constitutionnelle ; le référendum porte sur une loi du Parlement", "Le référendum propose une modification de la Constitution", "Seul le référendum est obligatoire"], correct: 1 },
      { question: "Quelle critique certains font-ils du système suisse ?", choices: ["Il donne trop de pouvoir aux cantons", "Il exclut les étrangers", "Il peut ralentir le processus législatif", "Il est trop coûteux"], correct: 2 },
      { question: "Qu'est-ce qui rend le système suisse unique selon le texte ?", choices: ["Son fédéralisme", "Sa neutralité", "Sa démocratie directe", "Sa richesse économique"], correct: 2 },
    ],
  },
  {
    id: "avance-environnement", level: "avance",
    title: "L'environnement et la durabilité en Suisse",
    body: "La Suisse se distingue par une politique environnementale ambitieuse et une sensibilité marquée des citoyens aux questions écologiques. Le pays a développé un système de tri des déchets particulièrement efficace : le verre, le papier, le métal, le plastique et les déchets organiques sont collectés séparément. Jeter des déchets dans les mauvaises poubelles ou dans la nature est considéré comme une infraction grave.\n\nLa Suisse s'est également fixé des objectifs climatiques stricts. Elle vise à atteindre la neutralité carbone d'ici 2050, en réduisant ses émissions de gaz à effet de serre dans les secteurs de l'énergie, des transports et du bâtiment. L'énergie hydraulique joue un rôle central dans la production d'électricité, représentant plus de 55 % de la production nationale.\n\nMalgré ces efforts, la Suisse fait face à des défis importants. La fonte des glaciers alpins, accélérée par le réchauffement climatique, menace les réserves d'eau douce et les écosystèmes de montagne. Les experts estiment que si la tendance actuelle continue, deux tiers des glaciers suisses pourraient avoir disparu d'ici la fin du siècle.",
    questions: [
      { question: "Comment est décrit le système de tri des déchets suisse ?", choices: ["Peu développé", "Particulièrement efficace", "Identique à tous les pays européens", "Encore en cours de développement"], correct: 1 },
      { question: "Quelle est l'attitude face aux mauvais tris ou aux déchets dans la nature en Suisse ?", choices: ["C'est toléré", "C'est une petite infraction", "C'est considéré comme une infraction grave", "C'est puni par une peine de prison"], correct: 2 },
      { question: "Quel objectif climatique la Suisse s'est-elle fixé ?", choices: ["Réduire les émissions de 50 % d'ici 2030", "Atteindre la neutralité carbone d'ici 2050", "Supprimer toutes les voitures d'ici 2040", "Passer à 100 % d'énergies renouvelables d'ici 2035"], correct: 1 },
      { question: "Quelle part de l'électricité suisse provient de l'énergie hydraulique ?", choices: ["Plus de 20 %", "Environ 40 %", "Plus de 55 %", "Environ 70 %"], correct: 2 },
      { question: "Quel est le principal défi environnemental mentionné pour la Suisse ?", choices: ["La pollution de l'air dans les villes", "La déforestation", "La fonte des glaciers alpins", "La pollution des rivières"], correct: 2 },
      { question: "Que pourrait-il arriver aux glaciers suisses d'ici la fin du siècle ?", choices: ["Ils pourraient doubler de taille", "Ils ne changeraient pas", "Un tiers pourrait disparaître", "Deux tiers pourraient avoir disparu"], correct: 3 },
      { question: "Quelle ressource est menacée par la fonte des glaciers selon le texte ?", choices: ["L'énergie hydraulique uniquement", "Les réserves d'eau douce et les écosystèmes de montagne", "Les zones agricoles de plaine", "Le tourisme uniquement"], correct: 1 },
    ],
  },
  {
    id: "avance-travail", level: "avance",
    title: "Le marché du travail suisse",
    body: "Le marché du travail suisse est réputé pour sa flexibilité et son dynamisme. La Suisse affiche l'un des taux de chômage les plus bas d'Europe, souvent inférieur à 3 %. Cette situation favorable s'explique par plusieurs facteurs : une économie diversifiée et innovante, une formation professionnelle duale très valorisée et un cadre légal du travail relativement souple.\n\nLa formation professionnelle duale, qui combine une formation pratique en entreprise et un enseignement théorique à l'école, est particulièrement prisée en Suisse. Environ deux tiers des jeunes Suisses choisissent cette voie après l'école obligatoire, ce qui garantit une insertion rapide dans le marché du travail. Les apprentis sont formés dans plus de 200 métiers différents.\n\nCependant, le marché du travail suisse n'est pas sans défis. La numérisation et l'automatisation transforment de nombreux secteurs, créant de nouveaux métiers tout en en rendant d'autres obsolètes. De plus, la concurrence internationale et les accords bilatéraux avec l'Union européenne influencent fortement les conditions d'emploi, notamment dans les secteurs exposés à la libre circulation des travailleurs.",
    questions: [
      { question: "Quel est approximativement le taux de chômage en Suisse selon le texte ?", choices: ["Inférieur à 1 %", "Souvent inférieur à 3 %", "Environ 5 %", "Entre 5 et 10 %"], correct: 1 },
      { question: "Qu'est-ce que la formation professionnelle duale ?", choices: ["Une formation uniquement scolaire", "Une formation qui combine pratique en entreprise et enseignement théorique", "Une formation universitaire sur deux ans", "Une formation à distance"], correct: 1 },
      { question: "Quelle proportion de jeunes Suisses choisit la formation professionnelle ?", choices: ["Un tiers", "La moitié", "Deux tiers", "Presque tous"], correct: 2 },
      { question: "Dans combien de métiers les apprentis peuvent-ils se former ?", choices: ["Plus de 50", "Plus de 100", "Plus de 200", "Plus de 500"], correct: 2 },
      { question: "Quels sont les défis du marché du travail mentionnés dans le texte ?", choices: ["Le vieillissement de la population uniquement", "La numérisation et la concurrence internationale", "Uniquement les accords avec l'UE", "Le manque de main-d'œuvre qualifiée"], correct: 1 },
      { question: "Quel effet a la numérisation sur le marché du travail selon le texte ?", choices: ["Elle supprime tous les emplois", "Elle crée de nouveaux métiers tout en en rendant d'autres obsolètes", "Elle n'a aucun impact", "Elle augmente uniquement le chômage"], correct: 1 },
      { question: "Qu'est-ce qui explique le faible taux de chômage en Suisse selon le texte ?", choices: ["Uniquement la formation professionnelle", "La taille réduite du pays", "Une économie diversifiée, la formation duale et un cadre légal souple", "Les accords avec l'Union européenne"], correct: 2 },
    ],
  },
];

export function getCETextsForLevel(level: "base" | "moyen" | "avance"): CEText[] {
  return CE_TEXTS.filter((t) => t.level === level);
}

export function randomCEText(level: "base" | "moyen" | "avance"): CEText {
  const pool = getCETextsForLevel(level);
  return pool[Math.floor(Math.random() * pool.length)]!;
}
