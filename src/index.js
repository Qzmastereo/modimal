import Swiper from "../node_modules/swiper/swiper-bundle.min.mjs";
const swiper = new Swiper('.mySwiper', {

  slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});