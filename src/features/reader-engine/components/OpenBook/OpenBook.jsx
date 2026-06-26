import { Bookmark } from "lucide-react";
import "./OpenBook.css";

function BookPage({ page, side }) {
  if (!page) {
    return (
      <article className={`open-book__page open-book__page--${side} open-book__page--blank`}>
        <span>Fim</span>
      </article>
    );
  }

  return (
    <article className={`open-book__page open-book__page--${side}`}>
      <div className="open-book__chapter">{page.chapter}</div>
      <h2>{page.title}</h2>
      <p>{page.body}</p>
      <footer>Página {page.page}</footer>
    </article>
  );
}

export default function OpenBook({ bookmarked, currentPage, isTurning, pages }) {
  const leftPage = pages[currentPage - 1];
  const rightPage = pages[currentPage] ?? null;

  return (
    <section
      className={`open-book ${isTurning ? "is-turning" : ""}`}
      aria-label="Livro aberto"
    >
      {bookmarked ? (
        <div className="open-book__bookmark" aria-label="Página marcada">
          <Bookmark size={16} />
        </div>
      ) : null}

      <div className="open-book__surface">
        <BookPage page={leftPage} side="left" />
        <BookPage page={rightPage} side="right" />
      </div>
    </section>
  );
}
