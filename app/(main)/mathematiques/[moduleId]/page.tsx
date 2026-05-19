import { notFound, redirect } from "next/navigation";
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
  const parentMod = getMathModule(parentModuleId!);
  if (!parentMod) notFound();

  const tabLabel = parentMod!.branch === "geometry" ? "Formes" : "Calculs";

  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-32">
      <header className="mb-5 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-alg)]">
          Mathématiques · {tabLabel} · {parentMod!.code}
        </p>
        <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
          {lesson!.submoduleCode} — {lesson!.theory.title.fr}
        </h1>
      </header>
      <MathSubmoduleWorkspace submoduleId={upper} moduleId={parentModuleId!} />
    </main>
  );
}
