const textInput = document.querySelector("#validation-input");

const currentLength = textInput.dataset.length;

textInput.addEventListener("blur", (event) => {
  const dataLength = textInput.value.length;

  if (dataLength != currentLength) {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  } else {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  }
});
