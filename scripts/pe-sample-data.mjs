/**
 * Structured sample answers for the Production Écrite (PE) exercises.
 *
 * Each key maps to a structured object with a `genre` and genre-specific fields.
 * These samples are hand-written model answers used to regenerate the flat-text
 * sample answers consumed by ProductionEcriteRunner. They deliberately avoid
 * padding/filler phrases, keep a consistent register (tu OR vous, never both in
 * the same letter), and group sentences into coherent 2–4 sentence paragraphs.
 *
 * Approximate word targets (body text):
 *   pe1-short ~50w · pe1-long ~65w · pe2-reply ~85w
 *   pe2-long ~125w · pe3-short ~145w · pe3-* (long) ~190w
 */

const SAMPLES = {
  // ── PE1 short (~50 words) ──────────────────────────────────────────────────
  "pe1-short-fete": {
    genre: "informal_email",
    greeting: "Salut Samir,",
    paragraphs: [
      "Merci beaucoup pour ton invitation à ta fête de samedi soir ! Je viens avec grand plaisir et j'ai vraiment hâte de retrouver tout le monde.",
      "J'apporterai une salade de fruits et quelques boissons. Dis-moi simplement à quelle heure arriver et si tu as besoin d'un coup de main pour préparer.",
    ],
    closing: "À samedi,",
    signature: "Léa",
  },
  "pe1-short-vacances": {
    genre: "informal_email",
    greeting: "Bonjour Lina,",
    paragraphs: [
      "Oui, je suis en vacances à Genève avec ma famille. Nous nous promenons au bord du lac et nous visitons les vieux quartiers.",
      "Il fait très beau et l'eau est agréable pour la baignade. Le soir, nous mangeons une glace en terrasse. Et toi, comment se passent tes journées ?",
    ],
    closing: "Bises,",
    signature: "Léa",
  },
  "pe1-short-anniversaire": {
    genre: "informal_email",
    greeting: "Bonjour Nadia,",
    paragraphs: [
      "Je fête mon anniversaire samedi 12 juillet à dix-neuf heures chez moi, rue des Lilas 8 à Sion. J'espère vraiment que tu pourras venir !",
      "Il y aura de la musique et un buffet dans le jardin. Apporte un dessert si tu veux, et confirme-moi ta présence dès que possible.",
    ],
    closing: "Amicalement,",
    signature: "Léa",
  },
  "pe1-short-art": {
    genre: "informal_email",
    greeting: "Salut Maya,",
    paragraphs: [
      "Oui, je suis un cours de dessin tous les mardis soir avec quelques camarades, et j'adore ça. Nous travaillons surtout le paysage et le portrait.",
      "Le professeur est patient et de bon conseil. Et toi, est-ce que tu pratiques une activité artistique en ce moment ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe1-short-loisirs": {
    genre: "informal_email",
    greeting: "Bonjour Noah,",
    paragraphs: [
      "Pendant mon temps libre, j'aime beaucoup lire et nager. Je lis le soir avant de dormir et je vais à la piscine chaque mercredi.",
      "Le samedi, je fais parfois du vélo avec mon frère le long de la rivière. Et toi, quels sont tes loisirs préférés ?",
    ],
    closing: "Cordialement,",
    signature: "Léa",
  },
  "pe1-short-travail": {
    genre: "informal_email",
    greeting: "Salut Hugo,",
    paragraphs: [
      "Mon nouveau travail me plaît beaucoup. Je suis secrétaire dans une petite entreprise et mes collègues sont vraiment sympathiques.",
      "Je travaille de huit heures à dix-sept heures, et le trajet en bus ne dure que vingt minutes. L'ambiance au bureau est calme et agréable.",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },

  // ── PE1 long (~65 words) ───────────────────────────────────────────────────
  "pe1-long-fete": {
    genre: "informal_email",
    greeting: "Salut Samir,",
    paragraphs: [
      "Merci beaucoup pour ton invitation à la fête de samedi ! J'accepte avec grand plaisir et je serai là dès le début de la soirée.",
      "Pour le repas, j'apporterai une quiche aux légumes et une grande salade verte. Je peux aussi m'occuper des boissons si tu préfères.",
      "Dis-moi à quelle heure arriver. Si tu veux, je peux passer un peu plus tôt pour t'aider à tout préparer.",
    ],
    closing: "À samedi,",
    signature: "Léa",
  },
  "pe1-long-carte-postale": {
    genre: "postcard",
    greeting: "Chère amie,",
    paragraphs: [
      "Je passe une semaine à Lausanne et c'est un vrai bonheur. Nous visitons le musée, le port et les petites rues du centre.",
      "Hier, nous avons déjeuné au bord du lac, face aux montagnes. Il fait beau et doux, parfait pour se promener.",
      "Demain, une balade dans les vignobles nous attend. J'espère que tu vas bien, donne-moi vite de tes nouvelles !",
    ],
    closing: "Bises,",
    signature: "Léa",
  },
  "pe1-long-voeux": {
    genre: "friendly_letter",
    greeting: "Chère Sofia,",
    paragraphs: [
      "Bonne année ! Je te souhaite une année pleine de bonheur, de santé et de belles réussites, pour toi et pour toute ta famille.",
      "De mon côté, j'ai plusieurs projets : suivre un cours de français et voyager en Suisse romande au printemps. J'espère qu'on trouvera enfin le temps de se voir.",
      "Prends bien soin de toi et écris-moi vite pour me raconter tes résolutions.",
    ],
    closing: "Je t'embrasse,",
    signature: "Léa",
  },
  "pe1-long-anniversaire": {
    genre: "informal_email",
    greeting: "Coucou Nadia,",
    paragraphs: [
      "J'organise une fête pour mon anniversaire le samedi 20 septembre à dix-huit heures, chez moi, avenue de la Gare 15 à Martigny.",
      "Le thème de la soirée est « couleurs d'été » : viens avec une tenue colorée ! Il y aura de la musique, un buffet et des jeux dans le jardin.",
      "Tu peux apporter une boisson si tu veux. Confirme-moi ta présence avant mercredi, j'espère vraiment te voir.",
    ],
    closing: "Amicalement,",
    signature: "Léa",
  },
  "pe1-long-ecole-art": {
    genre: "informal_letter",
    greeting: "Chère amie,",
    paragraphs: [
      "Je viens de m'inscrire à l'école d'art de Sion et j'en suis ravie. J'ai cours de dessin le lundi et de peinture le jeudi, avec cinq autres élèves.",
      "J'aime surtout peindre des paysages de montagne. Les professeurs expliquent bien et donnent de précieux conseils.",
      "Un jour, j'aimerais exposer mes tableaux. Et toi, est-ce que tu pratiques encore l'aquarelle ?",
    ],
    closing: "Bises,",
    signature: "Léa",
  },
  "pe1-long-correspondant": {
    genre: "informal_letter",
    greeting: "Cher correspondant,",
    paragraphs: [
      "Je m'appelle Léa et j'ai vingt-cinq ans. J'habite à Sion, une petite ville entourée de montagnes, avec mon chat Minou.",
      "J'adore la musique, le cinéma et le vélo. Le week-end, je lis souvent et je me promène dans la nature avec mes amis.",
      "Et toi, comment est ta ville ? Quels sont tes loisirs préférés et fais-tu du sport ? J'ai hâte de te connaître.",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe1-long-montreal": {
    genre: "postcard",
    greeting: "Salut Karim,",
    paragraphs: [
      "Me voici en vacances à Montréal, et j'adore cette ville pleine de vie. Hier, nous avons visité le Vieux-Port et le musée des beaux-arts.",
      "La cuisine québécoise est excellente : j'ai goûté une poutine délicieuse. Le soir, nous avons écouté de la musique dans un café du quartier latin.",
      "Le temps est frais mais ensoleillé. J'espère que tout va bien pour toi, à très vite !",
    ],
    closing: "Bises,",
    signature: "Léa",
  },
  "pe1-long-premier-jour": {
    genre: "informal_email",
    greeting: "Salut Inès,",
    paragraphs: [
      "Aujourd'hui, c'était mon premier jour à l'école de langues et je voulais te raconter. J'ai eu un cours de grammaire et un cours de conversation.",
      "Les professeurs sont patients et l'ambiance est vraiment agréable. Les autres élèves viennent de plusieurs pays, ce qui rend les échanges passionnants.",
      "Parler reste un peu difficile pour moi, mais je vais m'entraîner chaque jour. Et toi, quoi de neuf ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },

  // ── PE2 reply (~85 words) ──────────────────────────────────────────────────
  "pe2-reply-concert": {
    genre: "informal_email",
    greeting: "Salut Marc,",
    paragraphs: [
      "Merci beaucoup pour ton invitation au concert, ça me fait très plaisir et j'accepte avec grande joie ! Cela fait longtemps que je voulais assister à un vrai spectacle live.",
      "Pourrais-tu me préciser l'heure et le lieu exact du rendez-vous ? J'aimerais aussi savoir quel style de musique nous allons écouter, car j'adore le jazz et la pop française.",
      "Si tu es d'accord, on pourrait dîner ensemble avant le concert. Dis-moi ce qui t'arrange le mieux.",
    ],
    closing: "À très bientôt,",
    signature: "Léa",
  },
  "pe2-reply-nouvel-an": {
    genre: "informal_email",
    greeting: "Salut Massi,",
    paragraphs: [
      "Merci pour ton invitation à fêter le Nouvel An dans le sud ! J'accepte avec grand plaisir, je suis sûre que ce sera une soirée mémorable.",
      "Peux-tu me dire quel est le programme et à quelle heure la fête commence ? J'aimerais aussi savoir ce que je peux apporter, un dessert ou des boissons par exemple.",
      "Pour le trajet, je pensais prendre le train ; dis-moi si quelqu'un peut venir me chercher à la gare.",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-weekend-montagne": {
    genre: "informal_email",
    greeting: "Salut Julien,",
    paragraphs: [
      "Merci beaucoup pour ton invitation à passer le week-end en montagne ! L'idée me plaît énormément et j'ai très envie de venir.",
      "Je dois d'abord en parler avec mes parents, mais je te donne une réponse définitive dès demain. Peux-tu me dire quelles activités tu as prévues et si nous dormons sur place ?",
      "Dis-moi aussi quelles affaires emporter, surtout pour la randonnée. J'ai vraiment hâte !",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-repas-breton": {
    genre: "informal_email",
    greeting: "Salut Marie,",
    paragraphs: [
      "Merci pour ton invitation au repas breton ! J'accepte avec grand plaisir, j'adore découvrir de nouvelles spécialités régionales.",
      "Je me réjouis de goûter les crêpes et le cidre. De mon côté, je peux apporter un plat de mon pays, un taboulé maison, pour le partager avec tout le monde.",
      "À quelle heure commence le déjeuner, et faut-il que j'apporte autre chose ?",
    ],
    closing: "Bisous,",
    signature: "Léa",
  },
  "pe2-reply-voisin-anniversaire": {
    genre: "informal_email",
    greeting: "Cher Thomas,",
    paragraphs: [
      "Merci beaucoup pour ton invitation à ton anniversaire de samedi ! J'accepte avec grand plaisir, ce sera l'occasion de mieux faire connaissance entre voisins.",
      "Je t'apporterai un gâteau au chocolat, c'est ma spécialité. Peux-tu me dire à quelle heure exactement commence la fête ?",
      "Si tu as besoin d'un coup de main pour préparer, je peux arriver un peu en avance. À samedi !",
    ],
    closing: "Amicalement,",
    signature: "Léa",
  },
  "pe2-reply-fete-lumieres": {
    genre: "informal_email",
    greeting: "Salut Julia,",
    paragraphs: [
      "Merci pour ton invitation à Lyon pour la fête des Lumières ! J'accepte avec enthousiasme, on m'a tellement parlé de ces illuminations magnifiques.",
      "On pourrait arriver dans l'après-midi et se promener dans le vieux Lyon avant le spectacle du soir. Qu'en penses-tu ?",
      "Peux-tu me dire à quelle heure nous partons et où nous logeons ? J'ai vraiment hâte d'y être.",
    ],
    closing: "Bises,",
    signature: "Léa",
  },
  "pe2-reply-sortie-enfants": {
    genre: "informal_email",
    greeting: "Bonjour Lucie,",
    paragraphs: [
      "Merci pour ton message. J'accepte volontiers de participer à la sortie avec les enfants, ce sera un moment vraiment sympathique.",
      "Peux-tu me dire la date exacte et le lieu de rendez-vous ? Dis-moi aussi quelles tâches nous devons préparer et combien d'adultes seront présents pour encadrer le groupe.",
      "De mon côté, je peux préparer des collations et des boissons pour les enfants.",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-fete-retraite": {
    genre: "informal_email",
    greeting: "Bonjour Dorothée,",
    paragraphs: [
      "Quelle belle idée d'organiser une fête pour le départ en retraite de Gérard ! Je participe avec grand plaisir.",
      "Peux-tu me dire quand et où aura lieu la célébration ? Je te propose d'apporter les boissons et de préparer un petit discours en souvenir de nos années passées ensemble.",
      "Je peux aussi aider à décorer la salle et à accueillir les invités. Dis-moi ce dont tu as besoin.",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-anniversaire-mariage": {
    genre: "informal_email",
    greeting: "Chers Thérèse et Pierre,",
    paragraphs: [
      "Merci infiniment pour votre invitation à vos cinquante ans de mariage. C'est un très bel anniversaire et je suis touchée d'y être conviée.",
      "Malheureusement, je ne pourrai pas être présente le 4 juillet, car je travaille ce jour-là et il m'est impossible de me libérer. J'en suis vraiment désolée.",
      "Je vous enverrai une carte et un petit cadeau pour l'occasion. Profitez bien de cette belle journée en famille.",
    ],
    closing: "Bien à vous,",
    signature: "Léa",
  },
  "pe2-reply-match-foot": {
    genre: "informal_email",
    greeting: "Salut Lucas,",
    paragraphs: [
      "Merci beaucoup pour les places au match de football, c'est vraiment gentil d'avoir pensé à moi !",
      "Malheureusement, je ne pourrai pas venir ce soir, car j'ai un rendez-vous médical que je ne peux pas déplacer. Je suis vraiment déçue de manquer cette rencontre.",
      "Est-ce qu'on pourrait aller voir un autre match ensemble le week-end prochain ? Dis-moi quelles rencontres sont prévues et à quelle heure.",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-shopping": {
    genre: "informal_email",
    greeting: "Coucou Karina,",
    paragraphs: [
      "Merci pour ta proposition d'aller faire les magasins ce week-end ! Ça m'aurait beaucoup plu.",
      "Malheureusement, je dois aider ma famille samedi et dimanche, donc je ne serai pas libre. Je suis désolée de devoir refuser cette fois-ci.",
      "On pourrait plutôt se retrouver samedi prochain autour d'un café, puis aller voir le nouveau film au cinéma ? Dis-moi si ça te convient.",
    ],
    closing: "Bises,",
    signature: "Léa",
  },
  "pe2-reply-mariage": {
    genre: "informal_email",
    greeting: "Coucou Amina,",
    paragraphs: [
      "Merci beaucoup pour ton invitation au mariage de ta sœur le 10 mai. Je suis très heureuse pour elle et je te remercie d'avoir pensé à moi.",
      "Malheureusement, je serai en déplacement professionnel ce week-end-là et je ne pourrai pas venir. Je suis sincèrement désolée de manquer ce grand jour.",
      "Je leur enverrai un cadeau par la poste pour féliciter les mariés. J'espère que la fête sera magnifique.",
    ],
    closing: "Bises,",
    signature: "Léa",
  },
  "pe2-reply-diner-reussite": {
    genre: "informal_email",
    greeting: "Bonjour Meriem,",
    paragraphs: [
      "Félicitations pour ta réussite, je suis vraiment fière de toi ! Merci beaucoup pour ton invitation à dîner.",
      "Malheureusement, je ne suis pas libre vendredi soir, car j'ai déjà un engagement familial. Je suis désolée, j'aurais adoré célébrer ce beau moment avec toi.",
      "Est-ce qu'on pourrait se retrouver la semaine prochaine ? Choisis le jour qui t'arrange, je m'adapte à ton emploi du temps.",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-velo": {
    genre: "informal_email",
    greeting: "Salut Antoine,",
    paragraphs: [
      "Merci pour ta proposition de sortie à vélo ce dimanche ! J'accepte avec grand plaisir, ça fait longtemps que je n'ai pas roulé.",
      "Quel parcours as-tu prévu et combien de kilomètres environ ? J'aimerais savoir si la route est facile, car je ne suis pas très entraînée.",
      "Où et à quelle heure nous retrouvons-nous ? Je prendrai de l'eau et un en-cas pour la pause. À dimanche !",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-spectacle": {
    genre: "informal_email",
    greeting: "Salut Camille,",
    paragraphs: [
      "Merci beaucoup pour ton invitation au spectacle ! J'accepte avec joie, j'adore les sorties culturelles.",
      "Peux-tu me dire de quel type de spectacle il s'agit et à quelle heure il commence ? J'aimerais aussi savoir combien coûte la place, pour te rembourser ma part.",
      "On pourrait se retrouver un peu avant pour boire un verre. Dis-moi ce que tu en penses.",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-theatre": {
    genre: "informal_email",
    greeting: "Salut Paul,",
    paragraphs: [
      "Merci pour ton invitation au théâtre, quelle bonne idée ! J'accepte avec plaisir, je n'y suis pas allée depuis bien longtemps.",
      "Quelle pièce allons-nous voir et à quelle heure débute la représentation ? J'espère que c'est une comédie, j'ai bien besoin de rire en ce moment.",
      "Retrouvons-nous devant l'entrée un quart d'heure avant. Merci encore de m'avoir invitée !",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-weekend-nora": {
    genre: "informal_email",
    greeting: "Salut Nora,",
    paragraphs: [
      "Merci pour ta proposition de passer le week-end ensemble chez toi ! J'accepte avec grand plaisir, ça va nous faire du bien de nous retrouver.",
      "Qu'as-tu prévu comme activités ? On pourrait se promener, cuisiner ensemble et regarder un film le soir. Dis-moi ce qui te ferait envie.",
      "J'arriverai samedi matin en train. Faut-il que j'apporte quelque chose pour les repas ?",
    ],
    closing: "Bises,",
    signature: "Léa",
  },
  "pe2-reply-permis": {
    genre: "informal_email",
    greeting: "Salut Yanis,",
    paragraphs: [
      "Bravo pour ton permis de conduire, je savais que tu allais réussir ! Je suis vraiment contente pour toi.",
      "Merci pour ta proposition de faire une première balade en voiture ensemble. J'accepte avec plaisir, mais roule prudemment pour ce premier grand trajet !",
      "Où aimerais-tu aller, et quel jour te convient le mieux ? On pourrait viser un endroit tranquille au bord du lac.",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-logement": {
    genre: "informal_email",
    greeting: "Salut Sofiane,",
    paragraphs: [
      "Merci beaucoup de m'avoir parlé de la chambre libre dans ton appartement ! Ça m'intéresse vraiment, car je cherche justement à me loger.",
      "Peux-tu me donner quelques précisions : le montant du loyer, la surface de la chambre et les charges comprises ? J'aimerais aussi savoir si le quartier est bien desservi.",
      "Serait-il possible de visiter cette semaine ? Je suis disponible en soirée.",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-nouveau-travail": {
    genre: "informal_email",
    greeting: "Salut Diego,",
    paragraphs: [
      "Félicitations pour ton nouveau travail, c'est une excellente nouvelle ! Tu le mérites vraiment après tous tes efforts.",
      "J'aimerais que tu me racontes tout : en quoi consiste ton poste, comment sont tes collègues et si l'ambiance te plaît. Ça a l'air passionnant.",
      "Pour fêter ça, on pourrait se retrouver ce week-end autour d'un bon repas. Dis-moi quand tu es libre !",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-voyage-florian": {
    genre: "informal_email",
    greeting: "Salut Florian,",
    paragraphs: [
      "Merci pour ta proposition de partir en voyage ensemble cet été ! L'idée me séduit beaucoup, j'ai très envie de découvrir de nouveaux endroits.",
      "Quelle destination as-tu en tête et à quelles dates penses-tu partir ? J'aimerais aussi qu'on parle du budget, pour organiser ça tranquillement.",
      "On pourrait se voir bientôt pour préparer l'itinéraire ensemble. Dis-moi quand tu es disponible.",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-cadeau": {
    genre: "informal_email",
    greeting: "Salut Clara,",
    paragraphs: [
      "Merci de m'avoir proposé de participer au cadeau commun pour l'anniversaire de Sarah. Je suis tout à fait d'accord, c'est une belle attention !",
      "Combien chacun doit-il donner, et as-tu déjà une idée précise ? Je pensais à un beau livre ou à un bon pour un soin, elle adorerait sûrement.",
      "Dis-moi comment te remettre ma part. Merci d'avoir organisé tout ça !",
    ],
    closing: "Bises,",
    signature: "Léa",
  },
  "pe2-reply-vacances-simon": {
    genre: "informal_email",
    greeting: "Salut Simon,",
    paragraphs: [
      "Merci beaucoup pour ton invitation à passer une partie des vacances avec toi et ta famille ! J'accepte avec grand plaisir.",
      "Où comptes-tu aller cette année, à la mer ou à la montagne ? J'aimerais savoir combien de temps nous resterons et ce que je dois prévoir comme affaires.",
      "Je peux participer aux courses et aux repas, bien sûr. Dis-moi comment on s'organise !",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-reply-universite": {
    genre: "informal_email",
    greeting: "Salut Rania,",
    paragraphs: [
      "Merci pour ton message ! Je suis ravie d'apprendre que tu commences l'université à la rentrée, c'est une belle étape.",
      "Tu me demandes des conseils : je te dirais de bien t'organiser dès le début et de ne pas hésiter à poser des questions aux professeurs. Quelle filière as-tu choisie ?",
      "Si tu veux, on peut en discuter autour d'un café la semaine prochaine. Je serai heureuse de t'aider.",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },

  // ── PE2 long (~125 words) ──────────────────────────────────────────────────
  "pe2-long-passion": {
    genre: "informal_letter",
    greeting: "Chère Amélie,",
    paragraphs: [
      "Tu me demandes quelle est ma grande passion : c'est la photographie, et j'y consacre presque tout mon temps libre depuis maintenant trois ans.",
      "Ce que j'adore, c'est capturer des instants uniques, un rayon de lumière sur une façade ou un sourire dans la rue. La photographie m'apprend à regarder le monde autrement et à prendre mon temps. Chaque week-end, je pars explorer un quartier ou un coin de nature avec mon appareil.",
      "Le soir, je trie mes clichés et j'apprends à retoucher les couleurs sur l'ordinateur. Un jour, j'aimerais organiser une petite exposition. Et toi, as-tu une passion qui t'anime autant ? Raconte-moi tout !",
    ],
    closing: "Je t'embrasse,",
    signature: "Léa",
  },
  "pe2-long-instrument": {
    genre: "informal_letter",
    greeting: "Cher Malik,",
    paragraphs: [
      "Tu voulais savoir si je jouais d'un instrument : oui, je pratique le piano depuis mon enfance, et c'est une véritable respiration dans ma semaine.",
      "J'ai commencé vers huit ans avec une professeure très patiente. Au début, les gammes m'ennuyaient, mais peu à peu j'ai appris à déchiffrer de vraies partitions. Aujourd'hui, j'aime surtout jouer des morceaux de jazz et quelques chansons françaises que je reprends à l'oreille.",
      "Le piano m'aide à me détendre après une journée chargée. J'aimerais bientôt jouer dans un petit groupe. Et toi, as-tu déjà eu envie d'apprendre la musique ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-mer": {
    genre: "informal_letter",
    greeting: "Chère Inès,",
    paragraphs: [
      "Tu me parlais de la mer dans ta dernière lettre, et cela m'a rappelé combien je l'aime moi aussi.",
      "Chaque été, quand j'étais enfant, nous partions une semaine sur la côte. Je passais mes journées à nager, à ramasser des coquillages et à construire des châteaux de sable avec mon frère. Le soir, nous marchions sur la plage pendant que le soleil se couchait sur l'eau.",
      "Aujourd'hui encore, l'odeur du sel et le bruit des vagues me calment immédiatement. J'espère y retourner cet été. Est-ce que la mer te manque autant qu'à moi ?",
    ],
    closing: "Je t'embrasse,",
    signature: "Léa",
  },
  "pe2-long-voyage": {
    genre: "informal_letter",
    greeting: "Cher Théo,",
    paragraphs: [
      "Tu me demandais de te raconter mon dernier voyage : j'ai passé dix jours au Portugal au printemps, et c'était inoubliable.",
      "J'ai d'abord visité Lisbonne, avec ses vieux tramways jaunes et ses rues en pente. Ensuite, je suis descendue jusqu'à la côte pour découvrir de petits villages de pêcheurs. La nourriture était délicieuse, surtout le poisson grillé et les fameux pastéis de nata.",
      "Ce qui m'a le plus marquée, c'est la gentillesse des habitants, toujours prêts à aider. Je suis rentrée le cœur plein de souvenirs. Où pars-tu en vacances cette année ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-pays-origine": {
    genre: "informal_letter",
    greeting: "Chère Sonia,",
    paragraphs: [
      "Tu voulais que je te parle de mon pays d'origine, et c'est un vrai plaisir pour moi.",
      "Je viens d'une petite ville entourée de collines, où les gens vivent au rythme des saisons. Nous avons de nombreuses fêtes de famille, avec beaucoup de musique et de plats faits maison. La cuisine y est très importante : on partage toujours de grands repas ensemble le dimanche.",
      "Ce qui me manque le plus, ce sont les marchés colorés et l'accueil chaleureux des voisins. J'espère t'y emmener un jour. Et toi, quelles sont les traditions les plus importantes chez toi ?",
    ],
    closing: "Je t'embrasse,",
    signature: "Léa",
  },
  "pe2-long-sport": {
    genre: "informal_letter",
    greeting: "Cher Bastien,",
    paragraphs: [
      "Tu me demandais quel sport je pratique : je fais de la course à pied trois fois par semaine, et j'en suis devenue accro.",
      "J'ai commencé il y a deux ans pour me sentir mieux, sans grande ambition. Petit à petit, j'ai augmenté les distances et j'ai même participé à une course de dix kilomètres l'automne dernier. Courir le matin, avant le travail, me donne de l'énergie pour toute la journée.",
      "Ce que j'aime, c'est le calme des sentiers et le sentiment de progresser. J'aimerais tenter un semi-marathon l'an prochain. Fais-tu toujours du basket de ton côté ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-musee": {
    genre: "informal_letter",
    greeting: "Chère Nadia,",
    paragraphs: [
      "Je voulais te raconter ma visite au musée des beaux-arts, où je suis allée dimanche dernier.",
      "Il y avait une exposition temporaire consacrée aux peintres impressionnistes. J'ai été fascinée par les jeux de lumière et les couleurs vives des paysages. J'ai aussi suivi une visite guidée passionnante, qui m'a appris beaucoup de détails sur la vie des artistes.",
      "Je suis restée près de trois heures, sans voir le temps passer. J'ai terminé par un café dans le petit salon du musée. La prochaine fois, il faut absolument que tu viennes avec moi !",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-film": {
    genre: "informal_letter",
    greeting: "Cher Rémi,",
    paragraphs: [
      "Tu cherchais une idée de film pour ce week-end : je te recommande vivement celui que j'ai vu hier soir au cinéma.",
      "C'est une comédie dramatique française qui raconte l'histoire d'une famille réunie pour un été à la campagne. Les personnages sont attachants et les dialogues sonnent vrai. J'ai ri à plusieurs reprises, mais certaines scènes m'ont aussi beaucoup émue.",
      "Ce que j'ai adoré, c'est la musique et les magnifiques images de la nature. Je pense que ce film te plaira énormément. Dis-moi ce que tu en auras pensé si tu vas le voir !",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-mariage": {
    genre: "informal_letter",
    greeting: "Chère Lucie,",
    paragraphs: [
      "Je reviens du mariage de ma cousine et je meurs d'envie de te le raconter, car c'était une journée magnifique.",
      "La cérémonie avait lieu dans un vieux domaine entouré de vignes. La mariée portait une robe très élégante et tout le monde avait les larmes aux yeux pendant les discours. Ensuite, nous avons dansé jusqu'au bout de la nuit, et le repas était vraiment délicieux.",
      "Ce qui m'a le plus touchée, c'est de voir toute la famille réunie et heureuse. Je suis rentrée fatiguée mais ravie. J'espère qu'on fêtera bientôt une belle occasion ensemble aussi !",
    ],
    closing: "Je t'embrasse,",
    signature: "Léa",
  },
  "pe2-long-salon-livre": {
    genre: "informal_letter",
    greeting: "Cher Amine,",
    paragraphs: [
      "Toi qui aimes lire, il faut que je te parle du salon du livre où je suis allée samedi.",
      "L'ambiance était formidable : des centaines de stands, des lectures publiques et des rencontres avec des auteurs. J'ai assisté à une discussion sur le roman policier, puis j'ai fait dédicacer deux livres par une écrivaine que j'admire beaucoup.",
      "Je suis repartie avec un sac plein de romans et plein d'idées de lecture. L'an prochain, il faut absolument que tu viennes avec moi. Quel est le dernier livre qui t'a marqué, toi ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-fetes": {
    genre: "informal_letter",
    greeting: "Chère Dina,",
    paragraphs: [
      "Tu me demandais comment se passent les fêtes de fin d'année chez moi, alors je te raconte avec plaisir.",
      "En décembre, toute la famille se réunit chez mes grands-parents. Nous décorons la maison, préparons de grands repas et échangeons des cadeaux le soir du réveillon. Les enfants chantent et les plus âgés racontent des histoires d'autrefois.",
      "Ce que je préfère, c'est cette atmosphère chaleureuse malgré le froid dehors. Ces moments simples me manquent beaucoup quand je suis loin. Et chez toi, comment fêtes-tu cette période de l'année ?",
    ],
    closing: "Je t'embrasse,",
    signature: "Léa",
  },
  "pe2-long-technologies": {
    genre: "informal_letter",
    greeting: "Cher Victor,",
    paragraphs: [
      "Tu voulais mon avis sur la place des technologies dans notre vie quotidienne : voici ce que j'en pense sincèrement.",
      "D'un côté, elles nous facilitent énormément la vie. Grâce à mon téléphone, je reste en contact avec ma famille lointaine, je paie mes factures et j'apprends même le français avec des applications. Tout va plus vite et plus loin qu'avant.",
      "D'un autre côté, je remarque qu'on passe parfois trop de temps devant les écrans, au détriment des vraies rencontres. J'essaie donc de déconnecter le soir et le week-end. Et toi, arrives-tu à trouver le bon équilibre ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-sportif": {
    genre: "informal_letter",
    greeting: "Cher Karim,",
    paragraphs: [
      "Tu me demandais quel sportif j'admire le plus : sans hésiter, c'est une athlète de course de fond que je suis depuis longtemps.",
      "Ce qui m'impressionne, ce n'est pas seulement ses médailles, mais son parcours. Elle vient d'un milieu modeste et s'est entraînée pendant des années malgré les blessures et les échecs. Elle reste toujours humble et encourage les jeunes de son quartier.",
      "Pour moi, elle prouve qu'avec de la persévérance on peut aller très loin. Elle m'inspire à ne jamais abandonner mes propres objectifs. Y a-t-il une personnalité qui te motive de la même façon ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-fete-musique": {
    genre: "informal_letter",
    greeting: "Chère Clara,",
    paragraphs: [
      "Je dois absolument te raconter la Fête de la musique du 21 juin, car j'ai passé une soirée merveilleuse.",
      "Toute la ville s'était transformée en scène géante : à chaque coin de rue, des groupes jouaient un style différent. J'ai écouté du rock sur une place, puis de la musique traditionnelle un peu plus loin. L'ambiance était chaleureuse et les gens dansaient partout jusque tard dans la nuit.",
      "Ce que j'aime dans cette fête, c'est qu'elle rassemble tout le monde gratuitement, petits et grands. Je suis rentrée épuisée mais le cœur léger. As-tu, toi aussi, profité de cette belle soirée ?",
    ],
    closing: "Je t'embrasse,",
    signature: "Léa",
  },
  "pe2-long-concert": {
    genre: "informal_letter",
    greeting: "Cher Noah,",
    paragraphs: [
      "Je reviens tout juste du concert dont je t'avais parlé, et je suis encore sous le charme.",
      "C'était un groupe de pop française que j'écoute depuis des années. La salle était pleine, l'énergie incroyable, et le chanteur a repris tous ses plus grands titres. Quand il a joué ma chanson préférée, toute la foule chantait avec lui, c'était un moment magique.",
      "Je suis rentrée la voix cassée mais tellement heureuse. Ce genre de soirée me rappelle pourquoi j'aime autant la musique live. La prochaine fois, viens avec moi, tu ne le regretteras pas !",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-fete-travail": {
    genre: "informal_letter",
    greeting: "Chère Sarah,",
    paragraphs: [
      "Je voulais te raconter la petite fête que nous avons organisée au travail vendredi dernier.",
      "C'était pour célébrer la fin d'un gros projet sur lequel toute l'équipe avait travaillé pendant des mois. Nous avons décoré la salle de pause, chacun a apporté un plat, et notre responsable a prononcé quelques mots de remerciement très touchants. L'ambiance était détendue et pleine de bonne humeur.",
      "Ces moments-là renforcent vraiment les liens entre collègues. On oublie le stress et on se sent une vraie équipe. Est-ce que ton entreprise organise aussi ce genre de journées ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-depart": {
    genre: "informal_letter",
    greeting: "Chère Emma,",
    paragraphs: [
      "Je t'écris avec un peu de nostalgie, car une collègue que j'appréciais beaucoup vient de quitter l'entreprise.",
      "Elle part travailler à l'étranger pour un nouveau projet passionnant. Nous avons organisé un petit pot de départ, avec un cadeau collectif et un album de photos souvenirs. Certains ont pleuré, mais nous avons surtout ri en évoquant les bons moments partagés au bureau.",
      "Même si elle va me manquer, je suis vraiment heureuse pour elle et cette belle occasion. Nous nous sommes promis de garder le contact. As-tu déjà vécu un départ aussi émouvant de ton côté ?",
    ],
    closing: "Je t'embrasse,",
    signature: "Léa",
  },
  "pe2-long-weekend": {
    genre: "informal_letter",
    greeting: "Cher Louis,",
    paragraphs: [
      "Tu voulais savoir comment s'était passé mon week-end : franchement, c'était l'un des plus beaux depuis longtemps.",
      "Samedi, je suis partie randonner en montagne avec deux amies. Le temps était magnifique et nous avons pique-niqué face à un lac de montagne. Le soir, nous avons cuisiné ensemble et joué à des jeux de société jusque tard dans la nuit.",
      "Dimanche, j'ai simplement lu et me suis reposée à la maison. Ce mélange d'aventure et de calme m'a fait un bien fou. Et toi, qu'as-tu fait de ton côté ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-nouveau-travail": {
    genre: "informal_letter",
    greeting: "Chère Fanny,",
    paragraphs: [
      "Grande nouvelle : j'ai commencé mon nouveau travail la semaine dernière et je voulais tout te raconter !",
      "Je suis désormais assistante dans une agence de voyages, en plein centre-ville. Mes collègues m'ont très bien accueillie et ma responsable prend le temps de tout m'expliquer. Le poste est varié : je réponds aux clients, prépare des devis et organise des séjours.",
      "Les premiers jours étaient un peu intimidants, mais je me sens déjà plus à l'aise. Je crois vraiment que ce travail va me plaire. On se voit bientôt pour que je te raconte tout en détail ?",
    ],
    closing: "Je t'embrasse,",
    signature: "Léa",
  },
  "pe2-long-animaux": {
    genre: "informal_letter",
    greeting: "Cher Adam,",
    paragraphs: [
      "Tu me demandais si j'aimais les animaux : oui, énormément, et j'ai justement une belle histoire à te raconter.",
      "Il y a quelques mois, j'ai adopté un chat dans un refuge. Il s'appelle Filou et il était très craintif au début. Avec de la patience et beaucoup de câlins, il est devenu affectueux et joueur. Maintenant, il m'attend chaque soir près de la porte.",
      "Sa présence rend mon quotidien plus doux, surtout après une longue journée. Je pense que les animaux nous apprennent la patience et la tendresse. As-tu, toi aussi, un compagnon à quatre pattes ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-sortie-entreprise": {
    genre: "informal_letter",
    greeting: "Chère Manon,",
    paragraphs: [
      "Je reviens de la sortie annuelle organisée par mon entreprise et j'ai passé une excellente journée.",
      "Nous sommes partis en car dans un parc naturel, à une heure de la ville. Le matin, nous avons fait une randonnée guidée, puis nous avons partagé un grand pique-nique. L'après-midi, plusieurs jeux d'équipe nous ont bien fait rire, même le directeur y a participé.",
      "Ce genre de journée permet de mieux connaître les collègues en dehors du bureau. Je suis rentrée détendue et de bonne humeur. Ton entreprise organise-t-elle aussi ce type d'événements ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-livre": {
    genre: "informal_letter",
    greeting: "Cher Samuel,",
    paragraphs: [
      "Je viens de terminer un livre formidable et je voulais absolument te le conseiller.",
      "C'est un roman qui raconte le parcours d'une jeune femme quittant son village pour étudier dans une grande ville. L'auteur décrit ses doutes et ses espoirs avec beaucoup de justesse. Je me suis parfois reconnue dans son histoire, et j'ai dévoré les dernières pages en une soirée.",
      "Ce livre m'a fait réfléchir sur le courage qu'il faut pour changer de vie. Je te le prête volontiers dès que tu veux. Qu'est-ce que tu lis en ce moment, toi ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-patron": {
    genre: "informal_letter",
    greeting: "Chère Julie,",
    paragraphs: [
      "Tu me demandais comment se passait la relation avec mon patron : je peux te dire que j'ai beaucoup de chance de ce côté-là.",
      "C'est quelqu'un d'exigeant mais toujours juste et à l'écoute. Il n'hésite pas à féliciter le travail bien fait et à donner des conseils quand quelque chose ne va pas. Lors des moments difficiles, il reste calme et cherche des solutions plutôt que des coupables.",
      "Pour moi, un bon responsable est avant tout quelqu'un qui fait confiance à son équipe. Grâce à lui, je viens travailler avec plaisir. Et toi, t'entends-tu bien avec ta hiérarchie ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },
  "pe2-long-film-classe": {
    genre: "informal_letter",
    greeting: "Cher Elias,",
    paragraphs: [
      "Je voulais te raconter le film que nous avons regardé en classe cette semaine, car il m'a beaucoup marquée.",
      "C'était un documentaire sur la protection des océans. Les images étaient magnifiques, mais aussi parfois inquiétantes, notamment celles montrant la pollution des plages. Après la projection, notre professeur a lancé une discussion et chacun a pu donner son avis.",
      "J'ai réalisé à quel point de petits gestes du quotidien peuvent faire la différence. Depuis, je fais plus attention au tri et au gaspillage. Aimerais-tu que je te dise le titre pour le regarder chez toi ?",
    ],
    closing: "À bientôt,",
    signature: "Léa",
  },

  // ── PE3 short (~145 words) — lettres formelles ─────────────────────────────
  "pe3-short-reclamation-facture": {
    genre: "formal_letter",
    objet: "Réclamation concernant la facture n° 4587",
    salutation: "Madame, Monsieur,",
    paragraphs: [
      "Je me permets de vous écrire au sujet de la facture n° 4587, datée du 3 juin, que j'ai reçue la semaine dernière. En la vérifiant attentivement, j'ai constaté une erreur dans le montant total, qui me semble bien supérieur à ma consommation habituelle.",
      "En effet, la somme réclamée s'élève à 320 francs, alors que mes factures précédentes ne dépassaient jamais 150 francs. Aucun changement n'est intervenu dans mon foyer ni dans mes habitudes, ce qui rend cette augmentation difficile à comprendre.",
      "Je vous saurais gré de bien vouloir vérifier ce relevé et de me faire parvenir une facture corrigée. Je reste bien entendu à votre disposition pour tout renseignement complémentaire.",
    ],
    closing: "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    signature: "Léa Müller",
  },
  "pe3-short-annonce-logement": {
    genre: "formal_letter",
    objet: "Demande de visite pour l'appartement de la rue du Midi",
    salutation: "Madame, Monsieur,",
    paragraphs: [
      "J'ai lu avec beaucoup d'intérêt votre annonce concernant l'appartement de deux pièces situé rue du Midi, et je souhaiterais le visiter prochainement.",
      "Je m'appelle Léa Müller, j'ai vingt-huit ans et je travaille comme assistante dans une agence de voyages. Je vis seule et je cherche un logement calme, proche des transports publics. Le montant du loyer indiqué correspond tout à fait à mon budget.",
      "Seriez-vous disponible pour une visite en fin de journée cette semaine ou samedi matin ? Je vous remercie de me communiquer vos disponibilités ainsi que la liste des documents à fournir pour le dossier.",
    ],
    closing: "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    signature: "Léa Müller",
  },
  "pe3-short-refus-invitation": {
    genre: "formal_letter",
    objet: "Réponse à votre invitation du 15 mai",
    salutation: "Madame, Monsieur,",
    paragraphs: [
      "Je vous remercie chaleureusement de votre invitation à la soirée d'inauguration organisée le 15 mai. C'est un honneur d'avoir été conviée à cet événement.",
      "Malheureusement, je suis au regret de ne pouvoir y assister. Je serai en déplacement professionnel à l'étranger à cette date, un voyage prévu de longue date qu'il m'est impossible de reporter.",
      "Je tenais toutefois à vous adresser tous mes vœux de réussite pour cette manifestation. Je serais très heureuse de participer à une prochaine occasion et vous prie de m'excuser pour cette absence.",
    ],
    closing: "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    signature: "Léa Müller",
  },
  "pe3-short-proposition-activite": {
    genre: "formal_letter",
    objet: "Proposition d'une nouvelle activité au sein de l'association",
    salutation: "Madame, Monsieur,",
    paragraphs: [
      "Membre de votre association depuis deux ans, je me permets de vous soumettre une idée qui pourrait, je l'espère, intéresser nos adhérents.",
      "Je propose la mise en place d'un atelier mensuel de conversation en français, destiné aux personnes récemment arrivées dans la région. Cet atelier favoriserait les échanges, l'entraide et l'intégration, tout en renforçant les liens entre les membres de l'association.",
      "Je serais ravie de coordonner ce projet et d'en discuter avec vous lors d'une prochaine réunion. Je reste à votre disposition pour vous présenter le déroulement envisagé plus en détail.",
    ],
    closing: "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    signature: "Léa Müller",
  },
  "pe3-short-demande-remboursement": {
    genre: "formal_letter",
    objet: "Demande de remboursement d'un article défectueux",
    salutation: "Madame, Monsieur,",
    paragraphs: [
      "Le 10 avril, j'ai acheté dans votre magasin une cafetière électrique de marque Bellavita, au prix de 89 francs. Malheureusement, l'appareil a cessé de fonctionner après seulement une semaine d'utilisation.",
      "J'ai suivi toutes les instructions du mode d'emploi et vérifié le branchement, sans résultat. L'appareil étant sous garantie, je considère qu'il ne présentait pas la qualité que l'on pouvait légitimement en attendre.",
      "Je vous demande donc de bien vouloir procéder au remboursement de cet achat, ou à son échange contre un appareil identique en bon état. Vous trouverez ci-joint la copie du ticket de caisse et de la garantie.",
    ],
    closing: "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    signature: "Léa Müller",
  },
  "pe3-short-reagir-information": {
    genre: "formal_letter",
    objet: "Réaction à votre article sur la fermeture de la bibliothèque",
    salutation: "Madame, Monsieur,",
    paragraphs: [
      "J'ai lu dans votre journal l'annonce de la possible fermeture de la bibliothèque municipale, et je souhaite vous faire part de mon inquiétude.",
      "Cette bibliothèque n'est pas un simple lieu de prêt : c'est un espace de rencontre et d'apprentissage pour les enfants, les étudiants et les personnes isolées. Chaque semaine, j'y accompagne mon neveu à l'heure du conte, un moment qu'il attend avec impatience.",
      "Je souhaite que la commune reconsidère cette décision et cherche d'autres solutions, par exemple une réduction des horaires plutôt qu'une fermeture définitive. Je vous remercie de relayer la voix des habitants attachés à ce lieu.",
    ],
    closing: "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    signature: "Léa Müller",
  },

  // ── PE3 long (~190 words) ──────────────────────────────────────────────────
  "pe3-cybersecurite-banque": {
    genre: "formal_letter",
    objet: "Signalement d'une tentative de fraude et demande de sécurisation de mon compte",
    salutation: "Madame, Monsieur,",
    paragraphs: [
      "Je me permets de vous contacter au sujet d'un incident préoccupant survenu sur mon compte bancaire n° CH93 0000 1234 5678. Hier matin, j'ai reçu un courriel imitant votre logo et me demandant de confirmer mes identifiants sur un lien externe.",
      "Ayant eu un doute, je n'ai heureusement pas répondu à ce message, mais j'ai constaté peu après une tentative de connexion refusée sur mon compte en ligne. Je crains d'être la cible d'une tentative de hameçonnage, et je souhaite protéger mes économies au plus vite.",
      "Je vous demande donc de vérifier les dernières opérations effectuées sur mon compte et de bloquer, par précaution, tout accès suspect. Je souhaiterais également que vous m'aidiez à renouveler mes codes d'accès et à activer une double authentification par téléphone.",
      "Pouvez-vous me préciser la marche à suivre et les documents nécessaires ? Je vous remercie de traiter ce dossier avec la plus grande diligence, tant la sécurité de mes données me préoccupe.",
    ],
    closing: "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    signature: "Léa Müller",
  },
  "pe3-abonnement-remboursement": {
    genre: "formal_letter",
    objet: "Résiliation d'abonnement et demande de remboursement",
    salutation: "Madame, Monsieur,",
    paragraphs: [
      "Je suis abonnée à votre salle de sport depuis le mois de janvier, sous le numéro de client 7742. Je vous écris aujourd'hui pour vous informer de ma décision de résilier cet abonnement et pour vous demander le remboursement des mois non utilisés.",
      "En effet, à la suite d'un déménagement dans une autre région, il m'est désormais impossible de me rendre dans votre établissement. Mon contrat prévoyant une résiliation possible en cas de changement de domicile, je remplis, me semble-t-il, toutes les conditions requises.",
      "J'ai réglé l'abonnement annuel en une seule fois, et il me reste sept mois non consommés. Je vous demande donc de bien vouloir me rembourser la somme correspondante, comme le prévoient vos conditions générales.",
      "Vous trouverez ci-joint une attestation de mon nouveau domicile. Je vous remercie de me confirmer la prise en compte de ma demande et de m'indiquer le délai de remboursement.",
    ],
    closing: "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    signature: "Léa Müller",
  },
  "pe3-trottoir-dangereux": {
    genre: "formal_letter",
    objet: "Signalement d'un trottoir dangereux, avenue des Alpes",
    salutation: "Madame, Monsieur,",
    paragraphs: [
      "Habitante du quartier des Alpes, je souhaite attirer votre attention sur l'état préoccupant du trottoir situé le long de l'avenue du même nom, à hauteur du numéro 24.",
      "Depuis plusieurs semaines, le revêtement s'est fortement dégradé : de larges fissures et des dalles descellées rendent la circulation à pied particulièrement risquée. La situation est encore plus difficile pour les personnes âgées, les parents avec poussette et les enfants qui empruntent ce chemin pour aller à l'école.",
      "J'ai moi-même failli tomber la semaine dernière, et j'ai vu une voisine se tordre la cheville au même endroit. Le soir, le manque d'éclairage aggrave encore le danger.",
      "Je vous demande de bien vouloir faire constater ces dégradations et de programmer une réparation dans les meilleurs délais. Je reste à votre disposition pour vous indiquer précisément les zones concernées.",
    ],
    closing: "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    signature: "Léa Müller",
  },
  "pe3-recette-message-court": {
    genre: "recipe",
    title: "Gâteau au yaourt facile",
    paragraphs: [
      "Voici la recette du gâteau au yaourt que tu m'as demandée. C'est un grand classique, rapide à préparer, parfait pour un goûter improvisé avec les enfants. On utilise le pot de yaourt vide comme mesure, ce qui rend tout très simple.",
      "Pour les ingrédients, il te faut : un pot de yaourt nature, deux pots de sucre, trois pots de farine, un demi-pot d'huile, trois œufs, un sachet de levure et un peu de vanille. Tu peux ajouter des morceaux de pomme ou des pépites de chocolat selon ton envie.",
      "Pour la préparation, mélange d'abord le yaourt, le sucre et les œufs, puis ajoute la farine, la levure et l'huile jusqu'à obtenir une pâte lisse. Verse le tout dans un moule beurré et enfourne à 180 degrés pendant environ trente minutes. Le gâteau est prêt lorsqu'un couteau planté au centre ressort bien sec.",
    ],
    signature: "Léa",
  },
  "pe3-refuser-presidence": {
    genre: "formal_letter",
    objet: "Réponse à votre proposition de présidence de l'association",
    salutation: "Madame, Monsieur,",
    paragraphs: [
      "Je tiens tout d'abord à vous remercier très sincèrement de la confiance que vous m'accordez en me proposant la présidence de notre association pour l'année à venir. C'est un honneur que je mesure pleinement.",
      "Après mûre réflexion, je suis toutefois au regret de décliner cette responsabilité. Mon activité professionnelle s'est beaucoup intensifiée ces derniers mois, et je ne pourrais pas m'investir autant que cette fonction l'exige. Or je considère qu'une présidence mérite une présence sérieuse et régulière.",
      "Je ne souhaite en aucun cas me désengager de la vie de l'association. Je serais heureuse de continuer à participer aux activités et d'aider ponctuellement le futur président, notamment pour l'organisation des événements.",
      "Je vous remercie de votre compréhension et vous assure de mon soutien pour trouver un candidat disponible et motivé. Je reste à votre disposition pour en discuter.",
    ],
    closing: "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    signature: "Léa Müller",
  },
  "pe3-retrouver-nounou": {
    genre: "friendly_letter",
    greeting: "Chère Madame Rossi,",
    paragraphs: [
      "Vous ne vous attendez sûrement pas à recevoir cette lettre après tant d'années ! Je suis Léa, la petite fille que vous avez gardée pendant toute mon enfance, avenue des Tilleuls. En retrouvant une vieille photo, j'ai eu envie de reprendre contact avec vous.",
      "Je garde des souvenirs merveilleux de ces années passées auprès de vous. Je me rappelle les gâteaux que nous faisions le mercredi, les promenades au parc et les histoires que vous me lisiez le soir. Vous avez compté énormément dans ma vie, et je crois que je ne vous l'ai jamais assez dit.",
      "Aujourd'hui, j'ai vingt-huit ans, je travaille dans une agence de voyages et j'habite toujours dans la région. J'aimerais beaucoup vous revoir pour prendre de vos nouvelles et vous remercier de vive voix.",
      "Si l'idée vous fait plaisir, je serais ravie de vous rendre visite ou de vous inviter à prendre le thé. J'espère de tout cœur que vous allez bien.",
    ],
    closing: "Avec toute mon affection,",
    signature: "Léa",
  },
  "pe3-rencontre-homonymes": {
    genre: "narrative",
    title: "Une rencontre entre homonymes",
    paragraphs: [
      "Tout a commencé par une simple erreur de courrier. Un jour, j'ai reçu dans ma boîte aux lettres une invitation destinée à une autre Léa Müller, qui vivait, par hasard, dans la même rue que moi. Intriguée, j'ai décidé de la lui apporter en personne.",
      "En sonnant à sa porte, je m'attendais à tout sauf à me retrouver face à une femme de mon âge, portant exactement le même nom que moi. Nous avons d'abord ri de la coïncidence, puis elle m'a invitée à entrer pour un café.",
      "Au fil de la conversation, nous avons découvert d'étonnants points communs : la même passion pour la lecture, le même métier dans le tourisme, et même une grand-mère venue de la même région. C'était troublant et amusant à la fois, comme de rencontrer une version parallèle de soi-même.",
      "Depuis ce jour, nous nous appelons « l'autre Léa » et nous sommes devenues de véritables amies. Cette rencontre m'a appris qu'un hasard minuscule peut parfois ouvrir une belle histoire.",
    ],
  },
  "pe3-jardin-ephemere": {
    genre: "article",
    title: "Un jardin éphémère au cœur de la ville",
    paragraphs: [
      "Le temps d'un été, une place autrefois grise et bétonnée du centre-ville s'est transformée en un véritable jardin. Fleurs, plantes aromatiques et petits arbres en pot ont remplacé les voitures, pour le plus grand bonheur des passants.",
      "L'idée, portée par un collectif d'habitants et soutenue par la commune, était simple : montrer qu'un espace public peut redevenir un lieu de vie et de nature. En quelques semaines, les bancs se sont remplis, les enfants ont joué entre les massifs, et des voisins qui ne se connaissaient pas ont commencé à discuter.",
      "Ce jardin éphémère joue aussi un rôle écologique. Il rafraîchit l'air pendant les fortes chaleurs, attire les abeilles et sensibilise chacun à l'importance de la végétation en ville.",
      "Bien sûr, l'installation sera démontée à l'automne. Mais elle laisse une trace : de plus en plus d'habitants réclament désormais des espaces verts permanents. Et si ces jardins temporaires étaient, tout simplement, les villes de demain ?",
    ],
  },
  "pe3-compte-rendu-voyage": {
    genre: "report",
    title: "Compte rendu du voyage scolaire à Berne",
    meta: "Date : 14 mai 2026 · Participants : 24 élèves et 3 accompagnants",
    paragraphs: [
      "Le voyage d'étude à Berne s'est déroulé le 14 mai, dans de bonnes conditions et sans incident. Le groupe est parti de la gare à 7 h 30 et est rentré à 18 h 15, conformément au programme prévu.",
      "La matinée a été consacrée à la visite du Palais fédéral. Une guide a présenté le fonctionnement des institutions suisses, puis les élèves ont pu assister à une brève séance publique. Cette activité a particulièrement retenu leur attention et suscité de nombreuses questions.",
      "L'après-midi, le groupe a découvert la vieille ville et la fosse aux ours, avant un temps libre encadré. Le pique-nique a eu lieu dans le parc au bord de l'Aar, sous un beau soleil.",
      "Dans l'ensemble, la journée a atteint ses objectifs pédagogiques. Les élèves se sont montrés ponctuels et respectueux. Une seule remarque : prévoir à l'avenir un temps plus long pour le repas de midi.",
    ],
    signature: "Léa Müller, secrétaire de classe",
  },
  "pe3-soiree-association": {
    genre: "report",
    title: "Compte rendu de la soirée annuelle de l'association",
    meta: "Date : 22 mars 2026 · Lieu : salle communale · Environ 80 participants",
    paragraphs: [
      "La soirée annuelle de l'association s'est tenue le 22 mars dans la salle communale, en présence d'environ quatre-vingts membres et invités. L'accueil a débuté à 18 h avec un apéritif de bienvenue.",
      "La présidente a d'abord présenté le bilan de l'année écoulée, en soulignant la hausse du nombre d'adhérents et le succès des ateliers du mercredi. Le trésorier a ensuite exposé les comptes, qui ont été approuvés à l'unanimité.",
      "La deuxième partie de la soirée était festive. Un repas partagé a réuni les participants autour de plats apportés par chacun, suivi d'un concert donné par un groupe local. L'ambiance a été chaleureuse et conviviale.",
      "La soirée s'est achevée vers 23 h. Les retours des participants ont été très positifs. Il est proposé de reconduire ce format l'an prochain, en prévoyant davantage de tables pour améliorer le confort de tous.",
    ],
    signature: "Léa Müller, secrétaire",
  },
  "pe3-vente-mangues": {
    genre: "informal_email",
    greeting: "Bonjour à toutes et à tous,",
    paragraphs: [
      "Comme chaque année à cette saison, ma famille reçoit une grande quantité de mangues venues directement du verger de mes cousins, dans mon pays d'origine. Elles sont mûres, parfumées et cultivées sans produits chimiques.",
      "J'ai pensé que cela pourrait vous intéresser : je propose de les vendre à un prix tout doux, cinq francs le kilo, afin d'en faire profiter mes collègues. Vous pourrez les goûter nature, en salade de fruits ou même dans des plats salés.",
      "Si vous êtes tentés, il vous suffit de m'indiquer la quantité souhaitée avant vendredi. Je passerai commande ce week-end et je vous apporterai vos mangues au bureau la semaine prochaine.",
      "N'hésitez pas à venir me voir si vous avez des questions. Je me réjouis de partager avec vous ce petit goût d'ailleurs !",
    ],
    closing: "À très bientôt,",
    signature: "Léa",
  },
  "pe3-premiere-journee-travail": {
    genre: "narrative",
    title: "Ma première journée de travail",
    paragraphs: [
      "Ce matin-là, je me suis réveillée bien avant la sonnerie du réveil, le cœur battant. C'était le grand jour : ma première journée dans l'agence de voyages où je venais d'être engagée. J'ai relu mille fois le trajet pour être sûre d'arriver à l'heure.",
      "En poussant la porte, j'ai été accueillie par un large sourire de ma nouvelle responsable. Elle m'a présenté l'équipe, chacun m'a serré la main avec bienveillance, et l'on m'a montré mon bureau, déjà prêt avec un petit mot de bienvenue.",
      "La matinée est passée à toute vitesse. J'ai observé mes collègues répondre aux clients, pris des notes et posé beaucoup de questions. J'avais peur de me tromper, mais on m'a répété qu'il était normal de tout apprendre progressivement.",
      "Le soir, en rentrant chez moi, j'étais fatiguée mais rayonnante. Cette première journée avait dissipé toutes mes craintes : j'avais trouvé une équipe accueillante et un travail qui me plaisait déjà.",
    ],
  },
  "pe3-spectacle-chevaux": {
    genre: "article",
    title: "Quand les chevaux entrent en scène",
    paragraphs: [
      "Samedi soir, le grand chapiteau installé aux abords de la ville affichait complet pour un spectacle équestre pas comme les autres. Sous les projecteurs, cavaliers et chevaux ont offert au public un moment d'une rare élégance.",
      "Dès les premières minutes, le silence s'est installé. Les chevaux évoluaient au rythme de la musique, tantôt majestueux, tantôt joueurs, sans mors ni contrainte visible. On sentait entre l'animal et son cavalier une complicité construite au fil de longues heures d'entraînement.",
      "Le spectacle mêlait acrobaties, jeux de lumière et tableaux poétiques. Les enfants ouvraient de grands yeux émerveillés, tandis que les adultes applaudissaient à tout rompre chaque numéro.",
      "Au-delà de la performance, ce spectacle rappelle le lien ancien qui unit l'homme et le cheval, fait de respect et de patience. En sortant, beaucoup de spectateurs se promettaient déjà de revenir l'an prochain. Une soirée magique, à ne pas manquer.",
    ],
  },
  "pe3-nettoyage-plage": {
    genre: "report",
    title: "Compte rendu de la journée de nettoyage de la plage",
    meta: "Date : 6 juin 2026 · Lieu : plage des Grangettes · 45 bénévoles",
    paragraphs: [
      "La journée de nettoyage de la plage des Grangettes s'est déroulée le 6 juin, de 9 h à 13 h, en présence de quarante-cinq bénévoles de tous âges. L'action était organisée par l'association locale de protection de la nature.",
      "Après un bref accueil et la distribution de gants et de sacs, les participants ont été répartis en petits groupes sur différentes zones. Chaque équipe s'est vu confier un secteur précis afin de couvrir l'ensemble du littoral.",
      "En quatre heures, plus de cent kilos de déchets ont été ramassés, principalement des plastiques, des mégots et des emballages abandonnés. Les objets ont ensuite été triés en vue du recyclage.",
      "La matinée s'est terminée par un pique-nique convivial offert aux bénévoles. L'opération a été un succès, tant par la quantité collectée que par la sensibilisation du public. Une nouvelle édition est envisagée à l'automne.",
    ],
    signature: "Léa Müller, secrétaire",
  },
  "pe3-assemblee-immeuble": {
    genre: "report",
    title: "Procès-verbal de l'assemblée des habitants de l'immeuble",
    meta: "Date : 18 avril 2026 · Lieu : hall d'entrée · 12 appartements représentés",
    paragraphs: [
      "L'assemblée des habitants de l'immeuble s'est réunie le 18 avril à 19 h dans le hall d'entrée. Douze appartements sur quinze étaient représentés, ce qui permettait de délibérer valablement.",
      "Le premier point concernait l'entretien des parties communes. Il a été décidé, à la majorité, d'engager une entreprise pour le nettoyage mensuel des escaliers, la répartition des frais se faisant selon les surfaces.",
      "Le deuxième point portait sur le tri des déchets. Plusieurs habitants ont signalé un manque de conteneurs. L'assemblée a chargé la gérance de demander un bac supplémentaire à la commune.",
      "Enfin, la question du bruit en soirée a été abordée. Un rappel des horaires de tranquillité sera affiché dans le hall. La séance s'est terminée à 20 h 30 dans une ambiance constructive. La prochaine réunion est fixée à l'automne.",
    ],
    signature: "Léa Müller, secrétaire de séance",
  },
  "pe3-volontariat-formation": {
    genre: "formal_letter",
    objet: "Candidature pour un engagement bénévole et demande de formation",
    salutation: "Madame, Monsieur,",
    paragraphs: [
      "Ayant découvert les activités de votre organisation en faveur des personnes âgées, je me permets de vous proposer ma candidature comme bénévole pour la saison à venir.",
      "Je dispose de temps libre en fin de semaine et je souhaite le mettre au service des autres. J'aime le contact humain et je pense pouvoir aider utilement, que ce soit pour accompagner des sorties, animer des après-midis ou tenir compagnie à des personnes isolées.",
      "Consciente de l'importance de bien faire, je serais toutefois heureuse de suivre au préalable une formation d'initiation. Proposez-vous une préparation aux gestes de premiers secours et à l'accompagnement des personnes fragiles ?",
      "Je serais ravie de vous rencontrer pour vous présenter mes motivations et connaître vos besoins concrets. Je vous remercie par avance de l'attention portée à ma demande et reste à votre disposition.",
    ],
    closing: "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    signature: "Léa Müller",
  },
  "pe3-conflit-classe": {
    genre: "formal_letter",
    objet: "Difficultés rencontrées par mon fils au sein de sa classe",
    salutation: "Madame,",
    paragraphs: [
      "Je me permets de vous écrire au sujet de mon fils Nathan, élève de votre classe, qui traverse depuis quelques semaines une période difficile à l'école.",
      "À la maison, il se montre inquiet le dimanche soir et évoque des moqueries répétées de la part de certains camarades pendant les récréations. Ce climat commence à peser sur son moral, sur son sommeil et, peu à peu, sur ses résultats.",
      "Je ne cherche nullement à accuser qui que ce soit, mais je souhaiterais comprendre la situation et, surtout, trouver avec vous des solutions. Vous connaissez la dynamique du groupe bien mieux que moi et votre regard me serait précieux.",
      "Seriez-vous disponible pour un entretien dans les prochains jours ? Je suis convaincue qu'un dialogue entre l'école et la famille aidera Nathan à retrouver la sérénité. Je vous remercie de votre écoute.",
    ],
    closing: "Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.",
    signature: "Léa Müller",
  },
  "pe3-vente-muguet": {
    genre: "report",
    title: "Compte rendu de la vente de muguet du 1er mai",
    meta: "Date : 1er mai 2026 · Lieu : place du Marché · 15 bénévoles",
    paragraphs: [
      "La traditionnelle vente de muguet organisée au profit de l'association s'est tenue le 1er mai sur la place du Marché, de 8 h à 13 h. Quinze bénévoles se sont relayés sur trois stands installés dès l'aube.",
      "Les brins et les petits pots avaient été préparés la veille par une équipe de volontaires. Grâce à un temps clément, l'affluence a été importante tout au long de la matinée, notamment aux heures du marché.",
      "Au total, plus de trois cents brins ont été vendus, permettant de récolter environ neuf cents francs. Cette somme sera intégralement reversée au financement des activités destinées aux enfants.",
      "L'opération a été un beau succès, tant sur le plan financier qu'humain. Les bénévoles ont apprécié l'ambiance chaleureuse. Pour l'an prochain, il est suggéré de prévoir davantage de pots et un stand supplémentaire près de l'église.",
    ],
    signature: "Léa Müller, secrétaire",
  },

  // ── PE3 long — articles (~190 words) ───────────────────────────────────────
  "pe3-article-galanterie": {
    genre: "article",
    title: "La galanterie a-t-elle encore sa place aujourd'hui ?",
    paragraphs: [
      "Tenir la porte, offrir des fleurs, laisser passer devant soi : longtemps considérés comme des marques de savoir-vivre, ces gestes suscitent aujourd'hui des débats. La galanterie est-elle une belle attention ou un vestige d'un autre temps ?",
      "Pour ses défenseurs, ces petites attentions expriment simplement le respect et la politesse. Elles adouciraient les relations et rappelleraient que la courtoisie n'a rien de démodé. Après tout, un geste aimable fait toujours plaisir, quel que soit celui qui le reçoit.",
      "Ses détracteurs, eux, y voient parfois une forme dépassée qui enferme chacun dans un rôle. Ils préfèrent parler de respect mutuel : pourquoi réserver ces attentions à une seule personne, alors qu'elles pourraient s'adresser à tous ?",
      "Au fond, le débat cache peut-être une évidence. Ce qui compte, ce n'est pas le geste lui-même, mais l'intention sincère qui l'accompagne. Une porte tenue pour n'importe qui, par simple gentillesse, restera toujours un beau signe d'attention envers autrui.",
    ],
  },
  "pe3-article-retraite": {
    genre: "article",
    title: "La retraite : une fin ou un nouveau départ ?",
    paragraphs: [
      "Longtemps rêvée comme un repos bien mérité, la retraite est parfois vécue comme une rupture difficile. Après des années rythmées par le travail, comment aborder ce grand changement de vie sereinement ?",
      "Pour beaucoup, la retraite est enfin le temps de la liberté. On peut voyager, s'adonner à ses passions, s'occuper de ses petits-enfants ou s'engager dans une association. Libérés des contraintes professionnelles, certains retraités disent n'avoir jamais été aussi actifs.",
      "Pourtant, ce passage n'est pas toujours facile. Perdre le contact quotidien avec ses collègues, voir ses journées se vider soudain, peut provoquer un sentiment d'inutilité. Le lien social, si présent au travail, doit alors se reconstruire ailleurs.",
      "La clé se trouve sans doute dans l'anticipation. Préparer sa retraite, cultiver des centres d'intérêt et entretenir des liens permet de transformer cette étape en véritable renaissance. Loin d'être une fin, elle peut devenir le début d'une vie plus libre et plus riche.",
    ],
  },
  "pe3-article-livre": {
    genre: "article",
    title: "Le livre a-t-il encore un avenir ?",
    paragraphs: [
      "À l'heure des écrans et des vidéos courtes, certains prédisent la disparition du livre. Pourtant, année après année, les librairies restent fréquentées et les salons littéraires font le plein. Le livre résiste, et c'est tant mieux.",
      "Lire, c'est bien plus que s'informer. C'est s'offrir un moment de calme, développer son imagination et se glisser dans la peau d'autres personnes. Aucune image toute faite ne remplace le décor qu'un lecteur construit lui-même à partir des mots.",
      "Bien sûr, les habitudes changent. Le livre numérique séduit les voyageurs, les livres audio accompagnent les trajets, et les réseaux sociaux voient naître de véritables communautés de passionnés. Loin de tuer la lecture, ces outils la rendent parfois plus accessible.",
      "Le papier, lui, garde ses fidèles, attachés à l'odeur des pages et au plaisir de tourner un livre entre ses mains. Sous des formes nouvelles ou anciennes, la lecture a donc encore de belles pages devant elle.",
    ],
  },
  "pe3-parcours-professionnel": {
    genre: "article",
    title: "Faut-il craindre de changer de métier ?",
    paragraphs: [
      "Le temps où l'on faisait toute sa carrière dans la même entreprise semble révolu. Aujourd'hui, changer de métier au cours de sa vie est devenu courant, mais cette perspective inquiète encore beaucoup de gens.",
      "Un changement de voie effraie, car il suppose de quitter une sécurité pour un avenir incertain. Reprendre une formation, accepter un salaire d'abord plus bas, se retrouver débutant à quarante ans : autant d'obstacles qui font hésiter.",
      "Pourtant, ces reconversions apportent souvent un nouveau souffle. Nombreux sont ceux qui, après une carrière subie, retrouvent le plaisir de travailler en suivant enfin une vraie passion. Les compétences acquises auparavant ne sont jamais perdues : elles enrichissent le nouveau parcours.",
      "Un parcours professionnel n'est donc plus une ligne droite, mais un chemin fait de virages. Oser le changement demande du courage, mais il vaut souvent mieux tenter et apprendre que passer sa vie à regretter de ne pas avoir essayé.",
    ],
  },
  "pe3-poubelles-ville": {
    genre: "article",
    title: "Nos villes croulent-elles sous les déchets ?",
    paragraphs: [
      "Trottoirs encombrés, poubelles débordantes, sacs abandonnés au pied des conteneurs : dans de nombreuses villes, la propreté est devenue un sujet de préoccupation quotidien. Comment expliquer cette situation, et surtout, comment en sortir ?",
      "La première cause est notre mode de vie. Nous consommons toujours plus, et les emballages s'accumulent à une vitesse impressionnante. Les services de propreté, malgré leurs efforts, peinent parfois à suivre ce rythme, notamment les jours de marché ou de forte affluence.",
      "Mais la responsabilité est aussi individuelle. Un mégot jeté à terre, un déchet abandonné par facilité : additionnés, ces petits gestes transforment l'espace public en dépotoir. Le respect de la ville commence par chacun d'entre nous.",
      "Des solutions existent : multiplier les poubelles de tri, sensibiliser dès l'école et encourager le recyclage. Une ville propre n'est pas seulement plus agréable à vivre, elle est aussi le reflet d'une population qui prend soin de son cadre commun.",
    ],
  },
  "pe3-parking-ecriture": {
    genre: "article",
    title: "Et si l'on rendait les parkings aux habitants ?",
    paragraphs: [
      "Dans plusieurs villes, une idée surprenante fait son chemin : transformer, le temps d'une journée, des places de parking en petits espaces publics. Sur quelques mètres carrés, une voiture cède sa place à des bancs, des plantes ou une table de lecture.",
      "Le principe est simple mais fort de sens. Il rappelle combien d'espace la voiture occupe en ville, souvent au détriment des piétons. En occupant temporairement ces places, habitants et associations proposent une autre vision de l'espace partagé.",
      "Ces installations deviennent vite des lieux de rencontre. On y discute, on y lit, les enfants y jouent, et des voisins qui ne se croisaient jamais engagent la conversation. L'espace, un instant libéré, retrouve une dimension humaine.",
      "Bien sûr, personne ne propose de supprimer tous les parkings. Mais ces expériences invitent à réfléchir : dans la ville de demain, ne pourrait-on pas laisser un peu plus de place à la vie, et un peu moins au bitume ?",
    ],
  },
  "pe3-concours-eloquence": {
    genre: "article",
    title: "Le retour en grâce de l'art de bien parler",
    paragraphs: [
      "Longtemps réservés à quelques écoles prestigieuses, les concours d'éloquence connaissent aujourd'hui un véritable engouement. Un peu partout, des jeunes montent sur scène pour défendre une idée, émouvoir ou faire rire un public conquis.",
      "Prendre la parole en public reste pourtant l'une des peurs les plus répandues. C'est justement là que réside l'intérêt de ces concours : ils apprennent à dominer son trac, à structurer sa pensée et à choisir ses mots avec soin.",
      "Au-delà de la performance, l'éloquence est une compétence précieuse dans la vie. Savoir s'exprimer clairement aide lors d'un entretien, d'une réunion ou d'un simple débat entre amis. C'est aussi une manière de se faire entendre et de défendre ses convictions.",
      "Ces concours rappellent enfin que la parole peut rassembler plutôt que diviser. Dans un monde saturé de messages rapides, prendre le temps de bien dire les choses redevient un art. Et cet art, heureusement, s'apprend et se cultive.",
    ],
  },
  "pe3-repas-transport": {
    genre: "article",
    title: "Manger dans les transports : pratique ou incivilité ?",
    paragraphs: [
      "Un sandwich avalé dans le train, un café bu dans le bus, une salade englouties entre deux stations : manger dans les transports en commun est devenu un réflexe pour beaucoup de voyageurs pressés. Mais cette habitude fait débat.",
      "Pour ceux qui la pratiquent, il s'agit d'une simple question de temps. Entre le travail, les trajets et la vie de famille, le repas devient un moment que l'on grignote où l'on peut. Le transport offre alors une pause bienvenue pour se nourrir.",
      "D'autres voyageurs, en revanche, s'en agacent. Les odeurs de nourriture, les miettes laissées sur les sièges et parfois le bruit dérangent le confort de tous. Dans un espace partagé, le comportement de chacun a des conséquences sur les autres.",
      "La solution tient sans doute dans un peu de bon sens et de discrétion. Rien n'interdit un en-cas rapide, à condition de rester propre et respectueux de son voisinage. Le savoir-vivre, en somme, voyage aussi avec nous.",
    ],
  },
  "pe3-ceremonies-demesurees": {
    genre: "article",
    title: "Mariages et fêtes : la course à la démesure",
    paragraphs: [
      "Salles somptueuses, centaines d'invités, robes de luxe et budgets vertigineux : les cérémonies familiales ressemblent de plus en plus à des spectacles. Cette course à la démesure interroge sur le sens réel de la fête.",
      "Certains y voient une belle manière de marquer les grands moments de la vie. Réunir toute une famille, offrir un souvenir inoubliable, exprimer sa joie sans compter : après tout, une fête ne se vit qu'une fois et mérite qu'on la soigne.",
      "Mais cette surenchère a un revers. Beaucoup de familles s'endettent pour tenir leur rang ou impressionner leur entourage. La pression sociale transforme parfois un jour de bonheur en source de stress et de dépenses excessives.",
      "Peut-être faudrait-il redonner à ces célébrations leur véritable valeur. Ce qui rend une fête mémorable, ce n'est pas son coût, mais la sincérité des émotions partagées. Une cérémonie simple, entourée de ceux qu'on aime, vaut souvent tous les décors du monde.",
    ],
  },
  "pe3-memoires-biographie": {
    genre: "article",
    title: "Écrire ses mémoires : à qui la parole ?",
    paragraphs: [
      "Autrefois réservée aux personnages célèbres, l'écriture de mémoires séduit aujourd'hui de plus en plus d'anonymes. Chacun semble vouloir laisser une trace, raconter sa vie et transmettre son histoire aux générations suivantes.",
      "Cette envie se comprend aisément. Coucher ses souvenirs sur le papier permet de faire le point sur son parcours, de comprendre les grandes étapes de sa vie et de rendre hommage à ceux qui l'ont marquée. C'est aussi un précieux héritage pour ses enfants et petits-enfants.",
      "Certains font appel à des « biographes » qui recueillent leurs récits et les mettent en forme. Cette pratique, en plein essor, montre à quel point chaque vie ordinaire renferme des histoires extraordinaires, dignes d'être conservées.",
      "Au fond, écrire ses mémoires, c'est affirmer que toute existence compte. Nul besoin d'être célèbre pour avoir quelque chose à transmettre. Le souvenir d'une époque, d'un métier disparu ou d'un amour vécu est un trésor que les mots peuvent sauver de l'oubli.",
    ],
  },
  "pe3-apprentissage-francais": {
    genre: "article",
    title: "Apprendre le français : un défi qui rapproche",
    paragraphs: [
      "Chaque année, des milliers de personnes venues du monde entier se lancent dans l'apprentissage du français. Derrière la grammaire et le vocabulaire, c'est bien plus qu'une langue qu'elles découvrent : une culture et une nouvelle façon d'exister.",
      "Apprendre une langue à l'âge adulte n'est pas simple. Il faut oser parler malgré les erreurs, accepter de ne pas tout comprendre et persévérer face au découragement. Chaque petit progrès, pourtant, procure une immense satisfaction.",
      "Mais l'effort est largement récompensé. Maîtriser le français ouvre les portes du travail, facilite les démarches quotidiennes et permet surtout de nouer de vraies relations. Une simple conversation avec un voisin devient soudain possible, et parfois le début d'une amitié.",
      "La langue est ainsi un formidable outil d'intégration. Elle ne se contente pas de relier des mots : elle relie des personnes. Chaque nouvel apprenant, en s'accrochant à ce défi, tisse un lien de plus avec le pays qui l'accueille.",
    ],
  },
  "pe3-job-dating": {
    genre: "article",
    title: "Le « job dating » va-t-il remplacer l'entretien classique ?",
    paragraphs: [
      "Quelques minutes pour convaincre un employeur : c'est le principe du « job dating », ces rencontres express entre recruteurs et candidats. Inspirée des rendez-vous amoureux rapides, cette méthode séduit de plus en plus d'entreprises.",
      "Ses avantages sont réels. En une matinée, un candidat peut rencontrer plusieurs recruteurs, et une entreprise voir de nombreux profils. L'échange, court et direct, mise sur le contact humain plutôt que sur un long dossier de candidature.",
      "Mais ce format a ses limites. En si peu de temps, difficile de mesurer les vraies compétences d'une personne ou sa capacité à s'intégrer dans une équipe. Le risque est de privilégier l'aisance à l'oral au détriment du sérieux et de l'expérience.",
      "Le job dating ne remplacera donc sans doute pas l'entretien approfondi, mais il en devient un utile complément. Pour les candidats, il reste un excellent entraînement : apprendre à se présenter clairement, en quelques phrases, est un atout précieux dans toute recherche d'emploi.",
    ],
  },
  "pe3-journees-internationales": {
    genre: "article",
    title: "Ces journées internationales servent-elles à quelque chose ?",
    paragraphs: [
      "Journée de la femme, de l'environnement, du sommeil ou du bonheur : le calendrier déborde de journées internationales. Face à cette multiplication, certains s'interrogent : ces dates ont-elles encore un réel impact ?",
      "Leur utilité première est d'attirer l'attention. Le temps d'une journée, les médias, les écoles et les associations se penchent sur un sujet trop souvent ignoré le reste de l'année. C'est l'occasion d'informer, de débattre et de rappeler des causes importantes.",
      "Mais la critique est fréquente. À force de tout célébrer, ne finit-on pas par banaliser ces messages ? Une journée symbolique ne suffit pas à changer les mentalités si elle n'est suivie d'aucune action concrète durant les autres jours.",
      "Ces journées valent donc surtout par ce qu'on en fait. Simple opération de communication pour les uns, véritable point de départ pour les autres, elles ne sont utiles que si elles éveillent les consciences et poussent, ensuite, à agir vraiment.",
    ],
  },
  "pe3-souvenir-enfance": {
    genre: "narrative",
    title: "Un souvenir d'enfance",
    paragraphs: [
      "Il y a des souvenirs qui ne s'effacent jamais. Le mien remonte aux étés passés chez ma grand-mère, dans une petite maison entourée d'un grand jardin, à la campagne. Rien que d'y penser, je retrouve l'odeur des tomates chaudes et le chant des grillons.",
      "Chaque matin, je courais l'aider à ramasser les légumes et à nourrir les poules. Elle me racontait des histoires de son enfance à elle, et je l'écoutais, fasciné, en croquant dans un fruit cueilli à l'instant.",
      "L'après-midi, je construisais des cabanes avec les enfants du village. Nous rentrions au coucher du soleil, les genoux écorchés mais le cœur léger. Le soir, sur la terrasse, ma grand-mère m'apprenait à reconnaître les étoiles.",
      "Aujourd'hui, cette maison n'existe plus, mais ce souvenir reste intact en moi. Il me rappelle un temps où le bonheur tenait dans des choses toutes simples. C'est peut-être cela, au fond, que l'enfance nous laisse de plus précieux.",
    ],
  },
  "pe3-dictature-minceur": {
    genre: "article",
    title: "La dictature de la minceur",
    paragraphs: [
      "Sur les affiches, les écrans et les réseaux sociaux, un même modèle s'impose : celui du corps mince et parfait. Cette obsession de la minceur, présentée comme un idéal, exerce une pression grandissante, en particulier sur les plus jeunes.",
      "Le problème est que cet idéal est souvent irréaliste. Les images sont retouchées, les corps sélectionnés, et la réalité passe au second plan. À force de comparaison, beaucoup de personnes finissent par ne plus s'accepter telles qu'elles sont.",
      "Les conséquences peuvent être graves. Régimes dangereux, perte de confiance en soi, parfois véritables troubles alimentaires : la quête du corps parfait fait, chaque année, de nombreuses victimes silencieuses, chez les femmes comme chez les hommes.",
      "Il est temps de changer de regard. La santé et le bien-être ne se mesurent pas à un tour de taille. Célébrer la diversité des corps, c'est offrir à chacun le droit de se sentir bien dans sa peau, loin des diktats de la mode.",
    ],
  },
  "pe3-menage-bien-etre": {
    genre: "article",
    title: "Faire le ménage, une source de bien-être ?",
    paragraphs: [
      "Longtemps considéré comme une corvée, le ménage est aujourd'hui présenté par certains comme une activité bénéfique pour le moral. Ranger, nettoyer, trier : et si ces gestes du quotidien nous faisaient réellement du bien ?",
      "Un intérieur ordonné apaise l'esprit. Dans un espace clair et propre, on se concentre mieux, on se détend plus facilement et l'on se sent maître de son environnement. Le désordre extérieur, à l'inverse, reflète souvent une certaine agitation intérieure.",
      "Le ménage a aussi des vertus insoupçonnées. Il occupe le corps, libère la tête et procure une satisfaction immédiate : le résultat est visible aussitôt. Certains en font même un rituel apaisant, accompagné de musique, pour évacuer le stress de la journée.",
      "Attention toutefois à ne pas tomber dans l'excès. La propreté ne doit pas devenir une obsession. Bien dosé, l'entretien de son logement peut cependant se transformer en un vrai moment pour soi, entre effort utile et satisfaction personnelle.",
    ],
  },
  "pe3-cetait-mieux-avant": {
    genre: "article",
    title: "« C'était mieux avant » : vraiment ?",
    paragraphs: [
      "« De mon temps, tout était plus simple », entend-on souvent. Cette petite phrase, répétée de génération en génération, oppose un passé idéalisé à un présent jugé décevant. Mais avait-on vraiment une vie meilleure autrefois ?",
      "Il est vrai que certaines choses semblent s'être perdues : le rythme plus lent, les liens de voisinage, le plaisir des rencontres sans écran. Beaucoup regrettent une époque où l'on prenait, dit-on, davantage le temps de vivre.",
      "Pourtant, ce regard oublie l'essentiel. La médecine a fait des progrès immenses, le confort s'est amélioré, l'accès au savoir et aux voyages n'a jamais été aussi large. Nos aînés, eux, ont connu des difficultés que nous n'imaginons même plus.",
      "La nostalgie embellit toujours le passé et noircit le présent. Plutôt que d'opposer les époques, mieux vaudrait garder le meilleur d'hier tout en profitant des chances d'aujourd'hui. Car chaque temps a ses ombres et ses lumières.",
    ],
  },
  "pe3-double-culture": {
    genre: "article",
    title: "Vivre entre deux cultures : richesse ou déchirement ?",
    paragraphs: [
      "De plus en plus de personnes grandissent entre deux pays, deux langues, deux traditions. Cette double culture est parfois vécue comme un tiraillement, mais elle constitue le plus souvent une véritable richesse.",
      "Le défi est réel. Il faut trouver sa place entre des habitudes différentes, répondre à la question « d'où viens-tu vraiment ? » et parfois avoir le sentiment de n'appartenir tout à fait à aucun des deux mondes. Ce sentiment peut être déstabilisant, surtout à l'adolescence.",
      "Mais quel privilège, aussi ! Parler plusieurs langues, connaître deux cuisines, deux façons de voir la vie : les personnes de double culture développent une ouverture d'esprit et une capacité d'adaptation précieuses dans le monde d'aujourd'hui.",
      "Loin d'être une faiblesse, cette double appartenance est un pont entre les peuples. Ceux qui la portent apprennent que l'identité n'est pas une case unique, mais une belle mosaïque. Et cette mosaïque, souvent, fait leur force.",
    ],
  },
  "pe3-sel-de-la-vie": {
    genre: "article",
    title: "Le sel de la vie",
    paragraphs: [
      "On court sans cesse après le bonheur, le cherchant dans les grands événements et les réussites éclatantes. Pourtant, ce qui donne vraiment de la saveur à l'existence se cache souvent dans les détails les plus simples du quotidien.",
      "Un café partagé au soleil, un fou rire entre amis, l'odeur du pain frais le matin : voilà de petits plaisirs que l'on oublie de savourer. Ce sont eux, pourtant, qui composent la trame de nos journées et rendent la vie douce.",
      "Le rythme effréné de notre époque nous en éloigne. Toujours pressés, nous passons à côté de ces instants, l'esprit déjà occupé par la tâche suivante. À trop viser l'avenir, on oublie de goûter le présent.",
      "Apprendre à ralentir, à regarder et à s'émerveiller de peu, voilà peut-être un art précieux. Le sel de la vie ne s'achète pas : il se cueille, jour après jour, dans ces petits bonheurs qui ne demandent qu'à être remarqués.",
    ],
  },
  "pe3-carnets-velo": {
    genre: "narrative",
    title: "Carnets de voyage à vélo",
    paragraphs: [
      "L'été dernier, j'ai réalisé un vieux rêve : partir plusieurs jours à vélo, sacoches chargées, sans autre programme que celui de suivre les petites routes. Chaque soir, je notais mes impressions dans un carnet devenu, peu à peu, le journal de mon voyage.",
      "Les premiers kilomètres furent difficiles. Les montées éprouvaient mes jambes et le poids des bagages me ralentissait. Mais très vite, un autre rythme s'est installé, plus lent, plus attentif au paysage, aux odeurs de forêt et au chant des oiseaux.",
      "À vélo, on rencontre les gens autrement. Un paysan m'a offert des fruits, une famille m'a indiqué un raccourci, et j'ai partagé un repas avec d'autres cyclistes croisés au bord d'un lac. Ces échanges valaient tous les hôtels du monde.",
      "En rentrant, mes carnets étaient pleins de croquis et de souvenirs. Ce voyage m'a appris que le bonheur n'est pas au bout de la route, mais dans chaque tour de roue. Je repartirai, c'est certain.",
    ],
  },
};

export default SAMPLES;
