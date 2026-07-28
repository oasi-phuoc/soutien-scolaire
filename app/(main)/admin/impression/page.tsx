import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ImpressionHubBoundary } from "@/components/admin/ImpressionHubBoundary";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";

/**
 * Même hub que `/impressions` (mise en page split reprise de l’ancien
 * /admin/impression). Conservé pour les favoris / anciennes URLs admin ;
 * l’accès reste admin **ou** `can_print`.
 */
export default async function AdminImpressionPage() {
  const supabase = await createSupabaseServerClient();
  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) redirect("/connexion");

    const { data: myRole } = await supabase.rpc("get_my_role");
    const isAdmin = myRole === "admin";

    let canPrint = isAdmin;
    if (!canPrint) {
      const { data: printAccess, error } = await supabase.rpc("can_access_print");
      if (!error) {
        canPrint = Boolean(printAccess);
      } else {
        const { data: profile } = await supabase
          .from("profiles")
          .select("can_print")
          .eq("id", user.id)
          .maybeSingle();
        canPrint = Boolean(profile?.can_print);
      }
    }

    if (!canPrint) redirect(myRole === "prof" ? "/suivi" : "/");
  }

  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-4 pb-28 lg:py-6`}>
      <ImpressionHubBoundary />
    </main>
  );
}
