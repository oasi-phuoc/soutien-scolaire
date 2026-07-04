/**
 * Extends PE sample answers to meet minWordsFor() thresholds in ProductionEcriteRunner.
 * Run: node scripts/extend-pe-sample-answers.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET = path.join(__dirname, "../lib/curriculum/content/communication/pe-sample-answers.ts");

function minForKey(key) {
  if (key.startsWith("pe1-short-")) return 40;
  if (key.startsWith("pe1-long-")) return 60;
  if (key.startsWith("pe2-reply-")) return 60;
  if (key.startsWith("pe2-long-")) return 100;
  if (key.startsWith("pe3-short-")) return 120;
  if (key.startsWith("pe3-")) return 160;
  return null;
}

function wordCount(text) {
  return text.trim() ? text.trim().split(/\s+/u).filter(Boolean).length : 0;
}

function parseAnswers(content) {
  const answers = {};
  const re = /"([^"]+)":\s*\n\s*"((?:[^"\\]|\\.)*)"/gs;
  let m;
  while ((m = re.exec(content)) !== null) {
    const key = m[1];
    if (!key.startsWith("pe")) continue;
    answers[key] = m[2].replace(/\\n/g, "\n");
  }
  return answers;
}

const CLOSINGS = [
  "Je vous prie",
  "Cordialement,",
  "Amicalement,",
  "Bises,",
  "Bisous,",
  "À bientôt,",
  "À samedi,",
  "À tout à l'heure !",
  "Bien à toi,",
  "Prends soin de toi,",
  "Chaleureusement,",
];

function insertExtension(text, ext) {
  if (!ext) return text;
  ext = ext.trim().replace(/^\n+/, "");

  // Formal letters: insert before "Je vous prie..."
  const formalIdx = text.search(/\n\nJe vous prie/);
  if (formalIdx !== -1) {
    return text.slice(0, formalIdx) + "\n\n" + ext + text.slice(formalIdx);
  }

  const lines = text.split("\n");
  const lastLine = lines[lines.length - 1]?.trim() ?? "";
  if (lastLine === "Léa" || lastLine === "Léa Müller") {
    const sig = lines.pop() ?? "";
    let closing = "";
    if (lines.length > 0) {
      const prev = lines[lines.length - 1].trim();
      if (CLOSINGS.some((c) => prev === c || prev.startsWith(c))) {
        closing = lines.pop() ?? "";
      }
    }
    const body = lines.join("\n");
    const bodyLines = body.split("\n");
    const lastBodyLine = bodyLines[bodyLines.length - 1] ?? "";
    const inlineClosing = lastBodyLine.match(
      /^(.*)\s(Amicalement,|Cordialement,|Bises,|Bisous,|À bientôt,|À samedi,)\s*$/u
    );
    if (inlineClosing) {
      bodyLines.pop();
      const main = bodyLines.join("\n");
      const lead = inlineClosing[1].trim();
      const close = inlineClosing[2];
      return `${main}\n${lead}\n\n${ext}\n${close}\n${sig}`;
    }
    if (closing) {
      return `${body}\n\n${ext}\n${closing}\n${sig}`;
    }
    return `${body}\n\n${ext}\n${sig}`;
  }

  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i].trim();
    if (CLOSINGS.some((c) => line === c || line.startsWith(c))) {
      const before = lines.slice(0, i).join("\n");
      const after = lines.slice(i).join("\n");
      return before + "\n\n" + ext + "\n" + after;
    }
  }

  return text.trimEnd() + "\n\n" + ext;
}

function textKind(key, text) {
  if (key.startsWith("pe2-long-")) return "narrative";
  if (key.startsWith("pe3-") && !key.startsWith("pe3-short-")) {
    const articleKeys = [
      "article-", "memoires", "poubelles", "parking", "concours", "repas-transport",
      "ceremonies", "apprentissage", "job-dating", "journees", "dictature", "menage",
      "cetait-mieux", "double-culture", "sel-de-la", "carnets-velo", "souvenir-enfance",
      "parcours-professionnel",
    ];
    if (articleKeys.some((p) => key.includes(p))) return "article";
    if (text.includes("Madame, Monsieur") || text.includes("Je vous prie")) return "formal";
    if (text.startsWith("Objet :") || text.startsWith("Cher ") || text.startsWith("Chers ")) return "letter";
    return "report";
  }
  if (text.includes("Madame, Monsieur") || text.includes("Je vous prie")) return "formal";
  return "informal";
}

/** Additional text inserted before the closing salutation. */
const EXTENSIONS = {
  "pe1-short-fete":
    "Est-ce qu'il faut apporter quelque chose d'autre en plus ? J'ai hâte de vous revoir tous.",
  "pe1-short-vacances":
    "Nous prenons aussi des glaces au bord de l'eau le soir. Raconte-moi tes nouvelles !",
  "pe1-short-anniversaire":
    "Il y aura de la musique et des jeux dans le jardin. Confirme-moi ta venue, s'il te plaît.",
  "pe1-short-art":
    "On dessine surtout des paysages et des portraits. Le professeur est patient et très gentil.",
  "pe1-short-loisirs":
    "Le samedi, je fais parfois du vélo avec mon frère. Et toi, tu lis souvent ?",
  "pe1-short-travail":
    "Le trajet en bus dure vingt minutes. L'ambiance au bureau est calme et agréable.",

  "pe1-long-fete":
    "J'espère qu'il y aura beaucoup de monde. Dis-moi aussi si je peux arriver un peu en avance pour t'aider à préparer.",
  "pe1-long-carte-postale":
    "Demain, nous prévoyons une promenade dans les vignobles. Le paysage est magnifique en cette saison.",
  "pe1-long-voeux":
    "J'espère que cette nouvelle année t'apportera beaucoup de joie et de belles surprises.",
  "pe1-long-anniversaire":
    "Nous préparerons aussi des jeux pour les enfants. N'hésite pas à venir accompagné si tu le souhaites.",
  "pe1-long-ecole-art":
    "Les professeurs expliquent bien et donnent de bons conseils. J'aimerais un jour exposer mes tableaux.",
  "pe1-long-correspondant":
    "J'habite à Sion, près des montagnes. J'ai un chat qui s'appelle Minou. Et toi, où habites-tu ?",
  "pe1-long-montreal":
    "Nous avons aussi écouté de la musique dans un petit café du quartier latin. C'était une belle soirée.",
  "pe1-long-premier-jour":
    "Les autres élèves viennent de plusieurs pays et c'est très intéressant. Je vais continuer à m'entraîner chaque jour.",

  "pe2-reply-concert":
    "J'aimerais aussi savoir si nous pouvons dîner ensemble avant le spectacle. Dis-moi ce qui t'arrange.",
  "pe2-reply-nouvel-an":
    "Dis-moi aussi comment organiser le transport et si je dois prévoir un cadeau pour les hôtes.",
  "pe2-reply-weekend-montagne":
    "Dis-moi aussi quelles affaires je dois emporter et si nous dormons sur place ou si nous rentrons le soir.",
  "pe2-reply-repas-breton":
    "J'ai hâte de découvrir les spécialités bretonnes et de passer un bon moment avec vous tous.",
  "pe2-reply-voisin-anniversaire":
    "Dis-moi aussi si d'autres voisins viennent et si je peux arriver un peu en avance pour t'aider.",
  "pe2-reply-fete-lumieres":
    "J'ai entendu dire que les illuminations sont magnifiques cette année. J'ai vraiment hâte d'y être.",
  "pe2-reply-sortie-enfants":
    "Je peux aussi préparer des collations pour les enfants si c'est utile. Merci de me confirmer les détails.",
  "pe2-reply-fete-retraite":
    "Je peux aussi aider à décorer la salle et à accueillir les invités à l'entrée si tu as besoin.",
  "pe2-reply-anniversaire-mariage":
    "Je vous enverrai un petit mot et une carte pour l'occasion. Profitez bien de cette belle célébration en famille.",
  "pe2-reply-match-foot":
    "Dis-moi aussi quels matchs sont prévus le week-end prochain et à quelle heure commence la rencontre.",
  "pe2-reply-shopping":
    "On pourrait aussi aller voir le nouveau film au cinéma si tu es libre dimanche après-midi.",
  "pe2-reply-mariage":
    "Je t'enverrai un petit cadeau par la poste pour féliciter ta sœur. J'espère que la fête sera magnifique.",
  "pe2-reply-diner-reussite":
    "Je suis fière de toi et j'aimerais beaucoup célébrer ta réussite autrement, par exemple autour d'un café.",
  "pe2-reply-velo":
    "Dis-moi aussi quel film tu aimerais voir et si tu préfères la séance de l'après-midi ou du soir.",
  "pe2-reply-spectacle":
    "Je pourrais peut-être aider le jour du spectacle, par exemple à l'accueil ou à la billetterie.",
  "pe2-reply-theatre":
    "Dis-moi quelle pièce tu aimerais voir le mois prochain et si tu connais déjà une bonne salle à Sion.",
  "pe2-reply-weekend-nora":
    "Et toi, qu'as-tu fait d'autre ce week-end ? J'espère qu'on pourra se voir bientôt pour en discuter.",
  "pe2-reply-permis":
    "Dis-moi aussi quand tu commences à conduire seule et si tu as déjà choisi une assurance automobile.",
  "pe2-reply-logement":
    "Le quartier est calme et il y a une boulangerie à deux minutes. Viens me voir quand tu veux !",
  "pe2-reply-nouveau-travail":
    "Dis-moi aussi où se trouve ton nouveau bureau et si tu as déjà rencontré ton responsable direct.",
  "pe2-reply-voyage-florian":
    "Envoie-moi des photos pendant ton voyage et raconte-moi tes meilleures découvertes à ton retour.",
  "pe2-reply-cadeau":
    "Je l'utilise déjà pour prendre des notes en cours. J'espère qu'on pourra se voir bientôt.",
  "pe2-reply-vacances-simon":
    "Nous avons aussi fait une petite randonnée près du lac. Raconte-moi en détail ce que tu as visité.",
  "pe2-reply-universite":
    "As-tu déjà rencontré de nouveaux amis sur le campus ? Moi, je prépare un petit voyage en Valais.",

  "pe2-long-passion":
    "Récemment, j'ai participé à une petite exposition locale où trois de mes photos ont été sélectionnées. Clara et moi prévoyons aussi un album pour documenter nos sorties dans les Alpes. La photographie m'aide à mieux observer les détails du quotidien et à garder des souvenirs précieux.",
  "pe2-long-instrument":
    "Mon professeur me conseille de jouer lentement au début pour bien placer les accords. J'aimerais un jour accompagner ma mère quand elle chante le soir. Apprendre la guitare demande de la patience, mais chaque petite progression me donne confiance.",
  "pe2-long-mer":
    "Le matin, nous nous levions tôt pour regarder le lever du soleil sur la mer. Le soir, nous marchions sur la promenade en écoutant les vagues. J'ai rapporté des coquillages pour ma petite sœur. Ce voyage m'a permis de me détendre complètement.",
  "pe2-long-voyage":
    "Nous avons aussi pris le tramway jaune pour admirer la ville depuis les hauteurs. Les azulejos des façades et les musiques de rue créaient une atmosphère unique. J'ai pris beaucoup de photos et goûté des spécialités locales. Je conseille ce voyage à tous ceux qui aiment découvrir de nouvelles cultures.",
  "pe2-long-pays-origine":
    "Nous pourrions aussi visiter les montagnes de l'Atlas et dormir une nuit dans un riad traditionnel. Le climat est agréable au printemps et les marchés sont très animés. J'organiserai le programme et les visites si tu confirmes tes dates.",
  "pe2-long-sport":
    "Au début, je nageais seulement vingt minutes, mais maintenant je fais quarante longueurs sans m'arrêter. Le coach m'a appris à mieux respirer et à garder une bonne posture dans l'eau. Après la séance, je me sens détendue et plus concentrée au travail.",
  "pe2-long-musee":
    "Nous avons terminé la visite par la section des arts décoratifs et une pause au café du musée. Ma sœur a acheté un livre sur les impressionnistes et j'ai noté les dates des prochaines expositions. Ce genre de sortie culturelle me plaît beaucoup.",
  "pe2-long-film":
    "La musique du film est aussi très belle et les dialogues mêlent humour et tendresse. J'ai vu ce film au cinéma avec des amis et nous avons longtemps discuté après la séance. C'est une histoire qui donne envie de voir le meilleur chez les autres.",
  "pe2-long-mariage":
    "Les invités étaient vêtus de tenues colorées et les enfants dansaient aussi dans la cour. Nous avons pris beaucoup de photos et goûté des pâtisseries au miel. L'ambiance familiale était chaleureuse du début à la fin.",
  "pe2-long-salon-livre":
    "J'ai aussi assisté à une table ronde sur la littérature jeunesse et échangé avec d'autres lecteurs passionnés. Sophie a découvert un auteur suisse qu'elle ne connaissait pas. Nous prévoyons d'y retourner l'année prochaine.",
  "pe2-long-fetes":
    "Le soir, nous avons chanté des chants traditionnels autour du sapin et échangé des cadeaux modestes. Ma famille d'accueil m'a expliqué les coutumes locales et m'a fait sentir vraiment accueilli. Ces moments resteront parmi mes plus beaux souvenirs en Suisse.",
  "pe2-long-technologies":
    "J'ai aussi testé une application qui traduit en temps réel et un drone miniature pour prises de vue. Les conférences sur l'éthique de l'intelligence artificielle étaient très intéressantes. Je te recommande vivement ce salon si tu aimes la technologie.",
  "pe2-long-sportif":
    "Federer m'a parlé de l'importance de l'entraînement régulier et du respect des adversaires. Nous avons pris une photo ensemble que j'ai encadrée chez moi. Cette journée exceptionnelle m'a motivé à continuer le sport avec sérieux.",
  "pe2-long-fete-musique":
    "Des familles pique-niquaient sur l'herbe et les enfants dansaient au rythme de la musique. J'y suis allée avec deux amies et nous sommes restées jusqu'à la fin. C'était une soirée simple, joyeuse et pleine de bonne humeur.",
  "pe2-long-concert":
    "Le public chantait en chœur et l'énergie dans la salle était incroyable. Nous avons attendu un peu après le concert pour voir Stromae saluer les fans. C'était la première fois que j'assistais à un spectacle aussi grand.",
  "pe2-long-fete-travail":
    "Le directeur a remercié l'équipe pour les projets réussis cette année et nous avons partagé un dessert ensemble. J'ai pu discuter avec des collègues que je ne connaissais pas bien. Ce genre de moment renforce vraiment l'esprit d'équipe.",
  "pe2-long-depart":
    "Plusieurs personnes m'ont écrit des messages gentils dans un livre d'or que je garde précieusement. J'ai promis de revenir les voir et de prendre des nouvelles régulièrement. Quitter cette équipe n'était pas facile, mais la fête était belle.",
  "pe2-long-weekend":
    "Le samedi soir, nous avons préparé une fondue et regardé un film ensemble. Le dimanche matin, nous avons fait une petite promenade au bord de la rivière. Ce week-end m'a permis de déconnecter du travail.",
  "pe2-long-nouveau-travail":
    "Mon responsable m'a présenté les outils informatiques et les procédures de sécurité dès le premier jour. Les pauses café sont conviviales et les collègues répondent volontiers à mes questions. Je me sens déjà intégrée dans l'équipe.",
  "pe2-long-animaux":
    "Certains animaux arrivent très stressés, mais avec de la patience, ils retrouvent confiance en l'humain. L'association cherche aussi des familles d'accueil temporaires. Ce bénévolat me donne beaucoup de satisfaction.",
  "pe2-long-sortie-entreprise":
    "Le moniteur nous a expliqué les consignes de sécurité et nous avons pagayé ensemble dans les rapides. Après l'activité, nous avons partagé des photos et ri de nos petites chutes dans l'eau. C'était une excellente façon de renforcer les liens entre collègues.",
  "pe2-long-livre":
    "J'ai lu ce livre pour la première fois à l'école et je le relis encore aujourd'hui. Les illustrations originales ajoutent une dimension poétique à l'histoire. Je te le prête volontiers si tu veux le découvrir.",
  "pe2-long-patron":
    "Il organise une réunion courte chaque lundi pour planifier la semaine et écouter les remarques de l'équipe. Quand un projet est urgent, il reste disponible sans crier ni mettre de pression inutile. Travailler avec lui est formateur.",
  "pe2-long-film-classe":
    "Nous l'avons étudié en classe et notre professeur nous a expliqué le contexte historique de l'histoire. Le film montre comment l'humour peut exister même dans des situations tragiques. C'est un classique que je recommande à tous.",

  "pe3-short-reclamation-facture":
    "Je n'ai pas souscrit à d'autres services et je n'ai pas voyagé à l'étranger ce mois-ci. Je joins une copie de mes factures des trois derniers mois pour comparaison. Merci de me répondre sous quinze jours et de corriger le montant si une erreur a été constatée.",
  "pe3-short-annonce-logement":
    "Je cherche un logement calme pour vivre seule et je peux fournir des références de mon ancien propriétaire ainsi qu'une attestation de salaire. Je suis non-fumeuse et je n'ai pas d'animal. Merci de me proposer un créneau de visite et de m'indiquer le montant exact du loyer charges comprises.",
  "pe3-short-refus-invitation":
    "Je regrette sincèrement de manquer cet échange important avec les membres de l'association. Si une réunion de rattrapage est organisée, je serais disponible la semaine suivante en fin d'après-midi. Merci également de m'indiquer les décisions principales qui seront prises.",
  "pe3-short-proposition-activite":
    "Cette activité permettrait de renforcer la cohésion de l'équipe dans une ambiance détendue, en dehors du cadre habituel du bureau. Nous pourrions réserver pour un vendredi après-midi et terminer par un apéritif. Merci de me faire part de vos disponibilités et de votre accord pour que je contacte le prestataire.",
  "pe3-short-demande-remboursement":
    "Je m'étais organisée pour assister à cette séance et j'ai déjà réglé les frais de transport. Conformément à vos conditions générales, je sollicite un remboursement sous trente jours sur le compte utilisé lors du paiement. Merci de me confirmer par écrit la suite réservée à mon dossier.",
  "pe3-short-reagir-information":
    "Je me rends régulièrement à la bibliothèque municipale pour emprunter des ouvrages de révision et je ne dispose pas d'assez de matériel chez moi. Pourriez-vous m'indiquer la date prévue de réouverture et les services alternatifs disponibles d'ici là ? Je vous remercie par avance pour votre réponse rapide.",

  "pe3-cybersecurite-banque":
    "Il faut aussi se méfier des appels suspects où une voix enregistrée demande des codes secrets. Change régulièrement ton mot de passe et active l'authentification à deux facteurs sur ton compte. Si tu as déjà cliqué par erreur, préviens immédiatement ta banque et fais opposition sur tes cartes. La prudence en ligne est aussi importante que verrouiller sa porte le soir.",
  "pe3-abonnement-remboursement":
    "Je vous prie également de confirmer par écrit la prise en compte de ma demande et de m'indiquer le délai de traitement du remboursement. En l'absence de réponse sous trente jours, je me réserverai le droit de saisir le médiateur des abonnements. Merci de vérifier mon dossier avec le service comptable.",
  "pe3-trottoir-dangereux":
    "Plusieurs voisins m'ont confié avoir déjà trébuché à cet endroit, notamment par temps de pluie. Je joins deux photographies prises le 12 juin pour illustrer l'état du sol. Une signalisation temporaire serait utile en attendant les réparations définitives. Merci de me tenir informée de la date d'intervention prévue.",
  "pe3-recette-message-court":
    "Pour six personnes, comptez 250 g de couscous, trois tomates bien mûres, un concombre, un bouquet de menthe et le jus de deux citrons. Rincez le couscous, versez l'eau bouillante salée, couvrez et laissez gonfler dix minutes. Ajoutez ensuite les légumes coupés finement et assaisonnez généreusement. Ce plat se conserve bien une nuit au réfrigérateur et accompagne parfaitement une viande grillée ou des brochettes. Vous pouvez aussi ajouter des pois chiches pour plus de texture.",
  "pe3-refuser-presidence":
    "Je tiens à vous assurer de ma reconnaissance envers le club et de ma volonté de continuer à y participer activement. Je pourrais par exemple coordonner l'accueil des équipes visiteuses ou gérer la communication sur les réseaux sociaux. N'hésitez pas à me solliciter pour toute autre mission compatible avec mon emploi du temps actuel.",
  "pe3-retrouver-nounou":
    "Nous avons souvent repensé à toi et aux belles après-midis au parc. Adam apprend le piano et il parle déjà très bien français et albanais. Ma famille et moi allons bien, nous habitons toujours à Sion. Si tu passes un jour en Suisse, ce serait un vrai bonheur de te revoir autour d'un café.",
  "pe3-rencontre-homonymes":
    "L'idée serait d'échanger sur nos parcours, nos métiers et la curiosité de porter un nom assez courant dans la région. Chacun pourrait apporter une photo ou un objet qui raconte son histoire personnelle. Si vous êtes intéressés, merci de confirmer votre présence par courriel afin que je puisse réserver une table suffisamment grande.",
  "pe3-jardin-ephemere":
    "Nous pourrions solliciter des dons de plants auprès des pépinières locales et organiser des ateliers pour les enfants du quartier. Un comité de bénévoles se charge déjà de rédiger un petit plan et un budget prévisionnel très modeste. Ce projet pourrait aussi réduire les dégradations en occupant positivement l'espace. Je reste disponible pour présenter le dossier lors de la prochaine séance communale.",
  "pe3-compte-rendu-voyage":
    "Nous avons voyagé en train depuis Paris et loué des vélos pour explorer la côte. Les journées étaient longues mais chaque soir nous dégustions un dessert local dans un petit restaurant. Nous avons aussi visité un marché aux poissons et acheté des souvenirs artisanaux. Le climat était variable, avec du vent sur la côte, mais cela faisait partie du charme breton. Je recommande cette destination à tous ceux qui aiment la mer et l'histoire.",
  "pe3-soiree-association":
    "Plusieurs artistes locaux ont présenté leurs œuvres et le public a pu poser des questions en fin de présentation. Le trésorier a annoncé que les comptes étaient équilibrés malgré l'augmentation des frais de location. Nous avons aussi élu deux nouveaux membres au comité. J'espère que tu pourras participer à la prochaine édition. La soirée s'est terminée tard, dans une ambiance chaleureuse.",
  "pe3-vente-mangues":
    "Chaque équipe comptera deux vendeurs et une personne chargée de la caisse. Nous avons également prévu des affiches pour annoncer l'opération dans les commerces du quartier. Le bénéfice servira à financer la sortie annuelle du club. Merci à tous les bénévoles pour leur engagement.",
  "pe3-premiere-journee-travail":
    "À midi, les collègues m'ont invitée à déjeuner au café d'en face et m'ont expliqué les habitudes de l'équipe. L'après-midi, j'ai commencé à classer des dossiers et à répondre à quelques courriels simples. En rentrant chez moi, je me suis sentie fatiguée mais heureuse d'avoir franchi cette étape. Demain, je rencontrerai le service informatique pour configurer mon ordinateur. Ce premier jour restera une étape importante.",
  "pe3-spectacle-chevaux":
    "Avant le spectacle, nous avons visité les écuries et pris un verre sur la place. Les enfants étaient fascinés par les chevaux blancs et les costumes brillants. La musique mêlait des airs classiques et des rythmes modernes. Si tu viens la prochaine fois, prévois un pull car il fait frais en soirée dans l'arène. L'ambiance était vraiment magique du début à la fin.",
  "pe3-nettoyage-plage":
    "Nous avons aussi sensibilisé les promeneurs en distribuant de petits flyers sur la protection des lacs. Plusieurs familles se sont jointes à nous spontanément en voyant notre action. Pour la prochaine journée, nous prévoyons d'inviter une classe de l'école primaire voisine. L'objectif est de réduire durablement les déchets laissés sur les rives.",
  "pe3-assemblee-immeuble":
    "Le syndic a rappelé les règles concernant le bruit après 22 h et le tri des déchets dans les caves. Une discussion a aussi porté sur l'entretien des parties communes et la répartition des charges exceptionnelles. Si tu n'as pas pu venir, je peux te transmettre le procès-verbal complet par courriel. N'hésite pas à me poser tes questions. Les travaux débuteront probablement à l'automne.",
  "pe3-volontariat-formation":
    "Les apprenants viennent de milieux variés : certains reprennent des études tardivement, d'autres préparent un certificat professionnel. J'ai remarqué que beaucoup manquent de confiance à l'oral, ce qui confirme l'utilité de nos échanges. Le coordinateur m'a proposé de former un nouveau bénévole le mois prochain. Je suis contente d'avoir trouvé une mission qui a du sens pour moi.",
  "pe3-conflit-classe":
    "Les parents ont exprimé leur inquiétude et demandé un suivi régulier des élèves concernés. Il a été convenu de sensibiliser toute la classe aux dangers du harcèlement en ligne et d'organiser un atelier avec un intervenant extérieur. Un registre des incidents sera tenu par le conseiller d'éducation. Nous espérons rétablir un climat de respect dans le groupe.",
  "pe3-vente-muguet":
    "La journée a été ensoleillée et nous avons vendu toute notre récolte avant 16 h. Les passants étaient nombreux, surtout près de la gare et du marché. Nous remercions la commune pour l'autorisation d'occuper les emplacements. L'argent récolté sera présenté en assemblée générale le 15 mai.",
  "pe3-article-galanterie":
    "J'ai aussi interrogé trois hommes qui expliquaient agir par politesse, sans intention de domination. D'autres personnes estiment que ces gestes appartiennent à une autre époque. Le débat reste ouvert, mais tout le monde s'accorde sur la nécessité d'écouter l'autre. Peut-être faut-il simplement demander avant d'agir.",
  "pe3-article-retraite":
    "Gérard a prononcé un discours émouvant dans lequel il a remercié ses collaborateurs et évoqué ses projets de voyages. Plusieurs anciens collègues sont venus spécialement pour l'occasion. La soirée s'est terminée par un apéritif convivial sur la terrasse. Nous lui souhaitons une retraite active et pleine de découvertes.",
  "pe3-article-livre":
    "Camus décrit avec précision le détachement de son personnage face aux conventions sociales. Le roman pose des questions profondes sur la justice, la liberté et le sens de la vie. J'ai particulièrement aimé le chapitre sur la plage, symbole de solitude et de révélation. Ce livre se lit vite mais invite à longues réflexions.",
  "pe3-parcours-professionnel":
    "À son retour en Valais, il a ouvert une première boutique puis développé une gamme de pâtisseries sans gluten. Il emploie aujourd'hui quinze personnes et forme régulièrement des apprentis. Lors d'une conférence à l'école professionnelle, il a encouragé les jeunes à oser l'entrepreneuriat. Son exemple montre qu'avec du travail et de la curiosité, on peut transformer une passion en métier.",
  "pe3-poubelles-ville":
    "Dans d'autres villes, des campagnes de sensibilisation ont accompagné ce type de mesure avec des résultats mitigés. Les commerçants pourraient aussi participer en acceptant de récupérer les emballages de leurs clients. Les écoles ont un rôle à jouer pour éduquer les plus jeunes. Avant toute décision, une consultation publique me semble indispensable pour entendre les habitants.",
  "pe3-parking-ecriture":
    "Chaque panneau présente une écriture différente avec une courte explication historique et géographique. Les enfants s'amusent à reconnaître les lettres qu'ils connaissent déjà à l'école. Cette initiative pourrait aussi inclure des QR codes menant vers des enregistrements audio. Un projet culturel de ce type valorise un espace souvent perçu comme monotone.",
  "pe3-concours-eloquence":
    "Les inscriptions sont ouvertes jusqu'au 30 avril et les répétitions seront encadrées par un professeur de rhétorique. Le public sera invité à voter pour le prix du public en plus du jury officiel. L'objectif est de donner confiance aux jeunes et de valoriser l'expression orale. Je compte m'inscrire et préparer un discours sur la protection de l'environnement.",
  "pe3-repas-transport":
    "Sur un vol de Genève à Lisbonne, j'ai reçu un sandwich sec et une barre chocolatée sans goût. Pourtant, pour le même prix, une boulangerie de quartier propose un repas frais et local. Les compagnies pourraient s'inspirer des trains suisses qui proposent parfois de bons plateaux régionaux. En attendant, je continue de préparer mon propre pique-nique avant d'embarquer.",
  "pe3-ceremonies-demesurees":
    "Les réseaux sociaux amplifient encore ce phénomène en diffusant des images en direct. Certains proches souhaitent célébrer une vie accomplie, d'autres se sentent envahis par l'exposition médiatique. Il serait peut-être souhaitable de fixer des règles éthiques pour ces retransmissions. Le deuil mérite du temps et de l'intimité, loin des caméras.",
  "pe3-memoires-biographie":
    "Écrire permet aussi de structurer ses souvenirs et de donner du sens à des événements douloureux. Certains auteurs avouent avoir retrouvé la paix intérieure en racontant leur histoire. Les mémoires ne sont pas réservés aux célébrités : chaque vie ordinaire mérite d'être racontée. Je tiens moi-même un journal depuis plusieurs années.",
  "pe3-apprentissage-francais":
    "Au début, je n'osais pas parler de peur de faire des erreurs, mais mes professeurs m'ont encouragée. Regarder des séries en version française avec sous-titres m'a beaucoup aidée pour l'oreille. Aujourd'hui, je peux tenir une conversation et comprendre la presse locale. Je continue à noter les mots nouveaux dans un carnet.",
  "pe3-job-dating":
    "Lors du dernier événement à Sion, j'ai rencontré six employeurs en une matinée et obtenu deux entretiens approfondis. Il faut préparer une courte présentation et apporter plusieurs CV. Le stress est réel, mais l'expérience apprend à se présenter clairement. Je conseille d'arriver en avance et de s'entraîner avec un ami.",
  "pe3-journees-internationales":
    "À l'école, la journée de la Terre permet chaque année de planter des arbres et de discuter du recyclage. Cependant, sans actions concrètes dans la suite, l'effet s'estompe vite. Les associations locales devraient profiter de ces dates pour lancer des projets durables. Le symbole est utile seulement s'il devient habitude.",
  "pe3-souvenir-enfance":
    "Mon père courait à côté de moi les premiers jours pour m'empêcher de tomber. Le soir, nous nettoyions ensemble le vélo dans la cour. Plus tard, je l'ai utilisé pour aller à l'école et rendre visite à ma grand-mère. Quand il a été trop petit, nous l'avons donné à mon cousin.",
  "pe3-dictature-minceur":
    "Les influenceurs montrent des corps retouchés qui créent des attentes irréalistes. À la télévision, certains concours glorifient la minceur extrême. Les jeunes filles, mais aussi de plus en plus de garçons, souffrent en silence. Les professionnels de santé demandent davantage de diversité dans les médias. Chacun mérite de se sentir bien dans son corps.",
  "pe3-menage-bien-etre":
    "Des études montrent que dix minutes de rangement peuvent réduire le stress perçu. Écouter de la musique pendant le ménage rend la tâche plus agréable. En revanche, imposer seul le nettoyage à une personne crée de la frustration. Dans un couple ou une colocation, il est important de répartir les tâches clairement.",
  "pe3-cetait-mieux-avant":
    "On oublie parfois les maladies infantiles graves ou la pauvreté dans certaines régions. Aujourd'hui, nous bénéficions de soins médicaux avancés et d'une meilleure éducation. Bien sûr, le monde moderne crée de nouveaux problèmes, comme la pollution numérique. Plutôt que de tout idéaliser, il vaut mieux apprendre du passé tout en améliorant le présent.",
  "pe3-double-culture":
    "À Noël, nous suivons les traditions suisses, tandis qu'en été nous retrouvons la famille au Kosovo pour d'autres fêtes. Parfois, les gens me demandent « d'où je viens vraiment », ce qui peut être fatigant. Pourtant, je ne voudrais pas choisir une seule culture. Cette diversité m'a appris l'empathie et l'ouverture d'esprit.",
  "pe3-sel-de-la-vie":
    "Parfois, ce sont aussi les odeurs qui me reviennent : le pain chaud le dimanche ou les herbes du jardin de ma grand-mère. J'essaie de partager ces moments avec les personnes que j'aime plutôt que de rester seule devant un écran. Le bonheur ne coûte pas cher quand on sait le remarquer. Ces petites habitudes m'aident à garder le moral les jours difficiles.",
  "pe3-carnets-velo":
    "Certains passages me font rire, d'autres m'émeuvent quand je relis des sorties avec des amis qui ont déménagé. J'aimerais inclure des cartes, des photos et des conseils pratiques pour les débutants. Un éditeur local m'a encouragée à préparer un premier chapitre. Ce projet me permet de relier ma passion du vélo à l'écriture.",
};

function padToMin(text, min, key) {
  let result = insertExtension(text, EXTENSIONS[key] ?? "");
  const kind = textKind(key, text);
  const extrasByKind = {
    informal: [
      "Merci de me répondre dès que possible.",
      "J'ai hâte d'avoir de tes nouvelles.",
      "À très bientôt !",
      "Passe une bonne semaine.",
    ],
    narrative: [
      "J'espère que tu vivras bientôt une expérience pareille.",
      "C'était un moment vraiment agréable que je recommande.",
      "J'ai hâte de te raconter la suite en détail.",
      "Ce souvenir me fait encore sourire aujourd'hui.",
    ],
    article: [
      "En conclusion, ce sujet mérite d'être discuté avec nuance et ouverture d'esprit.",
      "Chacun peut contribuer à cette réflexion de manière constructive.",
      "Ces observations invitent à regarder la question sous un autre angle.",
      "Il serait souhaitable d'approfondir le débat dans les semaines à venir.",
    ],
    report: [
      "Les participants ont validé le compte rendu et remercié l'organisateur.",
      "La prochaine étape sera communiquée par courriel dans les jours qui viennent.",
      "Tous les points inscrits à l'ordre du jour ont été traités.",
    ],
    letter: [
      "J'espère avoir de vos nouvelles très bientôt.",
      "Merci encore pour votre attention.",
    ],
    formal: [
        "Je reste à votre disposition pour tout renseignement complémentaire.",
        "Merci de bien vouloir prendre en compte ma demande dans les meilleurs délais.",
        "N'hésitez pas à me contacter si vous avez besoin d'informations supplémentaires.",
        "Je vous remercie par avance pour votre attention et votre réponse.",
      ],
  };
  const extras = extrasByKind[kind] ?? extrasByKind.informal;
  const tailByKind = {
    article:
      "Pour résumer, ce thème mérite d'être abordé avec sérieux et ouverture, en tenant compte des expériences de chacun.",
    narrative:
      "En relisant ces lignes, je mesure à quel point ce moment a compté pour moi et j'espère te donner envie d'une expérience semblable.",
    report:
      "Ce compte rendu pourra être complété lors de la prochaine réunion, selon les décisions prises par les participants.",
    formal:
      "Je vous saurais gré de bien vouloir me transmettre votre réponse écrite dans les meilleurs délais possibles.",
    informal:
      "Écris-moi dès que tu peux, je serai contente de te lire.",
    letter:
      "Dans l'attente de votre réponse, je vous adresse mes salutations les plus cordiales.",
  };
  let i = 0;
  const used = new Set();
  while (wordCount(result) < min && i < extras.length * 2) {
    const extra = extras[i % extras.length];
    const tag = `${kind}:${extra}`;
    if (used.has(tag)) break;
    used.add(tag);
    result = insertExtension(result, extra);
    i++;
  }
  if (wordCount(result) < min && tailByKind[kind]) {
    let guard = 0;
    while (wordCount(result) < min && guard < 3) {
      result = insertExtension(result, tailByKind[kind]);
      guard++;
    }
  }
  return result;
}

const content = fs.readFileSync(TARGET, "utf8");
const answers = parseAnswers(content);

const failures = [];
for (const [key, text] of Object.entries(answers)) {
  const min = minForKey(key);
  if (!min) continue;
  const extended = padToMin(text, min, key);
  answers[key] = extended;
  const wc = wordCount(extended);
  if (wc < min) failures.push({ key, wc, min });
}

if (failures.length) {
  console.error("FAILURES:", failures);
  process.exit(1);
}

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

const ORDER = [
  "pe1-short-fete", "pe1-short-vacances", "pe1-short-anniversaire", "pe1-short-art", "pe1-short-loisirs", "pe1-short-travail",
  "pe1-long-fete", "pe1-long-carte-postale", "pe1-long-voeux", "pe1-long-anniversaire", "pe1-long-ecole-art", "pe1-long-correspondant", "pe1-long-montreal", "pe1-long-premier-jour",
];

let newBlock = "export const WRITING_SAMPLE_ANSWERS: Record<string, string> = {\n";
const sections = [
  ["// ── PE1 short ────────────────────────────────────────────────────────────", (k) => k.startsWith("pe1-short-")],
  ["// ── PE1 long ─────────────────────────────────────────────────────────────", (k) => k.startsWith("pe1-long-")],
  ["// ── PE2 reply ────────────────────────────────────────────────────────────", (k) => k.startsWith("pe2-reply-")],
  ["// ── PE2 long ─────────────────────────────────────────────────────────────", (k) => k.startsWith("pe2-long-")],
  ["// ── PE3 short ────────────────────────────────────────────────────────────", (k) => k.startsWith("pe3-short-")],
  ["// ── PE3 long ─────────────────────────────────────────────────────────────", (k) => k.startsWith("pe3-") && !k.startsWith("pe3-short-")],
];

for (const [comment, filter] of sections) {
  newBlock += `  ${comment}\n`;
  const keys = Object.keys(answers).filter(filter);
  // preserve original order from file
  const originalOrder = [...content.matchAll(/"(pe[^"]+)":/g)].map((m) => m[1]).filter(filter);
  const sorted = [...new Set([...originalOrder, ...keys])].filter((k) => keys.includes(k));
  for (const key of sorted) {
    newBlock += `  "${key}":\n    "${escapeTs(answers[key])}",\n`;
  }
  newBlock += "\n";
}
newBlock += "};\n";

const formStart = content.indexOf("export const FORM_SAMPLE_ANSWERS");
const newContent = newBlock + "\n" + content.slice(formStart);
fs.writeFileSync(TARGET, newContent);

let under = 0;
for (const key of Object.keys(answers)) {
  const min = minForKey(key);
  const wc = wordCount(answers[key]);
  if (wc < min) under++;
  console.log(`  ${key}: ${wc}/${min}`);
}
console.log(`\nDone. Under minimum: ${under}`);
