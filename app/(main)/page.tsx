import { createSupabaseServerClient } from "@/lib/supabase/server";
import { HomeTeacherSection } from "@/components/home/HomeTeacherSection";
import { HomeImpressionCard } from "@/components/home/HomeImpressionCard";
import { TasksCard } from "@/components/home/TasksCard";
import { ExpressionMailboxCard } from "@/components/expression/ExpressionMailboxCard";

type Props = { searchParams?: Promise<{ msg?: string }> };

async function getHomeRole(): Promise<"admin" | "prof" | "other"> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return "other";
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return "other";
  const { data: role } = await supabase.rpc("get_my_role");
  if (role === "admin") return "admin";
  if (role === "prof") return "prof";
  return "other";
}

export default async function HomePage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};
  const role = await getHomeRole();
  const teacher = role === "admin" || role === "prof";

  return (
    <main className="app-shell flex-1 space-y-6 pt-8 pb-32 lg:pb-28">
      {q.msg ? (
        <p className="rounded-xl border border-indigo-300 bg-indigo-50 px-4 py-3 text-sm text-indigo-950 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-50">
          {q.msg}
        </p>
      ) : null}

      {!teacher ? <TasksCard /> : null}
      <ExpressionMailboxCard />
      {role === "admin" ? <HomeImpressionCard /> : null}

      <HomeTeacherSection />
    </main>
  );
}
