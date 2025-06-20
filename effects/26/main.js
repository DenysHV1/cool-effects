const card = document.querySelector(".card");
const img = document.querySelector(".card_box-image_item");
const MAX_ANGLE = 20;

//! mousemove
card.addEventListener("mousemove", (evt) => {
  const rect = evt.currentTarget.getBoundingClientRect();

  const x = evt.clientX - rect.left; //Вычисляет горизонтальную позицию курсора мыши относительно левого края элемента card
  const y = evt.clientY - rect.top; //Вычисляет вертикальную позицию курсора мыши относительно верхнего края элемента card

  const centerX = rect.width / 2; //Вычисляет горизонтальную координату центра элемента card
  const centerY = rect.height / 2; //Вычисляет вертикальную координату центра элемента card
  const offsetX = -(x - centerX) / centerX; //Вычисляет нормализованное смещение мыши по горизонтали относительно центра элемента
  const offsetY = (y - centerY) / centerY; //Вычисляет нормализованное смещение мыши по вертикали относительно центра элемента.
  const rotateY = offsetX * MAX_ANGLE; //Вычисляет угол поворота элемента вокруг оси Y на основе смещения мыши.
  const rotateX = offsetY * MAX_ANGLE; //Вычисляет угол поворота элемента вокруг оси X на основе смещения мыши.

  evt.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

  img.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.3)`;
});

//! mouseleave
card.addEventListener("mouseleave", () => {
  card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  img.style.transform =
    "translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)";
});



