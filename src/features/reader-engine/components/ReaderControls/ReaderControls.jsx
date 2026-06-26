import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import "./ReaderControls.css";

export default function ReaderControls({
  currentPage,
  onFullscreen,
  onNext,
  onPrevious,
  totalPages,
}) {
  return (
    <div className="reader-controls">
      <button type="button" onClick={onPrevious} disabled={currentPage <= 1}>
        <ChevronLeft size={20} />
        Página anterior
      </button>

      <div className="reader-controls__indicator">
        <span>Página atual</span>
        <strong>
          {currentPage} / {totalPages}
        </strong>
      </div>

      <button type="button" onClick={onNext} disabled={currentPage >= totalPages}>
        Próxima página
        <ChevronRight size={20} />
      </button>

      <button type="button" className="reader-controls__icon" onClick={onFullscreen}>
        <Expand size={20} />
        Tela cheia
      </button>
    </div>
  );
}
