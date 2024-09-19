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

document.addEventListener('DOMContentLoaded', function() {
    const openCollectionBtn = document.querySelector('.open-collection');
    const collectionMenu = document.querySelector('.collection-menu');
    const blurBackground = document.createElement('div');

    blurBackground.classList.add('blur-background');
    document.body.appendChild(blurBackground); 

    openCollectionBtn.addEventListener('click', function(event) {
        event.preventDefault();
        collectionMenu.classList.toggle('visible');
        blurBackground.classList.toggle('active');
    });


    window.addEventListener('click', function(event) {
        if (!collectionMenu.contains(event.target) && !event.target.classList.contains('open-collection')) {
            collectionMenu.classList.remove('visible');
            blurBackground.classList.remove('active');
        }
    });


  
});
document.addEventListener('DOMContentLoaded', function() {
    const openPlusBtn = document.querySelector('.open-plus');
    const plusMenu = document.querySelector('.plus-menu');
    const blurBackground = document.createElement('div');

    blurBackground.classList.add('blur-background');
    document.body.appendChild(blurBackground); 

    openPlusBtn.addEventListener('click', function(event) {
        event.preventDefault();
        plusMenu.classList.toggle('visible');
        blurBackground.classList.toggle('active');
    });


    window.addEventListener('click', function(event) {
        if (!plusMenu.contains(event.target) && !event.target.classList.contains('open-plus')) {
            plusMenu.classList.remove('visible');
            blurBackground.classList.remove('active');
        }
    });


  
});

