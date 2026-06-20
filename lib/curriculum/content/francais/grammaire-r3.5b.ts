import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L19: GrammarLesson = {
  slug: "a1-gr-l19",
  code: "R3.5",
  level: "A1",
  title: "Les adjectifs possessifs",
  theory: [
    { type: "heading", text: "Les adjectifs possessifs", trans: { en: "Possessive adjectives", ar: "صفات الملكية", fa: "صفات ملکی", ti: "ናይ ዋንነት ቅጽላት", uk: "Присвійні прикметники" } },
    {
      type: "plain_list",
      items: [
        "Ils expriment l'appartenance.",
        "Ils s'accordent avec le {a}nom possédé{/a} (et non avec le possesseur).",
      ],
      transItems: {
        en: ["They express belonging.", "They agree with the {a}possessed noun{/a} (not with the owner)."],
        ar: ["تعبّر عن الملكية.", "تتطابق مع {a}الاسم المملوك{/a} (وليس مع المالك)."],
        fa: ["بیانگر تعلق هستند.", "با {a}اسم مالکیت‌شده{/a} مطابقت دارند (نه با مالک)."],
        ti: ["ዋንነት የመልክቱ።", "ምስቲ {a}ዝውነን ስም{/a} ይሰማምዑ (ኣይኮኑን ምስ ዋናኡ)።"],
        uk: ["Вони виражають належність.", "Вони узгоджуються з {a}предметом володіння{/a} (а не з власником)."],
      },
    },
    {
      type: "grid",
      headers: ["Possesseur", "Masc. sing.", "Fém. sing.", "Pluriel"],
      boldFirstCol: true,
      transHeaders: {
        en: ["Owner", "Masc. sing.", "Fem. sing.", "Plural"],
        ar: ["المالك", "مذكر مفرد", "مؤنث مفرد", "جمع"],
        fa: ["مالک", "مذکر مفرد", "مؤنث مفرد", "جمع"],
        ti: ["ዋና", "ተባ. ነጠላ", "ኣን. ነጠላ", "ብዙሕ"],
        uk: ["Власник", "Чол. однини", "Жін. однини", "Множина"],
      },
      rows: [
        ["{a}je{/a}", "mon", "ma", "mes"],
        ["{a}tu{/a}", "ton", "ta", "tes"],
        ["{a}il / elle / on{/a}", "son", "sa", "ses"],
        ["{a}nous{/a}", "notre", "notre", "nos"],
        ["{a}vous{/a}", "votre", "votre", "vos"],
        ["{a}ils / elles{/a}", "leur", "leur", "leurs"],
      ],
    },
    {
      type: "highlight",
      label: "Exemples",
      items: [
        "{a}mon{/a} père, {a}ma{/a} mère, {a}mes{/a} parents",
        "{a}son{/a} livre (à lui ou à elle), {a}sa{/a} voiture, {a}ses{/a} affaires",
        "{a}notre{/a} appartement, {a}nos{/a} voisins",
        "{a}leur{/a} maison, {a}leurs{/a} enfants",
      ],
      transLabel: { en: "Examples", ar: "أمثلة", fa: "مثال‌ها", ti: "ኣብነታት", uk: "Приклади" },
      transItems: {
        en: ["{a}mon{/a} father, {a}ma{/a} mother, {a}mes{/a} parents", "{a}son{/a} book (his or hers), {a}sa{/a} car, {a}ses{/a} belongings", "{a}notre{/a} flat, {a}nos{/a} neighbours", "{a}leur{/a} house, {a}leurs{/a} children"],
        ar: ["{a}mon{/a} أبي، {a}ma{/a} أمي، {a}mes{/a} والداي", "{a}son{/a} كتابه/كتابها، {a}sa{/a} سيارته/سيارتها، {a}ses{/a} أغراضه/أغراضها", "{a}notre{/a} شقتنا، {a}nos{/a} جيراننا", "{a}leur{/a} منزلهم، {a}leurs{/a} أطفالهم"],
        fa: ["{a}mon{/a} پدرم، {a}ma{/a} مادرم، {a}mes{/a} والدینم", "{a}son{/a} کتابش، {a}sa{/a} ماشینش، {a}ses{/a} وسایلش", "{a}notre{/a} آپارتمان ما، {a}nos{/a} همسایه‌های ما", "{a}leur{/a} خانه‌ی آن‌ها، {a}leurs{/a} فرزندان آن‌ها"],
        ti: ["{a}mon{/a} ኣቦይ፣ {a}ma{/a} ኣደይ፣ {a}mes{/a} ወለደይ", "{a}son{/a} መጽሓፉ/መጽሓፋ፣ {a}sa{/a} መኪናኡ/መኪናኣ፣ {a}ses{/a} ንብረቱ/ንብረታ", "{a}notre{/a} ኣፓርትመንትና፣ {a}nos{/a} ጎረባብትና", "{a}leur{/a} ገዛኦም፣ {a}leurs{/a} ቆልዑኦም"],
        uk: ["{a}mon{/a} мій батько, {a}ma{/a} моя мати, {a}mes{/a} мої батьки", "{a}son{/a} його/її книга, {a}sa{/a} його/її машина, {a}ses{/a} його/її речі", "{a}notre{/a} наша квартира, {a}nos{/a} наші сусіди", "{a}leur{/a} їхній дім, {a}leurs{/a} їхні діти"],
      },
    },
    {
      type: "highlight",
      label: "Attention : devant voyelle au féminin",
      items: [
        "ma / ta / sa + voyelle ou h muet → {a}mon / ton / son{/a}",
        "{s}ma{/s} amie → {a}mon{/a} amie",
        "{s}ta{/s} histoire → {a}ton{/a} histoire",
        "{s}sa{/s} école → {a}son{/a} école",
      ],
      noBulletItems: [0],
      transLabel: { en: "Warning: before a vowel in the feminine", ar: "انتباه: قبل حرف علة في المؤنث", fa: "توجه: پیش از حرف صدادار در مؤنث", ti: "ኣቓልቦ፦ ቅድሚ ድምጺ ፊደል ኣብ ኣንስታይ", uk: "Увага: перед голосною в жіночому роді" },
      transItems: {
        en: ["ma / ta / sa + vowel or silent h → {a}mon / ton / son{/a}", "{s}ma{/s} amie → {a}mon{/a} amie", "{s}ta{/s} histoire → {a}ton{/a} histoire", "{s}sa{/s} école → {a}son{/a} école"],
        ar: ["ma / ta / sa + حرف علة أو h غير منطوقة ← {a}mon / ton / son{/a}", "{s}ma{/s} amie → {a}mon{/a} amie", "{s}ta{/s} histoire → {a}ton{/a} histoire", "{s}sa{/s} école → {a}son{/a} école"],
        fa: ["ma / ta / sa + حرف صدادار یا h بی‌صدا ← {a}mon / ton / son{/a}", "{s}ma{/s} amie → {a}mon{/a} amie", "{s}ta{/s} histoire → {a}ton{/a} histoire", "{s}sa{/s} école → {a}son{/a} école"],
        ti: ["ma / ta / sa + ድምጺ ፊደል ወይ ስቕ h → {a}mon / ton / son{/a}", "{s}ma{/s} amie → {a}mon{/a} amie", "{s}ta{/s} histoire → {a}ton{/a} histoire", "{s}sa{/s} école → {a}son{/a} école"],
        uk: ["ma / ta / sa + голосна або німе h → {a}mon / ton / son{/a}", "{s}ma{/s} amie → {a}mon{/a} amie", "{s}ta{/s} histoire → {a}ton{/a} histoire", "{s}sa{/s} école → {a}son{/a} école"],
      },
    },
    {
      type: "highlight",
      label: "Son / Sa : attention à l'ambiguïté",
      items: [
        "{a}son{/a} = son (à lui) ou son (à elle) selon le contexte.",
        "Marco parle à {a}son{/a} ami. (= l'ami de Marco)",
        "Aiko parle à {a}son{/a} ami. (= l'ami d'Aiko)",
      ],
      noBulletItems: [0],
      transLabel: { en: "Son / Sa: beware of ambiguity", ar: "Son / Sa: انتبه للالتباس", fa: "Son / Sa: مراقب ابهام باشید", ti: "Son / Sa: ካብ ዘይንጹርነት ተጠንቀቕ", uk: "Son / Sa: остерігайтеся двозначності" },
      transItems: {
        en: ["{a}son{/a} = his or her depending on the context.", "Marco parle à {a}son{/a} ami. (= Marco's friend)", "Aiko parle à {a}son{/a} ami. (= Aiko's friend)"],
        ar: ["{a}son{/a} = له أو لها حسب السياق.", "Marco parle à {a}son{/a} ami. (= صديق ماركو)", "Aiko parle à {a}son{/a} ami. (= صديق آيكو)"],
        fa: ["{a}son{/a} = مالِ او (مرد) یا مالِ او (زن) بسته به بافت.", "Marco parle à {a}son{/a} ami. (= دوست مارکو)", "Aiko parle à {a}son{/a} ami. (= دوست آیکو)"],
        ti: ["{a}son{/a} = ናቱ ወይ ናታ ከከም ኩነቱ።", "Marco parle à {a}son{/a} ami. (= ዓርኪ ማርኮ)", "Aiko parle à {a}son{/a} ami. (= ዓርኪ ኣይኮ)"],
        uk: ["{a}son{/a} = його або її залежно від контексту.", "Marco parle à {a}son{/a} ami. (= друг Марко)", "Aiko parle à {a}son{/a} ami. (= друг Айко)"],
      },
    },
  ],
  exercises: [],
};
