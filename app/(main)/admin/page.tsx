import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { MATH_MODULES } from "@/lib/curriculum/math-data";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

type UserRow = {
  id: string;
  email: string;
  progress_data: StoredProgressV1 | null;
  progress_updated_at: string | null;
  is_admin: boolean;
};

const TOTAL_MATH = MATH_MODULES.length;

function mathCompleted(data: StoredProgressV1 | null): number {
  if (!data?.math) return 0;
  return Object.values(data.math).filter(m => m.state === "completed").length;
}

function mathInProgress(data: StoredProgressV1 | null): number {
  if (!data?.math) return 0;
  return Object.values(data.math).filter(m => m.state === "in_progress").length;
}

function lastSeen(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  const now = new Date();
  const diff = Math.floor((now.getTime() - d.getTime()) / 1000);
  if (diff < 60) return "À l'instant";
  if (diff < 3600) return `Il y a ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `Il y a ${Math.floor(diff / 3600)} h`;
  const days = Math.floor(diff / 86400);
  if (days < 30) return `Il y a ${days} j`;
  return d.toLocaleDateString("fr-CH", { day: "2-digit", month: "short", year: "numeric" });
}

export default async function AdminPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile?.is_admin) redirect("/");

  const { data: users, error } = await supabase.rpc("get_users_for_admin") as {
    data: UserRow[] | null;
    error: unknown;
  };

  const rows: UserRow[] = (users ?? []).sort((a, b) => {
    const ta = a.progress_updated_at ?? "";
    const tb = b.progress_updated_at ?? "";
    return tb.localeCompare(ta);
  });

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 pb-28">
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

      {error && (
        <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/20 dark:text-red-300">
          Erreur lors du chargement des données.
        </p>
      )}

      <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Compte
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Dernier accès
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Maths complétés
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                En cours
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Niveau
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-zinc-400">
                  Aucun utilisateur trouvé.
                </td>
              </tr>
            ) : (
              rows.map(row => {
                const completed = mathCompleted(row.progress_data);
                const inProgress = mathInProgress(row.progress_data);
                const pct = Math.round((completed / TOTAL_MATH) * 100);
                const level = row.progress_data?.level ?? null;

                return (
                  <tr key={row.id} className="bg-white hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {row.is_admin && (
                          <span className="shrink-0 rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                            admin
                          </span>
                        )}
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">
                          {row.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-zinc-500 dark:text-zinc-400">
                      {lastSeen(row.progress_updated_at ?? row.progress_data?.lastActivityAt ?? null)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                          {completed} / {TOTAL_MATH}
                        </span>
                        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                          <div
                            className="h-full rounded-full bg-blue-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      {inProgress > 0 ? (
                        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                          {inProgress} module{inProgress > 1 ? "s" : ""}
                        </span>
                      ) : (
                        <span className="text-zinc-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {level ? (
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          level === "avance"
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                            : level === "moyen"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                            : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                        }`}>
                          {level === "avance" ? "Avancé" : level === "moyen" ? "Moyen" : "Base"}
                        </span>
                      ) : (
                        <span className="text-zinc-400">—</span>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
