import Swiper from '../../vendor/swiper';

const sliderStaffList = document.querySelector('.swiper');

export const initStaffSlider = () => {
  if (sliderStaffList) {
    (() =>
      new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        navigation: {
          nextEl: '.swiper-button-staff--next',
          prevEl: '.swiper-button-staff--prev',
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
