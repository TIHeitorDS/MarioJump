const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const reloadBtn = document.querySelector(".button");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;

  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "nome";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "7.5rem";
    mario.style.marginLeft = "5rem";

    reloadBtn.style.opacity = "initial";
    reloadBtn.style.visibility = "initial";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);
window.addEventListener("load", (resetGame) => {
  reloadBtn.onclick = function () {
    location.reload(true);
  };
  return resetGame;
});
