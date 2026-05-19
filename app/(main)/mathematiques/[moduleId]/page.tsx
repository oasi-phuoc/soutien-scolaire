import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { MathSubmoduleWorkspace } from "@/components/math/MathSubmoduleWorkspace";
import { getMathModule } from "@/lib/curriculum/math-data";
import {
  getLessonsForModule,
  getLessonBySubmoduleId,
  getModuleIdForSubmodule,
} from "@/lib/curriculum/lessons-registry";

type Props = { params: Promise<{ moduleId: string }> };

export default async function MathModulePage({ params }: Props) {
  const { moduleId } = await params;
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
  const parentMod = getMathModule(parentModuleId);
  if (!parentMod) notFound();

  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-32">
      <div className="mb-6 flex items-center gap-3">
        <Link
          href="/mathematiques"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
          aria-label="Retour mathématiques"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <div>
          <p className="text-xs font-medium uppercase text-[var(--color-accent-alg)]">
            {parentMod.code} — {lesson.submoduleCode}
          </p>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {lesson.theory.title.fr}
          </h1>
        </div>
      </div>
      <MathSubmoduleWorkspace submoduleId={upper} moduleId={parentModuleId} />
    </main>
  );
}
