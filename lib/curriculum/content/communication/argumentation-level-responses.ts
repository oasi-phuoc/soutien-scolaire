import type { OralLevel } from "./speaking-prompts";

/** Propositions courtes A1 — 2 à 4 phrases simples, tutoiement. */
export const ARGUMENTATION_RESPONSES_BASE: Record<string, string> = {
  "transports publics":
    "J'aime les transports publics.\nIls sont pratiques pour aller au travail ou à l'école.\nJe n'ai pas besoin de chercher une place pour la voiture.",
  "téléphone portable":
    "J'utilise mon téléphone tous les jours.\nIl est utile pour appeler ma famille.\nJe l'utilise aussi pour les messages et les photos.",
  école:
    "J'aime l'école.\nJ'y apprends le français et d'autres choses.\nLes professeurs m'aident quand je ne comprends pas.",
  sport:
    "J'aime faire du sport.\nJe marche souvent ou je joue au foot.\nLe sport me fait du bien.",
  alimentation:
    "Je préfère manger à la maison.\nMa femme ou ma mère cuisine des plats simples.\nParfois nous mangeons aussi au restaurant.",
  travail:
    "J'aime mon travail.\nJe travaille dans un magasin.\nC'est intéressant et les collègues sont sympas.",
  logement:
    "J'habite dans un petit appartement.\nJ'aime mon quartier parce qu'il y a des commerces.\nMon logement est calme.",
  famille:
    "Ma famille est importante pour moi.\nNous mangeons souvent ensemble.\nMa famille m'aide quand j'ai un problème.",
  "apprentissage du français":
    "J'apprends le français.\nC'est parfois difficile, mais j'aime ça.\nJe parle français à l'école et avec mes voisins.",
  courses:
    "Je fais les courses au supermarché.\nJ'achète du pain, du lait et des légumes.\nParfois je vais aussi au marché le samedi.",
  santé:
    "Pour rester en bonne santé, je marche et je mange des fruits.\nQuand je suis malade, je vais chez le médecin.\nJe dors aussi assez la nuit.",
  argent:
    "J'achète surtout de la nourriture et des vêtements.\nJe fais attention à mon budget.\nJe garde un peu d'argent pour les imprévus.",
  Internet:
    "Internet est utile pour moi.\nJe peux chercher des informations et envoyer des messages.\nJ'utilise Internet pour apprendre le français.",
  "réseaux sociaux":
    "J'utilise un peu les réseaux sociaux.\nJe vois des photos de ma famille à l'étranger.\nJe n'y passe pas trop de temps.",
  environnement:
    "Il faut jeter les déchets à la poubelle.\nJe fais attention à ne pas gaspiller l'eau.\nC'est important pour la ville.",
  ville:
    "J'habite en ville.\nIl y a des bus et des magasins près de chez moi.\nC'est pratique pour aller au travail.",
  "temps libre":
    "Quand j'ai du temps libre, je regarde la télé ou je sors avec mes amis.\nLe week-end, nous faisons parfois une promenade.\nJ'aime aussi écouter de la musique.",
  voyage:
    "J'aime voyager.\nJe suis déjà allé dans mon pays et en France.\nJ'aimerais visiter d'autres villes en Suisse.",
  animaux:
    "J'aime les animaux.\nMon voisin a un chat très gentil.\nUn jour, j'aimerais avoir un petit chien.",
  lecture:
    "Je lis parfois des livres simples en français.\nJ'aime les histoires courtes.\nLire m'aide à apprendre de nouveaux mots.",
  cinéma:
    "J'aime regarder des films.\nJe préfère les comédies.\nParfois je vais au cinéma avec ma famille.",
  voisinage:
    "Il faut être poli avec les voisins.\nJe dis bonjour dans l'immeuble.\nLe soir, je fais attention au bruit.",
  technologie:
    "Mon téléphone est l'appareil le plus utile pour moi.\nJ'utilise aussi l'ordinateur pour les démarches.\nLa technologie m'aide au quotidien.",
  égalité:
    "Tout le monde doit être respecté.\nLes hommes et les femmes doivent avoir les mêmes droits.\nC'est important à l'école et au travail.",
  "règles de vie":
    "À l'école, il faut écouter le professeur.\nDans la rue, il faut respecter le feu rouge.\nLes règles aident tout le monde.",
};

/** Propositions A2 — opinion + 2 raisons, phrases plus développées. */
export const ARGUMENTATION_RESPONSES_MOYEN: Record<string, string> = {
  "transports publics":
    "Je préfère les transports publics à la voiture.\nD'abord, c'est plus économique : je paie un abonnement et je n'ai pas l'essence ni le parking.\nEnsuite, c'est pratique en ville parce que je peux lire ou réviser pendant le trajet.\nPar exemple, je prends le bus pour aller au travail tous les matins.",
  "téléphone portable":
    "Pour moi, le téléphone portable est utile, mais il faut faire attention.\nIl me permet de rester en contact avec ma famille et de recevoir des messages importants.\nEn même temps, je vois que certaines personnes passent trop de temps dessus.\nC'est pourquoi j'essaie de l'utiliser surtout pour les appels et les démarches pratiques.",
  école:
    "Je pense que l'école est très importante.\nElle aide à apprendre la langue, à lire et à compter, ce qui est nécessaire pour la vie quotidienne.\nElle apprend aussi à travailler avec les autres et à respecter des règles.\nPour moi, le plus important à l'école, c'est d'avoir des professeurs patients et des camarades respectueux.",
  sport:
    "Je crois que le sport est important pour la santé.\nQuand on bouge régulièrement, on se sent mieux et on dort mieux le soir.\nLe sport peut aussi être un moment social, par exemple dans un club ou avec des amis.\nMême trente minutes de marche par jour, c'est déjà une bonne habitude.",
  alimentation:
    "Manger sainement est une bonne idée, même si ce n'est pas toujours facile.\nDes repas simples avec des légumes et peu de sucre aident à garder de l'énergie.\nCuisiner à la maison coûte parfois moins cher que d'acheter des plats déjà préparés.\nJe pense qu'il faut surtout manger régulièrement et varier les aliments.",
  travail:
    "Pour choisir un bon travail, le salaire compte, mais ce n'est pas tout.\nUne bonne ambiance avec les collègues rend la journée plus agréable.\nIl est aussi important de comprendre les consignes et de pouvoir progresser.\nPar exemple, dans mon emploi, j'apprécie surtout la relation avec l'équipe.",
  logement:
    "Je préfère habiter en ville parce que tout est plus proche.\nLes transports, les écoles et les commerces facilitent la vie de famille.\nBien sûr, le loyer est souvent plus élevé qu'à la campagne.\nMalgré cela, pour moi, la localisation est plus importante que la taille de l'appartement.",
  famille:
    "La famille joue un grand rôle dans la vie de chaque personne.\nElle peut aider concrètement, par exemple pour garder les enfants ou dans une période difficile.\nElle transmet aussi des valeurs et des traditions.\nC'est pourquoi je reste en contact régulier avec les miens, même quand ils habitent loin.",
  "apprentissage du français":
    "Apprendre le français est indispensable pour vivre en Suisse.\nLes cours m'aident, mais je progresse surtout quand je parle dans des situations réelles.\nTravailler avec des collègues ou faire les courses en français est très utile.\nIl faut accepter de faire des erreurs au début, c'est normal.",
  courses:
    "Je fais les courses au supermarché et parfois au marché.\nAu supermarché, c'est plus rapide et pratique quand on manque de temps.\nAu marché, les produits sont souvent frais et on peut parler avec les vendeurs.\nJe combine les deux selon mon budget et mon emploi du temps.",
  santé:
    "Pour rester en bonne santé, je pense qu'il faut plusieurs choses.\nBien manger, dormir suffisamment et bouger un peu chaque jour, c'est essentiel.\nAller chez le médecin à temps évite aussi que les problèmes deviennent graves.\nPersonnellement, la marche quotidienne est l'habitude la plus facile à garder.",
  argent:
    "Avec mon argent, je paie d'abord les dépenses importantes : le loyer, la nourriture et les assurances.\nEnsuite, j'essaie de garder une petite réserve pour les imprévus.\nJe ne fais pas beaucoup d'achats inutiles.\nJe pense qu'il vaut mieux planifier le budget chaque mois.",
  Internet:
    "Internet m'aide beaucoup au quotidien.\nJe peux traduire un mot, chercher un horaire de bus ou remplir un formulaire.\nCependant, on peut aussi perdre du temps sur des vidéos ou des messages sans importance.\nMon avis : Internet est utile si on sait pourquoi on l'utilise.",
  "réseaux sociaux":
    "Les réseaux sociaux ont des avantages et des inconvénients.\nIls permettent de garder contact avec la famille à l'étranger et de partager des nouvelles rapidement.\nMais parfois, les informations ne sont pas fiables et on compare trop sa vie à celle des autres.\nJe les utilise avec modération.",
  environnement:
    "Protéger l'environnement demande des gestes simples dans la vie quotidienne.\nTrier les déchets, éteindre la lumière et limiter le gaspillage, ce sont des habitudes accessibles.\nDans une ville, moins de voitures signifie aussi moins de pollution.\nChacun peut commencer par de petites actions chez soi.",
  ville:
    "Vivre en ville offre beaucoup de services, mais il y a aussi du bruit.\nJ'apprécie surtout la proximité des transports et des commerces.\nÀ la campagne, c'est plus calme, mais il faut souvent une voiture.\nPour ma situation actuelle, la ville convient mieux à ma famille.",
  "temps libre":
    "Le temps libre sert à se reposer et à voir des amis.\nAprès le travail, j'aime faire une promenade ou regarder un film.\nLe week-end, nous organisons parfois une sortie en famille.\nPour moi, l'important est de trouver un équilibre entre obligations et moments agréables.",
  voyage:
    "J'aime voyager parce que cela permet de découvrir d'autres lieux et d'autres cultures.\nOn apprend aussi à s'organiser et à parler avec des personnes différentes.\nVoyager coûte de l'argent, donc il faut planifier.\nMême un court séjour dans une autre région peut être très enrichissant.",
  animaux:
    "Avoir un animal peut être une bonne expérience, mais cela demande du temps.\nIl faut le nourrir, le promener et payer les soins chez le vétérinaire.\nUn animal peut aussi apporter de la joie aux enfants et créer de la compagnie.\nAvant d'en adopter un, il faut réfléchir à son mode de vie.",
  lecture:
    "Lire m'aide à enrichir mon vocabulaire et à mieux comprendre le français.\nAu début, je choisis des textes simples, puis je progresse petit à petit.\nLire dix minutes par jour, c'est déjà efficace.\nC'est une activité calme que j'aime faire le soir.",
  cinéma:
    "J'aime aller au cinéma, mais je regarde aussi des films à la maison.\nAu cinéma, l'expérience est plus immersive et on se concentre mieux.\nÀ la maison, c'est plus confortable et moins cher.\nJe choisis selon mon budget et le temps disponible.",
  voisinage:
    "Bien vivre avec ses voisins demande du respect mutuel.\nIl faut saluer, éviter le bruit tard le soir et respecter les espaces communs.\nQuand il y a un problème, il vaut mieux en parler calmement.\nDe bonnes relations rendent la vie dans l'immeuble plus agréable.",
  technologie:
    "La technologie simplifie beaucoup de tâches, comme les démarches en ligne ou les traductions.\nElle permet aussi de rester en contact avec la famille.\nCependant, si on passe trop de temps sur les écrans, on voit moins les personnes autour de soi.\nIl faut donc l'utiliser comme un outil, pas comme une occupation permanente.",
  égalité:
    "Je pense que les hommes et les femmes doivent avoir les mêmes chances.\nÀ l'école, au travail et dans la famille, le respect est fondamental.\nL'égalité ne signifie pas que tout le monde fait la même chose, mais que chacun a les mêmes droits.\nC'est une valeur importante pour vivre ensemble.",
  "règles de vie":
    "Les règles existent pour protéger les personnes et permettre de vivre ensemble.\nÀ l'école, elles aident les cours à se passer calmement.\nDans la rue, elles évitent les accidents.\nParfois elles semblent strictes, mais elles sont utiles pour tout le monde.",
};

const DEFAULT_BASE =
  "Voici mon avis sur ce sujet.\nJe pense que c'est important dans la vie quotidienne.\nPar exemple, cela concerne ma famille et mon travail.\nC'est ma réponse personnelle.";

const DEFAULT_MOYEN =
  "C'est une question intéressante.\nÀ mon avis, ce sujet touche la vie de tous les jours.\nD'une part, il y a des avantages pratiques.\nD'autre part, il faut aussi faire attention aux difficultés.\nPar exemple, cela dépend de la situation de chaque personne.";

export function getArgumentationResponseByLevel(theme: string, level: OralLevel): string | null {
  if (level === "base") return ARGUMENTATION_RESPONSES_BASE[theme] ?? DEFAULT_BASE;
  if (level === "moyen") return ARGUMENTATION_RESPONSES_MOYEN[theme] ?? DEFAULT_MOYEN;
  return null;
}
