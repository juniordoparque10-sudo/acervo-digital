# Acervo Digital

Plataforma SaaS multiempresa desenvolvida pela Park Solutions para criação de portais institucionais de acervos digitais.

Slogan: **Preservando o conhecimento. Conectando gerações.**

## Stack

- React + Vite
- React Router
- Lucide React
- Framer Motion instalado para evolução de animações
- Firebase instalado para evolução futura
- React PageFlip e React PDF/PDF.js instalados para evolução do leitor digital real
- CSS comum modularizado por componente, página e estilos globais

## Como instalar

```bash
npm install
```

## Como rodar

```bash
npm run dev
```

A aplicação abre em `http://localhost:5173/`.

No Windows, caso o PowerShell bloqueie `npm.ps1`, use:

```bash
npm.cmd run dev
```

## Build

```bash
npm run build
```

Ou, no Windows:

```bash
npm.cmd run build
```

## Estrutura

```text
src/
  app/                    Configuração da aplicação e rotas
  components/             Componentes compartilhados de layout, UI e leitor legado
  data/                   Dados demonstrativos do portal público
  features/
    reader-engine/        Protótipo modular do Reading Engine
      components/         Shell, header, sidebar, livro, controles, progresso e recomendações
      data/               Livro e recomendações demonstrativas
      hooks/              Hook de progresso de leitura
      utils/              Persistência em localStorage
  layouts/                Layout público
  pages/public/           Páginas públicas do portal
  styles/                 Variáveis, base global e utilitários
  main.jsx                Entrada do React
  App.jsx                 Encaminha para src/app/App.jsx
```

## Objetivo da v0.2.0

A versão `v0.2.0` implementa o primeiro protótipo funcional do **Reading Engine**, diferencial comercial do Acervo Digital. O leitor abre em `/leitor/:id` com experiência imersiva, livro aberto responsivo, navegação entre páginas, progresso salvo em `localStorage`, marcador visual, modo claro/escuro, botão de som preparado, tela cheia visual, recomendações e mensagem de conclusão.

Nesta fase, o conteúdo ainda é demonstrativo. Firebase, PDF real, download e impressão não foram implementados.

## Rotas

- `/`
- `/acervo`
- `/obra/1`
- `/leitor/1`
- Rotas inexistentes exibem a página 404.
