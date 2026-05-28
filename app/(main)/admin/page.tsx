import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { AdminTable, type UserRow } from "@/components/admin/AdminTable";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

export default async function AdminPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: isAdmin } = await supabase.rpc("get_my_is_admin");
  if (!isAdmin) redirect("/");

  const { data: users } = await supabase.rpc("get_users_for_admin") as {
    data: (Omit<UserRow, "progress_data"> & { progress_data: StoredProgressV1 | null })[] | null;
    error: unknown;
  };

  const rows: UserRow[] = (users ?? []).sort((a, b) => {
    const na = [a.prenom, a.nom].filter(Boolean).join(" ").toLowerCase();
    const nb = [b.prenom, b.nom].filter(Boolean).join(" ").toLowerCase();
    return na.localeCompare(nb, "fr");
  });

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 pb-28">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Administration
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {rows.length} compte{rows.length !== 1 ? "s" : ""} enregistré{rows.length !== 1 ? "s" : ""}
          </p>
        </div>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          Admin
        </span>
      </div>

      <AdminTable initialRows={rows} currentUserId={user.id} />
    </main>
  );
}
