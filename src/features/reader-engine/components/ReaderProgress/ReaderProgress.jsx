import "./ReaderProgress.css";

export default function ReaderProgress({ currentPage, progressPercent, totalPages }) {
  return (
    <div className="reader-progress">
      <div className="reader-progress__label">
        <span>Progresso da leitura</span>
        <strong>{progressPercent}%</strong>
      </div>
      <div className="reader-progress__track" aria-hidden="true">
        <span style={{ width: `${progressPercent}%` }} />
      </div>
      <small>
        Página {currentPage} de {totalPages}
      </small>
    </div>
  );
}
