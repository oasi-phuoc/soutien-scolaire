import type { GrammarLesson } from "../../grammar-data";
import { G1_EXERCISES } from "./g1-lesson-profiles";

/** Unité 2 — Le verbe avoir (G1.3) */
export const A1_GR_AVOIR: GrammarLesson = {
  slug:"a1-gr-avoir",
  code:"G1.3",
  level:"A1",
  title:"Le verbe avoir",
  theory:[
    {
      type:"text",
      text:"Le verbe {a}AVOIR{/a} sert à dire l'âge, de parler de la famille et des amis, de dire ce qu'on possède ou d'exprimer une sensation.",
      transText:{
        sq:"Folja {a}AVOIR{/a} përdoret për të treguar moshën, për të folur për familjen dhe miqtë, për të treguar atë që zotërojmë ose për të shprehur një ndjesi.",
        en:"The verb {a}AVOIR{/a} is used to state age, talk about family and friends, say what one owns, or express a sensation.",
        ar:"يُستخدم الفعل {a}AVOIR{/a} لذكر العمر،والتحدث عن العائلة والأصدقاء،وقول ما نملكه،أو التعبير عن إحساس.",
        am:"{a}AVOIR{/a} የሚለው ግስ ዕድሜን ለመግለጽ፣ስለቤተሰብና ጓደኞች ለመናገር፣ያለንን ነገር ለመግለጽ ወይም ስሜትን ለመግለጽ ይጠቅማል።",
        prs:"فعل {a}AVOIR{/a} برای بیان سن،صحبت درباره خانواده و دوستان،گفتن چیزهایی که در اختیار داریم یا بیان یک احساس به کار می‌رود.",
        es:"El verbo {a}AVOIR{/a} se utiliza para indicar la edad,hablar de la familia y los amigos,decir lo que se posee o expresar una sensación.",
        it:"Il verbo {a}AVOIR{/a} si usa per indicare l'età,parlare della famiglia e degli amici,dire ciò che si possiede o esprimere una sensazione.",
        fa:"فعل {a}AVOIR{/a} برای بیان سن،صحبت دربارهٔ خانواده و دوستان،گفتن آنچه در اختیار داریم یا بیان یک احساس به کار می‌رود.",
        ps:"د {a}AVOIR{/a} فعل د عمر د ویلو،د کورنۍ او ملګرو په اړه د خبرو،د ملکیت د بیانولو یا د احساس د څرګندولو لپاره کارېږي.",
        pt:"O verbo {a}AVOIR{/a} usa-se para indicar a idade,falar da família e dos amigos,dizer o que se possui ou exprimir uma sensação.",
        ru:"Глагол {a}AVOIR{/a} используется,чтобы назвать возраст,рассказать о семье и друзьях,сказать,что у кого-то есть,или выразить ощущение.",
        so:"Falka {a}AVOIR{/a} waxaa loo isticmaalaa in lagu sheego da'da,laga hadlo qoyska iyo saaxiibbada,l lagu sheego waxa qofku leeyahay ama lagu muujiyo dareen.",
        ti:"ግሲ {a}AVOIR{/a} ዕድመ ንምግላጽ፣ብዛዕባ ስድራቤትን ኣዕሩኽን ንምዝራብ፣ዘለና ነገር ንምግላጽ ወይ ስምዒት ንምግላጽ ይጥቀም።",
        tr:"{a}AVOIR{/a} fiili yaş belirtmek,aile ve arkadaşlardan söz etmek,sahip olunan şeyi söylemek veya bir duygu ifade etmek için kullanılır.",
        uk:"Дієслово {a}AVOIR{/a} вживається,щоб назвати вік,розповісти про сім'ю та друзів,сказати,чим хтось володіє,або висловити відчуття."
      }
    },
    {
      type:"grid",
      headers:["","Exemple"],
      transHeaders:{
        sq:["","Shembull"],
        en:["","Example"],
        ar:["","مثال"],
        am:["","ምሳሌ"],
        prs:["","مثال"],
        es:["","Ejemplo"],
        it:["","Esempio"],
        fa:["","مثال"],
        ps:["","بېلګه"],
        pt:["","Exemplo"],
        ru:["","Пример"],
        so:["","Tusaale"],
        ti:["","ኣብነት"],
        tr:["","Örnek"],
        uk:["","Приклад"]
      },
      boldFirstCol:true,
      colWidths:["35%","65%"],
      rows:[
        ["Possession","J'{a}ai{/a} un téléphone."],
        ["Âge","Elle {a}a{/a} 25 ans."],
        ["Sensations","Nous {a}avons{/a} faim."],
        ["Expressions","Il {a}a{/a} de la chance."]
      ],
      transRows:{
        sq:[
          ["Posedim","{a}Unë{/a} {a}kam{/a} një telefon."],
          ["Mosha","{a}Ajo{/a} {a}është{/a} 25 vjeç."],
          ["Ndjesitë","{a}Ne{/a} {a}kemi{/a} uri."],
          ["Shprehjet","{a}Ai{/a} {a}ka{/a} fat."]
        ],
        en:[
          ["Possession","{a}I{/a} {a}have{/a} a phone."],
          ["Age","{a}She{/a} {a}is{/a} 25 years old."],
          ["Sensations","{a}We{/a} {a}are{/a} hungry."],
          ["Expressions","{a}He{/a} {a}is{/a} lucky."]
        ],
        ar:[
          ["الملكية","{a}أنا{/a} {a}أملك{/a} هاتفًا."],
          ["العمر","{a}هي{/a} {a}تبلغ{/a} 25 عامًا."],
          ["الأحاسيس","{a}نحن{/a} {a}جائعون{/a}."],
          ["التعبيرات","{a}هو{/a} {a}محظوظ{/a}."]
        ],
        am:[
          ["ባለቤትነት","{a}እኔ{/a} ስልክ {a}አለኝ{/a}።"],
          ["ዕድሜ","{a}እሷ{/a} 25 ዓመት {a}ነች{/a}።"],
          ["ስሜቶች","{a}እኛ{/a} {a}ተርበናል{/a}።"],
          ["አገላለጾች","{a}እሱ{/a} {a}ዕድለኛ ነው{/a}።"]
        ],
        prs:[
          ["مالکیت","{a}من{/a} یک تلفن {a}دارم{/a}."],
          ["سن","{a}او{/a} ۲۵ ساله {a}است{/a}."],
          ["احساس‌ها","{a}ما{/a} {a}گرسنه هستیم{/a}."],
          ["عبارت‌ها","{a}او{/a} {a}خوش‌شانس است{/a}."]
        ],
        es:[
          ["Posesión","{a}Yo{/a} {a}tengo{/a} un teléfono."],
          ["Edad","{a}Ella{/a} {a}tiene{/a} 25 años."],
          ["Sensaciones","{a}Nosotros{/a} {a}tenemos{/a} hambre."],
          ["Expresiones","{a}Él{/a} {a}tiene{/a} suerte."]
        ],
        it:[
          ["Possesso","{a}Io{/a} {a}ho{/a} un telefono."],
          ["Età","{a}Lei{/a} {a}ha{/a} 25 anni."],
          ["Sensazioni","{a}Noi{/a} {a}abbiamo{/a} fame."],
          ["Espressioni","{a}Lui{/a} {a}ha{/a} fortuna."]
        ],
        fa:[
          ["مالکیت","{a}من{/a} یک تلفن {a}دارم{/a}."],
          ["سن","{a}او{/a} ۲۵ ساله {a}است{/a}."],
          ["احساس‌ها","{a}ما{/a} {a}گرسنه هستیم{/a}."],
          ["عبارت‌ها","{a}او{/a} {a}خوش‌شانس است{/a}."]
        ],
        ps:[
          ["ملکیت","{a}زه{/a} یو ټیلیفون {a}لرم{/a}."],
          ["عمر","{a}هغه{/a} ۲۵ کلن {a}دی{/a}."],
          ["احساسات","{a}موږ{/a} {a}وږي یو{/a}."],
          ["عبارتونه","{a}هغه{/a} {a}بختور دی{/a}."]
        ],
        pt:[
          ["Posse","{a}Eu{/a} {a}tenho{/a} um telefone."],
          ["Idade","{a}Ela{/a} {a}tem{/a} 25 anos."],
          ["Sensações","{a}Nós{/a} {a}temos{/a} fome."],
          ["Expressões","{a}Ele{/a} {a}tem{/a} sorte."]
        ],
        ru:[
          ["Владение","{a}У меня{/a} {a}есть{/a} телефон."],
          ["Возраст","{a}Ей{/a} 25 лет."],
          ["Ощущения","{a}Мы{/a} {a}голодны{/a}."],
          ["Выражения","{a}Ему{/a} {a}везёт{/a}."]
        ],
        so:[
          ["Lahaansho","{a}Anigu{/a} telefoon {a}waan haystaa{/a}."],
          ["Da'da","{a}Iyadu{/a} {a}waa{/a} 25 jir."],
          ["Dareenno","{a}Annagu{/a} {a}waan gaajaysan nahay{/a}."],
          ["Oraahyo","{a}Isagu{/a} {a}nasiib ayuu leeyahay{/a}."]
        ],
        ti:[
          ["ዋንነት","{a}ኣነ{/a} ተሌፎን {a}ኣለኒ{/a}።"],
          ["ዕድመ","{a}ንሳ{/a} 25 ዓመት {a}ኣለዋ{/a}።"],
          ["ስምዒታት","{a}ንሕና{/a} {a}ጠሚና ኢና{/a}።"],
          ["መግለጺታት","{a}ንሱ{/a} {a}ዕድለኛ እዩ{/a}።"]
        ],
        tr:[
          ["Sahiplik","{a}Ben{/a} {a}bir telefona sahibim{/a}."],
          ["Yaş","{a}O{/a} {a}25 yaşında{/a}."],
          ["Duygular","{a}Biz{/a} {a}açız{/a}."],
          ["İfadeler","{a}O{/a} {a}şanslı{/a}."]
        ],
        uk:[
          ["Володіння","{a}Я{/a} {a}маю{/a} телефон."],
          ["Вік","{a}Їй{/a} 25 років."],
          ["Відчуття","{a}Ми{/a} {a}голодні{/a}."],
          ["Вирази","{a}Йому{/a} {a}щастить{/a}."]
        ]
      }
    },
    {
      type:"heading",
      text:"Conjugaison",
      trans:{
        sq:"Zgjedhimi",
        en:"Conjugation",
        ar:"التصريف",
        am:"የግስ ለውጥ",
        prs:"صرف",
        es:"Conjugación",
        it:"Coniugazione",
        fa:"صرف",
        ps:"ګردان",
        pt:"Conjugação",
        ru:"Спряжение",
        so:"Sarrifka falka",
        ti:"ምጽራይ",
        tr:"Fiil çekimi",
        uk:"Дієвідміна"
      }
    },
    {
      type:"grid",
      headers:["Pronom sujet","Verbe"],
      transHeaders:{
        sq:["Përemri kryefjalë","Folja"],
        en:["Subject pronoun","Verb"],
        ar:["ضمير الفاعل","الفعل"],
        am:["የተግባር ተውላጠ ስም","ግስ"],
        prs:["ضمیر فاعلی","فعل"],
        es:["Pronombre sujeto","Verbo"],
        it:["Pronome soggetto","Verbo"],
        fa:["ضمیر فاعلی","فعل"],
        ps:["فاعلي ضمیر","فعل"],
        pt:["Pronome sujeito","Verbo"],
        ru:["Местоимение-подлежащее","Глагол"],
        so:["Magac-u-yaalka falaha","Fal"],
        ti:["ተካኢ ስም ተግባሪ","ግሲ"],
        tr:["Özne zamiri","Fiil"],
        uk:["Займенник-підмет","Дієслово"]
      },
      boldFirstCol:true,
      colWidths:["35%","65%"],
      rows:[
        ["J'","{a}ai{/a}"],
        ["Tu","{a}as{/a}"],
        ["Il / Elle / On","{a}a{/a}"],
        ["Nous","{a}avons{/a}"],
        ["Vous","{a}avez{/a}"],
        ["Ils / Elles","{a}ont{/a}"]
      ],
      transRows:{
        sq:[
          ["{a}Unë{/a}","{a}kam{/a}"],
          ["{a}Ti{/a}","{a}ke{/a}"],
          ["{a}Ai / Ajo / Ne{/a}","{a}ka{/a}"],
          ["{a}Ne{/a}","{a}kemi{/a}"],
          ["{a}Ju{/a}","{a}keni{/a}"],
          ["{a}Ata / Ato{/a}","{a}kanë{/a}"]
        ],
        en:[
          ["{a}I{/a}","{a}have{/a}"],
          ["{a}You{/a}","{a}have{/a}"],
          ["{a}He / She / One{/a}","{a}has{/a}"],
          ["{a}We{/a}","{a}have{/a}"],
          ["{a}You{/a}","{a}have{/a}"],
          ["{a}They{/a}","{a}have{/a}"]
        ],
        ar:[
          ["{a}أنا{/a}","{a}لديّ{/a}"],
          ["{a}أنت{/a}","{a}لديك{/a}"],
          ["{a}هو / هي{/a}","{a}لديه / لديها{/a}"],
          ["{a}نحن{/a}","{a}لدينا{/a}"],
          ["{a}أنتم / أنتن{/a}","{a}لديكم / لديكن{/a}"],
          ["{a}هم / هن{/a}","{a}لديهم / لديهن{/a}"]
        ],
        am:[
          ["{a}እኔ{/a}","{a}አለኝ{/a}"],
          ["{a}አንተ / አንቺ{/a}","{a}አለህ / አለሽ{/a}"],
          ["{a}እሱ / እሷ / እሱ{/a}","{a}አለው / አላት / አለ{/a}"],
          ["{a}እኛ{/a}","{a}አለን{/a}"],
          ["{a}እናንተ{/a}","{a}አላችሁ{/a}"],
          ["{a}እነሱ{/a}","{a}አላቸው{/a}"]
        ],
        prs:[
          ["{a}من{/a}","{a}دارم{/a}"],
          ["{a}تو{/a}","{a}داری{/a}"],
          ["{a}او{/a}","{a}دارد{/a}"],
          ["{a}ما{/a}","{a}داریم{/a}"],
          ["{a}شما{/a}","{a}دارید{/a}"],
          ["{a}آنها{/a}","{a}دارند{/a}"]
        ],
        es:[
          ["{a}Yo{/a}","{a}tengo{/a}"],
          ["{a}Tú{/a}","{a}tienes{/a}"],
          ["{a}Él / Ella / Uno{/a}","{a}tiene{/a}"],
          ["{a}Nosotros{/a}","{a}tenemos{/a}"],
          ["{a}Vosotros / Ustedes{/a}","{a}tenéis / tienen{/a}"],
          ["{a}Ellos / Ellas{/a}","{a}tienen{/a}"]
        ],
        it:[
          ["{a}Io{/a}","{a}ho{/a}"],
          ["{a}Tu{/a}","{a}hai{/a}"],
          ["{a}Lui / Lei{/a}","{a}ha{/a}"],
          ["{a}Noi{/a}","{a}abbiamo{/a}"],
          ["{a}Voi{/a}","{a}avete{/a}"],
          ["{a}Loro{/a}","{a}hanno{/a}"]
        ],
        fa:[
          ["{a}من{/a}","{a}دارم{/a}"],
          ["{a}تو{/a}","{a}داری{/a}"],
          ["{a}او{/a}","{a}دارد{/a}"],
          ["{a}ما{/a}","{a}داریم{/a}"],
          ["{a}شما{/a}","{a}دارید{/a}"],
          ["{a}آنها{/a}","{a}دارند{/a}"]
        ],
        ps:[
          ["{a}زه{/a}","{a}لرم{/a}"],
          ["{a}ته{/a}","{a}لرې{/a}"],
          ["{a}هغه{/a}","{a}لري{/a}"],
          ["{a}موږ{/a}","{a}لرو{/a}"],
          ["{a}تاسو{/a}","{a}لرئ{/a}"],
          ["{a}هغوی{/a}","{a}لري{/a}"]
        ],
        pt:[
          ["{a}Eu{/a}","{a}tenho{/a}"],
          ["{a}Tu{/a}","{a}tens{/a}"],
          ["{a}Ele / Ela{/a}","{a}tem{/a}"],
          ["{a}Nós{/a}","{a}temos{/a}"],
          ["{a}Vós / Vocês{/a}","{a}tendes / têm{/a}"],
          ["{a}Eles / Elas{/a}","{a}têm{/a}"]
        ],
        ru:[
          ["{a}Я{/a}","{a}имею{/a}"],
          ["{a}Ты{/a}","{a}имеешь{/a}"],
          ["{a}Он / Она{/a}","{a}имеет{/a}"],
          ["{a}Мы{/a}","{a}имеем{/a}"],
          ["{a}Вы{/a}","{a}имеете{/a}"],
          ["{a}Они{/a}","{a}имеют{/a}"]
        ],
        so:[
          ["{a}Aniga{/a}","{a}waan haystaa{/a}"],
          ["{a}Adiga{/a}","{a}waad haysataa{/a}"],
          ["{a}Isaga / Iyadu{/a}","{a}wuu / way haystaa{/a}"],
          ["{a}Annaga{/a}","{a}waan haysannaa{/a}"],
          ["{a}Idinka{/a}","{a}waad haysataan{/a}"],
          ["{a}Iyaga{/a}","{a}way haystaan{/a}"]
        ],
        ti:[
          ["{a}ኣነ{/a}","{a}ኣለኒ{/a}"],
          ["{a}ንስኻ / ንስኺ{/a}","{a}ኣለካ / ኣለኪ{/a}"],
          ["{a}ንሱ / ንሳ / ሰብ{/a}","{a}ኣለዎ / ኣለዋ / ኣሎ{/a}"],
          ["{a}ንሕና{/a}","{a}ኣለና{/a}"],
          ["{a}ንስኹም{/a}","{a}ኣለኩም{/a}"],
          ["{a}ንሳቶም / ንሳተን{/a}","{a}ኣለዎም / ኣለወን{/a}"]
        ],
        tr:[
          ["{a}Ben{/a}","{a}varım / sahibim{/a}"],
          ["{a}Sen{/a}","{a}varsın / sahipsin{/a}"],
          ["{a}O{/a}","{a}var / sahip{/a}"],
          ["{a}Biz{/a}","{a}varız / sahibiz{/a}"],
          ["{a}Siz{/a}","{a}varsınız / sahipsiniz{/a}"],
          ["{a}Onlar{/a}","{a}varlar / sahipler{/a}"]
        ],
        uk:[
          ["{a}Я{/a}","{a}маю{/a}"],
          ["{a}Ти{/a}","{a}маєш{/a}"],
          ["{a}Він / Вона / Воно{/a}","{a}має{/a}"],
          ["{a}Ми{/a}","{a}маємо{/a}"],
          ["{a}Ви{/a}","{a}маєте{/a}"],
          ["{a}Вони{/a}","{a}мають{/a}"]
        ]
      }
    },
    {
      type:"heading",
      text:"Expressions avec AVOIR",
      trans:{
        sq:"Shprehje me AVOIR",
        en:"Expressions with AVOIR",
        ar:"تعبيرات مع AVOIR",
        am:"ከ AVOIR ጋር የሚጠቀሙ አገላለጾች",
        prs:"عبارت‌های همراه با AVOIR",
        es:"Expresiones con AVOIR",
        it:"Espressioni con AVOIR",
        fa:"عبارت‌های همراه با AVOIR",
        ps:"له AVOIR سره عبارتونه",
        pt:"Expressões com AVOIR",
        ru:"Выражения с AVOIR",
        so:"Oraahyo leh AVOIR",
        ti:"መግለጺታት ምስ AVOIR",
        tr:"AVOIR ile ifadeler",
        uk:"Вирази з AVOIR"
      }
    },
    {
      type:"grid",
      headers:["Expression","Signification"],
      transHeaders:{
        sq:["Shprehje","Kuptimi"],
        en:["Expression","Meaning"],
        ar:["التعبير","المعنى"],
        am:["አገላለጽ","ትርጉም"],
        prs:["عبارت","معنی"],
        es:["Expresión","Significado"],
        it:["Espressione","Significato"],
        fa:["عبارت","معنی"],
        ps:["عبارت","معنا"],
        pt:["Expressão","Significado"],
        ru:["Выражение","Значение"],
        so:["Oraah","Macne"],
        ti:["መግለጺ","ትርጉም"],
        tr:["İfade","Anlam"],
        uk:["Вираз","Значення"]
      },
      colWidths:["35%","65%"],
      boldFirstCol:true,
      rows:[
        ["Avoir faim","vouloir manger"],
        ["Avoir soif","vouloir boire"],
        ["Avoir froid","ressentir le froid"],
        ["Avoir chaud","ressentir la chaleur"],
        ["Avoir peur","être effrayé(e)"],
        ["Avoir mal","ressentir une douleur"],
        ["Avoir raison","être correct(e)"],
        ["Avoir tort","se tromper"]
      ],
      transRows:{
        sq:[
          ["Avoir faim","të duash të hash"],
          ["Avoir soif","të duash të pish"],
          ["Avoir froid","të ndjesh të ftohtë"],
          ["Avoir chaud","të ndjesh nxehtësi"],
          ["Avoir peur","të kesh frikë"],
          ["Avoir mal","të ndjesh dhimbje"],
          ["Avoir raison","të kesh të drejtë"],
          ["Avoir tort","të gabosh"]
        ],
        en:[
          ["Avoir faim","to want to eat"],
          ["Avoir soif","to want to drink"],
          ["Avoir froid","to feel cold"],
          ["Avoir chaud","to feel hot"],
          ["Avoir peur","to be afraid"],
          ["Avoir mal","to feel pain"],
          ["Avoir raison","to be right"],
          ["Avoir tort","to be wrong"]
        ],
        ar:[
          ["Avoir faim","الرغبة في الأكل"],
          ["Avoir soif","الرغبة في الشرب"],
          ["Avoir froid","الشعور بالبرد"],
          ["Avoir chaud","الشعور بالحرارة"],
          ["Avoir peur","الشعور بالخوف"],
          ["Avoir mal","الشعور بالألم"],
          ["Avoir raison","أن يكون المرء محقًا"],
          ["Avoir tort","أن يكون المرء مخطئًا"]
        ],
        am:[
          ["Avoir faim","መብላት መፈለግ"],
          ["Avoir soif","መጠጣት መፈለግ"],
          ["Avoir froid","ብርድ መሰማት"],
          ["Avoir chaud","ሙቀት መሰማት"],
          ["Avoir peur","መፍራት"],
          ["Avoir mal","ህመም መሰማት"],
          ["Avoir raison","ትክክል መሆን"],
          ["Avoir tort","መሳሳት"]
        ],
        prs:[
          ["Avoir faim","خواستن غذا خوردن"],
          ["Avoir soif","خواستن نوشیدن"],
          ["Avoir froid","احساس سردی کردن"],
          ["Avoir chaud","احساس گرما کردن"],
          ["Avoir peur","ترسیدن"],
          ["Avoir mal","احساس درد کردن"],
          ["Avoir raison","حق داشتن"],
          ["Avoir tort","اشتباه کردن"]
        ],
        es:[
          ["Avoir faim","querer comer"],
          ["Avoir soif","querer beber"],
          ["Avoir froid","tener frío"],
          ["Avoir chaud","tener calor"],
          ["Avoir peur","tener miedo"],
          ["Avoir mal","sentir dolor"],
          ["Avoir raison","tener razón"],
          ["Avoir tort","equivocarse"]
        ],
        it:[
          ["Avoir faim","voler mangiare"],
          ["Avoir soif","voler bere"],
          ["Avoir froid","sentire freddo"],
          ["Avoir chaud","sentire caldo"],
          ["Avoir peur","avere paura"],
          ["Avoir mal","sentire dolore"],
          ["Avoir raison","avere ragione"],
          ["Avoir tort","sbagliarsi"]
        ],
        fa:[
          ["Avoir faim","میل به غذا خوردن"],
          ["Avoir soif","میل به نوشیدن"],
          ["Avoir froid","احساس سرما کردن"],
          ["Avoir chaud","احساس گرما کردن"],
          ["Avoir peur","ترسیدن"],
          ["Avoir mal","احساس درد کردن"],
          ["Avoir raison","حق داشتن"],
          ["Avoir tort","اشتباه کردن"]
        ],
        ps:[
          ["Avoir faim","د خوړلو غوښتل"],
          ["Avoir soif","د څښلو غوښتل"],
          ["Avoir froid","یخ احساسول"],
          ["Avoir chaud","تودوخه احساسول"],
          ["Avoir peur","وېریدل"],
          ["Avoir mal","درد احساسول"],
          ["Avoir raison","حق لرل"],
          ["Avoir tort","تېروتل"]
        ],
        pt:[
          ["Avoir faim","querer comer"],
          ["Avoir soif","querer beber"],
          ["Avoir froid","sentir frio"],
          ["Avoir chaud","sentir calor"],
          ["Avoir peur","ter medo"],
          ["Avoir mal","sentir dor"],
          ["Avoir raison","ter razão"],
          ["Avoir tort","enganar-se"]
        ],
        ru:[
          ["Avoir faim","хотеть есть"],
          ["Avoir soif","хотеть пить"],
          ["Avoir froid","чувствовать холод"],
          ["Avoir chaud","чувствовать жар"],
          ["Avoir peur","бояться"],
          ["Avoir mal","чувствовать боль"],
          ["Avoir raison","быть правым"],
          ["Avoir tort","ошибаться"]
        ],
        so:[
          ["Avoir faim","rabitaanka in la cuno"],
          ["Avoir soif","rabitaanka in la cabo"],
          ["Avoir froid","qabow dareemid"],
          ["Avoir chaud","kulayl dareemid"],
          ["Avoir peur","cabsi dareemid"],
          ["Avoir mal","xanuun dareemid"],
          ["Avoir raison","sax ahaansho"],
          ["Avoir tort","khalad samayn"]
        ],
        ti:[
          ["Avoir faim","ክትበልዕ ምድላይ"],
          ["Avoir soif","ክትሰቲ ምድላይ"],
          ["Avoir froid","ቁሪ ምስማዕ"],
          ["Avoir chaud","ሙቐት ምስማዕ"],
          ["Avoir peur","ምፍራሕ"],
          ["Avoir mal","ቃንዛ ምስማዕ"],
          ["Avoir raison","ቅኑዕ ምዃን"],
          ["Avoir tort","ምግጋይ"]
        ],
        tr:[
          ["Avoir faim","yemek istemek"],
          ["Avoir soif","içmek istemek"],
          ["Avoir froid","üşümek"],
          ["Avoir chaud","sıcak hissetmek"],
          ["Avoir peur","korkmak"],
          ["Avoir mal","acı hissetmek"],
          ["Avoir raison","haklı olmak"],
          ["Avoir tort","yanılmak"]
        ],
        uk:[
          ["Avoir faim","хотіти їсти"],
          ["Avoir soif","хотіти пити"],
          ["Avoir froid","відчувати холод"],
          ["Avoir chaud","відчувати спеку"],
          ["Avoir peur","боятися"],
          ["Avoir mal","відчувати біль"],
          ["Avoir raison","мати рацію"],
          ["Avoir tort","помилятися"]
        ]
      }
    },
    {
      type:"heading",
      text:"Prononciation et orthographe",
      trans:{
        sq:"Shqiptimi dhe drejtshkrimi",
        en:"Pronunciation and spelling",
        ar:"النطق والإملاء",
        am:"አነባብና አጻጻፍ",
        prs:"تلفظ و املا",
        es:"Pronunciación y ortografía",
        it:"Pronuncia e ortografia",
        fa:"تلفظ و املا",
        ps:"تلفظ او املا",
        pt:"Pronúncia e ortografia",
        ru:"Произношение и правописание",
        so:"Ku dhawaaqid iyo higaad",
        ti:"ኣደማምጻን ኣጸሓሕፋን",
        tr:"Telaffuz ve yazım",
        uk:"Вимова та правопис"
      }
    },
    {
      type:"text",
      text:"{a}1.{/a} On ne prononce pas le {a}e{/a} final de {a}elle{/a}.",
      transText:{
        sq:"{a}1.{/a} {a}e{/a}-ja në fund të {a}elle{/a} nuk shqiptohet.",
        en:"{a}1.{/a} The final {a}e{/a} in {a}elle{/a} is not pronounced.",
        ar:"{a}1.{/a} لا يُنطق حرف {a}e{/a} الأخير في {a}elle{/a}.",
        am:"{a}1.{/a} በ {a}elle{/a} መጨረሻ ያለው {a}e{/a} አይነበብም።",
        prs:"{a}1.{/a} حرف {a}e{/a} پایانی در {a}elle{/a} تلفظ نمی‌شود.",
        es:"{a}1.{/a} La {a}e{/a} final de {a}elle{/a} no se pronuncia.",
        it:"{a}1.{/a} La {a}e{/a} finale di {a}elle{/a} non si pronuncia.",
        fa:"{a}1.{/a} حرف {a}e{/a} پایانی در {a}elle{/a} تلفظ نمی‌شود.",
        ps:"{a}1.{/a} په {a}elle{/a} کې وروستی {a}e{/a} نه تلفظ کېږي.",
        pt:"{a}1.{/a} O {a}e{/a} final de {a}elle{/a} não se pronuncia.",
        ru:"{a}1.{/a} Конечная буква {a}e{/a} в слове {a}elle{/a} не произносится.",
        so:"{a}1.{/a} {a}e{/a}-ga ugu dambeeya ee {a}elle{/a} lama dhawaaqo.",
        ti:"{a}1.{/a} እቲ ናይ መወዳእታ {a}e{/a} ኣብ {a}elle{/a} ኣይድመጽን።",
        tr:"{a}1.{/a} {a}elle{/a} kelimesindeki son {a}e{/a} telaffuz edilmez.",
        uk:"{a}1.{/a} Кінцева літера {a}e{/a} у слові {a}elle{/a} не вимовляється."
      }
    },
    {
      type:"text",
      text:"{a}2.{/a} On fait la liaison.",
      transText:{
        sq:"{a}2.{/a} Bëhet lidhja e tingujve.",
        en:"{a}2.{/a} A liaison is made.",
        ar:"{a}2.{/a} نقوم بالوصل الصوتي.",
        am:"{a}2.{/a} የድምፅ ቅንጅት ይደረጋል።",
        prs:"{a}2.{/a} پیوند آوایی انجام می‌شود.",
        es:"{a}2.{/a} Se hace la liaison.",
        it:"{a}2.{/a} Si fa la liaison.",
        fa:"{a}2.{/a} پیوند آوایی انجام می‌شود.",
        ps:"{a}2.{/a} د غږونو پیوستون ترسره کېږي.",
        pt:"{a}2.{/a} Faz-se a ligação.",
        ru:"{a}2.{/a} Произносится связывание звуков (liaison).",
        so:"{a}2.{/a} Liaison ayaa la sameeyaa.",
        ti:"{a}2.{/a} ምትእስሳር ድምጺ ንገብር።",
        tr:"{a}2.{/a} Ulama yapılır.",
        uk:"{a}2.{/a} Виконується зв'язування звуків (liaison)."
      },
      items:["O{li}n|a{/li},nou{li}s|a{/li}vons,vou{li}s|a{/li}vez,il{li}s|o{/li}nt,elle{li}s|o{/li}nt."],
      noBulletItems:[0]
    },
    {
      type:"text",
      text:"{a}3.{/a} Le pronom {a}je{/a} devient {a}j'{/a} devant une voyelle.",
      transText:{
        sq:"{a}3.{/a} Përemri {a}je{/a} bëhet {a}j'{/a} para një zanoreje.",
        en:"{a}3.{/a} The pronoun {a}je{/a} becomes {a}j'{/a} before a vowel.",
        ar:"{a}3.{/a} يتحول الضمير {a}je{/a} إلى {a}j'{/a} قبل حرف متحرك.",
        am:"{a}3.{/a} ተውላጠ ስም {a}je{/a} ከአናባቢ በፊት {a}j'{/a} ይሆናል።",
        prs:"{a}3.{/a} ضمیر {a}je{/a} پیش از یک حرف صدادار به {a}j'{/a} تبدیل می‌شود.",
        es:"{a}3.{/a} El pronombre {a}je{/a} se convierte en {a}j'{/a} delante de una vocal.",
        it:"{a}3.{/a} Il pronome {a}je{/a} diventa {a}j'{/a} davanti a una vocale.",
        fa:"{a}3.{/a} ضمیر {a}je{/a} پیش از یک حرف صدادار به {a}j'{/a} تبدیل می‌شود.",
        ps:"{a}3.{/a} ضمیر {a}je{/a} د واول مخکې {a}j'{/a} کېږي.",
        pt:"{a}3.{/a} O pronome {a}je{/a} torna-se {a}j'{/a} antes de uma vogal.",
        ru:"{a}3.{/a} Перед гласной местоимение {a}je{/a} превращается в {a}j'{/a}.",
        so:"{a}3.{/a} Magac-u-yaalka {a}je{/a} wuxuu noqdaa {a}j'{/a} ka hor shaqal.",
        ti:"{a}3.{/a} ተካኢ ስም {a}je{/a} ቅድሚ ኣድማጺ ፊደል ናብ {a}j'{/a} ይቕየር።",
        tr:"{a}3.{/a} {a}je{/a} zamiri bir ünlüden önce {a}j'{/a} olur.",
        uk:"{a}3.{/a} Перед голосною займенник {a}je{/a} перетворюється на {a}j'{/a}."
      },
      items:["{s}Je ai{/s}→{a}J'ai{/a} 20 ans."],
      inlineArrows:true,
      noBulletItems:[0]
    }
  ],
  exercises:G1_EXERCISES["G1.3"]()
};