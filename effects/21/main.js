const card = document.querySelector(".card");
const img = document.querySelector(".card_box-image_item");
const MAX_ANGLE = 10;

const callback = (evt) => {
  const rect = evt.currentTarget.getBoundingClientRect();

  const x = evt.clientX - rect.left;
  const y = evt.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const offsetX = -(x - centerX) / centerX;
  const offsetY = (y - centerY) / centerY;
  const rotateY = offsetX * MAX_ANGLE;
  const rotateX = offsetY * MAX_ANGLE;
  evt.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  img.style.transform = `translate(${x * 0.1}px, ${
    y * 0.1
  }px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.3)`;
};

card.addEventListener("mouseleave", () => {
  card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  img.style.transform =
    "translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)";
});

card.addEventListener("mousemove", callback);
// скіки сука в'єбав часу на уїбанських помилках шо ну його нахуй, зато вийшло
