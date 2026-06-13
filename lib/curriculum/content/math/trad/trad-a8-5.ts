import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });
const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_A8_5: SubmoduleTrad = {
  submoduleId: "A8-5",
  title: S("Priorité des opérations", "Order of operations", "ترتيب العمليات", "ترتیب عملیات", "ቅደም ተኸተል ስሌታት", "Порядок дій", "Prioridade das operações", "Mudnaanta xisaab-fallada", "İşlem önceliği", "د عملياتو لومړيتوب"),
  blocks: [
    { text: S("Qu'est-ce que la priorité des opérations ?", "What is the order of operations?", "ما هو ترتيب العمليات؟", "ترتیب عملیات چیست؟", "ቅደም ተኸተል ስሌታት እንታይ እዩ?", "Що таке порядок дій?", "O que é a prioridade das operações?", "Waa maxay mudnaanta xisaab-fallada?", "İşlem önceliği nedir?", "د عملياتو لومړيتوب څه دی؟") },
    { text: S(
      "Lorsqu'un calcul contient plusieurs opérations, il faut les effectuer dans un ordre précis.",
      "When a calculation contains several operations, they must be done in a precise order.",
      "عندما تحتوي عملية حسابية على عدة عمليات، يجب إنجازها بترتيب محدد.",
      "وقتی یک محاسبه چند عمل دارد، باید آن‌ها را با ترتیب دقیق انجام داد.",
      "ሓደ ሕሳብ ብዙሓት ስሌታት እንተሃልይዎ፣ ብትኽክለኛ ቅደም ተኸተል ክግበሩ ኣለዎም።",
      "Коли обчислення містить кілька дій, їх потрібно виконувати у точному порядку.",
      "Quando um cálculo contém várias operações, elas devem ser efetuadas numa ordem precisa.",
      "Marka xisaabtu leedahay dhowr hawlood, waa in lagu sameeyaa amar sax ah.",
      "Bir işlemde birkaç işlem türü varsa, bunlar belirli bir sırayla yapılmalıdır.",
      "کله چې يو حساب څو عمليات ولري، بايد په ټاکلي ترتيب ترسره شي."
    ) },
    { text: S("Ordre des priorités", "Order of priority", "ترتيب الأولويات", "ترتیب اولویت‌ها", "ቅደም ተኸተል ቀዳምነት", "Порядок пріоритетів", "Ordem de prioridade", "Kala horraynta mudnaanta", "Öncelik sırası", "د لومړيتوب ترتيب") },
    { items: A(
      ["**1.** Parenthèses ( ), crochets [ ] et accolades { } — de l'intérieur vers l'extérieur", "**2.** Puissances et racines carrées", "**3.** Multiplications × et divisions ÷ (de gauche à droite)", "**4.** Additions + et soustractions − (de gauche à droite)"],
      ["**1.** Parentheses ( ), brackets [ ], and braces { } — from inside to outside", "**2.** Powers and square roots", "**3.** Multiplications × and divisions ÷ (from left to right)", "**4.** Additions + and subtractions − (from left to right)"],
      ["**1.** الأقواس ( ) والمعقوفات [ ] والحاضنات { } — من الداخل إلى الخارج", "**2.** القوى والجذور التربيعية", "**3.** الضرب × والقسمة ÷ (من اليسار إلى اليمين)", "**4.** الجمع + والطرح − (من اليسار إلى اليمين)"],
      ["**1.** پرانتزها ( )، کروشه‌ها [ ] و آکولادها { } — از داخل به خارج", "**2.** توان‌ها و ریشه‌های مربع", "**3.** ضرب × و تقسیم ÷ (از چپ به راست)", "**4.** جمع + و تفریق − (از چپ به راست)"],
      ["**1.** ቅንፍ ( )፣ ስኩዌር ቅንፍ [ ]፣ ኣኮላድ { } — ካብ ውሽጢ ናብ ደገ", "**2.** ሓይልታትን ሱር ካሬን", "**3.** ምብዛሕ × እና ምክፋል ÷ (ካብ ጸጋም ናብ የማን)", "**4.** ምድማር + እና ምንካይ − (ካብ ጸጋም ናብ የማን)"],
      ["**1.** Дужки ( ), квадратні дужки [ ] і фігурні дужки { } — зсередини назовні", "**2.** Степені та квадратні корені", "**3.** Множення × і ділення ÷ (зліва направо)", "**4.** Додавання + і віднімання − (зліва направо)"],
      ["**1.** Parênteses ( ), colchetes [ ] e chavetas { } — do interior para o exterior", "**2.** Potências e raízes quadradas", "**3.** Multiplicações × e divisões ÷ (da esquerda para a direita)", "**4.** Adições + e subtrações − (da esquerda para a direita)"],
      ["**1.** Qaansooyin ( ), labajibbaarane [ ] iyo xarriiqyo { } — gudaha ilaa bannaanka", "**2.** Awoodaha iyo xididdada laba jibbaaran", "**3.** Isku-dhufasho × iyo qaybin ÷ (bidix ilaa midig)", "**4.** Isku-dar + iyo kala-jar − (bidix ilaa midig)"],
      ["**1.** Parantez ( ), köşeli parantez [ ] ve süslü parantez { } — içten dışa", "**2.** Üsler ve karekökler", "**3.** Çarpma × ve bölme ÷ (soldan sağa)", "**4.** Toplama + ve çıkarma − (soldan sağa)"],
      ["**1.** قوسونه ( )، چوکاتونه [ ] او اکولادونه { } — له دننه څخه بهر ته", "**2.** توانونه او مربع ريښې", "**3.** ضرب × او وېش ÷ (له کيڼ څخه ښي ته)", "**4.** جمع + او تفريق − (له کيڼ څخه ښي ته)"]
    ) },
    { text: S("", "", "", "", "", "", "", "", "", "") },
    { text: S("Exemples", "Examples", "أمثلة", "مثال‌ها", "ኣብነታት", "Приклади", "Exemplos", "Tusaalooyin", "Örnekler", "بېلګې") },
    { text: S("3 + 4 × 2", "3 + 4 × 2", "3 + 4 × 2", "3 + 4 × 2", "3 + 4 × 2", "3 + 4 × 2", "3 + 4 × 2", "3 + 4 × 2", "3 + 4 × 2", "3 + 4 × 2") },
    { items: A(
      ["On effectue d'abord la multiplication : 4 × 2 = 8", "Puis l'addition : 3 + 8 = **11**"],
      ["First do the multiplication: 4 × 2 = 8", "Then the addition: 3 + 8 = **11**"],
      ["ننجز الضرب أولا: 4 × 2 = 8", "ثم الجمع: 3 + 8 = **11**"],
      ["اول ضرب را انجام می‌دهیم: 4 × 2 = 8", "سپس جمع: 3 + 8 = **11**"],
      ["መጀመርታ ምብዛሕ ንገብር፦ 4 × 2 = 8", "ድሕሪኡ ምድማር፦ 3 + 8 = **11**"],
      ["Спочатку виконуємо множення: 4 × 2 = 8", "Потім додавання: 3 + 8 = **11**"],
      ["Primeiro faz-se a multiplicação: 4 × 2 = 8", "Depois a adição: 3 + 8 = **11**"],
      ["Marka hore samee isku-dhufashada: 4 × 2 = 8", "Kadib isku-darka: 3 + 8 = **11**"],
      ["Önce çarpma yapılır: 4 × 2 = 8", "Sonra toplama: 3 + 8 = **11**"],
      ["لومړی ضرب کوو: 4 × 2 = 8", "بيا جمع: 3 + 8 = **11**"]
    ) },
    { text: S("(3 + 4) × 2", "(3 + 4) × 2", "(3 + 4) × 2", "(3 + 4) × 2", "(3 + 4) × 2", "(3 + 4) × 2", "(3 + 4) × 2", "(3 + 4) × 2", "(3 + 4) × 2", "(3 + 4) × 2") },
    { items: A(
      ["On effectue d'abord les parenthèses : 3 + 4 = 7", "Puis la multiplication : 7 × 2 = **14**"],
      ["First do the parentheses: 3 + 4 = 7", "Then the multiplication: 7 × 2 = **14**"],
      ["ننجز الأقواس أولا: 3 + 4 = 7", "ثم الضرب: 7 × 2 = **14**"],
      ["اول پرانتز را انجام می‌دهیم: 3 + 4 = 7", "سپس ضرب: 7 × 2 = **14**"],
      ["መጀመርታ ቅንፍ ንገብር፦ 3 + 4 = 7", "ድሕሪኡ ምብዛሕ፦ 7 × 2 = **14**"],
      ["Спочатку виконуємо дужки: 3 + 4 = 7", "Потім множення: 7 × 2 = **14**"],
      ["Primeiro fazem-se os parênteses: 3 + 4 = 7", "Depois a multiplicação: 7 × 2 = **14**"],
      ["Marka hore samee qaansooyinka: 3 + 4 = 7", "Kadib isku-dhufashada: 7 × 2 = **14**"],
      ["Önce parantez yapılır: 3 + 4 = 7", "Sonra çarpma: 7 × 2 = **14**"],
      ["لومړی قوسونه کوو: 3 + 4 = 7", "بيا ضرب: 7 × 2 = **14**"]
    ) },
    { text: S("2² + 3 × 4 − 1", "2² + 3 × 4 − 1", "2² + 3 × 4 − 1", "2² + 3 × 4 − 1", "2² + 3 × 4 − 1", "2² + 3 × 4 − 1", "2² + 3 × 4 − 1", "2² + 3 × 4 − 1", "2² + 3 × 4 − 1", "2² + 3 × 4 − 1") },
    { items: A(
      ["Puissance : 2² = 4", "Multiplication : 3 × 4 = 12", "De gauche à droite : 4 + 12 − 1 = **15**"],
      ["Power: 2² = 4", "Multiplication: 3 × 4 = 12", "From left to right: 4 + 12 − 1 = **15**"],
      ["القوة: 2² = 4", "الضرب: 3 × 4 = 12", "من اليسار إلى اليمين: 4 + 12 − 1 = **15**"],
      ["توان: 2² = 4", "ضرب: 3 × 4 = 12", "از چپ به راست: 4 + 12 − 1 = **15**"],
      ["ሓይሊ፦ 2² = 4", "ምብዛሕ፦ 3 × 4 = 12", "ካብ ጸጋም ናብ የማን፦ 4 + 12 − 1 = **15**"],
      ["Степінь: 2² = 4", "Множення: 3 × 4 = 12", "Зліва направо: 4 + 12 − 1 = **15**"],
      ["Potência: 2² = 4", "Multiplicação: 3 × 4 = 12", "Da esquerda para a direita: 4 + 12 − 1 = **15**"],
      ["Awood: 2² = 4", "Isku-dhufasho: 3 × 4 = 12", "Bidix ilaa midig: 4 + 12 − 1 = **15**"],
      ["Üs: 2² = 4", "Çarpma: 3 × 4 = 12", "Soldan sağa: 4 + 12 − 1 = **15**"],
      ["توان: 2² = 4", "ضرب: 3 × 4 = 12", "له کيڼ څخه ښي ته: 4 + 12 − 1 = **15**"]
    ) },
    { text: S("{[2 + (3 × 4)] − 5} × 2", "{[2 + (3 × 4)] − 5} × 2", "{[2 + (3 × 4)] − 5} × 2", "{[2 + (3 × 4)] − 5} × 2", "{[2 + (3 × 4)] − 5} × 2", "{[2 + (3 × 4)] − 5} × 2", "{[2 + (3 × 4)] − 5} × 2", "{[2 + (3 × 4)] − 5} × 2", "{[2 + (3 × 4)] − 5} × 2", "{[2 + (3 × 4)] − 5} × 2") },
    { items: A(
      ["Parenthèses : 3 × 4 = 12 → {[2 + 12] − 5} × 2", "Crochets : 2 + 12 = 14 → {14 − 5} × 2", "Accolades : 14 − 5 = 9 → 9 × 2", "Multiplication : 9 × 2 = **18**"],
      ["Parentheses: 3 × 4 = 12 → {[2 + 12] − 5} × 2", "Brackets: 2 + 12 = 14 → {14 − 5} × 2", "Braces: 14 − 5 = 9 → 9 × 2", "Multiplication: 9 × 2 = **18**"],
      ["الأقواس: 3 × 4 = 12 → {[2 + 12] − 5} × 2", "المعقوفات: 2 + 12 = 14 → {14 − 5} × 2", "الحاضنات: 14 − 5 = 9 → 9 × 2", "الضرب: 9 × 2 = **18**"],
      ["پرانتزها: 3 × 4 = 12 → {[2 + 12] − 5} × 2", "کروشه‌ها: 2 + 12 = 14 → {14 − 5} × 2", "آکولادها: 14 − 5 = 9 → 9 × 2", "ضرب: 9 × 2 = **18**"],
      ["ቅንፍ፦ 3 × 4 = 12 → {[2 + 12] − 5} × 2", "ስኩዌር ቅንፍ፦ 2 + 12 = 14 → {14 − 5} × 2", "ኣኮላድ፦ 14 − 5 = 9 → 9 × 2", "ምብዛሕ፦ 9 × 2 = **18**"],
      ["Дужки: 3 × 4 = 12 → {[2 + 12] − 5} × 2", "Квадратні дужки: 2 + 12 = 14 → {14 − 5} × 2", "Фігурні дужки: 14 − 5 = 9 → 9 × 2", "Множення: 9 × 2 = **18**"],
      ["Parênteses: 3 × 4 = 12 → {[2 + 12] − 5} × 2", "Colchetes: 2 + 12 = 14 → {14 − 5} × 2", "Chavetas: 14 − 5 = 9 → 9 × 2", "Multiplicação: 9 × 2 = **18**"],
      ["Qaansooyin: 3 × 4 = 12 → {[2 + 12] − 5} × 2", "Xirmooyin: 2 + 12 = 14 → {14 − 5} × 2", "Xarriiqyo: 14 − 5 = 9 → 9 × 2", "Isku-dhufasho: 9 × 2 = **18**"],
      ["Parantez: 3 × 4 = 12 → {[2 + 12] − 5} × 2", "Köşeli parantez: 2 + 12 = 14 → {14 − 5} × 2", "Süslü parantez: 14 − 5 = 9 → 9 × 2", "Çarpma: 9 × 2 = **18**"],
      ["قوسونه: 3 × 4 = 12 → {[2 + 12] − 5} × 2", "چوکاتونه: 2 + 12 = 14 → {14 − 5} × 2", "اکولادونه: 14 − 5 = 9 → 9 × 2", "ضرب: 9 × 2 = **18**"]
    ) },
  ],
};
