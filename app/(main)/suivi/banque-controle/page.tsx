import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ControlBankPanel } from "@/components/admin/ControlBankPanel";
import { SuiviPageHeader } from "@/components/suivi/SuiviPageHeader";

export default async function SuiviBanqueControlePage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: myRole } = await supabase.rpc("get_my_role");
  if (myRole !== "admin" && myRole !== "prof") redirect("/");

  const { data: hasAccess } = await supabase.rpc("has_suivi_access");
  if (!hasAccess) redirect("/");

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 pb-28">
      <SuiviPageHeader
        title="Banque de contrôle"
        subtitle="Questions réutilisables pour les évaluations"
      />
      <ControlBankPanel />
    </main>
  );
}
