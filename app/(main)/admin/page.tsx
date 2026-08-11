import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { AdminTable, type UserRow } from "@/components/admin/AdminTable";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";
import { ensurePartialAccessDefaultsAppliedAction } from "@/app/actions/admin";

export default async function AdminPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: myRole } = await supabase.rpc("get_my_role");
  if (myRole !== "admin") redirect(myRole === "prof" ? "/suivi" : "/");

  await ensurePartialAccessDefaultsAppliedAction();

  const { data: users } = await supabase.rpc("get_users_for_admin") as {
    data: (Omit<UserRow, "progress_data" | "login_id" | "placement_test_best" | "placement_combined"> & {
      progress_data: StoredProgressV1 | null;
      login_id: string | null;
      placement_test_best: UserRow["placement_test_best"];
      placement_combined: UserRow["placement_combined"];
    })[] | null;
    error: unknown;
  };
  const { data: placementEnabled } = await supabase.rpc("get_placement_module_enabled");

  const rows: UserRow[] = (users ?? []).map((u) => {
    const free = Boolean((u as { can_free_access?: boolean }).can_free_access);
    const legacyFr = Boolean((u as { can_partial_french?: boolean }).can_partial_french);
    const legacyMath = Boolean((u as { can_partial_math?: boolean }).can_partial_math);
    return {
      ...u,
      can_print: Boolean((u as { can_print?: boolean }).can_print),
      can_free_access: free,
      can_partial_french_grammar: Boolean(
        (u as { can_partial_french_grammar?: boolean }).can_partial_french_grammar ?? legacyFr,
      ),
      can_partial_french_comm: Boolean(
        (u as { can_partial_french_comm?: boolean }).can_partial_french_comm ?? legacyFr,
      ),
      can_partial_math_a3: Boolean(
        (u as { can_partial_math_a3?: boolean }).can_partial_math_a3 ?? legacyMath,
      ),
      can_partial_math_a8: Boolean((u as { can_partial_math_a8?: boolean }).can_partial_math_a8),
      can_partial_math_g3: Boolean((u as { can_partial_math_g3?: boolean }).can_partial_math_g3),
    };
  }).sort((a, b) => {
    const na = [a.prenom, a.nom].filter(Boolean).join(" ").toLowerCase();
    const nb = [b.prenom, b.nom].filter(Boolean).join(" ").toLowerCase();
    return na.localeCompare(nb, "fr");
  });

  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-10 pb-28`}>
      <AdminTable
        initialRows={rows}
        currentUserId={user.id}
        currentUserRole="admin"
        initialPlacementEnabled={placementEnabled !== false}
        accountCount={rows.length}
      />
    </main>
  );
}
