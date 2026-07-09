import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SuiviClassAssignmentsClient } from "@/components/suivi/SuiviClassAssignmentsClient";
import { SuiviPageHeader } from "@/components/suivi/SuiviPageHeader";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";

export default async function SuiviAttributionsPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: role } = await supabase.rpc("get_my_role");
  if (role !== "admin" && role !== "prof") redirect("/");

  const { data: hasAccess } = await supabase.rpc("has_suivi_access");
  if (!hasAccess && role !== "admin") redirect("/");

  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-10 pb-28`}>
      <SuiviPageHeader
        title="Attribution des classes"
        subtitle="Classe principale et classes secondaires"
        backHref="/suivi"
        backLabel="suivi pédagogique"
      />
      <SuiviClassAssignmentsClient />
    </main>
  );
}
