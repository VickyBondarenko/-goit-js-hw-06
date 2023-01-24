const nameIntput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameIntput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (nameOutput.textContent = `Anonymous`);
  }
  nameOutput.textContent = event.currentTarget.value;
});
