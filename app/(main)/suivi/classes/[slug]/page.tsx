import { redirect, notFound } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { canAccessClassAction } from "@/app/actions/suivi";
import { SuiviClassDashboard } from "@/components/suivi/SuiviClassDashboard";
import { SuiviPageHeader } from "@/components/suivi/SuiviPageHeader";

export default async function SuiviClassPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const classLabel = decodeURIComponent(slug);

  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: role } = await supabase.rpc("get_my_role");
  if (role !== "admin" && role !== "prof") redirect("/");

  const { data: hasAccess } = await supabase.rpc("has_suivi_access");
  if (!hasAccess) redirect("/");

  const canAccess = await canAccessClassAction(classLabel);
  if (!canAccess) notFound();

  return (
    <main className="app-shell app-shell--wide flex-1 py-10 pb-28">
      <SuiviPageHeader title={classLabel} subtitle="Tableau de bord de la classe" />
      <SuiviClassDashboard classLabel={classLabel} />
    </main>
  );
}
