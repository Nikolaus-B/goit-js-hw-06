const refs = {
  input: document.querySelector("#name-input"),
  text: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value) {
    refs.text.textContent = event.currentTarget.value;
  } else {
    refs.text.textContent = "Anonymous";
  }
}
