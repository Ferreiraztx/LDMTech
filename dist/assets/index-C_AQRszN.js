(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const l=()=>`
  <section class="contact section" id="contato">
    <div class="contact-copy">
      <p class="eyebrow">
        <span class="eyebrow-dot"></span>
        Vamos criar juntos
      </p>
      <h2>
        Tem um desafio?<br />
        <em>Fale com a gente.</em>
      </h2>
      <p>Conte um pouco sobre o que você está construindo. A primeira conversa é por nossa conta.</p>
      <a class="contact-mail" href="mailto:ola@ldmtech.com.br">
        ola@ldmtech.com.br <span>↗</span>
      </a>
    </div>

    <form class="contact-form">
      <label>
        Seu nome
        <input name="name" type="text" placeholder="Como podemos te chamar?" required />
      </label>
      <label>
        Seu e-mail
        <input name="email" type="email" placeholder="contato@ldmtech.com.br" required />
      </label>
      <label>
        Sobre o projeto
        <textarea name="message" rows="3" placeholder="Conte brevemente o que você tem em mente..."></textarea>
      </label>
      <button class="button button-primary" type="submit">
        Enviar mensagem <span>↗</span>
      </button>
      <p class="form-feedback" role="status"></p>
    </form>
  </section>`,n=(e="LDMtech")=>`
  <a class="brand" href="#inicio" aria-label="${e} início">
    <span class="brand-mark"><span>L</span><span>D</span><span>M</span></span>
    <span class="brand-tech">tech</span>
  </a>`,p=()=>`
  <footer class="site-footer">${n()}<p>© 2026 LDMtech. Feito para fazer melhor.</p><div class="footer-links"><a href="https://www.instagram.com/ldmtech_">Instagram</a><a href="">LinkedIn</a><a href="#contato">Contato</a></div></footer>`,d=()=>`
  <header class="site-header">
    ${n()}
    <nav class="desktop-nav" aria-label="Navegação principal">
      <a href="#solucoes">Soluções</a>
      <a href="#projetos">Projetos</a>
      <a href="#sobre">A LDMtech</a>
    </nav>
    <a class="header-cta" href="#contato">Vamos conversar <span>↗</span></a>
    <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">
      <span></span><span></span>
    </button>
  </header>`,m=()=>`
  <section class="hero" id="inicio">
    <div class="hero-copy reveal">
      <p class="eyebrow">
        <span class="eyebrow-dot"></span>
        Tecnologia para o próximo passo
      </p>
      <h1>
        Seu negócio.<br />
        <em>Mais inteligente.</em>
      </h1>
      <p class="hero-text">
        Criamos soluções digitais que simplificam operações, conectam pessoas e transformam boas ideias em resultados reais.
      </p>
      <div class="hero-actions">
        <a class="button button-primary" href="#projetos">
          Conheça nosso trabalho <span>↗</span>
        </a>
        <a class="text-link" href="#solucoes">
          O que fazemos <span>↓</span>
        </a>
      </div>
    </div>

    <div class="hero-visual reveal delay-1">
      <div class="orbit orbit-one"></div>
      <div class="orbit orbit-two"></div>
      <div class="visual-grid"></div>

      <div class="visual-panel panel-main">
        <div class="panel-top">
          <span class="mono-label">LDM / SYSTEMS</span>
          <span class="status"><i></i> online</span>
        </div>
        <div class="data-bars">
          <span style="height: 42%"></span>
          <span style="height: 68%"></span>
          <span style="height: 54%"></span>
          <span style="height: 86%"></span>
          <span style="height: 72%"></span>
          <span style="height: 96%"></span>
          <span style="height: 80%"></span>
          <span style="height: 100%"></span>
        </div>
        <div class="panel-bottom">
          <strong>+48.6%</strong>
          <span>eficiência operacional</span>
        </div>
      </div>

      <div class="visual-panel panel-float">
        <span class="float-icon">✦</span>
        <div>
          <small>projeto em foco</small>
          <strong>Experiência<br />que conecta.</strong>
        </div>
      </div>

      <div class="hero-stamp">LDM<span>+</span></div>
    </div>

  </section>`,v=()=>`
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
  </section>`,u=()=>`
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
  </section>`,h=()=>`
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
          <a class="project-photo-link" href="https://pahragon-teal.vercel.app" target="_blank" rel="noreferrer" aria-label="Abrir projeto Pahragon">
            <img class="project-photo" src="/Pahragon.jpg" alt="Tela inicial do projeto Pahragon" />
          </a>
          <div class="image-ui">
            <span>PRODUTO DIGITAL</span>
            <small>↗ conhecer projeto</small>
          </div>
        </div>
        <div class="project-meta">
          <div>
            <h3>Pahragon</h3>
            <p>Site institucional & reservas</p>
          </div>
        </div>
      </article>

      <article class="project-card project-small">
        <div class="project-image image-two">
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
  </section>`,b=()=>`
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
  </section>`,g=()=>{const e=document.querySelector(".contact-form");e==null||e.addEventListener("submit",s=>{s.preventDefault();const t=e.querySelector(".form-feedback");t&&(t.textContent="Mensagem pronta para decolar. Em breve a gente responde."),e.reset()})},f=()=>{const e=document.querySelector(".menu-toggle"),s=document.querySelector(".desktop-nav");e==null||e.addEventListener("click",()=>{const t=(s==null?void 0:s.classList.toggle("open"))??!1;e.setAttribute("aria-expanded",String(t))}),document.querySelectorAll(".desktop-nav a").forEach(t=>{t.addEventListener("click",()=>{s==null||s.classList.remove("open"),e==null||e.setAttribute("aria-expanded","false")})})},c=document.querySelector("#app");if(!c)throw new Error("Elemento raiz não encontrado.");c.innerHTML=`
  <div class="page-shell">
    ${d()}
    <main>
      ${m()}
      ${v()}
      ${h()}
      ${u()}
      ${b()}
      ${l()}
    </main>
    ${p()}
  </div>`;f();g();
