import { ArrowRight, BookMarked } from "lucide-react";
import { Link } from "react-router-dom";
import "./ReaderRecommendations.css";

export default function ReaderRecommendations({ items }) {
  return (
    <section className="reader-recommendations" aria-label="Recomendações">
      <div className="reader-recommendations__title">
        <span>Recomendações</span>
        <strong>Obras relacionadas</strong>
      </div>

      <div className="reader-recommendations__list">
        {items.map((item) => (
          <Link className="reader-recommendations__item" to={`/obra/${item.id}`} key={item.id}>
            <BookMarked size={18} />
            <div>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
            <ArrowRight size={16} />
          </Link>
        ))}
      </div>
    </section>
  );
}
