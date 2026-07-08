"use client";

import { usePathname } from "next/navigation";

type SectionKey = "home" | "lecture" | "maths" | "francais" | "placement" | "settings";

function sectionForPath(pathname: string): SectionKey {
  if (pathname.startsWith("/placement")) return "placement";
  if (pathname.startsWith("/lecture")) return "lecture";
  if (pathname.startsWith("/mathematiques")) return "maths";
  if (pathname.startsWith("/francais") || pathname.startsWith("/communication")) return "francais";
  if (pathname.startsWith("/compte") || pathname.startsWith("/admin") || pathname.startsWith("/suivi")) return "settings";
  return "home";
}

export function SectionBackground() {
  const pathname = usePathname() ?? "";
  const section = sectionForPath(pathname);

  return (
    <div
      aria-hidden="true"
      className={`section-background section-background-${section}`}
    />
  );
}
