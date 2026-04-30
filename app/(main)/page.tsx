import Link from "next/link";
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
      <main className="mx-auto w-full max-w-2xl flex-1 space-y-8 bg-white px-4 py-8 dark:bg-zinc-950">
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
              href="/francais"
              className="group flex min-h-[11rem] flex-col justify-center rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:border-teal-500 hover:shadow-md active:scale-[0.99] dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-teal-600"
            >
              <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Français
              </span>
              <span className="mt-2 text-sm leading-snug text-zinc-600 dark:text-zinc-400">
                Lire, écrire et thèmes du quotidien
              </span>
              <span className="mt-4 text-base font-semibold text-teal-800 group-hover:underline dark:text-teal-300">
                Ouvrir
              </span>
            </Link>
            <Link
              href="/mathematiques"
              className="group flex min-h-[11rem] flex-col justify-center rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:border-amber-500 hover:shadow-md active:scale-[0.99] dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-amber-600"
            >
              <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Mathématiques
              </span>
              <span className="mt-2 text-sm leading-snug text-zinc-600 dark:text-zinc-400">
                Nombres, opérations, mesures et problèmes
              </span>
              <span className="mt-4 text-base font-semibold text-amber-800 group-hover:underline dark:text-amber-200">
                Ouvrir
              </span>
            </Link>
          </div>
        </section>

        <HomeContinue remoteLast={remoteLast} isLoggedIn={isLoggedIn} />

        <nav className="flex flex-wrap items-center justify-center gap-4 pb-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <Link
            href="/placement"
            className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-900 dark:text-teal-400"
          >
            Placement rapide
          </Link>
        </nav>
      </main>
    </>
  );
}
