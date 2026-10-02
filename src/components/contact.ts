export const contactMarkup = (): string => `
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
  </section>`;
