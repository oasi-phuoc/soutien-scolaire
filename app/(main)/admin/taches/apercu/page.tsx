import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getTeacherTasksAction } from "@/app/actions/tasks";
import { TasksApercu } from "@/components/admin/TasksApercu";

export default async function TachesApercuPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: myRole } = await supabase.rpc("get_my_role");
  if (myRole !== "admin" && myRole !== "prof") redirect("/");

  const { tasks } = await getTeacherTasksAction();

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 pb-28">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Aperçu des tâches
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {tasks.length} tâche{tasks.length !== 1 ? "s" : ""} assignée{tasks.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/admin/taches"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-theme)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
            Affecter
          </Link>
          <Link href="/admin" className="text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200">
            ← Admin
          </Link>
        </div>
      </div>

      <TasksApercu tasks={tasks} />
    </main>
  );
}
