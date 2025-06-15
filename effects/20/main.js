const main = document.querySelector(".navigation_item_main");
const items = document.querySelectorAll(".navigation_item");
const imgs = document.querySelectorAll(".navigation_item_img");
let Open = false;
main.addEventListener("click", ({ target }) => {
  Open = !Open;
  Open
    ? (main.style.transform = `rotate(360deg)`)
    : (main.style.transform = `rotate(-360deg)`);
  items.forEach((item, idx) => {
    const angle = item.dataset.angle;
    const img = imgs[idx];
    if (Open) {
      item.style.transform = `rotate(${angle}deg)  translateX(80px)`;
      img.style.transform = `rotate(-${angle}deg)`;
      img.style.opacity = 1;
    } else {
      item.style.transform = `rotate(0deg)  translateX(0px)`;
      img.style.transform = 0;
      img.style.opacity = 0;
    }
  });
});
