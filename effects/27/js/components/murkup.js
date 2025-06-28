const muckupSlider = (num1, num2, arr, time, fastOpasity) => {
  const wrapper = document.querySelector(".wrapper");
  const arra = [...arr].slice(num1 - 1, num2 - 1).map((item) => {
    return `
        <div class="card_wrapper">
          <div class="card">
            <div class="card_box-image">
              <img
                class="card_box-image_item"
                src="${item.img}"
                alt="${item.name}"
              />
            </div>
            <div class="card_bgLine">
              <p class="card_bgLine_time">1 тому</p>
              <p class="card_bgLine_week">~ неділя 23:00 - неділя 4:00</p>
            </div>
            <h3 class="card_title">${item.name}</h3>
            <footer class="card_footer">
              <time class="card_footer_time" datetime="2025">2025</time>
              <p class="card_footer_series">20 серія</p>
              <div class="card_footer_views">
                <p class="card_footer_views_number">2000</p>
                <img src="./views.svg" alt="views" />
              </div>
            </footer>
          </div>
        </div>
      `;
  });
  wrapper.innerHTML = arra.join("");
  const cards = document.querySelectorAll(".card");
  cards.forEach((item, idx) => {
    setTimeout(() => {
      item.style.transition = `opacity ${time}s ${
        fastOpasity * (idx + 1)
      }s linear`;
      item.classList.add("active");
    }, 300);
  });
};
export default muckupSlider;
