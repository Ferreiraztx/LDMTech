export const setupContactForm = (): void => {
  const form = document.querySelector<HTMLFormElement>(".contact-form");

  form?.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    const feedback = form.querySelector<HTMLElement>(".form-feedback");
    if (feedback) {
      feedback.textContent =
        "Mensagem pronta para decolar. Em breve a gente responde.";
    }

    form.reset();
  });
};
