import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { AdminTable, type UserRow } from "@/components/admin/AdminTable";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";

export default async function AdminPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: myRole } = await supabase.rpc("get_my_role");
  if (myRole !== "admin") redirect(myRole === "prof" ? "/suivi" : "/");

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

  const rows: UserRow[] = (users ?? []).map((u) => ({
    ...u,
    can_print: Boolean((u as { can_print?: boolean }).can_print),
  })).sort((a, b) => {
    const na = [a.prenom, a.nom].filter(Boolean).join(" ").toLowerCase();
    const nb = [b.prenom, b.nom].filter(Boolean).join(" ").toLowerCase();
    return na.localeCompare(nb, "fr");
  });

  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-10 pb-28`}>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link
            href="/compte"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-theme)] text-white transition-opacity hover:opacity-80"
            aria-label="Retour aux réglages"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Gestion des comptes
            </h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {rows.length} compte{rows.length !== 1 ? "s" : ""} enregistré{rows.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <Link
          href="/admin/attribution-professeurs"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-theme)]/30 bg-white text-[var(--color-theme)] shadow-sm transition-colors hover:bg-[var(--color-theme-light)] dark:bg-zinc-900 dark:hover:bg-[var(--color-theme)]/10"
          aria-label="Attribution des professeurs"
          title="Attribution des professeurs"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </Link>
      </div>

      <AdminTable
        initialRows={rows}
        currentUserId={user.id}
        currentUserRole="admin"
        initialPlacementEnabled={placementEnabled !== false}
      />
    </main>
  );
}
