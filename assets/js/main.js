const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$$(".btn").forEach((btn) => {
  btn.addEventListener("click", playSound.bind(btn));
});

document.addEventListener("keydown", function (e) {
  const key = document.querySelector(`.key-${e.key}`);
  key && key.click();
});

function playSound() {
  const sound = this.querySelector("audio");
  const clone = sound.cloneNode();
  clone.play();

  setTimeout(() => {
    clone.volume = 0.8;
  }, 400);
  setTimeout(() => {
    clone.volume = 0.6;
  }, 600);
  setTimeout(() => {
    clone.volume = 0.4;
  }, 800);
  setTimeout(() => {
    clone.volume = 0.2;
  }, 1000);
  setTimeout(() => {
    clone.volume = 0;
  }, 1200);
}
