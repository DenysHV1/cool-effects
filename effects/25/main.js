const mainObj = {
  dino: document.querySelector(".dino"),
  cactus: document.querySelector(".cactus"),
  gameOverTitle: document.querySelector(".gameOver"),
  gameOver: false,
  jump: false,
  startGame: false,
};
window.addEventListener("keydown", (evt) => {
  if (mainObj.jump) return;
  mainObj.gameOverTitle.style.display = "none";
  mainObj.startGame = true;
  mainObj.cactus.classList.add("move");
  if (evt.code === "Space") {
    mainObj.jump = true;
    void mainObj.dino.offsetWidth;
    mainObj.dino.classList.add("move");
    setTimeout(() => {
      mainObj.jump = false;
      mainObj.dino.classList.remove("move");
    }, 800);
  }
});

setInterval(() => {
  const positionCactus = mainObj.cactus.getBoundingClientRect();
  const positionDino = mainObj.dino.getBoundingClientRect();
  console.log();
  // console.log(positionDino.right <= positionCactus.right + 150);
  if (
    positionDino.x + positionDino.width >= positionCactus.x &&
    positionDino.x <= positionCactus.x &&
    !mainObj.jump
  ) {
    mainObj.gameOver = true;
    mainObj.cactus.classList.remove("move");
    mainObj.gameOverTitle.style.display = "block";
  }
}, 200);
