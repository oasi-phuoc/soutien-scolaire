import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getNavAccess } from "@/lib/auth/nav-access";

const LectureClient = dynamic(
  () => import("@/components/lecture/LectureClient").then((m) => m.LectureClient),
  {
    loading: () => (
      <p className="px-4 py-16 text-center text-sm text-[var(--color-text-secondary)]">
        Chargement de la lecture…
      </p>
    ),
  },
);

export default async function LecturePage() {
  const access = await getNavAccess();
  const isAdmin = access.role === "admin" || access.role === "prof";
  return (
    <Suspense fallback={null}>
      <LectureClient isAdmin={isAdmin} />
    </Suspense>
  );
}
