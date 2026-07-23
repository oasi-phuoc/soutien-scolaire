import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ImpressionHubClient } from "@/components/admin/ImpressionHubClient";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";

export default async function AdminImpressionPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: myRole } = await supabase.rpc("get_my_role");
  if (myRole !== "admin") redirect(myRole === "prof" ? "/suivi" : "/");

  return (
    <main className={`${APP_SHELL_FULL} min-w-0 flex-1 overflow-x-hidden py-10 pb-28`}>
      <div className="mb-6 min-w-0">
        <div className="flex min-w-0 items-center gap-2">
          <Link
            href="/"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-theme)] text-white transition-opacity hover:opacity-80"
            aria-label="Retour à l'accueil"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <div className="min-w-0">
            <h1 className="truncate text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Impression
            </h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Documents d&apos;exercice
            </p>
          </div>
        </div>
      </div>

      <ImpressionHubClient />
    </main>
  );
}
