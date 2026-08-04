import type { GrammarLesson } from "../../grammar-data";

/** Unité 13 — Le pluriel des noms (G2.3) */
export const A1_GR_PLURIEL_NOMS: GrammarLesson = {
  slug: "a1-gr-pluriel-noms",
  code: "G2.3",
  level: "A1",
  title: "Le pluriel des noms",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "highlight",
      label: "",
      items: [
        "une pomme — {a}des{/a} pomme{a}s{/a}",
      ],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "plain_list",
      items: [
        "Un nom s'emploie toujours avec un déterminant, qui indique le nombre.",
        "Dans les dictionnaires, les noms sont au singulier.",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "grid",
      headers: ["", "Indéfini", "Défini", "Nom"],
      boldFirstCol: true,
      rows: [
        ["Singulier", "{a}une{/a}", "{a}la{/a}", "tasse"],
        ["Pluriel", "{a}des{/a}", "{a}les{/a}", "tasse{a}s{/a}"],
      ],
    },
    {
      type: "heading",
      text: "Cas général",
      accent: true,
    },
    {
      type: "plain_list",
      items: [
        "Nom pluriel = nom singulier + {a}-s{/a}.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "un fruit → des fruit{a}s{/a}",
        "une banane → des banane{a}s{/a}",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "plain_list",
      items: [
        "Si le nom singulier se termine par {a}s{/a}, {a}x{/a} ou {a}z{/a}, le pluriel ne change pas.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "le bra{a}s{/a} → les bra{a}s{/a}",
        "une noi{a}x{/a} → des noi{a}x{/a}",
        "un ne{a}z{/a} → des ne{a}z{/a}",
      ],
      noBulletItems: [0, 1, 2],
    },
    {
      type: "highlight",
      label: "Certaines exceptions :",
      items: [],
    },
    {
      type: "plain_list",
      items: [
        "Certains noms forment leur pluriel autrement selon leur terminaison. Choisissez une terminaison pour voir les exemples et les exceptions.",
      ],
      noBulletItems: [0],
    },
    {
      type: "selector",
      buttonCols: 4,
      tabs: [
        {
          label: "-al",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un anim{a}al{/a}", "des anim{a}aux{/a}"],
                ["un journ{a}al{/a}", "des journ{a}aux{/a}"],
                ["un chev{a}al{/a}", "des chev{a}aux{/a}"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un b{a}al{/a} → des bal{a}s{/a}",
                "un carnav{a}al{/a} → des carnaval{a}s{/a}",
                "un festiv{a}al{/a} → des festival{a}s{/a}",
                "un récit{a}al{/a} → des récital{a}s{/a}",
              ],
              noBulletItems: [0, 1, 2, 3],
            },
          ],
        },
        {
          label: "-ail",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un déta{a}il{/a}", "des déta{a}ils{/a}"],
                ["un porta{a}il{/a}", "des porta{a}ils{/a}"],
                ["un éventa{a}il{/a}", "des éventa{a}ils{/a}"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un trav{a}ail{/a} → des trav{a}aux{/a}",
                "un vitr{a}ail{/a} → des vitr{a}aux{/a}",
                "un cor{a}ail{/a} → des cor{a}aux{/a}",
                "un b{a}ail{/a} → des b{a}aux{/a}",
              ],
              noBulletItems: [0, 1, 2, 3],
            },
          ],
        },
        {
          label: "-eau",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un bat{a}eau{/a}", "des bat{a}eaux{/a}"],
                ["un gât{a}eau{/a}", "des gât{a}eaux{/a}"],
                ["un chap{a}eau{/a}", "des chap{a}eaux{/a}"],
                ["un cad{a}eau{/a}", "des cad{a}eaux{/a}"],
              ],
            },
          ],
        },
        {
          label: "-au",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un tuy{a}au{/a}", "des tuy{a}aux{/a}"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un land{a}au{/a} → des landau{a}s{/a}",
                "un sarr{a}au{/a} → des sarrau{a}s{/a}",
              ],
              noBulletItems: [0, 1],
            },
          ],
        },
        {
          label: "-eu",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un f{a}eu{/a}", "des f{a}eux{/a}"],
                ["un j{a}eu{/a}", "des j{a}eux{/a}"],
                ["un li{a}eu{/a}", "des li{a}eux{/a}"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un pn{a}eu{/a} → des pneu{a}s{/a}",
                "un bl{a}eu{/a} → des bleu{a}s{/a}",
              ],
              noBulletItems: [0, 1],
            },
          ],
        },
        {
          label: "-ou",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un tr{a}ou{/a}", "des trou{a}s{/a}"],
                ["un cl{a}ou{/a}", "des clou{a}s{/a}"],
                ["un c{a}ou{/a}", "des cou{a}s{/a}"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un bij{a}ou{/a} → des bij{a}oux{/a}",
                "un caill{a}ou{/a} → des caill{a}oux{/a}",
                "un ch{a}ou{/a} → des ch{a}oux{/a}",
                "un gen{a}ou{/a} → des gen{a}oux{/a}",
                "un hib{a}ou{/a} → des hib{a}oux{/a}",
                "un jouj{a}ou{/a} → des jouj{a}oux{/a}",
                "un p{a}ou{/a} → des p{a}oux{/a}",
              ],
              noBulletItems: [0, 1, 2, 3, 4, 5, 6],
            },
          ],
        },
        {
          label: "Cas particuliers",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un {a}œil{/a}", "des {a}yeux{/a}"],
                ["un {a}monsieur{/a}", "des {a}messieurs{/a}"],
                ["{a}madame{/a}", "{a}mesdames{/a}"],
                ["{a}mademoiselle{/a}", "{a}mesdemoiselles{/a}"],
              ],
            },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Exercice 1",
      instruction: "Choisissez la forme plurielle correcte.",
      items: [],
      poolSize: 5,
      pool: [
        // Cas général + s
        { sentence: "une pomme → des ___", choices: ["pommes", "pomme", "pommeses", "pomms"], correctIdx: 0 },
        { sentence: "un fruit → des ___", choices: ["fruits", "fruit", "fruites", "fruix"], correctIdx: 0 },
        { sentence: "une banane → des ___", choices: ["bananes", "banane", "bananex", "banans"], correctIdx: 0 },
        { sentence: "une tasse → des ___", choices: ["tasses", "tasse", "tassex", "tass"], correctIdx: 0 },
        // s / x / z inchangé
        { sentence: "le bras → les ___", choices: ["bras", "brases", "braux", "brass"], correctIdx: 0 },
        { sentence: "une noix → des ___", choices: ["noix", "noixes", "nois", "noixs"], correctIdx: 0 },
        { sentence: "un nez → des ___", choices: ["nez", "nezes", "neux", "ness"], correctIdx: 0 },
        // -al → -aux
        { sentence: "un animal → des ___", choices: ["animaux", "animals", "animales", "animaus"], correctIdx: 0 },
        { sentence: "un journal → des ___", choices: ["journaux", "journals", "jornales", "journaus"], correctIdx: 0 },
        { sentence: "un cheval → des ___", choices: ["chevaux", "chevals", "chevales", "chevaus"], correctIdx: 0 },
        // -al exceptions
        { sentence: "un bal → des ___", choices: ["bals", "baux", "bales", "bal"], correctIdx: 0 },
        { sentence: "un carnaval → des ___", choices: ["carnavals", "carnavaux", "carnavales", "carnaval"], correctIdx: 0 },
        { sentence: "un festival → des ___", choices: ["festivals", "festivaux", "festivales", "festival"], correctIdx: 0 },
        { sentence: "un récital → des ___", choices: ["récitals", "récitaux", "récitales", "récital"], correctIdx: 0 },
        // -ail + s
        { sentence: "un détail → des ___", choices: ["détails", "détaux", "détailes", "détail"], correctIdx: 0 },
        { sentence: "un portail → des ___", choices: ["portails", "portaux", "portailes", "portail"], correctIdx: 0 },
        { sentence: "un éventail → des ___", choices: ["éventails", "éventaux", "éventailes", "éventail"], correctIdx: 0 },
        // -ail → -aux
        { sentence: "un travail → des ___", choices: ["travaux", "travails", "travailes", "travaus"], correctIdx: 0 },
        { sentence: "un vitrail → des ___", choices: ["vitraux", "vitrails", "vitrailes", "vitrail"], correctIdx: 0 },
        { sentence: "un corail → des ___", choices: ["coraux", "corails", "corailes", "corail"], correctIdx: 0 },
        { sentence: "un bail → des ___", choices: ["baux", "bails", "bailes", "bail"], correctIdx: 0 },
        // -eau → -eaux
        { sentence: "un bateau → des ___", choices: ["bateaux", "bateaus", "bateaues", "bateau"], correctIdx: 0 },
        { sentence: "un gâteau → des ___", choices: ["gâteaux", "gâteaus", "gateaux", "gâteau"], correctIdx: 0 },
        { sentence: "un chapeau → des ___", choices: ["chapeaux", "chapeaus", "chapeaues", "chapeau"], correctIdx: 0 },
        { sentence: "un cadeau → des ___", choices: ["cadeaux", "cadeaus", "cadeaues", "cadeau"], correctIdx: 0 },
        // -au → -aux
        { sentence: "un tuyau → des ___", choices: ["tuyaux", "tuyaus", "tuyaues", "tuyau"], correctIdx: 0 },
        // -au exceptions
        { sentence: "un landau → des ___", choices: ["landaus", "landaux", "landaues", "landau"], correctIdx: 0 },
        { sentence: "un sarrau → des ___", choices: ["sarraus", "sarraux", "sarraues", "sarrau"], correctIdx: 0 },
        // -eu → -eux
        { sentence: "un feu → des ___", choices: ["feux", "feus", "feues", "feu"], correctIdx: 0 },
        { sentence: "un jeu → des ___", choices: ["jeux", "jeus", "jeues", "jeu"], correctIdx: 0 },
        { sentence: "un lieu → des ___", choices: ["lieux", "lieus", "lieues", "lieu"], correctIdx: 0 },
        // -eu exceptions
        { sentence: "un pneu → des ___", choices: ["pneus", "pneux", "pneues", "pneu"], correctIdx: 0 },
        { sentence: "un bleu → des ___", choices: ["bleus", "bleux", "bleues", "bleu"], correctIdx: 0 },
        // -ou + s
        { sentence: "un trou → des ___", choices: ["trous", "troux", "troues", "trou"], correctIdx: 0 },
        { sentence: "un clou → des ___", choices: ["clous", "cloux", "cloues", "clou"], correctIdx: 0 },
        { sentence: "un cou → des ___", choices: ["cous", "coux", "coues", "cou"], correctIdx: 0 },
        // -ou → -oux
        { sentence: "un bijou → des ___", choices: ["bijoux", "bijous", "bijoues", "bijou"], correctIdx: 0 },
        { sentence: "un caillou → des ___", choices: ["cailloux", "caillous", "cailloues", "caillou"], correctIdx: 0 },
        { sentence: "un chou → des ___", choices: ["choux", "chous", "choues", "chou"], correctIdx: 0 },
        { sentence: "un genou → des ___", choices: ["genoux", "genous", "genoues", "genou"], correctIdx: 0 },
        { sentence: "un hibou → des ___", choices: ["hiboux", "hibous", "hiboues", "hibou"], correctIdx: 0 },
        { sentence: "un joujou → des ___", choices: ["joujoux", "joujous", "joujoues", "joujou"], correctIdx: 0 },
        { sentence: "un pou → des ___", choices: ["poux", "pous", "poues", "pou"], correctIdx: 0 },
        // Cas particuliers
        { sentence: "un œil → des ___", choices: ["yeux", "œils", "oeils", "yeuxs"], correctIdx: 0 },
        { sentence: "un monsieur → des ___", choices: ["messieurs", "monsieurs", "monsieures", "messieur"], correctIdx: 0 },
        { sentence: "madame → ___", choices: ["mesdames", "madames", "mesdame", "madame"], correctIdx: 0 },
        { sentence: "mademoiselle → ___", choices: ["mesdemoiselles", "mademoiselles", "mesdemoiselle", "mademoiselle"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Écrivez la forme plurielle du nom.",
      items: [],
      poolSize: 5,
      pool: [
        // Cas général + s
        { sentence: "une pomme → des ___", hint: "+ s", answer: "pommes" },
        { sentence: "un fruit → des ___", hint: "+ s", answer: "fruits" },
        { sentence: "une banane → des ___", hint: "+ s", answer: "bananes" },
        { sentence: "une tasse → des ___", hint: "+ s", answer: "tasses" },
        // s / x / z inchangé
        { sentence: "le bras → les ___", hint: "inchangé", answer: "bras" },
        { sentence: "une noix → des ___", hint: "inchangé", answer: "noix" },
        { sentence: "un nez → des ___", hint: "inchangé", answer: "nez" },
        // -al → -aux
        { sentence: "un animal → des ___", hint: "-al → -aux", answer: "animaux" },
        { sentence: "un journal → des ___", hint: "-al → -aux", answer: "journaux" },
        { sentence: "un cheval → des ___", hint: "-al → -aux", answer: "chevaux" },
        // -al exceptions
        { sentence: "un bal → des ___", hint: "exception + s", answer: "bals" },
        { sentence: "un carnaval → des ___", hint: "exception + s", answer: "carnavals" },
        { sentence: "un festival → des ___", hint: "exception + s", answer: "festivals" },
        { sentence: "un récital → des ___", hint: "exception + s", answer: "récitals" },
        // -ail + s
        { sentence: "un détail → des ___", hint: "+ s", answer: "détails" },
        { sentence: "un portail → des ___", hint: "+ s", answer: "portails" },
        { sentence: "un éventail → des ___", hint: "+ s", answer: "éventails" },
        // -ail → -aux
        { sentence: "un travail → des ___", hint: "-ail → -aux", answer: "travaux" },
        { sentence: "un vitrail → des ___", hint: "-ail → -aux", answer: "vitraux" },
        { sentence: "un corail → des ___", hint: "-ail → -aux", answer: "coraux" },
        { sentence: "un bail → des ___", hint: "-ail → -aux", answer: "baux" },
        // -eau → -eaux
        { sentence: "un bateau → des ___", hint: "-eau → -eaux", answer: "bateaux" },
        { sentence: "un gâteau → des ___", hint: "-eau → -eaux", answer: "gâteaux" },
        { sentence: "un chapeau → des ___", hint: "-eau → -eaux", answer: "chapeaux" },
        { sentence: "un cadeau → des ___", hint: "-eau → -eaux", answer: "cadeaux" },
        // -au → -aux
        { sentence: "un tuyau → des ___", hint: "-au → -aux", answer: "tuyaux" },
        // -au exceptions
        { sentence: "un landau → des ___", hint: "exception + s", answer: "landaus" },
        { sentence: "un sarrau → des ___", hint: "exception + s", answer: "sarraus" },
        // -eu → -eux
        { sentence: "un feu → des ___", hint: "-eu → -eux", answer: "feux" },
        { sentence: "un jeu → des ___", hint: "-eu → -eux", answer: "jeux" },
        { sentence: "un lieu → des ___", hint: "-eu → -eux", answer: "lieux" },
        // -eu exceptions
        { sentence: "un pneu → des ___", hint: "exception + s", answer: "pneus" },
        { sentence: "un bleu → des ___", hint: "exception + s", answer: "bleus" },
        // -ou + s
        { sentence: "un trou → des ___", hint: "+ s", answer: "trous" },
        { sentence: "un clou → des ___", hint: "+ s", answer: "clous" },
        { sentence: "un cou → des ___", hint: "+ s", answer: "cous" },
        // -ou → -oux
        { sentence: "un bijou → des ___", hint: "+ x", answer: "bijoux" },
        { sentence: "un caillou → des ___", hint: "+ x", answer: "cailloux" },
        { sentence: "un chou → des ___", hint: "+ x", answer: "choux" },
        { sentence: "un genou → des ___", hint: "+ x", answer: "genoux" },
        { sentence: "un hibou → des ___", hint: "+ x", answer: "hiboux" },
        { sentence: "un joujou → des ___", hint: "+ x", answer: "joujoux" },
        { sentence: "un pou → des ___", hint: "+ x", answer: "poux" },
        // Cas particuliers
        { sentence: "un œil → des ___", hint: "irrégulier", answer: "yeux" },
        { sentence: "un monsieur → des ___", hint: "irrégulier", answer: "messieurs" },
        { sentence: "madame → ___", hint: "irrégulier", answer: "mesdames" },
        { sentence: "mademoiselle → ___", hint: "irrégulier", answer: "mesdemoiselles" },
      ],
    },
    {
      type: "fill",
      title: "Exercice 3",
      instruction: "Réécrivez les phrases au pluriel.",
      items: [],
      poolSize: 5,
      inputWidth: "w-[32rem]",
      pool: [
        // Cas général + s
        { sentence: "Un traducteur mange une pomme.\n___", hint: "pluriel", answer: "Des traducteurs mangent des pommes." },
        { sentence: "Une pomme est rouge.\n___", hint: "pluriel", answer: "Des pommes sont rouges." },
        { sentence: "Un fruit tombe de l'arbre.\n___", hint: "pluriel", answer: "Des fruits tombent de l'arbre." },
        { sentence: "Une banane est jaune.\n___", hint: "pluriel", answer: "Des bananes sont jaunes." },
        { sentence: "Une tasse est sur la table.\n___", hint: "pluriel", answer: "Des tasses sont sur la table." },
        // s / x / z inchangé
        { sentence: "Le bras est long.\n___", hint: "pluriel", answer: "Les bras sont longs." },
        { sentence: "Une noix tombe par terre.\n___", hint: "pluriel", answer: "Des noix tombent par terre." },
        { sentence: "Un nez est rouge.\n___", hint: "pluriel", answer: "Des nez sont rouges." },
        // -al → -aux
        { sentence: "Un animal court dans la forêt.\n___", hint: "pluriel", answer: "Des animaux courent dans la forêt." },
        { sentence: "Un journal est sur la table.\n___", hint: "pluriel", answer: "Des journaux sont sur la table." },
        { sentence: "Un cheval mange de l'herbe.\n___", hint: "pluriel", answer: "Des chevaux mangent de l'herbe." },
        // -al exceptions
        { sentence: "Un bal a lieu ce soir.\n___", hint: "pluriel", answer: "Des bals ont lieu ce soir." },
        { sentence: "Un carnaval anime la ville.\n___", hint: "pluriel", answer: "Des carnavals animent la ville." },
        { sentence: "Un festival commence demain.\n___", hint: "pluriel", answer: "Des festivals commencent demain." },
        { sentence: "Un récital plaît au public.\n___", hint: "pluriel", answer: "Des récitals plaisent au public." },
        // -ail + s
        { sentence: "Un détail est important.\n___", hint: "pluriel", answer: "Des détails sont importants." },
        { sentence: "Un portail s'ouvre lentement.\n___", hint: "pluriel", answer: "Des portails s'ouvrent lentement." },
        { sentence: "Un éventail est en soie.\n___", hint: "pluriel", answer: "Des éventails sont en soie." },
        // -ail → -aux
        { sentence: "Un travail est difficile.\n___", hint: "pluriel", answer: "Des travaux sont difficiles." },
        { sentence: "Un vitrail décore l'église.\n___", hint: "pluriel", answer: "Des vitraux décorent l'église." },
        { sentence: "Un corail pousse dans la mer.\n___", hint: "pluriel", answer: "Des coraux poussent dans la mer." },
        { sentence: "Un bail dure trois ans.\n___", hint: "pluriel", answer: "Des baux durent trois ans." },
        // -eau → -eaux
        { sentence: "Un bateau traverse le lac.\n___", hint: "pluriel", answer: "Des bateaux traversent le lac." },
        { sentence: "Un gâteau est délicieux.\n___", hint: "pluriel", answer: "Des gâteaux sont délicieux." },
        { sentence: "Un chapeau est sur la tête.\n___", hint: "pluriel", answer: "Des chapeaux sont sur la tête." },
        { sentence: "Un cadeau plaît à l'enfant.\n___", hint: "pluriel", answer: "Des cadeaux plaisent à l'enfant." },
        // -au → -aux
        { sentence: "Un tuyau fuit dans le jardin.\n___", hint: "pluriel", answer: "Des tuyaux fuient dans le jardin." },
        // -au exceptions
        { sentence: "Un landau est dans la rue.\n___", hint: "pluriel", answer: "Des landaus sont dans la rue." },
        { sentence: "Un sarrau protège les vêtements.\n___", hint: "pluriel", answer: "Des sarraus protègent les vêtements." },
        // -eu → -eux
        { sentence: "Un feu brûle dans la cheminée.\n___", hint: "pluriel", answer: "Des feux brûlent dans la cheminée." },
        { sentence: "Un jeu amuse les enfants.\n___", hint: "pluriel", answer: "Des jeux amusent les enfants." },
        { sentence: "Un lieu est calme.\n___", hint: "pluriel", answer: "Des lieux sont calmes." },
        // -eu exceptions
        { sentence: "Un pneu est crevé.\n___", hint: "pluriel", answer: "Des pneus sont crevés." },
        { sentence: "Un bleu marque le bras.\n___", hint: "pluriel", answer: "Des bleus marquent le bras." },
        // -ou + s
        { sentence: "Un trou apparaît dans le mur.\n___", hint: "pluriel", answer: "Des trous apparaissent dans le mur." },
        { sentence: "Un clou fixe le tableau.\n___", hint: "pluriel", answer: "Des clous fixent le tableau." },
        { sentence: "Un cou est long.\n___", hint: "pluriel", answer: "Des cous sont longs." },
        // -ou → -oux
        { sentence: "Un bijou brille au soleil.\n___", hint: "pluriel", answer: "Des bijoux brillent au soleil." },
        { sentence: "Un caillou est sur le chemin.\n___", hint: "pluriel", answer: "Des cailloux sont sur le chemin." },
        { sentence: "Un chou pousse dans le jardin.\n___", hint: "pluriel", answer: "Des choux poussent dans le jardin." },
        { sentence: "Un genou est blessé.\n___", hint: "pluriel", answer: "Des genoux sont blessés." },
        { sentence: "Un hibou chante la nuit.\n___", hint: "pluriel", answer: "Des hiboux chantent la nuit." },
        { sentence: "Un joujou amuse l'enfant.\n___", hint: "pluriel", answer: "Des joujoux amusent l'enfant." },
        { sentence: "Un pou vit dans les cheveux.\n___", hint: "pluriel", answer: "Des poux vivent dans les cheveux." },
        // Cas particuliers
        { sentence: "Un œil est fermé.\n___", hint: "pluriel", answer: "Des yeux sont fermés." },
        { sentence: "Un monsieur entre dans la salle.\n___", hint: "pluriel", answer: "Des messieurs entrent dans la salle." },
        { sentence: "Madame arrive à l'heure.\n___", hint: "pluriel", answer: "Mesdames arrivent à l'heure." },
        { sentence: "Mademoiselle lit un livre.\n___", hint: "pluriel", answer: "Mesdemoiselles lisent un livre." },
      ],
    },
  ],
};
