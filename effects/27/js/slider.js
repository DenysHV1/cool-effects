import muckupSlider from "./components/murkup.js";
import cards from "./cards.js";
import paginationFn from "./pagination.js";
const slider = (
  arr,
  offset,
  time,
  fastOpasity,
  SCALE,
  SCALEimg,
  timeCard,
  MAX_ANGLE,
  translateIMG
) => {
  // ======================
  const wrapper = document.querySelector(".wrapper");

  const left = document.querySelector(".btn_arrow_left");
  const right = document.querySelector(".btn_arrow_right");
  // ======================
  let num1 = 1;
  let num2 = offset + 1;
  let page = 1;
  // ======================
  const render = (direction) => {
    paginationFn(direction, page, null);

    const transitionOut = direction === "left" ? "-100vw" : "100vw";
    const transitionIn = direction === "left" ? "100vw" : "-100vw";

    wrapper.style.transition = `transform ${time}s linear, opacity ${time}s linear`;
    wrapper.style.transform = `translateX(${transitionOut})`;
    wrapper.style.opacity = 0;
    setTimeout(() => {
      muckupSlider(num1, num2, arr, time, fastOpasity);

      cards(SCALE, SCALEimg, timeCard, MAX_ANGLE, translateIMG);
      wrapper.style.transition = "none";
      wrapper.style.transform = `translateX(${transitionIn})`;
      wrapper.style.opacity = 1;
      // двойні для того щоб завершити минулі фрейми, а точніше innerHTML та анімацію transition, transform, хз поки я працює до кінця
      // або можна через setTimeout
      // setTimeout(() => {
      //   wrapper.style.transition = "transform .4s linear, opacity .2s linear";
      //   wrapper.style.transform = "translateX(0)";
      //   wrapper.style.opacity = 1;
      // }, 100);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          wrapper.style.transition = `transform ${time}s linear, opacity ${time}s linear`;
          wrapper.style.transform = "translateX(0)";
        });
      });
    }, 400);
  };
  // ======================
  muckupSlider(num1, num2, arr, time, fastOpasity);
  // ======================
  left.addEventListener("click", () => {
    if (num1 <= 1) {
      num1 = 1;
      num2 = offset + 1;
      return;
    }
    num1 -= offset;
    num2 -= offset;

    if (page > 1) {
      page -= 1;
    }
    render("left");
  });
  // ======================
  right.addEventListener("click", () => {
    if (num2 >= arr.length) return;
    num1 += offset;
    num2 += offset;

    page += 1;
    render("right");
  });
};
// ======================
export default slider;
