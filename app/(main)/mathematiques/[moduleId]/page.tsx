import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import type { CSSProperties } from "react";
import { MathSubmoduleWorkspace } from "@/components/math/MathSubmoduleWorkspace";
import { getMathModule } from "@/lib/curriculum/math-data";
import {
  getLessonsForModule,
  getLessonBySubmoduleId,
  getModuleIdForSubmodule,
} from "@/lib/curriculum/lessons-registry";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type Props = { params: Promise<{ moduleId: string }>; searchParams: Promise<{ eval?: string }> };

export default async function MathModulePage({ params, searchParams }: Props) {
  const { moduleId } = await params;
  const { eval: evalParam } = await searchParams;

  const supabase = await createSupabaseServerClient();
  let isAdmin = false;
  if (supabase) {
    const { data: myRole } = await supabase.rpc("get_my_role");
    isAdmin = myRole === "admin" || myRole === "prof";
  }
  const upper = moduleId.toUpperCase();

  // If it's a module ID (A4, G1…), redirect to its first submodule
  const mod = getMathModule(upper);
  if (mod) {
    const lessons = getLessonsForModule(upper);
    if (lessons && lessons.length > 0) {
      redirect(`/mathematiques/${lessons[0]!.submoduleId}`);
    }
    notFound();
  }

  // Otherwise treat it as a submodule ID (A4-1, A4-2…)
  const lesson = getLessonBySubmoduleId(upper);
  if (!lesson) notFound();

  const parentModuleId = getModuleIdForSubmodule(upper);
  if (!parentModuleId) notFound();
  const parentMod = getMathModule(parentModuleId!);
  // RA/RG revision modules are not in MATH_MODULES — allow them through
  if (!parentMod && !parentModuleId!.startsWith("RA")) notFound();

  const isGeometry = parentMod?.branch === "geometry";
  const tabLabel = isGeometry ? "Formes" : "Calculs";
  const backHref = isGeometry ? "/mathematiques?tab=geometry" : "/mathematiques";
  const pageStyle = isGeometry
    ? ({ "--color-accent-alg": "var(--color-accent-geo)" } as CSSProperties)
    : undefined;

  return (
    <main className="math-module-page mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-32" style={pageStyle}>
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
            {lesson!.submoduleCode} — {lesson!.theory.title.fr}
          </h1>
        </div>
      </header>
      <MathSubmoduleWorkspace submoduleId={upper} moduleId={parentModuleId!} startAtEval={evalParam === "1"} isAdmin={isAdmin} />
    </main>
  );
}
