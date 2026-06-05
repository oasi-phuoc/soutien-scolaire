const fs = require("fs");

const base = "lib/curriculum/content/math/trad/";
const data = {
  "trad-a1-1.ts": [
    { so: "Tirinta Faransiiska", tr: "Fransizca sayma", ps: "په فرانسوي کې شمېرل" },
    {
      so: [
        "Tiro dhan waxaa lagu qoraa lambarro (0 ilaa 9).",
        "Faransiiska, kumannada badanaa waxaa lagu kala saaraa meel bannaan oo dhuuban: 125 000.",
        "Iswiiska Faransiiska lagaga hadlo, dadku badanaa waxay 70, 80 iyo 90 u yiraahdaan septante, huitante iyo nonante.",
      ],
      tr: [
        "Tam sayi rakamlarla yazilir (0 ile 9 arasi).",
        "Fransizcada binlikler cogu zaman ince bir boslukla ayrilir: 125 000.",
        "Fransizca konusulan Isvicre'de 70, 80 ve 90 icin sikca septante, huitante ve nonante denir.",
      ],
      ps: [
        "صحيح عدد د رقمونو په وسیله ليکل کېږي (له 0 تر 9).",
        "په فرانسوي کې زرګونه ډېر وخت په نري تش ځای بېلېږي: 125 000.",
        "د سويس په فرانسوي ژبو سيمه کې د 70، 80 او 90 لپاره ډېر وخت septante، huitante او nonante ويل کېږي.",
      ],
    },
    { so: "Duubis", tr: "Kayit", ps: "ثبت" },
    { so: "Casaan: hal cod", tr: "Kirmizi: tek ses", ps: "سور: يو غږ" },
    { so: "Madow: cod", tr: "Siyah: ses", ps: "تور: غږ" },
    { so: "Cawl: cod la'aan", tr: "Gri: sessiz", ps: "خړ: بې غږه" },
  ],
  "trad-a1-2.ts": [
    { so: "Akhrinta iyo fahamka tirooyinka", tr: "Sayilari okuma ve anlama", ps: "د عددونو لوستل او پوهېدل" },
    { so: "Lambar kasta wuxuu leeyahay meel gaar ah oo ku jirta tirada.", tr: "Her rakam bir sayida belirli bir basamakta durur.", ps: "هر رقم په عدد کې ځانګړی ځای لري." },
    { so: ["Tiro", "Kun", "Boqol", "Toban", "Hal"], tr: ["Sayi", "Bin", "Yuz", "On", "Bir"], ps: ["عدد", "زر", "سل", "لس", "يو"] },
    { so: "Sida loo akhriyo qiimaha lambar", tr: "Bir rakamin degerini okuma", ps: "د رقم ارزښت څنګه ولولو" },
    { so: "Hel booskiisa", tr: "Basamagini bul", ps: "ځای يې پيدا کړه" },
    {
      so: ["Fiiri booska lambarka ee tirada.", "Hal = x 1", "Toban = x 10", "Boqol = x 100", "Kun = x 1 000"],
      tr: ["Rakamin sayidaki basamagina bak.", "Birler = x 1", "Onlar = x 10", "Yuzler = x 100", "Binler = x 1 000"],
      ps: ["په عدد کې د رقم ځای وګوره.", "يوګان = x 1", "لسګان = x 10", "سلګان = x 100", "زرګان = x 1 000"],
    },
    { so: "Qiimaha lambarka = lambar x qiimaha booska.", tr: "Rakam degeri = rakam x basamak degeri.", ps: "د رقم ارزښت = رقم x د ځای ارزښت." },
    { so: "Tirada 3 864 dhexdeeda:", tr: "3 864 sayisinda:", ps: "په 3 864 عدد کې:" },
    {
      so: ["Lambarka 8 wuxuu ku jiraa booska boqollada.", "Markaa waxaan samaynaa 8 x 100 = 800.", "3 864 = 3 000 + 800 + 60 + 4"],
      tr: ["8 rakami yuzler basamagindadir.", "Bu yuzden 8 x 100 = 800 yapariz.", "3 864 = 3 000 + 800 + 60 + 4"],
      ps: ["رقم 8 د سلګانو په ځای کې دی.", "نو 8 x 100 = 800 کوو.", "3 864 = 3 000 + 800 + 60 + 4"],
    },
  ],
  "trad-a1-3.ts": [
    { so: "Kee baa weyn?", tr: "Hangisi daha buyuk?", ps: "کوم يو لوی دی؟" },
    { so: "Tirooyin la isbarbardhigo waxay ka dhigan tahay in la ogaado kee ugu weyn, kee ugu yar, ama inay siman yihiin.", tr: "Sayilari karsilastirmak, hangisinin buyuk, kucuk ya da esit oldugunu belirlemektir.", ps: "د عددونو پرتله کول يعنې معلومول چې کوم لوی، کوم کوچنی، يا برابر دي." },
    { so: "Calaamadaha isbarbardhigga", tr: "Karsilastirma isaretleri", ps: "د پرتله کولو نښې" },
    { so: "Dhinaca furan ee > had iyo jeer wuxuu u jeedaa tirada weyn.", tr: "> isaretinin acik tarafi her zaman buyuk sayiyi gosterir.", ps: "د > پرانیستې خوا تل لوی عدد ته وي." },
    { so: ["Isbarbardhig", "Calaamad", "Tusaale"], tr: ["Karsilastirma", "Isaret", "Ornek"], ps: ["پرتله", "نښه", "بېلګه"] },
    { so: "Xeerka isbarbardhigga", tr: "Karsilastirma kurali", ps: "د پرتله کولو قاعده" },
    { so: "Tirooyin leh lambarro kala tiro badan", tr: "Basamak sayisi farkli olan sayilar", ps: "هغه عددونه چې د رقمونو شمېر يې توپير لري" },
    { so: ["Tirada dheer ayaa weyn."], tr: ["Daha uzun sayi daha buyuktur."], ps: ["هغه عدد چې رقمونه يې ډېر وي، لوی دی."] },
    { so: "Tirooyin leh lambarro isku tiro ah", tr: "Basamak sayisi ayni olan sayilar", ps: "هغه عددونه چې د رقمونو شمېر يې يو شان وي" },
    { so: ["Bidix ka bilow oo lambar lambar u barbar dhig.", "Marka lambar kala duwanaado, eeg kee weyn."], tr: ["Soldan baslayarak rakam rakam karsilastir.", "Bir rakam farkli oldugunda hangisinin buyuk olduguna bak."], ps: ["له کيڼ اړخه رقم په رقم پرتله کړه.", "کله چې يو رقم توپير ولري، وګوره کوم لوی دی."] },
    { so: "Tusaale", tr: "Ornek", ps: "بېلګه" },
    { so: "Waxaan haynaa laba tiro: 3 456 iyo 3 421", tr: "Iki sayimiz var: 3 456 ve 3 421", ps: "موږ دوه عددونه لرو: 3 456 او 3 421" },
    { so: ["Lambarro isku tiro ah", "Kumannaanku waa siman yihiin", "Boqollaalku waa siman yihiin", "Tobannaanka: 5 > 2", "Sidaas darteed 3 456 > 3 421"], tr: ["Basamak sayisi ayni", "Binler esit", "Yuzler esit", "Onlar: 5 > 2", "Bu yuzden 3 456 > 3 421"], ps: ["د رقمونو شمېر يو شان دی", "زرګان برابر دي", "سلګان برابر دي", "لسګان: 5 > 2", "نو 3 456 > 3 421"] },
    { so: "Qiime u dhexeeya laba xad", tr: "Iki sinir arasindaki deger", ps: "د دوو پولو ترمنځ ارزښت" },
    { so: "Mabda'a", tr: "Ilke", ps: "اصل" },
    { so: "Marka qiime uu u dhexeeyo laba tiro, waxay ka dhigan tahay:", tr: "Bir deger iki sayi arasindaysa su anlama gelir:", ps: "کله چې يو ارزښت د دوو عددونو ترمنځ وي، معنا يې دا ده:" },
    { so: ["Qiimuhu wuu ka weyn yahay tirada koowaad.", "Qiimuhu wuu ka yar yahay tirada labaad."], tr: ["Deger ilk sayidan buyuktur.", "Deger ikinci sayidan kucuktur."], ps: ["ارزښت له لومړي عدد څخه لوی دی.", "ارزښت له دوهم عدد څخه کوچنی دی."] },
    { so: "Tusaale", tr: "Ornek", ps: "بېلګه" },
    { so: "Tirooyinkee ayaa u dhexeeya 3 iyo 8?", tr: "3 ile 8 arasinda hangi sayilar vardir?", ps: "کوم عددونه د 3 او 8 ترمنځ دي؟" },
    { so: ["Waxaan raadinaynaa tirooyin ka weyn 3 kana yar 8. (3 < ? < 8)", "Tirooyinka suurtagalka ah waa: 4, 5, 6, 7"], tr: ["3'ten buyuk ve 8'den kucuk sayilari arariz. (3 < ? < 8)", "Olası sayilar: 4, 5, 6, 7"], ps: ["موږ داسې عددونه لټو چې له 3 څخه لوی او له 8 څخه کوچني وي. (3 < ? < 8)", "ممکن عددونه دا دي: 4، 5، 6، 7"] },
    { so: "Tiro kasta u wareeji tobanka ugu dhow.", tr: "Her sayiyi en yakin onluga yuvarla.", ps: "هر عدد تر ټولو نږدې لسګان ته ګرد کړه." },
    { so: "Tiro kasta u wareeji boqolka ugu dhow.", tr: "Her sayiyi en yakin yuzluge yuvarla.", ps: "هر عدد تر ټولو نږدې سلګان ته ګرد کړه." },
    { so: "Dooro tirooyinka ka weyn {n}.", tr: "{n} sayisindan buyuk olanlari sec.", ps: "له {n} څخه لوی عددونه وټاکه." },
    { so: "Dooro tirooyinka ka yar {n}.", tr: "{n} sayisindan kucuk olanlari sec.", ps: "له {n} څخه کوچني عددونه وټاکه." },
    { so: "Dooro tirooyinka u dhexeeya {n} iyo {n2}.", tr: "{n} ile {n2} arasindaki sayilari sec.", ps: "د {n} او {n2} ترمنځ عددونه وټاکه." },
  ],
  "trad-a1-4.ts": [
    { so: "Xariiqda tirooyinka", tr: "Sayi dogrusu", ps: "د عددونو کرښه" },
    {
      so: [
        "Xariiqda tirooyinka, tirooyinka waxaa loo dhigaa kor u kac bidix ilaa midig. Farqiga u dhexeeya laba daris wuxuu noqon karaa 5, 10, 100… iyadoo ku xiran cabbirka.",
        "Si loo helo tiro u dhexeysa laba tiro, akhri cabbirka: tusaale ahaan 450 iyo 460 oo talaabadu tahay 5, waxaad dhigi kartaa 455.",
        "Tiro waa **dhaban** haddii ay ku dhammaato 0, 2, 4, 6 ama 8. Waxaa loo qaybin karaa laba kooxood oo siman. Tusaale: 4, 12, 38.",
        "Tiro waa **kinsi** haddii ay ku dhammaato 1, 3, 5, 7 ama 9. Looma qaybin karo laba kooxood oo siman. Tusaale: 3, 17, 45.",
      ],
      tr: [
        "Sayi dogrusunda sayilar soldan saga artan sirayla yerlestirilir. Iki komsu sayi arasindaki aralik olcege gore 5, 10, 100… olabilir.",
        "Iki sayi arasindaki bir sayiyi bulmak icin olcegi oku: ornegin 450 ile 460 arasinda adim 5 ise 455 yerlestirilebilir.",
        "Bir sayi 0, 2, 4, 6 veya 8 ile bitiyorsa **cifttir**. Iki esit gruba ayrilabilir. Ornekler: 4, 12, 38.",
        "Bir sayi 1, 3, 5, 7 veya 9 ile bitiyorsa **tektir**. Iki esit gruba tam ayrilamaz. Ornekler: 3, 17, 45.",
      ],
      ps: [
        "د عددونو پر کرښه عددونه له کيڼ څخه ښي ته په زياتېدونکي ترتيب اېښودل کېږي. د دوو ګاونډيو عددونو ترمنځ واټن د کچې له مخې 5، 10، 100… کېدای شي.",
        "د دوو عددونو ترمنځ د عدد موندلو لپاره کچه ولوله: د بېلګې په توګه د 450 او 460 ترمنځ، که ګام 5 وي، 455 اېښودل کېدای شي.",
        "عدد **جفت** دی که په 0، 2، 4، 6 يا 8 پای ته ورسېږي. دا په دوو برابرو ډلو وېشل کېدای شي. بېلګې: 4، 12، 38.",
        "عدد **طاق** دی که په 1، 3، 5، 7 يا 9 پای ته ورسېږي. دا په دوو برابرو ډلو نه شي وېشل کېدای. بېلګې: 3، 17، 45.",
      ],
    },
    { so: "Xariiqda tirooyinka, tirooyinku bidix ilaa midig ayay u kordhaan. Farqigu wuxuu noqon karaa 1, 2, 5, 10, 100… iyadoo ku xiran cabbirka.", tr: "Sayi dogrusunda sayilar soldan saga artan siradadir. Ardışık sayilar arasindaki aralik olcege gore 1, 2, 5, 10, 100… olabilir.", ps: "د عددونو پر کرښه عددونه له کيڼ څخه ښي ته زياتېږي. د پرله پسې عددونو واټن د کچې له مخې 1، 2، 5، 10، 100… کېدای شي." },
    { so: "Tirooyinka dhaban iyo kinsi", tr: "Cift ve tek sayilar", ps: "جفت او طاق عددونه" },
    { so: "Si aad u ogaato in tiro dhaban tahay ama kinsi, eeg lambarka ugu dambeeya oo keliya.", tr: "Bir sayinin cift mi tek mi oldugunu anlamak icin sadece son rakama bak.", ps: "د دې لپاره چې پوه شې عدد جفت دی که طاق، يوازې وروستی رقم وګوره." },
    { so: "Dhaban", tr: "Cift", ps: "جفت" },
    { so: ["Tiro dhaban waxaa loo qaybin karaa 2 qaybood oo siman.", "Waxay ku dhammaataa 0, 2, 4, 6 ama 8.", "4, 12, 38, 100…"], tr: ["Cift sayi 2 esit parcaya ayrilabilir.", "0, 2, 4, 6 veya 8 ile biter.", "4, 12, 38, 100…"], ps: ["جفت عدد په 2 برابرو برخو وېشل کېدای شي.", "په 0، 2، 4، 6 يا 8 پای ته رسېږي.", "4، 12، 38، 100…"] },
    { so: "Kinsi", tr: "Tek", ps: "طاق" },
    { so: ["Tiro kinsi si sax ah looma qaybin karo 2 qaybood oo siman.", "Waxay ku dhammaataa 1, 3, 5, 7 ama 9.", "3, 17, 45, 99…"], tr: ["Tek sayi tam olarak 2 esit parcaya ayrilamaz.", "1, 3, 5, 7 veya 9 ile biter.", "3, 17, 45, 99…"], ps: ["طاق عدد په بشپړ ډول په 2 برابرو برخو نه وېشل کېږي.", "په 1، 3، 5، 7 يا 9 پای ته رسېږي.", "3، 17، 45، 99…"] },
    { so: "Sheeg in tiro kasta dhaban tahay ama kinsi.", tr: "Her sayinin cift mi tek mi oldugunu belirt.", ps: "وښيه چې هر عدد جفت دی که طاق." },
    { so: "Qor tirada ay fallaadhu tilmaamayso.", tr: "Okun gosterdigi sayiyi yaz.", ps: "هغه عدد وليکه چې غشی يې ښيي." },
    { so: "Qor tiro ka yar tan fallaadhu tilmaamayso.", tr: "Okun gosterdigi sayidan daha kucuk bir sayi yaz.", ps: "له هغه عدد څخه کوچنی عدد وليکه چې غشی يې ښيي." },
    { so: "Qor tiro ka weyn tan fallaadhu tilmaamayso.", tr: "Okun gosterdigi sayidan daha buyuk bir sayi yaz.", ps: "له هغه عدد څخه لوی عدد وليکه چې غشی يې ښيي." },
  ],
  "trad-a1-5.ts": [
    { so: "Taxanaha tirooyinka", tr: "Sayi dizileri", ps: "د عددونو لړۍ" },
    { so: "Taxane tiro waa liis nidaamsan; xubin kasta waxaa lagu helaa isla xeerka. Mar walba waxaan ku darnaa ama ka jarnnaa tiro isku mid ah.", tr: "Sayi dizisi, her terimin ayni kuralla bulundugu sirali bir listedir. Her zaman ayni sayiyi ekler ya da cikaririz.", ps: "د عددونو لړۍ منظم لېست دی چې هر غړی يې د يوې قاعدې له مخې پيدا کېږي. تل يو شان عدد جمع يا منفي کوو." },
    { so: "Si taxane loo fahmo, waxaan eegnaa waxa tirooyinka dhexdooda iska beddelaya.", tr: "Bir diziyi anlamak icin sayilar arasinda neyin degistigine bakariz.", ps: "د لړۍ د پوهېدو لپاره ګورو چې د عددونو ترمنځ څه بدلېږي." },
    { so: "Tusaale", tr: "Ornek", ps: "بېلګه" },
    { so: ["Mar walba 3 ayaan ku darnaa.", "Xeerka tirada xigta waa: tiro + 3"], tr: ["Her zaman 3 ekleriz.", "Sonraki sayiyi bulma kurali: sayi + 3"], ps: ["تل 3 ورزیاتوو.", "د بل عدد د موندلو قاعده: عدد + 3"] },
    { so: "Taxane kordhaya", tr: "Artan dizi", ps: "زیاتېدونکې لړۍ" },
    { so: ["Tirooyinku way kordhaan: 1 ; 3 ; 5 ; 7 ."], tr: ["Sayilar artar: 1 ; 3 ; 5 ; 7 ."], ps: ["عددونه زياتېږي: 1 ; 3 ; 5 ; 7 ."] },
    { so: "Taxane yaraanaya", tr: "Azalan dizi", ps: "کمېدونکې لړۍ" },
    { so: ["Tirooyinku way yaraadaan: 20 ; 15 ; 10 ; 5 ."], tr: ["Sayilar azalir: 20 ; 15 ; 10 ; 5 ."], ps: ["عددونه کمېږي: 20 ; 15 ; 10 ; 5 ."] },
    { so: "Tirooyinka u kala saar kor u kaca (ka yar ilaa ka weyn).", tr: "Sayilari artan siraya koy (kucukten buyuge).", ps: "عددونه په زياتېدونکي ترتيب کې کېږده (له کوچني تر لوی)." },
    { so: "Tirooyinka u kala saar hoos u dhaca (ka weyn ilaa ka yar).", tr: "Sayilari azalan siraya koy (buyukten kucuge).", ps: "عددونه په کمېدونکي ترتيب کې کېږده (له لوی تر کوچني)." },
    { so: "Xeerka taxane kasta hel (tusaale: +5 ama -3).", tr: "Her dizinin kuralini bul (orn: +5 veya -3).", ps: "د هرې لړۍ قاعده پيدا کړه (لکه: +5 يا -3)." },
    { so: "Taxanaha tirooyinka buuxi.", tr: "Sayi dizilerini tamamla.", ps: "د عددونو لړۍ بشپړه کړه." },
  ],
};

function literal(value) {
  if (Array.isArray(value)) {
    return "[\n" + value.map((v) => `          ${JSON.stringify(v)}`).join(",\n") + ",\n        ]";
  }
  return JSON.stringify(value);
}

for (const [file, entries] of Object.entries(data)) {
  const path = base + file;
  let source = fs.readFileSync(path, "utf8");
  if (/\bso:/.test(source)) {
    console.log(`${file}: already done`);
    continue;
  }
  let index = 0;
  source = source.replace(/(\n\s*pt:\s*(?:\[[\s\S]*?\]|"[^"]*"),)/g, (match) => {
    const entry = entries[index++];
    if (!entry) return match;
    const indent = (match.match(/\n(\s*)pt:/) || ["", "    "])[1];
    return `${match}\n${indent}so: ${literal(entry.so)},\n${indent}tr: ${literal(entry.tr)},\n${indent}ps: ${literal(entry.ps)},`;
  });
  if (index !== entries.length) {
    throw new Error(`${file}: inserted ${index} of ${entries.length}`);
  }
  fs.writeFileSync(path, source, "utf8");
  console.log(`${file}: updated`);
}
