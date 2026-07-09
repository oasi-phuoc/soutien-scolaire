import { createSupabaseServerClient } from "@/lib/supabase/server";
import { HomeTeacherSection } from "@/components/home/HomeTeacherSection";
import { TasksCard } from "@/components/home/TasksCard";
import { ExpressionMailboxCard } from "@/components/expression/ExpressionMailboxCard";

type Props = { searchParams?: Promise<{ msg?: string }> };

async function isTeacherAccount(): Promise<boolean> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return false;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;
  const { data: role } = await supabase.rpc("get_my_role");
  return role === "admin" || role === "prof";
}

export default async function HomePage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};
  const teacher = await isTeacherAccount();

  return (
    <main className="app-shell flex-1 space-y-6 pt-8 pb-32 lg:pb-28">
      {q.msg ? (
        <p className="rounded-xl border border-indigo-300 bg-indigo-50 px-4 py-3 text-sm text-indigo-950 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-50">
          {q.msg}
        </p>
      ) : null}

      {!teacher ? <TasksCard /> : null}
      <ExpressionMailboxCard />

      <HomeTeacherSection />
    </main>
  );
}
