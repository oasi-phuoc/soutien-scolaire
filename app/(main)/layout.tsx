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
        <p>Next.js + Supabase (auth). Développe ici tes écrans.</p>
        <Link href="/compte" className="mt-2 inline-block text-teal-700 underline dark:text-teal-400">
          Réglages / compte
        </Link>
      </footer>
      <MainNav />
    </div>
  );
}
