import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getTeacherTasksAction } from "@/app/actions/tasks";
import { TasksApercu } from "@/components/admin/TasksApercu";
import { SuiviPageHeader } from "@/components/suivi/SuiviPageHeader";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";

export default async function SuiviDevoirsApercuPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: myRole } = await supabase.rpc("get_my_role");
  if (myRole !== "admin" && myRole !== "prof") redirect("/");

  const { data: hasAccess } = await supabase.rpc("has_suivi_access");
  if (!hasAccess) redirect("/");

  const { tasks } = await getTeacherTasksAction();

  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-10 pb-28`}>
      <SuiviPageHeader
        title="Suivi des devoirs"
        subtitle={`${tasks.length} tâche${tasks.length !== 1 ? "s" : ""} assignée${tasks.length !== 1 ? "s" : ""}`}
        actions={
          <Link
            href="/suivi/devoirs"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-theme)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Affecter
          </Link>
        }
      />
      <TasksApercu tasks={tasks} />
    </main>
  );
}
