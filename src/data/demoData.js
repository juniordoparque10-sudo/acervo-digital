import {
  BarChart3,
  BookLock,
  BookmarkCheck,
  Building2,
  LibraryBig,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const demoInstitution = {
  name: "Acervo Digital",
  slogan: "Preservando o conhecimento. Conectando gerações.",
  developer: "Park Solutions",
};

export const featureItems = [
  {
    title: "Multiempresa",
    description: "Clientes operam portais independentes, com acervos, cores e identidade própria.",
    icon: Building2,
  },
  {
    title: "Portal personalizado",
    description: "Cada instituição apresenta livros, documentos, autores e coleções em uma vitrine exclusiva.",
    icon: LibraryBig,
  },
  {
    title: "Leitura sem download",
    description: "Obras demonstrativas são acessadas pelo fluxo de leitura online, sem botões de baixar ou imprimir.",
    icon: BookLock,
  },
  {
    title: "Marcador automático",
    description: "Base preparada para salvar a página onde o visitante parou e oferecer continuar leitura.",
    icon: BookmarkCheck,
  },
  {
    title: "Recomendações inteligentes",
    description: "Estrutura pensada para sugerir obras relacionadas conforme histórico e categorias lidas.",
    icon: Sparkles,
  },
  {
    title: "Estatísticas de acesso",
    description: "Fundação para relatórios, métricas de leitura e indicadores institucionais no painel futuro.",
    icon: BarChart3,
  },
  {
    title: "Segurança",
    description: "Experiência pública limpa, com leitura controlada e evolução futura para autenticação e Firebase.",
    icon: ShieldCheck,
  },
];

export const demoWorks = [
  {
    id: "1",
    title: "Memória Institucional de Aurora",
    author: "Arquivo Histórico Municipal",
    category: "Memória pública",
    collection: "Coleção Especial",
    year: "1988",
    pages: 184,
    description:
      "Registro demonstrativo de documentos, atas, fotografias e relatos que preservam a trajetória de uma instituição pública.",
  },
  {
    id: "2",
    title: "Autores e Vozes da Cidade",
    author: "Curadoria Cultural",
    category: "Literatura local",
    collection: "Autores Locais",
    year: "2006",
    pages: 132,
    description:
      "Seleção fictícia de textos literários, perfis de autores e notas de contexto para portais de bibliotecas e escolas.",
  },
  {
    id: "3",
    title: "Cadernos do Patrimônio",
    author: "Equipe de Pesquisa",
    category: "Patrimônio",
    collection: "Documentos Técnicos",
    year: "2019",
    pages: 96,
    description:
      "Material demonstrativo para consulta online de relatórios, estudos e publicações institucionais organizadas por coleção.",
  },
  {
    id: "4",
    title: "Educação, Cultura e Comunidade",
    author: "Instituto Demo",
    category: "Educação",
    collection: "Biblioteca Digital",
    year: "2024",
    pages: 210,
    description:
      "Obra exemplo voltada a portais educacionais que combinam leitura segura, categorização e identidade visual do cliente.",
  },
];

export function findWorkById(id) {
  return demoWorks.find((work) => work.id === id) ?? demoWorks[0];
}
