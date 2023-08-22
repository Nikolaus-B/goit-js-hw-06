const refs = {
  inputEl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.inputEl.addEventListener("input", onInputFocus);

function onInputFocus(event) {
  refs.text.style.fontSize = `${refs.inputEl.value}px`;
}
