import { createSupabaseServerClient } from "@/lib/supabase/server";
import { HomeProgressCards } from "@/components/home/HomeProgressCards";
import { TasksCard } from "@/components/home/TasksCard";

type Props = { searchParams?: Promise<{ msg?: string }> };

export default async function HomePage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};

  const supabase = await createSupabaseServerClient();
  let email: string | null = null;
  if (supabase) {
    const { data: { user } } = await supabase.auth.getUser();
    email = user?.email ?? null;
  }

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-10 pb-28">
      {q.msg ? (
        <p className="rounded-xl border border-indigo-300 bg-indigo-50 px-4 py-3 text-sm text-indigo-950 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-50">
          {q.msg}
        </p>
      ) : null}

      <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-theme-light)] px-5 py-5">
        <div className="pointer-events-none absolute -bottom-4 -right-4 text-[var(--color-theme)]" aria-hidden>
          <svg width="110" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M32 76 L38 90 L62 90 L68 76 Z" fill="currentColor" opacity="0.35"/>
            <rect x="28" y="70" width="44" height="8" rx="4" fill="currentColor" opacity="0.45"/>
            <path d="M50 70 Q50 55 50 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
            <path d="M50 55 Q70 42 78 24 C64 44 52 54 50 55" fill="currentColor" opacity="0.38"/>
            <path d="M50 48 Q30 35 20 17 C34 37 48 47 50 48" fill="currentColor" opacity="0.28"/>
            <path d="M50 38 Q66 28 74 14 C60 30 51 37 50 38" fill="currentColor" opacity="0.32"/>
            <path d="M50 42 Q34 32 26 18 C40 34 49 41 50 42" fill="currentColor" opacity="0.22"/>
          </svg>
        </div>
        <div className="relative z-10">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-theme)]">Bienvenue</h1>
          {email ? (
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              <span className="font-medium text-[var(--color-text-primary)]">{email}</span>
            </p>
          ) : null}
        </div>
      </div>

      <TasksCard />

      <HomeProgressCards />

      <footer className="pt-4 text-center text-xs text-zinc-400 dark:text-zinc-600">
        Lecture &amp; Alphabétisation — Mélina Schröter &amp; Phuoc Van
      </footer>
    </main>
  );
}
