function bindModal(trigger, modal, close) {
  const btns = document.querySelectorAll(trigger);
  modal = document.querySelector(modal),
    close = document.querySelector(close)
  const body = document.body;
  const modalVideoNode = document.querySelector('.js-modal-video');
  let src = modalVideoNode.dataset.src;

  [...btns].forEach((btn) => {
    btn.addEventListener('click', e => {
      e.preventDefault()
      modal.style.display = 'flex'
      body.classList.add('locked')
      modalVideoNode.insertAdjacentHTML('afterbegin', `<iframe class="modal__iframe" src=${src} frameborder="0" allowfullscreen></iframe>`)
    })
  })
  close.addEventListener('click', () => {
    modal.style.display = 'none'
    body.classList.remove('locked')
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none'
      body.classList.remove('locked')
    }
  })
}

bindModal('.modal__btn', '.modal__wrapper', '.modal__close');
