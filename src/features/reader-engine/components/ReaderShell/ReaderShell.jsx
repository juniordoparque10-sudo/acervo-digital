import { useMemo, useState } from "react";
import CompletionMessage from "../CompletionMessage/CompletionMessage";
import OpenBook from "../OpenBook/OpenBook";
import ReaderControls from "../ReaderControls/ReaderControls";
import ReaderHeader from "../ReaderHeader/ReaderHeader";
import ReaderRecommendations from "../ReaderRecommendations/ReaderRecommendations";
import ReaderSidebar from "../ReaderSidebar/ReaderSidebar";
import { getReaderBook, getRelatedBooks } from "../../data/readerDemoData";
import { useReadingProgress } from "../../hooks/useReadingProgress";
import "./ReaderShell.css";

export default function ReaderShell({ bookId }) {
  const book = getReaderBook(bookId);
  const recommendations = useMemo(() => getRelatedBooks(book.category), [book.category]);
  const { currentPage, progressPercent, savedProgress, setCurrentPage } = useReadingProgress(
    book.id,
    book.totalPages,
  );
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [isTurning, setIsTurning] = useState(false);
  const [visualFullscreen, setVisualFullscreen] = useState(false);

  function playPageSound() {
    if (!soundEnabled || typeof Audio === "undefined") {
      return;
    }

    try {
      const audio = new Audio("/assets/sounds/page-turn.mp3");
      audio.volume = 0.24;
      audio.play().catch(() => {});
    } catch {
      // Audio is optional in this prototype.
    }
  }

  function updatePage(nextPage) {
    const normalizedPage = Math.min(Math.max(nextPage, 1), book.totalPages);

    setIsTurning(true);
    window.setTimeout(() => {
      setCurrentPage(normalizedPage);
      setIsTurning(false);
    }, 150);
    playPageSound();
  }

  function handleNext() {
    if (currentPage < book.totalPages) {
      updatePage(currentPage + 1);
    }
  }

  function handlePrevious() {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
    }
  }

  const isCompleted = currentPage >= book.totalPages;

  return (
    <div
      className={[
        "reader-shell",
        darkMode ? "reader-shell--dark" : "reader-shell--light",
        visualFullscreen ? "reader-shell--fullscreen" : "",
      ].join(" ")}
    >
      <ReaderHeader
        book={book}
        bookmarked={bookmarked}
        darkMode={darkMode}
        favorite={favorite}
        onBookmark={() => setBookmarked((value) => !value)}
        onDarkMode={() => setDarkMode((value) => !value)}
        onFavorite={() => setFavorite((value) => !value)}
        onFullscreen={() => setVisualFullscreen((value) => !value)}
        onSound={() => setSoundEnabled((value) => !value)}
        soundEnabled={soundEnabled}
      />

      <div className="reader-shell__layout">
        <ReaderSidebar
          book={book}
          currentPage={currentPage}
          onChapterSelect={updatePage}
          onContinue={() => updatePage(currentPage)}
          progressPercent={progressPercent}
          savedProgress={savedProgress}
        />

        <main className="reader-shell__stage">
          <OpenBook
            bookmarked={bookmarked}
            currentPage={currentPage}
            isTurning={isTurning}
            pages={book.pages}
          />

          <ReaderControls
            currentPage={currentPage}
            onFullscreen={() => setVisualFullscreen((value) => !value)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            totalPages={book.totalPages}
          />

          <CompletionMessage visible={isCompleted} />
        </main>
      </div>

      <ReaderRecommendations items={recommendations} />
    </div>
  );
}
