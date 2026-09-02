import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getNavAccess } from "@/lib/auth/nav-access";
import { TasksPanel } from "@/components/admin/TasksPanel";
import { SuiviPageHeader } from "@/components/suivi/SuiviPageHeader";
import type { StudentOption } from "@/app/actions/tasks";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";

export default async function SuiviDevoirsPage() {
  const access = await getNavAccess();
  if (!access.authenticated) redirect("/connexion");
  if (access.role !== "admin" && access.role !== "prof") redirect("/");
  if (!access.hasSuiviAccess && !access.isAdmin) redirect("/");

  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: students } = await supabase.rpc("get_students_for_task") as {
    data: StudentOption[] | null;
    error: unknown;
  };

  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-10 pb-28`}>
      <SuiviPageHeader
        title="Affecter un devoir"
        subtitle="Assignez des tâches aux élèves"
      />
      <TasksPanel students={students ?? []} />
    </main>
  );
}
