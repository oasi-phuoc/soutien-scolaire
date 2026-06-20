import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_FUTUR_SIMPLE_PROCHE: GrammarLesson = {
  slug: "a2-gr-futur-simple-ou-proche",
  code: "R4.6",
  level: "A2",
  title: "Futur simple ou futur proche ?",
  theory: [
    { type: "heading", text: "Futur simple ou futur proche ?", trans: { en: "Simple future or near future?", ar: "المستقبل البسيط أم المستقبل القريب؟", fa: "آینده‌ی ساده یا آینده‌ی نزدیک؟", ti: "ቀሊል መጻኢ ወይ ቀረባ መጻኢ?", uk: "Простий майбутній чи найближче майбутнє?" } },
    {
      type: "grid",
      headers: ["Futur proche", "Futur simple"],
      rows: [
        ["aller au présent + infinitif", "infinitif ou base irrégulière + terminaison"],
        ["action imminente", "action plus éloignée"],
        ["intention déjà décidée", "prévision, promesse ou fait futur"],
        ["Je vais partir maintenant.", "Je partirai l'année prochaine."],
      ],
      equalCols: true,
      transHeaders: {
        en: ["Near future", "Simple future"],
        ar: ["المستقبل القريب", "المستقبل البسيط"],
        fa: ["آینده‌ی نزدیک", "آینده‌ی ساده"],
        ti: ["ቀረባ መጻኢ", "ቀሊል መጻኢ"],
        uk: ["Найближче майбутнє", "Простий майбутній"],
      },
      transRows: {
        en: [["aller (present) + infinitive", "infinitive or irregular stem + ending"], ["imminent action", "more distant action"], ["intention already decided", "prediction, promise or future fact"], ["Je vais partir maintenant. (I am going to leave now.)", "Je partirai l'année prochaine. (I will leave next year.)"]],
        ar: [["aller (المضارع) + المصدر", "المصدر أو الجذر الشاذ + النهاية"], ["فعل وشيك", "فعل أبعد"], ["نية محسومة مسبقاً", "توقع أو وعد أو حدث مستقبلي"], ["Je vais partir maintenant. (سأغادر الآن.)", "Je partirai l'année prochaine. (سأغادر العام القادم.)"]],
        fa: [["aller (حال) + مصدر", "مصدر یا ریشه‌ی بی‌قاعده + پایانه"], ["عمل قریب‌الوقوع", "عمل دورتر"], ["قصد از پیش تصمیم‌گرفته", "پیش‌بینی، وعده یا واقعیت آینده"], ["Je vais partir maintenant. (همین حالا می‌روم.)", "Je partirai l'année prochaine. (سال آینده خواهم رفت.)"]],
        ti: [["aller (ህሉው) + መሰረታዊ ግሲ", "መሰረታዊ ግሲ ወይ ዘይስሩዕ መሰረት + መወዳእታ"], ["ቀረባ ተግባር", "ዝያዳ ርሑቕ ተግባር"], ["ድሮ ዝተወሰነ ሓሳብ", "ትንበያ፣ መብጽዓ ወይ መጻኢ ሓቂ"], ["Je vais partir maintenant. (ሕጂ ክኸይድ እየ።)", "Je partirai l'année prochaine. (ዝመጽእ ዓመት ክኸይድ እየ።)"]],
        uk: [["aller (теперішній) + інфінітив", "інфінітив або неправильна основа + закінчення"], ["неминуча дія", "віддаленіша дія"], ["вже вирішений намір", "передбачення, обіцянка або майбутній факт"], ["Je vais partir maintenant. (Я зараз піду.)", "Je partirai l'année prochaine. (Я поїду наступного року.)"]],
      },
    },
    { type: "highlight", label: "Le contexte décide", items: ["Les deux futurs peuvent parfois être possibles ; le choix dépend de la proximité et de l'intention du locuteur."],
      transLabel: { en: "Context decides", ar: "السياق هو الفاصل", fa: "بافت تعیین‌کننده است", ti: "ኩነት ይውስን", uk: "Контекст вирішує" },
      transItems: {
        en: ["Both futures can sometimes be possible; the choice depends on how near the action is and on the speaker's intention."],
        ar: ["قد يكون المستقبلان ممكنين أحياناً؛ يعتمد الاختيار على قرب الفعل ونية المتكلم."],
        fa: ["گاهی هر دو زمان آینده ممکن‌اند؛ انتخاب به نزدیکی عمل و قصد گوینده بستگی دارد."],
        ti: ["ሓሓሊፉ ክልቲኡ መጻኢ ክከኣል ይኽእል፤ እቲ ምርጫ ኣብ ቅርበት ናይቲ ተግባርን ሓሳብ ናይቲ ተዛራባይን ይምርኮስ።"],
        uk: ["Іноді можливі обидва майбутні часи; вибір залежить від близькості дії та наміру мовця."],
      },
    },
  ],
  exercises: [],
};
