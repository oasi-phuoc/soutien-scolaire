// Vocabulary lesson content: types + data for all 16 A1/A2 vocabulary lessons.
// Types are imported from conjugation-data to avoid duplication.

import type { TheoryBlock, Exercise } from "./conjugation-data";

export type { TheoryBlock, Exercise };

export type VocabLesson = {
  slug: string;
  code: string;
  level: "A1" | "A2";
  title: string;
  theory: TheoryBlock[];
  exercises: Exercise[];
};

// ── A1 Lessons ────────────────────────────────────────────────────────────────

const a1VocNationalites: VocabLesson = {
  slug: "a1-voc-l02",
  code: "V.1",
  level: "A1",
  title: "Les nationalités",
  theory: [
    { type: "heading", text: "Les pays et les nationalités" },
    {
      type: "grid",
      headers: ["Pays", "♂ Masculin", "♀ Féminin"],
      boldFirstCol: true,
      rows: [
        ["🇫🇷 La France", "français", "française"],
        ["🇬🇧 L'Angleterre", "anglais", "anglaise"],
        ["🇨🇳 La Chine", "chinois", "chinoise"],
        ["🇺🇸 Les États-Unis", "américain", "américaine"],
        ["🇮🇹 L'Italie", "italien", "italienne"],
        ["🇧🇷 Le Brésil", "brésilien", "brésilienne"],
        ["🇰🇷 La Corée", "coréen", "coréenne"],
        ["🇪🇸 L'Espagne", "espagnol", "espagnole"],
        ["🇩🇪 L'Allemagne", "allemand", "allemande"],
        ["🇨🇭 La Suisse", "suisse", "suisse"],
        ["🇧🇪 La Belgique", "belge", "belge"],
        ["🇷🇺 La Russie", "russe", "russe"],
      ],
      transHeaders: {
        en: ["Country", "♂ Masculine", "♀ Feminine"],
        ar: ["البلد", "♂ المذكر", "♀ المؤنث"],
        fa: ["کشور", "♂ مذکر", "♀ مؤنث"],
        ti: ["ሃገር", "♂ ተባዕታይ", "♀ ኣንስታይ"],
        uk: ["Країна", "♂ Чоловічий", "♀ Жіночий"],
      },
      transRows: {
        en: [
          ["🇫🇷 France", "French", "French"],
          ["🇬🇧 England", "English", "English"],
          ["🇨🇳 China", "Chinese", "Chinese"],
          ["🇺🇸 United States", "American", "American"],
          ["🇮🇹 Italy", "Italian", "Italian"],
          ["🇧🇷 Brazil", "Brazilian", "Brazilian"],
          ["🇰🇷 Korea", "Korean", "Korean"],
          ["🇪🇸 Spain", "Spanish", "Spanish"],
          ["🇩🇪 Germany", "German", "German"],
          ["🇨🇭 Switzerland", "Swiss", "Swiss"],
          ["🇧🇪 Belgium", "Belgian", "Belgian"],
          ["🇷🇺 Russia", "Russian", "Russian"],
        ],
        ar: [
          ["🇫🇷 فرنسا", "فرنسي", "فرنسية"],
          ["🇬🇧 إنجلترا", "إنجليزي", "إنجليزية"],
          ["🇨🇳 الصين", "صيني", "صينية"],
          ["🇺🇸 الولايات المتحدة", "أمريكي", "أمريكية"],
          ["🇮🇹 إيطاليا", "إيطالي", "إيطالية"],
          ["🇧🇷 البرازيل", "برازيلي", "برازيلية"],
          ["🇰🇷 كوريا", "كوري", "كورية"],
          ["🇪🇸 إسبانيا", "إسباني", "إسبانية"],
          ["🇩🇪 ألمانيا", "ألماني", "ألمانية"],
          ["🇨🇭 سويسرا", "سويسري", "سويسرية"],
          ["🇧🇪 بلجيكا", "بلجيكي", "بلجيكية"],
          ["🇷🇺 روسيا", "روسي", "روسية"],
        ],
        fa: [
          ["🇫🇷 فرانسه", "فرانسوی", "فرانسوی"],
          ["🇬🇧 انگلستان", "انگلیسی", "انگلیسی"],
          ["🇨🇳 چین", "چینی", "چینی"],
          ["🇺🇸 ایالات متحده", "آمریکایی", "آمریکایی"],
          ["🇮🇹 ایتالیا", "ایتالیایی", "ایتالیایی"],
          ["🇧🇷 برزیل", "برزیلی", "برزیلی"],
          ["🇰🇷 کره", "کره‌ای", "کره‌ای"],
          ["🇪🇸 اسپانیا", "اسپانیایی", "اسپانیایی"],
          ["🇩🇪 آلمان", "آلمانی", "آلمانی"],
          ["🇨🇭 سوئیس", "سوئیسی", "سوئیسی"],
          ["🇧🇪 بلژیک", "بلژیکی", "بلژیکی"],
          ["🇷🇺 روسیه", "روسی", "روسی"],
        ],
      },
    },
    {
      type: "note",
      text: "Suisse, belge, russe — même forme masculin et féminin !",
    },
    {
      type: "highlight",
      label: "Astuce",
      items: [
        "La nationalité s'accorde avec la personne : «Il est français.» / «Elle est française.»",
        "Avec «être» + nationalité : pas d'article → «Je suis français.» (pas «Je suis un français.»)",
      ],
      transLabel: { en: "Tip", ar: "نصيحة", fa: "نکته", ti: "ሓጋዚ ሓሳብ", uk: "Порада" },
    },
      { type: "heading", text: "Le verbe VENIR au présent", sub: true },
    {
      type: "grid",
      headers: ["Pronom", "VENIR"],
      rows: [
        ["je", "viens"],
        ["tu", "viens"],
        ["il / elle / on", "vient"],
        ["nous", "venons"],
        ["vous", "venez"],
        ["ils / elles", "viennent"],
      ],
      transHeaders: {
        en: ["Pronoun", "TO COME"],
        ar: ["الضمير", "يأتي"],
        fa: ["ضمیر", "آمدن"],
        ti: ["ተካኢ ቃል", "ምምጻእ"],
        uk: ["Займенник", "ПРИХОДИТИ"],
      },
    },
    {
      type: "rule",
      text: "VENIR + de/d' + pays → indiquer l'origine.",
      examples: [
        { correct: "Je viens de France." },
        { correct: "Il vient d'Italie." },
        { correct: "Nous venons du Brésil." },
      ],
    },
],
  exercises: [
    {
      type: "match",
      title: "Exercice 1 — Pays et nationalités",
      instruction: "Reliez chaque pays à la nationalité masculine.",
      pairs: [
        { left: "🇫🇷 La France", right: "français" },
        { left: "🇮🇹 L'Italie", right: "italien" },
        { left: "🇪🇸 L'Espagne", right: "espagnol" },
        { left: "🇩🇪 L'Allemagne", right: "allemand" },
        { left: "🇺🇸 Les États-Unis", right: "américain" },
        { left: "🇧🇷 Le Brésil", right: "brésilien" },
        { left: "🇷🇺 La Russie", right: "russe" },
      ],
      pool: [
        { left: "🇫🇷 La France", right: "français" },
        { left: "🇬🇧 L'Angleterre", right: "anglais" },
        { left: "🇨🇳 La Chine", right: "chinois" },
        { left: "🇺🇸 Les États-Unis", right: "américain" },
        { left: "🇮🇹 L'Italie", right: "italien" },
        { left: "🇧🇷 Le Brésil", right: "brésilien" },
        { left: "🇰🇷 La Corée", right: "coréen" },
        { left: "🇪🇸 L'Espagne", right: "espagnol" },
        { left: "🇩🇪 L'Allemagne", right: "allemand" },
        { left: "🇨🇭 La Suisse", right: "suisse" },
        { left: "🇧🇪 La Belgique", right: "belge" },
        { left: "🇷🇺 La Russie", right: "russe" },
      ],
      poolSize: 6,
    },
    {
      type: "classify",
      title: "Exercice 2 — Masculin ou féminin ?",
      instruction: "Classez ces nationalités.",
      categories: ["Masculin", "Féminin"],
      items: [
        { word: "français", categoryIdx: 0 },
        { word: "française", categoryIdx: 1 },
        { word: "américain", categoryIdx: 0 },
        { word: "américaine", categoryIdx: 1 },
        { word: "italien", categoryIdx: 0 },
        { word: "italienne", categoryIdx: 1 },
        { word: "espagnol", categoryIdx: 0 },
        { word: "espagnole", categoryIdx: 1 },
        { word: "chinois", categoryIdx: 0 },
        { word: "chinoise", categoryIdx: 1 },
        { word: "brésilien", categoryIdx: 0 },
        { word: "brésilienne", categoryIdx: 1 },
      ],
      pool: [
        { word: "français", categoryIdx: 0 },
        { word: "française", categoryIdx: 1 },
        { word: "américain", categoryIdx: 0 },
        { word: "américaine", categoryIdx: 1 },
        { word: "italien", categoryIdx: 0 },
        { word: "italienne", categoryIdx: 1 },
        { word: "espagnol", categoryIdx: 0 },
        { word: "espagnole", categoryIdx: 1 },
        { word: "chinois", categoryIdx: 0 },
        { word: "chinoise", categoryIdx: 1 },
        { word: "brésilien", categoryIdx: 0 },
        { word: "brésilienne", categoryIdx: 1 },
        { word: "allemand", categoryIdx: 0 },
        { word: "allemande", categoryIdx: 1 },
        { word: "coréen", categoryIdx: 0 },
        { word: "coréenne", categoryIdx: 1 },
      ],
      poolSize: 8,
    },
    {
      type: "qcm",
      title: "Exercice 3 — Quelle nationalité ?",
      instruction: "Complétez avec la bonne nationalité.",
      items: [
        { sentence: "Léa vient de France. Elle est ___.", choices: ["française", "français", "italienne", "espagnole"], correctIdx: 0 },
        { sentence: "Marco vient d'Italie. Il est ___.", choices: ["italien", "italienne", "espagnol", "français"], correctIdx: 0 },
        { sentence: "Ana vient du Brésil. Elle est ___.", choices: ["brésilienne", "brésilien", "espagnole", "coréenne"], correctIdx: 0 },
        { sentence: "Erik vient d'Allemagne. Il est ___.", choices: ["allemand", "allemande", "anglais", "suisse"], correctIdx: 0 },
        { sentence: "Yuki vient du Japon. Elle est ___.", choices: ["japonaise", "japonais", "chinoise", "coréenne"], correctIdx: 0 },
        { sentence: "Paul vient des États-Unis. Il est ___.", choices: ["américain", "américaine", "anglais", "canadien"], correctIdx: 0 },
      ],
      pool: [
        { sentence: "Léa vient de France. Elle est ___.", choices: ["française", "français", "italienne", "espagnole"], correctIdx: 0 },
        { sentence: "Marco vient d'Italie. Il est ___.", choices: ["italien", "italienne", "espagnol", "français"], correctIdx: 0 },
        { sentence: "Ana vient du Brésil. Elle est ___.", choices: ["brésilienne", "brésilien", "espagnole", "coréenne"], correctIdx: 0 },
        { sentence: "Erik vient d'Allemagne. Il est ___.", choices: ["allemand", "allemande", "anglais", "suisse"], correctIdx: 0 },
        { sentence: "Sofia vient de Russie. Elle est ___.", choices: ["russe", "russe", "belge", "suisse"], correctIdx: 0 },
        { sentence: "Paul vient des États-Unis. Il est ___.", choices: ["américain", "américaine", "anglais", "canadien"], correctIdx: 0 },
        { sentence: "Min vient de Corée. Il est ___.", choices: ["coréen", "coréenne", "chinois", "japonais"], correctIdx: 0 },
        { sentence: "Ines vient d'Espagne. Elle est ___.", choices: ["espagnole", "espagnol", "française", "belge"], correctIdx: 0 },
        { sentence: "Tom vient d'Angleterre. Il est ___.", choices: ["anglais", "anglaise", "américain", "australien"], correctIdx: 0 },
        { sentence: "Lena vient de Suisse. Elle est ___.", choices: ["suisse", "suisse", "belge", "française"], correctIdx: 0 },
      ],
      poolSize: 6,
    },
      {
      type: "qcm",
      title: "Exercice 4 — Être, avoir ou venir ?",
      instruction: "Soulignez la forme correcte.",
      toggleChoices: true,
      items: [
        { sentence: "___ de France ?", choices: ["Tu es", "Tu viens"], correctIdx: 1 },
        { sentence: "___ afghan.", choices: ["Il a", "Il est"], correctIdx: 1 },
        { sentence: "___ de quel pays ?", choices: ["Vous êtes", "Vous venez"], correctIdx: 1 },
        { sentence: "___ de Chine.", choices: ["Elles ont", "Elles viennent"], correctIdx: 1 },
        { sentence: "___ de Belgique.", choices: ["On vient", "On a"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Exercice 5 — Être et venir",
      instruction: "Complétez avec la forme correcte de être ou venir.",
      items: [
        { sentence: "Tu ___ française. (être)", hint: "es", answer: "es" },
        { sentence: "Tu ___ de France. (venir)", hint: "viens", answer: "viens" },
        { sentence: "Elle ___ anglaise. (être)", hint: "est", answer: "est" },
        { sentence: "Elle ___ d'Angleterre. (venir)", hint: "vient", answer: "vient" },
        { sentence: "Nous ___ chinoises. (être)", hint: "sommes", answer: "sommes" },
        { sentence: "Nous ___ de Chine. (venir)", hint: "venons", answer: "venons" },
        { sentence: "Vous ___ suisses. (être)", hint: "êtes", answer: "êtes" },
        { sentence: "Vous ___ de Suisse. (venir)", hint: "venez", answer: "venez" },
        { sentence: "Je ___ italienne. (être)", hint: "suis", answer: "suis" },
        { sentence: "Je ___ d'Italie. (venir)", hint: "viens", answer: "viens" },
        { sentence: "Ils ___ brésiliens. (être)", hint: "sont", answer: "sont" },
        { sentence: "Ils ___ du Brésil. (venir)", hint: "viennent", answer: "viennent" },
      ],
    },
    {
      type: "write",
      title: "Exercice 6 — Écrivez",
      instruction: "Écrivez deux phrases sur vous : votre nationalité (être) et votre pays d'origine (venir).",
      prompts: ["Je suis ...", "Je viens de ..."],
    },
],
};

const a1VocL13: VocabLesson = {
  slug: "a1-voc-l13",
  code: "V.5",
  level: "A1",
  title: "Les moyens de transport",
  theory: [
    { type: "heading", text: "Les modes de transport" },
    {
      type: "vocab",
      title: "Les transports courants",
      items: [
        "en voiture",
        "à vélo",
        "en avion",
        "en train",
        "en bus",
        "en métro",
        "en tramway",
        "à pied",
        "en taxi",
        "en bateau",
      ],
    },
    {
      type: "rule",
      text: "EN + transport motorisé ou fermé ; À + transport non motorisé ou monture.",
      examples: [
        { correct: "Je vais au travail en voiture.", wrong: "Je vais au travail à voiture." },
        { correct: "Elle va à l'école à vélo.", wrong: "Elle va à l'école en vélo." },
        { correct: "Nous partons en avion.", wrong: "Nous partons à avion." },
      ],
    },
    {
      type: "vocab",
      title: "Verbes utiles",
      items: [
        "prendre (le bus / le train / le métro)",
        "aller (en voiture / à pied)",
        "mettre (30 minutes / 2 heures)",
        "arriver / partir",
      ],
    },
    {
      type: "rule",
      text: "Pour indiquer la durée : mettre + durée.",
      examples: [
        { correct: "Je mets 20 minutes en vélo." },
        { correct: "Le train met 3 heures." },
      ],
    },
    {
      type: "note",
      text: "À pied = walking. On dit toujours « à pied » et non « en pied ».",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le transport et la préposition",
      instruction: "Reliez chaque moyen de transport à la bonne préposition (en ou à).",
      pairs: [
        { left: "___ voiture", right: "en" },
        { left: "___ vélo", right: "à" },
        { left: "___ avion", right: "en" },
        { left: "___ pied", right: "à" },
        { left: "___ métro", right: "en" },
        { left: "___ bus", right: "en" },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases",
      instruction: "Complétez chaque phrase avec le bon moyen de transport.",
      items: [
        { sentence: "Pour traverser l'Atlantique, on prend l'___.", hint: "avion", answer: "avion" },
        { sentence: "Paris a un réseau de ___ très développé.", hint: "métro", answer: "métro" },
        { sentence: "Elle va à l'université à ___ car c'est près de chez elle.", hint: "pied", answer: "pied" },
        { sentence: "Je prends le ___ pour aller de Lyon à Paris.", hint: "train", answer: "train" },
        { sentence: "Il met 10 minutes à ___ pour aller au bureau.", hint: "vélo", answer: "vélo" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir la bonne préposition",
      instruction: "Choisissez la bonne préposition pour chaque transport.",
      items: [
        { sentence: "Ils vont à la mer ___ voiture.", choices: ["en", "à", "par", "de"], correctIdx: 0 },
        { sentence: "Je préfère aller ___ vélo en été.", choices: ["à", "en", "par", "avec"], correctIdx: 0 },
        { sentence: "On prend le TGV ; on est ___ train.", choices: ["en", "à", "au", "par"], correctIdx: 0 },
        { sentence: "Tu vas ___ pied ou en bus ?", choices: ["à", "en", "par", "de"], correctIdx: 0 },
      ],
    },
  ],
};

const a1VocL16: VocabLesson = {
  slug: "a1-voc-l16",
  code: "V.6",
  level: "A1",
  title: "La nourriture et le restaurant",
  theory: [
    { type: "heading", text: "Les repas de la journée" },
    {
      type: "vocab",
      title: "Les trois repas",
      items: [
        "le petit-déjeuner (le matin)",
        "le déjeuner (à midi)",
        "le dîner (le soir)",
      ],
    },
    {
      type: "heading", text: "Les aliments courants",
    },
    {
      type: "vocab",
      title: "Nourriture et boissons",
      items: [
        "le pain",
        "le fromage",
        "le vin",
        "l'eau (f.)",
        "le café",
        "le thé",
        "la viande",
        "le poisson",
        "les légumes (m.pl.)",
        "les fruits (m.pl.)",
        "le riz",
        "les pâtes (f.pl.)",
      ],
    },
    {
      type: "heading", text: "Au restaurant",
    },
    {
      type: "vocab",
      title: "Vocabulaire du restaurant",
      items: [
        "commander",
        "l'addition (f.)",
        "un plat (principal)",
        "une entrée",
        "un dessert",
        "un serveur / une serveuse",
        "la carte / le menu",
        "une table pour deux",
      ],
    },
    {
      type: "rule",
      text: "Pour commander, on dit : « Je voudrais... » ou « Je vais prendre... »",
      examples: [
        { correct: "Je voudrais une entrée et un plat, s'il vous plaît." },
        { correct: "Je vais prendre le menu à 15 euros." },
      ],
    },
    {
      type: "note",
      text: "L'addition = the bill. On dit : « L'addition, s'il vous plaît ! » pour demander l'addition.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer l'aliment et sa catégorie",
      instruction: "Reliez chaque aliment à sa catégorie.",
      pairs: [
        { left: "le pain", right: "boulangerie" },
        { left: "le fromage", right: "produit laitier" },
        { left: "le poisson", right: "protéine" },
        { left: "les carottes", right: "légume" },
        { left: "les pommes", right: "fruit" },
        { left: "le vin", right: "boisson alcoolisée" },
      ],
    },
    {
      type: "fill",
      title: "Au restaurant",
      instruction: "Complétez les phrases avec le bon mot.",
      items: [
        { sentence: "Pour demander à payer, on dit : « L'___, s'il vous plaît ! »", hint: "addition", answer: "addition" },
        { sentence: "Le ___ apporte les plats à table.", hint: "serveur", answer: "serveur" },
        { sentence: "Pour commencer, je prends une ___ : une soupe à l'oignon.", hint: "entrée", answer: "entrée" },
        { sentence: "Comme ___, je voudrais un steak frites.", hint: "plat", answer: "plat" },
        { sentence: "En France, le ___ du soir s'appelle le dîner.", hint: "repas", answer: "repas" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon mot",
      instruction: "Choisissez le mot correct pour compléter la phrase.",
      items: [
        { sentence: "Le matin, je prends le ___.", choices: ["petit-déjeuner", "dîner", "déjeuner", "goûter"], correctIdx: 0 },
        { sentence: "À midi, les Français mangent le ___.", choices: ["déjeuner", "dîner", "petit-déjeuner", "souper"], correctIdx: 0 },
        { sentence: "Pour commencer le repas, on prend une ___.", choices: ["entrée", "addition", "carte", "note"], correctIdx: 0 },
        { sentence: "Je voudrais ___ la carte, s'il vous plaît.", choices: ["voir", "prendre", "manger", "boire"], correctIdx: 0 },
      ],
    },
  ],
};

const a1VocL21: VocabLesson = {
  slug: "a1-voc-l21",
  code: "V.7",
  level: "A1",
  title: "Les expressions de temps",
  theory: [
    { type: "heading", text: "Situer dans le temps" },
    {
      type: "vocab",
      title: "Jours autour d'aujourd'hui",
      items: [
        "aujourd'hui (ce jour)",
        "demain (le jour suivant)",
        "après-demain (dans 2 jours)",
        "hier (le jour précédent)",
        "avant-hier (il y a 2 jours)",
      ],
    },
    {
      type: "vocab",
      title: "Les semaines",
      items: [
        "cette semaine",
        "la semaine prochaine",
        "la semaine dernière",
        "le week-end prochain",
        "le week-end dernier",
      ],
    },
    {
      type: "vocab",
      title: "Moments de la journée",
      items: [
        "ce matin",
        "cet après-midi",
        "ce soir",
        "cette nuit",
      ],
    },
    {
      type: "rule",
      text: "Dans + durée = futur. Il y a + durée = passé.",
      examples: [
        { correct: "Le cours commence dans 3 jours." },
        { correct: "J'ai mangé il y a 2 heures." },
        { correct: "Il a appelé il y a une semaine." },
      ],
    },
    {
      type: "vocab",
      title: "Autres expressions utiles",
      items: [
        "maintenant",
        "bientôt",
        "tout à l'heure",
        "en ce moment",
        "d'abord / ensuite / enfin",
        "pendant (during)",
        "depuis (since/for)",
      ],
    },
    {
      type: "note",
      text: "Tout à l'heure = in a little while (futur) ou a little while ago (passé) selon le contexte.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer l'expression et sa signification",
      instruction: "Reliez chaque expression de temps à sa définition.",
      pairs: [
        { left: "aujourd'hui", right: "ce jour" },
        { left: "demain", right: "le lendemain" },
        { left: "avant-hier", right: "il y a deux jours" },
        { left: "la semaine prochaine", right: "après cette semaine" },
        { left: "hier", right: "le jour précédent" },
        { left: "après-demain", right: "dans deux jours" },
      ],
    },
    {
      type: "fill",
      title: "Compléter avec la bonne expression",
      instruction: "Complétez chaque phrase avec la bonne expression de temps.",
      items: [
        { sentence: "Le cours a commencé ___ 10 minutes.", hint: "il y a", answer: "il y a" },
        { sentence: "La réunion est ___ 3 jours.", hint: "dans", answer: "dans" },
        { sentence: "J'ai mangé au restaurant ___.", hint: "hier", answer: "hier" },
        { sentence: "___, il fait beau et chaud.", hint: "aujourd'hui", answer: "aujourd'hui" },
        { sentence: "Il part en vacances ___.", hint: "demain", answer: "demain" },
      ],
    },
    {
      type: "qcm",
      title: "Futur ou passé ?",
      instruction: "Choisissez l'expression correcte pour chaque phrase.",
      items: [
        { sentence: "Nous avons visité le musée ___ deux jours.", choices: ["il y a", "dans", "depuis", "pendant"], correctIdx: 0 },
        { sentence: "Le concert commence ___ une heure.", choices: ["dans", "il y a", "hier", "avant"], correctIdx: 0 },
        { sentence: "Elle travaille ici ___ trois ans.", choices: ["depuis", "dans", "il y a", "après"], correctIdx: 0 },
        { sentence: "___ je vais au cinéma avec des amis.", choices: ["Ce soir", "Hier soir", "Il y a soir", "Avant soir"], correctIdx: 0 },
      ],
    },
  ],
};

const a1VocL26: VocabLesson = {
  slug: "a1-voc-l26",
  code: "V.8",
  level: "A1",
  title: "Le corps humain",
  theory: [
    { type: "heading", text: "Les parties du corps" },
    {
      type: "vocab",
      title: "La tête",
      items: [
        "la tête",
        "le visage",
        "les yeux (sing. : l'œil)",
        "le nez",
        "la bouche",
        "les oreilles (f.pl.)",
        "les cheveux (m.pl.)",
        "les dents (f.pl.)",
      ],
    },
    {
      type: "vocab",
      title: "Le corps",
      items: [
        "le cou",
        "les épaules (f.pl.)",
        "le dos",
        "la poitrine",
        "le ventre",
        "le bras / les bras",
        "la main / les mains",
        "la jambe / les jambes",
        "le pied / les pieds",
        "le genou / les genoux",
      ],
    },
    {
      type: "heading", text: "Exprimer la douleur : avoir mal à…",
    },
    {
      type: "rule",
      text: "Avoir mal à + article contracté : au (masc.), à la (fém.), à l' (voyelle), aux (pluriel).",
      examples: [
        { correct: "J'ai mal au dos. (le dos → au dos)" },
        { correct: "Il a mal à la gorge. (la gorge → à la gorge)" },
        { correct: "Elle a mal à l'estomac. (l'estomac → à l'estomac)" },
        { correct: "Nous avons mal aux pieds. (les pieds → aux pieds)" },
      ],
    },
    {
      type: "vocab",
      title: "Douleurs courantes",
      items: [
        "avoir mal à la tête (= avoir mal à la tête)",
        "avoir mal au dos",
        "avoir mal à la gorge",
        "avoir mal au ventre",
        "avoir mal au bras",
        "avoir mal à la jambe",
        "avoir mal aux yeux",
        "avoir mal aux oreilles",
      ],
    },
    {
      type: "note",
      text: "Pour demander où quelqu'un a mal : « Où est-ce que vous avez mal ? » ou « Où avez-vous mal ? »",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le mot et l'article contracté",
      instruction: "Reliez chaque partie du corps à la bonne forme de « à + article ».",
      pairs: [
        { left: "le dos", right: "au dos" },
        { left: "la gorge", right: "à la gorge" },
        { left: "les pieds", right: "aux pieds" },
        { left: "l'estomac", right: "à l'estomac" },
        { left: "le bras", right: "au bras" },
        { left: "les oreilles", right: "aux oreilles" },
      ],
    },
    {
      type: "fill",
      title: "J'ai mal à...",
      instruction: "Complétez avec la bonne forme de « à + article ».",
      items: [
        { sentence: "Je lis trop et j'ai mal ___ yeux.", hint: "aux", answer: "aux" },
        { sentence: "Il a couru et maintenant il a mal ___ jambes.", hint: "aux", answer: "aux" },
        { sentence: "Tu as mal ___ tête ? Prends une aspirine.", hint: "à la", answer: "à la" },
        { sentence: "Elle a mal ___ dos depuis ce matin.", hint: "au", answer: "au" },
        { sentence: "Ouvre la bouche, vous avez mal ___ gorge ?", hint: "à la", answer: "à la" },
      ],
    },
    {
      type: "qcm",
      title: "Quel article contracté ?",
      instruction: "Choisissez la bonne forme pour compléter la phrase.",
      items: [
        { sentence: "J'ai mal ___ ventre.", choices: ["au", "à la", "à l'", "aux"], correctIdx: 0 },
        { sentence: "Elle a mal ___ oreilles.", choices: ["aux", "à l'", "au", "à la"], correctIdx: 0 },
        { sentence: "Tu as mal ___ épaule gauche ?", choices: ["à l'", "au", "à la", "aux"], correctIdx: 0 },
        { sentence: "Il a mal ___ pieds après la randonnée.", choices: ["aux", "au", "à la", "à l'"], correctIdx: 0 },
      ],
    },
  ],
};

const a1VocL12: VocabLesson = {
  slug: "a1-voc-l12",
  code: "V.9",
  level: "A1",
  title: "La ville et les lieux",
  theory: [
    { type: "heading", text: "Les lieux en ville" },
    {
      type: "vocab",
      title: "Lieux culturels et de loisirs",
      items: [
        "un cinéma",
        "un musée",
        "un théâtre",
        "une bibliothèque",
        "un parc",
        "une piscine",
      ],
    },
    {
      type: "vocab",
      title: "Commerces et services",
      items: [
        "un restaurant",
        "une boulangerie",
        "un café / un bar",
        "un supermarché",
        "une pharmacie",
        "un marché",
        "un hôtel",
      ],
    },
    {
      type: "vocab",
      title: "Institutions et espaces publics",
      items: [
        "une mairie",
        "une église",
        "une mosquée",
        "une place (publique)",
        "une rue",
        "un boulevard",
        "une gare",
      ],
    },
    {
      type: "heading", text: "Prépositions de localisation",
    },
    {
      type: "rule",
      text: "Localiser un endroit avec des prépositions.",
      examples: [
        { correct: "La boulangerie est à côté de la banque." },
        { correct: "Le musée est en face de la mairie." },
        { correct: "La pharmacie est près de l'hôpital." },
        { correct: "L'église est entre la place et la rue principale." },
        { correct: "Le café est à droite de la boulangerie." },
        { correct: "Le parking est derrière le supermarché." },
      ],
    },
    {
      type: "vocab",
      title: "Prépositions de lieu",
      items: [
        "à côté de (next to)",
        "près de (near)",
        "loin de (far from)",
        "en face de (opposite)",
        "devant (in front of)",
        "derrière (behind)",
        "entre (between)",
        "à droite de (to the right of)",
        "à gauche de (to the left of)",
      ],
    },
    {
      type: "note",
      text: "Attention : à côté de + le → à côté du. À côté de + les → à côté des.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le lieu et sa description",
      instruction: "Reliez chaque lieu à sa description.",
      pairs: [
        { left: "une boulangerie", right: "on achète du pain" },
        { left: "une pharmacie", right: "on achète des médicaments" },
        { left: "une mairie", right: "services administratifs municipaux" },
        { left: "un musée", right: "on regarde des œuvres d'art" },
        { left: "une piscine", right: "on fait de la natation" },
        { left: "une bibliothèque", right: "on emprunte des livres" },
      ],
    },
    {
      type: "fill",
      title: "Décrire la localisation",
      instruction: "Complétez avec la bonne préposition de lieu.",
      items: [
        { sentence: "La banque est ___ ___ la boulangerie et la pharmacie.", hint: "entre", answer: "entre" },
        { sentence: "Le café est ___ ___ (opposite) la poste.", hint: "en face de", answer: "en face de" },
        { sentence: "Le parc est ___ ___ (near) du musée.", hint: "près", answer: "près" },
        { sentence: "La mairie est ___ (behind) l'église.", hint: "derrière", answer: "derrière" },
        { sentence: "La boulangerie est à ___ ___ du café.", hint: "côté", answer: "côté" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon lieu",
      instruction: "Choisissez le bon endroit selon la description.",
      items: [
        { sentence: "On achète une baguette et des croissants à ___.", choices: ["la boulangerie", "la pharmacie", "la mairie", "la piscine"], correctIdx: 0 },
        { sentence: "Pour nager, on va à ___.", choices: ["la piscine", "la bibliothèque", "la place", "la gare"], correctIdx: 0 },
        { sentence: "Pour emprunter des livres gratuitement, on va à ___.", choices: ["la bibliothèque", "la librairie", "le cinéma", "le musée"], correctIdx: 0 },
        { sentence: "Le train arrive à ___.", choices: ["la gare", "la mairie", "l'église", "la pharmacie"], correctIdx: 0 },
      ],
    },
  ],
};

const a1VocL17: VocabLesson = {
  slug: "a1-voc-l17",
  code: "V.10",
  level: "A1",
  title: "Le logement",
  theory: [
    { type: "heading", text: "Les pièces de la maison" },
    {
      type: "vocab",
      title: "Les pièces",
      items: [
        "un salon (living room)",
        "une cuisine (kitchen)",
        "une chambre (bedroom)",
        "une salle de bain (bathroom)",
        "des toilettes / les WC (toilet)",
        "une salle à manger (dining room)",
        "un couloir (hallway)",
        "un balcon / une terrasse",
        "un garage",
        "une cave (cellar)",
      ],
    },
    {
      type: "heading", text: "Les meubles et équipements",
    },
    {
      type: "vocab",
      title: "Dans le salon",
      items: [
        "un canapé (sofa)",
        "une table basse (coffee table)",
        "un fauteuil (armchair)",
        "une télévision",
        "une étagère (shelf)",
      ],
    },
    {
      type: "vocab",
      title: "Dans la cuisine",
      items: [
        "un frigo / un réfrigérateur",
        "une plaque de cuisson (hob)",
        "un four (oven)",
        "un lave-vaisselle (dishwasher)",
        "un micro-ondes (microwave)",
      ],
    },
    {
      type: "vocab",
      title: "Dans la chambre",
      items: [
        "un lit",
        "une armoire (wardrobe)",
        "une commode (chest of drawers)",
        "une lampe de chevet",
      ],
    },
    {
      type: "heading", text: "Location et déménagement",
    },
    {
      type: "vocab",
      title: "Vocabulaire de la location",
      items: [
        "louer (to rent)",
        "un appartement",
        "une maison",
        "un studio (bedsit)",
        "le loyer (rent)",
        "les charges (utilities)",
        "déménager (to move house)",
        "emménager (to move in)",
        "un propriétaire / un locataire",
      ],
    },
    {
      type: "note",
      text: "Un studio = un seul espace de vie + une salle de bain. Un appartement T2 = une chambre séparée.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le meuble et la pièce",
      instruction: "Reliez chaque meuble à la pièce où on le trouve habituellement.",
      pairs: [
        { left: "un canapé", right: "le salon" },
        { left: "un lit", right: "la chambre" },
        { left: "un frigo", right: "la cuisine" },
        { left: "une baignoire", right: "la salle de bain" },
        { left: "une table à manger", right: "la salle à manger" },
        { left: "une armoire", right: "la chambre" },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases sur le logement",
      instruction: "Complétez chaque phrase avec le mot correct.",
      items: [
        { sentence: "Je cherche un ___ : juste une pièce avec une kitchenette.", hint: "studio", answer: "studio" },
        { sentence: "Le ___ mensuel est de 850 euros.", hint: "loyer", answer: "loyer" },
        { sentence: "Nous allons ___ le mois prochain dans notre nouvel appartement.", hint: "emménager", answer: "emménager" },
        { sentence: "On regarde les films dans le ___.", hint: "salon", answer: "salon" },
        { sentence: "La ___ est à côté de la chambre principale.", hint: "salle de bain", answer: "salle de bain" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon mot",
      instruction: "Choisissez le mot correct pour compléter la phrase.",
      items: [
        { sentence: "On fait la cuisine dans ___.", choices: ["la cuisine", "le salon", "la chambre", "le couloir"], correctIdx: 0 },
        { sentence: "Pour dormir, on va dans ___.", choices: ["la chambre", "la salle de bain", "le salon", "la cave"], correctIdx: 0 },
        { sentence: "Je ___ mon appartement 900 euros par mois.", choices: ["loue", "vends", "achète", "donne"], correctIdx: 0 },
        { sentence: "Le ___ conserve les aliments au froid.", choices: ["frigo", "four", "micro-ondes", "lave-vaisselle"], correctIdx: 0 },
      ],
    },
  ],
};

const a1VocL27: VocabLesson = {
  slug: "a1-voc-l27",
  code: "V.11",
  level: "A1",
  title: "Les vêtements et les achats",
  theory: [
    { type: "heading", text: "Les vêtements" },
    {
      type: "vocab",
      title: "Vêtements féminins et mixtes",
      items: [
        "une robe (dress)",
        "une jupe (skirt)",
        "un pantalon (trousers)",
        "un jean",
        "un pull / un pullover (sweater)",
        "un t-shirt",
        "une chemise (shirt)",
        "une veste (jacket)",
        "un manteau (coat)",
        "une écharpe (scarf)",
        "un chapeau (hat)",
        "des chaussures (f.pl.) (shoes)",
        "des chaussettes (f.pl.) (socks)",
        "un sac (bag)",
        "des lunettes (f.pl.) (glasses)",
      ],
    },
    {
      type: "heading", text: "Les verbes pour les achats",
    },
    {
      type: "rule",
      text: "Verbes importants pour faire du shopping.",
      examples: [
        { correct: "J'achète une robe bleue." },
        { correct: "Elle porte un jean et un pull rouge." },
        { correct: "Tu peux essayer ce manteau ?" },
        { correct: "Vous faites quelle taille ?" },
      ],
    },
    {
      type: "vocab",
      title: "Verbes utiles",
      items: [
        "acheter (to buy)",
        "porter (to wear)",
        "essayer (to try on)",
        "choisir (to choose)",
        "payer (to pay)",
        "faire quelle taille ? (what size?)",
      ],
    },
    {
      type: "heading", text: "Adjectifs pour décrire les vêtements",
    },
    {
      type: "vocab",
      title: "Adjectifs courants",
      items: [
        "cher / chère (expensive)",
        "bon marché / pas cher (cheap)",
        "joli(e) (pretty)",
        "élégant(e)",
        "grand(e) / petit(e)",
        "court(e) / long(ue)",
        "serré(e) (tight) / ample (loose)",
      ],
    },
    {
      type: "rule",
      text: "Pour demander la taille : « Vous faites quelle taille ? » — Réponse : « Je fais du 38 / du M. »",
      examples: [
        { correct: "— Vous faites quelle taille ? — Je fais du 42." },
        { correct: "— Ce manteau est trop grand. Vous avez du 38 ?" },
      ],
    },
    {
      type: "note",
      text: "En France, les tailles pour les vêtements féminins vont de 34 à 48 ; pour les hommes de 38 à 60.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le vêtement et sa description",
      instruction: "Reliez chaque vêtement à sa définition.",
      pairs: [
        { left: "une robe", right: "vêtement féminin une seule pièce" },
        { left: "un manteau", right: "vêtement chaud pour l'extérieur" },
        { left: "une écharpe", right: "on la porte autour du cou" },
        { left: "des chaussettes", right: "on les porte dans les chaussures" },
        { left: "une veste", right: "vêtement court sur la chemise" },
        { left: "un jean", right: "pantalon en denim" },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases",
      instruction: "Complétez chaque phrase avec le bon verbe ou mot.",
      items: [
        { sentence: "Je voudrais ___ cette robe avant de l'acheter.", hint: "essayer", answer: "essayer" },
        { sentence: "Elle ___ toujours des vêtements élégants au bureau.", hint: "porte", answer: "porte" },
        { sentence: "Ce manteau est trop cher ! Je cherche quelque chose de moins ___.", hint: "cher", answer: "cher" },
        { sentence: "Tu fais quelle ___ ? Du 40 ou du 42 ?", hint: "taille", answer: "taille" },
        { sentence: "J'___ une nouvelle veste pour l'hiver.", hint: "achète", answer: "achète" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon vêtement",
      instruction: "Choisissez le mot correct pour compléter la phrase.",
      items: [
        { sentence: "En hiver, je mets toujours un ___ pour avoir chaud.", choices: ["manteau", "t-shirt", "short", "maillot"], correctIdx: 0 },
        { sentence: "Pour une occasion formelle, elle porte une ___.", choices: ["robe", "écharpe", "chaussette", "casquette"], correctIdx: 0 },
        { sentence: "Le vendeur demande : « Vous faites quelle ___ ? »", choices: ["taille", "couleur", "marque", "pointure"], correctIdx: 0 },
        { sentence: "Ces chaussures sont très ___ : elles coûtent 200 euros.", choices: ["chères", "jolies", "petites", "amples"], correctIdx: 0 },
      ],
    },
  ],
};

const a1VocL18: VocabLesson = {
  slug: "a1-voc-l18",
  code: "V.12",
  level: "A1",
  title: "Les loisirs et le sport",
  theory: [
    { type: "heading", text: "Les sports" },
    {
      type: "vocab",
      title: "Sports courants",
      items: [
        "le football (foot)",
        "le tennis",
        "le vélo / le cyclisme",
        "la natation (swimming)",
        "la course à pied (running)",
        "le yoga",
        "le basket-ball",
        "le volleyball",
        "la randonnée (hiking)",
        "la danse",
        "le ski",
      ],
    },
    {
      type: "heading", text: "Activités artistiques",
    },
    {
      type: "vocab",
      title: "Activités créatives",
      items: [
        "la musique (jouer de la guitare, du piano…)",
        "le dessin",
        "la peinture",
        "la photographie",
        "le cinéma",
        "la lecture (reading)",
        "le jardinage (gardening)",
        "la cuisine",
      ],
    },
    {
      type: "heading", text: "Expressions avec FAIRE",
    },
    {
      type: "rule",
      text: "Faire + du/de la/de l'/des + activité. On utilise « faire » pour les sports et activités.",
      examples: [
        { correct: "Je fais du vélo le week-end." },
        { correct: "Elle fait de la natation trois fois par semaine." },
        { correct: "Nous faisons du yoga le mardi." },
        { correct: "Ils font des randonnées en montagne." },
      ],
    },
    {
      type: "rule",
      text: "Jouer à + sport d'équipe. Jouer de + instrument de musique.",
      examples: [
        { correct: "Je joue au tennis.", wrong: "Je fais du tennis." },
        { correct: "Elle joue de la guitare.", wrong: "Elle fait de la guitare." },
      ],
    },
    {
      type: "vocab",
      title: "Autres expressions avec faire",
      items: [
        "faire une pause (to take a break)",
        "faire la fête (to party)",
        "faire les courses (to do the grocery shopping)",
        "faire du shopping",
        "faire une promenade (to go for a walk)",
        "faire la cuisine (to cook)",
      ],
    },
    {
      type: "note",
      text: "Jouer AU (masc.) / À LA (fém.) / AUX (plur.) pour les sports. Ex : jouer au foot, jouer à la pétanque, jouer aux cartes.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer l'activité et la bonne expression",
      instruction: "Reliez chaque activité à la bonne expression avec faire ou jouer.",
      pairs: [
        { left: "le vélo", right: "faire du vélo" },
        { left: "la natation", right: "faire de la natation" },
        { left: "le tennis", right: "jouer au tennis" },
        { left: "la guitare", right: "jouer de la guitare" },
        { left: "le yoga", right: "faire du yoga" },
        { left: "le foot", right: "jouer au foot" },
      ],
    },
    {
      type: "fill",
      title: "Compléter avec du, de la ou de l'",
      instruction: "Complétez chaque phrase avec la bonne forme.",
      items: [
        { sentence: "Il fait ___ vélo tous les matins.", hint: "du", answer: "du" },
        { sentence: "Nous faisons ___ natation à la piscine.", hint: "de la", answer: "de la" },
        { sentence: "Tu fais ___ escalade le week-end ?", hint: "de l'", answer: "de l'" },
        { sentence: "Elle fait ___ yoga pour se détendre.", hint: "du", answer: "du" },
        { sentence: "Ils font ___ randonnée en montagne.", hint: "de la", answer: "de la" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon verbe",
      instruction: "Choisissez le bon verbe (faire ou jouer) pour compléter la phrase.",
      items: [
        { sentence: "Elle ___ au basketball avec son équipe.", choices: ["joue", "fait", "aime", "va"], correctIdx: 0 },
        { sentence: "Je ___ de la course à pied trois fois par semaine.", choices: ["fais", "joue", "pratique", "aime"], correctIdx: 0 },
        { sentence: "Il ___ du piano depuis l'âge de 5 ans.", choices: ["joue", "fait", "prend", "écoute"], correctIdx: 0 },
        { sentence: "Nous ___ une promenade dans le parc le dimanche.", choices: ["faisons", "jouons", "prenons", "marchons"], correctIdx: 0 },
      ],
    },
  ],
};

// ── A2 Lessons ────────────────────────────────────────────────────────────────

const a2VocL01: VocabLesson = {
  slug: "a2-voc-l01",
  code: "V.13",
  level: "A2",
  title: "Les voyages et les transports",
  theory: [
    { type: "heading", text: "Vocabulaire des voyages" },
    {
      type: "vocab",
      title: "À la gare et à l'aéroport",
      items: [
        "une gare (train station)",
        "un aéroport (airport)",
        "un billet (ticket)",
        "un vol (flight)",
        "un trajet (journey)",
        "une durée (duration)",
        "un itinéraire (itinerary)",
        "une escale (stopover)",
        "un quai (platform)",
        "une salle d'attente (waiting room)",
        "un contrôle de sécurité (security check)",
        "l'embarquement (boarding)",
      ],
    },
    {
      type: "heading", text: "Verbes de déplacement",
    },
    {
      type: "rule",
      text: "Verbes pour exprimer le voyage et le déplacement.",
      examples: [
        { correct: "Je pars pour Rome vendredi." },
        { correct: "Elle arrive à Paris à 18h." },
        { correct: "Nous retournons en France la semaine prochaine." },
        { correct: "Il revient de vacances demain." },
        { correct: "Le trajet met 2 heures." },
      ],
    },
    {
      type: "vocab",
      title: "Verbes essentiels",
      items: [
        "partir pour / de (to leave for/from)",
        "arriver à / de (to arrive at/from)",
        "retourner (to go back)",
        "revenir (to come back)",
        "voyager (to travel)",
        "prendre (le train, l'avion)",
        "mettre (2 heures) (to take 2 hours)",
        "réserver (to book)",
        "annuler (to cancel)",
        "valider (son billet) (to validate)",
      ],
    },
    {
      type: "vocab",
      title: "Types de trajet",
      items: [
        "un vol direct (direct flight)",
        "un vol avec escale (connecting flight)",
        "un aller simple (one-way ticket)",
        "un aller-retour (return ticket)",
        "un trajet rapide / long",
      ],
    },
    {
      type: "vocab",
      title: "Lieux de vacances",
      items: [
        "la plage (beach)",
        "la mer (sea)",
        "le port (port / harbour)",
        "la montagne (mountain)",
        "la campagne (countryside)",
        "une île (island)",
        "une station de ski (ski resort)",
      ],
    },
    {
      type: "note",
      text: "En France, le TGV (Train à Grande Vitesse) relie les grandes villes à grande vitesse. Paris–Lyon = environ 2h.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le mot et sa définition",
      instruction: "Reliez chaque mot de voyage à sa définition.",
      pairs: [
        { left: "un billet", right: "titre de transport" },
        { left: "une escale", right: "arrêt intermédiaire dans un vol" },
        { left: "un aller-retour", right: "billet pour partir et revenir" },
        { left: "embarquement", right: "monter dans l'avion" },
        { left: "un quai", right: "là où on attend le train" },
        { left: "un itinéraire", right: "le plan du trajet" },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases",
      instruction: "Complétez chaque phrase avec le bon mot ou verbe.",
      items: [
        { sentence: "Le vol ___ (to take) 3 heures de Paris à Barcelone.", hint: "met", answer: "met" },
        { sentence: "Je voudrais ___ (to book) deux billets pour Marseille.", hint: "réserver", answer: "réserver" },
        { sentence: "Nous ___ (to leave for) Paris vendredi matin.", hint: "partons pour", answer: "partons pour" },
        { sentence: "L'avion ___ (to arrive) à 15h30 à l'aéroport.", hint: "arrive", answer: "arrive" },
        { sentence: "Je préfère un vol ___ sans escale.", hint: "direct", answer: "direct" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon mot",
      instruction: "Choisissez le mot correct pour compléter la phrase.",
      items: [
        { sentence: "Pour aller de Paris à Lyon, je prends le ___.", choices: ["train", "billet", "quai", "vol"], correctIdx: 0 },
        { sentence: "Nous passons nos vacances à la ___, on aime nager.", choices: ["mer", "montagne", "campagne", "ville"], correctIdx: 0 },
        { sentence: "Je veux un ___ Paris–Rome, je reviens dans une semaine.", choices: ["aller-retour", "aller simple", "vol direct", "billet d'escale"], correctIdx: 0 },
        { sentence: "L'avion ___ de Genève à 8h du matin.", choices: ["part", "arrive", "revient", "réserve"], correctIdx: 0 },
      ],
    },
  ],
};

const a2VocL02: VocabLesson = {
  slug: "a2-voc-l02",
  code: "V.14",
  level: "A2",
  title: "La santé et le médecin",
  theory: [
    { type: "heading", text: "Chez le médecin" },
    {
      type: "vocab",
      title: "Personnes et lieux",
      items: [
        "un médecin / un docteur",
        "un(e) infirmier/infirmière (nurse)",
        "un(e) pharmacien/pharmacienne",
        "un hôpital",
        "une clinique",
        "une pharmacie",
        "un cabinet médical (doctor's office)",
        "une salle d'attente",
      ],
    },
    {
      type: "vocab",
      title: "Documents médicaux",
      items: [
        "prendre un rendez-vous (to make an appointment)",
        "une ordonnance (prescription)",
        "un médicament (medicine)",
        "un comprimé (tablet)",
        "une gélule (capsule)",
        "un sirop (syrup)",
        "une prise de sang (blood test)",
      ],
    },
    {
      type: "heading", text: "Les symptômes" },
    {
      type: "vocab",
      title: "Expressions pour décrire la santé",
      items: [
        "avoir de la fièvre (to have a fever)",
        "tousser (to cough)",
        "éternuer (to sneeze)",
        "avoir mal à... (to have a pain in...)",
        "être fatigué(e) (to be tired)",
        "être enrhumé(e) (to have a cold)",
        "avoir des nausées (to feel nauseous)",
        "vomir (to vomit)",
        "être blessé(e) (to be injured)",
        "saigner (to bleed)",
      ],
    },
    {
      type: "heading", text: "Donner des conseils médicaux",
    },
    {
      type: "rule",
      text: "Il faut + infinitif ou Vous devez + infinitif pour donner des conseils ou instructions.",
      examples: [
        { correct: "Il faut se reposer et boire beaucoup d'eau." },
        { correct: "Vous devez prendre un comprimé trois fois par jour." },
        { correct: "Il ne faut pas sortir avec de la fièvre." },
        { correct: "Vous devez éviter le sport pendant une semaine." },
      ],
    },
    {
      type: "note",
      text: "En France, pour un remboursement des frais médicaux, il faut être inscrit à la Sécurité sociale.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le symptôme et sa description",
      instruction: "Reliez chaque expression à sa signification en français.",
      pairs: [
        { left: "avoir de la fièvre", right: "température élevée" },
        { left: "tousser", right: "faire le son « touh touh »" },
        { left: "une ordonnance", right: "document du médecin pour les médicaments" },
        { left: "être enrhumé(e)", right: "avoir un rhume" },
        { left: "un comprimé", right: "médicament solide à avaler" },
        { left: "une prise de sang", right: "analyse du sang" },
      ],
    },
    {
      type: "fill",
      title: "Chez le médecin",
      instruction: "Complétez les phrases avec le bon mot.",
      items: [
        { sentence: "Je dois ___ un rendez-vous chez le médecin.", hint: "prendre", answer: "prendre" },
        { sentence: "Le médecin me donne une ___ pour acheter les médicaments.", hint: "ordonnance", answer: "ordonnance" },
        { sentence: "J'ai de la fièvre, je dois ___ au lit.", hint: "rester", answer: "rester" },
        { sentence: "Prenez ce ___ deux fois par jour après les repas.", hint: "comprimé", answer: "comprimé" },
        { sentence: "Il ___ beaucoup depuis ce matin, il est peut-être malade.", hint: "tousse", answer: "tousse" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon conseil médical",
      instruction: "Choisissez la bonne expression pour compléter la phrase.",
      items: [
        { sentence: "Tu as 39° de fièvre. Il faut ___ et boire beaucoup d'eau.", choices: ["te reposer", "faire du sport", "travailler", "sortir"], correctIdx: 0 },
        { sentence: "Le médecin me dit : « Vous ___ prendre ce médicament trois fois par jour. »", choices: ["devez", "pouvez", "voulez", "aimez"], correctIdx: 0 },
        { sentence: "Pour acheter les médicaments, j'ai besoin d'une ___.", choices: ["ordonnance", "prise de sang", "fièvre", "gélule"], correctIdx: 0 },
        { sentence: "J'ai mal à la gorge et je ___.", choices: ["tousse", "saigne", "éternue", "vomis"], correctIdx: 0 },
      ],
    },
  ],
};

const a2VocL03: VocabLesson = {
  slug: "a2-voc-l03",
  code: "V.15",
  level: "A2",
  title: "Le monde du travail",
  theory: [
    { type: "heading", text: "Les métiers" },
    {
      type: "vocab",
      title: "Professions courantes",
      items: [
        "un médecin / une médecin (doctor)",
        "un professeur / une professeure (teacher)",
        "un vendeur / une vendeuse (salesperson)",
        "un cuisinier / une cuisinière (cook)",
        "un informaticien / une informaticienne (IT specialist)",
        "un comptable (accountant)",
        "un avocat / une avocate (lawyer)",
        "un infirmier / une infirmière (nurse)",
        "un ingénieur / une ingénieure (engineer)",
        "un directeur / une directrice (manager)",
        "un secrétaire / une secrétaire",
        "un plombier (plumber)",
        "un électricien / une électricienne",
      ],
    },
    {
      type: "heading", text: "Les lieux de travail",
    },
    {
      type: "vocab",
      title: "Où travaille-t-on ?",
      items: [
        "une entreprise (company)",
        "un bureau (office)",
        "une usine (factory)",
        "un magasin (shop)",
        "un hôpital",
        "une école / un lycée",
        "un restaurant",
        "un chantier (construction site)",
        "à domicile / en télétravail (working from home)",
      ],
    },
    {
      type: "heading", text: "Expressions avec AVOIR",
    },
    {
      type: "rule",
      text: "Expressions idiomatiques avec AVOIR dans le monde du travail.",
      examples: [
        { correct: "Il a de la chance : il a un bon salaire." },
        { correct: "J'ai besoin de plus d'expérience." },
        { correct: "Elle a le choix entre deux offres d'emploi." },
        { correct: "Il a une bonne situation (= stable job)." },
        { correct: "Tu as de l'expérience dans ce domaine ?" },
      ],
    },
    {
      type: "heading", text: "Chercher du travail",
    },
    {
      type: "vocab",
      title: "Vocabulaire de la recherche d'emploi",
      items: [
        "un CV (curriculum vitae)",
        "une offre d'emploi (job offer)",
        "un entretien d'embauche (job interview)",
        "poser sa candidature (to apply)",
        "un employeur (employer)",
        "un employé (employee)",
        "un salaire (salary)",
        "un contrat (contract)",
        "le temps plein / le temps partiel (full-time / part-time)",
        "un stage (internship)",
        "être au chômage (to be unemployed)",
      ],
    },
    {
      type: "note",
      text: "En France, Pôle Emploi est l'agence nationale pour l'emploi (remplacée par France Travail depuis 2024).",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le métier et le lieu de travail",
      instruction: "Reliez chaque métier à son lieu de travail habituel.",
      pairs: [
        { left: "un médecin", right: "un hôpital / un cabinet" },
        { left: "un professeur", right: "une école / un lycée" },
        { left: "un cuisinier", right: "un restaurant" },
        { left: "un vendeur", right: "un magasin" },
        { left: "un comptable", right: "un bureau / une entreprise" },
        { left: "un plombier", right: "chez les clients" },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases",
      instruction: "Complétez chaque phrase avec le bon mot.",
      items: [
        { sentence: "Pour postuler, j'envoie mon ___ et une lettre de motivation.", hint: "CV", answer: "CV" },
        { sentence: "Elle a un ___ d'embauche demain pour un poste de comptable.", hint: "entretien", answer: "entretien" },
        { sentence: "Il cherche une ___ d'emploi dans le secteur informatique.", hint: "offre", answer: "offre" },
        { sentence: "Je travaille à temps ___ : 20 heures par semaine.", hint: "partiel", answer: "partiel" },
        { sentence: "J'ai ___ de prendre des vacances, je suis épuisé.", hint: "besoin", answer: "besoin" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon mot",
      instruction: "Choisissez le mot correct pour compléter la phrase.",
      items: [
        { sentence: "Elle ___ dans une grande entreprise depuis 5 ans.", choices: ["travaille", "habite", "étudie", "voyage"], correctIdx: 0 },
        { sentence: "Un ___ est un accord entre l'employeur et l'employé.", choices: ["contrat", "CV", "stage", "salaire"], correctIdx: 0 },
        { sentence: "Il n'a pas de travail en ce moment, il est au ___.", choices: ["chômage", "bureau", "stage", "congé"], correctIdx: 0 },
        { sentence: "Je ___ de la chance : j'ai trouvé un emploi rapidement.", choices: ["ai", "suis", "fais", "prends"], correctIdx: 0 },
      ],
    },
  ],
};

const a2VocL04: VocabLesson = {
  slug: "a2-voc-l04",
  code: "V.16",
  level: "A2",
  title: "Les sorties et les invitations",
  theory: [
    { type: "heading", text: "Organiser une sortie" },
    {
      type: "vocab",
      title: "Types de sorties",
      items: [
        "une soirée (party / evening out)",
        "une fête (celebration)",
        "un pique-nique",
        "un apéro / apéritif (pre-dinner drinks)",
        "une expo(sition) (exhibition)",
        "un spectacle (show)",
        "un concert",
        "un repas entre amis",
        "boire un verre (to go for a drink)",
        "un jour férié (public holiday)",
      ],
    },
    {
      type: "heading", text: "Inviter et répondre",
    },
    {
      type: "rule",
      text: "Formules pour inviter quelqu'un.",
      examples: [
        { correct: "Ça te dit de venir pique-niquer samedi ?" },
        { correct: "Tu es dispo vendredi soir ?" },
        { correct: "On organise une soirée, tu viens ?" },
        { correct: "Je t'invite à dîner chez moi." },
      ],
    },
    {
      type: "rule",
      text: "Formules pour accepter ou refuser.",
      examples: [
        { correct: "Oui, ça marche ! / Parfait, avec plaisir !" },
        { correct: "Je suis dispo, je viens avec plaisir." },
        { correct: "Désolé(e), je ne peux pas, j'ai déjà quelque chose." },
        { correct: "C'est dommage, je suis pris(e)." },
      ],
    },
    {
      type: "vocab",
      title: "Formules informelles",
      items: [
        "Ça te / vous dit de... ? (Do you fancy...?)",
        "Je suis dispo (I'm available / free)",
        "Ça marche ! (It works! / OK!)",
        "C'est sympa ! (That's nice!)",
        "À plus (tard) ! (See you later!)",
        "À bientôt ! (See you soon!)",
        "apporter à boire / à manger (to bring drinks / food)",
      ],
    },
    {
      type: "rule",
      text: "Organiser un événement : penser aux détails.",
      examples: [
        { correct: "Où est-ce qu'on se retrouve ? — On se retrouve au parc." },
        { correct: "C'est à quelle heure ? — C'est à 19h." },
        { correct: "Qu'est-ce qu'on apporte ? — Apporte une bouteille de vin." },
      ],
    },
    {
      type: "note",
      text: "L'apéro est une tradition française : boissons et petits snacks avant le repas principal. On dit souvent « Je t'invite à l'apéro ».",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer l'expression et sa signification",
      instruction: "Reliez chaque expression informelle à sa définition.",
      pairs: [
        { left: "Ça te dit ?", right: "Est-ce que tu veux ?" },
        { left: "Ça marche !", right: "D'accord !" },
        { left: "Je suis dispo", right: "Je suis libre" },
        { left: "À plus !", right: "À bientôt !" },
        { left: "C'est sympa", right: "C'est agréable" },
        { left: "Je suis pris(e)", right: "Je ne suis pas libre" },
      ],
    },
    {
      type: "fill",
      title: "Compléter le dialogue",
      instruction: "Complétez les phrases avec le bon mot ou expression.",
      items: [
        { sentence: "— Ça te dit de venir à mon ___  samedi soir ?", hint: "apéro", answer: "apéro" },
        { sentence: "— Oui, je suis ___ ! J'arrive vers 19h.", hint: "dispo", answer: "dispo" },
        { sentence: "— Qu'est-ce que j'___ ? Du vin ou de la bière ?", hint: "apporte", answer: "apporte" },
        { sentence: "— Apporte ce que tu veux. ___ marche !", hint: "Ça", answer: "Ça" },
        { sentence: "— Super, ___ bientôt !", hint: "à", answer: "à" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir la bonne réponse",
      instruction: "Choisissez la bonne réponse pour chaque situation.",
      items: [
        { sentence: "Ton ami dit : « Ça te dit de venir au cinéma ? » Tu acceptes :", choices: ["Oui, ça marche !", "Non, je suis dispo.", "Désolé, c'est sympa.", "Je suis pris."], correctIdx: 0 },
        { sentence: "Tu veux inviter un ami à un pique-nique. Tu dis :", choices: ["Ça te dit de venir pique-niquer ?", "Tu es pris dimanche ?", "Je ne suis pas dispo.", "C'est dommage !"], correctIdx: 0 },
        { sentence: "Pour une soirée, on dit aux invités d'___.", choices: ["apporter à boire", "être pris", "ne pas venir", "rester chez eux"], correctIdx: 0 },
        { sentence: "Un ___ est un apéritif entre amis.", choices: ["apéro", "pique-nique", "spectacle", "concert"], correctIdx: 0 },
      ],
    },
  ],
};

const a2VocL05: VocabLesson = {
  slug: "a2-voc-l05",
  code: "V.17",
  level: "A2",
  title: "La cuisine et les recettes",
  theory: [
    { type: "heading", text: "Les ingrédients" },
    {
      type: "vocab",
      title: "Ingrédients de base",
      items: [
        "de la farine (flour)",
        "du beurre (butter)",
        "des œufs (m.pl.) (eggs)",
        "du sucre (sugar)",
        "du lait (milk)",
        "du sel (salt)",
        "du poivre (pepper)",
        "de l'huile (f.) (oil)",
        "de la levure (baking powder / yeast)",
        "du chocolat",
        "de la crème (cream)",
      ],
    },
    {
      type: "heading", text: "Les ustensiles de cuisine",
    },
    {
      type: "vocab",
      title: "Ce qu'on utilise pour cuisiner",
      items: [
        "un bol (bowl)",
        "un moule (baking tin)",
        "une poêle (frying pan)",
        "une casserole (saucepan)",
        "un four (oven)",
        "un fouet (whisk)",
        "une cuillère en bois (wooden spoon)",
        "un couteau (knife)",
        "une planche à découper (chopping board)",
      ],
    },
    {
      type: "heading", text: "Les actions en cuisine",
    },
    {
      type: "vocab",
      title: "Verbes de cuisine",
      items: [
        "mélanger (to mix)",
        "verser (to pour)",
        "ajouter (to add)",
        "mettre au four (to put in the oven)",
        "faire cuire (to cook)",
        "couper (to cut)",
        "éplucher (to peel)",
        "faire chauffer (to heat up)",
        "fouetter (to whisk)",
        "incorporer (to fold in)",
      ],
    },
    {
      type: "heading", text: "Exprimer les quantités",
    },
    {
      type: "rule",
      text: "Indiquer les quantités dans une recette.",
      examples: [
        { correct: "une cuillère à soupe de sucre" },
        { correct: "100 grammes de farine" },
        { correct: "un litre de lait" },
        { correct: "une pincée de sel (a pinch of salt)" },
        { correct: "une noisette de beurre (a small knob of butter)" },
      ],
    },
    {
      type: "note",
      text: "Dans une recette française, les instructions sont souvent à l'infinitif : « Mélanger les œufs et le sucre. Ajouter la farine. »",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer l'ustensile et son utilisation",
      instruction: "Reliez chaque ustensile à son utilisation.",
      pairs: [
        { left: "un fouet", right: "battre les œufs" },
        { left: "un moule", right: "cuire un gâteau" },
        { left: "une poêle", right: "faire sauter les légumes" },
        { left: "un couteau", right: "couper les légumes" },
        { left: "un bol", right: "mélanger les ingrédients" },
        { left: "une casserole", right: "faire bouillir de l'eau" },
      ],
    },
    {
      type: "fill",
      title: "Compléter une recette",
      instruction: "Complétez chaque étape de la recette avec le bon verbe.",
      items: [
        { sentence: "___ (mix) les œufs et le sucre dans un bol.", hint: "Mélangez", answer: "Mélangez" },
        { sentence: "___ (add) la farine petit à petit.", hint: "Ajoutez", answer: "Ajoutez" },
        { sentence: "___ (pour) le lait dans le mélange.", hint: "Versez", answer: "Versez" },
        { sentence: "___ (put in the oven) à 180° pendant 30 minutes.", hint: "Mettez au four", answer: "Mettez au four" },
        { sentence: "___ les légumes avant de les couper.", hint: "Épluchez", answer: "Épluchez" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon ingrédient",
      instruction: "Choisissez le bon ingrédient pour compléter la phrase.",
      items: [
        { sentence: "Pour faire un gâteau, on a besoin de ___, de beurre et d'œufs.", choices: ["farine", "poivre", "sel", "huile"], correctIdx: 0 },
        { sentence: "On ajoute une pincée de ___ pour assaisonner les plats.", choices: ["sel", "sucre", "lait", "farine"], correctIdx: 0 },
        { sentence: "Pour faire une omelette, on utilise des ___ et du beurre.", choices: ["œufs", "légumes", "gâteaux", "farines"], correctIdx: 0 },
        { sentence: "Pour faire chauffer les légumes, on utilise une ___.", choices: ["poêle", "casserole", "four", "bol"], correctIdx: 0 },
      ],
    },
  ],
};

const a2VocL06: VocabLesson = {
  slug: "a2-voc-l06",
  code: "V.18",
  level: "A2",
  title: "La famille et les relations",
  theory: [
    { type: "heading", text: "La famille" },
    {
      type: "vocab",
      title: "Membres de la famille",
      items: [
        "un père / une mère (father / mother)",
        "un frère / une sœur (brother / sister)",
        "un fils / une fille (son / daughter)",
        "un grand-père / une grand-mère (grandfather / grandmother)",
        "un petit-fils / une petite-fille (grandson / granddaughter)",
        "un oncle / une tante (uncle / aunt)",
        "un cousin / une cousine (cousin)",
        "un neveu / une nièce (nephew / niece)",
        "les parents (parents)",
        "les grands-parents (grandparents)",
        "un enfant / les enfants (child / children)",
      ],
    },
    {
      type: "heading", text: "La description physique",
    },
    {
      type: "rule",
      text: "Décrire les cheveux et les yeux.",
      examples: [
        { correct: "Il est blond / brun / châtain / roux." },
        { correct: "Elle a les cheveux longs / courts / frisés / raides." },
        { correct: "Il a les yeux bleus / verts / marron / noirs." },
        { correct: "Elle est grande / petite / de taille moyenne." },
      ],
    },
    {
      type: "vocab",
      title: "Apparence physique",
      items: [
        "blond(e) / brun(e) / châtain / roux (blonde/dark/chestnut/redhead)",
        "les cheveux longs / courts / mi-longs",
        "les cheveux frisés / raides / ondulés",
        "les yeux bleus / verts / marron / noirs / gris",
        "grand(e) / petit(e) / de taille moyenne",
        "mince / corpulent(e) (slim / heavy)",
        "avoir une barbe / des lunettes / un tatouage",
      ],
    },
    {
      type: "heading", text: "La personnalité",
    },
    {
      type: "vocab",
      title: "Adjectifs de caractère",
      items: [
        "sympa(thique) (nice)",
        "drôle / amusant(e) (funny)",
        "sérieux/sérieuse",
        "gentil/gentille (kind)",
        "timide (shy)",
        "bavard(e) (talkative)",
        "courageux/courageuse (brave)",
        "patient(e) / impatient(e)",
        "généreux/généreuse (generous)",
        "égoïste (selfish)",
      ],
    },
    {
      type: "heading", text: "Les relations",
    },
    {
      type: "vocab",
      title: "Vocabulaire des relations",
      items: [
        "un(e) ami(e) (friend)",
        "un(e) copain/copine (amical(e)) (friend, informal)",
        "mon copain / ma copine (amoureux/amoureuse) (boyfriend/girlfriend)",
        "mon mari / ma femme (husband / wife)",
        "un(e) partenaire (partner)",
        "se marier (to get married)",
        "divorcer (to divorce)",
        "se ressembler (to look alike)",
        "s'entendre bien avec (to get on well with)",
      ],
    },
    {
      type: "note",
      text: "Attention : « copain/copine » peut être amical (friend) ou amoureux (boyfriend/girlfriend) selon le contexte. On dit « mon copain » pour le petit ami.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer les membres de la famille",
      instruction: "Reliez chaque membre de la famille à sa définition.",
      pairs: [
        { left: "un oncle", right: "le frère du père ou de la mère" },
        { left: "une nièce", right: "la fille du frère ou de la sœur" },
        { left: "un cousin", right: "l'enfant de l'oncle ou de la tante" },
        { left: "une grand-mère", right: "la mère du père ou de la mère" },
        { left: "un gendre", right: "le mari de la fille" },
        { left: "une belle-sœur", right: "la femme du frère" },
      ],
    },
    {
      type: "fill",
      title: "Décrire une personne",
      instruction: "Complétez les phrases avec le bon adjectif.",
      items: [
        { sentence: "Il a les cheveux ___ et les yeux verts.", hint: "roux", answer: "roux" },
        { sentence: "Elle est très ___ : elle parle tout le temps !", hint: "bavarde", answer: "bavarde" },
        { sentence: "Mon frère est ___ : il fait tout pour aider les autres.", hint: "généreux", answer: "généreux" },
        { sentence: "Elle est ___ et n'aime pas parler en public.", hint: "timide", answer: "timide" },
        { sentence: "Il est ___ : toujours sérieux, jamais de blague.", hint: "sérieux", answer: "sérieux" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon mot",
      instruction: "Choisissez le mot correct pour compléter la phrase.",
      items: [
        { sentence: "La sœur de mon père est ma ___.", choices: ["tante", "cousine", "nièce", "belle-sœur"], correctIdx: 0 },
        { sentence: "Il a les cheveux ___ et frisés.", choices: ["châtain", "bleus", "verts", "grands"], correctIdx: 0 },
        { sentence: "Elle est très ___ : elle aide toujours les autres.", choices: ["généreuse", "égoïste", "timide", "impatiente"], correctIdx: 0 },
        { sentence: "Ils ___ beaucoup : même couleur de cheveux, même taille.", choices: ["se ressemblent", "se marient", "s'entendent", "se parlent"], correctIdx: 0 },
      ],
    },
  ],
};

const a2VocL07: VocabLesson = {
  slug: "a2-voc-l07",
  code: "V.19",
  level: "A2",
  title: "Les médias et Internet",
  theory: [
    { type: "heading", text: "Internet et les réseaux sociaux" },
    {
      type: "vocab",
      title: "Vocabulaire numérique",
      items: [
        "un site internet / un site web",
        "sur Internet / en ligne (online)",
        "un blog",
        "les réseaux sociaux (social networks)",
        "poster un commentaire (to post a comment)",
        "un like / liker",
        "un abonné / s'abonner (subscriber / to subscribe)",
        "un lien (link)",
        "un mot de passe (password)",
        "un compte (account)",
        "une appli / application (app)",
      ],
    },
    {
      type: "heading", text: "La presse",
    },
    {
      type: "vocab",
      title: "Vocabulaire de la presse écrite",
      items: [
        "un journal (newspaper)",
        "un magazine",
        "un article",
        "une actualité / les actualités (news)",
        "les informations / les infos (the news)",
        "un titre (headline)",
        "un reporter / un journaliste",
        "un éditorial (editorial)",
      ],
    },
    {
      type: "heading", text: "La télévision et la radio",
    },
    {
      type: "vocab",
      title: "TV et radio",
      items: [
        "une chaîne (TV channel)",
        "un programme / une émission (programme)",
        "regarder les infos / la télé (to watch the news / TV)",
        "écouter la radio (to listen to the radio)",
        "un documentaire",
        "une série (TV series)",
        "un film",
        "une publicité / une pub (advert)",
        "zapper (to channel-hop)",
      ],
    },
    {
      type: "rule",
      text: "Verbes numériques courants.",
      examples: [
        { correct: "Je télécharge de la musique sur Internet." },
        { correct: "Elle envoie un email à son collègue." },
        { correct: "On cherche des informations en ligne." },
        { correct: "Il partage des photos sur les réseaux sociaux." },
        { correct: "Tu as trouvé l'adresse sur Google Maps ?" },
      ],
    },
    {
      type: "vocab",
      title: "Verbes numériques",
      items: [
        "télécharger (to download)",
        "envoyer (un email / un message) (to send)",
        "chercher (to search)",
        "trouver (to find)",
        "partager (to share)",
        "commenter (to comment)",
        "supprimer (to delete)",
        "se connecter (to log in)",
        "se déconnecter (to log out)",
      ],
    },
    {
      type: "note",
      text: "TF1, France 2, France 3, M6 et Arte sont les principales chaînes de télévision françaises.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le mot et sa définition",
      instruction: "Reliez chaque terme des médias à sa définition.",
      pairs: [
        { left: "un abonné", right: "quelqu'un qui suit un compte" },
        { left: "zapper", right: "changer de chaîne souvent" },
        { left: "un titre", right: "l'en-tête d'un article" },
        { left: "télécharger", right: "copier un fichier depuis Internet" },
        { left: "une chaîne", right: "une station de télévision" },
        { left: "se connecter", right: "accéder à son compte" },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases",
      instruction: "Complétez chaque phrase avec le bon mot ou verbe.",
      items: [
        { sentence: "Je lis les ___ tous les matins sur mon téléphone.", hint: "infos", answer: "infos" },
        { sentence: "Elle ___ une photo de ses vacances sur Instagram.", hint: "partage", answer: "partage" },
        { sentence: "Il regarde un ___ sur la nature sur France 5.", hint: "documentaire", answer: "documentaire" },
        { sentence: "Tu peux m'envoyer le ___ de cet article ?", hint: "lien", answer: "lien" },
        { sentence: "J'ai oublié mon ___ pour accéder à mon compte.", hint: "mot de passe", answer: "mot de passe" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon verbe numérique",
      instruction: "Choisissez le verbe correct pour compléter la phrase.",
      items: [
        { sentence: "Il ___ de la musique depuis Spotify.", choices: ["télécharge", "envoie", "cherche", "supprime"], correctIdx: 0 },
        { sentence: "Elle ___ un email à son professeur pour s'excuser.", choices: ["envoie", "télécharge", "partage", "commente"], correctIdx: 0 },
        { sentence: "Nous ___ des informations sur cette ville avant notre voyage.", choices: ["cherchons", "zapons", "téléchargeons", "supprimons"], correctIdx: 0 },
        { sentence: "Pour voir les nouvelles de ses amis, il ___ sur Facebook.", choices: ["se connecte", "se déconnecte", "télécharge", "supprime"], correctIdx: 0 },
      ],
    },
  ],
};

const a2VocL08: VocabLesson = {
  slug: "a2-voc-l08",
  code: "V.20",
  level: "A2",
  title: "La ville et les services",
  theory: [
    { type: "heading", text: "Les services publics" },
    {
      type: "vocab",
      title: "Services et administrations",
      items: [
        "une mairie (town hall)",
        "une préfecture (prefecture)",
        "La Poste (post office)",
        "une banque (bank)",
        "une bibliothèque (library)",
        "un hôpital",
        "une école / un lycée / une université",
        "un commissariat (police station)",
        "un tribunal (court)",
      ],
    },
    {
      type: "heading", text: "Les commerces",
    },
    {
      type: "vocab",
      title: "Magasins et boutiques",
      items: [
        "une boulangerie (bakery)",
        "une pharmacie (pharmacy)",
        "un supermarché / une grande surface",
        "un magasin de vêtements (clothes shop)",
        "une librairie (bookshop)",
        "une épicerie (grocery store)",
        "un marché (market)",
        "un coiffeur / une coiffeuse (hairdresser)",
        "une banque (bank)",
      ],
    },
    {
      type: "heading", text: "S'orienter dans la ville",
    },
    {
      type: "rule",
      text: "Donner et comprendre des directions.",
      examples: [
        { correct: "Tournez à droite au feu rouge." },
        { correct: "Allez tout droit jusqu'au carrefour." },
        { correct: "Traversez la rue et prenez la deuxième rue à gauche." },
        { correct: "C'est à 5 minutes à pied." },
        { correct: "Prenez le bus numéro 12, descendez à l'arrêt « Mairie »." },
      ],
    },
    {
      type: "vocab",
      title: "Vocabulaire de l'orientation",
      items: [
        "tourner à droite / à gauche (to turn right / left)",
        "aller tout droit (to go straight on)",
        "traverser (to cross)",
        "continuer (to continue)",
        "prendre la rue... (to take ... street)",
        "au carrefour (at the crossroads)",
        "au coin de (at the corner of)",
        "au feu rouge (at the traffic lights)",
        "à l'arrêt de bus (at the bus stop)",
        "à 5 minutes à pied (5 minutes' walk away)",
      ],
    },
    {
      type: "heading", text: "Les pronoms Y et EN",
    },
    {
      type: "rule",
      text: "Y remplace un lieu ou un complément introduit par À. EN remplace un complément introduit par DE.",
      examples: [
        { correct: "Tu vas à la banque ? — Oui, j'y vais. (y = à la banque)" },
        { correct: "Il y a une pharmacie ici ? (il y a = there is/are)" },
        { correct: "Tu viens de la mairie ? — Oui, j'en viens. (en = de la mairie)" },
        { correct: "Tu as besoin d'aide ? — Oui, j'en ai besoin. (en = d'aide)" },
      ],
    },
    {
      type: "note",
      text: "Attention : librairie = bookshop (NOT library). Bibliothèque = library.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le lieu et le service",
      instruction: "Reliez chaque lieu à ce qu'on y fait.",
      pairs: [
        { left: "La Poste", right: "envoyer des lettres et des colis" },
        { left: "une mairie", right: "déclarer une naissance, se marier" },
        { left: "une pharmacie", right: "acheter des médicaments" },
        { left: "une bibliothèque", right: "emprunter des livres" },
        { left: "une boulangerie", right: "acheter du pain frais" },
        { left: "un commissariat", right: "signaler une perte ou un vol" },
      ],
    },
    {
      type: "fill",
      title: "S'orienter dans la ville",
      instruction: "Complétez les phrases avec le bon mot ou expression.",
      items: [
        { sentence: "Allez tout ___ et tournez à gauche.", hint: "droit", answer: "droit" },
        { sentence: "La pharmacie est au ___ de la rue et du boulevard.", hint: "coin", answer: "coin" },
        { sentence: "___ la rue et continuez jusqu'à la mairie.", hint: "Traversez", answer: "Traversez" },
        { sentence: "La bibliothèque est ___ 10 minutes à pied d'ici.", hint: "à", answer: "à" },
        { sentence: "Tu vas à la poste ? — Oui, j'___ vais maintenant.", hint: "y", answer: "y" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon pronom ou le bon lieu",
      instruction: "Choisissez le mot correct pour compléter la phrase.",
      items: [
        { sentence: "Pour acheter un roman, je vais à ___.", choices: ["la librairie", "la bibliothèque", "la pharmacie", "la mairie"], correctIdx: 0 },
        { sentence: "Il revient de la banque : il ___ vient.", choices: ["en", "y", "le", "la"], correctIdx: 0 },
        { sentence: "Pour aller à la gare, tournez à droite au ___ rouge.", choices: ["feu", "coin", "carrefour", "arrêt"], correctIdx: 0 },
        { sentence: "Vous allez à la mairie ? — Oui, nous ___ allons.", choices: ["y", "en", "le", "lui"], correctIdx: 0 },
      ],
    },
  ],
};

// ── A0 — Les nationalités ─────────────────────────────────────────────────────

const a0VocNationalites: VocabLesson = {
  slug: "a0-voc-nationalites",
  code: "V.0",
  level: "A1",
  title: "Les nationalités",
  theory: [
    {
      type: "heading",
      text: "Les pays et les nationalités",
    },
    {
      type: "grid",
      headers: ["Pays", "Masculin", "Féminin"],
      rows: [
        ["🇫🇷 la France", "français", "française"],
        ["🇩🇪 l'Allemagne", "allemand", "allemande"],
        ["🇮🇹 l'Italie", "italien", "italienne"],
        ["🇪🇸 l'Espagne", "espagnol", "espagnole"],
        ["🇵🇹 le Portugal", "portugais", "portugaise"],
        ["🇨🇳 la Chine", "chinois", "chinoise"],
        ["🇯🇵 le Japon", "japonais", "japonaise"],
        ["🇧🇷 le Brésil", "brésilien", "brésilienne"],
        ["🇲🇦 le Maroc", "marocain", "marocaine"],
        ["🇻🇳 le Vietnam", "vietnamien", "vietnamienne"],
        ["🇨🇭 la Suisse", "suisse", "suisse"],
        ["🇧🇪 la Belgique", "belge", "belge"],
      ],
    },
    {
      type: "note",
      text: "Suisse, belge et russe sont identiques au masculin et au féminin.",
    },
    {
      type: "heading",
      text: "Le verbe VENIR au présent",
      sub: true,
    },
    {
      type: "grid",
      headers: ["Pronom", "Venir"],
      pronounGrid: true,
      rows: [
        ["je", "viens"],
        ["tu", "viens"],
        ["il / elle", "vient"],
        ["nous", "venons"],
        ["vous", "venez"],
        ["ils / elles", "viennent"],
      ],
    },
    {
      type: "rule",
      text: "Je viens DE + pays féminin → Je viens de France\nJe viens DU + pays masculin → Je viens du Maroc\nJe viens DES + pays pluriel → Je viens des États-Unis\nJe viens D' + voyelle → Je viens d'Iran",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Exercice 1",
      instruction: "Associez chaque pays à la nationalité masculine.",
      pairs: [
        { left: "la France", right: "français" },
        { left: "l'Allemagne", right: "allemand" },
        { left: "l'Italie", right: "italien" },
        { left: "le Japon", right: "japonais" },
        { left: "le Maroc", right: "marocain" },
        { left: "le Brésil", right: "brésilien" },
      ],
    },
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Complétez les phrases avec la forme correcte du verbe venir et la nationalité.",
      items: [
        { sentence: "Je ___ d'Espagne. Je suis ___.", hint: "viens / espagnol(e)", answer: "viens / espagnol(e)" },
        { sentence: "Elle ___ de Chine. Elle est ___.", hint: "vient / chinoise", answer: "vient / chinoise" },
        { sentence: "Nous ___ du Portugal. Nous sommes ___.", hint: "venons / portugais", answer: "venons / portugais" },
        { sentence: "Ils ___ du Vietnam. Ils sont ___.", hint: "viennent / vietnamiens", answer: "viennent / vietnamiens" },
        { sentence: "Tu ___ d'Italie. Tu es ___.", hint: "viens / italien(ne)", answer: "viens / italien(ne)" },
        { sentence: "Vous ___ du Maroc. Vous êtes ___.", hint: "venez / marocain(s)", answer: "venez / marocain(s)" },
      ],
    },
    {
      type: "qcm",
      title: "Exercice 3 — Vrai ou Faux ?",
      instruction:
        "Lisez l'affiche et cochez la bonne réponse.\n\n" +
        "┌─────────────────────────────────────────────┐\n" +
        "│  Bienvenue au CERCLE des CULTURES           │\n" +
        "│                                             │\n" +
        "│  Vous êtes lycéen, étudiant, chef... ?      │\n" +
        "│  Vous avez 18, 25, 40, 65 ans ?             │\n" +
        "│  Vous êtes russe, marocain, japonais... ?   │\n" +
        "│                                             │\n" +
        "│  Venez parler russe, arabe, japonais        │\n" +
        "│  ou français autour d'un thé !              │\n" +
        "│                                             │\n" +
        "│  Informations : 06 77 88 99 00              │\n" +
        "└─────────────────────────────────────────────┘",
      items: [
        { sentence: "Tout le monde est le bienvenu.", choices: ["Vrai", "Faux"], correctIdx: 0 },
        { sentence: "Une personne de 25 ans est la bienvenue.", choices: ["Vrai", "Faux"], correctIdx: 0 },
        { sentence: "C'est une invitation pour un cours de russe.", choices: ["Vrai", "Faux"], correctIdx: 1 },
        { sentence: "Vous ne pouvez pas parler français.", choices: ["Vrai", "Faux"], correctIdx: 1 },
        { sentence: "Pour les informations, il faut téléphoner.", choices: ["Vrai", "Faux"], correctIdx: 0 },
      ],
    },
  ],
};

// ── V.1 — Se présenter ────────────────────────────────────────────────────────

const a1VocSePresenter: VocabLesson = {
  slug: "a0-se-presenter",
  code: "V.1",
  level: "A1",
  title: "Se présenter",
  theory: [
    { type: "heading", text: "Mon identité" },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Comment vous appelez-vous ?", "Je m'appelle Phuoc VAN"],
        ["Quel est votre prénom ?", "Mon prénom est Phuoc"],
        ["Quel est votre nom de famille ?", "Mon nom de famille est VAN"],
      ],
    },
    {
      type: "highlight",
      label: "Attention",
      items: [
        "En français, le NOM DE FAMILLE s'écrit souvent en majuscules.",
        "Prénom : Phuoc → NOM : VAN",
      ],
    },
    { type: "heading", text: "Mon âge" },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Quel âge avez-vous ?", "J'ai 37 ans"],
        ["Quelle est votre date de naissance ?", "Je suis né le 8 octobre 1987"],
      ],
    },
    { type: "note", text: "On dit J'AI … ANS (avec le verbe avoir). On ne dit pas « J'ai 37 années »." },
    { type: "heading", text: "Ma nationalité" },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Quelle est votre nationalité ?", "Je suis vietnamien / vietnamienne"],
        ["Quelle langue parlez-vous ?", "Je parle le vietnamien"],
        ["De quel pays venez-vous ?", "Je viens du Vietnam"],
      ],
    },
    { type: "heading", text: "Mon domicile" },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Où habitez-vous ?", "J'habite à Aproz"],
        ["Quelle est votre adresse ?", "L'adresse est Chemin du Carolet 14"],
        ["Quel est votre code postal ?", "Le code postal est 1994"],
      ],
    },
    { type: "heading", text: "Ma profession" },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [
        ["Quel est votre métier ?", "Je suis enseignant / enseignante"],
        ["Où travaillez-vous ?", "Je travaille à l'école"],
      ],
    },
    { type: "heading", text: "Mes loisirs" },
    {
      type: "grid",
      headers: ["Question", "Réponse"],
      rows: [["Qu'est-ce que vous aimez faire ?", "J'aime dessiner"]],
    },
    { type: "heading", text: "Ma famille" },
    {
      type: "grid",
      headers: ["Lien de parenté", "Phrase complète"],
      rows: [
        ["Ma femme", "Ma femme s'appelle Thuy"],
        ["Ma fille", "Ma fille s'appelle Alicia"],
        ["Mon fils", "Mon fils s'appelle Eliott"],
      ],
    },
    {
      type: "highlight",
      label: "Astuce",
      items: [
        "Utilisez VOUS avec un adulte inconnu, un professeur ou dans une situation formelle.",
        "Utilisez TU avec un ami, un enfant ou un membre de la famille.",
      ],
    },
  ],
  exercises: [
    {
      type: "write",
      title: "Exercice 1",
      instruction: "Complétez les phrases avec vos informations personnelles.",
      prompts: [
        "Bonjour, je m'appelle …",
        "Je suis … (nationalité).",
        "J'ai … ans.",
        "Je suis né(e) le … (date de naissance).",
        "Je viens de … (pays).",
        "Je parle le …",
        "J'habite à … (ville).",
      ],
    },
    {
      type: "write",
      title: "Exercice 2 — Formulaire administratif",
      instruction: "Remplissez le formulaire avec vos informations.",
      prompts: ["Nom :", "Prénom :", "Âge :", "Adresse :", "Fait à : …                     Le : …"],
    },
    {
      type: "write",
      title: "Exercice 3 — Ma fiche d'identité",
      instruction: "Complétez votre fiche d'identité complète.",
      prompts: ["Nom :", "Prénom :", "Nationalité :", "Pays d'origine :", "Date de naissance :", "État civil :", "Profession :", "Loisirs :"],
    },
    {
      type: "match",
      title: "Exercice 4",
      instruction: "Reliez les débuts de phrases à leur fin correcte.",
      pairs: [
        { left: "Comment ça …", right: "… va ?" },
        { left: "Enchanté de …", right: "… faire ta connaissance." },
        { left: "Je viens …", right: "… de France." },
        { left: "Salut, je suis …", right: "… français." },
      ],
    },
    {
      type: "write",
      title: "Exercice 5 — Dialogue",
      instruction: "Complétez le dialogue en répondant à la place de Karim.",
      prompts: [
        "Fatima : Salut, comment tu t'appelles ?\nKarim : …",
        "Fatima : Et toi, tu es d'où ?\nKarim : …",
        "Fatima : Tu as quel âge ?\nKarim : …",
      ],
    },
    {
      type: "fill",
      title: "Exercice 6 — Dialogue formel",
      instruction: "Complétez le dialogue entre un élève et un professeur.",
      items: [
        { sentence: "Élève : Bonjour, comment ___ -vous ?", hint: "allez", answer: "allez" },
        { sentence: "Professeur : Très bien, merci. Et ___ ?", hint: "vous", answer: "vous" },
        { sentence: "Élève : Je ___ bien, merci.", hint: "vais", answer: "vais" },
      ],
    },
    {
      type: "qcm",
      title: "Exercice 7",
      instruction: "Choisissez le bon mot pour compléter chaque phrase.",
      items: [
        { sentence: "Salut ! ___ va ?", choices: ["Ça", "Il", "Comment"], correctIdx: 0 },
        { sentence: "Comment ___ vous appelez-vous ?", choices: ["tu", "vous", "elle"], correctIdx: 1 },
        { sentence: "Enchanté de ___ connaître.", choices: ["ton", "te", "ta"], correctIdx: 1 },
      ],
    },
    {
      type: "write",
      title: "Exercice 8 — Questions personnelles",
      instruction: "Répondez aux questions avec une phrase complète.",
      prompts: ["Comment tu t'appelles ?", "D'où viens-tu ?", "Quel âge as-tu ?"],
    },
    {
      type: "write",
      title: "Exercice 9 — Grand formulaire",
      instruction: "Remplissez ce formulaire complet avec vos informations personnelles.",
      prompts: ["Nom de famille :", "Prénom :", "Âge :", "Nationalité :", "Adresse :", "Code postal :", "Téléphone :", "Courriel :"],
    },
    {
      type: "write",
      title: "Exercice 10 — Corrigez les erreurs",
      instruction: "Ces phrases contiennent des erreurs. Récrivez-les correctement.",
      prompts: [
        "Salut, j'habite de Sion. → …",
        "Je t'appelle VAN Phuoc. → …",
        "Enchanté connaître de te. → …",
        "Aujourd'hui, j'ai 19 âge. → …",
        "Je parle la français en classe. → …",
      ],
    },
    {
      type: "write",
      title: "Exercice 11 — Compréhension écrite",
      instruction:
        "Lisez le texte, puis répondez aux questions.\n\n" +
        "« Bonjour, je m'appelle Amina. J'ai 24 ans et je viens d'Iran. " +
        "Je parle persan et un peu de français. J'ai deux sœurs et un frère. " +
        "J'aime lire des livres et cuisiner. Je suis professeur d'histoire. " +
        "J'adore le chocolat et je n'aime pas le café. »",
      prompts: [
        "Elle vient de quel pays ?",
        "Elle a combien de sœurs ?",
        "Quel est son métier ?",
        "Qu'est-ce qu'elle n'aime pas boire ?",
      ],
    },
    {
      type: "fill",
      title: "Exercice 12 — Complétez avec les mots",
      instruction: "Complétez les phrases avec les mots : 25 ans · léo · mon numéro · quel âge · nationalité · m'appelle",
      items: [
        { sentence: "Vous avez ___ ?", hint: "quel âge", answer: "quel âge" },
        { sentence: "J'ai ___ .", hint: "25 ans", answer: "25 ans" },
        { sentence: "Enchanté, moi c'est ___ .", hint: "léo", answer: "léo" },
        { sentence: "Quelle est ta ___ ?", hint: "nationalité", answer: "nationalité" },
        { sentence: "Je ___ Nicolas.", hint: "m'appelle", answer: "m'appelle" },
        { sentence: "___ , c'est le 07 14 54 19 30.", hint: "Mon numéro", answer: "Mon numéro" },
      ],
    },
    {
      type: "write",
      title: "Exercice 13 — Dictée",
      instruction: "Écoutez votre professeur et écrivez les mots que vous entendez.",
      prompts: ["Mot 1 :", "Mot 2 :", "Mot 3 :", "Mot 4 :", "Mot 5 :"],
    },
    {
      type: "write",
      title: "Exercice 14 — Compréhension écrite",
      instruction:
        "Lisez le texte, puis répondez aux questions.\n\n" +
        "« Salut ! Je suis Farid. Je viens de Kaboul, une grande ville en Afghanistan. " +
        "J'ai 30 ans. Dans ma famille, il y a ma mère, mon père, trois frères et moi. " +
        "La musique traditionnelle afghane est ma préférée. »",
      prompts: [
        "Quel est le prénom du garçon ?",
        "Il y a combien d'enfants dans sa famille ?",
        "Il vient de quel pays ?",
        "Quel genre de musique il aime écouter ?",
      ],
    },
    {
      type: "write",
      title: "Exercice 15 — Fiche d'accueil",
      instruction:
        "Lisez la fiche et répondez aux questions.\n\n" +
        "━━━━ FICHE D'ACCUEIL ET D'ORIENTATION ━━━━\n" +
        "☐ Homme   ☑ Femme\n" +
        "Nom : BENALI         Prénom : Nadia\n" +
        "Adresse : 7, avenue des Platanes\n" +
        "          34000 Montpellier\n" +
        "Téléphone : 07 23 45 67 89\n" +
        "Âge : 31 ans\n" +
        "Nationalité : algérienne\n" +
        "Année d'arrivée en France : 2019\n" +
        "Profession : comptable\n" +
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      prompts: [
        "La personne est un homme ou une femme ?",
        "Quel est son prénom ?",
        "La personne a quel âge ?",
        "Quelle est sa nationalité ?",
        "Quelle est sa profession ?",
      ],
    },
    {
      type: "write",
      title: "Exercice 16 — Présentez une personne",
      instruction:
        "Exemple — Thomas Beaumont :\n" +
        "• Il s'appelle Thomas Beaumont.\n" +
        "• Il est suisse.\n" +
        "• Il est pompier.\n" +
        "• Il a 29 ans.\n\n" +
        "Présentez maintenant ces personnes :\n\n" +
        "1. Leila Nakbi — algérienne — dentiste — 34 ans\n" +
        "2. Marco Fontana — italien — cuisinier — 41 ans\n" +
        "3. Priya Singh — indienne — étudiante — 20 ans\n" +
        "4. Une personne de votre choix\n" +
        "5. Présentez-vous",
      prompts: ["Leila Nakbi :", "Marco Fontana :", "Priya Singh :", "Personne de mon choix :", "Moi :"],
    },
  ],
};

// ── V.2 — La famille ──────────────────────────────────────────────────────────

const a1VocFamille: VocabLesson = {
  slug: "a1-voc-famille",
  code: "V.2",
  level: "A1",
  title: "La famille",
  theory: [
    { type: "heading", text: "La famille" },
    {
      type: "grid",
      headers: ["Féminin", "Masculin"],
      equalCols: true,
      rows: [
        ["Une femme", "Un mari"],
        ["Une sœur", "Un frère"],
        ["Des parents", "Des enfants"],
        ["Une mère", "Une fille"],
        ["Un père", "Un fils"],
        ["Des grands-parents", "Des petits-enfants"],
      ],
    },
    { type: "heading", text: "La famille élargie", sub: true },
    {
      type: "grid",
      headers: ["Féminin", "Masculin"],
      equalCols: true,
      rows: [
        ["Ma tante", "Mon oncle"],
        ["Ma cousine", "Mon cousin"],
        ["Ma nièce", "Mon neveu"],
      ],
    },
    {
      type: "plain_list",
      noBulletItems: [0, 1, 2],
      items: [
        "Mon père et ma mère sont mes parents.",
        "Mon cousin, c'est le fils de mon oncle et de ma tante.",
        "Ma cousine, c'est la fille de mon oncle et de ma tante.",
      ],
    },
    { type: "heading", text: "La situation familiale", sub: true },
    {
      type: "grid",
      headers: ["Situation", "Situation"],
      equalCols: true,
      rows: [
        ["Célibataire", "En couple"],
        ["Marié(e)", "Pacsé(e)"],
        ["Divorcé(e)", "Séparé(e)"],
        ["Veuf", "Veuve"],
      ],
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Exercice 1",
      instruction: "Associez les termes.",
      pairs: [
        { left: "Des parents", right: "Des enfants" },
        { left: "Une mère", right: "Un père" },
        { left: "Un frère", right: "Une sœur" },
        { left: "Des grands-parents", right: "Des petits-enfants" },
        { left: "Une fille", right: "Un fils" },
        { left: "Une femme", right: "Un mari" },
      ],
    },
    {
      type: "qcm",
      title: "Exercice 2",
      instruction: "Entourez la forme correcte.",
      inlineChoices: true,
      items: [
        { sentence: "[ Ma / Mon ] sœur est mariée.", choices: ["Ma", "Mon"], correctIdx: 0 },
        { sentence: "[ Ton / Tes ] parents sont divorcés.", choices: ["Ton", "Tes"], correctIdx: 1 },
        { sentence: "[ Ses / Sa ] grands-parents sont âgés.", choices: ["Ses", "Sa"], correctIdx: 0 },
        { sentence: "[ Mon / Mes ] père est veuf.", choices: ["Mon", "Mes"], correctIdx: 0 },
        { sentence: "[ Son / Sa ] fille est brune.", choices: ["Son", "Sa"], correctIdx: 1 },
        { sentence: "[ Notre / Leurs ] enfants sont mariés.", choices: ["Notre", "Leurs"], correctIdx: 1 },
        { sentence: "[ Ma / Mon ] cousine habite à Genève.", choices: ["Ma", "Mon"], correctIdx: 0 },
        { sentence: "[ Ton / Ta ] sœur est très gentille.", choices: ["Ton", "Ta"], correctIdx: 1 },
      ],
    },
    {
      type: "fill",
      title: "Exercice 3",
      instruction: "Remplacez les mots entre crochets par l'adjectif possessif.",
      items: [
        { sentence: "C'est [à vous] ___ mari ?", hint: "votre", answer: "votre" },
        { sentence: "C'est [à elle] ___ fils ?", hint: "son", answer: "son" },
        { sentence: "C'est [à eux] ___ père ?", hint: "leur", answer: "leur" },
        { sentence: "C'est [à toi] ___ amie ?", hint: "ton", answer: "ton" },
        { sentence: "Ce sont [à nous] ___ enfants ?", hint: "nos", answer: "nos" },
        { sentence: "C'est [à lui] ___ fille ?", hint: "sa", answer: "sa" },
        { sentence: "C'est [à elles] ___ mère ?", hint: "leur", answer: "leur" },
      ],
    },
    {
      type: "qcm",
      title: "Exercice 4",
      instruction:
        "Lisez et soulignez la bonne réponse.\n\n" +
        "NOTRE PETITE FILLE JACKIE est née le 9 juillet à 8h20\n" +
        "Son grand frère Sébastien, sa grande sœur Marion,\n" +
        "ses parents Olivier et Natasha,\n" +
        "ses grands-parents Marc et Catherine",
      inlineChoices: true,
      items: [
        { sentence: "Jackie est [ la fille / le fils ] d'Olivier et Natasha.", choices: ["la fille", "le fils"], correctIdx: 0 },
        { sentence: "Jackie est [ le frère / la sœur ] de Sébastien et Marion.", choices: ["le frère", "la sœur"], correctIdx: 1 },
        { sentence: "Jackie a [ une sœur / deux sœurs ].", choices: ["une sœur", "deux sœurs"], correctIdx: 0 },
        { sentence: "Marc et Catherine sont les [ parents / grands-parents ].", choices: ["parents", "grands-parents"], correctIdx: 1 },
        { sentence: "Marion a [ un frère / un frère et une sœur ].", choices: ["un frère", "un frère et une sœur"], correctIdx: 1 },
        { sentence: "Olivier et Natasha ont [ deux enfants / trois enfants ].", choices: ["deux enfants", "trois enfants"], correctIdx: 1 },
      ],
    },
    {
      type: "write",
      title: "Exercice 5",
      instruction: "Écrivez cinq phrases sur votre famille.",
      prompts: ["1.", "2.", "3.", "4.", "5."],
    },
    {
      type: "fill",
      title: "Exercice 6",
      instruction:
        "Complétez les phrases.\n(Arbre généalogique : Paul + Françoise → Léa ; Léa + Daniel → Jules + Elise)",
      items: [
        { sentence: "Paul est le ___ de Léa.", hint: "père", answer: "père" },
        { sentence: "Daniel est le ___ de Jules.", hint: "père", answer: "père" },
        { sentence: "Jules est le ___ de Léa.", hint: "fils", answer: "fils" },
        { sentence: "Elise est la ___ de Jules.", hint: "sœur", answer: "sœur" },
        { sentence: "Paul et Françoise sont les ___ de Léa.", hint: "parents", answer: "parents" },
      ],
    },
    {
      type: "qcm",
      title: "Exercice 7",
      instruction: "Indiquez si le mot est Singulier masculin (SM), Singulier féminin (SF), Pluriel masculin (PM) ou Pluriel féminin (PF).",
      items: [
        { sentence: "nationalité", choices: ["SM", "SF", "PM", "PF"], correctIdx: 1 },
        { sentence: "parents", choices: ["SM", "SF", "PM", "PF"], correctIdx: 2 },
        { sentence: "fils", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "oncle", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "langues", choices: ["SM", "SF", "PM", "PF"], correctIdx: 3 },
        { sentence: "enfant", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "pays", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "filles", choices: ["SM", "SF", "PM", "PF"], correctIdx: 3 },
        { sentence: "cousine", choices: ["SM", "SF", "PM", "PF"], correctIdx: 1 },
        { sentence: "tante", choices: ["SM", "SF", "PM", "PF"], correctIdx: 1 },
      ],
    },
    {
      type: "write",
      title: "Exercice 8 — Lisez le texte",
      instruction:
        "Lisez le texte, puis répondez aux questions.\n\n" +
        "« Je vais vous parler de ma famille. Mes parents s'appellent Muzghan et Noorullah. " +
        "J'ai un grand frère et une petite sœur. Mon frère s'appelle Ali, et ma sœur s'appelle Amina. " +
        "J'ai deux cousins. Ils s'appellent Karim et Sara. Nous jouons souvent ensemble le week-end. " +
        "La fille de Sara s'appelle Mary. " +
        "Mon frère Ali a un fils et une fille. Mon neveu s'appelle Omar et ma nièce s'appelle Leila. " +
        "La fille d'Amina s'appelle Jamila. »",
      prompts: [
        "Comment s'appellent les parents ?",
        "Combien de frères et sœurs y a-t-il ?",
        "Comment s'appellent les cousins ?",
        "Qui est Omar ?",
        "Qui est Jamila ?",
      ],
    },
    {
      type: "fill",
      title: "Exercice 9",
      instruction: "Remplacez les mots entre crochets par l'adjectif possessif.",
      items: [
        { sentence: "Ce n'est pas [à moi] ___ mère ?", hint: "ma", answer: "ma" },
        { sentence: "C'est [à toi] ___ mari ?", hint: "ton", answer: "ton" },
        { sentence: "C'est [à elle] ___ sœur ?", hint: "sa", answer: "sa" },
        { sentence: "C'est [à lui] ___ cousin ?", hint: "son", answer: "son" },
        { sentence: "Ce ne sont pas [à nous] ___ parents ?", hint: "nos", answer: "nos" },
        { sentence: "Ce sont [à eux] ___ enfants ?", hint: "leurs", answer: "leurs" },
        { sentence: "C'est [à vous] ___ fille ?", hint: "votre", answer: "votre" },
        { sentence: "C'est [à elles] ___ grand-mère ?", hint: "leur", answer: "leur" },
      ],
    },
    {
      type: "match",
      title: "Exercice 10",
      instruction: "Reliez les termes ensemble.",
      pairs: [
        { left: "C'est", right: "Ernest" },
        { left: "C'est", right: "mon père" },
        { left: "Ce sont", right: "ses parents" },
        { left: "Ce sont", right: "des écrivains français" },
        { left: "Il est", right: "professeur" },
        { left: "Il est", right: "un artiste" },
        { left: "Elle est", right: "chanteur" },
        { left: "Ils sont", right: "poètes" },
        { left: "Ils sont", right: "Monsieur André" },
        { left: "Elles sont", right: "françaises" },
      ],
    },
    {
      type: "classify",
      title: "Exercice 11",
      instruction: "Classez les mots dans le tableau. [ Femme – divorcé – mari – veuf – célibataire – enfant ]",
      categories: ["Membre de la famille", "Situation familiale"],
      items: [
        { word: "femme", categoryIdx: 0 },
        { word: "mari", categoryIdx: 0 },
        { word: "enfant", categoryIdx: 0 },
        { word: "divorcé", categoryIdx: 1 },
        { word: "veuf", categoryIdx: 1 },
        { word: "célibataire", categoryIdx: 1 },
      ],
    },
    {
      type: "write",
      title: "Exercice 12",
      instruction: "Écrivez 4 phrases sur la situation de votre famille.",
      prompts: ["1.", "2.", "3.", "4."],
    },
  ],
};

// ── V.3 — La description physique ────────────────────────────────────────────

const a1VocDescription: VocabLesson = {
  slug: "a1-voc-description",
  code: "V.3",
  level: "A1",
  title: "La description",
  theory: [
    { type: "heading", text: "La description physique" },
    {
      type: "grid",
      headers: ["Vocabulaire", "Vocabulaire", "Vocabulaire"],
      rows: [
        ["Grand(e)", "Petit(e)", ""],
        ["Blond(e)", "Brun(e)", "Roux / Rousse"],
        ["Jeune", "Âgé(e)", ""],
      ],
    },
    { type: "heading", text: "Les cheveux", sub: true },
    {
      type: "grid",
      headers: ["Longueur", "Longueur", "Longueur"],
      rows: [
        ["Court(e)", "Mi-long(ue)", "Long(ue)"],
      ],
    },
    {
      type: "grid",
      headers: ["Forme", "Forme", "Forme"],
      rows: [
        ["Ondulé(e)", "Frisé(e)", "Raide"],
      ],
    },
    {
      type: "highlight",
      label: "Grammaire",
      items: [
        "Pour décrire une personne, il faut utiliser :",
        "le verbe « être » + adjectif au masculin ou au féminin",
        "Il est grand. → Elle est grande.",
        "Il est blond. → Elle est blonde.",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Exercice 1",
      instruction: "Indiquez si le mot est Singulier masculin (SM), Singulier féminin (SF), Pluriel masculin (PM) ou Pluriel féminin (PF).",
      items: [
        { sentence: "Rousses", choices: ["SM", "SF", "PM", "PF"], correctIdx: 3 },
        { sentence: "Âgé", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "jeunes", choices: ["SM", "SF", "PM", "PF"], correctIdx: 2 },
        { sentence: "Petite", choices: ["SM", "SF", "PM", "PF"], correctIdx: 1 },
        { sentence: "Brunes", choices: ["SM", "SF", "PM", "PF"], correctIdx: 3 },
        { sentence: "mari", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "marié", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "veufs", choices: ["SM", "SF", "PM", "PF"], correctIdx: 2 },
        { sentence: "célibataire", choices: ["SM", "SF", "PM", "PF"], correctIdx: 0 },
        { sentence: "Grands", choices: ["SM", "SF", "PM", "PF"], correctIdx: 2 },
      ],
    },
    {
      type: "write",
      title: "Exercice 2",
      instruction: "Complétez les phrases avec les adjectifs qui conviennent.",
      prompts: [
        "Il …",
        "Elles …",
        "Ils …",
        "Elle …",
        "Il …",
        "Elle …",
        "Ils …",
        "Il … / Elle …",
        "Il … / Elle …",
      ],
    },
    {
      type: "write",
      title: "Exercice 3",
      instruction:
        "Écrivez les phrases selon l'exemple. Utilisez les adjectifs possessifs.\n\n" +
        "Exemple : J'ai des cheveux longs. → Mes cheveux sont longs.",
      prompts: [
        "Elle a des cheveux bruns. →",
        "Tu as une longue robe. →",
        "Elles ont des yeux verts. →",
        "Vous avez une paire de chaussures neuves. →",
        "Nous avons un sac d'école très lourd. →",
        "J'ai des mains douces et fines. →",
        "Ils ont des vêtements élégants. →",
      ],
    },
    {
      type: "write",
      title: "Exercice 4",
      instruction:
        "Vous êtes en vacances avec la famille de Léa. Vous écrivez une carte postale à votre mère pour présenter sa famille. " +
        "Écrivez entre 30 et 40 mots.",
      prompts: ["Votre carte postale :"],
    },
    {
      type: "fill",
      title: "Exercice 5",
      instruction: "Complétez avec l'adjectif masculin ou féminin.",
      items: [
        { sentence: "Il est ___ / Elle est grosse.", hint: "gros", answer: "gros" },
        { sentence: "Il est beau / Elles sont ___.", hint: "belles", answer: "belles" },
        { sentence: "Il est grand / Elle est ___.", hint: "grande", answer: "grande" },
        { sentence: "Ils sont ___ / Elle est mince.", hint: "minces", answer: "minces" },
        { sentence: "Il est petit / Elles sont ___.", hint: "petites", answer: "petites" },
        { sentence: "Ils sont ___ / Elle est âgée.", hint: "âgés", answer: "âgés" },
        { sentence: "Il est ___ / Elle est jeune.", hint: "jeune", answer: "jeune" },
        { sentence: "Il est laid / Elles sont ___.", hint: "laides", answer: "laides" },
      ],
    },
    {
      type: "write",
      title: "Exercice 6",
      instruction:
        "Observez les personnages (Julie, Joan, Sophie, Jérémy, Nathan, Jodie, Marion, Alfred) et répondez aux questions.",
      prompts: [
        "Combien y a-t-il d'hommes et de femmes ?",
        "Qui a les cheveux longs ?",
        "Qui porte un chapeau ou une casquette ?",
        "Qui porte une barbe ?",
        "Qui est chauve ?",
      ],
    },
    {
      type: "match",
      title: "Exercice 7",
      instruction:
        "Associez les membres de la famille à leur numéro dans l'image.\n" +
        "(Image : 1 = Ma sœur, 2 = Ma mère, 4 = Mon père, 5 = Ma grand-mère, 6 = Mon grand-père, Moi = le garçon au centre)",
      pairs: [
        { left: "Mon frère", right: "bébé dans le landau" },
        { left: "Ma sœur", right: "1 — petite fille" },
        { left: "Ma mère", right: "2 — femme avec bébé" },
        { left: "Mon père", right: "4 — homme avec lunettes" },
        { left: "Ma grand-mère", right: "5 — dame âgée" },
        { left: "Mon grand-père", right: "6 — monsieur âgé" },
      ],
    },
    {
      type: "write",
      title: "Exercice 8",
      instruction: "Répondez aux questions avec une phrase complète.",
      prompts: [
        "Combien il y a de personnes dans ma famille ?",
        "Qui portent des lunettes ?",
        "Qui est le plus grand ?",
        "Qui est le plus petit ?",
      ],
    },
  ],
};

// ── V.4 — L'heure ────────────────────────────────────────────────────────────

const a1VocHeure: VocabLesson = {
  slug: "a1-voc-heure",
  code: "V.4",
  level: "A1",
  title: "L'heure",
  theory: [
    { type: "heading", text: "L'heure" },
    {
      type: "grid",
      headers: ["Heure officielle", "Heure informelle", "Expression clé"],
      boldFirstCol: true,
      rows: [
        ["8h00",  "huit heures (du matin)", "pile"],
        ["8h15",  "huit heures et quart",   "et quart"],
        ["8h30",  "huit heures et demie",   "et demie"],
        ["8h45",  "neuf heures moins le quart", "moins le quart"],
        ["12h00", "midi",   "–"],
        ["0h00",  "minuit", "–"],
      ],
    },
    {
      type: "clock_display",
      clocks: [
        { h: 8, m: 0,  label: "8h00 — pile" },
        { h: 8, m: 15, label: "8h15 — et quart" },
        { h: 8, m: 30, label: "8h30 — et demie" },
        { h: 8, m: 45, label: "8h45 — moins le quart" },
      ],
      cols: 4,
    },
    {
      type: "highlight",
      label: "Poser et répondre à la question",
      items: [
        "Quelle heure est-il ? / Il est quelle heure ?",
        "Il est {a}huit heures{/a} pile.",
        "Il est {a}midi{/a} / {a}minuit{/a}.",
        "Il est {a}huit heures et quart{/a}.",
        "Il est {a}huit heures et demie{/a}.",
        "Il est {a}neuf heures moins le quart{/a}.",
      ],
    },
    {
      type: "note",
      text: "Heure officielle (formelle) : 14h30 = quatorze heures trente. Heure informelle : 14h30 = deux heures et demie (de l'après-midi).",
    },
  ],
  exercises: [
    {
      type: "fill",
      title: "Exercice 1",
      instruction: "Conjuguez les verbes commencer et terminer au présent.",
      items: [
        { sentence: "Le cours ___ (commencer) à neuf heures.", hint: "commencer", answer: "commence" },
        { sentence: "Nous ___ (terminer) à midi.", hint: "terminer", answer: "terminons" },
        { sentence: "Elle ___ (commencer) le travail à huit heures et demie.", hint: "commencer", answer: "commence" },
        { sentence: "Vous ___ (terminer) à quelle heure ?", hint: "terminer", answer: "terminez" },
        { sentence: "Les élèves ___ (commencer) à travailler.", hint: "commencer", answer: "commencent" },
        { sentence: "Je ___ (terminer) le repas à treize heures.", hint: "terminer", answer: "termine" },
        { sentence: "Tu ___ (commencer) à dix heures pile.", hint: "commencer", answer: "commences" },
        { sentence: "Ils ___ (terminer) la réunion à dix-sept heures.", hint: "terminer", answer: "terminent" },
      ],
    },
    {
      type: "clock_read",
      title: "Exercice 2",
      instruction: "Lisez les heures et écrivez-les en toutes lettres.",
      clocks: [
        { h: 14, m: 30, label: "14h30", answer: "quatorze heures trente" },
        { h: 18, m: 20, label: "18h20", answer: "dix-huit heures vingt" },
        { h: 2,  m: 40, label: "2h40",  answer: "trois heures moins vingt" },
        { h: 9,  m: 25, label: "9h25",  answer: "neuf heures vingt-cinq" },
        { h: 0,  m: 30, label: "0h30",  answer: "minuit et demi" },
        { h: 15, m: 10, label: "15h10", answer: "quinze heures dix" },
        { h: 8,  m: 37, label: "8h37",  answer: "huit heures trente-sept" },
        { h: 11, m: 0,  label: "11h00", answer: "onze heures pile" },
        { h: 20, m: 15, label: "20h15", answer: "vingt heures et quart" },
        { h: 12, m: 55, label: "12h55", answer: "treize heures moins cinq" },
        { h: 22, m: 20, label: "22h20", answer: "vingt-deux heures vingt" },
        { h: 7,  m: 15, label: "7h15",  answer: "sept heures et quart" },
        { h: 16, m: 15, label: "16h15", answer: "seize heures quinze" },
        { h: 19, m: 30, label: "19h30", answer: "dix-neuf heures trente" },
        { h: 0,  m: 50, label: "0h50",  answer: "une heure moins dix" },
        { h: 12, m: 0,  label: "12h00", answer: "midi" },
      ],
    },
  ],
};

// ── Registry ──────────────────────────────────────────────────────────────────

const ALL_VOCAB_LESSONS: VocabLesson[] = [
  a0VocNationalites,
  a1VocSePresenter,
  a1VocFamille,
  a1VocDescription,
  a1VocHeure,
  a1VocNationalites,
  a1VocL13,
  a1VocL16,
  a1VocL21,
  a1VocL26,
  a1VocL12,
  a1VocL17,
  a1VocL27,
  a1VocL18,
  a2VocL01,
  a2VocL02,
  a2VocL03,
  a2VocL04,
  a2VocL05,
  a2VocL06,
  a2VocL07,
  a2VocL08,
];

export function getVocabLesson(slug: string): VocabLesson | undefined {
  return ALL_VOCAB_LESSONS.find((l) => l.slug === slug);
}

export function getAllVocabLessons(): VocabLesson[] {
  return ALL_VOCAB_LESSONS;
}
