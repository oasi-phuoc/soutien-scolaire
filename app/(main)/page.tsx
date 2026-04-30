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
        title="Soutien scolaire"
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
      <main className="mx-auto w-full max-w-2xl flex-1 space-y-6 px-4 py-6">
        {q.msg ? (
          <p className="rounded-xl border border-teal-300 bg-teal-50 px-4 py-3 text-sm text-teal-950 dark:border-teal-800 dark:bg-teal-950/40 dark:text-teal-50">
            {q.msg}
          </p>
        ) : null}
        <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
          Bonjour
        </p>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Français et maths, pas à pas. Choisis un thème ci-dessous ou ouvre la bibliothèque pour
          tout voir.
        </p>

        <HomeContinue remoteLast={remoteLast} isLoggedIn={isLoggedIn} />

        <section aria-labelledby="par-ou">
          <h2 id="par-ou" className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Par où commencer ?
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Link
              href="/bibliotheque?fil=literacy"
              className="flex min-h-[5.5rem] flex-col justify-center rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm hover:border-teal-400 hover:bg-teal-50/40 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-teal-700"
            >
              <span className="text-2xl" aria-hidden>
                🔤
              </span>
              <span className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">Lire et écrire</span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Alphabet et lectures courtes</span>
            </Link>
            <Link
              href="/bibliotheque?fil=fle"
              className="flex min-h-[5.5rem] flex-col justify-center rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm hover:border-teal-400 hover:bg-teal-50/40 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-teal-700"
            >
              <span className="text-2xl" aria-hidden>
                💬
              </span>
              <span className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">Français thèmes</span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Salut, santé, école…</span>
            </Link>
            <Link
              href="/bibliotheque?fil=math_elem"
              className="flex min-h-[5.5rem] flex-col justify-center rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm hover:border-teal-400 hover:bg-teal-50/40 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-teal-700"
            >
              <span className="text-2xl" aria-hidden>
                🔢
              </span>
              <span className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">Maths début</span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Nombres et formes</span>
            </Link>
            <Link
              href="/bibliotheque"
              className="flex min-h-[5.5rem] flex-col justify-center rounded-2xl border-2 border-dashed border-teal-300 bg-teal-50/30 p-4 hover:bg-teal-50/60 dark:border-teal-800 dark:bg-teal-950/20 dark:hover:bg-teal-950/40"
            >
              <span className="text-2xl" aria-hidden>
                📚
              </span>
              <span className="mt-1 font-semibold text-teal-900 dark:text-teal-100">Tout voir</span>
              <span className="text-sm text-teal-800/90 dark:text-teal-300/90">Bibliothèque complète</span>
            </Link>
          </div>
        </section>

        <p className="text-center">
          <Link
            href="/placement"
            className="inline-flex min-h-12 items-center justify-center rounded-xl px-6 text-base font-semibold text-teal-700 underline-offset-4 hover:underline dark:text-teal-400"
          >
            Placement rapide (5 min)
          </Link>
        </p>
      </main>
    </>
  );
}
