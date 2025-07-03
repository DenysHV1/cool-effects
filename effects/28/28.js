const swiper = new Swiper(".swiper", {
  loop: true,
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const items = document.querySelectorAll(".swiper-slide_img");

items.forEach((item, idx) => {
  item.addEventListener("click", () => {
    items.forEach((item) => {

      item.classList.remove("active");
    });
    items[idx].classList.add("active");
    const realIndex = swiper.realIndex;
    const slidesPerView = swiper.params.slidesPerView;
    const firstVisible = realIndex;
    let lastVisible = realIndex + slidesPerView - 1;

    if (idx === firstVisible) {
      swiper.slidePrev();
    } else if (idx === lastVisible) {
      swiper.slideNext();
    }
    // ця частина коду повинна бути замінена коли добавлятимемо slide в swiper
    else if (lastVisible > slidesPerView) {
      lastVisible = realIndex - slidesPerView + 1;
      if (idx === lastVisible) {
        swiper.slideNext();
      }
    }
  });
});
