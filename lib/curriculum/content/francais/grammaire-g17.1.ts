import type { GrammarLesson } from "../../grammar-data";

/** G17.1 — L'expression de la cause, enrichie avec G19.21 */
export const A1_GR_EXPRESSION_CAUSE: GrammarLesson = {
  slug: "a1-gr-expression-cause",
  code: "G17.1",
  level: "A1",
  title: "L'expression de la cause",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Donner des explications sur des faits réels, présentées comme certaines.",
        "{a}Puisque{/a} tu es fatigué, pourquoi tu ne te reposes pas ? — {a}Parce que{/a} je veux finir ce soir !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjonctions",
    },
    {
      type: "text",
      label: "parce que",
      items: [
        "Répond à la question {a}pourquoi{/a}.",
        "Sauf réponse directe à {a}pourquoi ?{/a}, {a}parce que{/a} n'est pas en tête de phrase.",
        "Je ne me repose pas {a}parce que{/a} je veux finir ce soir.",
        "— Pourquoi tu n'es pas venu ? — {a}Parce que{/a} j'étais malade.",
      ],
    },
    {
      type: "text",
      label: "comme",
      items: [
        "Relie cause et conséquence ; toujours en tête de phrase.",
        "{a}Comme{/a} je veux finir ce soir, je ne peux pas m'arrêter maintenant.",
      ],
    },
    {
      type: "text",
      label: "puisque",
      items: [
        "Insiste sur une cause évidente / connue ; deux places possibles.",
        "{a}Puisque{/a} tu es fatigué, va te reposer ! = Va te reposer {a}puisque{/a} tu es fatigué !",
      ],
    },
    {
      type: "note",
      text: "Avec {a}comme{/a} / {a}puisque{/a} en tête : virgule après l'explication. Deux causes : {a}que{/a} devant la seconde. → … parce que je suis fatigué et {a}que{/a} je dois me lever tôt.",
    },
    {
      type: "heading",
      text: "Prépositions",
    },
    {
      type: "text",
      label: "à cause de / grâce à / en raison de",
      items: [
        "{a}À cause de{/a} + nom/tonique : cause négative. → … à cause de toi et du mauvais temps.",
        "{a}Grâce à{/a} + nom/tonique : cause positive. → … grâce à toi et à tes conseils.",
        "{a}En raison de{/a} + nom : raison officielle. → La route est fermée en raison du mauvais temps.",
      ],
    },
    {
      type: "note",
      text: "Articles contractés : {a}à cause du{/a} mauvais temps ; {a}grâce au{/a} soleil ; {a}en raison des{/a} pluies.",
    },
    { type: "heading", text: "Exprimer la cause", trans: { en: "Expressing cause", ar: "التعبير عن السبب", fa: "بیان علت", ti: "ምኽንያት ምግላጽ", uk: "Вираження причини" } },
    {
      type: "text",
      text: "La cause explique {a}pourquoi{/a} quelque chose se passe.",
      transText: {
        en: "The cause explains {a}why{/a} something happens.",
        ar: "السبب يُفسّر {a}لماذا{/a} يحدث شيء ما.",
        fa: "علت توضیح می‌دهد {a}چرا{/a} چیزی اتفاق می‌افتد.",
        ti: "እቲ ምኽንያት {a}ስለምንታይ{/a} ሓደ ነገር ከም ዝፍጸም የብርህ።",
        uk: "Причина пояснює, {a}чому{/a} щось відбувається.",
      },
      items: [
        "On peut exprimer la cause avec différents mots selon le registre et la position dans la phrase.",
      ],
      transItems: {
        en: [
          "Cause can be expressed with different words depending on register and position in the sentence.",
        ],
        ar: [
          "يمكن التعبير عن السبب بكلمات مختلفة حسب المستوى والموضع في الجملة.",
        ],
        fa: [
          "می‌توان علت را با کلمات مختلف بسته به سطح زبان و جایگاه در جمله بیان کرد.",
        ],
        ti: [
          "ምኽንያት ብደረጃ ቋንቋን ኣብ ሓረግ ብዘለዎ ቦታን መሰረት ብዝተፈላለዩ ቃላት ክግለጽ ይኽእል።",
        ],
        uk: [
          "Причину можна виразити різними словами залежно від регістру та місця в реченні.",
        ],
      },
    },
    {
      type: "grid",
      headers: ["Connecteur", "Structure", "Registre", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}parce que{/a}", "+ sujet + verbe (milieu ou fin)", "courant", "Je reste parce qu'il pleut."],
        ["{a}car{/a}", "+ sujet + verbe (après virgule)", "soutenu / écrit", "Je reste, car il pleut."],
        ["{a}comme{/a}", "début de phrase uniquement", "courant", "Comme il pleut, je reste."],
        ["{a}puisque{/a}", "+ sujet + verbe (cause évidente)", "courant", "Puisque tu es là, restons."],
        ["{a}à cause de{/a}", "+ nom (connotation neutre/négative)", "courant", "Il est en retard à cause du trafic."],
        ["{a}grâce à{/a}", "+ nom (connotation positive)", "courant", "Elle a réussi grâce à son travail."],
        ["{a}en raison de{/a}", "+ nom (cause officielle)", "soutenu", "Fermeture en raison des travaux."],
      ],
      transHeaders: {
        en: ["Connector", "Structure", "Register", "Example"],
        ar: ["أداة الربط", "البنية", "المستوى", "مثال"],
        fa: ["رابط", "ساختار", "سطح", "مثال"],
        ti: ["መራኸቢ", "ቅርጺ", "ደረጃ", "ኣብነት"],
        uk: ["Сполучник", "Структура", "Регістр", "Приклад"],
      },
      transRows: {
        en: [["{a}parce que{/a}", "+ subject + verb (middle or end)", "common", "Je reste parce qu'il pleut. (I'm staying because it's raining.)"], ["{a}car{/a}", "+ subject + verb (after a comma)", "formal / written", "Je reste, car il pleut. (I'm staying, for it's raining.)"], ["{a}comme{/a}", "only at the start of the sentence", "common", "Comme il pleut, je reste. (As it's raining, I'm staying.)"], ["{a}puisque{/a}", "+ subject + verb (obvious cause)", "common", "Puisque tu es là, restons. (Since you're here, let's stay.)"], ["{a}à cause de{/a}", "+ noun (neutral/negative connotation)", "common", "Il est en retard à cause du trafic. (He's late because of the traffic.)"], ["{a}grâce à{/a}", "+ noun (positive connotation)", "common", "Elle a réussi grâce à son travail. (She succeeded thanks to her work.)"], ["{a}en raison de{/a}", "+ noun (official cause)", "formal", "Fermeture en raison des travaux. (Closed due to works.)"]],
        ar: [["{a}parce que{/a}", "+ الفاعل + الفعل (وسط أو نهاية)", "شائع", "Je reste parce qu'il pleut. (أبقى لأنها تمطر.)"], ["{a}car{/a}", "+ الفاعل + الفعل (بعد فاصلة)", "رسمي / كتابي", "Je reste, car il pleut. (أبقى، لأنها تمطر.)"], ["{a}comme{/a}", "في بداية الجملة فقط", "شائع", "Comme il pleut, je reste. (بما أنها تمطر، أبقى.)"], ["{a}puisque{/a}", "+ الفاعل + الفعل (سبب بديهي)", "شائع", "Puisque tu es là, restons. (بما أنك هنا، لنبقَ.)"], ["{a}à cause de{/a}", "+ اسم (دلالة محايدة/سلبية)", "شائع", "Il est en retard à cause du trafic. (تأخّر بسبب الازدحام.)"], ["{a}grâce à{/a}", "+ اسم (دلالة إيجابية)", "شائع", "Elle a réussi grâce à son travail. (نجحت بفضل عملها.)"], ["{a}en raison de{/a}", "+ اسم (سبب رسمي)", "رسمي", "Fermeture en raison des travaux. (إغلاق بسبب الأشغال.)"]],
        fa: [["{a}parce que{/a}", "+ فاعل + فعل (وسط یا پایان)", "رایج", "Je reste parce qu'il pleut. (می‌مانم چون باران می‌بارد.)"], ["{a}car{/a}", "+ فاعل + فعل (پس از ویرگول)", "رسمی / نوشتاری", "Je reste, car il pleut. (می‌مانم، زیرا باران می‌بارد.)"], ["{a}comme{/a}", "فقط در آغاز جمله", "رایج", "Comme il pleut, je reste. (چون باران می‌بارد، می‌مانم.)"], ["{a}puisque{/a}", "+ فاعل + فعل (علت آشکار)", "رایج", "Puisque tu es là, restons. (حالا که اینجایی، بمانیم.)"], ["{a}à cause de{/a}", "+ اسم (بار خنثی/منفی)", "رایج", "Il est en retard à cause du trafic. (به‌خاطر ترافیک دیر کرد.)"], ["{a}grâce à{/a}", "+ اسم (بار مثبت)", "رایج", "Elle a réussi grâce à son travail. (به‌لطف کارش موفق شد.)"], ["{a}en raison de{/a}", "+ اسم (علت رسمی)", "رسمی", "Fermeture en raison des travaux. (تعطیلی به‌دلیل کارهای ساختمانی.)"]],
        ti: [["{a}parce que{/a}", "+ ርእሲ + ግሲ (ማእከል ወይ መወዳእታ)", "ልሙድ", "Je reste parce qu'il pleut. (ዝናብ ስለ ዝዘንብ እጸንሕ።)"], ["{a}car{/a}", "+ ርእሲ + ግሲ (ድሕሪ ኮማ)", "ወግዓዊ / ጽሑፋዊ", "Je reste, car il pleut. (እጸንሕ፣ ከመይሲ ዝናብ ይዘንብ።)"], ["{a}comme{/a}", "ኣብ መጀመርታ ሓረግ ጥራይ", "ልሙድ", "Comme il pleut, je reste. (ዝናብ ስለ ዝዘንብ፣ እጸንሕ።)"], ["{a}puisque{/a}", "+ ርእሲ + ግሲ (ግሉጽ ምኽንያት)", "ልሙድ", "Puisque tu es là, restons. (ኣብዚ ስለ ዘለኻ፣ ንጽናሕ።)"], ["{a}à cause de{/a}", "+ ስም (ገለልተኛ/ኣሉታዊ ትርጉም)", "ልሙድ", "Il est en retard à cause du trafic. (ብሰንኪ ትራፊክ ደንጕዩ።)"], ["{a}grâce à{/a}", "+ ስም (ኣወንታዊ ትርጉም)", "ልሙድ", "Elle a réussi grâce à son travail. (ብሳላ ስራሓ ተዓዊታ።)"], ["{a}en raison de{/a}", "+ ስም (ወግዓዊ ምኽንያት)", "ወግዓዊ", "Fermeture en raison des travaux. (ብሰንኪ ስራሓት ተዓጽዩ።)"]],
        uk: [["{a}parce que{/a}", "+ підмет + дієслово (середина чи кінець)", "поширений", "Je reste parce qu'il pleut. (Я залишаюся, бо йде дощ.)"], ["{a}car{/a}", "+ підмет + дієслово (після коми)", "формальний / письмовий", "Je reste, car il pleut. (Я залишаюся, адже йде дощ.)"], ["{a}comme{/a}", "лише на початку речення", "поширений", "Comme il pleut, je reste. (Оскільки йде дощ, я залишаюся.)"], ["{a}puisque{/a}", "+ підмет + дієслово (очевидна причина)", "поширений", "Puisque tu es là, restons. (Раз ти тут, залишімося.)"], ["{a}à cause de{/a}", "+ іменник (нейтральна/негативна конотація)", "поширений", "Il est en retard à cause du trafic. (Він спізнюється через затори.)"], ["{a}grâce à{/a}", "+ іменник (позитивна конотація)", "поширений", "Elle a réussi grâce à son travail. (Вона досягла успіху завдяки своїй праці.)"], ["{a}en raison de{/a}", "+ іменник (офіційна причина)", "формальний", "Fermeture en raison des travaux. (Зачинено через ремонтні роботи.)"]],
      },
    },
    { type: "heading", text: "Exprimer la conséquence", sub: true, accent: true, trans: { en: "Expressing consequence", ar: "التعبير عن النتيجة", fa: "بیان نتیجه", ti: "ሳዕቤን ምግላጽ", uk: "Вираження наслідку" } },
    {
      type: "text",
      text: "La conséquence exprime {a}ce qui résulte{/a} d'une cause.",
      transText: {
        en: "The consequence expresses {a}what results{/a} from a cause.",
        ar: "النتيجة تعبّر عن {a}ما ينتج{/a} عن سبب.",
        fa: "نتیجه بیان می‌کند {a}آنچه{/a} از یک علت {a}حاصل می‌شود{/a}.",
        ti: "እቲ ሳዕቤን ካብ ሓደ ምኽንያት {a}ዝፍጠር{/a} የገልጽ።",
        uk: "Наслідок виражає {a}те, що випливає{/a} з причини.",
      },
    },
    {
      type: "grid",
      headers: ["Connecteur", "Structure", "Registre", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}donc{/a}", "virgule + donc + sujet + verbe", "courant", "Il pleut, {a}donc{/a} je prends un parapluie."],
        ["{a}alors{/a}", "virgule + alors + sujet + verbe", "familier", "J'ai faim, {a}alors{/a} je mange."],
        ["{a}c'est pourquoi{/a}", "phrase + c'est pourquoi + sujet + verbe", "courant/soutenu", "Il fait froid, {a}c'est pourquoi{/a} je mets un manteau."],
        ["{a}par conséquent{/a}", "phrase + par conséquent + sujet + verbe", "soutenu / écrit", "Il est absent. {a}Par conséquent{/a}, la réunion est annulée."],
        ["{a}du coup{/a}", "virgule + du coup + sujet + verbe", "familier / oral", "Il est parti tôt, {a}du coup{/a} j'ai fini seul."],
        ["{a}si bien que{/a}", "+ sujet + verbe", "soutenu", "Il a beaucoup étudié, {a}si bien qu'{/a}il a réussi."],
      ],
      transHeaders: {
        en: ["Connector", "Structure", "Register", "Example"],
        ar: ["أداة الربط", "البنية", "المستوى", "مثال"],
        fa: ["رابط", "ساختار", "سطح", "مثال"],
        ti: ["መራኸቢ", "ቅርጺ", "ደረጃ", "ኣብነት"],
        uk: ["Сполучник", "Структура", "Регістр", "Приклад"],
      },
      transRows: {
        en: [["{a}donc{/a}", "comma + donc + subject + verb", "common", "Il pleut, {a}donc{/a} je prends un parapluie. (It's raining, so I take an umbrella.)"], ["{a}alors{/a}", "comma + alors + subject + verb", "informal", "J'ai faim, {a}alors{/a} je mange. (I'm hungry, so I eat.)"], ["{a}c'est pourquoi{/a}", "sentence + c'est pourquoi + subject + verb", "common/formal", "Il fait froid, {a}c'est pourquoi{/a} je mets un manteau. (It's cold, that's why I put on a coat.)"], ["{a}par conséquent{/a}", "sentence + par conséquent + subject + verb", "formal / written", "Il est absent. {a}Par conséquent{/a}, la réunion est annulée. (He is absent. Consequently, the meeting is cancelled.)"], ["{a}du coup{/a}", "comma + du coup + subject + verb", "informal / spoken", "Il est parti tôt, {a}du coup{/a} j'ai fini seul. (He left early, so I finished alone.)"], ["{a}si bien que{/a}", "+ subject + verb", "formal", "Il a beaucoup étudié, {a}si bien qu'{/a}il a réussi. (He studied a lot, so much so that he passed.)"]],
        ar: [["{a}donc{/a}", "فاصلة + donc + الفاعل + الفعل", "شائع", "Il pleut, {a}donc{/a} je prends un parapluie. (إنها تمطر، لذلك آخذ مظلة.)"], ["{a}alors{/a}", "فاصلة + alors + الفاعل + الفعل", "عامّي", "J'ai faim, {a}alors{/a} je mange. (أنا جائع، إذن آكل.)"], ["{a}c'est pourquoi{/a}", "جملة + c'est pourquoi + الفاعل + الفعل", "شائع/رسمي", "Il fait froid, {a}c'est pourquoi{/a} je mets un manteau. (الجو بارد، لهذا أرتدي معطفاً.)"], ["{a}par conséquent{/a}", "جملة + par conséquent + الفاعل + الفعل", "رسمي / كتابي", "Il est absent. {a}Par conséquent{/a}, la réunion est annulée. (هو غائب. بناءً عليه، أُلغي الاجتماع.)"], ["{a}du coup{/a}", "فاصلة + du coup + الفاعل + الفعل", "عامّي / محكي", "Il est parti tôt, {a}du coup{/a} j'ai fini seul. (غادر مبكراً، فأنهيت وحدي.)"], ["{a}si bien que{/a}", "+ الفاعل + الفعل", "رسمي", "Il a beaucoup étudié, {a}si bien qu'{/a}il a réussi. (درس كثيراً حتى نجح.)"]],
        fa: [["{a}donc{/a}", "ویرگول + donc + فاعل + فعل", "رایج", "Il pleut, {a}donc{/a} je prends un parapluie. (باران می‌بارد، پس چتر برمی‌دارم.)"], ["{a}alors{/a}", "ویرگول + alors + فاعل + فعل", "غیررسمی", "J'ai faim, {a}alors{/a} je mange. (گرسنه‌ام، پس می‌خورم.)"], ["{a}c'est pourquoi{/a}", "جمله + c'est pourquoi + فاعل + فعل", "رایج/رسمی", "Il fait froid, {a}c'est pourquoi{/a} je mets un manteau. (هوا سرد است، به همین دلیل پالتو می‌پوشم.)"], ["{a}par conséquent{/a}", "جمله + par conséquent + فاعل + فعل", "رسمی / نوشتاری", "Il est absent. {a}Par conséquent{/a}, la réunion est annulée. (او غایب است. در نتیجه، جلسه لغو شد.)"], ["{a}du coup{/a}", "ویرگول + du coup + فاعل + فعل", "غیررسمی / گفتاری", "Il est parti tôt, {a}du coup{/a} j'ai fini seul. (زود رفت، در نتیجه تنها تمام کردم.)"], ["{a}si bien que{/a}", "+ فاعل + فعل", "رسمی", "Il a beaucoup étudié, {a}si bien qu'{/a}il a réussi. (آن‌قدر درس خواند که قبول شد.)"]],
        ti: [["{a}donc{/a}", "ኮማ + donc + ርእሲ + ግሲ", "ልሙድ", "Il pleut, {a}donc{/a} je prends un parapluie. (ዝናብ ይዘንብ፣ ስለዚ ጽላል እወስድ።)"], ["{a}alors{/a}", "ኮማ + alors + ርእሲ + ግሲ", "ህዝባዊ", "J'ai faim, {a}alors{/a} je mange. (ጠምየ፣ ስለዚ እበልዕ።)"], ["{a}c'est pourquoi{/a}", "ሓረግ + c'est pourquoi + ርእሲ + ግሲ", "ልሙድ/ወግዓዊ", "Il fait froid, {a}c'est pourquoi{/a} je mets un manteau. (ቆሪሩ፣ በዚ ምኽንያት ካፖርት እኽደን።)"], ["{a}par conséquent{/a}", "ሓረግ + par conséquent + ርእሲ + ግሲ", "ወግዓዊ / ጽሑፋዊ", "Il est absent. {a}Par conséquent{/a}, la réunion est annulée. (ንሱ ኣይተረኽበን። በዚ ምኽንያት፣ እቲ ኣኼባ ተሰሪዙ።)"], ["{a}du coup{/a}", "ኮማ + du coup + ርእሲ + ግሲ", "ህዝባዊ / ኣፋዊ", "Il est parti tôt, {a}du coup{/a} j'ai fini seul. (ቀልጢፉ ከይዱ፣ ስለዚ በይነይ ወዲአ።)"], ["{a}si bien que{/a}", "+ ርእሲ + ግሲ", "ወግዓዊ", "Il a beaucoup étudié, {a}si bien qu'{/a}il a réussi. (ብዙሕ ኣጽኒዑ፣ ክሳብ ዝዕወት።)"]],
        uk: [["{a}donc{/a}", "кома + donc + підмет + дієслово", "поширений", "Il pleut, {a}donc{/a} je prends un parapluie. (Іде дощ, тож я беру парасольку.)"], ["{a}alors{/a}", "кома + alors + підмет + дієслово", "розмовний", "J'ai faim, {a}alors{/a} je mange. (Я голодний, тож я їм.)"], ["{a}c'est pourquoi{/a}", "речення + c'est pourquoi + підмет + дієслово", "поширений/формальний", "Il fait froid, {a}c'est pourquoi{/a} je mets un manteau. (Холодно, ось чому я вдягаю пальто.)"], ["{a}par conséquent{/a}", "речення + par conséquent + підмет + дієслово", "формальний / письмовий", "Il est absent. {a}Par conséquent{/a}, la réunion est annulée. (Він відсутній. Отже, зустріч скасовано.)"], ["{a}du coup{/a}", "кома + du coup + підмет + дієслово", "розмовний / усний", "Il est parti tôt, {a}du coup{/a} j'ai fini seul. (Він пішов рано, тож я закінчив сам.)"], ["{a}si bien que{/a}", "+ підмет + дієслово", "формальний", "Il a beaucoup étudié, {a}si bien qu'{/a}il a réussi. (Він багато вчився, так що склав іспит.)"]],
      },
    },
    {
      type: "text",
      label: "À cause de vs Grâce à",
      transLabel: { en: "À cause de vs Grâce à", ar: "À cause de مقابل Grâce à", fa: "À cause de در برابر Grâce à", ti: "À cause de ኣንጻር Grâce à", uk: "À cause de проти Grâce à" },
      items: [
        "{a}À cause de{/a} → connotation {a}négative{/a} : Il a échoué {a}à cause de{/a} sa paresse.",
        "{a}Grâce à{/a} → connotation {a}positive{/a} : Il a réussi {a}grâce à{/a} ses efforts.",
        "Les deux sont suivis d'un nom ou d'un pronom tonique.",
      ],
      transItems: {
        en: ["{a}À cause de{/a} → {a}negative{/a} connotation: Il a échoué {a}à cause de{/a} sa paresse. (He failed because of his laziness.)", "{a}Grâce à{/a} → {a}positive{/a} connotation: Il a réussi {a}grâce à{/a} ses efforts. (He succeeded thanks to his efforts.)", "Both are followed by a noun or a stressed pronoun."],
        ar: ["{a}À cause de{/a} → دلالة {a}سلبية{/a}: Il a échoué {a}à cause de{/a} sa paresse. (فشل بسبب كسله.)", "{a}Grâce à{/a} → دلالة {a}إيجابية{/a}: Il a réussi {a}grâce à{/a} ses efforts. (نجح بفضل جهوده.)", "كلاهما يتبعه اسم أو ضمير منفصل."],
        fa: ["{a}À cause de{/a} → بار {a}منفی{/a}: Il a échoué {a}à cause de{/a} sa paresse. (به‌خاطر تنبلی‌اش شکست خورد.)", "{a}Grâce à{/a} → بار {a}مثبت{/a}: Il a réussi {a}grâce à{/a} ses efforts. (به‌لطف تلاش‌هایش موفق شد.)", "هر دو با یک اسم یا ضمیر تأکیدی می‌آیند."],
        ti: ["{a}À cause de{/a} → {a}ኣሉታዊ{/a} ትርጉም: Il a échoué {a}à cause de{/a} sa paresse. (ብሰንኪ ህኩይነቱ ወዲቑ።)", "{a}Grâce à{/a} → {a}ኣወንታዊ{/a} ትርጉም: Il a réussi {a}grâce à{/a} ses efforts. (ብሳላ ጻዕሩ ተዓዊቱ።)", "ክልቲኦም ብስም ወይ ብጽዑቕ ተውላጠ-ስም ይስዕቡ።"],
        uk: ["{a}À cause de{/a} → {a}негативна{/a} конотація: Il a échoué {a}à cause de{/a} sa paresse. (Він провалився через свої лінощі.)", "{a}Grâce à{/a} → {a}позитивна{/a} конотація: Il a réussi {a}grâce à{/a} ses efforts. (Він досяг успіху завдяки своїм зусиллям.)", "Обидва йдуть із іменником або наголошеним займенником."],
      },
      noBulletItems: [0],
    },
    { type: "heading", text: "Construire un raisonnement", sub: true, accent: true, trans: { en: "Building an argument", ar: "بناء استدلال", fa: "ساختن یک استدلال", ti: "ምስ ምኽንያት ምህናጽ", uk: "Побудова міркування" } },
    {
      type: "grid",
      headers: ["Structure", "Exemple"],
      rows: [
        ["Cause → conséquence", "Il pleut {a}donc{/a} je reste."],
        ["Conséquence ← cause", "Je reste {a}parce qu'{/a}il pleut."],
        ["Cause + conséquence liées", "{a}Comme{/a} il pleut, {a}c'est pourquoi{/a} je reste."],
      ],
      transHeaders: {
        en: ["Structure", "Example"],
        ar: ["البنية", "مثال"],
        fa: ["ساختار", "مثال"],
        ti: ["ቅርጺ", "ኣብነት"],
        uk: ["Структура", "Приклад"],
      },
      transRows: {
        en: [["Cause → consequence", "Il pleut {a}donc{/a} je reste. (It's raining so I'm staying.)"], ["Consequence ← cause", "Je reste {a}parce qu'{/a}il pleut. (I'm staying because it's raining.)"], ["Cause + consequence linked", "{a}Comme{/a} il pleut, {a}c'est pourquoi{/a} je reste. (As it's raining, that's why I'm staying.)"]],
        ar: [["السبب → النتيجة", "Il pleut {a}donc{/a} je reste. (إنها تمطر لذلك أبقى.)"], ["النتيجة ← السبب", "Je reste {a}parce qu'{/a}il pleut. (أبقى لأنها تمطر.)"], ["السبب + النتيجة مرتبطان", "{a}Comme{/a} il pleut, {a}c'est pourquoi{/a} je reste. (بما أنها تمطر، لهذا أبقى.)"]],
        fa: [["علت → نتیجه", "Il pleut {a}donc{/a} je reste. (باران می‌بارد پس می‌مانم.)"], ["نتیجه ← علت", "Je reste {a}parce qu'{/a}il pleut. (می‌مانم چون باران می‌بارد.)"], ["علت + نتیجهٔ پیوسته", "{a}Comme{/a} il pleut, {a}c'est pourquoi{/a} je reste. (چون باران می‌بارد، به همین دلیل می‌مانم.)"]],
        ti: [["ምኽንያት → ሳዕቤን", "Il pleut {a}donc{/a} je reste. (ዝናብ ይዘንብ ስለዚ እጸንሕ።)"], ["ሳዕቤን ← ምኽንያት", "Je reste {a}parce qu'{/a}il pleut. (ዝናብ ስለ ዝዘንብ እጸንሕ።)"], ["ምኽንያትን ሳዕቤንን ዝተኣሳሰሩ", "{a}Comme{/a} il pleut, {a}c'est pourquoi{/a} je reste. (ዝናብ ስለ ዝዘንብ፣ በዚ ምኽንያት እጸንሕ።)"]],
        uk: [["Причина → наслідок", "Il pleut {a}donc{/a} je reste. (Іде дощ, тож я залишаюся.)"], ["Наслідок ← причина", "Je reste {a}parce qu'{/a}il pleut. (Я залишаюся, бо йде дощ.)"], ["Причина + наслідок пов'язані", "{a}Comme{/a} il pleut, {a}c'est pourquoi{/a} je reste. (Оскільки йде дощ, ось чому я залишаюся.)"]],
      },
    },
    { type: "heading", text: "Autres connecteurs utiles", sub: true, accent: true, trans: { en: "Other useful connectors", ar: "أدوات ربط أخرى مفيدة", fa: "رابط‌های مفید دیگر", ti: "ካልኦት ጠቐሚ መራኸቢታት", uk: "Інші корисні сполучники" } },
    {
      type: "text",
      noBulletItems: [0],
      label: "Énumération",
      items: [
        "{a}d'abord{/a}, {a}après{/a}, {a}ensuite{/a}, {a}enfin{/a}",
        "Exemple : {a}D'abord{/a}, j'ai pris ma douche. {a}Après{/a}, je me suis rasé. {a}Ensuite{/a}, j'ai déjeuné. {a}Enfin{/a}, je suis allé au travail.",
      ],
      transItems: {
        en: ["{a}d'abord{/a}, {a}après{/a}, {a}ensuite{/a}, {a}enfin{/a}", "Example: {a}First{/a} I showered. {a}Then{/a} I shaved. {a}Next{/a} I had breakfast. {a}Finally{/a} I went to work."],
        ar: ["{a}d'abord{/a}, {a}après{/a}, {a}ensuite{/a}, {a}enfin{/a}", "مثال على ترتيب الأحداث."],
        fa: ["{a}d'abord{/a}, {a}après{/a}, {a}ensuite{/a}, {a}enfin{/a}", "مثال برای ترتیب رویدادها."],
        ti: ["{a}d'abord{/a}, {a}après{/a}, {a}ensuite{/a}, {a}enfin{/a}", "ኣብነት ናይ ተኻታዊ ፍጻመታት።"],
        uk: ["{a}d'abord{/a}, {a}après{/a}, {a}ensuite{/a}, {a}enfin{/a}", "Приклад послідовності подій."],
      },
    },
    {
      type: "text",
      noBulletItems: [0],
      label: "Opposition",
      items: [
        "{a}mais{/a}",
        "Exemple : J'accepte ton invitation, {a}mais{/a} j'arriverai chez toi à 21 h.",
      ],
      transItems: {
        en: ["{a}mais{/a} (but)", "Example: I accept your invitation, {a}but{/a} I'll arrive at 9 p.m."],
        ar: ["{a}mais{/a}", "مثال على التعارض."],
        fa: ["{a}mais{/a}", "مثال تضاد."],
        ti: ["{a}mais{/a}", "ኣብነት ተቓውማ።"],
        uk: ["{a}mais{/a}", "Приклад протиставлення."],
      },
    },
    {
      type: "text",
      noBulletItems: [0],
      label: "Addition",
      items: [
        "{a}et{/a}, {a}alors{/a}",
        "Exemple : Appelle-moi ! {a}Alors{/a} nous pourrons organiser la fête {a}et{/a} choisir un cadeau pour Mathilde.",
      ],
      transItems: {
        en: ["{a}et{/a}, {a}alors{/a}", "Example: Call me! {a}Then{/a} we can plan the party {a}and{/a} choose a gift for Mathilde."],
        ar: ["{a}et{/a}, {a}alors{/a}", "مثال على الإضافة."],
        fa: ["{a}et{/a}, {a}alors{/a}", "مثال افزودن."],
        ti: ["{a}et{/a}, {a}alors{/a}", "ኣብነት ወሰኽ።"],
        uk: ["{a}et{/a}, {a}alors{/a}", "Приклад додавання."],
      },
    },
  ],
  exercises: [],
};
