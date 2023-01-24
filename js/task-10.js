function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

function createBoxes(event) {
  let arrea = [];
  if (input.value)
    for (let i = 1; i <= input.value; i++) {
      const div = document.createElement("div");
      div.style.width = `${30 + 10 * i}px`;
      div.style.height = `${30 + 10 * i}px`;
      div.style.backgroundColor = getRandomHexColor();
      console.log(div);
      arrea.push(div);
    }

  return boxes.append(...arrea);
}

buttonCreate.addEventListener("click", createBoxes);

function deleteDiv(event) {
  boxes.innerHTML = "";
  input.value = "";
}

buttonDestroy.addEventListener("click", deleteDiv);
