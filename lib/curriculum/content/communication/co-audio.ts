export type COLevel = "base" | "moyen" | "avance";
export type COAudioCategory = "message" | "annonce" | "instruction" | "conversation" | "objet" | "radio";

export type COAudioItem = {
  id: string;
  level: COLevel;
  category: COAudioCategory;
  activity: string;
  audio: string;
  transcript?: string;
};

export type COAudioGroup = {
  id: string;
  level: COLevel;
  category: COAudioCategory;
  activity: string;
  items: COAudioItem[];
};

function item(level: COLevel, category: COAudioCategory, activity: string, filename: string, transcript?: string): COAudioItem {
  return {
    id: `${level}-${category}-${activity}`,
    level,
    category,
    activity,
    audio: `/expression/co/${level}/public/${filename}`,
    transcript,
  };
}

function group(level: COLevel, category: COAudioCategory, activity: string, items: COAudioItem[]): COAudioGroup {
  return { id: `${level}-${category}-${activity}`, level, category, activity, items };
}

export const CO_AUDIO_GROUPS: COAudioGroup[] = [
  group("base", "message", "1", [
    item("base", "message", "1", "message-1.mp3", "Coucou, c'est Isabelle. Comment vas-tu ? Tu veux sortir vendredi soir ? Il y a un nouveau bar sympa au centre-ville, le Mambo. Il se trouve au 42, rue des Guerriers-Samouraïs. La décoration est très jolie et la musique est sympa. Pour aller au bar, ne prends pas le tramway, mais le bus. Rappelle-moi pour confirmer ! Bisous."),
  ]),
  group("base", "message", "2", [
    item("base", "message", "2", "message-2.mp3", "Coucou, c'est Laëtitia. J'ai rendez-vous avec Davy et Geneviève à midi et quart. On mange chez moi et après nous allons à la piscine pour nager et bronzer sur la pelouse. Si tu veux venir avec nous, appelle-moi. Si tu viens, n'oublie pas de prendre tes lunettes de soleil. Bisous !"),
  ]),
  group("base", "message", "3", [
    item("base", "message", "3", "message-3.mp3", "Salut, c'est Hugo. J'ai une bonne nouvelle. Florian est revenu d'Allemagne mardi. Il reste à Toulouse pendant quatre jours. Il veut nous voir ! Je te propose de venir dîner chez moi jeudi soir. Si tu es d'accord, est-ce que tu peux apporter des tomates pour faire une salade ? Appelle-moi ce soir ! Bises."),
  ]),
  group("base", "message", "4", [
    item("base", "message", "4", "message-4.mp3", "Bonjour, c'est Rose. Tu vas bien ? J'ai fait une réservation à la pizzeria Giovanni. Nous avons rendez-vous à midi et demi. Il y a des menus à 14 euros ou à 17 euros. Je te donne l'adresse : 15, rue des Peupliers. Nous serons trois personnes, j'ai invité ma sœur. Appelle-moi pour confirmer. À demain !"),
  ]),
  group("base", "message", "5", [
    item("base", "message", "5", "message-5.mp3", "Salut, c'est Alex. Je suis en retard. Je ne peux pas passer chez toi. Je te donne rendez-vous au nouveau cinéma. Prends le bus numéro 16, en direction du centre commercial des Fontaines. Descends à l'arrêt Nouveau Cinéma. Le cinéma est rue de la Gare, au numéro 3. Est-ce que tu peux acheter les tickets, s'il te plaît ? La place coûte 7 euros. À tout à l'heure. Bisous."),
  ]),
  group("base", "message", "6", [
    item("base", "message", "6", "message-6.mp3", "Salut, c'est Sylvain. Nous allons visiter Strasbourg la semaine prochaine. Tu veux venir ? Ça va être sympa. Nous allons prendre le train. Il part samedi matin, à 8 h 56. N'oublie pas ton appareil photo ! Rappelle-moi à mon nouveau numéro : 07 56 13 88 42. Ciao."),
  ]),
  group("base", "message", "7", [
    item("base", "message", "7", "message-7.mp3", "Salut, c'est Antony. J'ai deux invitations pour le cinéma. Tu veux venir ? C'est gratuit. Je finis le travail à 15 heures, mais je vais chez le dentiste à 16 heures. Alors, je te propose d'aller à la séance de 18 heures. Rappelle-moi quand tu as choisi le film. Après, je vais faire la réservation sur Internet. À plus tard."),
  ]),
  group("base", "message", "8", [
    item("base", "message", "8", "message-8.mp3", "Bonjour, c'est Mégane. Comment vas-tu ? Je t'appelle pour le 26 mars. Je suis libre à partir de 2 heures de l'après-midi. Je veux faire une activité culturelle. On peut aller au musée ou au cinéma l'après-midi. Tu es d'accord ? Si tu ne peux pas, nous pouvons dîner au restaurant vers 7 heures. Rappelle-moi aujourd'hui. Bisous !"),
  ]),
  group("base", "message", "9", [
    item("base", "message", "9", "message-9.mp3", "Salut, c'est Adil. Je suis rentré de voyage le lundi 5. J'ai adoré la Suisse. C'est un beau pays. J'ai fait du ski tous les jours. La nourriture est délicieuse. J'ai mangé beaucoup de chocolat et de fondue au fromage, évidemment ! Mais j'ai détesté les röstis ! On se voit ce week-end ? J'ai un cadeau pour toi : c'est une montre ! À bientôt."),
  ]),
  group("base", "message", "10", [
    item("base", "message", "10", "message-10.mp3", "Bonsoir, c'est Cristina. Je vais à une exposition de peintures avec Armelle, jeudi soir. Est-ce que tu veux venir avec nous ? On peut se retrouver devant l'espace Matisse à 6 heures. Pour y aller, tu peux prendre le bus 112. L'entrée coûte 7,50 euros. Rappelle-moi au 06 79 14 78 49. Bises."),
  ]),
  group("base", "message", "11", [
    item("base", "message", "11", "message-11.mp3", "Bonjour, ici le garage Bolide. Votre voiture est prête. Vous pouvez venir la chercher aujourd'hui. Le garage ouvre de huit heures à midi, puis d'une heure et demie à sept heures et demie. Les réparations sont de 223 euros. Nous vous demandons de payer par carte bancaire. Merci. Au revoir."),
  ]),
  group("base", "message", "12", [
    item("base", "message", "12", "message-12.mp3", "Bonjour, ici monsieur Dujardin. Je vous confirme l'heure de la réunion de demain matin. Elle est à dix heures et demie. Le directeur commercial et la comptable seront présents. S'il y a un problème, vous pouvez m'appeler au 04 78 96 12 14. Merci et bonne journée."),
  ]),
  group("base", "message", "13", [
    item("base", "message", "13", "message-13.mp3", "Bonjour, ici madame Lara, de l'agence immobilière. Je vous appelle pour votre recherche de logement. Nous avons un loft à vous proposer. Il est situé près de la bibliothèque municipale. Si vous voulez le visiter, rappelez-moi avant mercredi, 18 heures, au 03 88 17 40 15. Merci, au revoir !"),
  ]),
  group("base", "message", "14", [
    item("base", "message", "14", "message-14.mp3", "Bonjour, ici le club de sports Formule +. Je vous appelle pour vous proposer un abonnement à 40 euros par mois. Avec ce tarif, vous pouvez utiliser la salle de fitness et la piscine, du lundi au samedi. Si cette offre spéciale vous intéresse, venez me voir au club vendredi ou samedi. Nous fermons à 21 heures tous les soirs de la semaine et à 19 heures le week-end. Merci. Au revoir."),
  ]),
  group("base", "message", "15", [
    item("base", "message", "15", "message-15.mp3", "Bonjour, ici l'agence de voyages Lacrosse. Je vous confirme votre réservation. Vous logez à l'hôtel Gamma, à Bruxelles, du jeudi 25 au dimanche 28. Le petit-déjeuner et Internet sont inclus. Je vous conseille d'aller à l'hôtel en taxi. Si vous avez des questions, appelez-moi au 01 57 32 32 33. Bonne journée."),
  ]),
  group("base", "message", "16", [
    item("base", "message", "16", "message-16.mp3", "Bonjour, ici le magasin Méga J. Vous avez commandé un jeu vidéo la semaine dernière. Il est arrivé dans notre magasin. Vous pouvez venir le chercher à partir de vendredi au 23, rue des Clochottes. Le magasin est ouvert de 9 h à 19 h non-stop. N'oubliez pas votre pièce d'identité. Merci et bonne journée."),
  ]),
  group("base", "annonce", "1", [
    item("base", "annonce", "1", "annonce-1.mp3", "Transcription annonce 1."),
  ]),
  group("base", "annonce", "2", [
    item("base", "annonce", "2", "annonce-2.mp3", "Transcription annonce 2."),
  ]),
  group("base", "annonce", "3", [
    item("base", "annonce", "3", "annonce-3.mp3", "Transcription annonce 3."),
  ]),
  group("base", "annonce", "4", [
    item("base", "annonce", "4", "annonce-4.mp3", "Transcription annonce 4."),
  ]),
  group("base", "annonce", "5", [
    item("base", "annonce", "5", "annonce-5.mp3", "Transcription annonce 5."),
  ]),
  group("base", "annonce", "6", [
    item("base", "annonce", "6", "annonce-6.mp3", "Transcription annonce 6."),
  ]),
  group("base", "annonce", "7", [
    item("base", "annonce", "7", "annonce-7.mp3", "Transcription annonce 7."),
  ]),
  group("base", "annonce", "8", [
    item("base", "annonce", "8", "annonce-8.mp3", "Transcription annonce 8."),
  ]),
  group("base", "annonce", "9", [
    item("base", "annonce", "9", "annonce-9.mp3", "Transcription annonce 9."),
  ]),
  group("base", "annonce", "10", [
    item("base", "annonce", "10", "annonce-10.mp3", "Transcription annonce 10."),
  ]),
  group("base", "annonce", "11", [
    item("base", "annonce", "11", "annonce-11.mp3", "Transcription annonce 11."),
  ]),
  group("base", "annonce", "12", [
    item("base", "annonce", "12", "annonce-12.mp3", "Transcription annonce 12."),
  ]),
  group("base", "annonce", "13", [
    item("base", "annonce", "13", "annonce-13.mp3", "Transcription annonce 13."),
  ]),
  group("base", "annonce", "14", [
    item("base", "annonce", "14", "annonce-14.mp3", "Transcription annonce 14."),
  ]),
  group("base", "annonce", "16", [
    item("base", "annonce", "16", "annonce-16.mp3", "Transcription annonce 16."),
  ]),
  group("base", "annonce", "17", [
    item("base", "annonce", "17", "annonce-17.mp3", "Transcription annonce 17."),
  ]),
  group("base", "instruction", "1", [
    item("base", "instruction", "1", "instruction-1.mp3", "Transcription instruction 1."),
  ]),
  group("base", "instruction", "2", [
    item("base", "instruction", "2", "instruction-2.mp3", "Transcription instruction 2."),
  ]),
  group("base", "instruction", "3", [
    item("base", "instruction", "3", "instruction-3.mp3", "Transcription instruction 3."),
  ]),
  group("base", "instruction", "4", [
    item("base", "instruction", "4", "instruction-4.mp3", "Transcription instruction 4."),
  ]),
  group("base", "instruction", "5", [
    item("base", "instruction", "5", "instruction-5.mp3", "Transcription instruction 5."),
  ]),
  group("base", "conversation", "1", [
    item("base", "conversation", "1", "conversation-1.mp3", "Transcription conversation 1."),
  ]),
  group("base", "conversation", "2", [
    item("base", "conversation", "2", "conversation-2.mp3", "Transcription conversation 2."),
  ]),
  group("base", "conversation", "3", [
    item("base", "conversation", "3", "conversation-3.mp3", "Transcription conversation 3."),
  ]),
  group("base", "conversation", "4", [
    item("base", "conversation", "4", "conversation-4.mp3", "Transcription conversation 4."),
  ]),
  group("base", "conversation", "5", [
    item("base", "conversation", "5", "conversation-5.mp3", "Transcription conversation 5."),
  ]),
  group("base", "conversation", "6", [
    item("base", "conversation", "6", "conversation-6.mp3", "Transcription conversation 6."),
  ]),
  group("base", "conversation", "7", [
    item("base", "conversation", "7", "conversation-7.mp3", "Transcription conversation 7."),
  ]),
  group("base", "conversation", "8", [
    item("base", "conversation", "8", "conversation-8.mp3", "Transcription conversation 8."),
  ]),
  group("base", "objet", "1", [
    item("base", "objet", "1", "objet-1.mp3", "Transcription objet 1."),
  ]),
  group("base", "objet", "2", [
    item("base", "objet", "2", "objet-2.mp3", "Transcription objet 2."),
  ]),
  group("base", "objet", "3", [
    item("base", "objet", "3", "objet-3.mp3", "Transcription objet 3."),
  ]),
  group("base", "objet", "4", [
    item("base", "objet", "4", "objet-4.mp3", "Transcription objet 4."),
  ]),
  group("base", "objet", "5", [
    item("base", "objet", "5", "objet-5.mp3", "Transcription objet 5."),
  ]),
  group("base", "objet", "6", [
    item("base", "objet", "6", "objet-6.mp3", "Transcription objet 6."),
  ]),
  group("base", "objet", "7", [
    item("base", "objet", "7", "objet-7.mp3", "Transcription objet 7."),
  ]),
  group("base", "objet", "8", [
    item("base", "objet", "8", "objet-8.mp3", "Transcription objet 8."),
  ]),
  group("base", "objet", "9", [
    item("base", "objet", "9", "objet-9.mp3", "Transcription objet 9."),
  ]),
  group("base", "objet", "10", [
    item("base", "objet", "10", "objet-10.mp3", "Transcription objet 10."),
  ]),
  group("base", "objet", "11", [
    item("base", "objet", "11", "objet-11.mp3", "Transcription objet 11."),
  ]),
  group("base", "objet", "12", [
    item("base", "objet", "12", "objet-12.mp3", "Transcription objet 12."),
  ]),
  group("moyen", "annonce", "1", [
    item("moyen", "annonce", "1.1", "annonce-1.1.mp3", "Message aux voyageurs ! Attention, la ligne 1 du métro sera fermée tous les soirs, dès lundi prochain, à partir de 22h30 pour réparer les voies."),
    item("moyen", "annonce", "1.2", "annonce-1.2.mp3", "Chers clients, profitez d’une remise exceptionnelle de 30% aujourd’hui sur nos bijoux ! Ne laissez pas passer cette affaire !"),
    item("moyen", "annonce", "1.3", "annonce-1.3.mp3", "Chers spectateurs, nous vous informons que le film « La roue tourne », gagnant du César de la meilleure comédie de l’année, commencera à 18 h 30. Veuillez nous excuser."),
    item("moyen", "annonce", "1.4", "annonce-1.4.mp3", "Votre attention s’il vous plaît, ceci est notre dernier appel pour les passagers du vol DY7040 à destination de Montréal. Merci de vous présenter devant la porte d’embarquement."),
    item("moyen", "annonce", "1.5", "annonce-1.5.mp3", "Votre attention s’il vous plaît, le petit Grégoire qui s’est perdu au rayon fruits et légumes attend ses parents à l’entrée du magasin."),
    item("moyen", "annonce", "1.6", "annonce-1.6.mp3", "Chers passagers, attention, un portefeuille a été retrouvé dans les toilettes situées à l’avant du train. Veuillez venir le récupérer auprès d’un de nos agents."),
  ]),
  group("moyen", "annonce", "2", [
    item("moyen", "annonce", "2.1", "annonce-2.1.mp3", "Bienvenue au Parc Astérix. Vous allez bientôt entrer dans l’attraction du train rapide. Il y a quelques règles à respecter pour votre sécurité. Il faut mesurer au moins 1m20 pour pouvoir monter dans le manège."),
    item("moyen", "annonce", "2.2", "annonce-2.2.mp3", "Chers spectateurs, nous vous rappelons qu’il est interdit de prendre des photos durant le concert. Merci pour votre compréhension. Profitez bien de votre soirée !"),
    item("moyen", "annonce", "2.3", "annonce-2.3.mp3", "Bonjour mesdames et messieurs, je vous rappelle que la bibliothèque ferme exceptionnellement ses portes à 15h30. Il vous reste 15 minutes avant la fermeture."),
    item("moyen", "annonce", "2.4", "annonce-2.4.mp3", "Chers clients, profitez de notre offre exceptionnelle sur tout l’électroménager aujourd’hui ! 50% sur les téléviseurs, réfrigérateurs, fours et machines à laver. N’attendez plus !"),
    item("moyen", "annonce", "2.5", "annonce-2.5.mp3", "La bibliothèque ferme dans 5 minutes. Nous vous rappelons que demain jeudi 18, en raison d’une conférence, la bibliothèque fermera exceptionnellement à 21h au lieu de 19h."),
    item("moyen", "annonce", "2.6", "annonce-2.6.mp3", "Votre cinéma préféré a décidé de vous faire plaisir. Aujourd’hui, pour une place achetée, vous avez 50% de réduction sur les bonbons."),
  ]),
  group("moyen", "annonce", "3", [
    item("moyen", "annonce", "3.1", "annonce-3.1.mp3", "Les passagers du vol Air France numéro 4568 à destination de Berlin sont priés d’aller à la porte d’embarquement numéro 45."),
    item("moyen", "annonce", "3.2", "annonce-3.2.mp3", "Votre attention, s’il vous plaît. La ligne 9 du métro sera fermée exceptionnellement le 22 novembre à la station République pour cause de travaux entre les stations Strasbourg-Saint-Denis et Saint Ambroise."),
    item("moyen", "annonce", "3.3", "annonce-3.3.mp3", "Chers clients, suite à un problème technique, nous vous rappelons que la caisse prioritaire pour les personnes handicapées est fermée. Veuillez vous rediriger vers les caisses rapides ou les caisses automatiques."),
    item("moyen", "annonce", "3.4", "annonce-3.4.mp3", "Chers étudiants, pour des raisons de sécurité, vous devez présenter votre carte d’étudiant à l’entrée de l’université. Les cartes nationales d’identité ou les cartes de bibliothèque ne sont pas acceptées."),
    item("moyen", "annonce", "3.5", "annonce-3.5.mp3", "Chers voyageurs, pour votre sécurité, il est strictement interdit d’ouvrir les portes du train. Merci de passer vos appels uniquement dans les couloirs. Des films sont à votre disposition."),
    item("moyen", "annonce", "3.6", "annonce-3.6.mp3", "Chers clients, aujourd’hui, jusqu’à 19h30, pour tout achat d’un livre ou de deux CDs, votre magasin préféré vous fera profiter d’une place de cinéma."),
  ]),
  group("moyen", "annonce", "4", [
    item("moyen", "annonce", "4.1", "annonce-4.1.mp3", "Mesdames et messieurs, le cirque Pindet vous invite à nous retrouver pour un spectacle extraordinaire d’1 h 30. Venez voir des animaux, des clowns, des acrobates. Rendez-vous mardi 14 à 18 h."),
    item("moyen", "annonce", "4.2", "annonce-4.2.mp3", "Bonjour, nous vous rappelons que, le week-end, le magasin ferme ses portes à 12h15, au lieu de 20h30 en semaine. Bonne journée."),
    item("moyen", "annonce", "4.3", "annonce-4.3.mp3", "Chers voyageurs, en raison d’un incident technique, le train n°55 à destination du Luxembourg partira sur la voie 12 au lieu de la voie 15. Veuillez nous excuser pour la gêne occasionnée."),
    item("moyen", "annonce", "4.4", "annonce-4.4.mp3", "Chers clients, aujourd’hui dans votre magasin Autoprix, ne manquez pas les promotions exceptionnelles sur les télévisions. Jusqu’à 40% de réduction ! Demain, nous aurons d’autres surprises sur les téléphones et les ordinateurs."),
    item("moyen", "annonce", "4.5", "annonce-4.5.mp3", "Chers clients, vous retrouverez tous les produits alimentaires au premier étage du magasin. Au deuxième étage, les articles de la maison et de la mode. Au troisième, le multimédia. Bonne visite."),
    item("moyen", "annonce", "4.6", "annonce-4.6.mp3", "Chers étudiants, nous vous rappelons que l’établissement sera fermé du 23 décembre au 8 janvier inclus. Il réouvrira le 9 janvier à partir de 8h30. Bonnes vacances à tous."),
  ]),
  group("moyen", "annonce", "5", [
    item("moyen", "annonce", "5.1", "annonce-5.1.mp3", "Chers clients, ne manquez pas aujourd’hui notre promotion sur nos derniers livres de recettes ! Il n’y en aura pas pour tout le monde, alors dépêchez-vous !"),
    item("moyen", "annonce", "5.2", "annonce-5.2.mp3", "Le propriétaire de la moto immatriculée AG56KL est prié de bien vouloir déplacer son véhicule tout de suite et le garer près des vélos. Merci pour votre compréhension."),
    item("moyen", "annonce", "5.3", "annonce-5.3.mp3", "Le centre aquatique vous informe que les tarifs pour les adultes ont augmenté de 2 €, mais les entrées sont gratuites pour les enfants. Nous offrons aussi une remise de 25% pour les adolescents."),
    item("moyen", "annonce", "5.4", "annonce-5.4.mp3", "Nous vous rappelons qu’il est interdit de courir ou de consommer de la nourriture autour du grand bassin sous peine d’exclusion. Merci de votre compréhension."),
    item("moyen", "annonce", "5.5", "annonce-5.5.mp3", "Nous rappelons à notre aimable clientèle qu’en raison de travaux, la poste sera fermée pour une semaine, à partir de demain. Elle rouvrira au début du mois. Merci pour votre compréhension."),
    item("moyen", "annonce", "5.6", "annonce-5.6.mp3", "Mesdames, messieurs, votre attention s’il vous plaît ! Le personnel du magasin a trouvé des clés. Merci à leur propriétaire de venir les récupérer à l’accueil avant la fermeture."),
  ]),
  group("moyen", "annonce", "6", [
    item("moyen", "annonce", "6.1", "annonce-6.1.mp3", "Mesdames et messieurs, le bus 160 en direction de Mairie de Bruges ne marquera pas l’arrêt aux stations Parc du Château et Piscine municipale. Prochain arrêt : Poste central."),
    item("moyen", "annonce", "6.2", "annonce-6.2.mp3", "Chères clientes, à l’occasion de la journée de la femme, pour deux vêtements achetés, bénéficiez d’une remise de 70% sur nos bijoux. Allez vite découvrir nos nouveaux sacs à main."),
    item("moyen", "annonce", "6.3", "annonce-6.3.mp3", "À l’occasion du salon du tourisme, venez découvrir nos derniers séjours au soleil ! Balades en bord de mer, baignade, palmiers... Découvrez nos destinations 100% relaxantes !"),
    item("moyen", "annonce", "6.4", "annonce-6.4.mp3", "Chers clients, après une offre sur les sandwichs la semaine dernière, nous vous proposons aujourd’hui une offre spéciale petit-déjeuner ! Pour l’achat de trois viennoiseries, un grand café vous est offert !"),
    item("moyen", "annonce", "6.5", "annonce-6.5.mp3", "Découvrez notre dernier service de laverie ! On s’occupe de votre linge : on nettoie, on repasse et on plie ! Passez commande en ligne sur notre site internet."),
    item("moyen", "annonce", "6.6", "annonce-6.6.mp3", "Chers visiteurs, ne manquez pas à 14h aujourd’hui le spectacle incroyable des félins ! Venez donner à manger aux girafes et aux éléphants et découvrir plein d’espèces animales incroyables !"),
  ]),
  group("moyen", "annonce", "7", [
    item("moyen", "annonce", "7.1", "annonce-7.1.mp3", "Bienvenue à bord du train 6749 au départ de Paris à destination de la Suisse. Ce train desservira les gares de Reims, Strasbourg, et Zurich, sa gare d’arrivée. Bon voyage !"),
    item("moyen", "annonce", "7.2", "annonce-7.2.mp3", "Nous rappelons à nos visiteurs qu’il est interdit de consommer de la nourriture à l’intérieur du musée. Il est également interdit de courir. Les photos sont autorisées."),
    item("moyen", "annonce", "7.3", "annonce-7.3.mp3", "Chers clients, nous vous rappelons qu’il est maintenant possible de vous faire livrer vos courses pour moins de 10 €. Pour tout panier supérieur à 150 €, bénéficiez de la livraison gratuite."),
    item("moyen", "annonce", "7.4", "annonce-7.4.mp3", "Aujourd’hui ne manquez pas nos offres incroyables ! 10% de réduction sur nos livres, 15% de réduction sur l’univers de la musique et 20% de réduction sur tous les articles multimédia."),
    item("moyen", "annonce", "7.5", "annonce-7.5.mp3", "À l’occasion du printemps du cinéma, les places sont au prix de 5,50 € pour les moins de 18 ans, et 7,50 € pour les adultes, au lieu de 10,50 €."),
    item("moyen", "annonce", "7.6", "annonce-7.6.mp3", "Chers clients, votre magasin vous informe qu’à partir d’aujourd’hui, un nouveau moyen de paiement est possible. Vous pouvez maintenant régler vos achats avec votre téléphone portable."),
  ]),
  group("moyen", "annonce", "8", [
    item("moyen", "annonce", "8", "annonce-8.mp3", "Madame, monsieur, bienvenue dans le train numéro 1608 à destination de Paris. Le train partira avec 7 minutes de retard. Il s’arrêtera à la gare d’Orléans à 12 h 02. Il arrivera à Paris à 13 h 12. Si vous utilisez votre téléphone portable, nous vous demandons d’aller passer vos appels dans le couloir. La cafétéria se trouve dans le wagon numéro 9. Bon voyage."),
  ]),
  group("moyen", "annonce", "9", [
    item("moyen", "annonce", "9", "annonce-9.mp3", "Madame, monsieur, vous êtes arrivé(e) à la gare de Montpellier. Avant de descendre du train, vérifiez que vous n’avez rien oublié. Nous vous conseillons de regarder sous votre siège. Si vous allez à Perpignan, vous devez prendre le train numéro 468. Il partira à 12 h 02. Il se trouve au quai numéro 7. Si vous prenez un autre train, vous pouvez regarder les horaires sur le panneau d’affichage de la gare."),
  ]),
  group("moyen", "annonce", "10", [
    item("moyen", "annonce", "10", "annonce-10.mp3", "Les passagers du vol Air France numéro 4568, à destination de Berlin, sont priés d’aller à la porte d’embarquement numéro 45. Veuillez sortir votre billet et votre pièce d’identité pour les présenter aux hôtesses. Vous pouvez utiliser la file d’attente prioritaire si vous voyagez en classe affaires ou si vous êtes accompagné d’un enfant de moins de 3 ans. Nous vous rappelons qu’un seul bagage à main par passager est autorisé. Air France vous souhaite un agréable vol."),
  ]),
  group("moyen", "annonce", "11", [
    item("moyen", "annonce", "11", "annonce-11.mp3", "La bibliothèque ferme dans 5 minutes. Nous vous rappelons que demain, jeudi 18, en raison d’une conférence, la bibliothèque fermera exceptionnellement à 21 h 00 au lieu de 19 h 00. Jacques Hadji présentera son nouveau roman, Les vagues de l’océan. Ensuite, il dédicacera son livre dans la salle de conférences. Il sera possible d’acheter un exemplaire du livre pour un montant de 14 euros. Vous pouvez réserver une place en vous présentant à l’accueil de la bibliothèque. C’est gratuit."),
  ]),
  group("moyen", "annonce", "12", [
    item("moyen", "annonce", "12", "annonce-12.mp3", "Bonjour. Dans votre supermarché Autoprix, ne manquez pas les promotions sur les produits de beauté : pour un gel douche ou un savon acheté, le deuxième est offert jusqu’en avril ! Vous pouvez aussi gagner des parfums : venez jouer à la loterie dans l’allée centrale du magasin ! Et à partir du 1er mai, venez profiter de promotions exceptionnelles sur les télévisions ! Jusqu’à 40 % de réduction ! Avec Autoprix, les prix sont mini !"),
  ]),
  group("moyen", "annonce", "13", [
    item("moyen", "annonce", "13", "annonce-13.mp3", "Bienvenue au parc Astérix ! Vous allez bientôt entrer dans l’attraction du train rapide. Il y a quelques règles à respecter pour votre sécurité. Il faut mesurer au moins 1 mètre 20 pour pouvoir monter dans le manège. Rangez vos affaires : lunettes, bijoux, appareils photo... dans votre sac. Et gardez bien votre tête contre le siège dans le train. N’oubliez pas de sourire pour la photo ! Vous pouvez acheter cette photo sur le stand à la sortie du train rapide. Amusez-vous bien !"),
  ]),
  group("moyen", "radio", "14", [
    item("moyen", "radio", "14.1", "radio-14.1.mp3", "Bienvenue sur Radio France. Nous commençons avec la météo. Aujourd’hui un temps pluvieux sur l’ensemble de la France, sauf au sud où il y aura quelques rayons de soleil. Il fera très beau la semaine prochaine, avec des températures d’été."),
    item("moyen", "radio", "14.2", "radio-14.2.mp3", "Dernières nouvelles pour les amoureux de la série à succès « La Casa de Papel » qui a passionné des milliers de spectateurs. Les acteurs feront des photos avec le public de 14 h à 16 h à la Cité du cinéma à Saint-Denis."),
    item("moyen", "radio", "14.3", "radio-14.3.mp3", "Bonjour à tous. On nous annonce ce matin un problème de circulation dans le métro parisien. Le personnel organise une grève aujourd’hui et demain. Seuls 2 trains sur 4 sont annoncés sur l’ensemble des lignes. Bon courage !"),
  ]),
  group("moyen", "radio", "15", [
    item("moyen", "radio", "15.1", "radio-15.1.mp3", "Radio Orléans, il est 7 heures. Aujourd’hui il fait -7°. Attention, beaucoup de neige sur les routes. Ne prenez pas votre voiture aujourd’hui, les routes sont très dangereuses. Dans le centre d’Orléans, aucun bus ne circulera."),
    item("moyen", "radio", "15.2", "radio-15.2.mp3", "Bienvenue sur Radio ciné. C’est bientôt le printemps du cinéma, événement très attendu. Pendant 3 jours, du 17 au 19 avril, tous les films sont au tarif exceptionnel de 3,50 € dans tous les cinémas de France."),
    item("moyen", "radio", "15.3", "radio-15.3.mp3", "Bienvenue sur RockFM. Ce soir a lieu le dernier concert du guitariste Paul Durand à l’Olympia. Nous allons vous faire gagner des places. Envoyez un SMS au 6505 pour tenter de remporter deux places pour le concert."),
  ]),
  group("moyen", "radio", "16", [
    item("moyen", "radio", "16.1", "radio-16.1.mp3", "France Reportage s’intéresse aujourd’hui aux études des jeunes en apprentissage. Cette formation permet d’étudier et de travailler. L’hôtellerie-restauration utilise beaucoup cette formule. De plus en plus d’étudiants choisissent cette façon d’apprendre, car elle apporte des connaissances théoriques, mais aussi de l’expérience pratique."),
    item("moyen", "radio", "16.2", "radio-16.2.mp3", "Et maintenant, quelques publicités. Petits-enfants et parents, faites plaisir à vos proches aujourd’hui pour la journée des grands-parents. Profitez d’une remise exceptionnelle de 25 % sur tous nos bouquets de fleurs avec le code FLEURSENFÊTE sur notre site fleursenligne.fr."),
    item("moyen", "radio", "16.3", "radio-16.3.mp3", "Bienvenue dans l’émission « C’est de l’art ». Aujourd’hui, nous parlerons de l’exposition sur Stéphanie Roncin, la célèbre peintre. Elle a peint des portraits de femmes au XXe siècle. Admirez les 30 tableaux de cette exposition à partir du 12 février au musée Monet à Paris."),
  ]),
  group("moyen", "radio", "17", [
    item("moyen", "radio", "17.1", "radio-17.1.mp3", "Bonjour. À l’approche de l’automne, restez en forme en faisant une promenade de 20 minutes. L’effort physique est très bon pour le moral. Pour les plus sportifs, le vélo et la natation vous sont conseillés ! N’oubliez pas de boire !"),
    item("moyen", "radio", "17.2", "radio-17.2.mp3", "Radio France, il est 8h. La grève des transports continue dans toute la France. Au niveau national, 1 train sur 5 circulera. Pour connaître le programme des trains, consultez le site internet de la SNCF, rubrique “grève nationale”."),
    item("moyen", "radio", "17.3", "radio-17.3.mp3", "Aujourd’hui sur SportRadio, les derniers résultats sportifs. Côté foot, Paris gagne contre Monaco 3 à 1. Au basket-ball, l’équipe de Nanterre a perdu d’1 point contre Limoges. Et pour terminer, la saison de courses de chevaux commence demain à 13h !"),
  ]),
  group("moyen", "radio", "18", [
    item("moyen", "radio", "18.1", "radio-18.1.mp3", "Bonjour. Une nouvelle fromagerie ouvrira dans la petite ville de Sainte Ernestine dans 5 semaines. La boutique vendra uniquement des produits frais de la région, et vous accueillera tous les jours de 9h à 18h30, sauf le week-end."),
    item("moyen", "radio", "18.2", "radio-18.2.mp3", "Bonjour aux infos aujourd’hui : une nouvelle semaine de grève à prévoir chez les hôtesses de l’air. Elles réclament toujours auprès du gouvernement un meilleur salaire et des jours de congés supplémentaires. Le ministère des transports n’a pas encore répondu."),
    item("moyen", "radio", "18.3", "radio-18.3.mp3", "Ne manquez pas ce week-end le plus grand festival de gastronomie au monde qui aura lieu à Paris du 20 au 25 juillet. Vous pouvez dès à présent réserver vos billets en ligne sur www.festivalculinaire.fr."),
  ]),
  group("moyen", "radio", "19", [
    item("moyen", "radio", "19.1", "radio-19.1.mp3", "Bienvenue sur FunFM, la radio des 12-18 ans. Aujourd’hui, nous recevons Charlie Chaillot qui vient nous présenter son dernier ouvrage qui s’appelle “Toute ma vie” et qui nous raconte ses différents voyages à travers l’Europe."),
    item("moyen", "radio", "19.2", "radio-19.2.mp3", "À la Une aujourd’hui : la santé. Une nouvelle carte pour les frais médicaux est maintenant disponible. Tous les Français vont la recevoir bientôt. Autre nouvelle, la hausse des tarifs des consultations de 12 %, passant de 25 € à 28€."),
    item("moyen", "radio", "19.3", "radio-19.3.mp3", "Tout de suite, les prévisions météo. Aujourd’hui, le temps sera magnifique, avec un grand soleil et des températures douces. Mais demain, la pluie arrivera, accompagnée de vent très fort. Il faudra sortir son parapluie !"),
  ]),
  group("moyen", "radio", "20", [
    item("moyen", "radio", "20.1", "radio-20.1.mp3", "Vous êtes sur RadioMétéo, bonjour. Attention, une vague de chaleur va s’abattre sur la France la semaine prochaine, avec des records de température. Il fera jusqu’à 42° dans la moitié nord, 38° dans le sud. N’oubliez pas de boire beaucoup d’eau !"),
    item("moyen", "radio", "20.2", "radio-20.2.mp3", "Avec l’aide de RadioVillages, la mairie organise ce week-end une exposition de photographies de notre belle région : paysages, architecture, commerces locaux... 27 photographes seront présents à la rencontre qui aura lieu dans la grande salle des fêtes. Venez nombreux !"),
    item("moyen", "radio", "20.3", "radio-20.3.mp3", "RadioTraffic, il est 7h45. Attention chers auditeurs, on nous signale un problème sur l’autoroute A10 en direction d’Orléans à cause d’un mouvement social des transporteurs routiers. Pour ne pas attendre, prenez la route nationale 19. Bon courage !"),
  ]),
  group("moyen", "radio", "21", [
    item("moyen", "radio", "21", "radio-21.mp3", "Vous avez envie de partir en vacances quelques jours ? Allez en Belgique ! Eh oui, le petit royaume reçoit beaucoup de monde toute l’année. Ils viennent surtout d’Europe, par exemple la France ou l’Allemagne. Nous avons interrogé quelques touristes au centre de Bruxelles. Tout le monde pense que la population est sympathique. À Bruxelles, la capitale du royaume, vous pouvez aussi visiter beaucoup de musées intéressants. Les amateurs de BD peuvent aller dans un musée un peu particulier : le Centre Belge de la Bande Dessinée. N’oublions pas la gastronomie ! Les 7 millions de touristes qui viennent chaque année veulent aussi manger les fameuses frites belges ! Pour les bonnes adresses, utilisez Internet ! Vous trouverez beaucoup d’informations."),
  ]),
  group("moyen", "radio", "22", [
    item("moyen", "radio", "22", "radio-22.mp3", "Radio France, il est 8 h. La grève des transports continue dans toute la France. Au niveau national, 1 train sur 5 circulera. Pour connaître les horaires des trains, consultez le site internet de la SNCF, www.sncf.com, rubrique Grève nationale. À Paris, le métro circule toutes les 30 minutes. Certaines lignes seront fermées toute la journée. Dans le reste du pays, les transports en commun sont annulés dans certaines villes. Par exemple, pas de bus à Perpignan. Dans d’autres villes, comme Tours ou Nantes, le tramway sera l’unique moyen de transport ouvert. Il y aura un tramway toutes les heures. Les négociations entre le gouvernement et les syndicats de transports sont difficiles ; on pense que la grève va durer encore 5 jours."),
  ]),
  group("moyen", "radio", "23", [
    item("moyen", "radio", "23", "radio-23.mp3", "Bonjour à tous et bienvenue dans notre émission consacrée aux vacances. Aujourd’hui, nous allons vous parler du site internet « Voyages + », qui propose des prix très intéressants pour voyager autour de la mer ! Jusqu’au 20 mai, profitez de promotions exceptionnelles sur les hôtels en France ! Par exemple, vous avez 40 % de réduction si vous passez 3 jours dans l’ « hôtel des 4 stars » à Nice ! Vous pouvez aussi gagner un voyage d’une semaine sur l’île de la Réunion. Pour participer, il faut appeler le 02 46 59 80 80 avant le 15 mars. Bonnes vacances à tous !"),
  ]),
  group("moyen", "radio", "24", [
    item("moyen", "radio", "24", "radio-24.mp3", "— Bonjour et bienvenue sur « Radio Muzik ». Nous recevons aujourd’hui le célèbre chanteur guyanais Chris Lombrete. Bonjour Chris. — Bonjour. — Chris, vous avez fait des concerts en Guyane, en Martinique... Racontez-nous votre tournée. — Eh bien, oui, j’ai fait 12 concerts. J’ai pu voyager pendant 2 mois dans différents départements de la France, différentes villes. Pointe-à-Pitre, Fort-de-France... C’était vraiment super. — Et quel est votre meilleur souvenir ? — Mon meilleur souvenir de concert ? Euh, je crois que c’était en Guyane, dans ma ville, à Cayenne. Il y avait environ 300 personnes. Ils connaissaient les chansons par cœur et ils ont tous chanté avec moi. C’était magique. — Merci Chris. Et maintenant, vous préparez un nouvel album, c’est ça ? — Oui. Le CD sera prêt dans 3-4 mois."),
  ]),
  group("moyen", "radio", "25", [
    item("moyen", "radio", "25", "radio-25.mp3", "Le film « Astérix et Obélix : Au service de sa Majesté » sort le 17 octobre. Les deux héros sont de retour. C’est la quatrième adaptation au cinéma des aventures d’Astérix et Obélix. Dans ce film, Astérix et Obélix vont aider un village de Britannia, qui correspond au Royaume-Uni aujourd’hui. Ils vont combattre les Romains à l’aide de la potion magique. Ce film est divertissant, plein d’humour et d’action. Gérard Depardieu est très drôle dans le rôle d’Obélix. Vous pouvez participer à notre concours pour gagner deux places pour voir « Astérix et Obélix » au cinéma. Pour gagner, vous devez nous dire la date de sortie de la première bande dessinée d’Astérix. Bonne chance !"),
  ]),
  group("moyen", "message", "26", [
    item("moyen", "message", "26", "message-26.mp3", "Salut, c’est Lucie. Je pars en vacances deux semaines et j’ai besoin de toi pour garder mon chat. Tu pourrais venir chaque jour à 9 h pour lui donner à manger ? Il mange de la pâtée et des croquettes. Il ne faut surtout pas lui donner de lait. Sa nourriture est dans le placard de l’entrée. Attention à bien fermer la porte de la cuisine. Ses jeux sont dans le salon. Voici le code de mon immeuble : 6991. C’est au 2e étage. Merci beaucoup !"),
  ]),
  group("moyen", "message", "27", [
    item("moyen", "message", "27", "message-27.mp3", "Salut, c’est Max. Ça va ? Je t’appelle pour te confirmer le concert du samedi 18 juin. Le concert commence à 21 h, ça va se terminer vers 22 h 30. Je te propose d’aller manger avant d’aller au concert, c’est moi qui t’invite ! On peut y aller vers 19 h 30. On peut se retrouver chez moi et y aller ensemble ? Il faudra qu’on prenne le métro. J’habite au 152 avenue du Président, près du cinéma. Rappelle-moi vite ! À bientôt."),
  ]),
  group("moyen", "message", "28", [
    item("moyen", "message", "28", "message-28.mp3", "Bonjour, ici le cabinet dentaire du Dr Molaire. Je suis désolée, mais nous sommes obligés d’annuler votre rendez-vous de 15h30 prévu aujourd’hui. Le docteur est souffrant. Nous vous proposons de décaler votre visite à la semaine prochaine. Nous avons une place disponible jeudi 14 à 11h15 ou vendredi 15 à 15h30. Veuillez nous rappeler pour confirmer. Et n’oubliez pas votre carte d’assurance maladie. À bientôt."),
  ]),
  group("moyen", "message", "29", [
    item("moyen", "message", "29", "message-29.mp3", "Bonjour, c’est Jérôme de Formation ABC. Je vous appelle pour confirmer votre inscription à la formation d’informatique que nous organisons lundi, pendant 4 jours. La formation est le matin de 9h à midi, puis l’après-midi de 13h15 à 16h15. Vous pouvez payer par carte bancaire sur Internet ou à l’accueil. Le premier jour, nous vous donnerons un stylo et du papier. N’oubliez pas votre pièce d’identité. Pour toute question, contactez-nous au 02 54 18 87 61. Merci."),
  ]),
  group("moyen", "message", "30", [
    item("moyen", "message", "30", "message-30.mp3", "Bonjour, ici le service client du marché de Rungis. Malheureusement, votre commande a pris du retard. Je vous informe aussi que nous n’avons plus de poisson. Pour nous excuser, nous vous offrons 2 paquets de 500g de fraises et de myrtilles. Nous vous informons que nous avons actuellement des réductions sur nos produits laitiers. Durant la semaine, vous pouvez retrouver votre colis à l’accueil de 8h à midi. Le week-end, la livraison est gratuite pour un minimum d’achat de 15 €."),
  ]),
  group("moyen", "message", "31", [
    item("moyen", "message", "31", "message-31.mp3", "Salut, c’est Thomas. Tu n’es pas venu à l’université aujourd’hui. J’espère que tu vas bien. Je t’appelle parce que nous avons un examen de portugais dans deux jours, à 10 h. Il faut réviser les temps du passé et les verbes irréguliers. Il y aura beaucoup d’exercices de conjugaison. L’examen sera dans la salle numéro 12, au deuxième étage. Si tu veux, on se donne rendez-vous au café, demain à 8 h pour étudier ensemble. Envoie-moi un SMS pour confirmer. À demain."),
  ]),
  group("moyen", "message", "32", [
    item("moyen", "message", "32", "message-32.mp3", "Bonjour, c’est Marianne. Je t’appelle pour te demander un petit service. Est-ce que tu pourrais aller chercher Olga à l’école mardi prochain ? J’ai une réunion qui finit tard à mon travail... Olga sort de l’école à 16 h 30. Euh, est-ce que ce serait possible aussi de l’amener à son cours de danse à 17 h 30 ? J’irai la chercher après son cours de danse vers 19 h 00. Rappelle-moi pour me dire si tu es d’accord ! Je te redonne mon numéro de téléphone : c’est le 06 77 89 20 12. Merci, bonne journée !"),
  ]),
  group("moyen", "message", "33", [
    item("moyen", "message", "33", "message-33.mp3", "Salut, c’est Elsa. Est-ce que tu veux venir jouer au tennis avec moi demain matin ? Amir et Fatima vont venir aussi. Ils m’ont proposé de faire un pique-nique dans le parc après le sport, pour manger ensemble. C’est une bonne idée, non ? Nicole va faire une salade. Amir propose de ramener des fruits. Et moi, je pense faire une tarte. Si tu viens, tu peux peut-être apporter des boissons ? Rappelle-moi avant 17 h 00, parce qu’après, je vais aller faire les courses. À plus !"),
  ]),
  group("moyen", "message", "34", [
    item("moyen", "message", "34", "message-34.mp3", "Bonjour, ici madame Bouquin, la directrice de la bibliothèque de Saint-Sauvin. Je vous appelle pour prendre rendez-vous cette semaine pour avoir une livraison de livres. Nous avons besoin de 15 exemplaires du dernier roman de Marc Lévy. Est-ce que vous pouvez les apporter à la bibliothèque ? Autre chose : est-ce que vous pouvez me présenter vos nouveaux livres ? Si vous êtes libre jeudi, je peux vous recevoir le matin, à 10 h et demie. Si ce n’est pas possible, je vous propose vendredi, entre 14 h et 18 h. Vous pouvez m’appeler au 07 74 12 29 30. Merci."),
  ]),
  group("moyen", "message", "35", [
    item("moyen", "message", "35", "message-35.mp3", "Bonjour, ici l’hôtel Beaulieu. Je vous confirme votre réservation. Le samedi 27, vous aurez une chambre double avec douche et WC. Un accès à Internet est inclus. C’est gratuit. Le petit déjeuner est servi entre 7 heures et 10 heures. Il coûte 7 euros 50. Vous devez vous enregistrer et prendre la chambre entre 13 heures et 16 heures. Si vous arrivez plus tard, appelez-nous au 01 42 18 93 27. Si vous arrivez en transports en commun, vous pouvez prendre le bus numéro 4. Merci."),
  ]),
  group("moyen", "message", "36", [
    item("moyen", "message", "36", "message-36.mp3", "Bonjour, ici l’agence de voyages Lacrosse. Je vous appelle à propos de deux changements pour votre voyage en Turquie. Le premier changement concerne votre vol : vous partirez le mardi 16, comme prévu. Mais le départ sera 2 heures plus tôt, à 9 heures 25. Le numéro de vol ne change pas, c’est le vol AF 0305. Le deuxième changement concerne l’hôtel : vous occuperez la chambre 23B au lieu de la 24B. Pour aller de l’aéroport à l’hôtel, vous pouvez prendre un taxi ou le bus numéro 13. En cas de doute, n’hésitez pas à nous contacter par téléphone au 04 97 22 63 13. Au revoir."),
  ]),
  group("moyen", "message", "37", [
    item("moyen", "message", "37", "message-37.mp3", "Bonjour, c’est la société FMAC ! Vous avez participé à notre grand jeu-concours le mois dernier. Je vous informe que vous avez gagné une télévision ! Félicitations ! Rappelez-nous au 02 50 88 23 40 pour nous donner votre adresse et récupérer votre cadeau. Vous pouvez consulter toutes nos offres promotionnelles sur notre site internet www.fmac.fr. Vous avez 30 % de réduction sur les lecteurs DVD et 25 % de réduction sur les ordinateurs du 9 au 29 mars."),
  ]),
  group("moyen", "conversation", "38", [
    item("moyen", "conversation", "38", "conversation-38.mp3", "Dialogue 1 — Excusez-moi monsieur, bonjour. J’ai oublié à quelle heure doit partir le train pour Bordeaux. — Le train partira à 15h50 en voie numéro 3. — Très bien, merci beaucoup. Bonne journée. Dialogue 2 — Marc, je dois récupérer un colis à la poste, mais je ne peux pas y aller, je suis malade. Tu pourrais y aller s’il te plaît ? — Bien sûr, pas de problème. — Merci beaucoup. Dialogue 3 — Allô ? Bonjour, ici le cabinet du docteur Robichet. Je vous appelle pour vous confirmer votre consultation de 16h aujourd’hui. — Ah très bien, merci. — N’oubliez pas de vous présenter au cabinet 15 minutes avant le rendez-vous. — D’accord. Dialogue 4 — Salut Marie, — Bonjour Pierre ! C’est toujours d’accord pour le cinéma de ce soir ? — Malheureusement, non. Je ne pourrai pas venir. Je suis vraiment désolé. — Bien sûr, pas de problème. On ira une prochaine fois !"),
  ]),
  group("moyen", "conversation", "39", [
    item("moyen", "conversation", "39", "conversation-39.mp3", "Dialogue 1 — Phil ! Tu voudrais venir avec moi à l’exposition musicale ce week-end ? — Ah oui pourquoi pas. C’est où ? — Pas très loin d’ici. À la porte de la Villette. — Je t’invite ! — Super ! D’accord. Dialogue 2 — Didier, dis-moi, Thibault est allé travailler aujourd’hui ? — Non, il n’est pas allé au travail aujourd’hui. — Sais-tu pourquoi ? — Je crois qu’il est malade. — Ah d’accord. Dialogue 3 — Stéphanie, je ne me sens pas bien. — Oh ! Tu devrais appeler ton médecin pour prendre un rendez-vous. — J’ai essayé de l’appeler, mais je tombe sur son répondeur. — Ah ! Il est peut-être en congé. Dialogue 4 — J’ai croisé notre nouvelle voisine ce matin. — Ah oui ? Elle est comment ? — Elle est très grande, un peu mince, elle doit avoir 40 ans. Elle est très gentille. — D’accord. J’irai lui souhaiter la bienvenue tout à l’heure."),
  ]),
  group("moyen", "conversation", "40", [
    item("moyen", "conversation", "40", "conversation-40.mp3", "Dialogue 1 — Bonjour madame, que désirez-vous aujourd’hui ? — Bonjour, alors je vais prendre le plat du jour, un jus d’orange et un tiramisu s’il vous plaît. — Très bien, ce sera tout ? — Oui merci. Dialogue 2 — Martin, tu peux m’aider à trouver un cadeau pour mon père ? — Qu’est-ce qu’il aime ? — Il adore le rugby. — Tu pourrais lui acheter des tickets pour aller voir un match. — Ah ! C’est une super idée ça ! Merci Martin. Dialogue 3 — Justine, je vais devoir m’absenter quelques jours pour le travail. Tu pourrais t’occuper de mon chat ? — Oui bien sûr. Qu’est-ce que je dois faire ? — Il faudrait lui donner à manger et jouer un peu avec lui. — Ok très bien. Dialogue 4 — Salut Clara ! Comment tu vas ? — Bien et toi ? Tu as l’air tout heureux, qu’est-ce qui se passe ? — Je viens d’avoir les résultats, j’ai eu mon concours pour devenir professeur ! — Ah mais c’est génial ça !"),
  ]),
  group("moyen", "conversation", "41", [
    item("moyen", "conversation", "41", "conversation-41.mp3", "Dialogue 1 — Julie, je dois aller au nouveau centre des impôts demain. Tu sais comment y aller ? — Oui, tu dois prendre le bus 171 et descendre à l’arrêt Gabriel Péri. C’est juste à côté du bureau de poste. — Très bien, merci beaucoup. Dialogue 2 — Eh Clémence ! Comment tu vas ? — Salut Max ! Ça fait longtemps que je ne t’ai pas vu. Eh bien, ça va et toi ? Comment vont tes enfants ? — Tout le monde va bien. Nous allons bientôt partir pour les vacances. Et toi ? — Nous aussi. Dialogue 3 — Marion, finalement, je ne peux pas venir avec toi au marché cet après-midi. — Ah bon ? Pourquoi ? — Une entreprise m’a appelé pour me faire passer un entretien. — Ah d’accord. Bonne chance pour ton entretien. Dialogue 4 — C’était bien tes vacances ? — Pas très bien. Il a plu pendant 2 semaines. Du coup, on n’a pas pu profiter de la plage. L’hôtel n’était pas très agréable... — Quel dommage !"),
  ]),
  group("moyen", "conversation", "42", [
    item("moyen", "conversation", "42", "conversation-42.mp3", "Dialogue 1 — Bonjour, je voudrais un sandwich au fromage avec une bouteille d’eau, s’il vous plaît. — Très bien. Est-ce qu’il vous faut autre chose ? — Oui, je prendrai aussi une tarte aux fraises. — Très bien, je vous apporte ça. Dialogue 2 — Amine, ça te dirait de sortir un peu demain ? — Oh oui, quelle bonne idée ! Qu’est-ce que tu proposes ? — Eh bien, on pourrait aller au jardin du Luxembourg et voir un film au cinéma le soir. — Parfait ! Super ! Dialogue 3 — Alors, tu as terminé de lire le livre que je t’ai prêté ? Tu as aimé ? — Eh bien... je n’ai pas du tout aimé. C’était long, et je n’aime pas les histoires d’amour. Je préfère les histoires policières. — Ah d’accord. Dommage ! Dialogue 4 — Sylvie, tu peux me rappeler à quelle heure commence le concert demain soir ? — Tu oublies toujours tout, toi. Les portes de la salle ouvrent à 19 h 30, mais le concert ne commence pas avant 21 h. — Super, merci beaucoup. — De rien !"),
  ]),
  group("moyen", "conversation", "43", [
    item("moyen", "conversation", "43", "conversation-43.mp3", "Dialogue 1 — Excusez-moi monsieur, j’essaie de retirer de l’argent au distributeur de billets, mais je n’y arrive pas. — Il a un problème technique. Vous pouvez utiliser celui à l’intérieur de la banque si vous voulez. — D’accord. Dialogue 2 — Bonjour madame, vous savez à quelle heure la banque va ouvrir ? — Bonjour. Je ne suis pas sûre, mais je crois qu’elle ouvre à 13h30. — D’accord. Je vais revenir tout à l’heure. Dialogue 3 — Excusez-moi monsieur, je cherche la mairie de Sèvres. — Je suis vraiment désolé, mais je ne sais pas. Je ne suis pas d’ici. — Ce n’est pas grave. Je vais demander à quelqu’un d’autre. Dialogue 4 — Attendez madame, vous voulez que je vous aide à porter les sacs ? — Oh c’est très gentil, monsieur. Oui, je veux bien. Merci beaucoup. Ils sont vraiment très lourds. — Avec plaisir madame."),
  ]),
  group("moyen", "conversation", "44", [
    item("moyen", "conversation", "44", "conversation-44.mp3", "Dialogue 1 — Bonjour madame, vous désirez ? — Je voudrais un café gourmand, s’il vous plaît. — Bien, madame. Je vous l’apporte tout de suite. — Oh... je voudrais un verre d’eau également. C’est possible ? — Bien sûr, madame. Je vous l’apporte avec le café. Dialogue 2 — Oh ! Il est déjà deux heures moins le quart. Mon client va arriver. Je dois retourner au bureau. — D’accord. À ce soir, mon chéri. Bonne chance avec ton client. — Merci, passe une bonne journée. À plus tard. Dialogue 3 — Et si on allait au cinéma ce soir ? — Bonne idée ! Quel film est-ce que tu voudrais voir ? — Les infidèles. — Ah... Et pourquoi pas aller au théâtre ? — Oui, ça nous changera ! Regardons le programme culturel. Dialogue 4 — Comment est-ce que je peux me rendre à la gare d’Austerlitz ? — Prends la ligne 10 du métro. C’est le plus direct. — Tu es sûr ? Je dois y aller après le travail. — Ah non ! Alors, prends la ligne 5. — D’accord, merci."),
  ]),
  group("moyen", "conversation", "45", [
    item("moyen", "conversation", "45", "conversation-45.mp3", "Dialogue 1 — Salut Julie. Ça va ? — Salut Max, je vais bien, merci. Je te présente mon frère, Yannick. — Salut Yannick, enchanté. Julie m’a beaucoup parlé de toi. Dialogue 2 — Alors, tu es toujours d’accord pour m’accompagner au concert ? — Oui, bien sûr. On se voit à quelle heure ? — Eh bien, rendez-vous à 20 heures devant la salle, le concert commence à 21 heures. Ça te va ? — Parfait, j’y serai. Dialogue 3 — Valérie, je peux te demander une faveur ? C’est important. — Bien sûr, je t’écoute. — Est-ce que tu peux garder mon fils, samedi soir ? — Pas de problème. — Merci, c’est gentil. Dialogue 4 — Dis, ça te dit de venir au cinéma avec Lucie et moi ? — Oui, pourquoi pas. Quand ? — Vendredi soir, la séance est à 21 h. — Désolée, mais je suis déjà prise vendredi. — Dommage, ce sera pour une autre fois."),
  ]),
  group("moyen", "conversation", "46", [
    item("moyen", "conversation", "46", "conversation-46.mp3", "Dialogue 1 — Alors, cette fête d’anniversaire ? C’était comment ? — C’était génial ! Nous étions 20 personnes. Nous avons dansé toute la nuit. — Oh là là, vous étiez nombreux. — Oui. Et j’ai eu plein de cadeaux. C’était formidable. Dialogue 2 — Salut Hugo ! J’ai deux places pour le match de basket de samedi. Tu veux venir avec moi ? — C’est vrai ? C’est terrible, je ne peux pas y aller. C’est l’anniversaire de ma mère. — Oh non ! C’est dommage... Dialogue 3 — Tu sais quoi ? Paul m’a demandée en mariage. — C’est vrai ? Comme c’est romantique. — Oui. En plus, nous allons nous marier à Paris. — Félicitations ! Je suis heureuse pour toi. Dialogue 4 — Marc, tu peux m’accompagner chez le médecin ? — Oui. Sophie, tu es malade ? Qu’est-ce qui ne va pas ? — Rien de grave. C’est pour un vaccin seulement, mais je préfère être accompagnée."),
  ]),
  group("moyen", "conversation", "47", [
    item("moyen", "conversation", "47", "conversation-47.mp3", "Dialogue 1 — Bonjour Leïla ! Encore félicitations pour ton mariage ! — Bonjour Farida, merci beaucoup ! — C’était une très belle réception. On a très bien mangé et on s’est vraiment bien amusés. Bravo et merci ! Dialogue 2 — Ah, ma veste est toute sale ! — Oups, pardon, j’ai mis ta veste pour aller dans le jardin ce matin. Je suis vraiment désolée ! Dialogue 3 — Julien, ça te dit d’aller au cinéma ce soir avec moi ? — Ah oui, pourquoi pas ! Tu voudrais voir quel film ? — Euh... Un film d’action ou une comédie, par exemple, ça te dit ? Dialogue 4 — J’aimerais bien aller au restaurant ce soir. Tu connais un bon restaurant par ici ? — Je te conseille la crêperie « La Chandeleur » à Lisieux. On y mange les meilleures crêpes de Normandie !"),
  ]),
  group("moyen", "conversation", "48", [
    item("moyen", "conversation", "48", "conversation-48.mp3", "Dialogue 1 — Waouh, sympa ton nouveau pantalon ! Tu l’as acheté au centre commercial ? — Ah merci ! Oui, il vient du centre commercial. — Et tu l’as payé combien ? — Je l’ai eu en soldes pour seulement 19 € ! Dialogue 2 — Samia, ça te dirait d’aller au restaurant qui fait les plats végétariens ? J’ai entendu dire qu’il était vraiment bon ! — Ah, pourquoi pas ! Dialogue 3 — Henria, merci beaucoup pour ton aide. Grâce à toi, j’ai trouvé un beau cadeau pour mon petit cousin ! — De rien, je suis contente de vous avoir aidés toi et ton petit cousin ! Dialogue 4 — Bonjour Madame. Vous avez la carte de fidélité du magasin ? — Bonjour, euh, non je n’ai pas de carte fidélité. — Vous voulez la faire aujourd’hui ? Elle vous offre plein d’avantages et des réductions ! — Euh, non, désolée, ça ne m’intéresse pas."),
  ]),
  group("moyen", "conversation", "49", [
    item("moyen", "conversation", "49", "conversation-49.mp3", "Dialogue 1 — Excuse-moi Éric, j’ai oublié la date de l’examen. Tu peux me rappeler la date, s’il te plaît ? — Bien sûr. C’est le mercredi 17. — Ah oui ! À 9h, c’est bien ça ? — Exactement. Dialogue 2 — Dis, Sandrine, tu sais comment on va à la bibliothèque ? — La bibliothèque ? Elle est au bâtiment C, au premier étage. — D’accord. Et à quelle heure est-ce qu’elle ouvre ? — Elle ouvre à 9h et demie, tous les jours. Dialogue 3 — Astrid, tu veux réviser l’examen de mercredi avec moi ? — D’accord. On peut se voir ce soir si tu veux. Je suis libre à partir de 17 h. — Je ne suis pas disponible ce soir. Demain après-midi, ça te va ? — D’accord. Mais à 15 h alors. Rendez-vous à la bibliothèque. Dialogue 4 — Caroline, j’ai oublié mon livre chez mes parents. — Vraiment ? Ça tombe mal, nous avons notre examen dans 2 jours. — Je sais ! Est-ce que tu peux me prêter un livre ? Je voudrais faire des photocopies. — Bien sûr. Allons les faire maintenant !"),
  ]),
  group("moyen", "conversation", "50", [
    item("moyen", "conversation", "50", "conversation-50.mp3", "Dialogue 1 — Élisa, tu peux me prêter le DVD du film Amour ? — Euh, non, désolée. — Mais pourquoi ? — Je voudrais le regarder ce week-end. Et puis, la dernière fois que je t’ai prêté un DVD, tu l’as gardé pendant 6 mois ! Alors non, je ne préfère pas ! Dialogue 2 — Salut, je te présente Coralie, c’est ma cousine ! — Salut Coralie ! c’est toi qui habites à Marseille ? — Euh, non ça c’est Magali, mon autre cousine ! Coralie habite à Nantes. Dialogue 3 — Salut Carine ! Tu sais ce qui m’est arrivé la semaine dernière ? — Non, vas-y raconte ! — J’ai vu le chanteur du groupe Phoenix dans un magasin de disques ! Il m’a tenu la porte pour sortir du magasin, et après il m’a souri ! Dialogue 4 — Excusez-moi, je cherche la bibliothèque, vous pouvez m’aider ? — Euh, oui, il faut prendre l’entrée centrale, monter au premier étage et aller à droite. La bibliothèque est au fond du couloir."),
  ]),
];

export function coGroupsByLevelCategory(level: COLevel, category: COAudioCategory) {
  return CO_AUDIO_GROUPS.filter((entry) => entry.level === level && entry.category === category);
}

export function randomCoGroup(level: COLevel, category: COAudioCategory) {
  const groups = coGroupsByLevelCategory(level, category);
  return groups[Math.floor(Math.random() * groups.length)] ?? groups[0]!;
}
