import type { COAudioGroup, COAudioItem } from "./co-audio";
import { CONV_11, CONV_12, CONV_13, CONV_14, CONV_15, CONV_16, CONV_17, CONV_18 } from "./co-audio-avance-conv-extra";
import {
  RADIO_1, RADIO_2, RADIO_3, RADIO_4, RADIO_5, RADIO_6, RADIO_7, RADIO_8, RADIO_9, RADIO_10,
  RADIO_11, RADIO_12, RADIO_13, RADIO_14, RADIO_15, RADIO_16, RADIO_17, RADIO_18, RADIO_19, RADIO_20,
  RADIO_21, RADIO_22, RADIO_23, RADIO_24, RADIO_25, RADIO_26, RADIO_27, RADIO_28,
  RADIO_29, RADIO_30, RADIO_31, RADIO_32,
} from "./co-audio-avance-radio";

function avanceItem(category: "conversation" | "radio", activity: string, filename: string, transcript?: string): COAudioItem {
  return {
    id: `avance-${category}-${activity}`,
    level: "avance",
    category,
    activity,
    audio: `/expression/co/avance/public/${filename}`,
    transcript,
  };
}

function avanceGroup(category: "conversation" | "radio", activity: string, filename: string, transcript?: string): COAudioGroup {
  return {
    id: `avance-${category}-${activity}`,
    level: "avance",
    category,
    activity,
    items: [avanceItem(category, activity, filename, transcript)],
  };
}

const CONV_1 = `– Tu as vu les photos des dernières vacances ?
– Non, fais voir... Qui est-ce, là ? Oh, mais c'est Nadia !
– Oui, elle a changé, hein ? Remarque, c'est normal, elle a bientôt 8 ans !
– C'est quand son anniversaire ? Qu'est-ce que tu vas lui offrir ?
– Je ne sais pas... Elle est tellement gâtée, elle a tout !
– Elle aime chanter je crois ? Alors, pourquoi pas un album StarMyName ?
– C'est un nouveau groupe ?
– Non... StarMyName.com est un site où tu peux commander un album de 10 chansons personnalisées avec le prénom de ta nièce...
– C'est original comme idée ça !... Je ne connaissais pas ! Mais ça doit être cher... et il faut sans doute beaucoup de temps ?
– Pas du tout ! J'ai une copine qui l'a fait pour sa fille. Ça ne lui a coûté pas tout à fait 30 € et deux ou trois jours après elle avait l'album avec le livret des paroles !
– C'est possible d'entendre les chansons avant ?
– Tu vas sur le site de StarMyName et là, dans une liste de plus de 700 prénoms tu trouveras peut-être le prénom de Nadia... Il te suffit de cliquer dessus et tu entends des extraits des chansons. Et s'il n'y est pas, les chansons sont enregistrées sur mesure.
– 700 prénoms !?
– Olivier, le créateur du site a eu cette idée pour la naissance de son premier enfant. Puis, il l'a fait pour des amis, des amis des amis... À chaque fois il rechantait les dix chansons avec le nouveau prénom. La liste des prénoms s'est allongée... et le site est né.
– Bon, eh bien je crois que je vais commander un album. Nadia va être contente !
– Tu peux même lui envoyer une carte d'anniversaire électronique avec une chanson à son nom... et aussi, pour son goûter d'anniversaire, faire imprimer des cartes d'invitation pour ses copains et copines...`;

const CONV_2 = `– Tiens Jacqueline, comment vas-tu ? On ne te voit plus au qi-gong ? Qu'est-ce que tu deviens ?
– Non, cette année, j'ai envie de bouger un peu plus, je fais de l'urban-training.
– J'ai entendu parler de ce nouveau sport. Ça se pratique dans la rue, en petit groupe et avec un coach. C'est bien ça, non ?
– Oui. On utilise ce qui se trouve autour de nous pour nos exercices. C'est amusant et dynamique !
– C'est réservé à des sportifs confirmés alors ?
– Non, il y a plusieurs niveaux. Pour le moment je fais ça avec un club. L'animateur nous montre les bons gestes et voit ce qui convient à chacun.
– Il faut des vêtements particuliers ?
– Pas vraiment... Il faut surtout des chaussures adaptées de type « running », c'est-à-dire pour courir, et des vêtements qui permettent de faire de grands gestes. Il faut aussi des gants pour protéger les mains. Et puis on recommande d'avoir une ceinture pour accrocher une bouteille d'eau. Il faut absolument se réhydrater à tout moment.
– Et qu'est-ce que vous faites exactement ?
– On commence par l'échauffement, pendant dix minutes environ. L'échauffement est très important. Il permet d'augmenter progressivement les pulsations cardiaques. Ensuite ce sont les exercices proprement dits.
– Comme quoi ?
– Des abdos sur des marches, des tractions accroché(e) à une barre, ou encore des pompes sur un banc... S'il y a des escalators, on les monte le plus vite possible...
– Eh bien, c'est tonique ! Et tout ça pendant une heure ?
– Oui, et on termine par un moment de stretching et de détente pour retrouver son rythme cardiaque en douceur...
– Là, tu pourrais faire du qi-gong... Ça n'a pas l'air mal...
– Ah oui, si on le fait à son rythme... et ce qui est formidable c'est qu'en plus tu redécouvres ta ville...`;

const CONV_3 = `– Madame Boisnard, merci de nous recevoir. Vous êtes Chef de la division Prévention et partenariats à la Direction centrale de la sécurité publique. Pouvez-vous dire quelles sont les personnes les plus vulnérables aux arnaques ?
– Ce sont les personnes âgées. Les escrocs profitent de leur faiblesse. Ils sont souvent isolés, parfois touchés par le décès de leur mari ou de leur femme.
– Quelles sont les situations à risque pour ces personnes ?
– Les seniors sont les premières victimes des voleurs. Ils sonnent chez eux, se font passer pour de faux policiers ou de faux agents de la société du gaz et de l'électricité. Souvent ils viennent à deux. L'un des deux parle avec eux, le distrait et pendant ce temps l'autre vole l'argent, les bijoux...
– Qu'est-ce qu'ils peuvent faire ?
– Demander son nom et sa carte professionnelle à la personne qui vient chez eux. S'ils ont un doute, ils peuvent appeler le commissariat de police.
– Quelles sont les autres arnaques ?
– Les personnes âgées sont aussi les victimes des démarcheurs. Ceux-ci leur proposent d'acheter des biens ou de réaliser des travaux chez eux, à un prix en fait bien au-dessus de leur valeur réelle.
– Quelles sont les actions de la police et de la gendarmerie auprès des personnes âgées ?
– Depuis l'été 2010, il existe un plan d'action nationale appelé Opération tranquillité seniors. Nous organisons des réunions de prévention avec les personnes âgées et les personnes proches d'elles. Mais nous leur recommandons surtout de garder un lien avec leur famille et leurs voisins, ou encore de faire partie d'associations. C'est l'isolement qui les rend plus fragiles, plus vulnérables.

D'après : MAIFMAGAZINE, n°156, juillet 2011.`;

const CONV_4 = `– Bonjour docteur.
– Bonjour madame Bonnefoy. Qu'est-ce qui vous amène ?
– Comme tous les ans à l'entrée de l'hiver, je me sens fatiguée, je n'ai envie de rien...
– Vous dormez bien ?
– Trop bien ! J'ai toujours sommeil et après j'ai beaucoup de mal à me réveiller...
– Hmm... C'est un peu de dépression saisonnière, Madame Bonnefoy... On va soigner ça...
– Vous savez Docteur, j'en ai assez des médicaments... J'ai entendu parler de la luminothérapie. Qu'en pensez-vous ?
– Écoutez, pourquoi pas ? Vous pourriez essayer... C'est un traitement médical reconnu pour combattre la dépression saisonnière. Dans les pays nordiques où 5 % et même 10 % des personnes en souffrent, elle est assez répandue. Les gens constatent qu'ils sont de meilleure humeur, que leur sommeil redevient normal... En fait, elle limite les effets du manque de soleil. Comme lui, c'est un antidépresseur naturel.
– Qu'est-ce qu'il faut faire ?
– D'après des études sur ce sujet, le plus efficace, ce sont des séances de 30 minutes, tous les matins, le plus près possible du lever du jour.
– Je peux faire ça chez moi ?
– Bien sûr. Il y a des centres du sommeil, mais vous pouvez avoir votre propre appareil de luminothérapie chez vous. Il vous faut une lampe de 1 500 lux. Minimum. Placée à 30 cm de vous. Ces lampes ne présentent aucun danger pour les yeux. Il faut cependant vous assurer que l'appareil a des filtres contre les rayons ultraviolets et infrarouges.
– Est-ce que c'est cher ?
– Il faut compter 200 € à 300 € environ. Il existe aussi des simulateurs d'aube. Pour environ 100 €, ces petits appareils vous réveillent en douceur en simulant le lever du soleil. C'est parfait pour ceux qui ont du mal à se réveiller !
– Merci Docteur. Vous m'avez convaincue. C'est un peu cher mais ça en vaut la peine...

D'après : Côté REUNICA, n°6, automne/hiver 2011.`;

const CONV_5 = `– Tu viens avec moi à Limons ?
– À Limons ? Près de Puy-Guillaume ? Qu'est-ce que tu vas y faire ?
– Participer à la création d'une AMAP. La réunion est à la salle des fêtes.
– Une quoi ?
– Une AMAP. Une association pour le maintien de l'agriculture paysanne. Elle relie un agriculteur à un groupe de consommateurs, comme toi et moi, à des familles à revenus modestes, des retraités, des sans-abris... tous types de personnes. C'est la garantie de mettre dans nos assiettes des produits frais et de qualité au meilleur prix.
– Comment ça marche ? Tu m'expliques ?
– Eh bien, l'agriculteur, aidé par un comité de consommateurs calcule un budget qui correspond au coût de sa production sur l'année. Dans ce budget, ils comptent les salaires, les investissements... tout ! Ensuite, le budget est divisé par le nombre de personnes inscrites. Ça donne le prix de la part de chaque membre qui est alors distribuée sous forme de panier, en général pendant deux saisons : printemps/été et automne/hiver.
– Et les membres, ils les ont comment, ces paniers ?
– C'est simple. Ils signent et achètent leurs paniers. Un par semaine. Ils peuvent tous les acheter avant la saison ou bien ils se mettent d'accord avec le fermier. Un membre peut aussi échanger une réduction du prix du panier ou même sa gratuité contre des heures de travail à la ferme.
– Qu'est-ce qu'il y a dans un panier ?
– Normalement un panier correspond aux besoins d'une famille de quatre personnes. Il y a des fruits, des œufs, des produits laitiers... Tout est fraîchement cueilli, localement produit. Comme les récoltes changent à chaque saison, les paniers varient en taille et en produits.
– C'est vraiment une bonne idée ces associations ! Et puis, tout le monde y gagne !
– Exactement ! De bons produits pour les consommateurs et, pour le fermier, la garantie de vendre sa production, d'avoir très peu de pertes et de gaspillages.

D'après : www.amisdelaterre.org`;

const CONV_6 = `– Bonjour madame, « 5 fruits et légumes par jour »... tout le monde connaît ce slogan... Si j'ai bien compris, vous fournissez des fruits dans les entreprises. Pourriez-vous m'expliquer comment cela fonctionne ?
– Oui, bien sûr. Effectivement, depuis 2003, nous proposons un service de fruits en entreprise. Nous sommes convaincus du bien-être du végétal dans les entreprises. Nos techniciens confectionnent des corbeilles de fruits et les livrent directement au sein de votre entreprise.
– D'où proviennent ces fruits ?
– Directement de nos vergers qui sont situés au cœur de la Plaine de Versailles. Nos paniers sont livrés sur un présentoir, sans sous-traitance, par des entreprises de messageries.
– Qu'est-ce qu'il y a comme fruits dans vos corbeilles ?
– Ça dépend des saisons... En décembre 2010, nous avions par exemple... des clémentines, des litchis, différentes sortes de pommes, des kiwis jaunes, des poires, des oranges, bien sûr, des bananes, des pamplemousses et des citrons... Et en juin... des pêches, des nectarines, des fraises, des abricots, des cerises, du raisin...
– Vous les livrez combien de fois par semaine ?
– Entre une et cinq fois par semaine... ça dépend.
– Et ça coûte combien, tout ça ?
– Nos tarifs actuels sont de 45 € hors taxes par panier de 8 à 12 kg de fruits pour deux paniers de fruits ou plus livrés par semaine, ou 48 € hors taxes par panier pour un seul panier de fruits par semaine. Ce tarif inclut l'installation, la mise à disposition et l'entretien du présentoir, la confection des paniers et la livraison par les techniciens du Verger de Gally. Ce service de distribution est gratuit pour les salariés. Il est solidaire de la Fondation de France pour la Recherche Contre le Cancer, pour le soutien de la filière biologique et pour la protection de l'environnement. Chaque salarié peut alors se servir avec une participation en moyenne de 1 € pour 3 fruits. Il existe un service gratuit de distribution de paniers de fruits frais sans programme de solidarité.
– Une bien belle idée qui non seulement incite à consommer des fruits frais au bureau tout au long de la journée, mais permet aussi plus de convivialité et de naturel dans les relations humaines. Et en plus elle représente une attention et une reconnaissance pour les salariés de la part de l'entreprise. Bravo !

D'après : http://www.vergerdegally.fr`;

const CONV_7 = `Baisers, bises, bisous... Tout un vocabulaire pour témoigner l'affection, l'estime ou alors le respect qu'on éprouve pour quelqu'un...

– Michèle, tu pourrais m'expliquer... combien on en fait des bises... et par où on commence ?
– Ça dépend... dans la majorité des régions de France on fait 2 bises, en commençant par la joue droite... mais dans l'Est et une partie de la Provence, on fait aussi 2 bises, mais là, on commence en général par la joue gauche. Dans la région de Brest, il est de coutume de ne faire qu'une bise, alors que dans le Massif Central on en fait 3... et dans le bassin parisien et en Normandie c'est 2 ou 4 bises en commençant généralement par la joue droite...
– Oh là là... que c'est compliqué !
– Oui, d'ailleurs les Français ne s'y retrouvent pas toujours eux-mêmes...
– Et les enfants ? J'ai remarqué qu'on les embrassait même si on ne les connaissait pas bien...
– Oui, mais ce sont surtout des familiers qui les embrassent pour leur montrer de l'affection ou pour les réconforter quand ils se sont fait « un petit bobo ».
– Il y a aussi d'autres occasions pour s'embrasser ?
– Oui, par exemple... pour remercier quand on a reçu un cadeau ou alors sous le gui, au nouvel an.
– Oui, c'est vrai ! On dit que ça porte bonheur. Le gui serait un symbole de prospérité et de longue vie... On dit d'ailleurs « Au gui l'an neuf ! »... Merci pour ces explications... allez, je t'embrasse !

D'après : http://fr.wikipedia.org`;

const CONV_8 = `À Paris, solidarité rime avec diversité. Qu'ils soient retraités, actifs, parents, étudiants ou encore lycéens, les Parisiens n'hésitent pas à s'engager. Nous nous sommes renseignés auprès de trois associations sur leurs objectifs.

– Bonjour Monsieur, pourriez-vous me parler de votre association ?
– Oui, avec plaisir. 80 % des volontaires de l'association Passerelles et Compétences ont une activité professionnelle. Ils font ce qu'on appelle du « bénévolat de compétences ».
– Et qu'est-ce que ça veut dire « bénévolat de compétences » ?
– Ben... Comment vous dire ? Le « bénévolat de compétences », c'est le fait de mettre ponctuellement sa compétence professionnelle au service d'associations de solidarité.
– Et quels sont les domaines les plus recherchés ?
– Surtout tout ce qui touche à l'informatique, à la communication et au marketing.
– Et quel est le rôle de Passerelles et Compétences ?
– Tout d'abord il y a la rencontre avec l'association pour définir ses besoins. On diffuse une annonce pour la mission et ensuite on rencontre le bénévole qui va la réaliser. Nous restons en contact avec eux tout au long du projet pour voir si tout se passe bien.

– Bonjour madame, alors... quels sont les objectifs de l'association « Voisin-Âge » ?
– L'association « Voisin-Âge » est une communauté sur le web. C'est le premier site de rencontres intergénérationnelles. Il met en relation les personnes âgées et leurs voisins en fonction de leur proximité et de leurs affinités. Le but est de faire connaissance, mais aussi de veiller à ce qu'aucune personne âgée du quartier ne soit trop isolée ou sans visite pendant des mois.
– Qu'est-ce qu'on peut apporter comme actions ?
– Ça peut être une visite, un coup de téléphone, aider la personne âgée à faire ses papiers, à faire les courses pour elle, à déjeuner avec elle.

– Bonjour, pouvez-vous nous dire quels sont les objectifs de l'association « Les Tribus du 13 » ?
– L'association Les Tribus du 13 a pour objectif de créer des liens utiles entre les habitants d'un même quartier.
– Vous avez aussi un site Internet ?
– Oui, il sert à rapprocher les familles et les nombreux étudiants du 13e.
– Qu'est-ce qu'ils peuvent proposer comme activités ?
– C'est surtout du baby-sitting, aller chercher les enfants à la crèche ou à la sortie de l'école et les aider à faire leurs devoirs, oui... c'est surtout ça.

D'après : à Paris, hiver 2011-2012.`;

const CONV_9 = `Ces derniers mois, peut-être à cause de la crise, on constate une nette augmentation des vols dans les lieux publics. Temps de crise ou non, il faut reconnaître qu'ils sont souvent encouragés par les victimes elles-mêmes, par leur manque de prudence. Bien des vols à la tire ou des vols à l'arraché pourraient être évités à condition d'adopter certains comportements préventifs. Un représentant de la préfecture de police nous conseille sur ce qu'il convient de faire dans différentes situations.

Dans les lieux publics en général, méfiez-vous des mouvements de foule ou des bousculades, favorables aux voleurs à la tire ou « pickpockets ».

Dans la rue, évitez de porter ostensiblement appareils de photo ou caméras. Assurez-vous de bien les tenir par leur courroie, même quand vous photographiez ou filmez. Mesdames, veillez à bien fermer votre sac à main, portez-le contre vous avec les fermetures tournées vers l'intérieur. Messieurs, boutonnez les poches intérieures de vos vêtements et ne mettez pas votre portefeuille dans vos poches arrière.

Dans les transports en commun, surtout aux heures de pointe, soyez vigilants, faites particulièrement attention à vos affaires quand vous montez ou descendez des rames de métro ou des bus ou encore dans les escalators.

Dans les cafés ou les restaurants, ne posez pas votre sac par terre, surtout pas dans le passage, même à côté de votre siège. Ne l'accrochez pas non plus au dossier de votre chaise, et surtout, fermez-le ! Placez-le là où il sera difficile à atteindre ou à subtiliser. Méfiez-vous également de toute personne qui vient s'asseoir un peu trop près de vous et qui jette, de façon apparemment négligente, son manteau ou son imperméable sur votre sac. Ne laissez pas non plus votre téléphone portable sur la table, rangez-le.

Quand vous désirez vous rendre aux toilettes, au restaurant, en train ou en avion, ne laissez jamais votre sac ou un objet de valeur à votre place, sans surveillance.

Quelle que soit la situation, gardez toujours un œil sur vos biens. Mieux vaut prévenir que guérir, quitte à passer pour une personne exagérément soupçonneuse !

D'après : www.prefecturedepolice.interieur.gouv.fr`;

const CONV_10 = `Aujourd'hui, le cours portera sur la vitesse. Sachez qu'un accident mortel sur deux est dû à une vitesse inadaptée. Accepter de réduire sa vitesse de 5 km/h, c'est diminuer de 20 % le nombre de tués.

Aussi, lorsque vous conduisez, respectez les limitations de vitesse.
N'oubliez pas de réduire votre vitesse par temps de pluie. Ne dépassez pas alors les 110 km/h sur autoroute, 100 sur les autoroutes urbaines ou les routes à deux fois deux voies, et 80 sur les autres routes.

Sur tous les réseaux, si la visibilité est inférieure à 50 m, ne roulez pas à plus de 50 km/h !
Soyez sûr de bien voir. Plus vous allez vite, plus votre perception visuelle diminue. Vérifiez votre vision de près, de loin, et sur les côtés.

Plus vous roulez vite, plus les temps de réaction et de freinage augmentent.
Votre temps de réaction varie de 1 à 2 secondes. Il dépend bien sûr des conditions de circulation et de votre expérience de la conduite, mais aussi, et je dirais même beaucoup, de votre attention, très étroitement liée à votre état physique.

Si vous prenez des médicaments, vérifiez s'ils provoquent des endormissements.
Si vous vous sentez trop fatigué ou si vous avez bu un peu trop d'alcool, ne prenez pas le volant. Demandez à quelqu'un d'autre de conduire.

Pour anticiper tout risque d'accident, maintenez une distance de sécurité avec le véhicule qui vous précède.

Sur route, comptez deux secondes entre le passage du véhicule qui vous précède devant un repère fixe, un arbre par exemple, et votre passage devant le même repère. Vous êtes alors à 50 m de la voiture qui vous précède.

Sur autoroute, prenez comme référence la longueur de deux lignes d'une bande d'arrêt d'urgence. La distance entre les deux véhicules est alors de 90 m.

N'oubliez pas ces conseils, faites-en des règles de conduite : vous réduirez les risques d'accident !
La vitesse, ça se contrôle !

D'après : « La vitesse – La vitesse ça se contrôle », Plaquette élaborée dans le cadre du Plan Départemental d'Action de Sécurité Routière de l'Allier – Préfecture de l'Allier – www.equipement.gouv.fr`;


const RADIOS: Array<[string, string]> = [
  ["1", RADIO_1], ["2", RADIO_2], ["3", RADIO_3], ["4", RADIO_4], ["5", RADIO_5],
  ["6", RADIO_6], ["7", RADIO_7], ["8", RADIO_8], ["9", RADIO_9], ["10", RADIO_10],
  ["11", RADIO_11], ["12", RADIO_12], ["13", RADIO_13], ["14", RADIO_14], ["15", RADIO_15],
  ["16", RADIO_16], ["17", RADIO_17], ["18", RADIO_18], ["19", RADIO_19], ["20", RADIO_20],
  ["21", RADIO_21], ["22", RADIO_22], ["23", RADIO_23], ["24", RADIO_24], ["25", RADIO_25],
  ["26", RADIO_26], ["27", RADIO_27], ["28", RADIO_28], ["29", RADIO_29], ["30", RADIO_30],
  ["31", RADIO_31], ["32", RADIO_32],
];

export const CO_AUDIO_GROUPS_AVANCE: COAudioGroup[] = [
  avanceGroup("conversation", "1", "conversation-1.mp3", CONV_1),
  avanceGroup("conversation", "2", "conversation-2.mp3", CONV_2),
  avanceGroup("conversation", "3", "conversation-3.mp3", CONV_3),
  avanceGroup("conversation", "4", "conversation-4.mp3", CONV_4),
  avanceGroup("conversation", "5", "conversation-5.mp3", CONV_5),
  avanceGroup("conversation", "6", "conversation-6.mp3", CONV_6),
  avanceGroup("conversation", "7", "conversation-7.mp3", CONV_7),
  avanceGroup("conversation", "8", "conversation-8.mp3", CONV_8),
  avanceGroup("conversation", "9", "conversation-9.mp3", CONV_9),
  avanceGroup("conversation", "10", "conversation-10.mp3", CONV_10),
  avanceGroup("conversation", "11", "conversation-11.mp3", CONV_11),
  avanceGroup("conversation", "12", "conversation-12.mp3", CONV_12),
  avanceGroup("conversation", "13", "conversation-13.mp3", CONV_13),
  avanceGroup("conversation", "14", "conversation-14.mp3", CONV_14),
  avanceGroup("conversation", "15", "conversation-15.mp3", CONV_15),
  avanceGroup("conversation", "16", "conversation-16.mp3", CONV_16),
  avanceGroup("conversation", "17", "conversation-17.mp3", CONV_17),
  avanceGroup("conversation", "18", "conversation-18.mp3", CONV_18),
  ...RADIOS.map(([activity, transcript]) => avanceGroup("radio", activity, `radio-${activity}.mp3`, transcript)),
];
