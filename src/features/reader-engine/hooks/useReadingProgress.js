import { useEffect, useMemo, useState } from "react";
import { loadReadingProgress, saveReadingProgress } from "../utils/readerStorage";

export function useReadingProgress(bookId, totalPages) {
  const savedProgress = useMemo(() => loadReadingProgress(bookId), [bookId]);
  const savedPage = Number(savedProgress?.currentPage);
  const initialPage = Number.isInteger(savedPage)
    ? Math.min(Math.max(savedPage, 1), totalPages)
    : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    const progressPercent = Math.round((currentPage / totalPages) * 100);

    saveReadingProgress(bookId, {
      currentPage,
      totalPages,
      progressPercent,
    });
  }, [bookId, currentPage, totalPages]);

  return {
    currentPage,
    progressPercent: Math.round((currentPage / totalPages) * 100),
    savedProgress,
    setCurrentPage,
  };
}
