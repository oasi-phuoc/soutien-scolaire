import { verbsToSelector, type GrammarLesson } from "../../grammar-data";

/** G4.2 — Les articles contractés + les verbes de mouvement (ex-R2.1) */
export const A1_GR_ARTICLES_CONTRACTES: GrammarLesson = {
  slug: "a1-gr-articles-contractes",
  code: "G4.2",
  level: "A1",
  title: "Les articles contractés",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      text: "Les articles définis ({a}le{/a}, {a}la{/a}, {a}l'{/a}, {a}les{/a}) sont souvent utilisés après les prépositions {a}à{/a} et {a}de{/a}.",
    },
    {
      type: "text",
      label: "Lieu",
      transLabel: {
        en: "Place",
        ar: "المكان",
        fa: "مکان",
        pt: "Lugar",
        so: "Goob",
        ti: "ቦታ",
        tr: "Yer",
        ps: "ځای",
        uk: "Місце",
      },
      text: "Pour indiquer un lieu, on utilise la préposition {a}à{/a} ou {a}de{/a}.",
      transText: {
        en: "To indicate a place, we use the preposition {a}à{/a} or {a}de{/a}.",
        ar: "للدلالة على مكان، نستخدم حرف الجر {a}à{/a} أو {a}de{/a}.",
        fa: "برای نشان دادن مکان، از حرف اضافه {a}à{/a} یا {a}de{/a} استفاده می‌کنیم.",
        pt: "Para indicar um lugar, usamos a preposição {a}à{/a} ou {a}de{/a}.",
        so: "Si loo muujiyo meel, waxaan isticmaalnaa xarafka hore ee {a}à{/a} ama {a}de{/a}.",
        ti: "ቦታ ንምምልካት፣ እቲ {a}à{/a} ወይ {a}de{/a} ዝብል ቅድመ ቃል ንጥቀም።",
        tr: "Bir yeri belirtmek için {a}à{/a} veya {a}de{/a} edatını kullanırız.",
        ps: "د ځای د ښودلو لپاره، موږ د {a}à{/a} یا {a}de{/a} حرف اضافه کاروو.",
        uk: "Щоб указати місце, ми використовуємо прийменник {a}à{/a} або {a}de{/a}.",
      },
      items: [
        "Je suis {a}à la{/a} gare.",
        "Il habite à côté {a}de la{/a} Poste.",
      ],
      noBulletItems: [0,1],
    },
    {
      type: "text",
      label: "Noms",
      transLabel: {
        en: "Nouns",
        ar: "الأسماء",
        fa: "اسم‌ها",
        pt: "Nomes",
        so: "Magacyada",
        ti: "ስማት",
        tr: "İsimler",
        ps: "نومونه",
        uk: "Іменники",
      },
      text: "Pour relier deux noms ensemble, on utilise aussi la préposition {a}de{/a}.",
      transText: {
        en: "To link two nouns together, we also use the preposition {a}de{/a}.",
        ar: "لربط اسمين معًا، نستخدم أيضًا حرف الجر {a}de{/a}.",
        fa: "برای مرتبط کردن دو اسم با یکدیگر، از حرف اضافه {a}de{/a} نیز استفاده می‌کنیم.",
        pt: "Para ligar dois nomes, também usamos a preposição {a}de{/a}.",
        so: "Si loo isku xiro laba magac, waxaan sidoo kale isticmaalnaa xarafka hore ee {a}de{/a}.",
        ti: "ክልተ ስማት ንምትእስሳር፣ እቲ {a}de{/a} ዝብል ቅድመ ቃል እውን ንጥቀም።",
        tr: "İki ismi birbirine bağlamak için {a}de{/a} edatını da kullanırız.",
        ps: "د دوو نومونو د یوځای کولو لپاره، موږ د {a}de{/a} حرف اضافه هم کاروو.",
        uk: "Щоб поєднати два іменники, ми також використовуємо прийменник {a}de{/a}.",
      },
      items: [
        "Le bureau de la maîtresse",
        "La salle de sport",
      ],
      noBulletItems: [0,1],
    },
    {
      type: "text",
      text: "{a}Verbes{/a}",
    },
    {
      type: "text",
      text: "Certains verbes ont besoin de ces prépositions.",
    },
    {
      type: "grid",
      headers: ["","Exemple",],
      boldFirstCol: true,
      colWidths: ["35%","65%",
      ],
      rows: [
        [
          "Jouer {a}à{/a}\n+ sport",
          "Marie joue à la balle.",
        ],
        [
          "Jouer {a}de{/a}\n+ instrument",
          "Julie joue de la flûte.",
        ],
        [
          "Avoir mal {a}à{/a}\n+ partie du corps",
          "Nous avons mal à la tête.",
        ],
      ],
    },
    {
      type: "heading",
      text: "Les verbes de mouvement",
      trans: {
        en: "Movement verbs in the present",
        ar: "أفعال الحركة في المضارع",
        fa: "افعال حرکتی در زمان حال",
        ti: "ግሲያት ምቅስቃስ ኣብ ሕጂ ጊዜ",
        uk: "Дієслова руху у теперішньому часі",
      },
    },
    {
      type: "text",
      label: "Verbes de mouvement",
      text: "Certains verbes de mouvement sont suivis d'une {a}préposition{/a} ({a}à{/a}, {a}de{/a}, etc.) qui indique la {a}destination{/a} ou l'{a}origine{/a}.\nClique sur chaque verbe pour voir sa conjugaison.",
      transText: {
        en: "Some verbs of movement are followed by a {a}preposition{/a} ({a}à{/a}, {a}de{/a}, etc.) that indicates the {a}destination{/a} or the {a}origin{/a}.\nClick on each verb to see its conjugation.",
        ar: "تتبع بعض أفعال الحركة {a}بحرف جر{/a} ({a}à{/a}، {a}de{/a}، إلخ) يحدد {a}الوجهة{/a} أو {a}الأصل{/a}.\nانقر على كل فعل لرؤية تصريفه.",
        fa: "برخی از افعال حرکتی با یک {a}حرف اضافه{/a} ({a}à{/a}، {a}de{/a} و غیره) می‌آیند که {a}مقصد{/a} یا {a}مبدأ{/a} را نشان می‌دهد.\nروی هر فعل کلیک کنید تا صرف آن را ببینید.",
        pt: "Alguns verbos de movimento são seguidos de uma {a}preposição{/a} ({a}à{/a}, {a}de{/a}, etc.) que indica o {a}destino{/a} ou a {a}origem{/a}.\nClique em cada verbo para ver a sua conjugação.",
        so: "Qaar ka mid ah falalka dhaqdhaqaaqa waxaa raaca {a}xaraf-hore{/a} ({a}à{/a}, {a}de{/a}, iwm.) oo tilmaamaya {a}meesha loo socdo{/a} ama {a}meesha laga yimid{/a}.\nGuji fal kasta si aad u aragto isku-xirkiisa.",
        ti: "ገለ ግሲታት ምንቅስቓስ ብ{a}ቅድመ ቃል{/a} ({a}à{/a}፣ {a}de{/a}፣ ወዘተ) ይስዕቡ፣ እዚ ድማ {a}መዕረፊ ቦታ{/a} ወይ {a}መበገሲ ቦታ{/a} የመልክት።\nንነፍሲ ወከፍ ግሲ ንምስትውዓል ክሊክ ግበር።",
        tr: "Bazı hareket fiillerinden sonra, {a}hedefi{/a} veya {a}kaynağı{/a} belirten bir {a}edat{/a} ({a}à{/a}, {a}de{/a} vb.) kullanılır.\nÇekimini görmek için her fiile tıklayın.",
        ps: "د حرکت ځینې فعلونه د {a}حرف اضافې{/a} ({a}à{/a}، {a}de{/a} او نور) سره راځي چې {a}موخه{/a} یا {a}اصل{/a} ښيي.\nد هر فعل د صرف د لیدلو لپاره پرې کلیک وکړئ.",
        uk: "Після деяких дієслів руху вживається {a}прийменник{/a} ({a}à{/a}, {a}de{/a} тощо), який указує на {a}напрямок{/a} або {a}походження{/a}.\nНатисніть на кожне дієслово, щоб переглянути його відмінювання.",
      },
    },
    verbsToSelector([
        { infinitive: "aller", radical: "", rows: [{ pronoun: "je", ending: "vais" }, { pronoun: "tu", ending: "vas" }, { pronoun: "il / elle / on", ending: "va" }, { pronoun: "nous", ending: "allons" }, { pronoun: "vous", ending: "allez" }, { pronoun: "ils / elles", ending: "vont" }] },
        { infinitive: "venir", radical: "", rows: [{ pronoun: "je", ending: "viens" }, { pronoun: "tu", ending: "viens" }, { pronoun: "il / elle / on", ending: "vient" }, { pronoun: "nous", ending: "venons" }, { pronoun: "vous", ending: "venez" }, { pronoun: "ils / elles", ending: "viennent" }] },
        { infinitive: "partir", radical: "par", rows: [{ pronoun: "je", ending: "s" }, { pronoun: "tu", ending: "s" }, { pronoun: "il / elle / on", ending: "t" }, { pronoun: "nous", ending: "tons" }, { pronoun: "vous", ending: "tez" }, { pronoun: "ils / elles", ending: "tent" }] },
        { infinitive: "arriver", radical: "arriv", rows: [{ pronoun: "j'", ending: "e" }, { pronoun: "tu", ending: "es" }, { pronoun: "il / elle / on", ending: "e" }, { pronoun: "nous", ending: "ons" }, { pronoun: "vous", ending: "ez" }, { pronoun: "ils / elles", ending: "ent" }] },
        { infinitive: "entrer", radical: "entr", rows: [{ pronoun: "j'", ending: "e" }, { pronoun: "tu", ending: "es" }, { pronoun: "il / elle / on", ending: "e" }, { pronoun: "nous", ending: "ons" }, { pronoun: "vous", ending: "ez" }, { pronoun: "ils / elles", ending: "ent" }] },
        { infinitive: "sortir", radical: "sor", rows: [{ pronoun: "je", ending: "s" }, { pronoun: "tu", ending: "s" }, { pronoun: "il / elle / on", ending: "t" }, { pronoun: "nous", ending: "tons" }, { pronoun: "vous", ending: "tez" }, { pronoun: "ils / elles", ending: "tent" }] },
        { infinitive: "monter", radical: "mont", rows: [{ pronoun: "je", ending: "e" }, { pronoun: "tu", ending: "es" }, { pronoun: "il / elle / on", ending: "e" }, { pronoun: "nous", ending: "ons" }, { pronoun: "vous", ending: "ez" }, { pronoun: "ils / elles", ending: "ent" }] },
        { infinitive: "descendre", radical: "descend", rows: [{ pronoun: "je", ending: "s" }, { pronoun: "tu", ending: "s" }, { pronoun: "il / elle / on", ending: "" }, { pronoun: "nous", ending: "ons" }, { pronoun: "vous", ending: "ez" }, { pronoun: "ils / elles", ending: "ent" }] },
        { infinitive: "marcher", radical: "march", rows: [{ pronoun: "je", ending: "e" }, { pronoun: "tu", ending: "es" }, { pronoun: "il / elle / on", ending: "e" }, { pronoun: "nous", ending: "ons" }, { pronoun: "vous", ending: "ez" }, { pronoun: "ils / elles", ending: "ent" }] },
        { infinitive: "courir", radical: "cour", rows: [{ pronoun: "je", ending: "s" }, { pronoun: "tu", ending: "s" }, { pronoun: "il / elle / on", ending: "t" }, { pronoun: "nous", ending: "ons" }, { pronoun: "vous", ending: "ez" }, { pronoun: "ils / elles", ending: "ent" }] },
      ], { buttonCols: 5 }),
    {
      type: "heading",
      text: "Les prépositions avec les verbes de mouvement",
      trans: {
        en: "Prepositions with movement verbs",
        ar: "حروف الجر مع أفعال الحركة",
        fa: "حروف اضافه با افعال حرکتی",
        ti: "ናይ ምቅስቃስ ግሲያት ምስ ቅድሚ ስም ዝኸዱ ቃላት",
        uk: "Прийменники з дієсловами руху",
      },
      sub: true,
    },
    {
      type: "text",
      items: [
        "Certains verbes de mouvement sont suivis d'une préposition qui indique la destination ou l'origine.",
      ],
      noBulletItems: [
        0,
      ],
      transItems: {
        en: [
          "Some movement verbs are followed by a preposition indicating destination or origin.",
        ],
        ar: [
          "بعض أفعال الحركة تتبعها حروف جر تدل على الوجهة أو الأصل.",
        ],
        fa: [
          "برخی افعال حرکتی با حرف اضافه‌ای همراه می‌شوند که مقصد یا مبدأ را نشان می‌دهد.",
        ],
        ti: [
          "ገሊኦም ግሲያት ምቅስቃስ ምስ ቅድሚ ስም ይስዓቡ ዝዕላምኡ ወይ ምንጪ ዘርኢ።",
        ],
        uk: [
          "Деякі дієслова руху супроводжуються прийменником, що вказує на напрямок або походження.",
        ],
      },
    },
    {
      type: "text",
      label: "aller + destination",
      items: [
        "{a}à{/a} + ville → Je vais {a}à{/a} Paris.",
        "{a}en{/a} + pays féminin → Elle va {a}en{/a} France.",
        "{a}au{/a} + pays masculin → Il va {a}au{/a} Maroc.",
        "{a}aux{/a} + pays pluriel → Nous allons {a}aux{/a} États-Unis.",
        "{a}chez{/a} + personne → Tu vas {a}chez{/a} le médecin.",
      ],
      noBulletItems: [
        0,
        1,
        2,
        3,
        4,
      ],
      transLabel: {
        en: "aller + destination",
        ar: "aller + الوجهة",
        fa: "aller + مقصد",
        ti: "aller + ናበይ",
        uk: "aller + напрямок",
      },
    },
    {
      type: "text",
      label: "venir + origine",
      items: [
        "{a}de{/a} + ville → Je viens {a}de{/a} Paris.",
        "{a}de{/a} + pays féminin → Elle vient {a}de{/a} France.",
        "{a}du{/a} + pays masculin → Il vient {a}du{/a} Maroc.",
        "{a}des{/a} + pays pluriel → Tu viens {a}des{/a} États-Unis.",
        "{a}de chez{/a} + personne → Elle vient {a}de chez{/a} le médecin.",
      ],
      noBulletItems: [
        0,
        1,
        2,
        3,
        4,
      ],
      transLabel: {
        en: "venir + origin",
        ar: "venir + الأصل",
        fa: "venir + مبدأ",
        ti: "venir + ካበይ",
        uk: "venir + походження",
      },
    },
    {
      type: "selector",
      tabs: [
        {
          label: "aller",
          content: [
            {
              type: "text",
              label: "Destination",
              items: [
                "{a}à{/a} + ville → Je vais {a}à{/a} Paris.",
                "{a}en{/a} + pays féminin → Elle va {a}en{/a} France.",
                "{a}au{/a} + pays masculin → Il va {a}au{/a} Maroc.",
                "{a}aux{/a} + pays pluriel → Nous allons {a}aux{/a} États-Unis.",
                "{a}chez{/a} + personne → Tu vas {a}chez{/a} le médecin.",
              ],
              noBulletItems: [
                0,
                1,
                2,
                3,
                4,
              ],
            },
          ],
        },
        {
          label: "venir",
          content: [
            {
              type: "text",
              label: "Origine",
              items: [
                "{a}de{/a} + ville → Je viens {a}de{/a} Paris.",
                "{a}de{/a} + pays féminin → Elle vient {a}de{/a} France.",
                "{a}du{/a} + pays masculin → Il vient {a}du{/a} Maroc.",
                "{a}des{/a} + pays pluriel → Tu viens {a}des{/a} États-Unis.",
                "{a}de chez{/a} + personne → Elle vient {a}de chez{/a} le médecin.",
              ],
              noBulletItems: [
                0,
                1,
                2,
                3,
                4,
              ],
            },
          ],
        },
        {
          label: "partir",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}de / du / des{/a} (origine) → Je pars {a}de{/a} Lyon.",
                "{a}pour{/a} (destination) → Il part {a}pour{/a} Rome.",
              ],
              noBulletItems: [
                0,
                1,
              ],
            },
          ],
        },
        {
          label: "arriver",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}à / en / au / aux{/a} (destination) → Elle arrive {a}à{/a} la gare.",
                "{a}de / du / des{/a} (origine) → Il arrive {a}du{/a} travail.",
              ],
              noBulletItems: [
                0,
                1,
              ],
            },
          ],
        },
        {
          label: "entrer",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}dans{/a} → Il entre {a}dans{/a} la salle.",
              ],
              noBulletItems: [
                0,
              ],
            },
          ],
        },
        {
          label: "sortir",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}de / du / de la{/a} → Elle sort {a}de{/a} l'école.",
                "Il sort {a}du{/a} bureau.",
              ],
              noBulletItems: [
                0,
                1,
              ],
            },
          ],
        },
        {
          label: "monter",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}dans{/a} → Je monte {a}dans{/a} le bus.",
                "{a}sur{/a} → Elle monte {a}sur{/a} le vélo.",
              ],
              noBulletItems: [
                0,
                1,
              ],
            },
          ],
        },
        {
          label: "descendre",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}du{/a} → Il descend {a}du{/a} train.",
                "{a}de{/a} → Elle descend {a}de{/a} la voiture.",
              ],
              noBulletItems: [
                0,
                1,
              ],
            },
          ],
        },
        {
          label: "marcher",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}dans{/a} → Il marche {a}dans{/a} la rue.",
                "{a}vers{/a} → Nous marchons {a}vers{/a} l'école.",
                "{a}jusqu'à{/a} → Il marche {a}jusqu'à{/a} la gare.",
              ],
              noBulletItems: [
                0,
                1,
                2,
              ],
            },
          ],
        },
        {
          label: "courir",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}dans{/a} → Il court {a}dans{/a} le parc.",
                "{a}vers{/a} → Elle court {a}vers{/a} la sortie.",
                "{a}jusqu'à{/a} → Il court {a}jusqu'à{/a} l'arrivée.",
              ],
              noBulletItems: [
                0,
                1,
                2,
              ],
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "text",
      text: "Quand les prépositions {a}à{/a} et {a}de{/a} sont suivies de l'article {a}le{/a} ou {a}les{/a}, elles se contractent obligatoirement.",
      transText: {
        en: "When the prepositions {a}à{/a} and {a}de{/a} are followed by the article {a}le{/a} or {a}les{/a}, they must contract.",
        ar: "عندما تأتي حروف الجر {a}à{/a} و{a}de{/a} قبل أداتي التعريف {a}le{/a} أو {a}les{/a}، فإنها تُدمج وجوبًا.",
        fa: "وقتی حروف اضافه {a}à{/a} و {a}de{/a} قبل حروف تعریف {a}le{/a} یا {a}les{/a} قرار می‌گیرند، باید به‌صورت اجباری ادغام شوند.",
        pt: "Quando as preposições {a}à{/a} e {a}de{/a} são seguidas dos artigos {a}le{/a} ou {a}les{/a}, contraem-se obrigatoriamente.",
        so: "Marka xarafyada hore ee {a}à{/a} iyo {a}de{/a} ay ka horreeyaan maqaalka {a}le{/a} ama {a}les{/a}, waa in si khasab ah loo isku daraa.",
        ti: "እቶም ቅድመ ቃላት {a}à{/a}ን {a}de{/a}ን ብኣንቀጽ {a}le{/a} ወይ {a}les{/a} ምስ ዝስዕቡ፣ ብግዴታ ይጠቓለሉ።",
        tr: "{a}à{/a} ve {a}de{/a} edatlarından sonra {a}le{/a} veya {a}les{/a} artikeli geldiğinde, bunlar zorunlu olarak birleşir.",
        ps: "کله چې د {a}à{/a} او {a}de{/a} حرف اضافه د {a}le{/a} یا {a}les{/a} له ټاکلي توري وروسته راشي، نو په اجباري ډول سره یوځای کېږي.",
        uk: "Коли після прийменників {a}à{/a} і {a}de{/a} стоять артиклі {a}le{/a} або {a}les{/a}, вони обов'язково зливаються.",
      },
    },
    {
      type: "grid",
      headers: ["", "Contraction", "Exemple"],
      boldFirstCol: true,
      colWidths: ["28%", "24%", "48%"],
      rows: [
        ["à + le", "{a}au{/a}", "Elle est au supermarché."],
        ["à + les", "{a}aux{/a}", "Elle est aux toilettes."],
        ["de + le", "{a}du{/a}", "Le couloir du métro."],
        ["de + les", "{a}des{/a}", "La salle des professeurs."],
      ],
    },
    {
      type: "text",
      text: "{a}La{/a} et {a}l'{/a} ne se contractent jamais.",
      items: [
        "Je vais {a}à la{/a} pharmacie",
        "Je vais {a}à l'{/a}école",
      ],
      noBulletItems: [0,1],
    },
    {
      type: "heading",
      text: "Les verbes de mouvement",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Articles contractés",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        {
          sentence: "Je suis ___ supermarché.",
          choices: [
            "au",
            "à le",
            "à la",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Dans le couloir ___ métro.",
          choices: [
            "du",
            "de le",
            "de la",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Elle est ___ toilettes.",
          choices: [
            "aux",
            "à les",
            "au",
          ],
          correctIdx: 0,
        },
        {
          sentence: "La salle ___ professeurs.",
          choices: [
            "des",
            "de les",
            "du",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Je suis ___ gare.",
          choices: [
            "à la",
            "au",
            "à le",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Le bureau ___ assistante.",
          choices: [
            "de l'",
            "du",
            "de le",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Il joue ___ balle.",
          choices: [
            "à la",
            "au",
            "à le",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Elle joue ___ flûte.",
          choices: [
            "de la",
            "du",
            "à la",
          ],
          correctIdx: 0,
        },
        {
          sentence: "J'ai mal ___ tête.",
          choices: [
            "à la",
            "au",
            "à le",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Il a mal ___ dos.",
          choices: [
            "au",
            "à le",
            "à la",
          ],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Contractez",
      instruction: "Écrivez la forme contractée correcte (au, aux, du, des…).",
      items: [],
      poolSize: 5,
      pool: [
        {
          sentence: "Elle est ___ supermarché. (à + le)",
          hint: "à + le",
          answer: "au",
        },
        {
          sentence: "Elle est ___ toilettes. (à + les)",
          hint: "à + les",
          answer: "aux",
        },
        {
          sentence: "Le couloir ___ métro. (de + le)",
          hint: "de + le",
          answer: "du",
        },
        {
          sentence: "La salle ___ professeurs. (de + les)",
          hint: "de + les",
          answer: "des",
        },
        {
          sentence: "Je suis ___ gare. (à + la)",
          hint: "pas de contraction",
          answer: "à la",
        },
        {
          sentence: "Il habite à côté ___ Poste. (de + la)",
          hint: "pas de contraction",
          answer: "de la",
        },
        {
          sentence: "Le bureau ___ assistante. (de + l')",
          hint: "pas de contraction",
          answer: "de l'",
        },
        {
          sentence: "Elle est ___ église. (à + l')",
          hint: "pas de contraction",
          answer: "à l'",
        },
        {
          sentence: "Il a mal ___ dents. (à + les)",
          hint: "à + les",
          answer: "aux",
        },
        {
          sentence: "La résidence ___ étudiants. (de + les)",
          hint: "de + les",
          answer: "des",
        },
      ],
    },
    {
      type: "fill",
      title: "Exercice 1",
      instruction: "Complétez avec la terminaison des verbes.",
      transInstruction: {
        en: "Complete with the verb endings.",
        ar: "أكمل بنهايات الأفعال.",
        fa: "با پایانه‌های فعل کامل کنید.",
        ti: "ብመወዳእታ ግሲታት ምላእ።",
        uk: "Доповніть закінченнями дієслів.",
      },
      items: [],
      pool: [
        {
          sentence: "Je par___ pour le travail.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "s",
        },
        {
          sentence: "Tu par___ en vacances.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "s",
        },
        {
          sentence: "Il par___ tôt le matin.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "t",
        },
        {
          sentence: "Elle par___ en voyage.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "t",
        },
        {
          sentence: "Nous par___ à l'étranger.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "tons",
        },
        {
          sentence: "Vous par___ en voiture.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "tez",
        },
        {
          sentence: "Ils par___ à midi.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "tent",
        },
        {
          sentence: "Elles par___ seul.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "tent",
        },
        {
          sentence: "J'arriv___ à l'école.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "e",
        },
        {
          sentence: "Tu arriv___ en retard.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "es",
        },
        {
          sentence: "Il arriv___ à l'heure.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "e",
        },
        {
          sentence: "Elle arriv___ à la gare.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "e",
        },
        {
          sentence: "Nous arriv___ à Paris.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ons",
        },
        {
          sentence: "Vous arriv___ le soir.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ez",
        },
        {
          sentence: "Ils arriv___ tôt.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ent",
        },
        {
          sentence: "Elles arriv___ en avance.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ent",
        },
        {
          sentence: "J'entr___ dans la salle.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "e",
        },
        {
          sentence: "Tu entr___ dans la maison.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "es",
        },
        {
          sentence: "Il entr___ en classe.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "e",
        },
        {
          sentence: "Elle entr___ dans le magasin.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "e",
        },
        {
          sentence: "Nous entr___ sans frapper.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ons",
        },
        {
          sentence: "Vous entr___ par la porte.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ez",
        },
        {
          sentence: "Ils entr___ dans le couloir.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ent",
        },
        {
          sentence: "Elles entr___ dans la cuisine.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ent",
        },
        {
          sentence: "Je sor___ du travail.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "s",
        },
        {
          sentence: "Tu sor___ de la maison.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "s",
        },
        {
          sentence: "Il sor___ le soir.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "t",
        },
        {
          sentence: "Elle sor___ avec des amis.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "t",
        },
        {
          sentence: "Nous sor___ le week-end.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "tons",
        },
        {
          sentence: "Vous sor___ tard.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "tez",
        },
        {
          sentence: "Ils sor___ de l'école.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "tent",
        },
        {
          sentence: "Elles sor___ en courant.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "tent",
        },
        {
          sentence: "Je mont___ dans le bus.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "e",
        },
        {
          sentence: "Tu mont___ à l'étage.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "es",
        },
        {
          sentence: "Il mont___ les escaliers.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "e",
        },
        {
          sentence: "Elle mont___ sur le toit.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "e",
        },
        {
          sentence: "Nous mont___ vite.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ons",
        },
        {
          sentence: "Vous mont___ dans le train.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ez",
        },
        {
          sentence: "Ils mont___ lentement.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ent",
        },
        {
          sentence: "Elles mont___ au premier étage.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ent",
        },
        {
          sentence: "Je descend___ à la cave.",
          hint: "-s / -ons / -ez / -ent",
          answer: "s",
        },
        {
          sentence: "Tu descend___ du bus.",
          hint: "-s / -ons / -ez / -ent",
          answer: "s",
        },
        {
          sentence: "Il descend___ les escaliers.",
          hint: "-s / -ons / -ez / -ent",
          answer: "",
        },
        {
          sentence: "Elle descend___ du train.",
          hint: "-s / -ons / -ez / -ent",
          answer: "",
        },
        {
          sentence: "Nous descend___ dans la rue.",
          hint: "-s / -ons / -ez / -ent",
          answer: "ons",
        },
        {
          sentence: "Vous descend___ rapidement.",
          hint: "-s / -ons / -ez / -ent",
          answer: "ez",
        },
        {
          sentence: "Ils descend___ au rez-de-chaussée.",
          hint: "-s / -ons / -ez / -ent",
          answer: "ent",
        },
        {
          sentence: "Elles descend___ du vélo.",
          hint: "-s / -ons / -ez / -ent",
          answer: "ent",
        },
        {
          sentence: "Je march___ vite.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "e",
        },
        {
          sentence: "Tu march___ dans la rue.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "es",
        },
        {
          sentence: "Il march___ dans le parc.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "e",
        },
        {
          sentence: "Elle march___ tous les jours.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "e",
        },
        {
          sentence: "Nous march___ lentement.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ons",
        },
        {
          sentence: "Vous march___ au bord de la mer.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ez",
        },
        {
          sentence: "Ils march___ sous la pluie.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ent",
        },
        {
          sentence: "Elles march___ longtemps.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "ent",
        },
        {
          sentence: "Je cour___ dans le parc.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "s",
        },
        {
          sentence: "Tu cour___ tous les matins.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "s",
        },
        {
          sentence: "Il cour___ vite.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "t",
        },
        {
          sentence: "Elle cour___ après le bus.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "t",
        },
        {
          sentence: "Nous cour___ le week-end.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "ons",
        },
        {
          sentence: "Vous cour___ sous la pluie.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "ez",
        },
        {
          sentence: "Ils cour___ longtemps.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "ent",
        },
        {
          sentence: "Elles cour___ avec des amis.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "ent",
        },
      ],
      poolSize: 8,
    },
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Conjuguez les verbes entre parenthèses.",
      transInstruction: {
        en: "Conjugate the verbs in parentheses.",
        ar: "صرّف الأفعال الموجودة بين القوسين.",
        fa: "افعال داخل پرانتز را صرف کنید.",
        ti: "ኣብ ቅንፍ ዘለዉ ግሲታት ኣጻርይ።",
        uk: "Відмінюйте дієслова в дужках.",
      },
      items: [],
      pool: [
        {
          sentence: "Je ___ (partir) tôt demain.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "pars",
        },
        {
          sentence: "Tu ___ (partir) en avion.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "pars",
        },
        {
          sentence: "Il ___ (partir) en train.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "part",
        },
        {
          sentence: "Elle ___ (partir) d'ici.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "part",
        },
        {
          sentence: "Nous ___ (partir) ce soir.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "partons",
        },
        {
          sentence: "Vous ___ (partir) de bonne heure.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "partez",
        },
        {
          sentence: "Ils ___ (partir) pour Paris.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "partent",
        },
        {
          sentence: "Elles ___ (partir) immédiatement.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "partent",
        },
        {
          sentence: "J'___ (arriver) chez nous.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "arrive",
        },
        {
          sentence: "Tu ___ (arriver) de l'aéroport.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "arrives",
        },
        {
          sentence: "Il ___ (arriver) avec des bagages.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "arrive",
        },
        {
          sentence: "Elle ___ (arriver) de Suisse.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "arrive",
        },
        {
          sentence: "Nous ___ (arriver) au village.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "arrivons",
        },
        {
          sentence: "Vous ___ (arriver) à l'improviste.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "arrivez",
        },
        {
          sentence: "Ils ___ (arriver) de loin.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "arrivent",
        },
        {
          sentence: "Elles ___ (arriver) à la fête.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "arrivent",
        },
        {
          sentence: "J'___ (entrer) chez le directeur.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "entre",
        },
        {
          sentence: "Tu ___ (entrer) dans l'ascenseur.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "entres",
        },
        {
          sentence: "Il ___ (entrer) en scène.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "entre",
        },
        {
          sentence: "Elle ___ (entrer) dans le bâtiment.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "entre",
        },
        {
          sentence: "Nous ___ (entrer) tranquillement.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "entrons",
        },
        {
          sentence: "Vous ___ (entrer) dans la bibliothèque.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "entrez",
        },
        {
          sentence: "Ils ___ (entrer) dans le restaurant.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "entrent",
        },
        {
          sentence: "Elles ___ (entrer) dans la cour.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "entrent",
        },
        {
          sentence: "Je ___ (sortir) en famille.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "sors",
        },
        {
          sentence: "Tu ___ (sortir) pour une promenade.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "sors",
        },
        {
          sentence: "Il ___ (sortir) du supermarché.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "sort",
        },
        {
          sentence: "Elle ___ (sortir) par la sortie.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "sort",
        },
        {
          sentence: "Nous ___ (sortir) de sa chambre.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "sortons",
        },
        {
          sentence: "Vous ___ (sortir) dehors.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "sortez",
        },
        {
          sentence: "Ils ___ (sortir) d'un concert.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "sortent",
        },
        {
          sentence: "Elles ___ (sortir) en groupe.",
          hint: "-s / -t / -tons / -tez / -tent",
          answer: "sortent",
        },
        {
          sentence: "Je ___ (monter) au deuxième étage.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "monte",
        },
        {
          sentence: "Tu ___ (monter) en haut.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "montes",
        },
        {
          sentence: "Il ___ (monter) dans l'avion.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "monte",
        },
        {
          sentence: "Elle ___ (monter) sur scène.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "monte",
        },
        {
          sentence: "Nous ___ (monter) à pied.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "montons",
        },
        {
          sentence: "Vous ___ (monter) au grenier.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "montez",
        },
        {
          sentence: "Ils ___ (monter) dans la tour.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "montent",
        },
        {
          sentence: "Elles ___ (monter) par l'escalier.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "montent",
        },
        {
          sentence: "Je ___ (descendre) au sous-sol.",
          hint: "-s / -ons / -ez / -ent",
          answer: "descends",
        },
        {
          sentence: "Tu ___ (descendre) au premier étage.",
          hint: "-s / -ons / -ez / -ent",
          answer: "descends",
        },
        {
          sentence: "Il ___ (descendre) à la plage.",
          hint: "-s / -ons / -ez / -ent",
          answer: "descend",
        },
        {
          sentence: "Elle ___ (descendre) de l'avion.",
          hint: "-s / -ons / -ez / -ent",
          answer: "descend",
        },
        {
          sentence: "Nous ___ (descendre) doucement.",
          hint: "-s / -ons / -ez / -ent",
          answer: "descendons",
        },
        {
          sentence: "Vous ___ (descendre) par les escaliers.",
          hint: "-s / -ons / -ez / -ent",
          answer: "descendez",
        },
        {
          sentence: "Ils ___ (descendre) en bas.",
          hint: "-s / -ons / -ez / -ent",
          answer: "descendent",
        },
        {
          sentence: "Elles ___ (descendre) du grenier.",
          hint: "-s / -ons / -ez / -ent",
          answer: "descendent",
        },
        {
          sentence: "Je ___ (marcher) jusqu'à la gare.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "marche",
        },
        {
          sentence: "Tu ___ (marcher) pendant une heure.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "marches",
        },
        {
          sentence: "Il ___ (marcher) en silence.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "marche",
        },
        {
          sentence: "Elle ___ (marcher) d'un bon pas.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "marche",
        },
        {
          sentence: "Nous ___ (marcher) vers l'école.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "marchons",
        },
        {
          sentence: "Vous ___ (marcher) le long du fleuve.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "marchez",
        },
        {
          sentence: "Ils ___ (marcher) jusqu'au village.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "marchent",
        },
        {
          sentence: "Elles ___ (marcher) sans s'arrêter.",
          hint: "-e / -es / -ons / -ez / -ent",
          answer: "marchent",
        },
        {
          sentence: "Je ___ (courir) sur la plage.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "cours",
        },
        {
          sentence: "Tu ___ (courir) autour du parc.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "cours",
        },
        {
          sentence: "Il ___ (courir) très rapidement.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "court",
        },
        {
          sentence: "Elle ___ (courir) pour attraper le bus.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "court",
        },
        {
          sentence: "Nous ___ (courir) dans le couloir.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "courons",
        },
        {
          sentence: "Vous ___ (courir) pendant 20 minutes.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "courez",
        },
        {
          sentence: "Ils ___ (courir) jusqu'à la maison.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "courent",
        },
        {
          sentence: "Elles ___ (courir) dans la forêt.",
          hint: "-s / -t / -ons / -ez / -ent",
          answer: "courent",
        },
        {
          sentence: "Je ___ (aller) à l'école.",
          hint: "vais / vas / va / allons / allez / vont",
          answer: "vais",
        },
        {
          sentence: "Tu ___ (aller) au marché.",
          hint: "vais / vas / va / allons / allez / vont",
          answer: "vas",
        },
        {
          sentence: "Il ___ (aller) en France.",
          hint: "vais / vas / va / allons / allez / vont",
          answer: "va",
        },
        {
          sentence: "Elle ___ (aller) chez le médecin.",
          hint: "vais / vas / va / allons / allez / vont",
          answer: "va",
        },
        {
          sentence: "Nous ___ (aller) en vacances.",
          hint: "vais / vas / va / allons / allez / vont",
          answer: "allons",
        },
        {
          sentence: "Vous ___ (aller) au travail.",
          hint: "vais / vas / va / allons / allez / vont",
          answer: "allez",
        },
        {
          sentence: "Ils ___ (aller) au cinéma.",
          hint: "vais / vas / va / allons / allez / vont",
          answer: "vont",
        },
        {
          sentence: "Elles ___ (aller) à la plage.",
          hint: "vais / vas / va / allons / allez / vont",
          answer: "vont",
        },
        {
          sentence: "Je ___ (venir) de l'école.",
          hint: "viens / vient / venons / venez / viennent",
          answer: "viens",
        },
        {
          sentence: "Tu ___ (venir) du marché.",
          hint: "viens / vient / venons / venez / viennent",
          answer: "viens",
        },
        {
          sentence: "Il ___ (venir) de France.",
          hint: "viens / vient / venons / venez / viennent",
          answer: "vient",
        },
        {
          sentence: "Elle ___ (venir) chez moi.",
          hint: "viens / vient / venons / venez / viennent",
          answer: "vient",
        },
        {
          sentence: "Nous ___ (venir) à la fête.",
          hint: "viens / vient / venons / venez / viennent",
          answer: "venons",
        },
        {
          sentence: "Vous ___ (venir) du travail.",
          hint: "viens / vient / venons / venez / viennent",
          answer: "venez",
        },
        {
          sentence: "Ils ___ (venir) du cinéma.",
          hint: "viens / vient / venons / venez / viennent",
          answer: "viennent",
        },
        {
          sentence: "Elles ___ (venir) de la plage.",
          hint: "viens / vient / venons / venez / viennent",
          answer: "viennent",
        },
      ],
      poolSize: 8,
    },
    {
      type: "fill",
      title: "Exercice 3",
      instruction: "Mettez les phrases au pluriel.",
      transInstruction: {
        en: "Put the sentences in the plural.",
        ar: "حوّل الجمل إلى صيغة الجمع.",
        fa: "جمله‌ها را به جمع تبدیل کنید.",
        ti: "ነተን ሓሳባት ናብ ብዙሕ ቁጽሪ ቀይሮ።",
        uk: "Поставте речення у множину.",
      },
      items: [],
      pool: [
        {
          sentence: "Je pars à l'heure. → Nous ___ à l'heure.",
          hint: "pluraliser la forme",
          answer: "partons",
        },
        {
          sentence: "Tu pars en réunion. → Vous ___ en réunion.",
          hint: "pluraliser la forme",
          answer: "partez",
        },
        {
          sentence: "Il part en congé. → Ils ___ en congé.",
          hint: "pluraliser la forme",
          answer: "partent",
        },
        {
          sentence: "Elle part bientôt. → Elles ___ bientôt.",
          hint: "pluraliser la forme",
          answer: "partent",
        },
        {
          sentence: "J'arrive à temps. → Nous ___ à temps.",
          hint: "pluraliser la forme",
          answer: "arrivons",
        },
        {
          sentence: "Tu arrives fatigués. → Vous ___ fatigués.",
          hint: "pluraliser la forme",
          answer: "arrivez",
        },
        {
          sentence: "Il arrive contents. → Ils ___ contents.",
          hint: "pluraliser la forme",
          answer: "arrivent",
        },
        {
          sentence: "Elle arrive en taxi. → Elles ___ en taxi.",
          hint: "pluraliser la forme",
          answer: "arrivent",
        },
        {
          sentence: "J'entre poliment. → Nous ___ poliment.",
          hint: "pluraliser la forme",
          answer: "entrons",
        },
        {
          sentence: "Tu entres en souriant. → Vous ___ en souriant.",
          hint: "pluraliser la forme",
          answer: "entrez",
        },
        {
          sentence: "Il entre doucement. → Ils ___ doucement.",
          hint: "pluraliser la forme",
          answer: "entrent",
        },
        {
          sentence: "Elle entre avec permission. → Elles ___ avec permission.",
          hint: "pluraliser la forme",
          answer: "entrent",
        },
        {
          sentence: "Je sors à pied. → Nous ___ à pied.",
          hint: "pluraliser la forme",
          answer: "sortons",
        },
        {
          sentence: "Tu sors ensemble. → Vous ___ ensemble.",
          hint: "pluraliser la forme",
          answer: "sortez",
        },
        {
          sentence: "Il sort par la grande porte. → Ils ___ par la grande porte.",
          hint: "pluraliser la forme",
          answer: "sortent",
        },
        {
          sentence: "Elle sort dans le froid. → Elles ___ dans le froid.",
          hint: "pluraliser la forme",
          answer: "sortent",
        },
        {
          sentence: "Je monte lentement. → Nous ___ lentement.",
          hint: "pluraliser la forme",
          answer: "montons",
        },
        {
          sentence: "Tu montes en courant. → Vous ___ en courant.",
          hint: "pluraliser la forme",
          answer: "montez",
        },
        {
          sentence: "Il monte à voix basse. → Ils ___ à voix basse.",
          hint: "pluraliser la forme",
          answer: "montent",
        },
        {
          sentence: "Elle monte par les escaliers. → Elles ___ par les escaliers.",
          hint: "pluraliser la forme",
          answer: "montent",
        },
        {
          sentence: "Je descends avec soin. → Nous ___ avec soin.",
          hint: "pluraliser la forme",
          answer: "descendons",
        },
        {
          sentence: "Tu descends prudemment. → Vous ___ prudemment.",
          hint: "pluraliser la forme",
          answer: "descendez",
        },
        {
          sentence: "Il descend sans bruit. → Ils ___ sans bruit.",
          hint: "pluraliser la forme",
          answer: "descendent",
        },
        {
          sentence: "Elle descend à reculons. → Elles ___ à reculons.",
          hint: "pluraliser la forme",
          answer: "descendent",
        },
        {
          sentence: "Je marche côte à côte. → Nous ___ côte à côte.",
          hint: "pluraliser la forme",
          answer: "marchons",
        },
        {
          sentence: "Tu marches au soleil. → Vous ___ au soleil.",
          hint: "pluraliser la forme",
          answer: "marchez",
        },
        {
          sentence: "Il marche en famille. → Ils ___ en famille.",
          hint: "pluraliser la forme",
          answer: "marchent",
        },
        {
          sentence: "Elle marche en groupe. → Elles ___ en groupe.",
          hint: "pluraliser la forme",
          answer: "marchent",
        },
        {
          sentence: "Je cours rapidement. → Nous ___ rapidement.",
          hint: "pluraliser la forme",
          answer: "courons",
        },
        {
          sentence: "Tu cours dans le jardin. → Vous ___ dans le jardin.",
          hint: "pluraliser la forme",
          answer: "courez",
        },
        {
          sentence: "Il court sur la piste. → Ils ___ sur la piste.",
          hint: "pluraliser la forme",
          answer: "courent",
        },
        {
          sentence: "Elle court ensemble. → Elles ___ ensemble.",
          hint: "pluraliser la forme",
          answer: "courent",
        },
        {
          sentence: "Je vais au cinéma. → Nous ___ au cinéma.",
          hint: "pluraliser la forme",
          answer: "allons",
        },
        {
          sentence: "Tu vas au parc. → Vous ___ au parc.",
          hint: "pluraliser la forme",
          answer: "allez",
        },
        {
          sentence: "Il va en montagne. → Ils ___ en montagne.",
          hint: "pluraliser la forme",
          answer: "vont",
        },
        {
          sentence: "Elle va au musée. → Elles ___ au musée.",
          hint: "pluraliser la forme",
          answer: "vont",
        },
        {
          sentence: "Je viens à la réunion. → Nous ___ à la réunion.",
          hint: "pluraliser la forme",
          answer: "venons",
        },
        {
          sentence: "Tu viens en aide. → Vous ___ en aide.",
          hint: "pluraliser la forme",
          answer: "venez",
        },
        {
          sentence: "Il vient à la fête. → Ils ___ à la fête.",
          hint: "pluraliser la forme",
          answer: "viennent",
        },
        {
          sentence: "Elle vient au rendez-vous. → Elles ___ au rendez-vous.",
          hint: "pluraliser la forme",
          answer: "viennent",
        },
      ],
      poolSize: 8,
    },
    {
      type: "classify",
      title: "Exercice 4",
      instruction: "Classez chaque élément en gras dans la bonne catégorie.",
      transInstruction: {
        en: "Sort each item in bold into the correct category.",
        ar: "صنّف كل عنصر بالخط العريض في الفئة الصحيحة.",
        fa: "هر عنصر پررنگ را در دسته‌ی درست قرار دهید.",
        ti: "ነፍሲ ወከፍ ብትር ዘሎ ኣካል ናብ ቅኑዕ ምድብ ኣእቱ.",
        uk: "Розподіліть кожен виділений жирним елемент у правильну категорію.",
      },
      categories: [
        "Sujet",
        "Verbe",
        "Complément",
      ],
      pool: [
        {
          word: "{a}Marie{/a} arrive à l'école.",
          categoryIdx: 0,
        },
        {
          word: "Marie {a}arrive{/a} à l'école.",
          categoryIdx: 1,
        },
        {
          word: "Marie arrive {a}à l'école{/a}.",
          categoryIdx: 2,
        },
        {
          word: "{a}Nous{/a} partons en vacances.",
          categoryIdx: 0,
        },
        {
          word: "Nous {a}partons{/a} en vacances.",
          categoryIdx: 1,
        },
        {
          word: "Nous partons {a}en vacances{/a}.",
          categoryIdx: 2,
        },
        {
          word: "{a}Il{/a} ne sort pas le soir.",
          categoryIdx: 0,
        },
        {
          word: "Il ne {a}sort{/a} pas le soir.",
          categoryIdx: 1,
        },
        {
          word: "Il ne sort pas {a}le soir{/a}.",
          categoryIdx: 2,
        },
        {
          word: "{a}Elle{/a} court dans le parc.",
          categoryIdx: 0,
        },
        {
          word: "Elle {a}court{/a} dans le parc.",
          categoryIdx: 1,
        },
        {
          word: "Elle court {a}dans le parc{/a}.",
          categoryIdx: 2,
        },
        {
          word: "{a}Tu{/a} pars ce soir ?",
          categoryIdx: 0,
        },
        {
          word: "Tu {a}pars{/a} ce soir ?",
          categoryIdx: 1,
        },
        {
          word: "Tu pars {a}ce soir{/a} ?",
          categoryIdx: 2,
        },
      ],
      items: [],
      poolSize: 6,
    },
    {
      type: "classify",
      title: "Exercice 5",
      instruction: "Identifiez le type du complément en gras.",
      transInstruction: {
        en: "Identify the type of the complement in bold.",
        ar: "حدّد نوع المتمّم بالخط العريض.",
        fa: "نوع متمم پررنگ را مشخص کنید.",
        ti: "ዓይነት ናይቲ ብትር ዘሎ መመላእታ ፍለ።",
        uk: "Визначте тип виділеного жирним додатка.",
      },
      categories: [
        "COD",
        "CC de lieu",
        "CC de temps / manière",
      ],
      items: [
        {
          word: "Elle monte {a}les bagages{/a}.",
          categoryIdx: 0,
        },
        {
          word: "Il court {a}dans le parc{/a}.",
          categoryIdx: 1,
        },
        {
          word: "Nous partons {a}tôt le matin{/a}.",
          categoryIdx: 2,
        },
        {
          word: "Elle descend {a}les valises{/a}.",
          categoryIdx: 0,
        },
        {
          word: "Tu arrives {a}à Paris{/a}.",
          categoryIdx: 1,
        },
        {
          word: "Ils marchent {a}lentement{/a}.",
          categoryIdx: 2,
        },
      ],
    },
    {
      type: "word_order",
      title: "Exercice 6",
      instruction: "Remettez les mots dans le bon ordre pour former une phrase correcte.",
      transInstruction: {
        en: "Put the words back in the correct order to form a correct sentence.",
        ar: "أعد ترتيب الكلمات لتكوين جملة صحيحة.",
        fa: "کلمات را به ترتیب درست بچینید تا جمله‌ی درستی بسازید.",
        ti: "ነተን ቃላት ቅኑዕ ሓሳብ ንምግባር ብቅኑዕ ስርዓት መድብ።",
        uk: "Розставте слова у правильному порядку, щоб утворити правильне речення.",
      },
      items: [],
      poolSize: 5,
      pool: [
        {
          sentence: "Elle arrive à la gare.",
          words: [
            "Elle",
            "arrive",
            "à",
            "la",
            "gare.",
          ],
        },
        {
          sentence: "Il ne sort pas le soir.",
          words: [
            "Il",
            "ne",
            "sort",
            "pas",
            "le",
            "soir.",
          ],
        },
        {
          sentence: "Je pars à midi.",
          words: [
            "Je",
            "pars",
            "à",
            "midi.",
          ],
        },
        {
          sentence: "Tu montes à pied ?",
          words: [
            "Tu",
            "montes",
            "à",
            "pied",
          ],
        },
        {
          sentence: "Il descend du bus.",
          words: [
            "Il",
            "descend",
            "du",
            "bus.",
          ],
        },
        {
          sentence: "Nous restons à la maison.",
          words: [
            "Nous",
            "restons",
            "à",
            "la",
            "maison.",
          ],
        },
        {
          sentence: "Elle entre dans la salle.",
          words: [
            "Elle",
            "entre",
            "dans",
            "la",
            "salle.",
          ],
        },
        {
          sentence: "Ils partent à 8h.",
          words: [
            "Ils",
            "partent",
            "à",
            "8h.",
          ],
        },
        {
          sentence: "Je monte les escaliers.",
          words: [
            "Je",
            "monte",
            "les",
            "escaliers.",
          ],
        },
        {
          sentence: "Tu retournes au bureau ?",
          words: [
            "Tu",
            "retournes",
            "au",
            "bureau",
          ],
        },
        {
          sentence: "Elle n'arrive jamais à l'heure.",
          words: [
            "Elle",
            "n'arrive",
            "jamais",
            "à",
            "l'heure.",
          ],
        },
        {
          sentence: "Ils sortent ensemble après les cours.",
          words: [
            "Ils",
            "sortent",
            "ensemble",
            "après",
            "les",
            "cours.",
          ],
        },
        {
          sentence: "Je pars travailler très tôt le matin.",
          words: [
            "Je",
            "pars",
            "travailler",
            "très",
            "tôt",
            "le",
            "matin.",
          ],
        },
        {
          sentence: "Tu descends à quel arrêt ?",
          words: [
            "Tu",
            "descends",
            "à",
            "quel",
            "arrêt",
          ],
        },
        {
          sentence: "Elle retourne chez sa famille le week-end.",
          words: [
            "Elle",
            "retourne",
            "chez",
            "sa",
            "famille",
            "le",
            "week-end.",
          ],
        },
        {
          sentence: "Les enfants entrent dans la classe sans bruit.",
          words: [
            "Les",
            "enfants",
            "entrent",
            "dans",
            "la",
            "classe",
            "sans",
            "bruit.",
          ],
        },
        {
          sentence: "Est-ce que vous montez à l'étage ?",
          words: [
            "Est-ce que",
            "vous",
            "montez",
            "à",
            "l'étage",
          ],
        },
        {
          sentence: "Nous partons souvent en vacances en juillet.",
          words: [
            "Nous",
            "partons",
            "souvent",
            "en",
            "vacances",
            "en",
            "juillet.",
          ],
        },
        {
          sentence: "Il ne sort jamais sans son manteau en hiver.",
          words: [
            "Il",
            "ne",
            "sort",
            "jamais",
            "sans",
            "son",
            "manteau",
            "en",
            "hiver.",
          ],
        },
        {
          sentence: "Elle descend du bus au bon arrêt.",
          words: [
            "Elle",
            "descend",
            "du",
            "bus",
            "au",
            "bon",
            "arrêt.",
          ],
        },
        {
          sentence: "Elle part travailler à pied chaque matin.",
          words: [
            "Elle",
            "part",
            "travailler",
            "à",
            "pied",
            "chaque",
            "matin.",
          ],
        },
        {
          sentence: "Ils entrent dans le programme de formation dès janvier.",
          words: [
            "Ils",
            "entrent",
            "dans",
            "le",
            "programme",
            "de",
            "formation",
            "dès",
            "janvier.",
          ],
        },
        {
          sentence: "Elle descend en ville pour ses démarches administratives.",
          words: [
            "Elle",
            "descend",
            "en",
            "ville",
            "pour",
            "ses",
            "démarches",
            "administratives.",
          ],
        },
        {
          sentence: "Tu restes en contact avec ta famille malgré la distance.",
          words: [
            "Tu",
            "restes",
            "en",
            "contact",
            "avec",
            "ta",
            "famille",
            "malgré",
            "la",
            "distance.",
          ],
        },
        {
          sentence: "Ils arrivent en Suisse après un long voyage.",
          words: [
            "Ils",
            "arrivent",
            "en",
            "Suisse",
            "après",
            "un",
            "long",
            "voyage.",
          ],
        },
        {
          sentence: "Elle monte en compétences grâce à cette formation.",
          words: [
            "Elle",
            "monte",
            "en",
            "compétences",
            "grâce",
            "à",
            "cette",
            "formation.",
          ],
        },
        {
          sentence: "Je pars chercher du travail dans une autre région.",
          words: [
            "Je",
            "pars",
            "chercher",
            "du",
            "travail",
            "dans",
            "une",
            "autre",
            "région.",
          ],
        },
        {
          sentence: "Nous sortons rarement faute de transport adapté.",
          words: [
            "Nous",
            "sortons",
            "rarement",
            "faute",
            "de",
            "transport",
            "adapté.",
          ],
        },
        {
          sentence: "Elle sort progressivement de son isolement grâce aux cours.",
          words: [
            "Elle",
            "sort",
            "progressivement",
            "de",
            "son",
            "isolement",
            "grâce",
            "aux",
            "cours.",
          ],
        },
        {
          sentence: "Nous entrons dans une nouvelle phase de notre vie.",
          words: [
            "Nous",
            "entrons",
            "dans",
            "une",
            "nouvelle",
            "phase",
            "de",
            "notre",
            "vie.",
          ],
        },
      ],
    },
    {
      type: "color_highlight",
      title: "Exercice 7",
      instruction: "Sélectionnez une couleur, puis cliquez sur chaque mot pour l'identifier : Sujet (jaune), Verbe (rouge), Complément (vert).",
      transInstruction: {
        en: "Select a color, then click each word to identify it: Subject (yellow), Verb (red), Complement (green).",
        ar: "اختر لوناً، ثم انقر على كل كلمة لتحديدها: الفاعل (أصفر)، الفعل (أحمر)، المتمّم (أخضر).",
        fa: "یک رنگ انتخاب کنید، سپس روی هر کلمه کلیک کنید: فاعل (زرد)، فعل (قرمز)، متمم (سبز).",
        ti: "ሕብሪ ምረጽ፣ ድሕሪኡ ነፍሲ ወከፍ ቃል ፍለ፦ ርእሲ (ብጫ)፣ ግሲ (ቀይሕ)፣ መመላእታ (ቀጠልያ).",
        uk: "Виберіть колір, потім натисніть на кожне слово: Підмет (жовтий), Дієслово (червоний), Додаток (зелений).",
      },
      colors: [
        "Sujet",
        "Verbe",
        "Complément",
      ],
      items: [
        {
          words: [
            "Marie",
            "court",
            "dans",
            "le",
            "parc.",
          ],
          answers: [
            0,
            1,
            2,
            2,
            2,
          ],
        },
        {
          words: [
            "Il",
            "ne",
            "sort",
            "pas",
            "le",
            "soir.",
          ],
          answers: [
            0,
            1,
            1,
            1,
            2,
            2,
          ],
        },
        {
          words: [
            "Est-ce que",
            "tu",
            "pars",
            "ce",
            "soir",
          ],
          answers: [
            null,
            0,
            1,
            2,
            2,
            null,
          ],
        },
      ],
    },
    {
      type: "write",
      title: "Exercice 8",
      instruction: "Écrivez une phrase avec le verbe proposé.\nLa phrase doit avoir un sujet, un verbe et un complément.\nElle commence par une majuscule et se termine par un point.",
      transInstruction: {
        en: "Write a sentence with the verb provided.\nThe sentence must have a subject, a verb and a complement.\nIt starts with a capital letter and ends with a full stop.",
        ar: "اكتب جملة باستخدام الفعل المقترح.\nيجب أن تحتوي الجملة على فاعل وفعل ومتمّم.\nتبدأ بحرف كبير وتنتهي بنقطة.",
        fa: "یک جمله با فعل پیشنهادی بنویسید.\nجمله باید فاعل، فعل و متمم داشته باشد.\nبا حرف بزرگ شروع و با نقطه تمام می‌شود.",
        ti: "ሓደ ሓሳብ ብእቲ ዝቐረበ ግሲ ጽሓፍ።\nእቲ ሓሳብ ርእሲ፣ ግሲን መመላእታን ክህልዎ ኣለዎ።\nብዓብዪ ፊደል ይጅምር ብነጥቢ ይውዳእ።",
        uk: "Напишіть речення із запропонованим дієсловом.\nРечення повинно мати підмет, дієслово та додаток.\nВоно починається з великої літери і закінчується крапкою.",
      },
      verbPool: [
        "aller",
        "venir",
        "partir",
        "arriver",
        "entrer",
        "sortir",
        "monter",
        "descendre",
        "marcher",
        "courir",
      ],
      verbPoolSize: 5,
    },
  ],
};
