import { ArrowLeft, BookOpen, Calendar, Layers, LibraryBig } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { findWorkById } from "../../../data/demoData";
import "./Obra.css";

export default function Obra() {
  const { id } = useParams();
  const work = findWorkById(id);

  return (
    <main className="work-page">
      <Link className="work-page__back" to="/acervo">
        <ArrowLeft size={16} />
        Voltar ao acervo
      </Link>

      <section className="work-detail">
        <div className="work-detail__cover">
          <BookOpen size={48} />
          <span>{work.collection}</span>
        </div>

        <div className="work-detail__content">
          <span>{work.category}</span>
          <h1>{work.title}</h1>
          <p>{work.description}</p>

          <div className="work-detail__meta">
            <div>
              <LibraryBig size={18} />
              <strong>{work.author}</strong>
            </div>
            <div>
              <Calendar size={18} />
              <strong>{work.year}</strong>
            </div>
            <div>
              <Layers size={18} />
              <strong>{work.pages} páginas</strong>
            </div>
          </div>

          <Link className="button button--primary" to={`/leitor/${work.id}`}>
            Ler online
          </Link>
        </div>
      </section>
    </main>
  );
}
