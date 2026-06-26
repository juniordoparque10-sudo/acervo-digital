import {
  ArrowLeft,
  Bookmark,
  BookOpenText,
  Expand,
  Heart,
  Moon,
  Search,
  Sun,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./ReaderHeader.css";

export default function ReaderHeader({
  book,
  bookmarked,
  darkMode,
  favorite,
  onBookmark,
  onDarkMode,
  onFavorite,
  onFullscreen,
  onSound,
  soundEnabled,
}) {
  return (
    <header className="reader-header">
      <div className="reader-header__identity">
        <Link className="reader-header__back" to="/acervo">
          <ArrowLeft size={18} />
          Voltar ao acervo
        </Link>
        <div>
          <span>{book.collection}</span>
          <h1>{book.title}</h1>
        </div>
      </div>

      <div className="reader-header__actions" aria-label="Controles do leitor">
        <button type="button" title="Sumário">
          <BookOpenText size={18} />
          <span>Sumário</span>
        </button>
        <button type="button" title="Pesquisar">
          <Search size={18} />
          <span>Pesquisar</span>
        </button>
        <button
          type="button"
          className={favorite ? "is-active" : ""}
          onClick={onFavorite}
          title="Favoritar"
        >
          <Heart size={18} />
          <span>Favoritar</span>
        </button>
        <button
          type="button"
          className={bookmarked ? "is-active" : ""}
          onClick={onBookmark}
          title="Marcar página"
        >
          <Bookmark size={18} />
          <span>Marcar</span>
        </button>
        <button type="button" onClick={onSound} title="Som de página">
          {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          <span>Som</span>
        </button>
        <button type="button" onClick={onDarkMode} title="Modo claro/escuro">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          <span>{darkMode ? "Claro" : "Escuro"}</span>
        </button>
        <button type="button" onClick={onFullscreen} title="Tela cheia visual">
          <Expand size={18} />
          <span>Tela cheia</span>
        </button>
      </div>
    </header>
  );
}
