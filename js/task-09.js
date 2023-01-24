// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const changeButton = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
colorValue.textContent = `#fafafa`;
changeButton.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
});
