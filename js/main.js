const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  // адаптивные настройки
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // >= 1024px
    1020: {
      slidesPerView: 4,
      spaceBetween: 23,
    },
  },
});
