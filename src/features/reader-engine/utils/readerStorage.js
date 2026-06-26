const STORAGE_PREFIX = "acervo-digital:reader-progress";

export function getReaderStorageKey(bookId) {
  return `${STORAGE_PREFIX}:${bookId}`;
}

export function loadReadingProgress(bookId) {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(getReaderStorageKey(bookId));
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function saveReadingProgress(bookId, progress) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(
      getReaderStorageKey(bookId),
      JSON.stringify({
        ...progress,
        updatedAt: new Date().toISOString(),
      }),
    );
  } catch {
    // Storage can fail in private browsing. Reading must keep working.
  }
}
