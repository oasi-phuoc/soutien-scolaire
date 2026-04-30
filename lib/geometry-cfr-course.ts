/**
 * Cours de géométrie aligné sur le livret CFR (Support de cours — Géométrie).
 * Pour chaque chapitre : rappels en langage simplifié + version complétée (formules, précisions).
 */
import type { CfrCourseChapter } from "./cfr-course-types";

export type GeometryCfrChapter = CfrCourseChapter;

export const GEOMETRY_CFR_SOURCE_NOTE =
  "Structuré d’après le livret de géométrie CFR (organisation par chapitres I à XIII). Les exercices avec figures restent dans le livre papier ou en classe ; ici tu as la partie théorique.";

export const GEOMETRY_CFR_CHAPTERS: CfrCourseChapter[] = [
  {
    roman: "I",
    title: "Les formes",
    inBook: "Nommer les formes usuelles, repérer des rectangles et carrés, relier géométrie et objets du quotidien.",
    theorieSimple: [
      "On classe les figures selon leur contour : lignes droites, courbes, fermées ou pas.",
      "Le cercle est une ligne courbe fermée ; le disque est l’intérieur du cercle.",
      "Triangle, carré, rectangle, losange… sont des polygones (plusieurs segments qui se rejoignent).",
      "Dans la vie : une pièce de monnaie (contour arrondi), une fenêtre (souvent rectangle), une part de pizza vue du dessus (triangle).",
    ],
    theorieComplete: [
      "Point : lieu précis ; souvent nommé avec une majuscule (A, B…).",
      "Droite : alignement infini dans les deux sens (on la prolonge avec une règle). Le livre dit aussi qu’« une ligne droite n’a pas de début ni de fin », c’est l’idée d’« infini » en langage simple.",
      "Segment : partie de droite entre deux points ; c’est mesurable avec une règle.",
      "Sommet : point où deux côtés se rencontrent.",
      "Côté : segment qui limite une figure polygonale.",
      "Polygone : figure fermée faite uniquement de segments (triangle = 3 côtés, quadrilatère = 4, etc.).",
      "Ellipse : ovale (comme vu de l’œuf en schéma) ; cercle cas particulier avec tous les points à égale distance du centre.",
    ],
  },
  {
    roman: "II",
    title: "Les propriétés des formes",
    inBook: "Angles (aigu, droit, obtus), équerre, droites parallèles et perpendiculaires ; propriétés du rectangle.",
    theorieSimple: [
      "Un angle mesure « l’ouverture » entre deux demi-droites avec le même départ.",
      "Angle droit : comme un coin de carré (90°). Aigu : plus fermé ; obtus : plus ouvert.",
      "L’équerre aide à tracer et à reconnaître un angle droit.",
      "Deux droites parallèles ne se croisent pas et gardent toujours la même distance.",
      "Deux droites perpendiculaires se coupent et forment quatre angles droits.",
    ],
    theorieComplete: [
      "Angle aigu : mesure entre 0° et 90° ; droit : 90° ; obtus : entre 90° et 180°.",
      "Sommet de l’angle : le point où les deux demi-droites se rencontrent ; « côtés de l’angle » désigne souvent ces demi-droites.",
      "Deux droites parallèles (notation d ∥ d′) : aucun point commun ; dans un quadrillage, les lignes d’un même sens sont souvent parallèles.",
      "Si une droite est perpendiculaire à l’une de deux parallèles, elle l’est aussi à l’autre (utile pour expliquer les angles du rectangle).",
      "Rectangle : quatre angles droits ; côtés opposés égaux deux à deux ; côtés opposés parallèles deux à deux.",
      "Carré : rectangle avec les quatre côtés de même longueur.",
      "Attention au langage au quotidien : « cercle » pour la pièce de monnaie désigne souvent tout le disque ; en maths on distingue parfois cercle / disque.",
    ],
  },
  {
    roman: "III",
    title: "Les reproductions",
    inBook: "Refaire une figure à l’identique, puis en plus grand ou plus petit, sur quadrillage.",
    theorieSimple: [
      "Reproduire une figure : la refaire même forme et mêmes tailles.",
      "On peut compter les carreaux ou mesurer avant de retracer.",
      "Agrandir ou réduire : les formes sont semblables, les longueurs multipliées ou divisées par le même nombre (idée simple avant le mot « rapport »).",
    ],
    theorieComplete: [
      "Procédé possible : reporter les mesures avec la règle, ou transporter les longueurs sur le quadrillage.",
      "Homothétie (idée hors livre, utile au formateur) : agrandissement / réduction par rapport à un centre ; tous les segments sont multipliés par un même facteur.",
      "Une figure bien reproduite a les mêmes angles et les rapports entre longueurs conservés après agrandissement.",
    ],
  },
  {
    roman: "IV",
    title: "Les symétries",
    inBook: "Axe de symétrie : plier pour superposer les deux moitiés.",
    theorieSimple: [
      "Une figure a un axe de symétrie si on peut la plier en deux et que les deux parties se superposent exactement.",
      "Le pli est l’axe de symétrie ; sur un dessin, souvent montré par un trait.",
      "Un carré a plusieurs axes ; un cœur en a souvent un vertical.",
    ],
    theorieComplete: [
      "Symétrie axiale : chaque point a un « miroir » à égale distance de l’axe, de l’autre côté.",
      "Conserved : longueurs, angles, aires ; l’orientation peut être inversée (gauche / droite).",
      "Certains polygones classiques : triangle isocèle (1 axe), rectangle (2), carré (4), cercle (infinité d’axes passant par le centre).",
    ],
  },
  {
    roman: "V",
    title: "Les rotations",
    inBook: "Tourner une figure autour d’un point ; la forme et les dimensions restent les mêmes.",
    theorieSimple: [
      "Une rotation, c’est faire tourner la figure autour d’un point (souvent le centre).",
      "La figure ne change pas de taille, seulement de position.",
      "Souvent utilisé avec des motifs (drapeaux, frises) comme dans les exercices.",
    ],
    theorieComplete: [
      "Il faut un centre de rotation, un angle et un sens (souvent trigonométrique positif pour « anti‑horaire » dans le cours avancé).",
      "Comme pour la symétrie, distances et angles de la figure restent égaux après rotation.",
      "Une rotation peut combiner plusieurs quarts de tour (90°, 180°…).",
    ],
  },
  {
    roman: "VI",
    title: "Le repérage",
    inBook: "Grille avec directions ; coordonnées (x puis y) ; plan cartésien et quadrants.",
    theorieSimple: [
      "Sur une grille, un point est repéré avec deux informations : ligne horizontale puis ligne verticale.",
      "On lit d’abord la graduation sur l’horizontale (axe des x), puis sur la verticale (axe des y). Exemple du livre : A (2 ; 4).",
      "Vue d’ensemble : carte ou plan permet de suivre des chemins (cases, rue, intersections).",
    ],
    theorieComplete: [
      "Plan cartésien : deux axes perpendiculaires (axe des x = abscisses, horizontal par convention ; axe des y = ordonnées, vertical) ; leur intersection est l’origine O.",
      "Quadrant I : x positif et y positif ; II : x négatif, y positif ; III : les deux négatifs ; IV : x positif, y négatif.",
      "Si la première coordonnée (x) est nulle, le point est sur l’axe vertical ; si la deuxième (y) est nulle, sur l’axe horizontal.",
      "Graduation : choisir l’unité (1 en 1, 2 en 2…) et la respecter pour placer ou lire les points.",
    ],
  },
  {
    roman: "VII",
    title: "Les mesures",
    inBook: "Règle : lire cm et mm ; choisir mm, cm, dm, m selon la taille.",
    theorieSimple: [
      "La règle mesure en cm et mm : on aligne le zéro avec le début du segment.",
      "Les petites graduations sont les millimètres ; dix millimètres font un centimètre.",
      "On dit souvent « hauteur » pour un objet debout et « longueur » pour une distance sur un bord.",
    ],
    theorieComplete: [
      "1 cm = 10 mm ; de cm vers mm on multiplie par 10 ; de mm vers cm on divise par 10.",
      "Pour une mesure comme 7,4 cm : 7 cm et 4 mm (0,4 cm).",
      "Échelle des longueurs usuelles : mm (très petit), cm, dm, m, dam, hm, km — le livre travaille surtout mm–cm–m–km.",
      "Mesure d’un segment [AB] : distance entre A et B sur la droite qui les joint.",
    ],
  },
  {
    roman: "VIII",
    title: "Les unités de mesure",
    inBook: "Tableaux de conversion : m, cm, mm, km, dm, dam, hm ; additions et soustractions avec unités.",
    theorieSimple: [
      "On ne peut additionner ou soustraire des longueurs que si tout est exprimé dans la même unité (ou alors on ajoute partie par partie en convertissant).",
      "Souvent utile : 1 m = 100 cm = 1000 mm ; 1 km = 1000 m.",
      "Une conversion = multiplier ou diviser par 10, 100 ou 1000 selon le « saut » d’unités.",
    ],
    theorieComplete: [
      "Chaîne usuelle : km — hm — dam — m — dm — cm — mm (chaque pas = ×10 ou ÷10).",
      "On peut écrire une mesure en nombre décimal : 3,5 dm = 35 cm = 0,35 m (vérifier avec le tableau).",
      "Pour les problèmes : traduire l’énoncé, convertir, calculer, puis répondre dans l’unité demandée avec une phrase.",
      "Attention aux pièges du livre (exemples donnés avec hm, dam) : revérifier l’unité de la réponse finale.",
    ],
  },
  {
    roman: "IX",
    title: "Les problèmes (longueurs)",
    inBook: "Situations de la vie : trajets maison‑école, étagères et livres, courses, prix au mètre…",
    theorieSimple: [
      "Lire l’énoncé plusieurs fois ; surligner les nombres et ce qu’on cherche.",
      "Décider dans quelle unité calculer pour éviter trop de décimales ; convertir puis reconvertir.",
      "Écrire les étapes (« phrase‑réponse ») comme dans le livre.",
    ],
    theorieComplete: [
      "Stratégies : faire un dessin même simple ; compter les allers-retours ; attention aux créneaux (« rentre à midi » = trajets doubles).",
      "Différence = plus grand − plus petit ; somme de trajets multiples = nombre de trajets × longueur d’un trajet.",
      "Espaces entre objets rangés sans vide : avec n livres ou objets à la suite, on a souvent n − 1 intervalles.",
    ],
  },
  {
    roman: "X",
    title: "Les périmètres",
    inBook: "Mesurer puis calculer ou utiliser les formules : carré, rectangle, cercle dans les suites d’exercices.",
    theorieSimple: [
      "Le périmètre, c’est la longueur du tour d’une figure fermée.",
      "Pour un polygone : on additionne tous les côtés.",
      "Pour le cercle, le périmètre s’appelle aussi la circonférence.",
    ],
    theorieComplete: [
      "Rectangle : périmètre P = 2 × longueur + 2 × largeur = 2 × (longueur + largeur).",
      "Carré de côté c : P = 4 × c.",
      "Triangle : P = somme des trois côtés.",
      "Cercle : périmètre = π × diamètre = 2 × π × rayon, avec π ≈ 3,14 (souvent nommé « circonférence »).",
      "Attention à l’usage du périmètre d’un « demi-cercle » : demi cercle + diamètre si on ferme la forme semi-circulaire.",
    ],
  },
  {
    roman: "XI",
    title: "Les problèmes (périmètres)",
    inBook: "Pistes agricoles, terrains rectangulaires, pistes ovales avec demi‑cercles, clôtures, drapeaux…",
    theorieSimple: [
      "Identifier si on demande tout le contour ou une partie (moitié de piste, partie de cercle…).",
      "Si la figure est composée, décomposer en segments et arcs puis additionner.",
      "Contrôler l’unité de la réponse (m, dam, cm…).",
    ],
    theorieComplete: [
      "Forme composite : découper ou compléter en figures connues sans oublier un côté « caché ».",
      "Quand une longueur manque avec un rectangle, nommer longueur et largeur et utiliser les relations données (doubler un côté, somme égale au périmètre restant…).",
      "Une pizza coupée échange une grande circonférence pour plusieurs petits arcs : le périmètre total des parts augmente même si la surface au sol reste proche.",
    ],
  },
  {
    roman: "XII",
    title: "Les surfaces",
    inBook: "Aires sur quadrillage puis formules : rectangle, carré, cercle, triangle, parallélogramme, trapèze, losange.",
    theorieSimple: [
      "L’aire comble une surface plate ; elle s’exprime en carrés d’unité (cm², m²).",
      "Sur du papier quadrillé, on peut compter les carreaux unitaires avant d’utiliser les formules.",
      "Une même figure a un périmètre et une aire différents (ne pas les confondre).",
    ],
    theorieComplete: [
      "Rectangle : aire = longueur × largeur ; carré : aire = côté × côté.",
      "Triangle : aire = (base × hauteur) ÷ 2 (hauteur perpendiculaire à cette base).",
      "Parallélogramme : aire = base × hauteur (la hauteur est perpendiculaire à la base choisie).",
      "Trapèze : aire = (grande base + petite base) × hauteur ÷ 2.",
      "Losange avec diagonales d₁ et d₂ (perpendiculaires) : aire = (d₁ × d₂) ÷ 2.",
      "Disque : aire ≈ π × rayon² ou π × (diamètre² ÷ 4).",
      "Découpages / rajouts pour les formes complexes (somme ou différence d’aires).",
    ],
  },
  {
    roman: "XIII",
    title: "Les problèmes (aires)",
    inBook: "Dimensions de tables, jardins, combinaisons de carrés, comparaisons d’aires et de périmètres.",
    theorieSimple: [
      "Reconnaître si la question demande une aire (cm², m²) ou un périmètre (cm, m).",
      "Convertir aussi les longueurs en une même unité avant de multiplier dans les formules d’aires.",
      "Phrase-réponse : donner la mesure avec l’unité carrée correcte.",
    ],
    theorieComplete: [
      "Deux figures peuvent avoir le même périmètre mais des aires différentes, et inversement.",
      "Attention aux problèmes du type « table formée en mettant des tables bout à bout » : clarifier grandesurs longueur / largeur de l’ensemble selon les dispositions données.",
      "Réduction d’échelle : si les longueurs sont divisées par k, les aires sont divisées par k × k (utile quand on reproduit une figure deux fois plus petite).",
    ],
  },
];

export function geometryCfrChapterCount(): number {
  return GEOMETRY_CFR_CHAPTERS.length;
}
