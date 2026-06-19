import { MainNav } from "@/components/MainNav";
import { ProgressSyncProvider } from "@/components/ProgressSyncProvider";
import { TranslationProvider } from "@/components/TranslationProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TranslationProvider>
      <div className="flex min-h-screen flex-col bg-[var(--background)] dark:bg-zinc-950">
        <ProgressSyncProvider />
        {children}
        <MainNav />
      </div>
    </TranslationProvider>
  );
}
