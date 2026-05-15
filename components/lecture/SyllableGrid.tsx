"use client";

import { speak } from "@/lib/utils/speech";
import { usePivotLang } from "@/components/math/usePivotLang";
import { lectureUi } from "@/lib/i18n/lecture-ui";

interface Props {
  syllables: string[];
}

export function SyllableGrid({ syllables }: Props) {
  const lang = usePivotLang();
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Lire les syllabes</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez chaque syllabe pour la lire à voix haute
      </p>
      <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
        {lectureUi(lang, "tapSyllableAloud")}
      </p>
      <div className="grid grid-cols-3 gap-2">
        {syllables.map((syl, i) => (
          <button
            key={i}
            type="button"
            onClick={() => speak(syl)}
            className="flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 py-3 text-sm font-semibold text-[var(--color-text-primary)] active:scale-95 transition-transform"
          >
            {syl}
          </button>
        ))}
      </div>
    </section>
  );
}
