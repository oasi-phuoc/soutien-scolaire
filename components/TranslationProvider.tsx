"use client";

import { createContext, useContext, useState } from "react";

type TranslationCtx = { showPivot: boolean; togglePivot: () => void };

const TranslationContext = createContext<TranslationCtx>({
  showPivot: false,
  togglePivot: () => {},
});

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [showPivot, setShowPivot] = useState(false);
  return (
    <TranslationContext.Provider value={{ showPivot, togglePivot: () => setShowPivot((v) => !v) }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
