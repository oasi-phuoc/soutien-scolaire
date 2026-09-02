import { redirect } from "next/navigation";
import { getNavAccess } from "@/lib/auth/nav-access";
import { ImpressionHubBoundary } from "@/components/admin/ImpressionHubBoundary";
import { APP_SHELL_BLEED } from "@/lib/layout/page-shell";

/**
 * Même hub que `/impressions` (mise en page split reprise de l’ancien
 * /admin/impression). Conservé pour les favoris / anciennes URLs admin ;
 * l’accès reste admin **ou** `can_print`.
 */
export default async function AdminImpressionPage() {
  const access = await getNavAccess();
  if (access.authenticated) {
    if (!access.isAdmin && !access.canPrint) {
      redirect(access.role === "prof" ? "/suivi" : "/");
    }
  } else if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    redirect("/connexion");
  }

  return (
    <main className={`${APP_SHELL_BLEED} flex-1 py-4 pb-28 lg:py-6`}>
      <ImpressionHubBoundary />
    </main>
  );
}
