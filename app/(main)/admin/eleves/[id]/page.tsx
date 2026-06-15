import { redirect, notFound } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getUserForAdminAction } from "@/app/actions/admin";
import { EleveDetailPage } from "@/components/admin/EleveDetailPage";

export default async function EleveDetailRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user: caller } } = await supabase.auth.getUser();
  if (!caller) redirect("/connexion");

  const { data: myRole } = await supabase.rpc("get_my_role");
  if (myRole !== "admin" && myRole !== "prof") redirect("/");

  const res = await getUserForAdminAction(id);
  if (!res.ok || !res.user) notFound();

  return (
    <EleveDetailPage
      user={res.user}
      currentUserId={caller.id}
      currentUserRole={myRole as "admin" | "prof"}
    />
  );
}
