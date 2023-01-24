const textInput = document.querySelector("#validation-input");

console.log(textInput);
console.log(textInput.id);
console.log(textInput.type);
console.log(textInput.data - length);
console.log(textInput.placeholder);

textInput.addEventListener("blur", (event) => {
  if (textInput.value.length !== 6) {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  } else {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  }
});
