import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { HomeContinue } from "@/components/HomeContinue";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type Props = { searchParams?: Promise<{ msg?: string }> };

export default async function AccueilPage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};

  const supabase = await createSupabaseServerClient();

  let isLoggedIn = false;
  let remoteLast: { slug: string; progressPercent: number } | null = null;

  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      isLoggedIn = true;
      const { data } = await supabase
        .from("user_module_progress")
        .select("module_slug, progress_percent")
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (data?.module_slug != null && typeof data.progress_percent === "number") {
        remoteLast = {
          slug: String(data.module_slug),
          progressPercent: data.progress_percent,
        };
      }
    }
  }

  return (
    <>
      <AppHeader
        rightSlot={
          <Link
            href="/compte"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label="Réglages"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </Link>
        }
      />
      <main className="mx-auto w-full max-w-2xl flex-1 space-y-8 px-4 py-8">
        {q.msg ? (
          <p className="rounded-xl border border-teal-300 bg-teal-50 px-4 py-3 text-sm text-teal-950 dark:border-teal-800 dark:bg-teal-950/40 dark:text-teal-50">
            {q.msg}
          </p>
        ) : null}

        <section aria-labelledby="themes">
          <h2 id="themes" className="sr-only">
            Choisir un thème
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              href="/bibliotheque?fil=francais"
              className="group flex min-h-[11rem] flex-col justify-center rounded-3xl border-2 border-zinc-200 bg-gradient-to-br from-white to-teal-50/80 p-8 shadow-md transition-all hover:border-teal-500 hover:shadow-lg active:scale-[0.99] dark:border-zinc-700 dark:from-zinc-900 dark:to-teal-950/40 dark:hover:border-teal-600"
            >
              <span className="text-4xl drop-shadow-sm" aria-hidden>
                🇫🇷
              </span>
              <span className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Français
              </span>
              <span className="mt-2 text-sm leading-snug text-zinc-600 dark:text-zinc-400">
                Lire, écrire et thèmes du quotidien
              </span>
              <span className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-teal-800 group-hover:underline dark:text-teal-300">
                Ouvrir
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
            <div className="flex flex-col gap-4">
              <p className="text-center text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 sm:text-left">
                Mathématiques
              </p>
              <Link
                href="/bibliotheque?fil=math_elem&axe=calculs"
                className="group flex min-h-[5.25rem] flex-1 flex-col justify-center rounded-3xl border-2 border-zinc-200 bg-gradient-to-br from-white to-amber-50/70 p-6 shadow-md transition-all hover:border-amber-500 hover:shadow-lg active:scale-[0.99] dark:border-zinc-700 dark:from-zinc-900 dark:to-amber-950/30 dark:hover:border-amber-600"
              >
                <span className="text-3xl drop-shadow-sm" aria-hidden>
                  🔢
                </span>
                <span className="mt-2 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Calculs
                </span>
                <span className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">
                  Nombres, opérations, mesures et problèmes
                </span>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 group-hover:underline dark:text-amber-200">
                  Ouvrir
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
              <Link
                href="/bibliotheque?fil=math_elem&axe=geometrie"
                className="group flex min-h-[5.25rem] flex-1 flex-col justify-center rounded-3xl border-2 border-zinc-200 bg-gradient-to-br from-white to-violet-50/70 p-6 shadow-md transition-all hover:border-violet-400 hover:shadow-lg active:scale-[0.99] dark:border-zinc-700 dark:from-zinc-900 dark:to-violet-950/35 dark:hover:border-violet-500"
              >
                <span className="text-3xl drop-shadow-sm" aria-hidden>
                  📐
                </span>
                <span className="mt-2 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Géométrie
                </span>
                <span className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">
                  Formes, repérage dans l&apos;espace
                </span>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-violet-900 group-hover:underline dark:text-violet-200">
                  Ouvrir
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <HomeContinue remoteLast={remoteLast} isLoggedIn={isLoggedIn} />

        <nav className="flex flex-wrap items-center justify-center gap-4 pb-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <Link
            href="/bibliotheque"
            className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-900 dark:text-teal-400"
          >
            Toute la bibliothèque
          </Link>
          <span className="hidden sm:inline" aria-hidden>
            ·
          </span>
          <Link
            href="/placement"
            className="font-semibold text-teal-800 underline underline-offset-4 dark:text-teal-400"
          >
            Placement rapide
          </Link>
        </nav>
      </main>
    </>
  );
}
