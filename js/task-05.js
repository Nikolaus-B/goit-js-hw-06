const refs = {
  input: document.querySelector("#name-input"),
  text: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.text.textContent = event.currentTarget.value;
}
