import type { PivotCode } from "@/lib/pivot-langs";

type Lang = "fr" | PivotCode;

const T: Record<string, Record<"fr", string> & Partial<Record<Lang, string>>> = {
  // LetterGrid
  recognizeLetter:     { fr: "Reconnaître la lettre", en: "Identify the letter", ar: "تعرّف على الحرف", fa: "شناسایی حرف", pt: "Identificar a letra", so: "Aqoonso xarfaha", ti: "ፊደል ምፍላጥ", uk: "Знайди літеру" },
  tapEachLetter:       { fr: "Touchez chaque {x}", en: "Tap each {x}", ar: "اضغط على كل {x}", fa: "هر {x} را لمس کن", pt: "Toque em cada {x}", so: "Taabo mid kasta oo {x}", ti: "ነፍሲ ወከፍ {x} ተዛወሮ", uk: "Натискай кожну {x}" },
  // WordSpotter
  spotInWords:         { fr: "Repérer dans les mots", en: "Spot in words", ar: "حدّد في الكلمات", fa: "پیدا کن در کلمات", pt: "Encontrar nas palavras", so: "Raadi ereyada ku jira", ti: "ኣብ ቃላት ምርካብ", uk: "Знайди в словах" },
  tapLetterInWords:    { fr: "Touchez la lettre {x} dans chaque mot", en: "Tap the letter {x} in each word", ar: "اضغط على الحرف {x} في كل كلمة", fa: "حرف {x} را در هر کلمه لمس کن", pt: "Toque a letra {x} em cada palavra", so: "Taabo xarfaha {x} ee ereyga kasta", ti: "ፊደል {x} ኣብ ነፍሲ ወከፍ ቃል ተዛወሮ", uk: "Натискай літеру {x} в кожному слові" },
  // SoundPicker
  hearTheSound:        { fr: "Entendre le son", en: "Hear the sound", ar: "سماع الصوت", fa: "شنیدن صدا", pt: "Ouvir o som", so: "Dhagayso codka", ti: "ድምጺ ምስማዕ", uk: "Почуй звук" },
  tapImagesWithSound:  { fr: "Touchez les images où vous entendez {x}", en: "Tap the images where you hear {x}", ar: "اضغط على الصور التي تسمع فيها {x}", fa: "تصاویری که {x} می‌شنوی لمس کن", pt: "Toque as imagens onde ouve {x}", so: "Taabo sawirrada aad ku maqasho {x}", ti: "ምስሊ ዘለዎ {x} ምስ ሰማዕኹም ተዛወርዎ", uk: "Натискай малюнки, де чуєш {x}" },
  listenTapWithSound:  { fr: "Écoutez et touchez ceux où vous entendez {x}", en: "Listen and tap the ones where you hear {x}", ar: "استمع واضغط على التي تسمع فيها {x}", fa: "گوش بده و آن‌هایی که {x} می‌شنوی لمس کن", pt: "Ouça e toque onde ouve {x}", so: "Dhagayso oo taabo kuwa aad ku maqasho {x}", ti: "ስምዕ ዘለዎ {x} ምስ ሰማዕኹም ተዛወርዎ", uk: "Слухай і натискай там, де чуєш {x}" },
  // PronunciationChain
  pronounceWord:       { fr: "Prononcer le mot", en: "Pronounce the word", ar: "نطق الكلمة", fa: "تلفظ کلمه", pt: "Pronunciar a palavra", so: "U akhri erayga", ti: "ቃል ምዝራብ", uk: "Вимови слово" },
  sayWordAloud:        { fr: "Prononcez le mot à voix haute", en: "Say the word aloud", ar: "انطق الكلمة بصوت عالٍ", fa: "کلمه را بلند بگو", pt: "Diga a palavra em voz alta", so: "Erayga ku hadal cod dheer", ti: "ቃሉ ብዓው ድምጺ ንበብ", uk: "Вимов слово вголос" },
  pressToSpeak:        { fr: "Appuyez pour parler", en: "Press to speak", ar: "اضغط للكلام", fa: "برای صحبت فشار بده", pt: "Prima para falar", so: "Riix si aad u hadashid", ti: "ንምዛረብ ጠውቕ", uk: "Натисни, щоб говорити" },
  listening:           { fr: "J'écoute…", en: "Listening…", ar: "أستمع...", fa: "گوش می‌دهم...", pt: "A ouvir…", so: "Dhagaysanayaa…", ti: "ይሰምዕ ኣለኹ...", uk: "Слухаю…" },
  // DiscoverSound
  discoverSound:       { fr: "Découverte du son", en: "Discover the sound", ar: "اكتشاف الصوت", fa: "کشف صدا", pt: "Descoberta do som", so: "Sawir codka", ti: "ድምጺ ምርካብ", uk: "Відкриваємо звук" },
  asIn:                { fr: "comme dans", en: "as in", ar: "كما في", fa: "مثل", pt: "como em", so: "sida ku jira", ti: "ኸምዚ ኣብ", uk: "як у" },
  // VowelRecall
  reviewSounds:        { fr: "Rappel des sons déjà vus", en: "Review of sounds already seen", ar: "مراجعة الأصوات السابقة", fa: "مرور صداهای قبلی", pt: "Revisão dos sons já vistos", so: "Dib u eegid codadka hore", ti: "ናይ ድሮ ድምጺ ምዝካር", uk: "Повторення вивчених звуків" },
  tapLetterToHear:     { fr: "Touchez chaque lettre pour entendre son son.", en: "Tap each letter to hear its sound.", ar: "اضغط على كل حرف لسماع صوته.", fa: "هر حرف را لمس کن تا صدایش را بشنوی.", pt: "Toque em cada letra para ouvir o seu som.", so: "Taabo xarfaha si aad u dhagaystid codka.", ti: "ንነፍሲ ወከፍ ፊደል ምቕሓት ድምጹ ምስማዕ.", uk: "Натискай кожну літеру, щоб почути звук." },
  // SyllableGrid
  readSyllables:       { fr: "Lire les syllabes", en: "Read the syllables", ar: "قراءة المقاطع", fa: "خواندن هجاها", pt: "Ler as sílabas", so: "Akhri silableyaasha", ti: "ምምቕቓል ምንባብ", uk: "Читай склади" },
  tapSyllableAloud:    { fr: "Touchez chaque syllabe pour la lire à voix haute", en: "Tap each syllable to read it aloud", ar: "اضغط على كل مقطع لقراءته بصوت عالٍ", fa: "هر هجا را لمس کن تا بلند بخوانی", pt: "Toque em cada sílaba para a ler em voz alta", so: "Taabo silableyaasha si aad u akhridid cod dheer", ti: "ነፍሲ ወከፍ ምምቕቓል ብዓው ምንባብ", uk: "Натискай кожен склад і читай вголос" },
  // RevisionLetterGrid
  recognizeLetters:    { fr: "Reconnaître les lettres", en: "Identify the letters", ar: "تعرّف على الحروف", fa: "شناسایی حروف", pt: "Reconhecer as letras", so: "Aqoonso xarfaha", ti: "ፊደላት ምፍላጥ", uk: "Знайди літери" },
  tapAllAandB:         { fr: "Touchez toutes les {a} et toutes les {b}", en: "Tap all the {a} and all the {b}", ar: "اضغط على كل {a} وكل {b}", fa: "همه {a} و همه {b} را لمس کن", pt: "Toque em todos os {a} e todos os {b}", so: "Taabo dhammaan {a} iyo {b}", ti: "ኩሎም {a} ን {b} ተዛወርዎ", uk: "Натискай усі {a} і всі {b}" },
  // RevisionWordSpotter
  tapLettersAandBInWords: { fr: "Touchez les lettres {a} et {b} dans chaque mot", en: "Tap the letters {a} and {b} in each word", ar: "اضغط على الحرفين {a} و{b} في كل كلمة", fa: "حروف {a} و {b} را در هر کلمه لمس کن", pt: "Toque nas letras {a} e {b} em cada palavra", so: "Taabo xarfaha {a} iyo {b} ee ereyga kasta", ti: "ፊደላት {a} ን {b} ኣብ ነፍሲ ወከፍ ቃል ተዛወርዎ", uk: "Натискай літери {a} і {b} в кожному слові" },
  // RevisionSoundStep
  hearTheSounds:       { fr: "Entendre les sons", en: "Hear the sounds", ar: "سماع الأصوات", fa: "شنیدن صداها", pt: "Ouvir os sons", so: "Dhagayso codadka", ti: "ድምጻት ምስማዕ", uk: "Чуй звуки" },
  tapSoundsYouHear:    { fr: "Touchez le ou les sons que vous entendez", en: "Tap the sound(s) you hear", ar: "اضغط على الصوت أو الأصوات التي تسمعها", fa: "صدا یا صداهایی که می‌شنوی لمس کن", pt: "Toque o(s) som(s) que ouve", so: "Taabo cod(adka) aad dhagaysato", ti: "ዝሰምዕዎ ድምጺ ተዛወርዎ", uk: "Натискай звук або звуки, які чуєш" },
  // RevisionPronounce
  pronounceWords:      { fr: "Prononcer les mots", en: "Pronounce the words", ar: "نطق الكلمات", fa: "تلفظ کلمات", pt: "Pronunciar as palavras", so: "U akhri ereyada", ti: "ቃላት ምዝራብ", uk: "Вимови слова" },
};

export function lectureUi(lang: PivotCode, key: string, vars?: Record<string, string>): string {
  const row = T[key];
  if (!row) return "";
  let s = row[lang] ?? row.fr;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      s = s.replaceAll(`{${k}}`, v);
    }
  }
  return s;
}
