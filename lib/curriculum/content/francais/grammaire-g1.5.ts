import type { GrammarLesson } from "../../grammar-data";
import { G1_EXERCISES } from "./g1-lesson-profiles";

/** Unité 4 — Les verbes en -er : cas général (G1.5) */
export const A1_GR_VERBES_ER: GrammarLesson = {
  slug: "a1-gr-verbes-er",
  code: "G1.5",
  level: "A1",
  title: "Les verbes en -er : cas général",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
      trans: { en: "Usage", ar: "الاستخدام", fa: "کاربرد", pt: "Utilização", so: "Isticmaal", ti: "ኣጠቓቕማ", tr: "Kullanım", ps: "کارونه", uk: "Вживання" },
    },
    {
      type: "text",
      text: "Les verbes en {a}-er{/a} sont les verbes les plus fréquents en français. Ils font partie du 1er groupe. Le présent de l'indicatif est utilisé pour :",
      transText: {
        en: "Verbs ending in {a}-er{/a} are the most common verbs in French. They belong to the 1st group. The present indicative is used to:",
        ar: "الأفعال المنتهية بـ {a}-er{/a} هي الأكثر شيوعاً في الفرنسية. وهي تنتمي إلى المجموعة الأولى. يُستخدم المضارع للدلالة على:",
        fa: "فعل‌های پایان‌یافته به {a}-er{/a} رایج‌ترین فعل‌ها در زبان فرانسوی هستند. آن‌ها به گروه اول تعلق دارند. زمان حال اخباری برای موارد زیر به کار می‌رود:",
        pt: "Os verbos terminados em {a}-er{/a} são os verbos mais frequentes em francês. Pertencem ao 1.º grupo. O presente do indicativo usa-se para:",
        so: "Falalka ku dhammaada {a}-er{/a} waa falalka ugu badan ee Faransiiska. Waxay ka tirsan yihiin kooxda 1aad. Joogtada tilmaamaysa waxaa loo isticmaalaa:",
        ti: "ብ {a}-er{/a} ዝውድኡ ግሲታት ኣብ ፈረንሳይኛ እቶም ዝበዝሑ ግሲታት እዮም። ኣብ 1ይ ጉጅለ ይርከቡ። ህሉው ግዜ ንዚ ዝስዕብ ይጥቀም:",
        tr: "{a}-er{/a} ile biten fiiller Fransızcada en yaygın fiillerdir. 1. gruba aittirler. Şimdiki/geniş zaman şunlar için kullanılır:",
        ps: "هغه فعلونه چې په {a}-er{/a} پای ته رسېږي په فرانسوي کې تر ټولو عام فعلونه دي. دوی د لومړۍ ډلې دي. اوسنی خبري زمان د دې لپاره کارېږي:",
        uk: "Дієслова на {a}-er{/a} — найпоширеніші у французькій мові. Вони належать до 1-ї групи. Теперішній час дійсного способу вживається, щоб:",
      },
    },
    {
      type: "text",
      text: "{a}1.{/a} Parler d'une action qui se passe {a}au moment où l'on parle{/a}.",
      items: ["Vous {a}regardez{/a} la télévision ?"],
      noBulletItems: [0],
      transText: {
        en: "{a}1.{/a} Talk about an action happening {a}at the moment of speaking{/a}.",
        ar: "{a}1.{/a} التحدث عن فعل يحدث {a}في لحظة الكلام{/a}.",
        fa: "{a}1.{/a} صحبت دربارهٔ کاری که {a}در لحظهٔ گفت‌وگو اتفاق می‌افتد{/a}.",
        pt: "{a}1.{/a} Falar de uma ação que acontece {a}no momento em que se fala{/a}.",
        so: "{a}1.{/a} Ka hadal ficil dhacaya {a}xilliga hadalka{/a}.",
        ti: "{a}1.{/a} ብዛዕባ ተግባር ኣብ {a}እዋን ምዝራብ ዝፍጸም{/a} ምዝራብ።",
        tr: "{a}1.{/a} {a}Konuşma anında gerçekleşen{/a} bir eylemden söz etmek.",
        ps: "{a}1.{/a} د هغه عمل په اړه خبرې کول چې {a}د خبرو پر مهال ترسره کېږي{/a}.",
        uk: "{a}1.{/a} Говорити про дію, що відбувається {a}в момент мовлення{/a}.",
      },
    },

    {
      type: "text",
      text: "{a}2.{/a} Parler d'une {a}action habituelle{/a}.",
      items: ["Tous les matins, je {a}regarde{/a} mes mails."],
      noBulletItems: [0],
      transText: {
        en: "{a}2.{/a} Talk about a {a}habitual action{/a}.",
        ar: "{a}2.{/a} التحدث عن {a}فعل معتاد{/a}.",
        fa: "{a}2.{/a} صحبت دربارهٔ یک {a}کار همیشگی{/a}.",
        pt: "{a}2.{/a} Falar de uma {a}ação habitual{/a}.",
        so: "{a}2.{/a} Ka hadal {a}ficil caado ah{/a}.",
        ti: "{a}2.{/a} ብዛዕባ {a}ልሙድ ተግባር{/a} ምዝራብ።",
        tr: "{a}2.{/a} {a}Alışkanlık olan bir eylemden{/a} söz etmek.",
        ps: "{a}2.{/a} د {a}عادت شوي عمل{/a} په اړه خبرې کول.",
        uk: "{a}2.{/a} Говорити про {a}звичну дію{/a}.",
      },
    },

    {
      type: "text",
      text: "{a}3.{/a} Faire une {a}description générale{/a}, ou exprimer des {a}goûts{/a} et des {a}idées{/a}.",
      items: ["Vous {a}habitez{/a} à Paris ?"],
      noBulletItems: [0],
      transText: {
        en: "{a}3.{/a} Give a {a}general description{/a}, or express {a}likes{/a} and {a}ideas{/a}.",
        ar: "{a}3.{/a} تقديم {a}وصف عام{/a}، أو التعبير عن {a}الأذواق{/a} و{a}الأفكار{/a}.",
        fa: "{a}3.{/a} ارائهٔ یک {a}توصیف کلی{/a}، یا بیان {a}سلیقه‌ها{/a} و {a}ایده‌ها{/a}.",
        pt: "{a}3.{/a} Fazer uma {a}descrição geral{/a}, ou exprimir {a}gostos{/a} e {a}ideias{/a}.",
        so: "{a}3.{/a} Bixi {a}sharaxaad guud{/a}, ama muuji {a}waxyaabaha la jecel yahay{/a} iyo {a}fikradaha{/a}.",
        ti: "{a}3.{/a} {a}ሓፈሻዊ መግለጺ{/a} ምሃብ፣ ወይ {a}ድሌታት{/a}ን {a}ሓሳባት{/a}ን ምግላጽ።",
        tr: "{a}3.{/a} {a}Genel bir açıklama{/a} yapmak veya {a}beğenileri{/a} ve {a}fikirleri{/a} ifade etmek.",
        ps: "{a}3.{/a} {a}عمومي تشریح{/a} ورکول، یا {a}خوښې{/a} او {a}نظریات{/a} څرګندول.",
        uk: "{a}3.{/a} Робити {a}загальний опис{/a} або висловлювати {a}вподобання{/a} та {a}думки{/a}.",
      },
    },

    {
      type: "heading",
      text: "Comment former le verbe ?",
      trans: { en: "How to form the verb?", ar: "كيف تصرّف الفعل؟", fa: "چگونه فعل را صرف کنیم؟", pt: "Como formar o verbo?", so: "Sidee falka loo sameeyaa?", ti: "ግሲ ብኸመይ ትሰርሕ?", tr: "Fiil nasıl oluşturulur?", ps: "فعل څنګه جوړوو؟", uk: "Як утворити дієслово?" },
    },
    {
      type: "text",
      text: "En général, les verbes en {a}-er{/a} ont une base verbale. On ajoute la terminaison {a}e, es, e, ons, ez, ent{/a} à cette base.",
      transText: {
        en: "In general, verbs ending in {a}-er{/a} have a verb stem. The ending {a}e, es, e, ons, ez, ent{/a} is added to this stem.",
        ar: "عموماً، للأفعال المنتهية بـ {a}-er{/a} جذر فعلي. نضيف النهايات {a}e, es, e, ons, ez, ent{/a} إلى هذا الجذر.",
        fa: "به‌طور کلی، فعل‌های پایان‌یافته به {a}-er{/a} یک بن فعل دارند. پایان‌های {a}e, es, e, ons, ez, ent{/a} به این بن افزوده می‌شوند.",
        pt: "Em geral, os verbos terminados em {a}-er{/a} têm um radical verbal. Acrescenta-se a terminação {a}e, es, e, ons, ez, ent{/a} a esse radical.",
        so: "Guud ahaan, falalka ku dhammaada {a}-er{/a} waxay leeyihiin jir fal. Dhammaadka {a}e, es, e, ons, ez, ent{/a} ayaa lagu daraa jirkaas.",
        ti: "ብሓፈሻ፣ ብ {a}-er{/a} ዝውድኡ ግሲታት ሱር ግሲ ኣለዎም። ኣብዚ ሱር {a}e, es, e, ons, ez, ent{/a} ዝብሉ መወዳእታታት ንውስኸሉ።",
        tr: "Genel olarak {a}-er{/a} ile biten fiillerin bir fiil kökü vardır. Bu köke {a}e, es, e, ons, ez, ent{/a} ekleri eklenir.",
        ps: "په عمومي ډول، هغه فعلونه چې په {a}-er{/a} پای ته رسېږي د فعل بنسټ لري. پایونه {a}e, es, e, ons, ez, ent{/a} دې بنسټ ته ورزیاتېږي.",
        uk: "Зазвичай дієслова на {a}-er{/a} мають дієслівну основу. До неї додають закінчення {a}e, es, e, ons, ez, ent{/a}.",
      },
    },
    {
      type: "grid",
      headers: ["Pronom", "Verbe", "Complément"],
      transHeaders: {
        en: ["Pronoun", "Verb", "Complement"],
        ar: ["الضمير", "الفعل", "المتمّم"],
        fa: ["ضمیر", "فعل", "متمم"],
        pt: ["Pronome", "Verbo", "Complemento"],
        so: ["Magac-u-yaal", "Fal", "Dhammeystir"],
        ti: ["ተካኢ ስም", "ግሲ", "መመላእታ"],
        tr: ["Zamir", "Fiil", "Tümleç"],
        ps: ["ضمیر", "فعل", "متمم"],
        uk: ["Займенник", "Дієслово", "Додаток"],
      },
      boldFirstCol: true,
      rows: [
        ["Je", "regard{a}e{/a}", "mes mails."],
        ["Tu", "écout{a}es{/a}", "la radio."],
        ["Il / Elle / On", "habit{a}e{/a}", "à Paris."],
        ["Nous", "parl{a}ons{/a}", "français."],
        ["Vous", "aim{a}ez{/a}", "le football."],
        ["Ils / Elles", "étudi{a}ent{/a}", "les relations internationales."],
      ],
    },
    {
      type: "text",
      text: "On prend le verbe et on enlève {a}-er{/a}.",
      transText: {
        en: "Take the verb and remove {a}-er{/a}.",
        ar: "نأخذ الفعل ونحذف {a}-er{/a}.",
        fa: "فعل را می‌گیریم و {a}-er{/a} را حذف می‌کنیم.",
        pt: "Pegue no verbo e retire {a}-er{/a}.",
        so: "Qaado falka oo ka saar {a}-er{/a}.",
        ti: "ነቲ ግሲ ወሲድና {a}-er{/a} ነውጽእ።",
        tr: "Fiili alın ve {a}-er{/a} ekini çıkarın.",
        ps: "فعل واخلئ او {a}-er{/a} ترې لرې کړئ.",
        uk: "Беремо дієслово й відкидаємо {a}-er{/a}.",
      },
    },
    {
      type: "selector",
      buttonCols: 3,
      tabs: [
        {
          label: "parler",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "parler",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "parle" },
                    { pronoun: "tu", form: "parles" },
                    { pronoun: "il / elle / on", form: "parle" },
                    { pronoun: "nous", form: "parlons" },
                    { pronoun: "vous", form: "parlez" },
                    { pronoun: "ils / elles", form: "parlent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "aimer",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "aimer",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "aime" },
                    { pronoun: "tu", form: "aimes" },
                    { pronoun: "il / elle / on", form: "aime" },
                    { pronoun: "nous", form: "aimons" },
                    { pronoun: "vous", form: "aimez" },
                    { pronoun: "ils / elles", form: "aiment" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "écouter",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "écouter",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "écoute" },
                    { pronoun: "tu", form: "écoutes" },
                    { pronoun: "il / elle / on", form: "écoute" },
                    { pronoun: "nous", form: "écoutons" },
                    { pronoun: "vous", form: "écoutez" },
                    { pronoun: "ils / elles", form: "écoutent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "habiter",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "habiter",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "habite" },
                    { pronoun: "tu", form: "habites" },
                    { pronoun: "il / elle / on", form: "habite" },
                    { pronoun: "nous", form: "habitons" },
                    { pronoun: "vous", form: "habitez" },
                    { pronoun: "ils / elles", form: "habitent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "regarder",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "regarder",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "regarde" },
                    { pronoun: "tu", form: "regardes" },
                    { pronoun: "il / elle / on", form: "regarde" },
                    { pronoun: "nous", form: "regardons" },
                    { pronoun: "vous", form: "regardez" },
                    { pronoun: "ils / elles", form: "regardent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "étudier",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "étudier",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "étudie" },
                    { pronoun: "tu", form: "étudies" },
                    { pronoun: "il / elle / on", form: "étudie" },
                    { pronoun: "nous", form: "étudions" },
                    { pronoun: "vous", form: "étudiez" },
                    { pronoun: "ils / elles", form: "étudient" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      type: "heading",
      text: "Prononciation et orthographe",
      trans: { en: "Pronunciation and spelling", ar: "النطق والإملاء", fa: "تلفظ و املا", pt: "Pronúncia e ortografia", so: "Ku dhawaaqid iyo higaad", ti: "ኣደማምጻን ኣጸሓሕፋን", tr: "Telaffuz ve yazım", ps: "تلفظ او املا", uk: "Вимова та правопис" },
    },
    {
      type: "text",
      text: "{a}1.{/a} On prononce la consonne finale du radical, mais on ne prononce pas les terminaisons {a}-e, -es, -ent{/a}.",
      transText: {
        en: "{a}1.{/a} The final consonant of the stem is pronounced, but the endings {a}-e, -es, -ent{/a} are not.",
        ar: "{a}1.{/a} يُنطق الحرف الساكن الأخير من الجذر، لكن لا تُنطق النهايات {a}-e, -es, -ent{/a}.",
        fa: "{a}1.{/a} صامت پایانی بن تلفظ می‌شود، اما پایان‌های {a}-e, -es, -ent{/a} تلفظ نمی‌شوند.",
        pt: "{a}1.{/a} Pronuncia-se a consoante final do radical, mas as terminações {a}-e, -es, -ent{/a} não se pronunciam.",
        so: "{a}1.{/a} Shibbanaha ugu dambeeya ee jirka falka waa la dhawaaqaa, laakiin dhammaadyada {a}-e, -es, -ent{/a} lama dhawaaqo.",
        ti: "{a}1.{/a} ናይ ሱር ግሲ መወዳእታ ተነባቢ ይድመጽ፣ {a}-e, -es, -ent{/a} ዝብሉ መወዳእታታት ግን ኣይድመጹን።",
        tr: "{a}1.{/a} Kökün son ünsüzü telaffuz edilir, ancak {a}-e, -es, -ent{/a} ekleri edilmez.",
        ps: "{a}1.{/a} د بنسټ وروستی بېواک تلفظ کېږي، خو پایونه {a}-e, -es, -ent{/a} نه تلفظ کېږي.",
        uk: "{a}1.{/a} Кінцевий приголосний основи вимовляється, а закінчення {a}-e, -es, -ent{/a} — ні.",
      },
    },
    {
      type: "text",
      text: "{a}2.{/a} On fait la liaison.",
      transText: {
        en: "{a}2.{/a} A liaison is made.",
        ar: "{a}2.{/a} نُجري الوصل الصوتي.",
        fa: "{a}2.{/a} پیوند آوایی انجام می‌شود.",
        pt: "{a}2.{/a} Faz-se a ligação.",
        so: "{a}2.{/a} Liaison ayaa la sameeyaa.",
        ti: "{a}2.{/a} ሊያዞን ንገብር።",
        tr: "{a}2.{/a} Ulama yapılır.",
        ps: "{a}2.{/a} liaison ترسره کېږي.",
        uk: "{a}2.{/a} Робимо лієзон.",
      },
      items: ["O{li}n|a{/li}ime, nou{li}s|é{/li}coutons, vou{li}s|é{/li}tudiez, il{li}s|h{/li}abitent, elle{li}s|o{/li}ublient."],
      noBulletItems: [0],
    },
    {
      type: "text",
      text: "{a}3.{/a} Le pronom {a}je{/a} devient {a}j'{/a} devant une voyelle ou un h muet.",
      transText: {
        en: "{a}3.{/a} The pronoun {a}je{/a} becomes {a}j'{/a} before a vowel or a silent h.",
        ar: "{a}3.{/a} يتحول الضمير {a}je{/a} إلى {a}j'{/a} قبل حرف متحرك أو h صامت.",
        fa: "{a}3.{/a} ضمیر {a}je{/a} پیش از واکه یا h بی‌صدا به {a}j'{/a} تبدیل می‌شود.",
        pt: "{a}3.{/a} O pronome {a}je{/a} torna-se {a}j'{/a} antes de uma vogal ou de um h mudo.",
        so: "{a}3.{/a} Magac-u-yaalka {a}je{/a} wuxuu noqdaa {a}j'{/a} ka hor shaqal ama h aan dhawaaqin.",
        ti: "{a}3.{/a} እቲ {a}je{/a} ዝብል ተካኢ ስም ቅድሚ ኣድማጺ ፊደል ወይ ዘይድመጽ h ናብ {a}j'{/a} ይቕየር።",
        tr: "{a}3.{/a} {a}je{/a} zamiri bir ünlüden veya sessiz h'den önce {a}j'{/a} olur.",
        ps: "{a}3.{/a} ضمیر {a}je{/a} د واول یا چوپ h مخکې {a}j'{/a} کېږي.",
        uk: "{a}3.{/a} Займенник {a}je{/a} перетворюється на {a}j'{/a} перед голосною або німою h.",
      },
      items: [
        "{s}Je aime{/s} ma ville. → {a}J'aime{/a} ma ville.",
        "{s}Je habite{/s} à Martigny. → {a}J'habite{/a} à Martigny."
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "text",
      
    },
  ],
  exercises: G1_EXERCISES["G1.5"](),
};
