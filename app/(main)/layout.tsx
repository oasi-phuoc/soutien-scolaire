import { Suspense } from "react";
import { MainNav } from "@/components/MainNav";
import { ProgressSyncProvider } from "@/components/ProgressSyncProvider";
import { PlacementPendingSync } from "@/components/placement/PlacementPendingSync";
import { SectionBackground } from "@/components/SectionBackground";
import { TranslationProvider } from "@/components/TranslationProvider";
import { EvalNavGuardProvider } from "@/components/EvalNavGuard";
import { ContentEditorProvider } from "@/components/content-editor/ContentEditorProvider";
import { DesktopSidebar } from "@/components/layout/DesktopSidebar";
import { ExerciseToolbar } from "@/components/layout/ExerciseToolbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TranslationProvider>
      <EvalNavGuardProvider>
        <ContentEditorProvider>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-transparent">
            <SectionBackground />
            <ProgressSyncProvider />
            <PlacementPendingSync />
            <Suspense fallback={null}>
              <DesktopSidebar />
            </Suspense>
            <div className="desktop-shell relative z-10 flex min-h-screen flex-col">
              <ExerciseToolbar />
              <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
            </div>
            <MainNav />
          </div>
        </ContentEditorProvider>
      </EvalNavGuardProvider>
    </TranslationProvider>
  );
}
