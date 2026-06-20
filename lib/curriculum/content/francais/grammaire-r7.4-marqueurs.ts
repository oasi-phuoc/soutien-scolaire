import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_MARQUEURS_TEMPORELS: GrammarLesson = {
  slug: "a2-gr-marqueurs-temporels",
  code: "R7.4",
  level: "A2",
  title: "Les marqueurs chronologiques",
  theory: [
    { type: "heading", text: "Situer un événement dans le temps", trans: { en: "Placing an event in time", ar: "تحديد موضع حدث في الزمن", fa: "جای‌گذاری یک رویداد در زمان", ti: "ሓደ ፍጻመ ኣብ ግዜ ምቕማጥ", uk: "Розташування події в часі" } },
    {
      type: "grid",
      headers: ["Repère direct", "Repère dans un récit"],
      rows: [
        ["hier", "la veille"], ["aujourd'hui", "ce jour-là"], ["demain", "le lendemain"],
        ["avant-hier", "l'avant-veille"], ["après-demain", "le surlendemain"],
        ["la semaine prochaine", "la semaine suivante"], ["la semaine dernière", "la semaine précédente"],
      ],
      equalCols: true,
      transHeaders: {
        en: ["Direct reference (speaking now)", "Reference in a narrative"],
        ar: ["مرجع مباشر (وقت الكلام)", "مرجع في السرد"],
        fa: ["مرجع مستقیم (هنگام صحبت)", "مرجع در روایت"],
        ti: ["ቀጥታዊ መወከሲ (ኣብ ግዜ ዘረባ)", "መወከሲ ኣብ ዛንታ"],
        uk: ["Пряма точка відліку (зараз)", "Точка відліку в розповіді"],
      },
      transRows: {
        en: [["hier (yesterday)", "la veille (the day before)"], ["aujourd'hui (today)", "ce jour-là (that day)"], ["demain (tomorrow)", "le lendemain (the next day)"], ["avant-hier (the day before yesterday)", "l'avant-veille (two days before)"], ["après-demain (the day after tomorrow)", "le surlendemain (two days later)"], ["la semaine prochaine (next week)", "la semaine suivante (the following week)"], ["la semaine dernière (last week)", "la semaine précédente (the previous week)"]],
        ar: [["hier (أمس)", "la veille (اليوم السابق)"], ["aujourd'hui (اليوم)", "ce jour-là (ذلك اليوم)"], ["demain (غداً)", "le lendemain (اليوم التالي)"], ["avant-hier (أول أمس)", "l'avant-veille (قبل يومين)"], ["après-demain (بعد غد)", "le surlendemain (بعد يومين)"], ["la semaine prochaine (الأسبوع القادم)", "la semaine suivante (الأسبوع التالي)"], ["la semaine dernière (الأسبوع الماضي)", "la semaine précédente (الأسبوع السابق)"]],
        fa: [["hier (دیروز)", "la veille (روز قبل)"], ["aujourd'hui (امروز)", "ce jour-là (آن روز)"], ["demain (فردا)", "le lendemain (روز بعد)"], ["avant-hier (پریروز)", "l'avant-veille (دو روز قبل)"], ["après-demain (پس‌فردا)", "le surlendemain (دو روز بعد)"], ["la semaine prochaine (هفته‌ی آینده)", "la semaine suivante (هفته‌ی بعد)"], ["la semaine dernière (هفته‌ی گذشته)", "la semaine précédente (هفته‌ی قبل)"]],
        ti: [["hier (ትማሊ)", "la veille (ቅድሚኡ ዝነበረት መዓልቲ)"], ["aujourd'hui (ሎሚ)", "ce jour-là (እታ መዓልቲ እቲኣ)"], ["demain (ጽባሕ)", "le lendemain (ንጽባሒቱ)"], ["avant-hier (ቅድሚ ትማሊ)", "l'avant-veille (ቅድሚ ክልተ መዓልቲ)"], ["après-demain (ድሕሪ ጽባሕ)", "le surlendemain (ድሕሪ ክልተ መዓልቲ)"], ["la semaine prochaine (ዝመጽእ ሰሙን)", "la semaine suivante (ዝስዕብ ሰሙን)"], ["la semaine dernière (ዝሓለፈ ሰሙን)", "la semaine précédente (ቅድሚኡ ዝነበረ ሰሙን)"]],
        uk: [["hier (вчора)", "la veille (напередодні)"], ["aujourd'hui (сьогодні)", "ce jour-là (того дня)"], ["demain (завтра)", "le lendemain (наступного дня)"], ["avant-hier (позавчора)", "l'avant-veille (за два дні до)"], ["après-demain (післязавтра)", "le surlendemain (через два дні)"], ["la semaine prochaine (наступного тижня)", "la semaine suivante (наступного тижня)"], ["la semaine dernière (минулого тижня)", "la semaine précédente (попереднього тижня)"]],
      },
    },
    { type: "highlight", label: "Point de vue", items: ["Hier, aujourd'hui et demain se calculent depuis le moment où l'on parle.", "La veille, ce jour-là et le lendemain se calculent depuis un autre moment du récit."],
      transLabel: { en: "Point of view", ar: "وجهة النظر", fa: "دیدگاه", ti: "ኣረኣእያ", uk: "Точка зору" },
      transItems: {
        en: ["Hier, aujourd'hui and demain are counted from the moment of speaking.", "La veille, ce jour-là and le lendemain are counted from another moment in the narrative."],
        ar: ["hier و aujourd'hui و demain تُحسب من لحظة الكلام.", "la veille و ce jour-là و le lendemain تُحسب من لحظة أخرى في السرد."],
        fa: ["hier، aujourd'hui و demain از لحظه‌ی صحبت محاسبه می‌شوند.", "la veille، ce jour-là و le lendemain از لحظه‌ی دیگری در روایت محاسبه می‌شوند."],
        ti: ["hier፣ aujourd'hui ን demain ካብ ግዜ ዘረባ ይቑጸሩ።", "la veille፣ ce jour-là ን le lendemain ካብ ካልእ ግዜ ናይ ዛንታ ይቑጸሩ።"],
        uk: ["Hier, aujourd'hui і demain відлічуються від моменту мовлення.", "La veille, ce jour-là і le lendemain відлічуються від іншого моменту в розповіді."],
      },
    },
  ],
  exercises: [],
};
