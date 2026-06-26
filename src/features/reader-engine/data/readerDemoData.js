export const readerBooks = {
  1: {
    id: "1",
    title: "História da Nossa Cidade",
    author: "João da Silva",
    category: "Memória Municipal",
    totalPages: 12,
    collection: "Biblioteca Histórica",
    chapters: [
      {
        id: "inicio",
        title: "O início de tudo",
        startPage: 1,
      },
      {
        id: "memoria",
        title: "Caminhos da memória",
        startPage: 5,
      },
      {
        id: "povo",
        title: "A cidade e seu povo",
        startPage: 9,
      },
    ],
    pages: [
      {
        page: 1,
        chapter: "O início de tudo",
        title: "Uma cidade nasce da lembrança",
        body:
          "Toda cidade guarda em suas ruas uma coleção de vozes. Antes dos prédios, das praças e dos arquivos oficiais, havia encontros, pequenas decisões e o desejo comum de permanecer. Este acervo reúne fragmentos dessa origem para que novas gerações reconheçam de onde vieram.",
      },
      {
        page: 2,
        chapter: "O início de tudo",
        title: "As primeiras atas",
        body:
          "Os registros mais antigos descrevem reuniões simples, feitas à luz de lampiões e cercadas por mapas desenhados à mão. Cada assinatura revelava a intenção de organizar a vida pública, preservar acordos e criar um futuro compartilhado.",
      },
      {
        page: 3,
        chapter: "O início de tudo",
        title: "A praça e o arquivo",
        body:
          "No centro da cidade, a praça tornou-se ponto de encontro, celebração e memória. Ao redor dela surgiram os primeiros arquivos, guardando documentos que hoje ajudam a compreender a formação institucional do município.",
      },
      {
        page: 4,
        chapter: "O início de tudo",
        title: "Mapas de um território",
        body:
          "Os mapas preservados indicam caminhos de terra, nascentes, pequenas propriedades e rotas comerciais. Mais que desenhos técnicos, eles são testemunhos de como a comunidade aprendeu a nomear e cuidar do próprio território.",
      },
      {
        page: 5,
        chapter: "Caminhos da memória",
        title: "Fotografias de família",
        body:
          "A memória municipal também se encontra em retratos domésticos. Famílias reunidas diante de fachadas antigas, escolas recém-inauguradas e festas populares revelam a dimensão afetiva da história pública.",
      },
      {
        page: 6,
        chapter: "Caminhos da memória",
        title: "Documentos que atravessam o tempo",
        body:
          "Ofícios, cartas, decretos e boletins formam uma rede de evidências. Quando organizados em um acervo digital, esses materiais deixam de ser peças isoladas e passam a dialogar com pesquisadores, estudantes e cidadãos.",
      },
      {
        page: 7,
        chapter: "Caminhos da memória",
        title: "A escola como guardiã",
        body:
          "Muitas lembranças foram preservadas por professores e alunos. Cadernos, jornais escolares e fotografias de turmas registram a presença da educação como um dos pilares da identidade local.",
      },
      {
        page: 8,
        chapter: "Caminhos da memória",
        title: "Coleções e pertencimento",
        body:
          "Ao reunir obras por temas, autores e períodos, a instituição cria caminhos de leitura. Cada coleção ajuda o visitante a encontrar relações entre acontecimentos, pessoas e documentos que antes pareciam distantes.",
      },
      {
        page: 9,
        chapter: "A cidade e seu povo",
        title: "Vozes do cotidiano",
        body:
          "A história institucional não vive apenas nos grandes eventos. Ela aparece no trabalho diário, nas feiras, nos grupos culturais e nas narrativas de moradores que ajudaram a construir a vida coletiva.",
      },
      {
        page: 10,
        chapter: "A cidade e seu povo",
        title: "Patrimônio vivo",
        body:
          "Preservar conhecimento é reconhecer que documentos continuam produzindo sentido. Um livro digital, quando bem apresentado, aproxima a comunidade de seu patrimônio e amplia o acesso sem comprometer a segurança da obra.",
      },
      {
        page: 11,
        chapter: "A cidade e seu povo",
        title: "Leitura para novas gerações",
        body:
          "Cada página consultada abre uma ponte entre passado e futuro. O leitor digital transforma arquivos institucionais em experiências de descoberta, incentivando estudo, curiosidade e pertencimento.",
      },
      {
        page: 12,
        chapter: "A cidade e seu povo",
        title: "Guardar para continuar",
        body:
          "Ao finalizar esta obra demonstrativa, permanece a ideia central do Acervo Digital: preservar o conhecimento com cuidado, criar portais personalizados e conectar gerações por meio da leitura online segura.",
      },
    ],
  },
};

export const readerRecommendations = [
  {
    id: "2",
    title: "Autores e Vozes da Cidade",
    category: "Memória Municipal",
    description: "Relatos, perfis e textos institucionais relacionados à história local.",
  },
  {
    id: "3",
    title: "Cadernos do Patrimônio",
    category: "Patrimônio",
    description: "Documentos técnicos e registros sobre preservação cultural.",
  },
  {
    id: "4",
    title: "Educação, Cultura e Comunidade",
    category: "Educação",
    description: "Publicação demonstrativa sobre memória, escola e comunidade.",
  },
];

export function getReaderBook(bookId) {
  return readerBooks[bookId] ?? readerBooks[1];
}

export function getRelatedBooks(category) {
  const sameCategory = readerRecommendations.filter((item) => item.category === category);
  const fallback = readerRecommendations.filter((item) => item.category !== category);
  return [...sameCategory, ...fallback].slice(0, 3);
}
