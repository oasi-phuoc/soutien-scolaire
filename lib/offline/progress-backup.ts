import type { StoredProgressV1 } from "@/lib/curriculum/types";
import { getActiveProgressUser } from "@/lib/progress/device-isolation";
import { COMM_PROGRESS_KEY } from "@/lib/progress/communication-progress";
import { LECTURE_PROGRESS_KEY } from "@/lib/progress/lecture-progress";

const DB_NAME = "learnup-offline";
const DB_VERSION = 1;
const STORE_NAME = "progress";
const MAIN_KEY = "main";
const MATH_PROGRESS_KEY = "soutien-learning-progress-v1";

function backupKeyForUser(userId: string | null | undefined): string {
  return userId ? `user:${userId}` : MAIN_KEY;
}

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function backupProgress(
  progress: StoredProgressV1,
  userId?: string | null,
) {
  if (typeof indexedDB === "undefined") return;
  const active = userId ?? (typeof window !== "undefined" ? getActiveProgressUser() : null);
  const key = backupKeyForUser(active);
  const db = await openDatabase();
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    transaction.objectStore(STORE_NAME).put(progress, key);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  }).finally(() => db.close());
}

async function readBackup(key: string): Promise<StoredProgressV1 | null> {
  if (typeof indexedDB === "undefined") return null;
  const db = await openDatabase();
  return new Promise<StoredProgressV1 | null>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const request = transaction.objectStore(STORE_NAME).get(key);
    request.onsuccess = () => resolve((request.result as StoredProgressV1 | undefined) ?? null);
    request.onerror = () => reject(request.error);
  }).finally(() => db.close());
}

export async function ensureProgressBackup() {
  if (typeof window === "undefined") return false;
  const local = localStorage.getItem(MATH_PROGRESS_KEY);
  const active = getActiveProgressUser();
  if (local) {
    try {
      await backupProgress(JSON.parse(local) as StoredProgressV1, active);
    } catch {
      // A malformed local value will be handled by the regular progress loader.
    }
    return false;
  }

  // Jamais restaurer le backup « main » anonyme : ce serait la progression
  // du compte précédent après une déconnexion.
  if (!active) return false;

  try {
    const backup = await readBackup(backupKeyForUser(active));
    if (!backup) return false;
    localStorage.setItem(MATH_PROGRESS_KEY, JSON.stringify(backup));
    if (backup.commProgress) {
      localStorage.setItem(COMM_PROGRESS_KEY, JSON.stringify(backup.commProgress));
    }
    if (backup.lectureProgress) {
      localStorage.setItem(LECTURE_PROGRESS_KEY, JSON.stringify(backup.lectureProgress));
    }
    return true;
  } catch {
    return false;
  }
}
