import type { StoredProgressV1 } from "@/lib/curriculum/types";

const DB_NAME = "learnup-offline";
const DB_VERSION = 1;
const STORE_NAME = "progress";
const MAIN_KEY = "main";
const MATH_PROGRESS_KEY = "soutien-learning-progress-v1";

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

export async function backupProgress(progress: StoredProgressV1) {
  if (typeof indexedDB === "undefined") return;
  const db = await openDatabase();
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    transaction.objectStore(STORE_NAME).put(progress, MAIN_KEY);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  }).finally(() => db.close());
}

async function readBackup(): Promise<StoredProgressV1 | null> {
  if (typeof indexedDB === "undefined") return null;
  const db = await openDatabase();
  return new Promise<StoredProgressV1 | null>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const request = transaction.objectStore(STORE_NAME).get(MAIN_KEY);
    request.onsuccess = () => resolve((request.result as StoredProgressV1 | undefined) ?? null);
    request.onerror = () => reject(request.error);
  }).finally(() => db.close());
}

export async function ensureProgressBackup() {
  if (typeof window === "undefined") return false;
  const local = localStorage.getItem(MATH_PROGRESS_KEY);
  if (local) {
    try {
      await backupProgress(JSON.parse(local) as StoredProgressV1);
    } catch {
      // A malformed local value will be handled by the regular progress loader.
    }
    return false;
  }

  try {
    const backup = await readBackup();
    if (!backup) return false;
    localStorage.setItem(MATH_PROGRESS_KEY, JSON.stringify(backup));
    if (backup.commProgress) {
      localStorage.setItem("soutien-comm-progress-v1", JSON.stringify(backup.commProgress));
    }
    if (backup.lectureProgress) {
      localStorage.setItem("soutien-lecture-v2", JSON.stringify(backup.lectureProgress));
    }
    return true;
  } catch {
    return false;
  }
}
