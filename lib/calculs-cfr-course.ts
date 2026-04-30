/**
 * Cours calculs / algèbre aligné sur le livret CFR (LIVRE_MATH_CFR_ALGEBRE).
 * 19 chapitres : théorie simplifiée + version complétée.
 */
import type { CfrCourseChapter } from "./cfr-course-types";

export const CALCULS_CFR_SOURCE_NOTE =
  "Structuré d’après le livret CFR algèbre / calculs (chapitres I à XIX). Les exercices du livre papier restent en classe ou sur la feuille ; ici tu as la théorie synthétisée et clarifiée.";

export const CALCULS_CFR_CHAPTERS: CfrCourseChapter[] = [
  {
    roman: "I",
    title: "La numération",
    inBook:
      "Écrire et lire les nombres ; placer chaque chiffre (unités, dizaines…) ; décomposer en somme de milliers, centaines, etc.",
    theorieSimple: [
      "Les nombres s’écrivent avec des chiffres ; la position du chiffre change sa valeur (système décimal).",
      "Exemple livre : dans 452 le 2 vaut 2 unités ; dans 524 le même chiffre à une autre place vaut 20 (dizaines).",
      "On décompose pour comprendre : 5682 = 5000 + 600 + 80 + 2.",
    ],
    theorieComplete: [
      "Classes : unités, dizaines, centaines, milliers… puis millions, etc. Les zéros gardent la position (ex. 3409).",
      "« Chiffre des dizaines » ≠ « nombre de dizaines » : dans 657 le chiffre des dizaines est 5 (50), etc.",
      "Lecture en français regroupe par milliers (six mille cinq cent quatre-vingt-deux).",
    ],
  },
  {
    roman: "II",
    title: "La comparaison",
    inBook:
      "Savoir lequel est plus grand, plus petit ou égal ; utiliser < , > et = ; ordonner des nombres entiers.",
    theorieSimple: [
      "Comparer, c’est décider si deux nombres sont égaux ou lequel est plus grand.",
      "Si les nombres n’ont pas la même longueur (même nombre de chiffres), celui qui a plus de chiffres est en général plus grand (pour les entiers positifs).",
      "S’ils ont le même nombre de chiffres, on compare en partant de la gauche jusqu’à trouver une différence.",
    ],
    theorieComplete: [
      "Symboles : < (strictement plus petit), > (strictement plus grand), = égalité.",
      "Nombre à virgule : comparer partie entière puis, si égalité, partie décimale chiffre par chiffre (voir chapitre VIII).",
      "Pour ordonner plusieurs nombres : les classer sur une droite numérique mentale aide souvent.",
    ],
  },
  {
    roman: "III",
    title: "Les suites",
    inBook:
      "Trouver la règle d’une suite de nombres naturels (+ constante, motifs à pas réguliers).",
    theorieSimple: [
      "Une suite suit une règle : les nombres montent (+) ou baissent (−).",
      "Souvent la règle : « ajouter toujours le même nombre » (pas constant). Pour le trouver, on regarde deux nombres d’affilée et on fait une soustraction.",
      "Pour une suite qui descend, même idée puis on soustrait le pas trouvé.",
    ],
    theorieComplete: [
      "Suite arithmétique (terme officiel hors livre) : terme suivant = terme précédent + pas (ou − pas).",
      "Si plusieurs trous non consécutifs : la méthode du livre teste plusieurs écarts entre termes donnés puis divise par le nombre de sauts.",
      "Méfiance avec les suites « mixtes » (multiples niveaux) : en CFR on reste sur des motifs simples et répétitifs.",
    ],
  },
  {
    roman: "IV",
    title: "Les additions",
    inBook:
      "Addition posée ou en ligne ; vocabulaire (termes, somme) ; commutative et associative ; additions en colonnes avec retenue.",
    theorieSimple: [
      "L’addition réunit plusieurs quantités ; signe « + », résultat = somme.",
      "Nom du livret : les nombres qu’on additionne = termes.",
      "On peut changer l’ordre des termes : la somme ne change pas (commutativité).",
      "En colonnes : aligner unités sous unités, dizaines sous dizaines, puis additionner colonne par colonne de droite à gauche avec retenues si besoin.",
    ],
    theorieComplete: [
      "Associativité : (a + b) + c = a + (b + c) utile pour regrouper pour calcul mental.",
      "Retenue : quand une colonne dépasse 9, on reporte une dizaine (ou une centaine) à la colonne suivante.",
      "Calcul mental : décomposer un terme en complémentaires (compléments à 10, à 100).",
    ],
  },
  {
    roman: "V",
    title: "Les soustractions",
    inBook:
      "Soustractions en ligne et en colonnes ; différence ; non-commutativité ; emprunts ( « retenue » en enlèvement ).",
    theorieSimple: [
      "La soustration enlève une quantité d’une autre ; signe « − », résultat = différence.",
      "Attention : changer l’ordre change tout (ce n’est pas comme l’addition).",
      "En colonnes : alignement comme pour l’addition ; partir des unités ; emprunter à la gauche si le chiffre du haut est trop petit.",
    ],
    theorieComplete: [
      "Terme inconnu dans a − ? = b : ? = a − b ; dans ? − a = b : ? = a + b.",
      "Vérifier : (a − b) + b doit redonner a.",
      "Lien avec problèmes : « de plus », « de moins » suivent qui est la référence (voir chapitre VI).",
    ],
  },
  {
    roman: "VI",
    title: "Les problèmes (addition et soustraction)",
    inBook:
      "Décider sans se fier à un seul mot : lire la question, repérer la relation « plus », « moins », « ensemble », « il reste »…",
    theorieSimple: [
      "Règle du livre : ce n’est pas un mot du texte qui choisit l’opération, c’est ce que pose la question.",
      "Après avoir lu tout le texte, relire uniquement ce qu’on cherche.",
      "« En tout », « au total », « combien encore » guident souvent vers + ou − selon si on assemble ou enlève.",
    ],
    theorieComplete: [
      "« A a 5 francs de plus que B » peut donner soit A = B + 5 soit B = A − 5 selon qui est inconnu.",
      "Plusieurs sous-questions : une phrase-réponse par question ; les unités (francs, pages…) doivent rester cohérentes.",
      "Réécrire l’étape (« phrase » comme dans les corrigés) avant de passer au calcul suivant.",
    ],
  },
  {
    roman: "VII",
    title: "Les fractions — partie 1",
    inBook:
      "Parts d’un tout : lecture d’une fraction, moitié, tiers, quarts avec support visuel dans le livre.",
    theorieSimple: [
      "Une fraction indique une part d’un tout.",
      "En bas : nombre de parts égales (dénominateur) ; en haut : combien de parts sont prises (numérateur).",
      "Exemples courants : 1/2 la moitié, 1/3 un tiers, 3/4 trois quarts.",
    ],
    theorieComplete: [
      "Fraction < 1 : la part est inférieure au tout si le numérateur est plus petit que le dénominateur.",
      "Égalités visuelles (aire partagée) : deux dessins différents peuvent représenter la même fraction.",
      "Une fraction égale au tout s’écrit dénominateur = numérateur (ex. 4/4 = 1).",
    ],
  },
  {
    roman: "VIII",
    title: "Les nombres décimaux",
    inBook:
      "Parties entière et décimale après la virgule ; comparer ; addition et soustraction ; suites à pas décimal.",
    theorieSimple: [
      "Le séparateur est la virgule (école en Suisse) : à gauche unités → dizaines → … ; après la virgule dixièmes → centième → …",
      "Ajouter ou soustraire : aligner la virgule comme pour les entiers puis les colonnes de chiffres.",
      "Pour comparer : comparer partie entière d’abord ; si égalité, comparer 1ᵉ chiffre après virgule, puis le suivant, etc.",
    ],
    theorieComplete: [
      "Les zéros à droite peuvent préciser les rangs mais ne changent pas la valeur finale (parfois omission en notation).",
      "Suite décimale : même logique que chapitre III avec pas 0,1 ou 0,25 par exemple.",
      "Traduction problème francs/dec : aligner puis opérations comme celles étudiées en VI.",
    ],
  },
  {
    roman: "IX",
    title: "Les multiplications",
    inBook:
      "Multiplier en ligne, tables et livrets 1→12 ; poser en colonnes (partie 1 et partie 2 du livre).",
    theorieSimple: [
      "La multiplication ajoute plusieurs fois la même grandeur : 4 × 3 = 12 signifie quatre « trois » ajoutés.",
      "Les tables (jusqu’à 12) accélèrent tous les autres calculs.",
      "Pose en colonnes : multiplier par un chiffre à la fois, décaler selon les rangs puis additionner les lignes intermédiaires.",
    ],
    theorieComplete: [
      "Propriété : commutative a × b = b × a ; distributive par rapport à ± : a × (b + c) = a × b + a × c.",
      "Double produit deux chiffres : attention aux retenues intermédiaires.",
      "Estimation avant calcul : ordre de grandeur permet de détecter une erreur de virgule plus tard.",
    ],
  },
  {
    roman: "X",
    title: "Les multiplications décimales",
    inBook:
      "Colonnes avec nombres à virgule ; compter les chiffres après virgule ; produits avec plusieurs facteurs.",
    theorieSimple: [
      "On peut poser comme des entiers en ignorant les virgules, puis reporter le nombre correct de décimales au résultat (somme des décimales des facteurs).",
      "Une autre voie mentale : 2 × 0,5 = 1 aide à prévoir où place la virgule.",
      "Plusieurs facteurs : associer deux par deux puis continuer.",
    ],
    theorieComplete: [
      "Rigueur technique : après pose, repositionner virgule = total des décimales des deux nombres multipliés (en général dans le livre CFR).",
      "Zeros en tête après virgule : conserver jusqu’à la comparaison demandée puis simplifier présent éventuelle.",
      "Coefficient « facteur décimal » : penser à mise à l’échelle (voir proportionnalité chapitre XIX).",
    ],
  },
  {
    roman: "XI",
    title: "Les divisions",
    inBook:
      "Division vue comme partage répété ; tables divisions ; pose en colonnes (division par un entier ).",
    theorieSimple: [
      "La division fait le « contraire » de la multiplication : combien de fois b entre dans a ?",
      "Reste lorsqu’il ne tombe pas juste pour division euclidienne entière.",
      "Pose étape divisée − diviseur : soustraire les multiples du diviseur, abaisser le chiffre suivant.",
    ],
    theorieComplete: [
      "Division euclidienne : dividend = quotient × divis + reste ; 0 ≤ reste < divis.",
      "À la calculatrice CFR : passer au décimal après la virgule (chapitre XII).",
      "Sens du quotien : prix unitaire ou nombre de groupes suivant formulation du problème.",
    ],
  },
  {
    roman: "XII",
    title: "Les divisions décimales",
    inBook:
      "Quotients à virgule ; même idée avec décalage décimal ou ajout de zéros après la virgule ; diviseur peut être décimal après adaptation.",
    theorieSimple: [
      "On peut poursuivre la division après la virgule en ajoutant des zéros à la partie décimale du dividende.",
      "Parfois on multiplie dividende et diviseur par la même puissance de 10 pour retomber à un diviseur entier.",
      "Quotients exacts ou arrondis : selon consigne problème.",
    ],
    theorieComplete: [
      "Invariance multiplicative : multiplication par la même valeur non nulle préserve le quotient.",
      "Périodicité possible (fractions donnant décimaux périodiques) : niveau avancé, en CFR les exemples usuels donnent développements finis ou bien arrêtés.",
    ],
  },
  {
    roman: "XIII",
    title: "Les problèmes (multiplication et division)",
    inBook:
      "Double, triple, quadruple ; moitié, tiers, quart dans des énoncés — choisir multiplication ou division.",
    theorieSimple: [
      "Double = fois 2 ; triple = fois 3 ; quadruple = fois 4.",
      "Moitié = divisé par 2 ; tiers ≈ divisé par 3 ; quart = divisé par 4.",
      "Une phrase doit toujours relier résultat et unités demandées.",
    ],
    theorieComplete: [
      "« Deux fois plus de X que Y » : souvent nombre X = 2 × nombre Y (attention au sens littéral en français parlé).",
      "Produit vs somme dans textes riches : faire un tableau quantités / lignes évite erreurs.",
    ],
  },
  {
    roman: "XIV",
    title: "Les puissances et racines",
    inBook:
      "Notation d’une multiplication répétée ; lien avec carré racine comme opération inverse (exemples simples comme 9 = 3×3 ).",
    theorieSimple: [
      "Puissance : écrire le même nombre multiplié plusieurs fois de façon courte (livre utilise l’image de la multiplication répétée ; la notation exponentielle moderne utilise un petit chiffre en haut ).",
      "Exemple cohérent : 2 × 2 × 2 = 8, noté aussi 2³ = 8 (lire « 2 puissance 3 »).",
      "Racine carrée répond à : quel nombre fois lui‑même donne ce résultat ? Réponse exemple : 9 = 3 × 3.",
    ],
    theorieComplete: [
      "Notation en exposant (petit chiffre au-dessus) : éviter de confondre avec une simple juxtaposition comme «23» qui n’est pas deux puissant trois mais vingt-trois.",
      "Carrés parfaits utiles CFR : 1, 4, 9, 16, 25, …",
      "Puissances sont calculées après parenthèses et avant multiplications lors des priorités.",
    ],
  },
  {
    roman: "XV",
    title: "Les nombres relatifs",
    inBook:
      "Signes + et − sur les nombres ; opposition ; comparaisons ; quatre opérations avec règles de signe.",
    theorieSimple: [
      "On utilise les négatifs pour des températures sous zéro, des niveaux sous un repère ou des montants dus selon exemples cours.",
      "Pour comparer : tout négatif est plus petit que tout positif ; entre deux négatifs, celui qui est plus proche de zéro est le plus grand (ex. −2 > −10).",
      "Soustraction = addition du nombre opposé.",
    ],
    theorieComplete: [
      "Addition même signe : additionner les valeurs absolues ; garder le signe commun.",
      "Addition signes différents : on soustrait les valeurs absolues ; le signe du résultat est celui du terme ayant la plus grande valeur absolue.",
      "Produit ou quotient même signes → résultat + ; signes différents → −.",
      "Représenter les nombres sur une droite graduée aide à comparer ou à prévoir une somme.",
    ],
  },
  {
    roman: "XVI",
    title: "La priorité des opérations",
    inBook:
      "Parenthèses d’abord, puis puissances / racines, puis × ÷ puis + − comme dans livre CFR.",
    theorieSimple: [
      "Quand plusieurs opérations sont sur la même ligne, un ordre fixe évite de se tromper.",
      "D’abord ce qui est entre parenthèses ( puis crochets [ ] puis accolades { } si le livre en propose ).",
      "Ensuite puissances et racines puis multiplications et divisions (de gauche à droite) puis additions et soustractions.",
    ],
    theorieComplete: [
      "Si deux priorités équivalentes (ex. seulement des × et des ÷ ), on fait de gauche à droite même règle pour + et −.",
      "Une barre de fraction groupe numérateur et dénominateur comme deux blocs avant de mélanger avec le reste du calcul.",
    ],
  },
  {
    roman: "XVII",
    title: "Les fractions — partie 2",
    inBook:
      "Simplifier ; passer en décimal ; addition soustraction après dénominateur commun ; multiplication fractions ; inverse ; division multiplier par inverse.",
    theorieSimple: [
      "Simplifier = diviser numérateur et dénominateur par même diviseur pour écrire plus petites parts équivalentes.",
      "Ajouter fractions : même dénominateur d’abord ; sinon trouver commun multiple simple.",
      "Multiplier des fractions : (numérateur × numérateur) / (dénominateur × dénominateur), en simplifiant avant ou après selon façons enseignées.",
      "Diviser fraction : multiplier par l’inverse (retourner la deuxième fraction).",
    ],
    theorieComplete: [
      "Nombre entier sous forme fraction : exemple 7 = 7/1 utile ensuite pour mise au commun.",
      "Une fraction irréductible est obtenue quand aucun diviseur commun évident ne reste entre numérateur et dénominateur.",
      "Addition numérique vérifiée après conversion décimale (contrôle erreur).",
    ],
  },
  {
    roman: "XVIII",
    title: "Les équations",
    inBook:
      "Inconnue (souvent x) ; équilibrer les deux membres avec opérations inverses jusqu’isolé x ",
    theorieSimple: [
      "Résoudre une équation = trouver quelle valeur de l’inconnue rend « gauche égale à droite » vraie.",
      "Pour isoler x, faire la même opération aux deux membres (« comme une balance ») : même addition, même soustraction (sauf division par zéro interdite).",
      "Une solution unique simple au niveau livre CFR en général avant systèmes.",
    ],
    theorieComplete: [
      "Opération inverse successive : + ↔ − × ↔ ÷ niveau lignes CFR.",
      "Vérifier en remplaçant x dans l’équation.",
      "Les problèmes se traduisent toujours en une phrase claire (« je cherche… ») avant d’écrire l’équation.",
    ],
  },
  {
    roman: "XIX",
    title: "Les proportionnalités",
    inBook:
      "Tableaux de valeurs régulières où un produit en croix (règle de trois simplifiée) aide à valeur manquante ; échelles ; vitesses proportionnelles…",
    theorieSimple: [
      "« Si une grandeur est doublée et qu’elles sont proportionnelles, l’autre est doublée aussi » (avec prix unitaire fixe par exemple ).",
      "« Règle de trois » dans le livret : passer par la valeur correspondant à une unité, puis multiplier.",
      "Un tableau clair (colonnes bien alignées) aide à éviter les inversions lors de problèmes en français.",
    ],
    theorieComplete: [
      "Coefficient de proportionnalité k : quand une quantité x est doublée, l’autre y est aussi doublée si le rapport y ÷ x reste toujours k.",
      "Tout ce qui grandit vite n’est pas proportionnel ; en géométrie, aires et périmètres obéissent à d’autres lois.",
      "Les réductions / agrandissements sont des usages proches sous forme rapport (lien aussi avec cours géométrie sur les plans ).",
    ],
  },
];

export function calculsCfrChapterCount(): number {
  return CALCULS_CFR_CHAPTERS.length;
}
