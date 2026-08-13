import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getNavAccess } from "@/lib/auth/nav-access";
import { ChargementEnCoursPage } from "@/components/ui/ChargementEnCours";

const LectureClient = dynamic(
  () => import("@/components/lecture/LectureClient").then((m) => m.LectureClient),
  {
    loading: () => <ChargementEnCoursPage title="Lecture" />,
  },
);

export default async function LecturePage() {
  const access = await getNavAccess();
  const isAdmin = access.role === "admin" || access.role === "prof";
  return (
    <Suspense fallback={<ChargementEnCoursPage title="Lecture" />}>
      <LectureClient isAdmin={isAdmin} />
    </Suspense>
  );
}
