export const introMarkup = (): string => `
  <section class="intro-band" id="sobre">
    <div class="section-kicker"></div>
    <div class="intro-content">
      <h2>
        Tecnologia não precisa ser complicada.<br />
        <span>Ela precisa funcionar.</span>
      </h2>
      <p>
        Somos uma empresa de tecnologia e desenvolvimento digital que acredita em soluções feitas sob medida. Estratégia, design e código trabalhando juntos para tirar o seu negócio do lugar.
      </p>
    </div>
    <div class="intro-visual" aria-hidden="true">
      <div class="intro-orbit-wrap">
        <div class="intro-orbit"></div>
        <div class="intro-metric">
          <strong>Design -> Code -> Impact</strong>
        </div>
      </div>
    </div>
  </section>`;

export const servicesMarkup = (): string => `
  <section class="services section" id="solucoes">
    <div class="section-heading">
      <div>
        <p class="eyebrow">
          <span class="eyebrow-dot"></span>
          Como podemos ajudar
        </p>
        <h2>
          Soluções com<br />
          <em>intenção.</em>
        </h2>
      </div>
      <p class="section-note">
        Cada projeto começa com uma pergunta simples: como a tecnologia pode fazer melhor pelo seu negócio?
      </p>
    </div>

    <div class="service-list">
      <article class="service-item">
        <span class="service-number">01</span>
        <div>
          <h3>Sites & experiências digitais</h3>
          <p>Presença digital com propósito, clareza e personalidade para sua marca ser lembrada.</p>
        </div>
        <span class="service-arrow">↗</span>
      </article>
      <article class="service-item">
        <span class="service-number">02</span>
        <div>
          <h3>Sistemas sob medida</h3>
          <p>Ferramentas que se adaptam ao seu fluxo, reduzem atrito e fazem o trabalho render.</p>
        </div>
        <span class="service-arrow">↗</span>
      </article>
      <article class="service-item">
        <span class="service-number">03</span>
        <div>
          <h3>Automação & integração</h3>
          <p>Menos tarefa repetitiva. Mais tempo para o que realmente move o negócio.</p>
        </div>
        <span class="service-arrow">↗</span>
      </article>
    </div>
  </section>`;

export const projectsMarkup = (): string => `
  <section class="projects section" id="projetos">
    <div class="section-heading projects-heading">
      <div>
        <p class="eyebrow">
          <span class="eyebrow-dot"></span>
          Projetos selecionados
        </p>
        <h2>
          Ideias que<br />
          <em>ganharam forma.</em>
        </h2>
      </div>
      <a class="text-link" href="#contato">Comece seu projeto <span>↗</span></a>
    </div>

    <div class="project-grid">
      <article class="project-card project-large">
        <div class="project-image image-one">
          <a class="project-photo-link" href="https://www.adscorretora.com.br" target="_blank" rel="noreferrer" aria-label="Abrir projeto ADS Corretora">
            <img class="project-photo" src="/adscorretora.png" alt="Tela inicial do projeto ADS Corretora" />
          </a>
          <div class="image-ui">
            <span>PRODUTO DIGITAL</span>
            <small>↗ conhecer projeto</small>
          </div>
        </div>
        <div class="project-meta">
          <div>
            <h3>ADS Corretora</h3>
            <p>Site de corretagem</p>
          </div>
        </div>
      </article>

      <article class="project-card project-small">
        <div class="project-image image-two">
            <a class="project-photo-link" href="https://lavacar-aura.vercel.app" target="_blank" rel="noreferrer" aria-label="Abrir projeto Lava Car">
            </a>
          <div class="image-title">Lava Car</div>
          <span class="image-corner">LAVA CAR / 2025</span>
        </div>
        <div class="project-meta">
          <div>
            <h3>Lava Car</h3>
            <p>Experiência & agendamento</p>
          </div>
        </div>
      </article>

      <article class="project-card project-small">
        <div class="project-image image-three">
            <a class="project-photo-link" href="https://lambo-by-ferreira.vercel.app" target="_blank" rel="noreferrer" aria-label="Abrir projeto Lamborghini">
            </a>
          <div class="image-title">Lamborghini</div>
          <span class="image-corner">LAMBORGHINI / 2025</span>
        </div>
        <div class="project-meta">
          <div>
            <h3>Lamborghini</h3>
            <p>Experiência premium</p>
          </div>
        </div>
      </article>
    </div>
  </section>`;

export const statementMarkup = (): string => `
  <section class="statement">
    <div class="statement-grid" aria-hidden="true"></div>
    <div class="statement-orbit" aria-hidden="true"></div>
    <div class="statement-mark">“</div>
    <h2>
      O futuro não é sobre<br />
      <span>ter mais tecnologia.</span><br />
      É sobre fazer melhor.
    </h2>
    <p>LDMtech — tecnologia que trabalha a favor do seu negócio.</p>
  </section>`;
