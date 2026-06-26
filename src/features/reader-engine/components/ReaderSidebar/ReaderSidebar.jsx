import { Clock3, LibraryBig, ListTree } from "lucide-react";
import ReaderProgress from "../ReaderProgress/ReaderProgress";
import "./ReaderSidebar.css";

export default function ReaderSidebar({
  book,
  currentPage,
  onChapterSelect,
  onContinue,
  progressPercent,
  savedProgress,
}) {
  return (
    <aside className="reader-sidebar">
      <section className="reader-sidebar__panel">
        <div className="reader-sidebar__title">
          <Clock3 size={18} />
          <span>Continuar leitura</span>
        </div>
        <strong>Página {currentPage}</strong>
        <p>
          {savedProgress
            ? "Seu progresso anterior foi recuperado neste dispositivo."
            : "Comece a leitura e o Acervo Digital salvará seu avanço automaticamente."}
        </p>
        <button type="button" onClick={onContinue}>
          Continuar leitura
        </button>
      </section>

      <section className="reader-sidebar__panel">
        <div className="reader-sidebar__title">
          <ListTree size={18} />
          <span>Navegação de capítulos</span>
        </div>
        <div className="reader-sidebar__chapters">
          {book.chapters.map((chapter) => (
            <button
              type="button"
              onClick={() => onChapterSelect(chapter.startPage)}
              key={chapter.id}
            >
              <span>{chapter.title}</span>
              <small>Página {chapter.startPage}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="reader-sidebar__panel">
        <div className="reader-sidebar__title">
          <LibraryBig size={18} />
          <span>Detalhes da obra</span>
        </div>
        <dl className="reader-sidebar__meta">
          <div>
            <dt>Autor</dt>
            <dd>{book.author}</dd>
          </div>
          <div>
            <dt>Categoria</dt>
            <dd>{book.category}</dd>
          </div>
          <div>
            <dt>Total</dt>
            <dd>{book.totalPages} páginas</dd>
          </div>
        </dl>
        <ReaderProgress
          currentPage={currentPage}
          progressPercent={progressPercent}
          totalPages={book.totalPages}
        />
      </section>
    </aside>
  );
}
