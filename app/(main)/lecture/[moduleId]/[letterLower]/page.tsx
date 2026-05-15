import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getLetterInModule } from "@/lib/curriculum/lecture-data";
import { LectureLetterRunner } from "@/components/lecture/LectureLetterRunner";

type Props = { params: Promise<{ moduleId: string; letterLower: string }> };

export default async function LectureLetterPage({ params }: Props) {
  const { moduleId, letterLower } = await params;
  const data = getLetterInModule(moduleId, letterLower);
  if (!data) notFound();

  return (
    <main>
      <Suspense fallback={null}>
        <LectureLetterRunner data={data} moduleId={moduleId} />
      </Suspense>
    </main>
  );
}
