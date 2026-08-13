import type { GrammarLesson } from "../../grammar-data";

/** G12.3 — Le pronom complément en, enrichi avec G19.19 (Y et EN) */
export const A1_GR_PRONOM_EN: GrammarLesson = {
  slug: "a1-gr-pronom-en",
  code: "G12.3",
  level: "A1",
  title: "Le pronom complément en",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "{a}En{/a} remplace un nom (personne ou chose) précédé d'une expression de quantité. Seul ou suivi d'une quantité.",
        "Articles partitifs / indéfinis ({a}du, de la, de l', un, une, des{/a}). → Tu veux du café ? — J'en veux bien.",
        "Nombres. → J'ai deux frères, et toi ? — J'en ai trois.",
        "Adverbes ou noms de quantité ({a}beaucoup de, un peu de, trop de, un kilo de…{/a}). → Il y a beaucoup d'invités → Il y en a beaucoup. ; J'ai acheté un paquet de café → J'en ai acheté un.",
        "Réponse fréquente à {a}combien de… ?{/a} → Tu mets combien d'œufs ? — J'en mets quatre.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Place et structure",
    },
    {
      type: "text",
      items: [
        "Devant le verbe ou l'auxiliaire. → Oui, j'en ai trois. ; Il en a invité sept.",
        "Avec deux verbes : devant l'infinitif. → Il va en inviter trois.",
      ],
    },
    {
      type: "note",
      text: "Négation : Je n'en ai pas. ; Elle n'en a pas acheté. ; Il ne va pas en acheter.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "text",
      items: [
        "Liaison devant voyelle ou {a}h{/a} muet. → J'en ai beaucoup. ; J'en organise souvent.",
        "À l'oral, le {a}ne{/a} de la négation tombe souvent. → J'en ai pas. ; Il y en a pas.",
      ],
    },
    { type: "heading", text: "Le pronom Y", trans: { en: "The pronoun Y", ar: "الضمير Y", fa: "ضمیر Y", ti: "ተውላጠ-ስም Y", uk: "Займенник Y" } },
    {
      type: "text",
      allBullets: true,
      text: "{a}Y{/a} remplace un lieu ou un groupe {a}à + chose{/a} (verbes construits avec à).",
      transText: {
        en: "{a}Y{/a} replaces a place or a group {a}à + thing{/a} (verbs built with à).",
        ar: "{a}Y{/a} يحلّ محل مكان أو مجموعة {a}à + شيء{/a} (أفعال تُبنى مع à).",
        fa: "{a}Y{/a} جای یک مکان یا گروه {a}à + چیز{/a} را می‌گیرد (افعالی که با à ساخته می‌شوند).",
        ti: "{a}Y{/a} ቦታ ወይ {a}à + ነገር{/a} ጉጅለ ይትክእ (ብ à ዝቐውሙ ግስታት)።",
        uk: "{a}Y{/a} замінює місце або групу {a}à + річ{/a} (дієслова з à).",
      },
      items: [
        "Il répond à la question : {a}où ?{/a} ou {a}à quoi ?{/a}",
      ],
      transItems: {
        en: [
          "It answers the question: {a}where?{/a} or {a}to what?{/a}",
        ],
        ar: [
          "يجيب عن السؤال: {a}أين؟{/a} أو {a}إلى ماذا؟{/a}",
        ],
        fa: [
          "به پرسش پاسخ می‌دهد: {a}کجا؟{/a} یا {a}به چه چیزی؟{/a}",
        ],
        ti: [
          "ነዚ ሕቶ ይምልስ: {a}ኣበይ?{/a} ወይ {a}ናብ ምንታይ?{/a}",
        ],
        uk: [
          "Відповідає на питання: {a}де?{/a} або {a}до чого?{/a}",
        ],
      },
    },
    {
      type: "grid",
      headers: ["Ce que Y remplace", "Phrase originale", "→ Avec Y"],
      boldFirstCol: true,
      rows: [
        ["Lieu ({a}à / en / dans…{/a})", "Je vais à Paris.", "J'{a}y{/a} vais."],
        ["Lieu ({a}à / en / dans…{/a})", "Il est à la maison.", "Il {a}y{/a} est."],
        ["Chose ({a}à + nom{/a})", "Je pense à ce projet.", "J'{a}y{/a} pense."],
        ["Chose ({a}à + nom{/a})", "Tu réponds à cette question ?", "Tu {a}y{/a} réponds ?"],
      ],
      transHeaders: {
        en: ["What Y replaces", "Original sentence", "→ With Y"],
        ar: ["ما يحلّ محله Y", "الجملة الأصلية", "→ مع Y"],
        fa: ["آنچه Y جایگزین می‌کند", "جملهٔ اصلی", "→ با Y"],
        ti: ["Y ዝትክኦ", "በዓል መበቆል ሓረግ", "→ ምስ Y"],
        uk: ["Що замінює Y", "Початкове речення", "→ Із Y"],
      },
      transRows: {
        en: [["Place ({a}à / en / dans…{/a})", "Je vais à Paris. (I go to Paris.)", "J'{a}y{/a} vais. (I go there.)"], ["Place ({a}à / en / dans…{/a})", "Il est à la maison. (He is at home.)", "Il {a}y{/a} est. (He is there.)"], ["Thing ({a}à + noun{/a})", "Je pense à ce projet. (I think about this project.)", "J'{a}y{/a} pense. (I think about it.)"], ["Thing ({a}à + noun{/a})", "Tu réponds à cette question ? (Do you answer this question?)", "Tu {a}y{/a} réponds ? (Do you answer it?)"]],
        ar: [["مكان ({a}à / en / dans…{/a})", "Je vais à Paris. (أذهب إلى باريس.)", "J'{a}y{/a} vais. (أذهب إلى هناك.)"], ["مكان ({a}à / en / dans…{/a})", "Il est à la maison. (هو في البيت.)", "Il {a}y{/a} est. (هو هناك.)"], ["شيء ({a}à + اسم{/a})", "Je pense à ce projet. (أفكّر في هذا المشروع.)", "J'{a}y{/a} pense. (أفكّر فيه.)"], ["شيء ({a}à + اسم{/a})", "Tu réponds à cette question ? (هل تجيب عن هذا السؤال؟)", "Tu {a}y{/a} réponds ? (هل تجيب عنه؟)"]],
        fa: [["مکان ({a}à / en / dans…{/a})", "Je vais à Paris. (به پاریس می‌روم.)", "J'{a}y{/a} vais. (به آنجا می‌روم.)"], ["مکان ({a}à / en / dans…{/a})", "Il est à la maison. (او در خانه است.)", "Il {a}y{/a} est. (او آنجاست.)"], ["چیز ({a}à + اسم{/a})", "Je pense à ce projet. (به این پروژه فکر می‌کنم.)", "J'{a}y{/a} pense. (به آن فکر می‌کنم.)"], ["چیز ({a}à + اسم{/a})", "Tu réponds à cette question ? (به این پرسش پاسخ می‌دهی؟)", "Tu {a}y{/a} réponds ? (به آن پاسخ می‌دهی؟)"]],
        ti: [["ቦታ ({a}à / en / dans…{/a})", "Je vais à Paris. (ናብ ፓሪስ እኸይድ።)", "J'{a}y{/a} vais. (ናብኡ እኸይድ።)"], ["ቦታ ({a}à / en / dans…{/a})", "Il est à la maison. (ንሱ ኣብ ገዛ እዩ።)", "Il {a}y{/a} est. (ንሱ ኣብኡ እዩ።)"], ["ነገር ({a}à + ስም{/a})", "Je pense à ce projet. (ብዛዕባ እዚ ፕሮጀክት እሓስብ።)", "J'{a}y{/a} pense. (ብዛዕባኡ እሓስብ።)"], ["ነገር ({a}à + ስም{/a})", "Tu réponds à cette question ? (ነዚ ሕቶ ትምልስ ዶ?)", "Tu {a}y{/a} réponds ? (ንዕኡ ትምልስ ዶ?)"]],
        uk: [["Місце ({a}à / en / dans…{/a})", "Je vais à Paris. (Я їду до Парижа.)", "J'{a}y{/a} vais. (Я туди їду.)"], ["Місце ({a}à / en / dans…{/a})", "Il est à la maison. (Він удома.)", "Il {a}y{/a} est. (Він там.)"], ["Річ ({a}à + іменник{/a})", "Je pense à ce projet. (Я думаю про цей проєкт.)", "J'{a}y{/a} pense. (Я про нього думаю.)"], ["Річ ({a}à + іменник{/a})", "Tu réponds à cette question ? (Ти відповідаєш на це питання?)", "Tu {a}y{/a} réponds ? (Ти на нього відповідаєш?)"]],
      },
    },
    {
      type: "text",
      label: "Attention : Y ne remplace pas une personne",
      transLabel: { en: "Careful: Y does not replace a person", ar: "انتبه: Y لا يحلّ محل شخص", fa: "توجه: Y جایگزین شخص نمی‌شود", ti: "ጥንቃቐ: Y ንሰብ ኣይትክእን", uk: "Увага: Y не замінює людину" },
      items: [
        "Je pense à Paul → Je pense {a}à lui{/a}. (pas : J'y pense)",
        "Pour les personnes, on utilise {a}à lui / à elle / à eux{/a}.",
        "Pour les choses et les lieux : {a}y{/a}.",
      ],
      transItems: {
        en: ["Je pense à Paul → Je pense {a}à lui{/a}. (I think about Paul → I think about him.) (not: J'y pense)", "For people, we use {a}à lui / à elle / à eux{/a}.", "For things and places: {a}y{/a}."],
        ar: ["Je pense à Paul → Je pense {a}à lui{/a}. (أفكّر في بول → أفكّر فيه.) (لا: J'y pense)", "للأشخاص نستعمل {a}à lui / à elle / à eux{/a}.", "للأشياء والأماكن: {a}y{/a}."],
        fa: ["Je pense à Paul → Je pense {a}à lui{/a}. (به پل فکر می‌کنم → به او فکر می‌کنم.) (نه: J'y pense)", "برای اشخاص از {a}à lui / à elle / à eux{/a} استفاده می‌کنیم.", "برای چیزها و مکان‌ها: {a}y{/a}."],
        ti: ["Je pense à Paul → Je pense {a}à lui{/a}. (ብዛዕባ ጳውሎስ እሓስብ → ብዛዕባኡ እሓስብ።) (ኣይኮነን: J'y pense)", "ንሰባት {a}à lui / à elle / à eux{/a} ንጥቀም።", "ንነገራትን ቦታታትን: {a}y{/a}።"],
        uk: ["Je pense à Paul → Je pense {a}à lui{/a}. (Я думаю про Поля → Я думаю про нього.) (не: J'y pense)", "Для людей вживаємо {a}à lui / à elle / à eux{/a}.", "Для речей і місць: {a}y{/a}."],
      },
      bulletItems: [1, 2],
    },
    { type: "heading", text: "Le pronom EN", sub: true, accent: true, trans: { en: "The pronoun EN", ar: "الضمير EN", fa: "ضمیر EN", ti: "ተውላጠ-ስም EN", uk: "Займенник EN" } },
    {
      type: "text",
      allBullets: true,
      text: "{a}EN{/a} remplace un groupe {a}de + nom{/a} ou un nom avec article partitif / indéfini.",
      transText: {
        en: "{a}EN{/a} replaces a group {a}de + noun{/a} or a noun with a partitive / indefinite article.",
        ar: "{a}EN{/a} يحلّ محل مجموعة {a}de + اسم{/a} أو اسم بأداة تجزئة / نكرة.",
        fa: "{a}EN{/a} جای گروه {a}de + اسم{/a} یا اسمی با حرف تعریف جزئی / نکره را می‌گیرد.",
        ti: "{a}EN{/a} {a}de + ስም{/a} ጉጅለ ወይ ብኸፋላዊ / ዘይተወሰነ ኣርቲክል ዘለዎ ስም ይትክእ።",
        uk: "{a}EN{/a} замінює групу {a}de + іменник{/a} або іменник із частковим / неозначеним артиклем.",
      },
      items: [
        "Il répond à la question : {a}de quoi ? combien ?{/a}",
      ],
      transItems: {
        en: [
          "It answers the question: {a}of what? how many?{/a}",
        ],
        ar: [
          "يجيب عن السؤال: {a}من ماذا؟ كم؟{/a}",
        ],
        fa: [
          "به پرسش پاسخ می‌دهد: {a}از چه چیزی؟ چند تا؟{/a}",
        ],
        ti: [
          "ነዚ ሕቶ ይምልስ: {a}ካብ ምንታይ? ክንደይ?{/a}",
        ],
        uk: [
          "Відповідає на питання: {a}чого? скільки?{/a}",
        ],
      },
    },
    {
      type: "grid",
      headers: ["Ce que EN remplace", "Phrase originale", "→ Avec EN"],
      boldFirstCol: true,
      rows: [
        ["Partitif (du / de la / de l')", "Je mange du pain.", "J'{a}en{/a} mange."],
        ["Article indéfini (des / un / une)", "J'ai des amis.", "J'{a}en{/a} ai."],
        ["un / une (affirmatif)", "As-tu un ordinateur ?", "Oui, j'{a}en{/a} ai {a}un{/a}."],
        ["un / une (négatif)", "As-tu un ordinateur ?", "Non, je n'{a}en{/a} ai pas."],
        ["De + nom (verbe + de)", "J'ai besoin de temps.", "J'{a}en{/a} ai besoin."],
        ["Verbe + de (instrument)", "Je joue du violon.", "Ça fait combien de temps que tu {a}en{/a} joues ?"],
        ["De + lieu", "Je reviens de Paris.", "J'{a}en{/a} reviens."],
      ],
      transHeaders: {
        en: ["What EN replaces", "Original sentence", "→ With EN"],
        ar: ["ما يحلّ محله EN", "الجملة الأصلية", "→ مع EN"],
        fa: ["آنچه EN جایگزین می‌کند", "جملهٔ اصلی", "→ با EN"],
        ti: ["EN ዝትክኦ", "በዓል መበቆል ሓረግ", "→ ምስ EN"],
        uk: ["Що замінює EN", "Початкове речення", "→ Із EN"],
      },
      transRows: {
        en: [["Partitive (du / de la / de l')", "Je mange du pain. (I eat bread.)", "J'{a}en{/a} mange. (I eat some.)"], ["Indefinite article (des / un / une)", "J'ai des amis. (I have friends.)", "J'{a}en{/a} ai. (I have some.)"], ["un / une (affirmative)", "As-tu un ordinateur ? (Do you have a computer?)", "Oui, j'{a}en{/a} ai {a}un{/a}. (Yes, I have one.)"], ["un / une (negative)", "As-tu un ordinateur ?", "Non, je n'{a}en{/a} ai pas."], ["De + noun (verb + de)", "J'ai besoin de temps. (I need time.)", "J'{a}en{/a} ai besoin. (I need some.)"], ["Verb + de (instrument)", "Je joue du violon. (I play the violin.)", "Ça fait combien de temps que tu {a}en{/a} joues ?"], ["De + place", "Je reviens de Paris. (I come back from Paris.)", "J'{a}en{/a} reviens. (I come back from there.)"]],
        ar: [["تجزئة (du / de la / de l')", "Je mange du pain. (آكل خبزاً.)", "J'{a}en{/a} mange. (آكل منه.)"], ["أداة نكرة (des / un / une)", "J'ai des amis. (لديّ أصدقاء.)", "J'{a}en{/a} ai. (لديّ منهم.)"], ["un / une (مثبت)", "As-tu un ordinateur ?", "Oui, j'{a}en{/a} ai {a}un{/a}."], ["un / une (منفي)", "As-tu un ordinateur ?", "Non, je n'{a}en{/a} ai pas."], ["De + اسم (فعل + de)", "J'ai besoin de temps. (أحتاج إلى وقت.)", "J'{a}en{/a} ai besoin. (أحتاج إليه.)"], ["فعل + de", "Je joue du violon.", "Ça fait combien de temps que tu {a}en{/a} joues ?"], ["De + مكان", "Je reviens de Paris. (أعود من باريس.)", "J'{a}en{/a} reviens. (أعود منها.)"]],
        fa: [["جزئی (du / de la / de l')", "Je mange du pain. (نان می‌خورم.)", "J'{a}en{/a} mange. (مقداری از آن می‌خورم.)"], ["حرف نکره (des / un / une)", "J'ai des amis. (دوستانی دارم.)", "J'{a}en{/a} ai. (تعدادی دارم.)"], ["un / une (مثبت)", "As-tu un ordinateur ?", "Oui, j'{a}en{/a} ai {a}un{/a}."], ["un / une (منفی)", "As-tu un ordinateur ?", "Non, je n'{a}en{/a} ai pas."], ["De + اسم (فعل + de)", "J'ai besoin de temps. (به زمان نیاز دارم.)", "J'{a}en{/a} ai besoin. (به آن نیاز دارم.)"], ["فعل + de", "Je joue du violon.", "Ça fait combien de temps que tu {a}en{/a} joues ?"], ["De + مکان", "Je reviens de Paris. (از پاریس برمی‌گردم.)", "J'{a}en{/a} reviens. (از آنجا برمی‌گردم.)"]],
        ti: [["ኸፋላዊ (du / de la / de l')", "Je mange du pain. (ባኒ እበልዕ።)", "J'{a}en{/a} mange. (ካብኡ እበልዕ።)"], ["ዘይተወሰነ ኣርቲክል (des / un / une)", "J'ai des amis. (ኣዕሩኽ ኣለዉኒ።)", "J'{a}en{/a} ai. (ገሊኦም ኣለዉኒ።)"], ["un / une (ኣረጋጋጺ)", "As-tu un ordinateur ?", "Oui, j'{a}en{/a} ai {a}un{/a}."], ["un / une (ኣሉታዊ)", "As-tu un ordinateur ?", "Non, je n'{a}en{/a} ai pas."], ["De + ስም (ግሲ + de)", "J'ai besoin de temps. (ግዜ የድልየኒ።)", "J'{a}en{/a} ai besoin. (ንዕኡ የድልየኒ።)"], ["ግሲ + de", "Je joue du violon.", "Ça fait combien de temps que tu {a}en{/a} joues ?"], ["De + ቦታ", "Je reviens de Paris. (ካብ ፓሪስ እምለስ።)", "J'{a}en{/a} reviens. (ካብኡ እምለስ።)"]],
        uk: [["Частковий (du / de la / de l')", "Je mange du pain. (Я їм хліб.)", "J'{a}en{/a} mange. (Я їм трохи.)"], ["Неозначений артикль (des / un / une)", "J'ai des amis. (У мене є друзі.)", "J'{a}en{/a} ai. (У мене є кілька.)"], ["un / une (ствердження)", "As-tu un ordinateur ?", "Oui, j'{a}en{/a} ai {a}un{/a}."], ["un / une (заперечення)", "As-tu un ordinateur ?", "Non, je n'{a}en{/a} ai pas."], ["De + іменник (дієслово + de)", "J'ai besoin de temps. (Мені потрібен час.)", "J'{a}en{/a} ai besoin. (Мені це потрібно.)"], ["Дієслово + de", "Je joue du violon.", "Ça fait combien de temps que tu {a}en{/a} joues ?"], ["De + місце", "Je reviens de Paris. (Я повертаюся з Парижа.)", "J'{a}en{/a} reviens. (Я звідти повертаюся.)"]],
      },
    },
    {
      type: "text",
      allBullets: true,
      label: "Avec un / une : affirmatif vs négatif",
      items: [
        "À la forme affirmative ou interrogative, on peut répéter {a}un{/a} ou {a}une{/a} : Oui, j'en ai {a}un{/a}.",
        "À la forme négative, on ne répète pas : Non, je n'en ai pas.",
      ],
      transLabel: { en: "With un / une: affirmative vs negative", ar: "مع un / une: المثبت والمنفي", fa: "با un / une: مثبت و منفی", ti: "ምስ un / une: ኣረጋጋጺን ኣሉታዊን", uk: "З un / une: стверджувальна та заперечна форми" },
      transItems: {
        en: ["In the affirmative or interrogative, you can repeat {a}un{/a} or {a}une{/a}: Oui, j'en ai {a}un{/a}.", "In the negative, do not repeat: Non, je n'en ai pas."],
        ar: ["في المثبت أو الاستفهام، يمكن تكرار {a}un{/a} أو {a}une{/a}.", "في المنفي، لا نكرّر."],
        fa: ["در مثبت یا پرسشی، می‌توان {a}un{/a} یا {a}une{/a} را تکرار کرد.", "در منفی، تکرار نمی‌شود."],
        ti: ["ኣብ ኣረጋጋጺ ወይ ሕቶ፣ {a}un{/a} ወይ {a}une{/a} ክትድገም ይኽእል።", "ኣብ ኣሉታዊ፣ ኣይትድገምን።"],
        uk: ["У ствердженні чи питанні можна повторити {a}un{/a} або {a}une{/a}.", "У запереченні не повторюють."],
      },
    },
    {
      type: "text",
      text: "Avec une quantité, on garde le {a}chiffre ou l'adverbe de quantité{/a} après le verbe.",
      transText: {
        en: "With a quantity, we keep the {a}number or quantity adverb{/a} after the verb.",
        ar: "مع الكمية، نُبقي {a}الرقم أو ظرف الكمية{/a} بعد الفعل.",
        fa: "با یک کمیت، {a}عدد یا قید مقدار{/a} را پس از فعل نگه می‌داریم.",
        ti: "ምስ መጠን፣ {a}ቁጽሪ ወይ ናይ መጠን ተወሳኺ{/a} ድሕሪ እቲ ግሲ ነቐምጥ።",
        uk: "З кількістю ми залишаємо {a}число чи прислівник кількості{/a} після дієслова.",
      },
    },
    {
      type: "grid",
      headers: ["Phrase originale", "→ Avec EN"],
      rows: [
        ["J'ai deux chiens.", "J'{a}en{/a} ai {a}deux{/a}."],
        ["Je veux un café.", "J'{a}en{/a} veux {a}un{/a}."],
        ["Elle a beaucoup de travail.", "Elle {a}en{/a} a {a}beaucoup{/a}."],
      ],
      transHeaders: {
        en: ["Original sentence", "→ With EN"],
        ar: ["الجملة الأصلية", "→ مع EN"],
        fa: ["جملهٔ اصلی", "→ با EN"],
        ti: ["በዓል መበቆል ሓረግ", "→ ምስ EN"],
        uk: ["Початкове речення", "→ Із EN"],
      },
      transRows: {
        en: [["J'ai deux chiens. (I have two dogs.)", "J'{a}en{/a} ai {a}deux{/a}. (I have two of them.)"], ["Je veux un café. (I want a coffee.)", "J'{a}en{/a} veux {a}un{/a}. (I want one.)"], ["Elle a beaucoup de travail. (She has a lot of work.)", "Elle {a}en{/a} a {a}beaucoup{/a}. (She has a lot of it.)"]],
        ar: [["J'ai deux chiens. (لديّ كلبان.)", "J'{a}en{/a} ai {a}deux{/a}. (لديّ اثنان منها.)"], ["Je veux un café. (أريد قهوة.)", "J'{a}en{/a} veux {a}un{/a}. (أريد واحدة.)"], ["Elle a beaucoup de travail. (لديها عمل كثير.)", "Elle {a}en{/a} a {a}beaucoup{/a}. (لديها الكثير منه.)"]],
        fa: [["J'ai deux chiens. (دو سگ دارم.)", "J'{a}en{/a} ai {a}deux{/a}. (دو تا از آن‌ها را دارم.)"], ["Je veux un café. (یک قهوه می‌خواهم.)", "J'{a}en{/a} veux {a}un{/a}. (یکی می‌خواهم.)"], ["Elle a beaucoup de travail. (او کار زیادی دارد.)", "Elle {a}en{/a} a {a}beaucoup{/a}. (مقدار زیادی از آن را دارد.)"]],
        ti: [["J'ai deux chiens. (ክልተ ኣኽላባት ኣለዉኒ።)", "J'{a}en{/a} ai {a}deux{/a}. (ካብኦም ክልተ ኣለዉኒ።)"], ["Je veux un café. (ሓደ ቡን እደሊ።)", "J'{a}en{/a} veux {a}un{/a}. (ሓደ እደሊ።)"], ["Elle a beaucoup de travail. (ንሳ ብዙሕ ስራሕ ኣለዋ።)", "Elle {a}en{/a} a {a}beaucoup{/a}. (ካብኡ ብዙሕ ኣለዋ።)"]],
        uk: [["J'ai deux chiens. (У мене два собаки.)", "J'{a}en{/a} ai {a}deux{/a}. (У мене їх двоє.)"], ["Je veux un café. (Я хочу каву.)", "J'{a}en{/a} veux {a}un{/a}. (Я хочу одну.)"], ["Elle a beaucoup de travail. (У неї багато роботи.)", "Elle {a}en{/a} a {a}beaucoup{/a}. (У неї її багато.)"]],
      },
    },
    { type: "heading", text: "Place de Y et EN", sub: true, accent: true, trans: { en: "Position of Y and EN", ar: "موضع Y و EN", fa: "جایگاه Y و EN", ti: "ናይ Y ከምኡ'ውን EN ቦታ", uk: "Місце Y та EN" } },
    {
      type: "grid",
      headers: ["Temps", "Exemple avec Y", "Exemple avec EN"],
      boldFirstCol: true,
      rows: [
        ["Présent", "J'{a}y{/a} vais.", "J'{a}en{/a} mange."],
        ["Passé composé", "J'{a}y{/a} suis allé.", "J'{a}en{/a} ai mangé."],
        ["Futur proche", "Je vais {a}y{/a} aller.", "Je vais {a}en{/a} manger."],
        ["Négatif", "Je n'{a}y{/a} vais pas.", "Je n'{a}en{/a} mange pas."],
        ["Impératif affirmatif", "Vas-{a}y{/a} !", "Manges-{a}en{/a} !"],
      ],
      transHeaders: {
        en: ["Tense", "Example with Y", "Example with EN"],
        ar: ["الزمن", "مثال مع Y", "مثال مع EN"],
        fa: ["زمان", "مثال با Y", "مثال با EN"],
        ti: ["ግዜ", "ኣብነት ምስ Y", "ኣብነት ምስ EN"],
        uk: ["Час", "Приклад із Y", "Приклад із EN"],
      },
      transRows: {
        en: [["Present", "J'{a}y{/a} vais. (I go there.)", "J'{a}en{/a} mange. (I eat some.)"], ["Passé composé", "J'{a}y{/a} suis allé. (I went there.)", "J'{a}en{/a} ai mangé. (I ate some.)"], ["Near future", "Je vais {a}y{/a} aller. (I am going to go there.)", "Je vais {a}en{/a} manger. (I am going to eat some.)"], ["Negative", "Je n'{a}y{/a} vais pas. (I don't go there.)", "Je n'{a}en{/a} mange pas. (I don't eat any.)"], ["Affirmative imperative", "Vas-{a}y{/a} ! (Go there!)", "Manges-{a}en{/a} ! (Eat some!)"]],
        ar: [["المضارع", "J'{a}y{/a} vais. (أذهب إلى هناك.)", "J'{a}en{/a} mange. (آكل منه.)"], ["الماضي المركّب", "J'{a}y{/a} suis allé. (ذهبت إلى هناك.)", "J'{a}en{/a} ai mangé. (أكلت منه.)"], ["المستقبل القريب", "Je vais {a}y{/a} aller. (سأذهب إلى هناك.)", "Je vais {a}en{/a} manger. (سآكل منه.)"], ["النفي", "Je n'{a}y{/a} vais pas. (لا أذهب إلى هناك.)", "Je n'{a}en{/a} mange pas. (لا آكل منه.)"], ["الأمر المثبت", "Vas-{a}y{/a} ! (اذهب إلى هناك!)", "Manges-{a}en{/a} ! (كُل منه!)"]],
        fa: [["حال", "J'{a}y{/a} vais. (به آنجا می‌روم.)", "J'{a}en{/a} mange. (مقداری می‌خورم.)"], ["گذشتهٔ نقلی", "J'{a}y{/a} suis allé. (به آنجا رفتم.)", "J'{a}en{/a} ai mangé. (مقداری خوردم.)"], ["آیندهٔ نزدیک", "Je vais {a}y{/a} aller. (می‌خواهم به آنجا بروم.)", "Je vais {a}en{/a} manger. (می‌خواهم مقداری بخورم.)"], ["منفی", "Je n'{a}y{/a} vais pas. (به آنجا نمی‌روم.)", "Je n'{a}en{/a} mange pas. (هیچ نمی‌خورم.)"], ["امر مثبت", "Vas-{a}y{/a} ! (برو آنجا!)", "Manges-{a}en{/a} ! (مقداری بخور!)"]],
        ti: [["ህሉው", "J'{a}y{/a} vais. (ናብኡ እኸይድ።)", "J'{a}en{/a} mange. (ካብኡ እበልዕ።)"], ["ሕሉፍ ግዜ", "J'{a}y{/a} suis allé. (ናብኡ ከይደ።)", "J'{a}en{/a} ai mangé. (ካብኡ በሊዐ።)"], ["ቀረባ መጻኢ", "Je vais {a}y{/a} aller. (ናብኡ ክኸይድ እየ።)", "Je vais {a}en{/a} manger. (ካብኡ ክበልዕ እየ።)"], ["ኣሉታዊ", "Je n'{a}y{/a} vais pas. (ናብኡ ኣይከይድን።)", "Je n'{a}en{/a} mange pas. (ካብኡ ኣይበልዕን።)"], ["ኣረጋጋጺ ትእዛዝ", "Vas-{a}y{/a} ! (ናብኡ ኪድ!)", "Manges-{a}en{/a} ! (ካብኡ ብላዕ!)"]],
        uk: [["Теперішній", "J'{a}y{/a} vais. (Я туди йду.)", "J'{a}en{/a} mange. (Я їм трохи.)"], ["Passé composé", "J'{a}y{/a} suis allé. (Я туди ходив.)", "J'{a}en{/a} ai mangé. (Я з'їв трохи.)"], ["Найближче майбутнє", "Je vais {a}y{/a} aller. (Я збираюся туди піти.)", "Je vais {a}en{/a} manger. (Я збираюся з'їсти трохи.)"], ["Заперечення", "Je n'{a}y{/a} vais pas. (Я туди не йду.)", "Je n'{a}en{/a} mange pas. (Я нічого не їм.)"], ["Стверджувальний наказ", "Vas-{a}y{/a} ! (Іди туди!)", "Manges-{a}en{/a} ! (З'їж трохи!)"]],
      },
    },
  ],
  exercises: [],
};
