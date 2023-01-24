const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  const currentLength = textInput.dataset.length;
  const dataLength = textInput.value.length;
  console.log(currentLength);
  console.log(dataLength);
  if (dataLength != currentLength) {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  } else {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  }
});
