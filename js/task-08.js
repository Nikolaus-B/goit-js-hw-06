const form = document.querySelector(".login-form");
let FormElements = {};
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  FormElements.email = email;
  FormElements.password = password;

  if (FormElements.email && FormElements.password) {
    console.log(FormElements);
    form.reset();
  } else {
    alert("Enter the necessary data in the text forms");
  }
}
