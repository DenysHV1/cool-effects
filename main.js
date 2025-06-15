function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
  document.getElementById("theme-select").value = savedTheme;
});

document.getElementById("theme-select").addEventListener("change", (e) => {
  setTheme(e.target.value);
});
