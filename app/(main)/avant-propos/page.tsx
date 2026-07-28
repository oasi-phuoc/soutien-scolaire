"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import type { PivotCode } from "@/lib/pivot-langs";

const STORAGE_KEY = "soutien:pivot";

type LangContent = {
  dir: "ltr" | "rtl";
  intro: string;
  sectionsTitle: string;
  lecture: string;
  maths: string;
  francais: string;
  howTitle: string;
  steps: string[];
  creditsTitle: string;
  creditsPhuoc: string;
  creditsMelina: string;
  creditsImages: string;
  creditsAudios: string;
};

const CONTENT: Record<PivotCode, LangContent> = {
  fr: {
    dir: "ltr",
    intro: "Cette application a été conçue pour t'accompagner dans ton apprentissage du français et des mathématiques. Elle propose des leçons structurées, des exercices interactifs et un suivi automatique de ta progression.",
    sectionsTitle: "Sections de l'application",
    lecture: "Vous permet d'apprendre à lire de manière plus fluide : reconnaître les lettres, les sons et les syllabes, puis déchiffrer et comprendre des textes.",
    maths: "Permet de consolider vos bases de mathématiques en algèbre et en géométrie, jusqu'à la fin de la scolarité obligatoire.",
    francais: "Permet d'apprendre les bases du français, du niveau A0 jusqu'au niveau B1 : vocabulaire, grammaire et expression écrite.",
    howTitle: "Comment utiliser l'application",
    steps: [
      "Appuie sur le bouton \"+\" en bas pour choisir une matière.",
      "Sélectionne un module. Les modules verrouillés se débloquent au fur et à mesure de ta progression.",
      "Lis la leçon, puis fais les exercices. Appuie sur \"Valider\" pour voir les corrections.",
      "Quand tu es prêt(e), lance l'évaluation. Une note sur 6 est calculée automatiquement.",
      "Une fois un module réussi (note ≥ 4.0), le suivant se déverrouille.",
    ],
    creditsTitle: "Crédits",
    creditsPhuoc: "Conception et réalisation de l'application",
    creditsMelina: "Participation — Lecture & Alphabétisation",
    creditsImages: "Toutes les images sont générées par intelligence artificielle.",
    creditsAudios: "Les audios sont issus du livre ABC DELF.",
  },
  en: {
    dir: "ltr",
    intro: "This app was designed to help you learn French and mathematics. It offers structured lessons, interactive exercises and automatic progress tracking.",
    sectionsTitle: "App sections",
    lecture: "Helps you learn to read more fluently: recognising letters, sounds and syllables, then deciphering and understanding texts.",
    maths: "Helps you strengthen your maths foundations in algebra and geometry, up to the end of compulsory schooling.",
    francais: "Helps you learn the basics of French, from level A0 up to level B1: vocabulary, grammar and written expression.",
    howTitle: "How to use the app",
    steps: [
      "Tap the \"+\" button at the bottom to choose a subject.",
      "Select a module. Locked modules unlock as you progress.",
      "Read the lesson, then do the exercises. Tap \"Validate\" to see corrections.",
      "When ready, start the evaluation. A grade out of 6 is calculated automatically.",
      "Once a module is passed (grade ≥ 4.0), the next one unlocks.",
    ],
    creditsTitle: "Credits",
    creditsPhuoc: "Design and development of the app",
    creditsMelina: "Contribution — Reading & Literacy",
    creditsImages: "All images are AI-generated.",
    creditsAudios: "Audio tracks are taken from the ABC DELF book.",
  },
  ar: {
    dir: "rtl",
    intro: "تم تصميم هذا التطبيق لمساعدتك على تعلم اللغة الفرنسية والرياضيات. يوفر دروسًا منظمة وتمارين تفاعلية ومتابعة تلقائية للتقدم.",
    sectionsTitle: "أقسام التطبيق",
    lecture: "يساعدك على تعلّم القراءة بطلاقة أكبر: التعرّف على الحروف والأصوات والمقاطع، ثم فك الرموز وفهم النصوص.",
    maths: "يساعدك على ترسيخ أساسياتك في الرياضيات في الجبر والهندسة، حتى نهاية التعليم الإلزامي.",
    francais: "يساعدك على تعلّم أساسيات اللغة الفرنسية، من المستوى A0 إلى المستوى B1: المفردات والقواعد والتعبير الكتابي.",
    howTitle: "كيفية استخدام التطبيق",
    steps: [
      "اضغط على زر \"+\" في الأسفل لاختيار مادة دراسية.",
      "اختر وحدة. الوحدات المقفلة تُفتح تلقائيًا مع تقدمك.",
      "اقرأ الدرس ثم قم بالتمارين. اضغط \"تحقق\" لرؤية التصحيحات.",
      "عندما تكون مستعدًا، ابدأ التقييم. تُحسب درجة من 6 تلقائيًا.",
      "بمجرد اجتياز وحدة (درجة ≥ 4.0)، تُفتح الوحدة التالية.",
    ],
    creditsTitle: "الاعتمادات",
    creditsPhuoc: "تصميم وتطوير التطبيق",
    creditsMelina: "مشاركة — القراءة والكتابة الأولية",
    creditsImages: "جميع الصور مُولَّدة بالذكاء الاصطناعي.",
    creditsAudios: "المقاطع الصوتية مأخوذة من كتاب ABC DELF.",
  },
  fa: {
    dir: "rtl",
    intro: "این برنامه برای کمک به یادگیری زبان فرانسه و ریاضیات طراحی شده است. دروس ساختارمند، تمرین‌های تعاملی و پیگیری خودکار پیشرفت را ارائه می‌دهد.",
    sectionsTitle: "بخش‌های برنامه",
    lecture: "به شما کمک می‌کند روان‌تر خواندن را بیاموزید: شناخت حروف، صداها و هجاها، سپس رمزگشایی و درک متن.",
    maths: "به شما کمک می‌کند پایه‌های ریاضی خود را در جبر و هندسه تا پایان تحصیلات اجباری تقویت کنید.",
    francais: "به شما کمک می‌کند مبانی زبان فرانسه را از سطح A0 تا سطح B1 بیاموزید: واژگان، دستور زبان و بیان نوشتاری.",
    howTitle: "نحوه استفاده از برنامه",
    steps: [
      "برای انتخاب درس، دکمه \"+\" پایین صفحه را لمس کنید.",
      "یک ماژول انتخاب کنید. ماژول‌های قفل‌شده با پیشرفت شما باز می‌شوند.",
      "درس را بخوانید، سپس تمرین‌ها را انجام دهید. برای دیدن اصلاحات «تأیید» را لمس کنید.",
      "وقتی آماده شدید، ارزیابی را شروع کنید. نمره‌ای از ۶ به‌صورت خودکار محاسبه می‌شود.",
      "پس از قبولی در یک ماژول (نمره ≥ ۴٫۰)، ماژول بعدی باز می‌شود.",
    ],
    creditsTitle: "اعتبارات",
    creditsPhuoc: "طراحی و توسعه برنامه",
    creditsMelina: "مشارکت — خواندن و سوادآموزی",
    creditsImages: "همهٔ تصاویر با هوش مصنوعی تولید شده‌اند.",
    creditsAudios: "فایل‌های صوتی از کتاب ABC DELF گرفته شده‌اند.",
  },
  pt: {
    dir: "ltr",
    intro: "Esta aplicação foi concebida para te ajudar a aprender francês e matemática. Oferece lições estruturadas, exercícios interativos e acompanhamento automático do progresso.",
    sectionsTitle: "Secções da aplicação",
    lecture: "Ajuda-te a aprender a ler de forma mais fluente: reconhecer letras, sons e sílabas, depois decifrar e compreender textos.",
    maths: "Ajuda-te a consolidar as tuas bases de matemática em álgebra e geometria, até ao fim da escolaridade obrigatória.",
    francais: "Ajuda-te a aprender as bases do francês, do nível A0 até ao nível B1: vocabulário, gramática e expressão escrita.",
    howTitle: "Como utilizar a aplicação",
    steps: [
      "Toca no botão \"+\" em baixo para escolher uma matéria.",
      "Seleciona um módulo. Os módulos bloqueados desbloqueiam com o teu progresso.",
      "Lê a lição e faz os exercícios. Toca em \"Validar\" para ver as correções.",
      "Quando estiveres pronto(a), começa a avaliação. Uma nota em 6 é calculada automaticamente.",
      "Depois de passar um módulo (nota ≥ 4,0), o seguinte desbloqueia.",
    ],
    creditsTitle: "Créditos",
    creditsPhuoc: "Conceção e desenvolvimento da aplicação",
    creditsMelina: "Participação — Leitura e Alfabetização",
    creditsImages: "Todas as imagens são geradas por inteligência artificial.",
    creditsAudios: "Os áudios são retirados do livro ABC DELF.",
  },
  so: {
    dir: "ltr",
    intro: "App-kan ayaa loo sameeyay inuu kaa caawiyo inaad barato Faransiiska iyo xisaabta. Wuxuu bixiyaa casharro qaab dhismeedka leh, jimicsiyaasha is dhexgalka ah iyo raadraaca horumarinta tooska ah.",
    sectionsTitle: "Qaybaha app-ka",
    lecture: "Wuxuu kaa caawiyaa inaad si fasiix ah u akhrido: aqoonsiga xarfaha, dhawaaqyada iyo syllable-yada, kadibna furfurista iyo fahanka qoraallada.",
    maths: "Wuxuu kaa caawiyaa inaad xoojiso aasaaskaaga xisaabta ee aljabrada iyo joomatariga, ilaa dhammaadka waxbarashada qasabka ah.",
    francais: "Wuxuu kaa caawiyaa inaad barato aasaaska Faransiiska, laga bilaabo heerka A0 ilaa heerka B1: erayada, naxwaha iyo hadalka qoran.",
    howTitle: "Sida loo isticmaalo app-ka",
    steps: [
      "Taabo badhanka \"+\" hoos u marka aad dooranayso mawduuc.",
      "Xulo module. Module-yada xidhmay ayaa furma markii aad horumariso.",
      "Akhri casharka, ka dib samee jimicsiyaasha. Taabo \"Xaqiiji\" si aad u aragto saxitaanka.",
      "Marka aad diyaar tahay, bilow qiimaynta. Dhibcaha 6 ayaa toos loo xisaabiyaa.",
      "Marka aad dhaafto module (dhibco ≥ 4.0), kan xigaa ayaa furma.",
    ],
    creditsTitle: "Amaanada",
    creditsPhuoc: "Naqshadeynta iyo horumarinta app-ka",
    creditsMelina: "Kaalmo — Akhriska iyo Xarfaha",
    creditsImages: "Dhammaan sawirrada waxaa soo saaray sirdoon macmal.",
    creditsAudios: "Codadka waxaa laga soo qaatay buugga ABC DELF.",
  },
  ti: {
    dir: "ltr",
    intro: "እዚ ኣፕ ንምምሃር ፈረንሳይ ቋንቋን ሒሳብን ንምሕጋዝ'ዩ ዝተሰርሐ። ቅርጸ ዝሓዘ ትምህርቲ፡ ዝሰፍሐ ስልጠናታትን ኣዉቶማቲክ ምክትታልን ይህብ።",
    sectionsTitle: "ክፋላት ኣፕ",
    lecture: "ብዝያዳ ብልሕ ኮይንካ ንኽተንብብ ይሕግዘካ፦ ፊደላት፡ ድምጽታትን ስልፍታትን ምልላይ፡ ድሕሪኡ ጽሑፋት ምስጓምን ምርዳእን።",
    maths: "ኣብ ኣልጀብራን ጂኦሜትሪን ዘሎ መሰረት ሒሳብካ ክሳብ መወዳእታ ግዴታዊ ትምህርቲ ንኸተደልድል ይሕግዘካ።",
    francais: "መሰረት ፈረንሳይኛ ካብ ደረጃ A0 ክሳብ ደረጃ B1 ንኽትመሃር ይሕግዘካ፦ ቃላት፡ ሰዋስውን ጽሑፋዊ መግለጽን።",
    howTitle: "ከመይ ኣፕ ምጥቃም",
    steps: [
      "ንናይ ትምህርቲ ዓይነት ንምምራጽ ታሕቲ ዘሎ \"+\" ጸቕጥ።",
      "ሞዲዩል ምረጽ። ዝተዓጸዉ ሞዲዩላት ምስ ምምሃርካ ክኽፈቱ'ዮም።",
      "ትምህርቲ ኣንብብ፡ ቀጺልካ ስልጠናታት ግበር። ምስካዕ ንምርኣይ \"ኣረጋግጽ\" ጸቕጥ።",
      "ምስ ተዳለኻ ግምገማ ጀምር። ካብ 6 ዝኾነ ነጥቢ ዕቱብ ክሕሰብ'ዩ።",
      "ሞዲዩል ምስ ሓለፍካ (ነጥቢ ≥ 4.0)፡ ቀጺሉ ዘሎ ክኽፈት'ዩ።",
    ],
    creditsTitle: "ኣምሳያ",
    creditsPhuoc: "ዲዛይንን ምዕባይን ናይ ኣፕ",
    creditsMelina: "ምስታፍ — ምንባብን ምፅሓፍን",
    creditsImages: "ኩሎም ምስልታት ብሓላፊ ምሕዳስ ኣእምሮ ተፈጢሮም።",
    creditsAudios: "ድምጽታት ካብ መጽሓፍ ABC DELF ተወሲዶም።",
  },
  tr: {
    dir: "ltr",
    intro: "Bu uygulama Fransızca ve matematik öğrenmene yardımcı olmak için tasarlanmıştır. Yapılandırılmış dersler, etkileşimli alıştırmalar ve otomatik ilerleme takibi sunar.",
    sectionsTitle: "Uygulama bölümleri",
    lecture: "Daha akıcı okumayı öğrenmene yardımcı olur: harfleri, sesleri ve heceleri tanıma, ardından metinleri çözme ve anlama.",
    maths: "Matematik temellerini cebir ve geometride, zorunlu eğitimin sonuna kadar pekiştirmene yardımcı olur.",
    francais: "Fransızcanın temellerini A0 seviyesinden B1 seviyesine kadar öğrenmene yardımcı olur: kelime bilgisi, dil bilgisi ve yazılı anlatım.",
    howTitle: "Uygulamayı nasıl kullanırım",
    steps: [
      "Konu seçmek için alttaki \"+\" düğmesine dokun.",
      "Bir modül seç. Kilitli modüller ilerledikçe açılır.",
      "Dersi oku, sonra alıştırmaları yap. Düzeltmeleri görmek için \"Onayla\"ya dokun.",
      "Hazır olduğunda değerlendirmeyi başlat. 6 üzerinden not otomatik hesaplanır.",
      "Bir modülü geçince (not ≥ 4,0), bir sonraki açılır.",
    ],
    creditsTitle: "Katkıda Bulunanlar",
    creditsPhuoc: "Uygulamanın tasarımı ve geliştirilmesi",
    creditsMelina: "Katkı — Okuma ve Okuryazarlık",
    creditsImages: "Tüm görseller yapay zekâ ile üretilmiştir.",
    creditsAudios: "Sesler ABC DELF kitabından alınmıştır.",
  },
  ps: {
    dir: "rtl",
    intro: "دا اپ ستاسو د فرانسوي ژبې او ریاضیاتو زده کولو لپاره جوړ شوی دی. جوړ شوي لوستونه، تعاملي تمرینونه او اتوماتیک پرمختګ تعقیب وړاندې کوي.",
    sectionsTitle: "د اپ برخې",
    lecture: "تاسو سره مرسته کوي چې په روان ډول لوستل زده کړئ: د حروفو، غږونو او څپو پېژندنه، بیا د متنونو رمزګشایي او پوهاوی.",
    maths: "تاسو سره مرسته کوي چې خپل ریاضیاتي بنسټونه په الجبر او جیومتري کې تر اجباري زده کړې پایه پورې پیاوړي کړئ.",
    francais: "تاسو سره مرسته کوي چې د فرانسوي ژبې بنسټونه د A0 کچې نه تر B1 کچې پورې زده کړئ: وییونه، ګرامر او لیکنیز بیان.",
    howTitle: "د اپ کارولو طریقه",
    steps: [
      "د موضوع د انتخاب لپاره لاندې \"+\" تڼۍ ونیسئ.",
      "یو ماډل وټاکئ. قفل شوي ماډلونه د پرمختګ سره خلاصیږي.",
      "لوست ولولئ، بیا تمرینونه وکړئ. د سمونو لیدلو لپاره \"تایید\" ونیسئ.",
      "کله چې چمتو یاست، ارزونه پیل کړئ. د 6 نمره اتوماتیک محاسبه کیږي.",
      "کله چې یو ماډل پاس کړئ (نمره ≥ 4.0)، بل یو خلاصیږي.",
    ],
    creditsTitle: "مراتب",
    creditsPhuoc: "د اپ ډیزاین او پراختیا",
    creditsMelina: "ګډون — لوستل او ابتدایي زده کړه",
    creditsImages: "ټول انځورونه د مصنوعي ذهانت له خوا جوړ شوي دي.",
    creditsAudios: "غږونه د ABC DELF کتاب څخه اخیستل شوي دي.",
  },
  uk: {
    dir: "ltr",
    intro: "Цей додаток розроблено для вивчення французької мови та математики. Він пропонує структуровані уроки, інтерактивні вправи та автоматичне відстеження прогресу.",
    sectionsTitle: "Розділи додатку",
    lecture: "Допомагає навчитися читати вільніше: розпізнавати літери, звуки та склади, потім розшифровувати й розуміти тексти.",
    maths: "Допомагає зміцнити основи математики з алгебри та геометрії, до завершення обовʼязкової освіти.",
    francais: "Допомагає вивчити основи французької мови, від рівня A0 до рівня B1: словниковий запас, граматика та письмове вираження.",
    howTitle: "Як користуватися додатком",
    steps: [
      "Натисни кнопку \"+\" внизу, щоб вибрати предмет.",
      "Вибери модуль. Заблоковані модулі відкриваються в міру прогресу.",
      "Прочитай урок, потім виконай вправи. Натисни \"Підтвердити\" для перегляду виправлень.",
      "Коли будеш готовий(-а), розпочни оцінювання. Оцінка з 6 розраховується автоматично.",
      "Після успішного проходження модуля (оцінка ≥ 4,0), наступний відкриється.",
    ],
    creditsTitle: "Автори",
    creditsPhuoc: "Розробка та реалізація додатку",
    creditsMelina: "Участь — Читання та грамотність",
    creditsImages: "Усі зображення згенеровані штучним інтелектом.",
    creditsAudios: "Аудіозаписи взято з книги ABC DELF.",
  },
};

const FALLBACK: LangContent = CONTENT.fr;

// Icônes illustratives des étapes « Comment utiliser » (indépendantes de la langue, par position)
const STEP_ICONS: ReactNode[] = [
  // 1. Choisir une matière via le bouton « + »
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8.5v7M8.5 12h7" />
  </>,
  // 2. Sélectionner un module (verrou qui se débloque)
  <>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
  </>,
  // 3. Lire la leçon, faire les exercices et valider
  <>
    <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H18v15H6.5A1.5 1.5 0 0 0 5 19.5z" />
    <path d="M9 8.7l2 2 3.6-3.6" />
  </>,
  // 4. Lancer l'évaluation, note sur 6
  <>
    <circle cx="12" cy="9" r="5" />
    <path d="M9.4 13.2l-1 6.8 3.6-2 3.6 2-1-6.8" />
  </>,
  // 5. Module réussi : le suivant se déverrouille
  <>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V7.5a4 4 0 0 1 7-2.6" />
  </>,
];

export default function AvantProposPage() {
  const [pivotCode, setPivotCode] = useState<PivotCode>("fr");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as PivotCode | null;
    if (stored && stored in CONTENT) setPivotCode(stored as PivotCode);
  }, []);

  const c = CONTENT[pivotCode] ?? FALLBACK;
  const isRtl = c.dir === "rtl";

  return (
    <main className="app-shell flex-1 pt-8 pb-32 lg:pb-28" dir={c.dir}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Link
            href="/compte"
            aria-label="Retour aux réglages"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors hover:brightness-95"
            style={{ background: "var(--color-theme-light)" }}
          >
            <svg
              width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"
              style={isRtl ? { transform: "scaleX(-1)" } : undefined}
            >
              <path d="M15 18l-6-6 6-6" stroke="var(--color-theme)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-[var(--color-text-primary)]">À propos</h1>
            <p className="text-xs leading-snug text-[var(--color-text-secondary)]">
              LearnUp - Thanh Phuoc VAN
              <br />
              Centre de formation « Le Botza »
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <div className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5">
          <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{c.intro}</p>
        </div>
      </section>

      {/* Sections */}
      <section className="mb-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">{c.sectionsTitle}</h2>

        <div className="rounded-xl border border-[var(--color-border-default)] bg-white p-4">
          <div className={`flex items-start gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "#f0eeff" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 4h12M3 8h8M3 12h10" stroke="var(--color-accent-lecture)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--color-accent-lecture)" }}>Lecture & Alphabétisation</p>
              <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">{c.lecture}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border-default)] bg-white p-4">
          <div className={`flex items-start gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "#eef3fc" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 9h10M9 4v10" stroke="var(--color-accent-alg)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--color-accent-alg)" }}>Mathématiques</p>
              <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">{c.maths}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border-default)] bg-white p-4">
          <div className={`flex items-start gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "#fff7e6" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 5h12M3 9h8M3 13h6" stroke="var(--color-accent-fr)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--color-accent-fr)" }}>Français</p>
              <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">{c.francais}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="mb-6 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">{c.howTitle}</h2>
        <div className="rounded-xl border border-[var(--color-border-default)] bg-white p-4 space-y-3">
          {c.steps.map((step, i) => (
            <div key={i} className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--color-theme-light)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-theme)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {STEP_ICONS[i] ?? STEP_ICONS[0]}
                </svg>
              </span>
              <p className="text-xs text-[var(--color-text-primary)] leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credits */}
      <section className="mb-4 space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">{c.creditsTitle}</h2>
        <div className="rounded-xl border border-[var(--color-border-default)] bg-white divide-y divide-[var(--color-border-default)]">
          <div className={`flex items-center gap-4 p-4 ${isRtl ? "flex-row-reverse" : ""}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: "var(--color-theme)" }}>
              VP
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">Van Thanh Phuoc</p>
              <p className="text-xs text-[var(--color-text-secondary)]">{c.creditsPhuoc}</p>
            </div>
          </div>
          <div className={`flex items-center gap-4 p-4 ${isRtl ? "flex-row-reverse" : ""}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: "var(--color-accent-lecture)" }}>
              MS
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">Mélina Schröter</p>
              <p className="text-xs text-[var(--color-text-secondary)]">{c.creditsMelina}</p>
            </div>
          </div>
          <div className={`flex items-start gap-4 p-4 ${isRtl ? "flex-row-reverse" : ""}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--color-theme-light)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-theme)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <circle cx="8.5" cy="11" r="1.5" />
                <path d="M21 16l-5-5-4 4-2-2-5 5" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">Images</p>
              <p className="text-xs text-[var(--color-text-secondary)]">{c.creditsImages}</p>
            </div>
          </div>
          <div className={`flex items-start gap-4 p-4 ${isRtl ? "flex-row-reverse" : ""}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--color-theme-light)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-theme)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 5L6 9H3v6h3l5 4V5z" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                <path d="M18.5 5.5a9 9 0 0 1 0 13" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">Audios</p>
              <p className="text-xs text-[var(--color-text-secondary)]">{c.creditsAudios}</p>
            </div>
          </div>
        </div>
      </section>

      <p className="pt-2 text-center text-xs leading-snug text-[var(--color-text-secondary)]">
        LearnUp - Thanh Phuoc VAN
        <br />
        Centre de formation « Le Botza »
      </p>
    </main>
  );
}
