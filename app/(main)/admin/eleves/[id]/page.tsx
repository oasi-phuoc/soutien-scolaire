import { redirect, notFound } from "next/navigation";
import { getUserForAdminAction } from "@/app/actions/admin";
import { getNavAccess } from "@/lib/auth/nav-access";
import { EleveDetailPage } from "@/components/admin/EleveDetailPage";

export default async function EleveDetailRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const access = await getNavAccess();
  if (!access.authenticated || !access.userId) redirect("/connexion");
  if (!access.isAdmin) redirect(access.role === "prof" ? "/suivi" : "/");

  const res = await getUserForAdminAction(id);
  if (!res.ok || !res.user) notFound();

  return (
    <EleveDetailPage
      user={res.user}
      currentUserId={access.userId}
      currentUserRole="admin"
    />
  );
}
