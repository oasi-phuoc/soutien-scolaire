import { CommunicationRunner } from "@/components/communication/CommunicationRunner";

type Props = { params: Promise<{ lessonId: string }> };

export default async function CommLessonRoute({ params }: Props) {
  const { lessonId } = await params;
  return <CommunicationRunner lessonId={lessonId} />;
}
