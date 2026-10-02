export const setupNavigation = (): void => {
  const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
  const nav = document.querySelector<HTMLElement>(".desktop-nav");

  menuToggle?.addEventListener("click", () => {
    const isOpen = nav?.classList.toggle("open") ?? false;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document
    .querySelectorAll<HTMLAnchorElement>(".desktop-nav a")
    .forEach((link) => {
      link.addEventListener("click", () => {
        nav?.classList.remove("open");
        menuToggle?.setAttribute("aria-expanded", "false");
      });
    });
};
