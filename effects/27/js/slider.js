import muckupSlider from "./components/murkup.js";
import cards from "./cards.js";

const slider = (arr) => {
  const wrapper = document.querySelector(".wrapper");
  const pagination = document.querySelector(".pagination");
  const left = document.querySelector(".btn_arrow_left");
  const right = document.querySelector(".btn_arrow_right");

  const offset = 4;
  let num1 = 1;
  let num2 = offset + 1;
  let page = 1;

  const render = (direction) => {
    const transitionOut = direction === "left" ? "-100vw" : "100vw";
    const transitionIn = direction === "left" ? "100vw" : "-100vw";

    wrapper.style.transition = "transform .4s linear, opacity .2s linear";
    wrapper.style.transform = `translateX(${transitionOut})`;
    wrapper.style.opacity = 0;
    pagination.innerHTML = page;
    setTimeout(() => {
      wrapper.innerHTML = muckupSlider(num1, num2, arr).join("");
      cards();
      wrapper.style.transition = "none";
      wrapper.style.transform = `translateX(${transitionIn})`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          wrapper.style.transition = "transform .4s linear, opacity .2s linear";
          wrapper.style.transform = "translateX(0)";
          wrapper.style.opacity = 1;
        });
      });
    }, 400);
  };

  wrapper.innerHTML = muckupSlider(num1, num2, arr).join("");

  left.addEventListener("click", () => {
    if (num1 === 1) return;

    num1 -= offset;
    num2 -= offset;

    if (num1 < 1) {
      num1 = 1;
      num2 = offset + 1;
    }
    if (page > 1) {
      page -= 1;
    }
    render("left");
  });

  right.addEventListener("click", () => {
    if (num2 - 1 >= arr.length) return;

    num1 += offset;
    num2 += offset;

    if (num1 >= arr.length) return;

    if (num2 - 1 > arr.length) {
      const remainder = arr.length % offset;
      num2 = arr.length + 1;
      num1 =
        remainder === 0 ? arr.length - offset + 1 : arr.length - remainder + 1;
    }
    page += 1;
    render("right");
  });
};

export default slider;
