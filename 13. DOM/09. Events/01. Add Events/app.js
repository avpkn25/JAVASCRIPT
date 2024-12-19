// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  alert("Bad");
};

// ----------- GREAT WAY-----------
const best = document.querySelector(".best");
best.addEventListener("click", () => alert("Best"));

// ----------- Event (e) Object -----------
const para = document.querySelector(".para");
para.addEventListener("click", (event) => console.log(event));

const form = document.querySelector("form");
const input = document.querySelector("input")
form.addEventListener("submit", (e) => {
  e.preventDefault(); // to prevent the auto reload page
  console.log(input.value);
});
