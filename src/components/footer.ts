import { brandMarkup } from "./brand";

export const footerMarkup = (): string => `
  <footer class="site-footer">${brandMarkup()}<p>© 2026 LDMtech. Feito para fazer melhor.</p><div class="footer-links"><a href="https://www.instagram.com/ldmtech_">Instagram</a><a href="">LinkedIn</a><a href="#contato">Contato</a></div></footer>`;
