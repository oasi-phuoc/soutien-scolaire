"use client";

import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { isRtlPivotLang, type PivotCode } from "@/lib/pivot-langs";

type Tr = { title: string; timed: string; untimed: string };

// Mother-tongue translations shown as a hint (helps absolute beginners, e.g. A1.1/A1.2).
const PIVOT: Partial<Record<PivotCode, Tr>> = {
  en: { title: "Ready for the evaluation?", timed: "You have {m} minutes to complete it.", untimed: "Show your mastery to pass this module." },
  ar: { title: "هل أنت مستعد للتقييم؟", timed: "لديك {m} دقائق لإكماله.", untimed: "أظهر إتقانك لاجتياز هذه الوحدة." },
  fa: { title: "آماده‌ای برای ارزیابی؟", timed: "شما {m} دقیقه برای تکمیل آن دارید.", untimed: "تسلط خود را نشان دهید تا این ماژول را بگذرانید." },
  uk: { title: "Готові до оцінювання?", timed: "У вас є {m} хвилин, щоб завершити.", untimed: "Покажіть свої знання, щоб скласти цей модуль." },
  pt: { title: "Pronto para a avaliação?", timed: "Tens {m} minutos para a completar.", untimed: "Mostra o teu domínio para validar este módulo." },
  so: { title: "Diyaar u tahay qiimaynta?", timed: "Waxaad haysataa {m} daqiiqo si aad u dhammaystirto.", untimed: "Muuji aqoontaada si aad u gudubto module-kan." },
  tr: { title: "Değerlendirmeye hazır mısın?", timed: "Tamamlamak için {m} dakikan var.", untimed: "Bu modülü geçmek için ustalığını göster." },
  ti: { title: "ንግምገማ ድሉው ኢኻ?", timed: "ንምዝዛም {m} ደቓይቕ ኣለካ።", untimed: "ነዚ ሞዱል ንምሕላፍ ክእለትካ ኣርእይ።" },
  ps: { title: "د ارزونې لپاره چمتو يې؟", timed: "د بشپړولو لپاره {m} دقیقې لرئ.", untimed: "د دې ماډل د بریالیتوب لپاره خپله مهارت وښایاست." },
  sq: { title: "Gati për vlerësimin?", timed: "Ke {m} minuta për ta përfunduar.", untimed: "Trego zotërimin tënd për të kaluar këtë modul." },
  am: { title: "ለግምገማ ዝግጁ ነህ?", timed: "ለመጨረስ {m} ደቂቃዎች አሉህ።", untimed: "ይህን ሞጁል ለማለፍ ችሎታህን አሳይ።" },
  prs: { title: "برای ارزیابی آماده‌ای؟", timed: "برای تکمیل آن {m} دقیقه وقت داری.", untimed: "برای گذراندن این بخش مهارت خود را نشان بده." },
  es: { title: "¿Listo para la evaluación?", timed: "Tienes {m} minutos para completarla.", untimed: "Demuestra tu dominio para validar este módulo." },
  it: { title: "Pronto per la valutazione?", timed: "Hai {m} minuti per completarla.", untimed: "Mostra la tua padronanza per superare questo modulo." },
  ru: { title: "Готов к оценке?", timed: "У тебя {m} минут, чтобы её пройти.", untimed: "Покажи свои знания, чтобы пройти этот модуль." },
};

/**
 * Shared evaluation announcement screen (math / français / lecture).
 * Mirrors the français design: a pencil in a soft circle, an "Évaluation"
 * eyebrow, the "Prêt(e) pour l'évaluation ?" title, a short description and a
 * "Commencer" button. The `accent` prop is a CSS color (e.g.
 * "var(--color-accent-fr)") so each section keeps its theme colour.
 */
export function EvalAnnounceScreen({
  accent,
  lessonTitle,
  exerciseCount,
  minutes,
  onStart,
}: {
  accent: string;
  lessonTitle?: string;
  exerciseCount?: number;
  minutes?: number;
  onStart: () => void;
}) {
  const lang = usePivotLang();
  const { showPivot } = useTranslation();
  const tr = PIVOT[lang];
  const showTr = showPivot && !!tr;
  const isRtl = isRtlPivotLang(lang);

  return (
    <div className="flex flex-col items-center py-6 text-center">
      <div
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-full text-3xl"
        style={{ background: `color-mix(in srgb, ${accent} 15%, transparent)` }}
      >
        ✏️
      </div>
      <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={{ color: accent }}>
        Évaluation
      </p>
      <h2 className="mb-3 text-xl font-bold text-[var(--color-text-primary)]">
        Prêt(e) pour l&apos;évaluation&nbsp;?
      </h2>
      {lessonTitle && (
        <p className="mb-3 max-w-xs text-sm text-[var(--color-text-secondary)]">
          Vous avez terminé la partie entraînement pour{" "}
          <strong className="text-[var(--color-text-primary)]">{lessonTitle}</strong>.
        </p>
      )}
      <p className="mb-3 max-w-xs text-sm text-[var(--color-text-secondary)]">
        {minutes != null ? (
          <>
            {exerciseCount != null ? (
              <>
                L&apos;évaluation comporte{" "}
                <strong className="text-[var(--color-text-primary)]">
                  {exerciseCount} {exerciseCount > 1 ? "exercices notés" : "exercice noté"}
                </strong>{" "}
                et est chronométrée.{" "}
              </>
            ) : (
              <>L&apos;évaluation est chronométrée. </>
            )}
            <strong className="text-[var(--color-text-primary)]">Vous avez {minutes} minutes</strong>{" "}
            pour compléter l&apos;évaluation.
          </>
        ) : (
          <>Évaluez votre maîtrise pour valider ce module.</>
        )}
      </p>
      {showTr && tr && (
        <div
          className="mb-5 max-w-xs space-y-0.5 border-l-2 pl-2 text-left text-xs italic text-[var(--color-text-secondary)]"
          style={{ borderColor: `color-mix(in srgb, ${accent} 40%, transparent)` }}
          lang={lang}
          dir={isRtl ? "rtl" : "ltr"}
        >
          <p>{tr.title}</p>
          <p>{minutes != null ? tr.timed.replace("{m}", String(minutes)) : tr.untimed}</p>
        </div>
      )}
      <button
        type="button"
        onClick={onStart}
        className="w-full max-w-xs rounded-[var(--radius-lg)] px-6 py-3 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90 active:opacity-80"
        style={{ background: accent }}
      >
        Commencer
      </button>
    </div>
  );
}
