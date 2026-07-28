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
import { getNavAccess, pedagogicFromNavAccess } from "@/lib/auth/nav-access";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const access = await getNavAccess();
  const initialPedagogicNav = pedagogicFromNavAccess(access);

  return (
    <TranslationProvider>
      <EvalNavGuardProvider>
        <ContentEditorProvider>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-transparent">
            <SectionBackground />
            <ProgressSyncProvider />
            <PlacementPendingSync />
            <Suspense fallback={null}>
              <DesktopSidebar
                initialPedagogicNav={initialPedagogicNav}
                initialPlacementVisible={access.placementVisible}
              />
            </Suspense>
            <div className="desktop-shell relative z-10 flex min-h-screen flex-col">
              <ExerciseToolbar />
              <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
            </div>
            <MainNav
              initialCanPrint={access.canPrint}
              initialPlacementVisible={access.placementVisible}
            />
          </div>
        </ContentEditorProvider>
      </EvalNavGuardProvider>
    </TranslationProvider>
  );
}
