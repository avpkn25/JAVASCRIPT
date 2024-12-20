let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let restart = document.querySelector(".restart");

let tweet = gsap.to(".box1", {
  y: -200,
  duration: 5,
  backgroundColor: "teal",
});

play.addEventListener("click", () => {
  tweet.play();
});
pause.addEventListener("click", () => {
  tweet.pause();
});
restart.addEventListener("click", () => {
  tweet.restart();
});
