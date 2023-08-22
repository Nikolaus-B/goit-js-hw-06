const form = document.querySelector(".login-form");
let elements = {};
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  elements.email = email;
  elements.password = password;

  if (elements.email && elements.password) {
    console.log(elements);
    form.reset();
  } else {
    alert("Enter the necessary data in the text forms");
  }
}
