const counterValue = document.querySelector("#value");
let value = 0;
counterValue.textContent = value;

const decButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');

decButton.addEventListener("click", (event) => {
  value -= 1;

  return (counterValue.textContent = value);
});
incrButton.addEventListener("click", (event) => {
  value += 1;

  return (counterValue.textContent = value);
});
