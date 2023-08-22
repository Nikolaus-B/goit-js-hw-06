const inputEl = document.querySelector("#validation-input");
const INPUT_LENGTH = parseInt(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", onFocusChange);

function onFocusChange(event) {
  if (inputEl.value.length === INPUT_LENGTH) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
