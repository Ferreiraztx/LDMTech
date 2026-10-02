import { brandMarkup } from "./brand";

export const headerMarkup = (): string => `
  <header class="site-header">
    ${brandMarkup()}
    <nav class="desktop-nav" aria-label="Navegação principal">
      <a href="#solucoes">Soluções</a>
      <a href="#projetos">Projetos</a>
      <a href="#sobre">A LDMtech</a>
    </nav>
    <a class="header-cta" href="#contato">Vamos conversar <span>↗</span></a>
    <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">
      <span></span><span></span>
    </button>
  </header>`;
