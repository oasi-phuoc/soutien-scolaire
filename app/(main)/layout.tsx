import Link from "next/link";
import { MainNav } from "@/components/MainNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      {children}
      <footer className="print:hidden mx-auto mt-auto w-full max-w-2xl px-4 pb-28 pt-8 text-center text-xs text-zinc-500 dark:text-zinc-500">
        <p>
          Progression et scores de quiz sont sur cet appareil jusqu’à branchement
          Supabase (compte).
        </p>
        <Link href="/placement" className="mt-2 inline-block text-teal-700 underline dark:text-teal-400">
          Placement rapide (5 min)
        </Link>
      </footer>
      <MainNav />
    </div>
  );
}
