function bindModal(trigger, modal, close) {
  const btns = document.querySelectorAll(trigger);
  const modalElement = document.querySelector(modal);
  const closeElement = document.querySelector(close);
  const body = document.body;
  const modalVideoNode = document.querySelector(".js-modal-video");
  let src = modalVideoNode.dataset.src;
  let iframe = null;

  [...btns].forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modalElement.style.display = "flex";
      body.classList.add("locked");

      iframe = document.createElement("iframe");
      iframe.className = "modal__iframe";
      iframe.src = src;
      iframe.style.border = "none";
      iframe.allowFullscreen = true;
      modalVideoNode.appendChild(iframe);
    });
  });

  function closeModal() {
    modalElement.style.display = "none";
    body.classList.remove("locked");
    if (iframe) {
      iframe.remove();
      iframe = null;
    }
  }

  closeElement.addEventListener("click", closeModal);
  modalElement.addEventListener("click", (e) => {
    if (e.target === modalElement) {
      closeModal();
    }
  });
}

bindModal(".modal__btn", ".modal__wrapper", ".modal__close");
