import { ArrowLeft, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-card">
        <SearchX size={42} />
        <span>404</span>
        <h1>Página não encontrada</h1>
        <p>O endereço acessado não existe no portal público do Acervo Digital.</p>
        <Link className="button button--primary" to="/">
          <ArrowLeft size={18} />
          Voltar ao início
        </Link>
      </section>
    </main>
  );
}
