import Link from "next/link";
import { STORIES } from "@/lib/curriculum/lecture-data";

const LEVEL_GROUPS = [
  {
    level: "A1" as const,
    label: "Débutant",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  },
  {
    level: "A2" as const,
    label: "Moyen",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    level: "B1" as const,
    label: "Avancé",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  },
];

export default function HistoiresPage() {
  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-8 px-4 py-8 pb-32">
      <div className="flex items-center gap-3">
        <Link
          href="/lecture"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
          aria-label="Retour"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-lecture)]">
            Lecture
          </p>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">Histoires à lire</h1>
        </div>
      </div>

      {LEVEL_GROUPS.map(({ level, label, badge }) => {
        const stories = STORIES.filter((s) => s.level === level);
        return (
          <section key={level} className="space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-[var(--color-text-primary)]">{label}</h2>
              <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badge}`}>{level}</span>
            </div>
            <ul className="space-y-2">
              {stories.map((story) => (
                <li key={story.id}>
                  <Link
                    href={`/lecture/histoires/${story.id}`}
                    className="flex items-center justify-between gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-4 transition-colors hover:border-[var(--color-accent-lecture)]/50"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">{story.title}</p>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        {story.sentences.length} phrases
                      </p>
                    </div>
                    <span className="text-[var(--color-accent-lecture)]" aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
