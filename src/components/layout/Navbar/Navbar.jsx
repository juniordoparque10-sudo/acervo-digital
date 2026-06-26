import { BookOpen, LogIn, Search } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        <div className="navbar__logo">
          <BookOpen size={24} />
        </div>

        <div>
          <strong>Acervo Digital</strong>
          <span>Park Solutions</span>
        </div>
      </Link>

      <nav className="navbar__links">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/acervo">Acervo</NavLink>
        <a href="/#recursos">Recursos</a>
        <a href="/#portal">Portal</a>
      </nav>

      <div className="navbar__actions">
        <button type="button" className="navbar__iconButton" aria-label="Pesquisar">
          <Search size={18} />
        </button>

        <button type="button" className="navbar__login">
          <LogIn size={18} />
          Entrar
        </button>
      </div>
    </header>
  );
}
