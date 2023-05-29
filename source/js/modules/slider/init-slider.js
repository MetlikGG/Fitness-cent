const trainersSwiper = document.querySelector('.staff__swiper');
const reviewSwiper = document.querySelector('.swiper-reviews');

const initTrainersSlider = () => {
  if (trainersSwiper) {
    (() =>
      new Swiper('.staff__swiper', { // eslint-disable-line
        direction: 'horizontal',
        loop: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },

        navigation: {
          nextEl: '.slider-control__button--next',
          prevEl: '.slider-control__button--prev',
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      })
    )();
  }
  if (reviewSwiper) {
    (() =>
      new Swiper('.swiper-reviews', { // eslint-disable-line
        direction: 'horizontal',
        slidesPerView: 1,

        navigation: {
          nextEl: '.swiper-button-reviews-next',
          prevEl: '.swiper-button-reviews-prev',
        },
      })
    )();
  }
};

export {initTrainersSlider};
