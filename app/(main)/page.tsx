import { HomeProgressCards } from "@/components/home/HomeProgressCards";
import { TasksCard } from "@/components/home/TasksCard";
import { ExpressionMailboxCard } from "@/components/expression/ExpressionMailboxCard";

type Props = { searchParams?: Promise<{ msg?: string }> };

export default async function HomePage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 pt-8 pb-32">
      {q.msg ? (
        <p className="rounded-xl border border-indigo-300 bg-indigo-50 px-4 py-3 text-sm text-indigo-950 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-50">
          {q.msg}
        </p>
      ) : null}

      <TasksCard />

      <ExpressionMailboxCard />

      <HomeProgressCards />
    </main>
  );
}
