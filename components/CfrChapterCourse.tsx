import type { CfrCourseChapter } from "@/lib/cfr-course-types";

type Props = {
  chapters: CfrCourseChapter[];
  sourceNote: string;
};

export function CfrChapterCourse({ chapters, sourceNote }: Props) {
  return (
    <div className="space-y-10">
      {chapters.map((ch) => (
        <article
          key={ch.roman}
          className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 md:p-6"
          id={`chapitre-${ch.roman}`}
        >
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Chapitre {ch.roman} — {ch.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{ch.inBook}</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-6">
            <section
              aria-label={`${ch.title} — version simplifiée`}
              className="rounded-xl border border-teal-200/80 bg-teal-50/60 p-4 dark:border-teal-900/70 dark:bg-teal-950/25"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-900 dark:text-teal-100">
                En bref — théorie simplifiée
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                {ch.theorieSimple.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section
              aria-label={`${ch.title} — théorie complétée`}
              className="rounded-xl border border-violet-200/80 bg-violet-50/50 p-4 dark:border-violet-900/60 dark:bg-violet-950/25"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-900 dark:text-violet-100">
                Pour aller plus loin — théorie complétée
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                {ch.theorieComplete.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      ))}

      <p className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-xs leading-relaxed text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-400">
        {sourceNote}
      </p>
    </div>
  );
}
