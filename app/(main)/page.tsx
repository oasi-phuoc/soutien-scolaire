import { getNavAccess } from "@/lib/auth/nav-access";
import { HomeTeacherSection } from "@/components/home/HomeTeacherSection";
import { HomeImpressionCard } from "@/components/home/HomeImpressionCard";
import { TasksCard } from "@/components/home/TasksCard";
import { ExpressionMailboxCard } from "@/components/expression/ExpressionMailboxCard";

type Props = { searchParams?: Promise<{ msg?: string }> };

export default async function HomePage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};
  const access = await getNavAccess();
  const teacher = access.role === "admin" || access.role === "prof";
  const canPrint = access.canPrint;

  return (
    <main className="app-shell flex-1 space-y-6 pt-8 pb-32 lg:pb-28">
      {q.msg ? (
        <p className="rounded-xl border border-indigo-300 bg-indigo-50 px-4 py-3 text-sm text-indigo-950 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-50">
          {q.msg}
        </p>
      ) : null}

      <HomeTeacherSection />
      {canPrint ? <HomeImpressionCard /> : null}
      {!teacher ? <TasksCard /> : null}
      <ExpressionMailboxCard />
    </main>
  );
}
