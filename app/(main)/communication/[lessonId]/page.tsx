import { CommunicationLessonPage } from "@/components/communication/CommunicationLessonPage";

type Props = { params: Promise<{ lessonId: string }> };

export default async function CommLessonRoute({ params }: Props) {
  const { lessonId } = await params;
  return <CommunicationLessonPage lessonId={lessonId} />;
}
