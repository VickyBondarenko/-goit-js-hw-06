const fontcontrol = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

fontcontrol.addEventListener("input", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
