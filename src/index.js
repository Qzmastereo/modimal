import Swiper from "../node_modules/swiper/swiper-bundle.min.mjs";
const swiper = new Swiper('.mySwiper', {

  slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
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
document.addEventListener('DOMContentLoaded', function() {
    const openNewBtn = document.querySelector('.open-new');
    const newMenu = document.querySelector('.new-in-menu');
    const blurBackground = document.createElement('div');

    blurBackground.classList.add('blur-background');
    document.body.appendChild(blurBackground); 

    openNewBtn.addEventListener('click', function(event) {
        event.preventDefault();
        newMenu.classList.toggle('visible');
        blurBackground.classList.toggle('active');
    });


    window.addEventListener('click', function(event) {
        if (!newMenu.contains(event.target) && !event.target.classList.contains('open-new')) {
            newMenu.classList.remove('visible');
            blurBackground.classList.remove('active');
        }
    });


  
});
document.addEventListener('DOMContentLoaded', function() {
    const openSustBtn = document.querySelector('.open-sust');
    const sustMenu = document.querySelector('.sust-menu');
    const blurBackground = document.createElement('div');

    blurBackground.classList.add('blur-background');
    document.body.appendChild(blurBackground); 

    openSustBtn.addEventListener('click', function(event) {
        event.preventDefault();
        sustMenu.classList.toggle('visible');
        blurBackground.classList.toggle('active');
    });


    window.addEventListener('click', function(event) {
        if (!sustMenu.contains(event.target) && !event.target.classList.contains('open-sust')) {
            sustMenu.classList.remove('visible');
            blurBackground.classList.remove('active');
        }
    });


  
});


