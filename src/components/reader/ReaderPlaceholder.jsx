import { BookOpen, Headphones, RotateCw, Volume2 } from "lucide-react";
import "./ReaderPlaceholder.css";

export default function ReaderPlaceholder({ title }) {
  return (
    <section className="reader-placeholder" aria-label="Prévia do leitor digital">
      <div className="reader-placeholder__toolbar">
        <span>Prévia do leitor</span>
        <div>
          <button type="button" aria-label="Virar página">
            <RotateCw size={16} />
          </button>
          <button type="button" aria-label="Som de página">
            <Volume2 size={16} />
          </button>
          <button type="button" aria-label="Narração futura">
            <Headphones size={16} />
          </button>
        </div>
      </div>

      <div className="reader-placeholder__book">
        <article className="reader-placeholder__page">
          <BookOpen size={28} />
          <span>Leitor Digital em desenvolvimento</span>
          <h2>{title}</h2>
          <p>
            Em breve: efeito de virar página, som, marcação automática e recomendações.
          </p>
        </article>
        <article className="reader-placeholder__page reader-placeholder__page--right">
          <span>Continuar leitura</span>
          <h3>Página salva automaticamente</h3>
          <p>
            Este espaço já reserva a experiência de livro aberto que será conectada ao
            acervo e ao histórico do visitante.
          </p>
        </article>
      </div>
    </section>
  );
}
