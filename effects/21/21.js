const btn = document.querySelector(".btn-js");
const input = document.querySelector(".input-js");

btn.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
  btn.textContent = "Copied";
  btn.style.opacity = "0.5";
});
