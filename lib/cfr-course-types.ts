/** Chapitre de cours CFR (géométrie, calculs, etc.) — même structure partout */
export type CfrCourseChapter = {
  roman: string;
  title: string;
  /** Une phrase sur ce que fait le chapitre dans le livret */
  inBook: string;
  theorieSimple: string[];
  theorieComplete: string[];
};
