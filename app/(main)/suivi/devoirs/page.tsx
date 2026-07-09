import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { TasksPanel } from "@/components/admin/TasksPanel";
import { SuiviPageHeader } from "@/components/suivi/SuiviPageHeader";
import type { StudentOption } from "@/app/actions/tasks";

export default async function SuiviDevoirsPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: myRole } = await supabase.rpc("get_my_role");
  if (myRole !== "admin" && myRole !== "prof") redirect("/");

  const { data: hasAccess } = await supabase.rpc("has_suivi_access");
  if (!hasAccess) redirect("/");

  const { data: students } = await supabase.rpc("get_students_for_task") as {
    data: StudentOption[] | null;
    error: unknown;
  };

  return (
    <main className="app-shell app-shell--reader flex-1 py-10 pb-28">
      <SuiviPageHeader
        title="Affecter un devoir"
        subtitle="Assignez des tâches aux élèves"
      />
      <TasksPanel students={students ?? []} />
    </main>
  );
}
