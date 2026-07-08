import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SuiviClassesClient } from "@/components/suivi/SuiviClassesClient";
import { SuiviPageHeader } from "@/components/suivi/SuiviPageHeader";

export default async function SuiviPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: role } = await supabase.rpc("get_my_role");
  if (role !== "admin" && role !== "prof") redirect("/");

  const { data: hasAccess } = await supabase.rpc("has_suivi_access");
  if (!hasAccess) redirect("/");

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 pb-28">
      <SuiviPageHeader
        title="Suivi pédagogique"
        subtitle="Classes, progression et devoirs"
        backHref="/"
        backLabel="accueil"
        actions={
          role === "admin" ? (
            <Link
              href="/admin"
              className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-600 dark:border-zinc-700"
            >
              Comptes
            </Link>
          ) : null
        }
      />
      <SuiviClassesClient />
    </main>
  );
}
