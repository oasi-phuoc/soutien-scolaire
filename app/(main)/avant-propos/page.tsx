"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PIVOT_LANGS, type PivotCode } from "@/lib/pivot-langs";

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
};

const CONTENT: Record<PivotCode, LangContent> = {
  fr: {
    dir: "ltr",
    intro: "Cette application a été conçue pour t'accompagner dans ton apprentissage du français et des mathématiques. Elle propose des leçons structurées, des exercices interactifs et un suivi automatique de ta progression.",
    sectionsTitle: "Sections de l'application",
    lecture: "Apprendre à lire : syllabes, déchiffrage et compréhension de textes.",
    maths: "Numération, opérations, géométrie et algèbre, du niveau A1 au niveau avancé.",
    francais: "Vocabulaire, grammaire et expression écrite, organisés par thèmes et niveaux.",
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
  },
  en: {
    dir: "ltr",
    intro: "This app was designed to help you learn French and mathematics. It offers structured lessons, interactive exercises and automatic progress tracking.",
    sectionsTitle: "App sections",
    lecture: "Learning to read: syllables, deciphering and text comprehension.",
    maths: "Numeration, operations, geometry and algebra, from A1 to advanced level.",
    francais: "Vocabulary, grammar and written expression, organised by themes and levels.",
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
  },
  ar: {
    dir: "rtl",
    intro: "تم تصميم هذا التطبيق لمساعدتك على تعلم اللغة الفرنسية والرياضيات. يوفر دروسًا منظمة وتمارين تفاعلية ومتابعة تلقائية للتقدم.",
    sectionsTitle: "أقسام التطبيق",
    lecture: "تعلم القراءة: المقاطع الصوتية والتهجئة وفهم النصوص.",
    maths: "التعداد والعمليات الحسابية والهندسة والجبر، من المستوى A1 إلى المتقدم.",
    francais: "المفردات والقواعد والتعبير الكتابي، منظمة حسب الموضوعات والمستويات.",
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
  },
  fa: {
    dir: "rtl",
    intro: "این برنامه برای کمک به یادگیری زبان فرانسه و ریاضیات طراحی شده است. دروس ساختارمند، تمرین‌های تعاملی و پیگیری خودکار پیشرفت را ارائه می‌دهد.",
    sectionsTitle: "بخش‌های برنامه",
    lecture: "یادگیری خواندن: هجاها، رمزگشایی و درک متن.",
    maths: "شمارش، عملیات، هندسه و جبر، از سطح A1 تا پیشرفته.",
    francais: "واژگان، دستور زبان و بیان نوشتاری، سازمان‌دهی شده بر اساس موضوعات و سطوح.",
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
  },
  pt: {
    dir: "ltr",
    intro: "Esta aplicação foi concebida para te ajudar a aprender francês e matemática. Oferece lições estruturadas, exercícios interativos e acompanhamento automático do progresso.",
    sectionsTitle: "Secções da aplicação",
    lecture: "Aprender a ler: sílabas, decifrar e compreensão de textos.",
    maths: "Numeração, operações, geometria e álgebra, do nível A1 ao avançado.",
    francais: "Vocabulário, gramática e expressão escrita, organizados por temas e níveis.",
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
  },
  so: {
    dir: "ltr",
    intro: "App-kan ayaa loo sameeyay inuu kaa caawiyo inaad barato Faransiiska iyo xisaabta. Wuxuu bixiyaa casharro qaab dhismeedka leh, jimicsiyaasha is dhexgalka ah iyo raadraaca horumarinta tooska ah.",
    sectionsTitle: "Qaybaha app-ka",
    lecture: "Barasho akhriska: syllable-yada, sixitaanka iyo fahanka qoraalka.",
    maths: "Tirida, hawlgalada, joomitriga iyo aljabrada, heerka A1 ilaa heerka horumarsan.",
    francais: "Erayga, xeerka naxwaha iyo ifafaalaha qoraalka, oo loo abaabulay mowduucyada iyo heerarka.",
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
  },
  ti: {
    dir: "ltr",
    intro: "እዚ ኣፕ ንምምሃር ፈረንሳይ ቋንቋን ሒሳብን ንምሕጋዝ'ዩ ዝተሰርሐ። ቅርጸ ዝሓዘ ትምህርቲ፡ ዝሰፍሐ ስልጠናታትን ኣዉቶማቲክ ምክትታልን ይህብ።",
    sectionsTitle: "ክፋላት ኣፕ",
    lecture: "ምምሃር ምንባብ፦ ስልፊ፡ ምስጓም ቃላትን ምርዳእ ጽሑፍን።",
    maths: "ቊጽሪ፡ ስጉምቲ ሒሳብ፡ ጂኦሜትሪን ኣልጀብራን፡ ካብ ደረጃ A1 ናብ ዝበለጸ።",
    francais: "ቃላት፡ ሰዋሱው ቋንቋን ዝምልከት ምፅሓፍን፡ ብኣርእስትን ደረጃን ዝምደቡ።",
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
  },
  tr: {
    dir: "ltr",
    intro: "Bu uygulama Fransızca ve matematik öğrenmene yardımcı olmak için tasarlanmıştır. Yapılandırılmış dersler, etkileşimli alıştırmalar ve otomatik ilerleme takibi sunar.",
    sectionsTitle: "Uygulama bölümleri",
    lecture: "Okumayı öğrenmek: heceler, çözümleme ve metin anlama.",
    maths: "Sayılar, işlemler, geometri ve cebir, A1 seviyesinden ileri seviyeye kadar.",
    francais: "Kelime dağarcığı, dil bilgisi ve yazılı anlatım, konular ve seviyelere göre düzenlenmiş.",
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
  },
  ps: {
    dir: "rtl",
    intro: "دا اپ ستاسو د فرانسوي ژبې او ریاضیاتو زده کولو لپاره جوړ شوی دی. جوړ شوي لوستونه، تعاملي تمرینونه او اتوماتیک پرمختګ تعقیب وړاندې کوي.",
    sectionsTitle: "د اپ برخې",
    lecture: "لوستل زده کول: بندونه، رمزګشایي او د متن پوهاوی.",
    maths: "شمیرل، عملیات، جیومتري او الجبر، د A1 کچه نه د پرمختللي کچه پورې.",
    francais: "وییونه، ګرامر او لیکنیز بیان، د موضوعاتو او کچو له مخې تنظیم شوي.",
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
  },
  uk: {
    dir: "ltr",
    intro: "Цей додаток розроблено для вивчення французької мови та математики. Він пропонує структуровані уроки, інтерактивні вправи та автоматичне відстеження прогресу.",
    sectionsTitle: "Розділи додатку",
    lecture: "Навчання читати: склади, розшифрування та розуміння тексту.",
    maths: "Нумерація, операції, геометрія та алгебра, від рівня A1 до просунутого.",
    francais: "Словниковий запас, граматика та письмове вираження, за темами та рівнями.",
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
  },
};

const FALLBACK: LangContent = CONTENT.fr;

function getLangLabel(code: PivotCode) {
  const lang = PIVOT_LANGS.find((l) => l.code === code);
  return lang?.label ?? "";
}

export default function AvantProposPage() {
  const [pivotCode, setPivotCode] = useState<PivotCode>("fr");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as PivotCode | null;
    if (stored && stored in CONTENT) setPivotCode(stored as PivotCode);
  }, []);

  const c = CONTENT[pivotCode] ?? FALLBACK;
  const isRtl = c.dir === "rtl";

  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-4 pt-8 pb-32" dir={c.dir}>
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-theme)]"
        >
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
            style={isRtl ? { transform: "scaleX(-1)" } : undefined}
          >
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {pivotCode === "fr" ? "Accueil" : pivotCode === "en" ? "Home" : pivotCode === "ar" ? "الرئيسية" : pivotCode === "fa" ? "خانه" : pivotCode === "uk" ? "Головна" : pivotCode === "tr" ? "Ana sayfa" : pivotCode === "pt" ? "Início" : "Accueil"}
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={{ background: "var(--color-theme-light)" }}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
              <path d="M13 3C7.477 3 3 7.477 3 13s4.477 10 10 10 10-4.477 10-10S18.523 3 13 3Z" stroke="var(--color-theme)" strokeWidth="1.6" />
              <path d="M13 11v6M13 8.5v1" stroke="var(--color-theme)" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[var(--color-text-primary)]">Avant-propos</h1>
            <p className="text-xs text-[var(--color-text-secondary)]">Soutien Scolaire — {getLangLabel(pivotCode)}</p>
          </div>
        </div>
      </div>

      {/* Language selector */}
      <div className="mb-6 flex flex-wrap gap-2">
        {PIVOT_LANGS.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => setPivotCode(l.code)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              pivotCode === l.code
                ? "bg-[var(--color-theme)] text-white"
                : "border border-[var(--color-border-default)] bg-white text-[var(--color-text-secondary)] hover:bg-[var(--color-theme-light)]"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <div className="rounded-2xl p-5" style={{ background: "var(--color-theme-light)" }}>
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
            <div key={i} className={`flex items-start gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: "var(--color-theme)" }}>
                {i + 1}
              </span>
              <p className="text-xs text-[var(--color-text-primary)] leading-relaxed pt-0.5">{step}</p>
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
        </div>
      </section>

      <p className="pt-2 text-center text-xs text-[var(--color-text-secondary)]">
        Soutien Scolaire — Valais, Suisse
      </p>
    </main>
  );
}
