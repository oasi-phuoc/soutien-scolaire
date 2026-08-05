import type { GrammarLesson } from "../../grammar-data";

/** Unité 15 — Le genre des adjectifs (G3.1) */
export const A1_GR_GENRE_ADJECTIFS: GrammarLesson = {
  slug: "a1-gr-genre-adjectifs",
  code: "G3.1",
  level: "A1",
  title: "Le genre des adjectifs",
  theory: [
    {
      type: "heading",
      text: "Les adjectifs",
    },
    {
      type: "plain_list",
      items: [
        "L'adjectif donne une information sur le nom. Les adjectifs changent aussi selon le genre.",
      ],
    },
    {
      type: "plain_list",
      items: ["On ajoute souvent {a}-e{/a} au féminin."],
    },
    {
      type: "grid",
      headers: ["Masculin", "Féminin"],
      equalCols: true,
      rows: [
        ["Le sac est petit.", "La voiture est petit{a}e{/a}."],
        ["Un homme français parle.", "Une femme français{a}e{/a} parle."],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Si l'adjectif masculin se termine déjà par {a}e{/a}, le féminin ne change pas.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["Masculin", "Féminin"],
      equalCols: true,
      rows: [
        ["Ce lit est modern{a}e{/a}.", "Cette chaise est modern{a}e{/a}."],
        ["Ce garçon est calm{a}e{/a}.", "Cette fille est calm{a}e{/a}."],
      ],
    },
    {
      type: "heading",
      text: "Cas particuliers",
    },
    {
      type: "plain_list",
      items: [
        "Certains adjectifs ont des terminaisons différentes au masculin et au féminin.",
      ],
      noBulletItems: [0],
    },
    {
      type: "selector",
      buttonCols: 5,
      tabs: [
        {
          label: "-en",
          content: [
            {
              type: "plain_list",
              items: [
                "Les mots terminant par {a}-en{/a} au masculin changent en {a}-enne{/a} au féminin.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Masculin", "Féminin"],
              equalCols: true,
              rows: [
                ["Le meuble est anci{a}en{/a}.", "La table est anci{a}enne{/a}."],
                ["Le train est europé{a}en{/a}.", "La voiture est europé{a}enne{/a}."],
                ["Le prix est moy{a}en{/a}.", "La taille est moy{a}enne{/a}."],
              ],
            },
          ],
        },
        {
          label: "-on",
          content: [
            {
              type: "plain_list",
              items: [
                "Les mots terminant par {a}-on{/a} au masculin changent en {a}-onne{/a} au féminin.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Masculin", "Féminin"],
              equalCols: true,
              rows: [
                ["Le café est b{a}on{/a}.", "La tarte est b{a}onne{/a}."],
                ["Le chat est mign{a}on{/a}.", "La robe est mign{a}onne{/a}."],
                ["Il est bret{a}on{/a}.", "Elle est bret{a}onne{/a}."],
              ],
            },
          ],
        },
        {
          label: "-el",
          content: [
            {
              type: "plain_list",
              items: [
                "Les mots terminant par {a}-el{/a} au masculin changent en {a}-elle{/a} au féminin.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Masculin", "Féminin"],
              equalCols: true,
              rows: [
                ["Le parfum est natur{a}el{/a}.", "La fleur est natur{a}elle{/a}."],
                ["Le choix est personn{a}el{/a}.", "La lettre est personn{a}elle{/a}."],
                ["Le ton est form{a}el{/a}.", "La tenue est form{a}elle{/a}."],
              ],
            },
          ],
        },
        {
          label: "-er",
          content: [
            {
              type: "plain_list",
              items: [
                "Les mots terminant par {a}-er{/a} au masculin changent en {a}-ère{/a} au féminin.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Masculin", "Féminin"],
              equalCols: true,
              rows: [
                ["Il est étrang{a}er{/a}.", "Elle est étrang{a}ère{/a}."],
                ["Le sac est ch{a}er{/a}.", "La robe est ch{a}ère{/a}."],
                ["C'est le premi{a}er{/a} jour.", "C'est la premi{a}ère{/a} fois."],
              ],
            },
          ],
        },
        {
          label: "-et",
          content: [
            {
              type: "plain_list",
              items: [
                "Les mots terminant par {a}-et{/a} au masculin changent en {a}-ète{/a} ou {a}-ette{/a} au féminin.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Masculin", "Féminin"],
              equalCols: true,
              rows: [
                ["L'hôtel est compl{a}et{/a}.", "La salle est compl{a}ète{/a}."],
                ["Le pull est viol{a}et{/a}.", "La robe est viol{a}ette{/a}."],
                ["Le plan est secr{a}et{/a}.", "La porte est secr{a}ète{/a}."],
              ],
            },
          ],
        },
        {
          label: "-eux",
          content: [
            {
              type: "plain_list",
              items: [
                "Les mots terminant par {a}-eux{/a} au masculin changent en {a}-euse{/a} au féminin.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Masculin", "Féminin"],
              equalCols: true,
              rows: [
                ["Il est heur{a}eux{/a}.", "Elle est heur{a}euse{/a}."],
                ["Il est séri{a}eux{/a}.", "Elle est séri{a}euse{/a}."],
                ["Il est joy{a}eux{/a}.", "Elle est joy{a}euse{/a}."],
              ],
            },
          ],
        },
        {
          label: "-eur",
          content: [
            {
              type: "plain_list",
              items: [
                "Les mots terminant par {a}-eur{/a} au masculin changent en {a}-euse{/a} au féminin.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Masculin", "Féminin"],
              equalCols: true,
              rows: [
                ["Il est travaill{a}eur{/a}.", "Elle est travaill{a}euse{/a}."],
                ["Il est ment{a}eur{/a}.", "Elle est ment{a}euse{/a}."],
                ["Il est rêv{a}eur{/a}.", "Elle est rêv{a}euse{/a}."],
              ],
            },
          ],
        },
        {
          label: "-f",
          content: [
            {
              type: "plain_list",
              items: [
                "Les mots terminant par {a}-f{/a} au masculin changent en {a}-ve{/a} au féminin.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Masculin", "Féminin"],
              equalCols: true,
              rows: [
                ["Le sac est neu{a}f{/a}.", "La voiture est neu{a}ve{/a}."],
                ["Il est acti{a}f{/a}.", "Elle est acti{a}ve{/a}."],
                ["Il est sporti{a}f{/a}.", "Elle est sporti{a}ve{/a}."],
              ],
            },
          ],
        },
        {
          label: "-eau",
          content: [
            {
              type: "plain_list",
              items: [
                "Les mots terminant par {a}-eau{/a} au masculin changent en {a}-elle{/a} au féminin.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Masculin", "Féminin"],
              equalCols: true,
              rows: [
                ["Le dessin est b{a}eau{/a}.", "La peinture est b{a}elle{/a}."],
                ["Le lit est nouv{a}eau{/a}.", "La table est nouv{a}elle{/a}."],
                ["Le frère est jum{a}eau{/a}.", "La sœur est jum{a}elle{/a}."],
              ],
            },
          ],
        },
        {
          label: "Autres",
          content: [
            {
              type: "plain_list",
              items: [
                "Certains adjectifs sont très irréguliers pour la formation du féminin.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Masculin", "Féminin"],
              equalCols: true,
              rows: [
                ["Le mur est ba{a}s{/a}.", "La chaise est ba{a}sse{/a}."],
                ["Le mur est blan{a}c{/a}.", "La robe est blan{a}che{/a}."],
                ["Le tissu est dou{a}x{/a}.", "La voix est dou{a}ce{/a}."],
                ["Le livre est épai{a}s{/a}.", "La couverture est épai{a}sse{/a}."],
                ["Le billet est fau{a}x{/a}.", "La clé est fau{a}sse{/a}."],
                ["Il est fo{a}u{/a}.", "Elle est fo{a}lle{/a}."],
                ["Le pain est frai{a}s{/a}.", "La salade est fraî{a}che{/a}."],
                ["Il est gent{a}il{/a}.", "Elle est gent{a}ille{/a}."],
                ["Il est gre{a}c{/a}.", "Elle est gre{a}cque{/a}."],
                ["Le chat est gro{a}s{/a}.", "La souris est gro{a}sse{/a}."],
                ["Il est jalo{a}ux{/a}.", "Elle est jalo{a}use{/a}."],
                ["Le chemin est lon{a}g{/a}.", "La rue est lon{a}gue{/a}."],
                ["Le score est nu{a}l{/a}.", "La note est nu{a}lle{/a}."],
                ["Le lieu est publi{a}c{/a}.", "La place est publi{a}que{/a}."],
                ["Il est rou{a}x{/a}.", "Elle est rou{a}sse{/a}."],
                ["Le linge est se{a}c{/a}.", "La serviette est sè{a}che{/a}."],
                ["Il est tur{a}c{/a}.", "Elle est tur{a}que{/a}."],
                ["Il est vie{a}ux{/a}.", "Elle est vie{a}ille{/a}."],
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
      title: "Genre des adjectifs",
      instruction: "Choisissez la forme correcte de l'adjectif.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "La table est ___ .", choices: ["carrée", "carré", "carrées"], correctIdx: 0 },
        { sentence: "Le bureau est ___ .", choices: ["carré", "carrée", "carrés"], correctIdx: 0 },
        { sentence: "Cette fille est ___ .", choices: ["danoise", "danois", "danoises"], correctIdx: 0 },
        { sentence: "Cette chaise est ___ .", choices: ["moderne", "modern", "modernes"], correctIdx: 0 },
        { sentence: "Léa est ___ .", choices: ["petite", "petit", "petites"], correctIdx: 0 },
        { sentence: "Il est ___ .", choices: ["grand", "grande", "grands"], correctIdx: 0 },
        { sentence: "Elle est ___ .", choices: ["grande", "grand", "grands"], correctIdx: 0 },
        { sentence: "La valise est ___ .", choices: ["noire", "noir", "noirs"], correctIdx: 0 },
        { sentence: "Elle est ___ .", choices: ["française", "français", "françaises"], correctIdx: 0 },
        { sentence: "La chaise est ___ .", choices: ["bleue", "bleu", "bleus"], correctIdx: 0 },
        { sentence: "ancien → ___", choices: ["ancienne", "anciene", "anciènne"], correctIdx: 0 },
        { sentence: "bon → ___", choices: ["bonne", "bone", "bonn"], correctIdx: 0 },
        { sentence: "naturel → ___", choices: ["naturelle", "naturele", "naturell"], correctIdx: 0 },
        { sentence: "étranger → ___", choices: ["étrangère", "étrangere", "étrangèr"], correctIdx: 0 },
        { sentence: "complet → ___", choices: ["complète", "complete", "complette"], correctIdx: 0 },
        { sentence: "violet → ___", choices: ["violette", "violete", "violett"], correctIdx: 0 },
        { sentence: "heureux → ___", choices: ["heureuse", "heureus", "heureusee"], correctIdx: 0 },
        { sentence: "neuf → ___", choices: ["neuve", "neufe", "neuvee"], correctIdx: 0 },
        { sentence: "beau → ___", choices: ["belle", "beaue", "bellee"], correctIdx: 0 },
        { sentence: "vieux → ___", choices: ["vieille", "vieuse", "vieil"], correctIdx: 0 },
        { sentence: "blanc → ___", choices: ["blanche", "blance", "blanque"], correctIdx: 0 },
        { sentence: "long → ___", choices: ["longue", "longe", "longgue"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Accordez l'adjectif",
      instruction: "Écrivez l'adjectif au genre correct.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "La table est ___ (carré).", hint: "+ e", answer: "carrée" },
        { sentence: "Cette fille est ___ (danois).", hint: "+ e", answer: "danoise" },
        { sentence: "Cette chaise est ___ (moderne).", hint: "inchangé", answer: "moderne" },
        { sentence: "Léa est ___ (petit).", hint: "+ e", answer: "petite" },
        { sentence: "Elle est ___ (grand).", hint: "+ e", answer: "grande" },
        { sentence: "La valise est ___ (noir).", hint: "+ e", answer: "noire" },
        { sentence: "Elle est ___ (français).", hint: "+ e", answer: "française" },
        { sentence: "Elle est ___ (marocain).", hint: "+ e", answer: "marocaine" },
        { sentence: "Elle est ___ (brun).", hint: "+ e", answer: "brune" },
        { sentence: "La chaise est ___ (bleu).", hint: "+ e", answer: "bleue" },
        { sentence: "ancien → ___", hint: "-en → -enne", answer: "ancienne" },
        { sentence: "bon → ___", hint: "-on → -onne", answer: "bonne" },
        { sentence: "cher → ___", hint: "-er → -ère", answer: "chère" },
        { sentence: "violet → ___", hint: "-et → -ette", answer: "violette" },
        { sentence: "heureux → ___", hint: "-eux → -euse", answer: "heureuse" },
        { sentence: "neuf → ___", hint: "-f → -ve", answer: "neuve" },
        { sentence: "beau → ___", hint: "-eau → -elle", answer: "belle" },
        { sentence: "blanc → ___", hint: "irrégulier", answer: "blanche" },
        { sentence: "vieux → ___", hint: "irrégulier", answer: "vieille" },
        { sentence: "sec → ___", hint: "irrégulier", answer: "sèche" },
      ],
    },
  ],
};
