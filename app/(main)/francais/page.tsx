import { Suspense } from "react";
import { FrancaisClient } from "@/components/FrancaisClient";

export default function FrancaisPage() {
  return (
    <Suspense>
      <FrancaisClient />
    </Suspense>
  );
}
