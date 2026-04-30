import type { ModuleItem } from "./modules";

export function moduleListHref(mod: Pick<ModuleItem, "track" | "mathAxis">): string {
  if (mod.track === "literacy" || mod.track === "fle") return "/francais";
  const ax = mod.mathAxis;
  if (ax === "geometrie") return "/mathematiques?axe=geometrie";
  if (ax === "calculs") return "/mathematiques?axe=calculs";
  return "/mathematiques";
}

export function moduleListLabel(mod: Pick<ModuleItem, "track">): string {
  if (mod.track === "literacy" || mod.track === "fle") return "Français";
  return "Mathématiques";
}
