const btn = document.querySelector(".btn-js");
const input = document.querySelector(".input-js");
let value = "";

btn.addEventListener("click", () => {
  navigator.clipboard.writeText(value);
  btn.textContent = "Copied";
  btn.style.opacity = "0.5";
});

input.addEventListener("input", (e) => {
  value = e.target.value;
});
