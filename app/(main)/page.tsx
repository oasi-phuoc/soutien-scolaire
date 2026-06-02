import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { HomeProgressCards } from "@/components/home/HomeProgressCards";

type Props = { searchParams?: Promise<{ msg?: string }> };

export default async function HomePage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};

  const supabase = await createSupabaseServerClient();
  let email: string | null = null;
  let isAdmin = false;
  if (supabase) {
    const { data: { user } } = await supabase.auth.getUser();
    email = user?.email ?? null;
    if (user) {
      const { data } = await supabase.rpc("get_my_is_admin");
      isAdmin = data === true;
    }
  }

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-10 pb-28">
      {q.msg ? (
        <p className="rounded-xl border border-indigo-300 bg-indigo-50 px-4 py-3 text-sm text-indigo-950 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-50">
          {q.msg}
        </p>
      ) : null}

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Accueil
        </h1>
        {email ? (
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Connecté : <span className="font-medium text-zinc-700 dark:text-zinc-300">{email}</span>
          </p>
        ) : null}
      </div>

      {isAdmin && (
        <Link
          href="/admin"
          className="flex items-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300 dark:hover:bg-blue-950/50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          Tableau de bord admin
        </Link>
      )}

      <HomeProgressCards />

      <footer className="pt-4 text-center text-xs text-zinc-400 dark:text-zinc-600">
        Lecture &amp; Alphabétisation — Mélina Schröter &amp; Phuoc Van
      </footer>
    </main>
  );
}
