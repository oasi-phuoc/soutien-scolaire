import { type GrammarLesson } from "../../grammar-data";

import { verbsToSelector } from "../../verb-selector";

import { G1_EXERCISES } from "./g1-lesson-profiles";

/** Unité 8 — Les verbes en -ir (G1.9) */

export const A1_GR_VERBES_IR: GrammarLesson = {
  slug: "a1-gr-verbes-ir",
  code: "G1.9",
  level: "A1",
  title: "Les verbes en -ir",

  theory: [
    {
      type: "text",
      text: "Les verbes avec un infinitif en {a}-ir{/a} n'ont pas tous la même conjugaison. Il y a quatre modèles de conjugaison.",

      transText: {
        sq: "Foljet me paskajore që përfundon me {a}-ir{/a} nuk zgjedhohen të gjitha njësoj. Ekzistojnë katër modele zgjedhimi.",
        en: "Verbs with an infinitive ending in {a}-ir{/a} do not all have the same conjugation. There are four conjugation patterns.",
        ar: "الأفعال التي ينتهي مصدرها بـ {a}-ir{/a} لا تتصرف كلها بالطريقة نفسها. هناك أربعة نماذج للتصريف.",
        am: "በ {a}-ir{/a} የሚያልቅ መሰረታዊ ቅርጽ ያላቸው ግሶች ሁሉም በአንድ መንገድ አይጸረዩም። አራት የአጸራር ሞዴሎች አሉ።",
        prs: "فعل‌هایی که مصدرشان به {a}-ir{/a} ختم می‌شود، همگی به یک شکل صرف نمی‌شوند. چهار الگوی صرف وجود دارد.",
        es: "Los verbos cuyo infinitivo termina en {a}-ir{/a} no tienen todos la misma conjugación. Hay cuatro modelos de conjugación.",
        it: "I verbi con un infinito che termina in {a}-ir{/a} non hanno tutti la stessa coniugazione. Esistono quattro modelli di coniugazione.",
        fa: "فعل‌هایی که مصدرشان به {a}-ir{/a} ختم می‌شود، همگی صرف یکسانی ندارند. چهار الگوی صرف وجود دارد.",
        ps: "هغه فعلونه چې مصدر يې په {a}-ir{/a} پای ته رسېږي، ټول يو شان ګردان نه لري. د ګردان څلور بېلګې شته.",
        pt: "Os verbos com infinitivo terminado em {a}-ir{/a} não têm todos a mesma conjugação. Há quatro modelos de conjugação.",
        ru: "Глаголы с инфинитивом на {a}-ir{/a} спрягаются не одинаково. Существует четыре модели спряжения.",
        so: "Falalka uu falka aan la rogin ku dhammaado {a}-ir{/a} dhammaantood isku qorid ma laha. Waxaa jira afar qaab oo qorid fal ah.",
        ti: "መሰረታዊ ቅርጾም ብ {a}-ir{/a} ዝውዳእ ግሲታት ኩሎም ሓደ ዓይነት ኣይጽረዩን። ኣርባዕተ ሞዴላት ምጽራይ ኣለዉ።",
        tr: "Mastarı {a}-ir{/a} ile biten fiillerin hepsi aynı şekilde çekimlenmez. Dört çekim modeli vardır.",
        uk: "Дієслова з інфінітивом на {a}-ir{/a} відмінюються не однаково. Існує чотири моделі дієвідміни.",
      },
    },

    {
      type: "heading",
      text: "Modèle finir",

      trans: {
        sq: "Modeli finir",
        en: "The finir pattern",
        ar: "نموذج finir",
        am: "የ finir ሞዴል",
        prs: "الگوی finir",
        es: "El modelo finir",
        it: "Il modello finir",
        fa: "الگوی finir",
        ps: "د finir بېلګه",
        pt: "O modelo finir",
        ru: "Модель finir",
        so: "Qaabka finir",
        ti: "ሞዴል finir",
        tr: "Finir modeli",
        uk: "Модель finir",
      },
    },

    {
      type: "text",
      text: "Ce verbe a deux radicaux : {a}fini-{/a} au singulier et {a}finiss-{/a} au pluriel.",

      transText: {
        sq: "Ky folje ka dy tema: {a}fini-{/a} në njëjës dhe {a}finiss-{/a} në shumës.",
        en: "This verb has two stems: {a}fini-{/a} in the singular and {a}finiss-{/a} in the plural.",
        ar: "لهذا الفعل جذران: {a}fini-{/a} في المفرد و{a}finiss-{/a} في الجمع.",
        am: "ይህ ግስ ሁለት ሥሮች አሉት፦ {a}fini-{/a} በነጠላ እና {a}finiss-{/a} በብዙ ቁጥር።",
        prs: "این فعل دو بن دارد: {a}fini-{/a} در مفرد و {a}finiss-{/a} در جمع.",
        es: "Este verbo tiene dos raíces: {a}fini-{/a} en singular y {a}finiss-{/a} en plural.",
        it: "Questo verbo ha due radici: {a}fini-{/a} al singolare e {a}finiss-{/a} al plurale.",
        fa: "این فعل دو بن دارد: {a}fini-{/a} در مفرد و {a}finiss-{/a} در جمع.",
        ps: "دا فعل دوه بنونه لري: په مفرد کې {a}fini-{/a} او په جمع کې {a}finiss-{/a}.",
        pt: "Este verbo tem dois radicais: {a}fini-{/a} no singular e {a}finiss-{/a} no plural.",
        ru: "У этого глагола две основы: {a}fini-{/a} в единственном числе и {a}finiss-{/a} во множественном.",
        so: "Fal-kani wuxuu leeyahay laba jirridood: {a}fini-{/a} kelida iyo {a}finiss-{/a} jamaca.",
        ti: "እዚ ግሲ ክልተ ሱራት ኣለዎ፦ {a}fini-{/a} ኣብ ንጽልን {a}finiss-{/a} ኣብ ብዙሕን።",
        tr: "Bu fiilin iki kökü vardır: tekilde {a}fini-{/a}, çoğulda {a}finiss-{/a}.",
        uk: "Це дієслово має дві основи: {a}fini-{/a} в однині та {a}finiss-{/a} у множині.",
      },
    },

    verbsToSelector([
      {
        infinitive: "finir",
        radical: "fini",
        rows: [
          { pronoun: "je", ending: "s" },
          { pronoun: "tu", ending: "s" },
          { pronoun: "il / elle / on", ending: "t" },
          { pronoun: "nous", ending: "ons", radical: "finiss" },
          { pronoun: "vous", ending: "ez", radical: "finiss" },
          { pronoun: "ils / elles", ending: "ent", radical: "finiss" },
        ],
      },
      {
        infinitive: "choisir",
        radical: "choisi",
        rows: [
          { pronoun: "je", ending: "s" },
          { pronoun: "tu", ending: "s" },
          { pronoun: "il / elle / on", ending: "t" },
          { pronoun: "nous", ending: "ons", radical: "choisiss" },
          { pronoun: "vous", ending: "ez", radical: "choisiss" },
          { pronoun: "ils / elles", ending: "ent", radical: "choisiss" },
        ],
      },
      {
        infinitive: "réfléchir",
        radical: "réfléchi",
        rows: [
          { pronoun: "je", ending: "s" },
          { pronoun: "tu", ending: "s" },
          { pronoun: "il / elle / on", ending: "t" },
          { pronoun: "nous", ending: "ons", radical: "réfléchiss" },
          { pronoun: "vous", ending: "ez", radical: "réfléchiss" },
          { pronoun: "ils / elles", ending: "ent", radical: "réfléchiss" },
        ],
      },
    ], { buttonCols: 3 }),

    {
      type: "heading",
      text: "Modèle ouvrir",

      trans: {
        sq: "Modeli ouvrir",
        en: "The ouvrir pattern",
        ar: "نموذج ouvrir",
        am: "የ ouvrir ሞዴል",
        prs: "الگوی ouvrir",
        es: "El modelo ouvrir",
        it: "Il modello ouvrir",
        fa: "الگوی ouvrir",
        ps: "د ouvrir بېلګه",
        pt: "O modelo ouvrir",
        ru: "Модель ouvrir",
        so: "Qaabka ouvrir",
        ti: "ሞዴል ouvrir",
        tr: "Ouvrir modeli",
        uk: "Модель ouvrir",
      },
    },

    {
      type: "text",
      text: "Le radical est le même que l'infinitif : {a}ouvr-{/a}. Les terminaisons sont les mêmes que pour les verbes en {a}-er{/a}.",

      transText: {
        sq: "Tema është i njëjtë me paskajoren: {a}ouvr-{/a}. Mbaresat janë të njëjta si te foljet në {a}-er{/a}.",
        en: "The stem is the same as the infinitive: {a}ouvr-{/a}. The endings are the same as for verbs ending in {a}-er{/a}.",
        ar: "الجذر هو نفسه جذر المصدر: {a}ouvr-{/a}. والنهايات هي نفسها نهايات الأفعال المنتهية بـ {a}-er{/a}.",
        am: "ሥሩ ከመሰረታዊ ቅርጹ ጋር አንድ ነው፦ {a}ouvr-{/a}። መወዳእታዎቹ እንደ {a}-er{/a} የሚያልቁ ግሶች ተመሳሳይ ናቸው።",
        prs: "بن فعل همان بن مصدر است: {a}ouvr-{/a}. پسوندهای صرف مانند فعل‌های پایان‌یافته به {a}-er{/a} هستند.",
        es: "La raíz es la misma que la del infinitivo: {a}ouvr-{/a}. Las terminaciones son las mismas que en los verbos en {a}-er{/a}.",
        it: "La radice è la stessa dell'infinito: {a}ouvr-{/a}. Le desinenze sono le stesse dei verbi in {a}-er{/a}.",
        fa: "بن فعل همان بن مصدر است: {a}ouvr-{/a}. شناسه‌ها مانند فعل‌های پایان‌یافته به {a}-er{/a} هستند.",
        ps: "بن د مصدر په څېر دی: {a}ouvr-{/a}. پایونه د {a}-er{/a} پای ته رسېدونکو فعلونو په شان دي.",
        pt: "O radical é o mesmo que o infinitivo: {a}ouvr-{/a}. As terminações são as mesmas dos verbos terminados em {a}-er{/a}.",
        ru: "Основа такая же, как в инфинитиве: {a}ouvr-{/a}. Окончания такие же, как у глаголов на {a}-er{/a}.",
        so: "Jirriddu waa la mid tan falka aan la rogin: {a}ouvr-{/a}. Dhammaadyadu waa la mid kuwa falalka ku dhammaada {a}-er{/a}.",
        ti: "እቲ ሱር ምስ መሰረታዊ ቅርጺ ሓደ እዩ፦ {a}ouvr-{/a}። መወዳእታታቱ ምስ ናይ {a}-er{/a} ግሲታት ሓደ እዮም።",
        tr: "Kök, mastarla aynıdır: {a}ouvr-{/a}. Ekler {a}-er{/a} ile biten fiillerle aynıdır.",
        uk: "Основа така сама, як в інфінітиві: {a}ouvr-{/a}. Закінчення такі самі, як у дієслів на {a}-er{/a}.",
      },
    },

    verbsToSelector([
      {
        infinitive: "ouvrir",
        radical: "ouvr",
        rows: [
          { pronoun: "j'", ending: "e" },
          { pronoun: "tu", ending: "es" },
          { pronoun: "il / elle / on", ending: "e" },
          { pronoun: "nous", ending: "ons" },
          { pronoun: "vous", ending: "ez" },
          { pronoun: "ils / elles", ending: "ent" },
        ],
      },
      {
        infinitive: "offrir",
        radical: "offr",
        rows: [
          { pronoun: "j'", ending: "e" },
          { pronoun: "tu", ending: "es" },
          { pronoun: "il / elle / on", ending: "e" },
          { pronoun: "nous", ending: "ons" },
          { pronoun: "vous", ending: "ez" },
          { pronoun: "ils / elles", ending: "ent" },
        ],
      },
      {
        infinitive: "découvrir",
        radical: "découvr",
        rows: [
          { pronoun: "je", ending: "e" },
          { pronoun: "tu", ending: "es" },
          { pronoun: "il / elle / on", ending: "e" },
          { pronoun: "nous", ending: "ons" },
          { pronoun: "vous", ending: "ez" },
          { pronoun: "ils / elles", ending: "ent" },
        ],
      },
    ], { buttonCols: 3 }),

    {
      type: "heading",
      text: "Modèle partir, dormir, servir",

      trans: {
        sq: "Modeli partir, dormir, servir",
        en: "The partir, dormir, servir pattern",
        ar: "نموذج partir و dormir و servir",
        am: "የ partir፣ dormir እና servir ሞዴል",
        prs: "الگوی partir، dormir و servir",
        es: "El modelo partir, dormir, servir",
        it: "Il modello partir, dormir, servir",
        fa: "الگوی partir، dormir و servir",
        ps: "د partir، dormir، servir بېلګه",
        pt: "O modelo partir, dormir, servir",
        ru: "Модель partir, dormir, servir",
        so: "Qaabka partir, dormir, servir",
        ti: "ሞዴል partir፣ dormir፣ servir",
        tr: "Partir, dormir, servir modeli",
        uk: "Модель partir, dormir, servir",
      },
    },

    {
      type: "text",
      text: "Ces verbes ont deux radicaux : au singulier {a}par- / dor- / ser-{/a} ; au pluriel comme l'infinitif {a}part- / dorm- / serv-{/a}.",

      transText: {
        sq: "Këto folje kanë dy tema: në njëjës {a}par- / dor- / ser-{/a}; në shumës si paskajorja {a}part- / dorm- / serv-{/a}.",
        en: "These verbs have two stems: in the singular, {a}par- / dor- / ser-{/a}; in the plural, the same as the infinitive, {a}part- / dorm- / serv-{/a}.",
        ar: "لهذه الأفعال جذران: في المفرد {a}par- / dor- / ser-{/a}؛ وفي الجمع مثل المصدر {a}part- / dorm- / serv-{/a}.",
        am: "እዞም ግሶች ሁለት ሥሮች አሏቸው፦ በነጠላ {a}par- / dor- / ser-{/a}፤ በብዙ ቁጥር እንደ መሰረታዊ ቅርጹ {a}part- / dorm- / serv-{/a}።",
        prs: "این فعل‌ها دو بن دارند: در مفرد {a}par- / dor- / ser-{/a}؛ و در جمع مانند مصدر {a}part- / dorm- / serv-{/a}.",
        es: "Estos verbos tienen dos raíces: en singular {a}par- / dor- / ser-{/a}; en plural, como el infinitivo {a}part- / dorm- / serv-{/a}.",
        it: "Questi verbi hanno due radici: al singolare {a}par- / dor- / ser-{/a}; al plurale come l'infinito {a}part- / dorm- / serv-{/a}.",
        fa: "این فعل‌ها دو بن دارند: در مفرد {a}par- / dor- / ser-{/a}؛ و در جمع مانند مصدر {a}part- / dorm- / serv-{/a}.",
        ps: "دا فعلونه دوه بنونه لري: په مفرد کې {a}par- / dor- / ser-{/a}؛ په جمع کې د مصدر په څېر {a}part- / dorm- / serv-{/a}.",
        pt: "Estes verbos têm dois radicais: no singular, {a}par- / dor- / ser-{/a}; no plural, como o infinitivo {a}part- / dorm- / serv-{/a}.",
        ru: "У этих глаголов две основы: в единственном числе {a}par- / dor- / ser-{/a}; во множественном — как в инфинитиве: {a}part- / dorm- / serv-{/a}.",
        so: "Ficilladani waxay leeyihiin laba jirridood: kelida, {a}par- / dor- / ser-{/a}; jamaca, sida falka aan la rogin, {a}part- / dorm- / serv-{/a}.",
        ti: "እዞም ግሲታት ክልተ ሱራት ኣለዎም፦ ኣብ ንጽል {a}par- / dor- / ser-{/a}፣ ኣብ ብዙሕ ከም መሰረታዊ ቅርጺ {a}part- / dorm- / serv-{/a}።",
        tr: "Bu fiillerin iki kökü vardır: tekilde {a}par- / dor- / ser-{/a}; çoğulda mastarla aynı, {a}part- / dorm- / serv-{/a}.",
        uk: "Ці дієслова мають дві основи: в однині {a}par- / dor- / ser-{/a}; у множині — як в інфінітиві: {a}part- / dorm- / serv-{/a}.",
      },
    },

    verbsToSelector([
      {
        infinitive: "partir",
        radical: "part",
        rows: [
          { pronoun: "je", ending: "s", radical: "par" },
          { pronoun: "tu", ending: "s", radical: "par" },
          { pronoun: "il / elle / on", ending: "t", radical: "par" },
          { pronoun: "nous", ending: "ons" },
          { pronoun: "vous", ending: "ez" },
          { pronoun: "ils / elles", ending: "ent" },
        ],
      },
      {
        infinitive: "dormir",
        radical: "dorm",
        rows: [
          { pronoun: "je", ending: "s", radical: "dor" },
          { pronoun: "tu", ending: "s", radical: "dor" },
          { pronoun: "il / elle / on", ending: "t", radical: "dor" },
          { pronoun: "nous", ending: "ons" },
          { pronoun: "vous", ending: "ez" },
          { pronoun: "ils / elles", ending: "ent" },
        ],
      },
      {
        infinitive: "servir",
        radical: "serv",
        rows: [
          { pronoun: "je", ending: "s", radical: "ser" },
          { pronoun: "tu", ending: "s", radical: "ser" },
          { pronoun: "il / elle / on", ending: "t", radical: "ser" },
          { pronoun: "nous", ending: "ons" },
          { pronoun: "vous", ending: "ez" },
          { pronoun: "ils / elles", ending: "ent" },
        ],
      },
    ], { buttonCols: 3 }),

    {
      type: "heading",
      text: "Modèle venir et tenir",

      trans: {
        sq: "Modeli venir dhe tenir",
        en: "The venir and tenir pattern",
        ar: "نموذج venir و tenir",
        am: "የ venir እና tenir ሞዴል",
        prs: "الگوی venir و tenir",
        es: "El modelo venir y tenir",
        it: "Il modello venir e tenir",
        fa: "الگوی venir و tenir",
        ps: "د venir او tenir بېلګه",
        pt: "O modelo venir e tenir",
        ru: "Модель venir и tenir",
        so: "Qaabka venir iyo tenir",
        ti: "ሞዴል venirን tenirን",
        tr: "Venir ve tenir modeli",
        uk: "Модель venir і tenir",
      },
    },

    {
      type: "text",
      text: "Ces verbes ont trois radicaux, avec des prononciations différentes.",

      transText: {
        sq: "Këto folje kanë tri tema, me shqiptim të ndryshëm.",
        en: "These verbs have three stems, with different pronunciations.",
        ar: "لهذه الأفعال ثلاثة جذور بنطق مختلف.",
        am: "እነዚህ ግሶች የተለያዩ አነባበብ ያላቸው ሦስት ሥሮች አሏቸው።",
        prs: "این فعل‌ها سه بن با تلفظ‌های متفاوت دارند.",
        es: "Estos verbos tienen tres raíces, con pronunciaciones diferentes.",
        it: "Questi verbi hanno tre radici, con pronunce diverse.",
        fa: "این فعل‌ها سه بن با تلفظ‌های متفاوت دارند.",
        ps: "دا فعلونه درې بنونه لري، چې تلفظونه يې توپير لري.",
        pt: "Estes verbos têm três radicais, com pronúncias diferentes.",
        ru: "У этих глаголов три основы с разным произношением.",
        so: "Ficilladani waxay leeyihiin saddex jirridood, oo leh ku dhawaaqid kala duwan.",
        ti: "እዞም ግሲታት ዝተፈላለየ ኣደማምጻ ዘለዎም ሰለስተ ሱራት ኣለዎም።",
        tr: "Bu fiillerin farklı telaffuzlara sahip üç kökü vardır.",
        uk: "Ці дієслова мають три основи з різною вимовою.",
      },
    },

    verbsToSelector([
      {
        infinitive: "venir",
        radical: "v",
        rows: [
          { pronoun: "je", ending: "iens" },
          { pronoun: "tu", ending: "iens" },
          { pronoun: "il / elle / on", ending: "ient" },
          { pronoun: "nous", ending: "enons" },
          { pronoun: "vous", ending: "enez" },
          { pronoun: "ils / elles", ending: "iennent" },
        ],
      },
      {
        infinitive: "tenir",
        radical: "t",
        rows: [
          { pronoun: "je", ending: "iens" },
          { pronoun: "tu", ending: "iens" },
          { pronoun: "il / elle / on", ending: "ient" },
          { pronoun: "nous", ending: "enons" },
          { pronoun: "vous", ending: "enez" },
          { pronoun: "ils / elles", ending: "iennent" },
        ],
      },
      {
        infinitive: "obtenir",
        radical: "obt",
        rows: [
          { pronoun: "j'", ending: "iens" },
          { pronoun: "tu", ending: "iens" },
          { pronoun: "il / elle / on", ending: "ient" },
          { pronoun: "nous", ending: "enons" },
          { pronoun: "vous", ending: "enez" },
          { pronoun: "ils / elles", ending: "iennent" },
        ],
      },
    ], { buttonCols: 3 }),
  ],

  exercises: G1_EXERCISES["G1.9"](),
};