const container = document.querySelector(".boxes");

const createBoxes = () => {
  return Array.from({ length: 200 }, (_, i) => i + 1)
    .map((_) => `<span class="box"></span>`)
    .join("");
};
container.insertAdjacentHTML("afterbegin", createBoxes());

const boxesAll = document.querySelectorAll(".box");
[...boxesAll].forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.classList.add("active");
  });

  el.addEventListener("mouseleave", () => {
    setTimeout(() => {
      el.classList.remove("active");
    }, 300);
  });
});
