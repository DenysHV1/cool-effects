const cards = () => {
  const cards = document.querySelectorAll(".card");
  const imgs = document.querySelectorAll(".card_box-image_item");
  const MAX_ANGLE = 4;
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

      evt.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

      imgs[idx].style.transform = `translate(${x * 0.1}px, ${
        y * 0.1
      }px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.3)`;
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
