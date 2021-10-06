import "./styles.css";

const span = document.querySelector("span");
const input = document.querySelector("input");
console.log(input);

input.addEventListener("click", () => {
  span.classList.toggle("up");
});
