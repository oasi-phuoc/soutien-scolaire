import { MainNav } from "@/components/MainNav";
import { ProgressSyncProvider } from "@/components/ProgressSyncProvider";
import { PlacementPendingSync } from "@/components/placement/PlacementPendingSync";
import { SectionBackground } from "@/components/SectionBackground";
import { TranslationProvider } from "@/components/TranslationProvider";
import { EvalNavGuardProvider } from "@/components/EvalNavGuard";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TranslationProvider>
      <EvalNavGuardProvider>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-transparent">
          <SectionBackground />
          <ProgressSyncProvider />
          <PlacementPendingSync />
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
          <MainNav />
        </div>
      </EvalNavGuardProvider>
    </TranslationProvider>
  );
}
