// function playVideoFrame() {
//   const playBtnNode = document.querySelector('.js-play-btn');
//   const frameVideoNode = document.querySelector('.js-video-frame');

//   playBtnNode.addEventListener('click', function () {
//     if (frameVideoNode.classList.contains('ready')) {
//       return;
//     } else {
//       frameVideoNode.classList.add('ready');
//     }

//     const src = frameVideoNode.dataset.src;

//     frameVideoNode.insertAdjacentHTML('afterbegin', `<iframe src=${src} frameborder="0" allowfullscreen></iframe>`)
//   });
// }

// playVideoFrame();
