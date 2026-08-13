import { Children, isValidElement, type ReactNode } from "react";
import {
  detectLectureConsigneIcons,
  LECTURE_CONSIGNE_ICONS,
  type LectureConsigneIcon,
} from "@/lib/curriculum/lecture-consigne-icons";

function flattenText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(flattenText).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return flattenText(node.props.children);
  }
  return Children.toArray(node).map(flattenText).join("");
}

export function LectureConsigne({
  children,
  icons,
  className = "",
  iconSize = 24,
}: {
  children: ReactNode;
  icons?: readonly LectureConsigneIcon[];
  className?: string;
  iconSize?: number;
}) {
  const resolved = icons ?? detectLectureConsigneIcons(flattenText(children));
  return (
    <p
      className={`flex items-start gap-2 text-sm text-[var(--color-text-secondary)] ${className}`.trim()}
    >
      {resolved.length > 0 ? (
        <span className="mt-0.5 flex shrink-0 items-center gap-1">
          {resolved.map((icon) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={icon}
              src={LECTURE_CONSIGNE_ICONS[icon]}
              alt=""
              width={iconSize}
              height={iconSize}
              className="shrink-0"
            />
          ))}
        </span>
      ) : null}
      <span className="min-w-0">{children}</span>
    </p>
  );
}
