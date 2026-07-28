import { redirect } from "next/navigation";

/** Ancienne URL — la page d'impression est `/impressions` (admin + can_print). */
export default function AdminImpressionPage() {
  redirect("/impressions");
}
