import { ArrowRight, BookMarked, BookOpen, Search } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/ui/SectionHeader/SectionHeader";
import StatCard from "../../../components/ui/StatCard/StatCard";
import { demoWorks, featureItems } from "../../../data/demoData";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero" id="inicio">
        <div className="home-hero__content">
          <span className="home-hero__badge">Plataforma SaaS multiempresa</span>
          <h1>Acervos digitais modernos para instituições.</h1>
          <p>
            Preserve livros, documentos, autores, coleções e memórias institucionais em
            um portal personalizado, com leitura online segura e sem download das obras.
          </p>

          <div className="home-hero__search" aria-label="Campo visual de pesquisa">
            <Search size={20} />
            <input readOnly value="" placeholder="Pesquisar obras, autores, coleções..." />
            <Link to="/acervo">
              Pesquisar
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="home-hero__actions">
            <Link className="button button--primary" to="/acervo">
              Explorar demonstração
            </Link>
            <a className="button button--secondary" href="#recursos">
              Conhecer recursos
            </a>
          </div>

          <div className="home-hero__stats">
            <StatCard value="SaaS" label="multiempresa" />
            <StatCard value="100%" label="leitura online" />
            <StatCard value="0" label="downloads" />
          </div>
        </div>

        <div className="home-hero__visual" aria-label="Mockup de livro aberto">
          <div className="book-mockup">
            <article className="book-mockup__page">
              <BookOpen size={24} />
              <span>Acervo Digital</span>
              <h2>Preservando o conhecimento.</h2>
              <p>Portal público com identidade institucional, coleções e leitura segura.</p>
            </article>
            <article className="book-mockup__page book-mockup__page--right">
              <span>Página 24</span>
              <h3>Continuar leitura</h3>
              <p>Base preparada para marcador automático, som e recomendações.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section" id="recursos">
        <SectionHeader
          eyebrow="Recursos"
          title="Uma base premium para portais institucionais"
          description="A Sprint 1 apresenta a camada pública inicial e prepara o caminho para painel administrativo, autenticação, Firebase, relatórios e PWA."
          align="center"
        />

        <div className="feature-grid">
          {featureItems.slice(0, 6).map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.title}>
                <div className="feature-card__icon">
                  <Icon size={26} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="home-section" id="obras">
        <SectionHeader
          eyebrow="Obras em destaque"
          title="Vitrine demonstrativa do portal público"
          description="Cards simulam como livros, documentos e coleções serão apresentados no portal de cada cliente."
        />

        <div className="work-grid">
          {demoWorks.slice(0, 3).map((work) => (
            <article className="work-card" key={work.id}>
              <div className="work-card__cover">
                <BookMarked size={34} />
                <span>{work.collection}</span>
              </div>
              <div className="work-card__body">
                <span>{work.category}</span>
                <h3>{work.title}</h3>
                <p>{work.author}</p>
                <Link to={`/obra/${work.id}`}>
                  Ver detalhes
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tenant-section" id="portal">
        <div>
          <SectionHeader
            eyebrow="Portais por cliente"
            title="Cada instituição terá seu próprio portal"
            description="A arquitetura foi iniciada pensando em múltiplas empresas: nome, logo, cores, categorias, autores, coleções e obras poderão variar por cliente."
          />
          <Link className="button button--primary" to="/acervo">
            Abrir acervo demo
          </Link>
        </div>

        <div className="tenant-panel">
          <span>Portal personalizado</span>
          <strong>Biblioteca Municipal Demo</strong>
          <p>Cores institucionais, acervo próprio, leitura online e futuras estatísticas.</p>
          <div>
            <span>Livros</span>
            <span>Autores</span>
            <span>Coleções</span>
          </div>
        </div>
      </section>
    </main>
  );
}
