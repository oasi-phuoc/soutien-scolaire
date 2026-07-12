import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getLetterInModule, type LetterData } from "@/lib/curriculum/lecture-data";
import { LectureLetterRunner } from "@/components/lecture/LectureLetterRunner";
import { getContentOverridesMapAction } from "@/app/actions/content-editor";
import { lectureLetterKey } from "@/lib/content-editor/keys";

type Props = { params: Promise<{ moduleId: string; letterLower: string }> };

export default async function LectureLetterPage({ params }: Props) {
  const { moduleId, letterLower } = await params;
  const base = getLetterInModule(moduleId, letterLower);
  const { map } = await getContentOverridesMapAction();
  const ov = map[lectureLetterKey(letterLower)]?.payload as LetterData | undefined;
  const data = ov ?? base;
  if (!data) notFound();

  return (
    <main>
      <Suspense fallback={null}>
        <LectureLetterRunner data={data} moduleId={moduleId} />
      </Suspense>
    </main>
  );
}
