import Swiper from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const initPlanSlider = () => {
  const sliderElement = document.querySelector(".plan-cards-slider");
  if (!sliderElement) return;

  let swiperInstance = null;

  const handleResize = () => {
    const isMobileOrTablet = window.innerWidth <= 769;

    if (isMobileOrTablet) {
  
      if (!swiperInstance) {
        swiperInstance = new Swiper(sliderElement, {
          modules: [Pagination],
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 32,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    } else {

      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    }
  };
  window.addEventListener("resize", handleResize);
  handleResize();
};

document.addEventListener("DOMContentLoaded", initPlanSlider);
