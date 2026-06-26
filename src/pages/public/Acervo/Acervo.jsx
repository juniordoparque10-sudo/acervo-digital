import { ArrowRight, BookMarked, Search } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/ui/SectionHeader/SectionHeader";
import { demoWorks } from "../../../data/demoData";
import "./Acervo.css";

export default function Acervo() {
  return (
    <main className="catalog-page">
      <section className="catalog-hero">
        <SectionHeader
          eyebrow="Acervo público"
          title="Obras disponíveis para leitura online"
          description="Listagem demonstrativa com livros, documentos, autores, categorias e coleções que poderão pertencer ao portal de cada cliente."
        />

        <div className="catalog-search" aria-label="Pesquisa demonstrativa">
          <Search size={20} />
          <input readOnly placeholder="Pesquisar por título, autor ou coleção" />
        </div>
      </section>

      <section className="catalog-grid" aria-label="Lista de obras demonstrativas">
        {demoWorks.map((work) => (
          <article className="catalog-card" key={work.id}>
            <div className="catalog-card__cover">
              <BookMarked size={32} />
              <span>{work.year}</span>
            </div>
            <div className="catalog-card__content">
              <span>{work.category}</span>
              <h2>{work.title}</h2>
              <p>{work.author}</p>
              <div className="catalog-card__meta">
                <strong>{work.collection}</strong>
                <small>{work.pages} páginas</small>
              </div>
              <Link to={`/obra/${work.id}`}>
                Ver obra
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
