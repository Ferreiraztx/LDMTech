import "../styles.css";
import { contactMarkup } from "./components/contact";
import { footerMarkup } from "./components/footer";
import { headerMarkup } from "./components/header";
import { heroMarkup } from "./components/hero";
import {
  introMarkup,
  projectsMarkup,
  servicesMarkup,
  statementMarkup,
} from "./components/sections";
import { setupNavigation } from "./features/navigation";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Elemento raiz não encontrado.");
}

app.innerHTML = `
  <div class="page-shell">
    ${headerMarkup()}
    <main>
      ${heroMarkup()}
      ${introMarkup()}
      ${projectsMarkup()}
      ${servicesMarkup()}
      ${statementMarkup()}
      ${contactMarkup()}
    </main>
    ${footerMarkup()}
  </div>`;

setupNavigation();
