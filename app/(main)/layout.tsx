import { MainNav } from "@/components/MainNav";
import { TranslationProvider } from "@/components/TranslationProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TranslationProvider>
      <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
        {children}
        <MainNav />
      </div>
    </TranslationProvider>
  );
}
