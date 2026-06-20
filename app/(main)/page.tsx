import Link from "next/link";
import { HomeProgressCards } from "@/components/home/HomeProgressCards";
import { TasksCard } from "@/components/home/TasksCard";

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

      <HomeProgressCards />

      <footer className="pt-4 text-center">
        <Link
          href="/avant-propos"
          className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-theme)] underline underline-offset-2"
        >
          À propos de l&apos;application
        </Link>
      </footer>
    </main>
  );
}
