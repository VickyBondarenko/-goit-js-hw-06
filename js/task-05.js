const nameIntput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameIntput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value;
  if (!event.currentTarget.value || event.currentTarget.value === " ") {
    nameOutput.textContent = `Anonymous`;
  }
});
