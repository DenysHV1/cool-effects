const cards = (SCALE, SCALEimg, timeCard, MAX_ANGLE, translateIMG) => {
  const cards = document.querySelectorAll(".card");
  const imgs = document.querySelectorAll(".card_box-image_item");
  cards.forEach((item, idx) => {
    //! mousemove
    item.addEventListener("mousemove", (evt) => {
      const rect = evt.currentTarget.getBoundingClientRect();

      const x = evt.clientX - rect.left;
      const y = evt.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const offsetX = -(x - centerX) / centerX;
      const offsetY = (y - centerY) / centerY;
      const rotateY = offsetX * MAX_ANGLE;
      const rotateX = offsetY * MAX_ANGLE;

      evt.currentTarget.style.transition = `transform ${timeCard}s cubic-bezier(0.475, 0.885, 0.32, 1.275)`;
      evt.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${SCALE})`;

      imgs[idx].style.transform = `translate(${x * translateIMG}px, ${
        y * translateIMG
      }px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${SCALEimg})`;
    });

    //! mouseleave
    item.addEventListener("mouseleave", () => {
      item.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      imgs[idx].style.transform =
        "translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });
};
export default cards;
