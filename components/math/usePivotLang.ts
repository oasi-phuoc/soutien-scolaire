"use client";

import { useEffect, useState } from "react";
import { PIVOT_LANGS, type PivotCode } from "@/lib/pivot-langs";

const STORAGE_KEY = "soutien:pivot";

export function usePivotLang(): PivotCode {
  const [code, setCode] = useState<PivotCode>("ar");

  useEffect(() => {
    function read() {
      try {
        const v = localStorage.getItem(STORAGE_KEY) as PivotCode | null;
        if (v && PIVOT_LANGS.some((l) => l.code === v)) {
          setCode(v);
          return;
        }
      } catch {
        /* ignore */
      }
      setCode("ar");
    }
    read();
    window.addEventListener("storage", read);
    window.addEventListener("soutien-pivot-updated", read);
    return () => {
      window.removeEventListener("storage", read);
      window.removeEventListener("soutien-pivot-updated", read);
    };
  }, []);

  return code;
}

export function getPivotLangSync(): PivotCode {
  if (typeof window === "undefined") return "ar";
  try {
    const v = localStorage.getItem(STORAGE_KEY) as PivotCode | null;
    if (v && PIVOT_LANGS.some((l) => l.code === v)) return v;
  } catch {
    /* ignore */
  }
  return "ar";
}
