const side = document.querySelector(".sidebar")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    side.classList.toggle("hide")
})