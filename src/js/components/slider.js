import Swiper, { Mousewheel, Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination, Mousewheel ]);
const swiper = new Swiper('.slider', {
  pagination: {
    el: ".slider__pag",
    type: "fraction",
  },
  slidesPerView: 'auto',
  mousewheel: true,
  speed: 600,
  navigation: {
    nextEl: '.js-scroll',
  }
});
