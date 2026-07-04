const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = process.cwd();
const definitionTablePath = path.join(
  process.env.USERPROFILE || "",
  ".codex",
  "attachments",
  "c4903ad5-117b-42e0-a714-5e79e226a37d",
  "pasted-text.txt",
);

function normalize(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/\u00e2\u20ac[\u2122\u02dc]/g, "'")
    .normalize("NFC");
}

function fixEncoding(value) {
  if (!/[\u00c3\u00c2\u00e2\u00d8\u00d9\u00db\u00d0\u00d1\u00e1]/.test(value)) return value;
  const decoded = Buffer.from(value, "latin1").toString("utf8");
  return decoded.includes("\uFFFD") ? value : decoded;
}

function readDefinitions() {
  const table = fs.readFileSync(definitionTablePath, "utf8");
  const definitions = new Map();
  for (const line of table.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || /^Mot\t/.test(trimmed)) continue;
    const [word, ...definitionParts] = trimmed.split("\t");
    if (!word || definitionParts.length === 0) continue;
    const definition = definitionParts.join("\t").trim().replace(/\s+/g, " ");
    if (definition) definitions.set(normalize(word), definition);
  }
  return definitions;
}

function readPivotDefinitions() {
  const source = fs.readFileSync(path.join(root, "lib/curriculum/vocab-definition-translations.ts"), "utf8");
  const dCalls = new Map();
  const dPattern = /(?:const\s+(\w+)\s*=\s*)?d\(\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*\)/g;
  for (const match of source.matchAll(dPattern)) {
    const value = {
      en: fixEncoding(match[2]),
      ar: fixEncoding(match[3]),
      fa: fixEncoding(match[4]),
      pt: fixEncoding(match[5]),
      so: fixEncoding(match[6]),
      ti: fixEncoding(match[7]),
      tr: fixEncoding(match[8]),
      ps: fixEncoding(match[9]),
      uk: fixEncoding(match[10]),
    };
    const constName = match[1];
    if (constName) dCalls.set(constName, value);
    dCalls.set(match[0], value);
  }

  const pivots = new Map();
  const objectPattern = /(["']?)([^"'\n:]+)\1\s*:\s*\{\s*en:\s*"([^"]*)"\s*,\s*ar:\s*"([^"]*)"\s*,\s*fa:\s*"([^"]*)"\s*,\s*pt:\s*"([^"]*)"\s*,\s*so:\s*"([^"]*)"\s*,\s*ti:\s*"([^"]*)"\s*,\s*tr:\s*"([^"]*)"\s*,\s*ps:\s*"([^"]*)"\s*,\s*uk:\s*"([^"]*)"\s*,?\s*\}/g;
  for (const match of source.matchAll(objectPattern)) {
    const key = fixEncoding(match[2].trim());
    if (!key || key.includes(" ")) continue;
    pivots.set(normalize(key), {
      en: fixEncoding(match[3]),
      ar: fixEncoding(match[4]),
      fa: fixEncoding(match[5]),
      pt: fixEncoding(match[6]),
      so: fixEncoding(match[7]),
      ti: fixEncoding(match[8]),
      tr: fixEncoding(match[9]),
      ps: fixEncoding(match[10]),
      uk: fixEncoding(match[11]),
    });
  }

  const directPattern = /(["']?)([^"'\n:]+)\1\s*:\s*d\(\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*\)/g;
  for (const match of source.matchAll(directPattern)) {
    const key = fixEncoding(match[2].trim());
    if (!key || key.includes(" ")) continue;
    pivots.set(normalize(key), {
      en: fixEncoding(match[3]),
      ar: fixEncoding(match[4]),
      fa: fixEncoding(match[5]),
      pt: fixEncoding(match[6]),
      so: fixEncoding(match[7]),
      ti: fixEncoding(match[8]),
      tr: fixEncoding(match[9]),
      ps: fixEncoding(match[10]),
      uk: fixEncoding(match[11]),
    });
  }

  const groupPattern = /\.\.\.\[([^\]]+)\]\.map\(\(word\)\s*=>\s*\[word,\s*(\w+)\]\)/g;
  for (const match of source.matchAll(groupPattern)) {
    const words = [...match[1].matchAll(/"([^"]+)"/g)].map((item) => fixEncoding(item[1]));
    const definition = dCalls.get(match[2]);
    if (!definition) continue;
    for (const word of words) pivots.set(normalize(word), definition);
  }

  return pivots;
}

function toArrayLiteral(value) {
  return `[${JSON.stringify(value)}]`;
}

function toPivotLiteral(value) {
  const parts = ["en", "ar", "fa", "pt", "so", "ti", "tr", "ps", "uk"]
    .filter((lang) => value[lang])
    .map((lang) => `${lang}: ${JSON.stringify(value[lang])}`);
  return `{ ${parts.join(", ")} }`;
}

function replaceDefinitionBlock(text, definitions, pivotDefinitions, missing) {
  return text.replace(
    /(\{\s*word:\s*"([^"]+)"[\s\S]*?)(,\s*)?definition:\s*(?:"[^"]*"|\[[^\]]*\])[\s\S]*?(,\s*exampleSentences:)/g,
    (match, prefix, word, beforeDefinitionComma = ", ", exampleSentencesPrefix) => {
      const definition = definitions.get(normalize(word));
      if (!definition) {
        missing.add(word);
        return match;
      }
      const pivot = pivotDefinitions.get(normalize(word));
      const pivotBlock = pivot ? `, definitionPivot: ${toPivotLiteral(pivot)}` : "";
      return `${prefix}${beforeDefinitionComma}definition: ${toArrayLiteral(definition)}${pivotBlock}, synonym: []${exampleSentencesPrefix}`;
    },
  );
}

const definitions = readDefinitions();
Object.entries({
  bottines: "Chaussures montantes qui couvrent la cheville.",
  chaussons: "Chaussures souples que l’on porte à l’intérieur de la maison.",
  sandales: "Chaussures ouvertes que l’on porte souvent quand il fait chaud.",
  gramme: "Petite unité de masse utilisée pour peser des objets ou des aliments.",
  kilogramme: "Unité de masse égale à mille grammes.",
  paquet: "Emballage qui contient plusieurs objets ou plusieurs aliments.",
  sachet: "Petit sac léger qui contient une petite quantité de produit.",
  pincée: "Très petite quantité que l’on prend entre les doigts.",
  tranche: "Morceau fin coupé dans un aliment.",
  part: "Portion d’un aliment, d’un gâteau ou d’un plat.",
  morceau: "Petite partie d’un objet ou d’un aliment.",
  bol: "Récipient rond utilisé pour boire ou manger une soupe, un café ou des céréales.",
  bouteille: "Récipient avec un goulot utilisé pour contenir un liquide.",
}).forEach(([word, definition]) => definitions.set(normalize(word), definition));
const pivotDefinitions = readPivotDefinitions();
Object.entries({
  "en couple": {
    en: "A person who is in a romantic relationship.",
    ar: "شخص في علاقة عاطفية.",
    fa: "شخصی که در یک رابطه عاطفی است.",
    pt: "Pessoa que está numa relação amorosa.",
    so: "Qof ku jira xiriir jacayl.",
    ti: "ኣብ ናይ ፍቕሪ ዝምድና ዘሎ ሰብ።",
    tr: "Duygusal bir ilişki içinde olan kişi.",
    ps: "هغه کس چې په عاطفي اړیکه کې وي.",
    uk: "Людина, яка має романтичні стосунки.",
  },
  "en concubinage": {
    en: "A person who lives with a partner without being married.",
    ar: "شخص يعيش مع شريك دون زواج.",
    fa: "شخصی که بدون ازدواج با شریک زندگی می‌کند.",
    pt: "Pessoa que vive com o/a companheiro/a sem ser casada.",
    so: "Qof la nool lamaane iyada oo aan la guursan.",
    ti: "ከይተመርዓወ ምስ መጻምድቱ ዝነብር ሰብ።",
    tr: "Evli olmadan partneriyle yaşayan kişi.",
    ps: "هغه کس چې له واده پرته له ملګري سره ژوند کوي.",
    uk: "Людина, яка живе з партнером без шлюбу.",
  },
  "se réchauffer": {
    en: "To become warmer.",
    ar: "أن يصبح أكثر دفئًا.",
    fa: "گرم‌تر شدن.",
    pt: "Ficar mais quente.",
    so: "Inuu sii diiranaado.",
    ti: "ዝያዳ ሙቐት ምርካብ።",
    tr: "Daha sıcak hale gelmek.",
    ps: "لا زیات تودېدل.",
    uk: "Ставати теплішим.",
  },
  "se rafraîchir": {
    en: "To become cooler.",
    ar: "أن يصبح أكثر برودة.",
    fa: "خنک‌تر شدن.",
    pt: "Ficar mais fresco.",
    so: "Inuu sii qabowgaado.",
    ti: "ዝያዳ ዝሑል ምዃን።",
    tr: "Daha serin hale gelmek.",
    ps: "لا زیات یخېدل.",
    uk: "Ставати прохолоднішим.",
  },
  "fer à repasser": {
    en: "A household appliance used to iron clothes.",
    ar: "جهاز منزلي يُستعمل لكيّ الملابس.",
    fa: "وسیله‌ای خانگی برای اتو کردن لباس.",
    pt: "Aparelho doméstico usado para passar roupa.",
    so: "Qalab guri oo dharka lagu feereeyo.",
    ti: "ክዳን ንምጥራይ ዝጥቀሙሉ ናይ ገዛ መሳርሒ።",
    tr: "Giysileri ütülemek için kullanılan ev aleti.",
    ps: "کورنی وسیله چې کالي پرې اوتو کېږي.",
    uk: "Побутовий прилад для прасування одягу.",
  },
  "salle de bain": {
    en: "A room used for washing and bathing.",
    ar: "غرفة تُستعمل للغسل والاستحمام.",
    fa: "اتاقی برای شستن و حمام کردن.",
    pt: "Divisão usada para lavar-se e tomar banho.",
    so: "Qol lagu maydho oo lagu qubeysto.",
    ti: "ንምሕጻብን ንምሕንባስን ዝጥቀሙሉ ክፍሊ።",
    tr: "Yıkanmak için kullanılan oda.",
    ps: "هغه خونه چې د مینځلو او حمام لپاره کارېږي.",
    uk: "Кімната для миття і купання.",
  },
  "salle à manger": {
    en: "A room where people eat meals.",
    ar: "غرفة يأكل فيها الناس الوجبات.",
    fa: "اتاقی که در آن غذا می‌خورند.",
    pt: "Divisão onde as pessoas comem.",
    so: "Qol ay dadku cuntada ku cunaan.",
    ti: "ሰባት መግቢ ዝበልዑሉ ክፍሊ።",
    tr: "İnsanların yemek yediği oda.",
    ps: "هغه خونه چې خلک پکې خواړه خوري.",
    uk: "Кімната, де їдять.",
  },
  sport: {
    en: "A school subject with physical activities.",
    ar: "مادة مدرسية فيها أنشطة بدنية.",
    fa: "درس مدرسه با فعالیت‌های بدنی.",
    pt: "Disciplina escolar com atividades físicas.",
    so: "Maaddo dugsi oo leh dhaqdhaqaaq jireed.",
    ti: "ናይ ኣካላዊ ንጥፈታት ትምህርቲ።",
    tr: "Fiziksel etkinlikler içeren okul dersi.",
    ps: "د ښوونځي مضمون چې بدني فعالیتونه لري.",
    uk: "Шкільний предмет із фізичними вправами.",
  },
  "nœud papillon": {
    en: "A small bow-shaped accessory worn around the neck.",
    ar: "إكسسوار صغير على شكل ربطة يُلبس حول العنق.",
    fa: "وسیله‌ای کوچک شبیه پاپیون که دور گردن بسته می‌شود.",
    pt: "Acessório pequeno em forma de laço usado ao pescoço.",
    so: "Qurxin yar oo qaab xarig ah oo qoorta lagu xirto.",
    ti: "ኣብ ክሳድ ዝእሰር ንእሽቶ ናይ ቅርጺ ቀስቲ መጌጺ።",
    tr: "Boyna takılan küçük fiyonk biçimli aksesuar.",
    ps: "کوچنی پاپیون چې د غاړې شاوخوا تړل کېږي.",
    uk: "Невеликий аксесуар у формі метелика для шиї.",
  },
  "sac à main": {
    en: "A small bag carried by hand or on the shoulder.",
    ar: "حقيبة صغيرة تُحمل باليد أو على الكتف.",
    fa: "کیف کوچکی که با دست یا روی شانه حمل می‌شود.",
    pt: "Saco pequeno transportado na mão ou ao ombro.",
    so: "Boorso yar oo gacanta ama garabka lagu qaato.",
    ti: "ብኢድ ወይ ኣብ መንኵብ ዝተሓዝ ንእሽቶ ቦርሳ።",
    tr: "Elde veya omuzda taşınan küçük çanta.",
    ps: "کوچنۍ کڅوړه چې په لاس یا اوږه وړل کېږي.",
    uk: "Невелика сумка, яку носять у руці або на плечі.",
  },
  "boucles d'oreilles": {
    en: "Jewels worn on the ears.",
    ar: "حلي تُلبس في الأذنين.",
    fa: "زیورهایی که به گوش زده می‌شوند.",
    pt: "Joias usadas nas orelhas.",
    so: "Qurxiyo dhegaha lagu xirto.",
    ti: "ኣብ እዝኒ ዝእሰር ጌጣጌጥ።",
    tr: "Kulaklara takılan takılar.",
    ps: "ګاڼې چې په غوږونو کې اغوستل کېږي.",
    uk: "Прикраси, які носять на вухах.",
  },
}).forEach(([word, definition]) => pivotDefinitions.set(normalize(word), definition));
const files = execFileSync("git", ["ls-files", "lib/curriculum/content/francais/vocab-*.ts"], {
  cwd: root,
  encoding: "utf8",
}).trim().split(/\r?\n/).filter(Boolean);

let changedFiles = 0;
let changedEntries = 0;
const missing = new Set();

for (const relFile of files) {
  const file = path.join(root, relFile);
  const before = fs.readFileSync(file, "utf8");
  const after = replaceDefinitionBlock(before, definitions, pivotDefinitions, missing);
  if (after !== before) {
    changedFiles += 1;
    changedEntries += (before.match(/\bdefinition:\s*(?:"[^"]*"|\[[^\]]*\])/g) || []).length;
    fs.writeFileSync(file, after, "utf8");
  }
}

console.log(`Definitions updated in ${changedFiles} files.`);
console.log(`Known French definitions: ${definitions.size}. Known pivot definitions: ${pivotDefinitions.size}.`);
if (missing.size) {
  console.log("Missing definitions:");
  console.log([...missing].sort((a, b) => a.localeCompare(b)).join("\n"));
}
