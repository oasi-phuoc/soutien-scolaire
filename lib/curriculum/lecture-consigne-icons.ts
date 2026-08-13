export const LECTURE_CONSIGNE_ICONS = {
  souligner: "/assets/lecture/icones/icon-souligner.svg",
  colorier: "/assets/lecture/icones/icon-colorier.svg",
  entourer: "/assets/lecture/icones/icon-entourer.svg",
  cocher: "/assets/lecture/icones/icon-cocher.svg",
  relier: "/assets/lecture/icones/icon-relier.svg",
  prononcer: "/assets/lecture/icones/icon-prononcer.svg",
  lire: "/assets/lecture/icones/icon-lire.svg",
  ecrire: "/assets/lecture/icones/icon-ecrire.svg",
  barrer: "/assets/lecture/icones/icon-barrer.svg",
  observer: "/assets/lecture/icones/icon-observer.svg",
  ecouter: "/assets/lecture/icones/icon-ecouter.svg",
} as const;

export type LectureConsigneIcon = keyof typeof LECTURE_CONSIGNE_ICONS;

const DETECTORS: ReadonlyArray<{ icon: LectureConsigneIcon; pattern: RegExp }> = [
  { icon: "souligner", pattern: /soulign/i },
  { icon: "colorier", pattern: /colori/i },
  { icon: "entourer", pattern: /entour/i },
  { icon: "cocher", pattern: /\bcoche|\btouche/i },
  { icon: "relier", pattern: /\breli(e|er|ez)\b/i },
  { icon: "prononcer", pattern: /prononc/i },
  { icon: "lire", pattern: /\blis(ez)?\b|\blire\b/i },
  { icon: "ecrire", pattern: /écri|ecri/i },
  { icon: "barrer", pattern: /\bbarr(e|er|ez)\b/i },
  { icon: "observer", pattern: /observ|\bregard/i },
  { icon: "ecouter", pattern: /écout|ecout|entend/i },
];

export function detectLectureConsigneIcons(text: string): LectureConsigneIcon[] {
  if (!text.trim()) return [];
  return DETECTORS.filter(({ pattern }) => pattern.test(text)).map(({ icon }) => icon);
}
