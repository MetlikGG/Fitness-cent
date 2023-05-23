const trainersSwiper = document.querySelector('.staff__swiper');

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
          1199: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      })
    )();
  }
};

export {initTrainersSlider};
