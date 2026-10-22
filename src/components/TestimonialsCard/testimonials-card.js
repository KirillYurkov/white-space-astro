import Swiper from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const initTestimonialsSlider = () => {
  const sliderElement = document.querySelector(".testimonials-cards");
  if (!sliderElement) return;

  new Swiper(sliderElement, {
    modules: [Pagination],

    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: 32,
        enabled: true,
        centeredSlides: false,
      },
      577: {
        initialSlide: 1,
        slidesPerView: 2,
        spaceBetween: 32,
        enabled: true,
        centeredSlides: true,
      },
      576: {
        initialSlide: 0,
        slidesPerView: 1,
        enabled: true,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

initTestimonialsSlider();
document.addEventListener("astro:page-load", initTestimonialsSlider);
