function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonChange = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
buttonChange.addEventListener("click", handlerOptions);
function handlerOptions() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor

}