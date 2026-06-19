import { MainNav } from "@/components/MainNav";
import { ProgressSyncProvider } from "@/components/ProgressSyncProvider";
import { SectionBackground } from "@/components/SectionBackground";
import { TranslationProvider } from "@/components/TranslationProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TranslationProvider>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-transparent">
        <SectionBackground />
        <ProgressSyncProvider />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
        <MainNav />
      </div>
    </TranslationProvider>
  );
}
