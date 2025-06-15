const input = document.querySelector(".input-js");

document.body.style.backgroundColor = input.value;

input.addEventListener("input", (e) => {
  document.body.style.backgroundColor = e.target.value;
});
