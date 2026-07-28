import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";
import { ImpressionsClient } from "@/components/impressions/ImpressionsClient";

export default async function ImpressionsPage() {
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
  // Sans Supabase : accessible en local pour tester l'impression

  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-4 pb-28 lg:py-6`}>
      <ImpressionsClient />
    </main>
  );
}
