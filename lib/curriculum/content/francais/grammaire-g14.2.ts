import type { GrammarLesson } from "../../grammar-data";

/** G14.2 — Les adverbes en -ment, enrichis avec G19.22 (types d'adverbes) */
export const A1_GR_ADVERBES_MENT: GrammarLesson = {
  slug: "a1-gr-adverbes-ment",
  code: "G14.2",
  level: "A1",
  title: "Les adverbes en -ment",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Souvent la manière d'une action. → Roulez prudemment. (= avec prudence)",
        "Peut modifier un adjectif ou une expression. → Ils sont généralement prudents. ; Elle est fréquemment en retard.",
        "Peut être précédé d'un adverbe d'intensité. → Il roule très prudemment.",
      ],
    },
    {
      type: "heading",
      text: "Formation",
    },
    {
      type: "text",
      text: "Cas général : féminin de l'adjectif + {a}-ment{/a}. → douce → doucement ; longue → longuement.",
    },
    {
      type: "text",
      label: "Cas particuliers",
      items: [
        "Adjectif masculin en voyelle : + {a}-ment{/a} sur le masculin. → poli → poliment ; vrai → vraiment ; absolu → absolument.",
        "Exception : gai → gaiement.",
        "Adjectifs en {a}-ant / -ent{/a} → {a}-amment / -emment{/a}. → courant → couramment ; patient → patiemment.",
        "Exception : lent → lentement.",
        "Irréguliers : précis → précisément ; bref → brièvement ; gentil → gentiment.",
      ],
    },
    {
      type: "heading",
      text: "Place",
    },
    {
      type: "text",
      items: [
        "Devant l'adjectif ou l'expression. → généralement prudents ; complètement d'accord.",
        "Après le verbe en général. → Il parle rapidement. ; Il a parlé rapidement.",
      ],
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "text",
      text: "{a}-amment{/a} et {a}-emment{/a} se prononcent pareil. → couramment ; fréquemment.",
    },
    { type: "heading", text: "Les adverbes", trans: { en: "Adverbs", ar: "الظروف", fa: "قیدها", ti: "ተወሳኺታት", uk: "Прислівники" } },
    {
      type: "text",
      allBullets: true,
      text: "Les adverbes servent à raconter et exprimer vos impressions sur un événement ou une expérience.",
      transText: {
        en: "Adverbs help you tell a story and express your impressions about an event or experience.",
        ar: "الظروف تساعد على السرد والتعبير عن الانطباعات.",
        fa: "قیدها برای روایت و بیان برداشت‌ها کمک می‌کنند.",
        ti: "ተወሳኺታት ንምዝራብን ስምዒት ምግላጽን ይሕግዙ።",
        uk: "Прислівники допомагають розповідати та виражати враження.",
      },
      items: [
        "Ils précisent ou modifient le sens de la phrase.",
        "Les adverbes sont {a}invariables{/a}, sauf l'adverbe {a}tout{/a}.",
      ],
      transItems: {
        en: [
          "They clarify or modify the meaning of the sentence.",
          "Adverbs are {a}invariable{/a}, except the adverb {a}tout{/a}.",
        ],
        ar: [
          "توضّح أو تعدّل معنى الجملة.",
          "الظروف {a}لا تتغيّر{/a}، ما عدا {a}tout{/a}.",
        ],
        fa: [
          "معنای جمله را روشن یا تغییر می‌دهند.",
          "قیدها {a}تغییرناپذیر{/a}ند، به‌جز {a}tout{/a}.",
        ],
        ti: [
          "ናይቲ ሓረግ ትርጉም ይገልጹ ወይ ይቐይሩ።",
          "ተወሳኺታት {a}ዘይይቕየሩ{/a} እዮም፣ {a}tout{/a} ሓደ ሓደ ግድን።",
        ],
        uk: [
          "Вони уточнюють або змінюють значення речення.",
          "Прислівники {a}не відмінюються{/a}, крім {a}tout{/a}.",
        ],
      },
    },
    {
      type: "text",
      bulletItems: [1],
      label: "Adverbes de lieu",
      items: [
        "Pour se situer dans l'espace : {a}devant, derrière, dehors, ici, là, avant…{/a}",
        "Exemple : Il faut prendre la deuxième rue à gauche, {a}avant{/a} la Poste.",
      ],
      transItems: {
        en: ["To locate in space: {a}in front, behind, outside, here, there, before…{/a}", "Example: Take the second street on the left, {a}before{/a} the post office."],
        ar: ["لتحديد المكان: {a}أمام، خلف، خارج، هنا، هناك…{/a}", "مثال على موقع مكاني."],
        fa: ["برای مکان: {a}جلوی، پشت، بیرون، اینجا، آنجا…{/a}", "مثال مکان."],
        ti: ["ንቦታ ምርዳእ: {a}ቅድሚ፣ ድሕሪት፣ ወጻኢ…{/a}", "ኣብነት ቦታ።"],
        uk: ["Для місця: {a}попереду, позаду, надворі, тут, там…{/a}", "Приклад місця."],
      },
    },
    {
      type: "text",
      bulletItems: [1],
      label: "Adverbes de temps",
      items: [
        "Pour situer dans le temps : {a}avant, après, hier, aujourd'hui, demain, ensuite, souvent, jamais, tôt, tard…{/a}",
        "Exemple : {a}Avant{/a}, je mangeais des escargots, mais {a}maintenant{/a}, je n'en mange plus.",
      ],
      transItems: {
        en: ["To situate in time: {a}before, after, yesterday, today, tomorrow, then, often, never, early, late…{/a}", "Example: {a}Before{/a}, I ate snails, but {a}now{/a} I don't eat them anymore."],
        ar: ["لتحديد الزمن: {a}قبل، بعد، أمس، اليوم، غداً…{/a}", "مثال على تغيّر عبر الزمن."],
        fa: ["برای زمان: {a}قبل، بعد، دیروز، امروز، فردا…{/a}", "مثال تغییر در طول زمان."],
        ti: ["ንግዜ ምርዳእ: {a}ቅድሚ፣ ድሕሪ፣ ትማሊ፣ ሎሚ፣ ጽባሕ…{/a}", "ኣብነት ግዜ።"],
        uk: ["Для часу: {a}раніше, після, вчора, сьогодні, завтра…{/a}", "Приклад зміни в часі."],
      },
    },
    {
      type: "text",
      bulletItems: [1],
      label: "Adverbes de manière",
      items: [
        "Pour exprimer une impression ou comparer : {a}bien, mal, vite, lentement, très, mieux, pire, comme…{/a}",
        "Exemple : Ta nouvelle coupe de cheveux est {a}très{/a} jolie, c'est beaucoup {a}mieux{/a} qu'avant.",
      ],
      transItems: {
        en: ["To express an impression or compare: {a}well, badly, quickly, slowly, very, better, worse, like…{/a}", "Example: Your new haircut is {a}very{/a} pretty, it's much {a}better{/a} than before."],
        ar: ["للتعبير عن الانطباع أو المقارنة.", "مثال على المقارنة."],
        fa: ["برای بیان برداشت یا مقایسه.", "مثال مقایسه."],
        ti: ["ንስምዒት ወይ ንምዝራይ ምግላጽ።", "ኣብነት ምዝራይ።"],
        uk: ["Для враження або порівняння.", "Приклад порівняння."],
      },
    },
    {
      type: "text",
      bulletItems: [1],
      label: "Adverbes de quantité",
      items: [
        "Pour parler d'une quantité ou d'une intensité : {a}trop, peu, assez, beaucoup, plus, moins, autant, très…{/a}",
        "Exemple : J'ai {a}beaucoup{/a} dormi la nuit dernière, {a}plus{/a} que la nuit d'avant.",
      ],
      transItems: {
        en: ["For quantity or intensity: {a}too much, little, enough, a lot, more, less, as much, very…{/a}", "Example: I slept {a}a lot{/a} last night, {a}more{/a} than the night before."],
        ar: ["للتعبير عن الكمية أو الشدة.", "مثال على الكمية."],
        fa: ["برای مقدار یا شدت.", "مثال مقدار."],
        ti: ["ንመጠን ወይ ንዝሓት ምግላጽ።", "ኣብነት መጠን።"],
        uk: ["Для кількості або інтенсивності.", "Приклад кількості."],
      },
    },
    {
      type: "text",
      bulletItems: [1],
      label: "Adverbes d'affirmation et de négation",
      items: [
        "Pour exprimer l'accord ou le désaccord : {a}oui, non, peut-être, si, vraiment…{/a}",
        "Exemple : {a}Si{/a}, c'est vrai, j'aime {a}vraiment{/a} ta nouvelle coupe de cheveux !",
      ],
      transItems: {
        en: ["To express agreement or disagreement: {a}yes, no, maybe, indeed, really…{/a}", "Example: {a}Yes{/a}, it's true, I {a}really{/a} like your new haircut!"],
        ar: ["للتعبير عن الموافقة أو الرفض.", "مثال على التأكيد."],
        fa: ["برای موافقت یا مخالفت.", "مثال تأکید."],
        ti: ["ንሓሳብ ወይ ንተቓውማ ምግላጽ።", "ኣብነት ኣረጋጋጺ።"],
        uk: ["Для згоди чи заперечення.", "Приклад підтвердження."],
      },
    },
  ],
  // G19.22 (types d'adverbes) n'avait pas d'exercices : on conserve ceux en -ment.
  exercises: [
    {
      type: "qcm",
      title: "Adverbes en -ment",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Roulez ___ . (prudent)", choices: ["prudemment", "prudentement", "prudement"], correctIdx: 0 },
        { sentence: "Arrêtez-vous ___ . (régulier)", choices: ["régulièrement", "régulièrment", "régulièremen"], correctIdx: 0 },
        { sentence: "douce → ___", choices: ["doucement", "doucementent", "doucment"], correctIdx: 0 },
        { sentence: "vrai → ___", choices: ["vraiment", "vraimentent", "vraieement"], correctIdx: 0 },
        { sentence: "gai → ___", choices: ["gaiement", "gaiment", "gaiemment"], correctIdx: 0 },
        { sentence: "courant → ___", choices: ["couramment", "courantement", "courentment"], correctIdx: 0 },
        { sentence: "patient → ___", choices: ["patiemment", "patientement", "patiament"], correctIdx: 0 },
        { sentence: "lent → ___", choices: ["lentement", "lenamment", "lenemment"], correctIdx: 0 },
        { sentence: "gentil → ___", choices: ["gentiment", "gentillement", "gentilement"], correctIdx: 0 },
        { sentence: "bref → ___", choices: ["brièvement", "brefement", "brevement"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez l'adverbe en -ment.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il parle ___ . (rapide)", hint: "féminin + ment", answer: "rapidement" },
        { sentence: "Ils sont ___ prudents. (général)", hint: "formation", answer: "généralement" },
        { sentence: "Elle est ___ d'accord. (complet)", hint: "voyelle", answer: "complètement" },
        { sentence: "Il roule ___ . (prudent)", hint: "-ent → -emment", answer: "prudemment" },
        { sentence: "On parle chinois ___ . (courant)", hint: "-amment", answer: "couramment" },
        { sentence: "Il attend ___ . (patient)", hint: "-emment", answer: "patiemment" },
        { sentence: "Il marche ___ . (lent)", hint: "exception", answer: "lentement" },
        { sentence: "Il a répondu ___ . (poli)", hint: "voyelle", answer: "poliment" },
        { sentence: "C'est ___ vrai. (absolu)", hint: "voyelle", answer: "absolument" },
        { sentence: "Il a expliqué ___ . (précis)", hint: "irrégulier", answer: "précisément" },
      ],
    },
  ],
};
