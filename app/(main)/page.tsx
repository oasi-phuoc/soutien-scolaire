import { createSupabaseServerClient } from "@/lib/supabase/server";
import { HomeTeacherSection } from "@/components/home/HomeTeacherSection";
import { HomeImpressionCard } from "@/components/home/HomeImpressionCard";
import { TasksCard } from "@/components/home/TasksCard";
import { ExpressionMailboxCard } from "@/components/expression/ExpressionMailboxCard";

type Props = { searchParams?: Promise<{ msg?: string }> };

async function getHomeAccess(): Promise<{
  role: "admin" | "prof" | "other";
  canPrint: boolean;
}> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return { role: "other", canPrint: false };
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { role: "other", canPrint: false };

  const { data: role } = await supabase.rpc("get_my_role");
  const isAdmin = role === "admin";
  const homeRole: "admin" | "prof" | "other" =
    role === "admin" ? "admin" : role === "prof" ? "prof" : "other";

  if (isAdmin) return { role: homeRole, canPrint: true };

  const { data: printAccess, error } = await supabase.rpc("can_access_print");
  if (!error) return { role: homeRole, canPrint: Boolean(printAccess) };

  const { data: profile } = await supabase
    .from("profiles")
    .select("can_print")
    .eq("id", user.id)
    .maybeSingle();
  return { role: homeRole, canPrint: Boolean(profile?.can_print) };
}

export default async function HomePage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};
  const { role, canPrint } = await getHomeAccess();
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
      {canPrint ? <HomeImpressionCard /> : null}

      <HomeTeacherSection />
    </main>
  );
}
