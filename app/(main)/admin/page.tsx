import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { MATH_MODULES } from "@/lib/curriculum/math-data";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

type UserRow = {
  id: string;
  email: string;
  nom: string | null;
  prenom: string | null;
  classe: string | null;
  adresse: string | null;
  npa: string | null;
  localite: string | null;
  telephone: string | null;
  progress_data: StoredProgressV1 | null;
  progress_updated_at: string | null;
  is_admin: boolean;
};

const TOTAL_MATH = MATH_MODULES.length;

function mathCompleted(data: StoredProgressV1 | null): number {
  if (!data?.math) return 0;
  return Object.values(data.math).filter(m => m.state === "completed").length;
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

  const { data: isAdmin } = await supabase.rpc("get_my_is_admin");
  if (!isAdmin) redirect("/");

  const { data: users } = await supabase.rpc("get_users_for_admin") as {
    data: UserRow[] | null;
    error: unknown;
  };

  const rows: UserRow[] = (users ?? []).sort((a, b) => {
    const ta = a.progress_updated_at ?? "";
    const tb = b.progress_updated_at ?? "";
    return tb.localeCompare(ta);
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

      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
              {["Élève", "Classe", "E-mail", "Téléphone", "Localité", "Dernier accès", "Maths"].map(h => (
                <th key={h} className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {rows.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-zinc-400">
                  Aucun utilisateur trouvé.
                </td>
              </tr>
            ) : (
              rows.map(row => {
                const completed = mathCompleted(row.progress_data);
                const pct = Math.round((completed / TOTAL_MATH) * 100);
                const fullName = [row.prenom, row.nom].filter(Boolean).join(" ") || "—";
                const location = [row.npa, row.localite].filter(Boolean).join(" ") || "—";

                return (
                  <tr key={row.id} className="bg-white hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {row.is_admin && (
                          <span className="shrink-0 rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                            admin
                          </span>
                        )}
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">{fullName}</span>
                      </div>
                      {row.adresse && (
                        <p className="mt-0.5 text-xs text-zinc-400">{row.adresse}</p>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {row.classe ? (
                        <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                          {row.classe}
                        </span>
                      ) : <span className="text-zinc-400">—</span>}
                    </td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{row.email}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                      {row.telephone ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{location}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-zinc-500 dark:text-zinc-400">
                      {lastSeen(row.progress_updated_at ?? row.progress_data?.lastActivityAt ?? null)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                          {completed}/{TOTAL_MATH}
                        </span>
                        <div className="h-1.5 w-20 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                          <div className="h-full rounded-full bg-blue-500" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
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
