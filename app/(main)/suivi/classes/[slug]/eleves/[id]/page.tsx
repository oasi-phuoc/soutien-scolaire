import { redirect, notFound } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { canAccessStudentAction } from "@/app/actions/suivi";
import { getUserForAdminAction } from "@/app/actions/admin";
import { EleveDetailPage } from "@/components/admin/EleveDetailPage";

export default async function SuiviElevePage({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const { slug, id } = await params;
  const classLabel = decodeURIComponent(slug);

  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user: caller } } = await supabase.auth.getUser();
  if (!caller) redirect("/connexion");

  const { data: myRole } = await supabase.rpc("get_my_role");
  if (myRole !== "admin" && myRole !== "prof") redirect("/");

  const { data: hasAccess } = await supabase.rpc("has_suivi_access");
  if (!hasAccess) redirect("/");

  const canAccess = await canAccessStudentAction(id);
  if (!canAccess) notFound();

  const res = await getUserForAdminAction(id);
  if (!res.ok || !res.user) notFound();

  return (
    <EleveDetailPage
      user={res.user}
      currentUserId={caller.id}
      currentUserRole={myRole as "admin" | "prof"}
      context="suivi"
      backHref={`/suivi/classes/${encodeURIComponent(classLabel)}`}
    />
  );
}
