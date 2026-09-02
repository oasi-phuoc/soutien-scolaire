import Link from "next/link";
import { redirect } from "next/navigation";
import { getTeacherTasksAction } from "@/app/actions/tasks";
import { getNavAccess } from "@/lib/auth/nav-access";
import { TasksApercu } from "@/components/admin/TasksApercu";
import { SuiviPageHeader } from "@/components/suivi/SuiviPageHeader";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";

export default async function SuiviDevoirsApercuPage() {
  const access = await getNavAccess();
  if (!access.authenticated) redirect("/connexion");
  if (access.role !== "admin" && access.role !== "prof") redirect("/");
  if (!access.hasSuiviAccess && !access.isAdmin) redirect("/");

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
