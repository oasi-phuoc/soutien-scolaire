import type { GrammarLesson } from "../../grammar-data";
import { G1_EXERCISES } from "./g1-lesson-profiles";

/** Unité 8 — Les verbes en -ir (G1.9) */
export const A1_GR_VERBES_IR: GrammarLesson = {
  slug: "a1-gr-verbes-ir",
  code: "G1.9",
  level: "A1",
  title: "Les verbes en -ir",
  theory: [
    {
      type: "plain_list",
      items: [
        "Les verbes avec un infinitif en {a}-ir{/a} n'ont pas tous la même conjugaison. Il y a quatre modèles de conjugaison.",
      ],
      transItems: {
        en: ["Verbs with an infinitive ending in {a}-ir{/a} do not all have the same conjugation. There are four conjugation patterns."],
        ar: ["الأفعال التي ينتهي مصدرها بـ {a}-ir{/a} لا تتصرف كلها بالطريقة نفسها. هناك أربعة نماذج للتصريف."],
        fa: ["فعل‌هایی که مصدرشان به {a}-ir{/a} ختم می‌شود، همگی صرف یکسانی ندارند. چهار الگوی صرف وجود دارد."],
        pt: ["Os verbos com infinitivo terminado em {a}-ir{/a} não têm todos a mesma conjugação. Há quatro modelos de conjugação."],
        so: ["Falalka uu falka aan la rogin ku dhammaado {a}-ir{/a} dhammaantood isku qorid ma laha. Waxaa jira afar qaab oo qorid fal ah."],
        ti: ["መሰረታዊ ቅርጾም ብ {a}-ir{/a} ዝውዳእ ግሲታት ኩሎም ሓደ ዓይነት ኣይጽረዩን። ኣርባዕተ ሞዴላት ምጽራይ ኣለዉ።"],
        tr: ["Mastarı {a}-ir{/a} ile biten fiillerin hepsi aynı çekime sahip değildir. Dört çekim modeli vardır."],
        ps: ["هغه فعلونه چې مصدر يې په {a}-ir{/a} پای ته رسېږي، ټول يو شان ګردان نه لري. د ګردان څلور بېلګې شته."],
        uk: ["Дієслова з інфінітивом на {a}-ir{/a} відмінюються не однаково. Існує чотири моделі дієвідміни."],
      },
    },

    {
      type: "heading",
      text: "Modèle finir",
      trans: { en: "The finir pattern", ar: "نموذج finir", fa: "الگوی finir", pt: "O modelo finir", so: "Qaabka finir", ti: "ሞዴል finir", tr: "Finir modeli", ps: "د finir بېلګه", uk: "Модель finir" },
    },
    {
      type: "plain_list",
      items: [
        "Ce verbe a deux radicaux : {a}fini-{/a} au singulier et {a}finiss-{/a} au pluriel.",
      ],
      transItems: {
        en: ["This verb has two stems: {a}fini-{/a} in the singular and {a}finiss-{/a} in the plural."],
        ar: ["لهذا الفعل جذران: {a}fini-{/a} في المفرد و{a}finiss-{/a} في الجمع."],
        fa: ["این فعل دو بن دارد: {a}fini-{/a} در مفرد و {a}finiss-{/a} در جمع."],
        pt: ["Este verbo tem dois radicais: {a}fini-{/a} no singular e {a}finiss-{/a} no plural."],
        so: ["Fal-kani wuxuu leeyahay laba jirridood: {a}fini-{/a} kelida iyo {a}finiss-{/a} jamaca."],
        ti: ["እዚ ግሲ ክልተ ሱራት ኣለዎ፦ {a}fini-{/a} ኣብ ንጽልን {a}finiss-{/a} ኣብ ብዙሕን።"],
        tr: ["Bu fiilin iki kökü vardır: tekilde {a}fini-{/a}, çoğulda {a}finiss-{/a}."],
        ps: ["دا فعل دوه بنونه لري: په مفرد کې {a}fini-{/a} او په جمع کې {a}finiss-{/a}."],
        uk: ["Це дієслово має дві основи: {a}fini-{/a} в однині та {a}finiss-{/a} у множині."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "finir", radical: "fini",
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
          infinitive: "choisir", radical: "choisi",
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
          infinitive: "réfléchir", radical: "réfléchi",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "t" },
            { pronoun: "nous", ending: "ons", radical: "réfléchiss" },
            { pronoun: "vous", ending: "ez", radical: "réfléchiss" },
            { pronoun: "ils / elles", ending: "ent", radical: "réfléchiss" },
          ],
        },
      ],
    },
    {
      type: "highlight",
      label: "Prononciation",
      items: [],
      transLabel: { en: "Pronunciation", ar: "النطق", fa: "تلفظ", pt: "Pronúncia", so: "Ku dhawaaqid", ti: "ኣደማምጻ", tr: "Telaffuz", ps: "تلفظ", uk: "Вимова" },
    },
    {
      type: "plain_list",
      items: [
        "{a}1.{/a} On ne prononce pas le {a}s{/a} et le {a}t{/a} finaux au singulier (fini{a}s{/a}, fini{a}t{/a}).",
      ],
      transItems: {
        en: ["{a}1.{/a} The final {a}s{/a} and {a}t{/a} are not pronounced in the singular (fini{a}s{/a}, fini{a}t{/a})."],
        ar: ["{a}1.{/a} لا يُنطق حرفا {a}s{/a} و{a}t{/a} في نهاية صيغة المفرد (fini{a}s{/a}، fini{a}t{/a})."],
        fa: ["{a}1.{/a} حروف پایانی {a}s{/a} و {a}t{/a} در مفرد تلفظ نمی‌شوند (fini{a}s{/a}، fini{a}t{/a})."],
        pt: ["{a}1.{/a} O {a}s{/a} e o {a}t{/a} finais não se pronunciam no singular (fini{a}s{/a}, fini{a}t{/a})."],
        so: ["{a}1.{/a} {a}s{/a} iyo {a}t{/a} ee dhammaadka laguma dhawaaqo kelida (fini{a}s{/a}, fini{a}t{/a})."],
        ti: ["{a}1.{/a} ኣብ ንጽል እቶም ናይ መወዳእታ {a}s{/a}ን {a}t{/a}ን ኣይድመጹን (fini{a}s{/a}፣ fini{a}t{/a})።"],
        tr: ["{a}1.{/a} Tekilde sondaki {a}s{/a} ve {a}t{/a} okunmaz (fini{a}s{/a}, fini{a}t{/a})."],
        ps: ["{a}1.{/a} په مفرد کې وروستي {a}s{/a} او {a}t{/a} نه تلفظ کېږي (fini{a}s{/a}، fini{a}t{/a})."],
        uk: ["{a}1.{/a} Кінцеві {a}s{/a} і {a}t{/a} в однині не вимовляються (fini{a}s{/a}, fini{a}t{/a})."],
      },
    },
    {
      type: "plain_list",
      items: [
        "{a}2.{/a} Au pluriel, on prononce le {a}ss{/a} pour distinguer : il finit / ils fini{a}ss{/a}ent.",
      ],
      transItems: {
        en: ["{a}2.{/a} In the plural, {a}ss{/a} is pronounced to distinguish: il finit / ils fini{a}ss{/a}ent."],
        ar: ["{a}2.{/a} في الجمع، يُنطق {a}ss{/a} للتمييز بين: il finit / ils fini{a}ss{/a}ent."],
        fa: ["{a}2.{/a} در جمع، {a}ss{/a} تلفظ می‌شود تا این دو شکل متمایز شوند: il finit / ils fini{a}ss{/a}ent."],
        pt: ["{a}2.{/a} No plural, pronuncia-se {a}ss{/a} para distinguir: il finit / ils fini{a}ss{/a}ent."],
        so: ["{a}2.{/a} Jamaca, {a}ss{/a} waa la dhawaaqaa si loo kala saaro: il finit / ils fini{a}ss{/a}ent."],
        ti: ["{a}2.{/a} ኣብ ብዙሕ፣ ንምፍላይ {a}ss{/a} ይድመጽ፦ il finit / ils fini{a}ss{/a}ent።"],
        tr: ["{a}2.{/a} Çoğulda ayırt etmek için {a}ss{/a} okunur: il finit / ils fini{a}ss{/a}ent."],
        ps: ["{a}2.{/a} په جمع کې {a}ss{/a} تلفظ کېږي څو توپير وشي: il finit / ils fini{a}ss{/a}ent."],
        uk: ["{a}2.{/a} У множині {a}ss{/a} вимовляється, щоб розрізнити: il finit / ils fini{a}ss{/a}ent."],
      },
    },

    {
      type: "heading",
      text: "Modèle ouvrir",
      trans: { en: "The ouvrir pattern", ar: "نموذج ouvrir", fa: "الگوی ouvrir", pt: "O modelo ouvrir", so: "Qaabka ouvrir", ti: "ሞዴል ouvrir", tr: "Ouvrir modeli", ps: "د ouvrir بېلګه", uk: "Модель ouvrir" },
    },
    {
      type: "plain_list",
      items: [
        "Le radical est le même que l'infinitif ({a}ouvr-{/a}). Les terminaisons sont les mêmes que pour les verbes en {a}-er{/a}.",
      ],
      transItems: {
        en: ["The stem is the same as the infinitive ({a}ouvr-{/a}). The endings are the same as for verbs ending in {a}-er{/a}."],
        ar: ["الجذر هو نفسه جذر المصدر ({a}ouvr-{/a}). والنهايات هي نفسها نهايات الأفعال المنتهية بـ {a}-er{/a}."],
        fa: ["بن فعل همان بن مصدر است ({a}ouvr-{/a}). شناسه‌ها مانند فعل‌های پایان‌یافته به {a}-er{/a} هستند."],
        pt: ["O radical é o mesmo que o infinitivo ({a}ouvr-{/a}). As terminações são as mesmas dos verbos terminados em {a}-er{/a}."],
        so: ["Jirriddu waa la mid tan falka aan la rogin ({a}ouvr-{/a}). Dhammaadyadu waa la mid kuwa falalka ku dhammaada {a}-er{/a}."],
        ti: ["እቲ ሱር ምስ መሰረታዊ ቅርጺ ሓደ እዩ ({a}ouvr-{/a})። መወዳእታታቱ ምስ ናይ {a}-er{/a} ግሲታት ሓደ እዮም።"],
        tr: ["Kök, mastarla aynıdır ({a}ouvr-{/a}). Ekler {a}-er{/a} ile biten fiillerle aynıdır."],
        ps: ["بن د مصدر په څېر دی ({a}ouvr-{/a}). پایونه د {a}-er{/a} پای ته رسېدونکو فعلونو په شان دي."],
        uk: ["Основа така сама, як в інфінітиві ({a}ouvr-{/a}). Закінчення такі самі, як у дієслів на {a}-er{/a}."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "ouvrir", radical: "ouvr",
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
          infinitive: "offrir", radical: "offr",
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
          infinitive: "découvrir", radical: "découvr",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
    },

    {
      type: "heading",
      text: "Modèle partir, dormir, servir",
      trans: { en: "The partir, dormir, servir pattern", ar: "نموذج partir وdormir وservir", fa: "الگوی partir، dormir و servir", pt: "O modelo partir, dormir, servir", so: "Qaabka partir, dormir, servir", ti: "ሞዴል partir፣ dormir፣ servir", tr: "Partir, dormir, servir modeli", ps: "د partir، dormir، servir بېلګه", uk: "Модель partir, dormir, servir" },
    },
    {
      type: "plain_list",
      items: [
        "Ces verbes ont deux radicaux : au singulier {a}par- / dor- / ser-{/a} ; au pluriel comme l'infinitif {a}part- / dorm- / serv-{/a}.",
      ],
      transItems: {
        en: ["These verbs have two stems: in the singular, {a}par- / dor- / ser-{/a}; in the plural, the same as the infinitive, {a}part- / dorm- / serv-{/a}."],
        ar: ["لهذه الأفعال جذران: في المفرد {a}par- / dor- / ser-{/a}؛ وفي الجمع مثل المصدر {a}part- / dorm- / serv-{/a}."],
        fa: ["این فعل‌ها دو بن دارند: در مفرد {a}par- / dor- / ser-{/a}؛ و در جمع مانند مصدر {a}part- / dorm- / serv-{/a}."],
        pt: ["Estes verbos têm dois radicais: no singular, {a}par- / dor- / ser-{/a}; no plural, o mesmo que o infinitivo, {a}part- / dorm- / serv-{/a}."],
        so: ["Ficilladani waxay leeyihiin laba jirridood: kelida, {a}par- / dor- / ser-{/a}; jamaca, sida falka aan la rogin, {a}part- / dorm- / serv-{/a}."],
        ti: ["እዞም ግሲታት ክልተ ሱራት ኣለዎም፦ ኣብ ንጽል {a}par- / dor- / ser-{/a}፣ ኣብ ብዙሕ ከም መሰረታዊ ቅርጺ {a}part- / dorm- / serv-{/a}።"],
        tr: ["Bu fiillerin iki kökü vardır: tekilde {a}par- / dor- / ser-{/a}; çoğulda mastarla aynı, {a}part- / dorm- / serv-{/a}."],
        ps: ["دا فعلونه دوه بنونه لري: په مفرد کې {a}par- / dor- / ser-{/a}؛ په جمع کې د مصدر په څېر {a}part- / dorm- / serv-{/a}."],
        uk: ["Ці дієслова мають дві основи: в однині {a}par- / dor- / ser-{/a}; у множині — як в інфінітиві: {a}part- / dorm- / serv-{/a}."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "partir", radical: "part",
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
          infinitive: "dormir", radical: "dorm",
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
          infinitive: "servir", radical: "serv",
          rows: [
            { pronoun: "je", ending: "s", radical: "ser" },
            { pronoun: "tu", ending: "s", radical: "ser" },
            { pronoun: "il / elle / on", ending: "t", radical: "ser" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
    },
    {
      type: "highlight",
      label: "Prononciation",
      items: [],
      transLabel: { en: "Pronunciation", ar: "النطق", fa: "تلفظ", pt: "Pronúncia", so: "Ku dhawaaqid", ti: "ኣደማምጻ", tr: "Telaffuz", ps: "تلفظ", uk: "Вимова" },
    },
    {
      type: "plain_list",
      items: [
        "{a}1.{/a} On ne prononce pas le {a}s{/a} et le {a}t{/a} finaux au singulier.",
      ],
      transItems: {
        en: ["{a}1.{/a} The final {a}s{/a} and {a}t{/a} are not pronounced in the singular."],
        ar: ["{a}1.{/a} لا يُنطق حرفا {a}s{/a} و{a}t{/a} في نهاية صيغة المفرد."],
        fa: ["{a}1.{/a} حروف پایانی {a}s{/a} و {a}t{/a} در مفرد تلفظ نمی‌شوند."],
        pt: ["{a}1.{/a} O {a}s{/a} e o {a}t{/a} finais não se pronunciam no singular."],
        so: ["{a}1.{/a} {a}s{/a} iyo {a}t{/a} ee dhammaadka laguma dhawaaqo kelida."],
        ti: ["{a}1.{/a} ኣብ ንጽል እቶም ናይ መወዳእታ {a}s{/a}ን {a}t{/a}ን ኣይድመጹን።"],
        tr: ["{a}1.{/a} Tekilde sondaki {a}s{/a} ve {a}t{/a} okunmaz."],
        ps: ["{a}1.{/a} په مفرد کې وروستي {a}s{/a} او {a}t{/a} نه تلفظ کېږي."],
        uk: ["{a}1.{/a} Кінцеві {a}s{/a} і {a}t{/a} в однині не вимовляються."],
      },
    },
    {
      type: "plain_list",
      items: [
        "{a}2.{/a} On prononce la consonne du 2e radical au pluriel (il part / ils par{a}tent{/a}).",
      ],
      transItems: {
        en: ["{a}2.{/a} The consonant of the second stem is pronounced in the plural (il part / ils par{a}tent{/a})."],
        ar: ["{a}2.{/a} يُنطق الحرف الساكن من الجذر الثاني في الجمع (il part / ils par{a}tent{/a})."],
        fa: ["{a}2.{/a} همخوانِ بن دوم در جمع تلفظ می‌شود (il part / ils par{a}tent{/a})."],
        pt: ["{a}2.{/a} A consoante do segundo radical pronuncia-se no plural (il part / ils par{a}tent{/a})."],
        so: ["{a}2.{/a} Shibbanaha jirridda labaad waa la dhawaaqaa jamaca (il part / ils par{a}tent{/a})."],
        ti: ["{a}2.{/a} ኣብ ብዙሕ እቲ ናይ ካልኣይ ሱር ተነባቢ ፊደል ይድመጽ (il part / ils par{a}tent{/a})።"],
        tr: ["{a}2.{/a} İkinci kökün ünsüzü çoğulda okunur (il part / ils par{a}tent{/a})."],
        ps: ["{a}2.{/a} د دوهم بن همغږی په جمع کې تلفظ کېږي (il part / ils par{a}tent{/a})."],
        uk: ["{a}2.{/a} У множині вимовляється приголосний другої основи (il part / ils par{a}tent{/a})."],
      },
    },

    {
      type: "heading",
      text: "Modèle venir et tenir",
      trans: { en: "The venir and tenir pattern", ar: "نموذج venir وtenir", fa: "الگوی venir و tenir", pt: "O modelo venir e tenir", so: "Qaabka venir iyo tenir", ti: "ሞዴል venirን tenirን", tr: "Venir ve tenir modeli", ps: "د venir او tenir بېلګه", uk: "Модель venir і tenir" },
    },
    {
      type: "plain_list",
      items: [
        "Ces verbes ont trois radicaux, avec des prononciations différentes.",
      ],
      transItems: {
        en: ["These verbs have three stems, with different pronunciations."],
        ar: ["لهذه الأفعال ثلاثة جذور بنطق مختلف."],
        fa: ["این فعل‌ها سه بن با تلفظ‌های متفاوت دارند."],
        pt: ["Estes verbos têm três radicais, com pronúncias diferentes."],
        so: ["Ficilladani waxay leeyihiin saddex jirridood, oo leh ku dhawaaqid kala duwan."],
        ti: ["እዞም ግሲታት ዝተፈላለየ ኣደማምጻ ዘለዎም ሰለስተ ሱራት ኣለዎም።"],
        tr: ["Bu fiillerin farklı telaffuzlara sahip üç kökü vardır."],
        ps: ["دا فعلونه درې بنونه لري، چې تلفظونه يې توپير لري."],
        uk: ["Ці дієслова мають три основи з різною вимовою."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "venir", radical: "v",
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
          infinitive: "tenir", radical: "t",
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
          infinitive: "obtenir", radical: "obt",
          rows: [
            { pronoun: "j'", ending: "iens" },
            { pronoun: "tu", ending: "iens" },
            { pronoun: "il / elle / on", ending: "ient" },
            { pronoun: "nous", ending: "enons" },
            { pronoun: "vous", ending: "enez" },
            { pronoun: "ils / elles", ending: "iennent" },
          ],
        },
      ],
    },
  ],
  exercises: G1_EXERCISES["G1.9"](),
};
