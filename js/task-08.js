const form = document.querySelector(".login-form");
let formElements = {};
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  formElements.email = email;
  formElements.password = password;

  if (formElements.email && formElements.password) {
    console.log(formElements);
    form.reset();
  } else {
    alert("Enter the necessary data in the text forms");
  }
}
