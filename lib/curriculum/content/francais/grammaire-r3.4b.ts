import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L18: GrammarLesson = {
  slug: "a1-gr-l18",
  code: "R3.4",
  level: "A1",
  title: "Les adjectifs démonstratifs",
  theory: [
    { type: "heading", text: "Les adjectifs démonstratifs", trans: { en: "Demonstrative adjectives", ar: "أسماء الإشارة (الصفات)", fa: "صفات اشاره", ti: "ናይ ምልክት ቅጽላት", uk: "Вказівні прикметники" } },
    {
      type: "plain_list",
      items: [
        "Ils servent à désigner ou montrer quelque chose de précis.",
        "Ils s'accordent avec le {a}nom{/a} qu'ils accompagnent.",
      ],
      transItems: {
        en: ["They are used to point to or show something specific.", "They agree with the {a}noun{/a} they accompany."],
        ar: ["تُستخدم للإشارة إلى شيء محدد أو إظهاره.", "تتطابق مع {a}الاسم{/a} الذي ترافقه."],
        fa: ["برای اشاره یا نشان دادن چیزی مشخص به کار می‌روند.", "با {a}اسمی{/a} که همراهی می‌کنند مطابقت دارند."],
        ti: ["ውሱን ነገር ንምሕባር ወይ ንምርኣይ የገልግሉ።", "ምስቲ ዝሰዓብዎ {a}ስም{/a} ይሰማምዑ።"],
        uk: ["Вони вказують на щось конкретне.", "Вони узгоджуються з {a}іменником{/a}, який супроводжують."],
      },
    },
    {
      type: "grid",
      headers: ["Genre / Nombre", "Démonstratif", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Masculin singulier", "{a}ce{/a}", "Je prends {a}ce{/a} livre."],
        ["Masculin sing. + voyelle / h", "{a}cet{/a}", "J'aime {a}cet{/a} appartement."],
        ["Féminin singulier", "{a}cette{/a}", "Regarde {a}cette{/a} voiture."],
        ["Pluriel (m. et f.)", "{a}ces{/a}", "J'aime {a}ces{/a} chaussures."],
      ],
      transHeaders: {
        en: ["Gender / Number", "Demonstrative", "Example"],
        ar: ["الجنس / العدد", "اسم الإشارة", "مثال"],
        fa: ["جنس / شمار", "اشاره", "مثال"],
        ti: ["ጾታ / ቁጽሪ", "ምልክት", "ኣብነት"],
        uk: ["Рід / Число", "Вказівне", "Приклад"],
      },
      transRows: {
        en: [["Masculine singular", "{a}ce{/a}", "Je prends {a}ce{/a} livre. (I take this book.)"], ["Masc. sing. + vowel / h", "{a}cet{/a}", "J'aime {a}cet{/a} appartement. (I like this flat.)"], ["Feminine singular", "{a}cette{/a}", "Regarde {a}cette{/a} voiture. (Look at this car.)"], ["Plural (m. and f.)", "{a}ces{/a}", "J'aime {a}ces{/a} chaussures. (I like these shoes.)"]],
        ar: [["مذكر مفرد", "{a}ce{/a}", "Je prends {a}ce{/a} livre. (آخذ هذا الكتاب.)"], ["مذكر مفرد + حرف علة / h", "{a}cet{/a}", "J'aime {a}cet{/a} appartement. (أحب هذه الشقة.)"], ["مؤنث مفرد", "{a}cette{/a}", "Regarde {a}cette{/a} voiture. (انظر إلى هذه السيارة.)"], ["جمع (مذكر ومؤنث)", "{a}ces{/a}", "J'aime {a}ces{/a} chaussures. (أحب هذه الأحذية.)"]],
        fa: [["مذکر مفرد", "{a}ce{/a}", "Je prends {a}ce{/a} livre. (این کتاب را برمی‌دارم.)"], ["مذکر مفرد + حرف صدادار / h", "{a}cet{/a}", "J'aime {a}cet{/a} appartement. (این آپارتمان را دوست دارم.)"], ["مؤنث مفرد", "{a}cette{/a}", "Regarde {a}cette{/a} voiture. (به این ماشین نگاه کن.)"], ["جمع (مذکر و مؤنث)", "{a}ces{/a}", "J'aime {a}ces{/a} chaussures. (این کفش‌ها را دوست دارم.)"]],
        ti: [["ተባዕታይ ነጠላ", "{a}ce{/a}", "Je prends {a}ce{/a} livre. (ነዚ መጽሓፍ እወስድ።)"], ["ተባዕታይ ነጠላ + ድምጺ ፊደል / h", "{a}cet{/a}", "J'aime {a}cet{/a} appartement. (ነዚ ኣፓርትመንት እፈቱ።)"], ["ኣንስታይ ነጠላ", "{a}cette{/a}", "Regarde {a}cette{/a} voiture. (ነዛ መኪና ርአ።)"], ["ብዙሕ (ተባዕታይን ኣንስታይን)", "{a}ces{/a}", "J'aime {a}ces{/a} chaussures. (ነዞም ሳእኒ እፈቱ።)"]],
        uk: [["Чоловічий рід однини", "{a}ce{/a}", "Je prends {a}ce{/a} livre. (Я беру цю книгу.)"], ["Чол. рід однини + голосна / h", "{a}cet{/a}", "J'aime {a}cet{/a} appartement. (Мені подобається ця квартира.)"], ["Жіночий рід однини", "{a}cette{/a}", "Regarde {a}cette{/a} voiture. (Подивись на цю машину.)"], ["Множина (ч. і ж.)", "{a}ces{/a}", "J'aime {a}ces{/a} chaussures. (Мені подобається це взуття.)"]],
      },
    },
    {
      type: "highlight",
      label: "Attention : cet",
      items: [
        "{a}cet{/a} s'utilise devant un nom masculin commençant par une voyelle ou un {a}h{/a} muet.",
        "{s}ce{/s} étudiant → {a}cet{/a} étudiant",
        "{s}ce{/s} hôtel → {a}cet{/a} hôtel",
      ],
      noBulletItems: [0],
      transLabel: { en: "Warning: cet", ar: "انتباه: cet", fa: "توجه: cet", ti: "ኣቓልቦ፦ cet", uk: "Увага: cet" },
      transItems: {
        en: ["{a}cet{/a} is used before a masculine noun beginning with a vowel or a silent {a}h{/a}.", "{s}ce{/s} étudiant → {a}cet{/a} étudiant", "{s}ce{/s} hôtel → {a}cet{/a} hôtel"],
        ar: ["{a}cet{/a} يُستخدم قبل اسم مذكر يبدأ بحرف علة أو {a}h{/a} غير منطوقة.", "{s}ce{/s} étudiant → {a}cet{/a} étudiant", "{s}ce{/s} hôtel → {a}cet{/a} hôtel"],
        fa: ["{a}cet{/a} پیش از اسم مذکری که با حرف صدادار یا {a}h{/a} بی‌صدا شروع می‌شود به کار می‌رود.", "{s}ce{/s} étudiant → {a}cet{/a} étudiant", "{s}ce{/s} hôtel → {a}cet{/a} hôtel"],
        ti: ["{a}cet{/a} ቅድሚ ብድምጺ ፊደል ወይ ስቕ {a}h{/a} ዝጅምር ተባዕታይ ስም ይጥቀም።", "{s}ce{/s} étudiant → {a}cet{/a} étudiant", "{s}ce{/s} hôtel → {a}cet{/a} hôtel"],
        uk: ["{a}cet{/a} вживається перед іменником чоловічого роду, що починається з голосної або німого {a}h{/a}.", "{s}ce{/s} étudiant → {a}cet{/a} étudiant", "{s}ce{/s} hôtel → {a}cet{/a} hôtel"],
      },
    },
    { type: "heading", text: "Exemples en contexte", sub: true, trans: { en: "Examples in context", ar: "أمثلة في السياق", fa: "مثال‌هایی در بافت", ti: "ኣብነታት ኣብ ኩነት", uk: "Приклади в контексті" } },
    {
      type: "grid",
      headers: ["Phrase", "Remarque"],
      rows: [
        ["Tu connais {a}cette{/a} ville ?", "féminin sing."],
        ["J'aime {a}cet{/a} acteur.", "masculin + voyelle"],
        ["{a}Ces{/a} films sont excellents.", "pluriel"],
        ["Prends {a}ce{/a} bus !", "masculin sing. + consonne"],
      ],
      transHeaders: {
        en: ["Sentence", "Note"],
        ar: ["الجملة", "ملاحظة"],
        fa: ["جمله", "یادداشت"],
        ti: ["ሓሳብ", "መብርሂ"],
        uk: ["Речення", "Примітка"],
      },
      transRows: {
        en: [["Tu connais {a}cette{/a} ville ? (Do you know this city?)", "feminine sing."], ["J'aime {a}cet{/a} acteur. (I like this actor.)", "masculine + vowel"], ["{a}Ces{/a} films sont excellents. (These films are excellent.)", "plural"], ["Prends {a}ce{/a} bus ! (Take this bus!)", "masculine sing. + consonant"]],
        ar: [["Tu connais {a}cette{/a} ville ? (هل تعرف هذه المدينة؟)", "مؤنث مفرد"], ["J'aime {a}cet{/a} acteur. (أحب هذا الممثل.)", "مذكر + حرف علة"], ["{a}Ces{/a} films sont excellents. (هذه الأفلام ممتازة.)", "جمع"], ["Prends {a}ce{/a} bus ! (خذ هذه الحافلة!)", "مذكر مفرد + حرف ساكن"]],
        fa: [["Tu connais {a}cette{/a} ville ? (این شهر را می‌شناسی؟)", "مؤنث مفرد"], ["J'aime {a}cet{/a} acteur. (این بازیگر را دوست دارم.)", "مذکر + حرف صدادار"], ["{a}Ces{/a} films sont excellents. (این فیلم‌ها عالی هستند.)", "جمع"], ["Prends {a}ce{/a} bus ! (این اتوبوس را بگیر!)", "مذکر مفرد + حرف بی‌صدا"]],
        ti: [["Tu connais {a}cette{/a} ville ? (ነዛ ከተማ ትፈልጣ?)", "ኣንስታይ ነጠላ"], ["J'aime {a}cet{/a} acteur. (ነዚ ተዋሳኢ እፈቱ።)", "ተባዕታይ + ድምጺ ፊደል"], ["{a}Ces{/a} films sont excellents. (እዞም ፊልምታት ብሉጻት እዮም።)", "ብዙሕ"], ["Prends {a}ce{/a} bus ! (ነዚ ኣውቶቡስ ውሰድ!)", "ተባዕታይ ነጠላ + ተነባቢ"]],
        uk: [["Tu connais {a}cette{/a} ville ? (Ти знаєш це місто?)", "жіночий рід однини"], ["J'aime {a}cet{/a} acteur. (Мені подобається цей актор.)", "чоловічий рід + голосна"], ["{a}Ces{/a} films sont excellents. (Ці фільми чудові.)", "множина"], ["Prends {a}ce{/a} bus ! (Сідай на цей автобус!)", "чол. рід однини + приголосна"]],
      },
    },
    {
      type: "highlight",
      label: "Astuce : -ci / -là",
      items: [
        "On peut ajouter {a}-ci{/a} (proche) ou {a}-là{/a} (loin) pour préciser.",
        "ce livre-{a}ci{/a} (this book here) / ce livre-{a}là{/a} (that book there)",
      ],
      noBulletItems: [0],
      transLabel: { en: "Tip: -ci / -là", ar: "نصيحة: -ci / -là", fa: "نکته: -ci / -là", ti: "ሓጋዚ ሓሳብ፦ -ci / -là", uk: "Порада: -ci / -là" },
      transItems: {
        en: ["You can add {a}-ci{/a} (near) or {a}-là{/a} (far) to be more precise.", "ce livre-{a}ci{/a} (this book here) / ce livre-{a}là{/a} (that book there)"],
        ar: ["يمكن إضافة {a}-ci{/a} (قريب) أو {a}-là{/a} (بعيد) للتحديد.", "ce livre-{a}ci{/a} (هذا الكتاب هنا) / ce livre-{a}là{/a} (ذلك الكتاب هناك)"],
        fa: ["می‌توان {a}-ci{/a} (نزدیک) یا {a}-là{/a} (دور) را برای دقت بیشتر افزود.", "ce livre-{a}ci{/a} (این کتاب اینجا) / ce livre-{a}là{/a} (آن کتاب آنجا)"],
        ti: ["ንምትኽኻል {a}-ci{/a} (ቀረባ) ወይ {a}-là{/a} (ርሑቕ) ክትውስኽ ትኽእል።", "ce livre-{a}ci{/a} (እዚ መጽሓፍ ኣብዚ) / ce livre-{a}là{/a} (እቲ መጽሓፍ ኣብኡ)"],
        uk: ["Можна додати {a}-ci{/a} (близько) або {a}-là{/a} (далеко) для уточнення.", "ce livre-{a}ci{/a} (ця книга тут) / ce livre-{a}là{/a} (та книга там)"],
      },
    },
  ],
  exercises: [],
};
