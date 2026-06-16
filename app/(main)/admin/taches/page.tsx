import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { TasksPanel } from "@/components/admin/TasksPanel";
import type { StudentOption } from "@/app/actions/tasks";

export default async function TachesPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: myRole } = await supabase.rpc("get_my_role");
  if (myRole !== "admin" && myRole !== "prof") redirect("/");

  const { data: students } = await supabase.rpc("get_students_for_task") as {
    data: StudentOption[] | null;
    error: unknown;
  };

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10 pb-28">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-theme)] text-white transition-opacity hover:opacity-80"
            aria-label="Retour administration"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Affecter une tâche
            </h1>
            <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
              Assignez des tâches aux élèves
            </p>
          </div>
        </div>
      </div>

      <TasksPanel students={students ?? []} />
    </main>
  );
}
