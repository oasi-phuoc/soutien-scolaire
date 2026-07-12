"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  getContentEditorCapabilitiesAction,
  getContentOverridesMapAction,
  saveContentOverrideAction,
} from "@/app/actions/content-editor";
import { applyContentOverride } from "@/lib/content-editor/merge";
import {
  readEditModeEnabled,
  readLocalOverrides,
  writeEditModeEnabled,
  writeLocalOverride,
} from "@/lib/content-editor/local-store";
import type {
  ContentEditorCapabilities,
  ContentOverrideRecord,
  SaveContentResult,
} from "@/lib/content-editor/types";

type ContentEditorContextValue = {
  ready: boolean;
  capabilities: ContentEditorCapabilities;
  editMode: boolean;
  setEditMode: (v: boolean) => void;
  overrides: Record<string, ContentOverrideRecord>;
  resolve: <T>(key: string, base: T) => T;
  getOverride: (key: string) => ContentOverrideRecord | undefined;
  saveOverride: (input: {
    key: string;
    payload: unknown;
    label?: string;
    syncGit?: boolean;
  }) => Promise<SaveContentResult>;
  refresh: () => Promise<void>;
};

const defaultCapabilities: ContentEditorCapabilities = {
  canEdit: false,
  supabaseConfigured: false,
  gitConfigured: false,
  openLocally: false,
};

const ContentEditorContext = createContext<ContentEditorContextValue | null>(
  null,
);

export function ContentEditorProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [capabilities, setCapabilities] =
    useState<ContentEditorCapabilities>(defaultCapabilities);
  const [editMode, setEditModeState] = useState(false);
  const [overrides, setOverrides] = useState<
    Record<string, ContentOverrideRecord>
  >({});

  const refresh = useCallback(async () => {
    const [caps, remote] = await Promise.all([
      getContentEditorCapabilitiesAction(),
      getContentOverridesMapAction(),
    ]);
    setCapabilities(caps);
    const local = readLocalOverrides();
    const merged: Record<string, ContentOverrideRecord> = {
      ...(remote.map ?? {}),
      ...local,
    };
    // local wins if newer
    for (const [k, loc] of Object.entries(local)) {
      const rem = remote.map?.[k];
      if (!rem || loc.updatedAt >= rem.updatedAt) merged[k] = loc;
    }
    setOverrides(merged);
    // Appliquer alias images runtime (CE/CO/vocab/lecture)
    const aliases = merged["catalog:image:aliases"]?.payload;
    if (aliases && typeof aliases === "object") {
      const { setRuntimeImageAliases } = await import(
        "@/lib/curriculum/word-image-resolver"
      );
      setRuntimeImageAliases(aliases as Record<string, string>);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    setEditModeState(readEditModeEnabled());
    void refresh();
    const onStorage = () => {
      setEditModeState(readEditModeEnabled());
      setOverrides((prev) => ({ ...prev, ...readLocalOverrides() }));
    };
    window.addEventListener("soutien-content-edit-mode", onStorage);
    window.addEventListener("soutien-content-overrides", onStorage);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("soutien-content-edit-mode", onStorage);
      window.removeEventListener("soutien-content-overrides", onStorage);
      window.removeEventListener("storage", onStorage);
    };
  }, [refresh]);

  const setEditMode = useCallback(
    (v: boolean) => {
      if (v && !capabilities.canEdit) return;
      writeEditModeEnabled(v);
      setEditModeState(v);
    },
    [capabilities.canEdit],
  );

  const resolve = useCallback(
    <T,>(key: string, base: T): T => {
      const ov = overrides[key];
      return applyContentOverride(base, ov?.payload);
    },
    [overrides],
  );

  const getOverride = useCallback(
    (key: string) => overrides[key],
    [overrides],
  );

  const saveOverride = useCallback(
    async (input: {
      key: string;
      payload: unknown;
      label?: string;
      syncGit?: boolean;
    }): Promise<SaveContentResult> => {
      const result = await saveContentOverrideAction(input);
      if (result.ok) {
        writeLocalOverride(result.record);
        setOverrides((prev) => ({ ...prev, [result.record.key]: result.record }));
      }
      return result;
    },
    [],
  );

  const value = useMemo<ContentEditorContextValue>(
    () => ({
      ready,
      capabilities,
      editMode: editMode && capabilities.canEdit,
      setEditMode,
      overrides,
      resolve,
      getOverride,
      saveOverride,
      refresh,
    }),
    [
      ready,
      capabilities,
      editMode,
      setEditMode,
      overrides,
      resolve,
      getOverride,
      saveOverride,
      refresh,
    ],
  );

  return (
    <ContentEditorContext.Provider value={value}>
      {children}
    </ContentEditorContext.Provider>
  );
}

export function useContentEditor(): ContentEditorContextValue {
  const ctx = useContext(ContentEditorContext);
  if (!ctx) {
    return {
      ready: true,
      capabilities: defaultCapabilities,
      editMode: false,
      setEditMode: () => {},
      overrides: {},
      resolve: (_key, base) => base,
      getOverride: () => undefined,
      saveOverride: async () => ({
        ok: false,
        reason: "ContentEditorProvider manquant",
      }),
      refresh: async () => {},
    };
  }
  return ctx;
}
