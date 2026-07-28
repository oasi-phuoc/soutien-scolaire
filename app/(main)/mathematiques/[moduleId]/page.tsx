import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import type { CSSProperties } from "react";
import { MathSubmoduleWorkspaceLazy } from "@/components/math/MathSubmoduleWorkspaceLazy";
import { MathModuleComingSoon } from "@/components/math/MathModuleComingSoon";
import {
  MATH_MODULES,
  getMathModule,
  isMathModuleAccessibleToStudent,
} from "@/lib/curriculum/math-data";
import {
  getLessonsForModule,
  getLessonBySubmoduleId,
  getModuleIdForSubmodule,
} from "@/lib/curriculum/lessons-registry";
import { getNavAccess } from "@/lib/auth/nav-access";
import { getContentOverridesMapAction } from "@/app/actions/content-editor";
import { mathLessonKey } from "@/lib/content-editor/keys";
import { resolveMathModules } from "@/lib/content-editor/catalog";
import type { MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";

type Props = { params: Promise<{ moduleId: string }>; searchParams: Promise<{ eval?: string }> };

export default async function MathModulePage({ params, searchParams }: Props) {
  const { moduleId } = await params;
  const { eval: evalParam } = await searchParams;

  const access = await getNavAccess();
  const isAdmin = access.role === "admin" || access.role === "prof";
  const upper = moduleId.toUpperCase();
  const { map } = await getContentOverridesMapAction();
  const catalogModules = resolveMathModules(MATH_MODULES, map);

  // If it's a module ID (A4, G1…), redirect to its first submodule
  const mod =
    catalogModules.find((m) => m.id === upper) ?? getMathModule(upper);
  if (mod) {
    if (!isAdmin && !isMathModuleAccessibleToStudent(mod)) {
      const backHref = mod.branch === "geometry" ? "/mathematiques?tab=geometry" : "/mathematiques";
      return (
        <main className="math-module-page app-shell flex-1 py-8 pb-32 lg:pb-28">
          <MathModuleComingSoon moduleCode={mod.code} moduleTitle={mod.title} backHref={backHref} />
        </main>
      );
    }
    const lessons = getLessonsForModule(upper);
    const firstSub =
      lessons?.[0]?.submoduleId ??
      mod.submodules[0]?.id ??
      null;
    if (firstSub) {
      redirect(`/mathematiques/${firstSub}`);
    }
    notFound();
  }

  // Otherwise treat it as a submodule ID (A4-1, A4-2…)
  const baseLesson = getLessonBySubmoduleId(upper);
  const ovLesson = map[mathLessonKey(upper)]?.payload as MathSubmoduleLesson | undefined;
  const lesson = ovLesson ?? baseLesson;
  if (!lesson) notFound();

  const parentFromCatalog = catalogModules.find((m) =>
    m.submodules.some((s) => s.id === upper),
  );
  const parentModuleId =
    parentFromCatalog?.id ?? getModuleIdForSubmodule(upper) ?? upper.split("-")[0]!;
  if (!parentModuleId) notFound();
  const parentMod =
    parentFromCatalog ?? getMathModule(parentModuleId) ?? undefined;
  // RA/RG revision modules are not in MATH_MODULES — allow them through
  if (!parentMod && !parentModuleId.startsWith("RA") && !isAdmin) notFound();
  if (parentMod && !isAdmin && !isMathModuleAccessibleToStudent(parentMod)) {
    const backHref = parentMod.branch === "geometry" ? "/mathematiques?tab=geometry" : "/mathematiques";
    return (
      <main className="math-module-page app-shell flex-1 py-8 pb-32 lg:pb-28">
        <MathModuleComingSoon moduleCode={parentMod.code} moduleTitle={parentMod.title} backHref={backHref} />
      </main>
    );
  }

  const isGeometry = parentMod?.branch === "geometry";
  const tabLabel = isGeometry ? "Formes" : "Calculs";
  const backHref = isGeometry ? "/mathematiques?tab=geometry" : "/mathematiques";
  const pageStyle = isGeometry
    ? ({ "--color-accent-alg": "var(--color-accent-geo)" } as CSSProperties)
    : undefined;

  return (
    <main className="math-module-page app-shell flex-1 py-8 pb-32 lg:pb-28" style={pageStyle}>
      <header className="mb-5 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-alg)]">
          Mathématiques · {tabLabel} · {parentMod?.code ?? parentModuleId}
        </p>
        <div className="flex items-center gap-2">
          <Link
            href={backHref}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-alg)] text-white transition-opacity hover:opacity-80"
            aria-label="Retour aux mathématiques"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {lesson.submoduleCode} — {lesson.theory?.title?.fr ?? lesson.submoduleId}
          </h1>
        </div>
      </header>
      <MathSubmoduleWorkspaceLazy submoduleId={upper} moduleId={parentModuleId} startAtEval={evalParam === "1"} />
    </main>
  );
}
