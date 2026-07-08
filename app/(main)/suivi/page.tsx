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
  if (!hasAccess && role !== "admin") redirect("/");

  const subtitle = role === "admin"
    ? "Toutes les classes de l'établissement"
    : "Classes, progression et devoirs";

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 pb-28">
      <SuiviPageHeader
        title="Suivi pédagogique"
        subtitle={subtitle}
        backHref="/"
        backLabel="accueil"
      />
      <SuiviClassesClient />
    </main>
  );
}
