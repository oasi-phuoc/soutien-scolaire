import { createContext, useContext } from "react";

/**
 * During a live evaluation, exercise components must lock answers without
 * revealing right/wrong styling — correction is only shown on the results
 * screen (or during training). Default true preserves existing behavior
 * for any component tree not explicitly wrapped by a Provider.
 */
export const EvalRevealContext = createContext(true);

export function useEvalReveal(): boolean {
  return useContext(EvalRevealContext);
}
