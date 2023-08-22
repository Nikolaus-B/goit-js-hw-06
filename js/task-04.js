const refs = {
  btnAdd: document.querySelector('[data-action = "increment"]'),
  btnRemove: document.querySelector('[data-action = "decrement"]'),
  spanEl: document.querySelector("#value"),
};
let counterValue = 0;
refs.btnAdd.addEventListener("click", () => {
  counterValue++;
  refs.spanEl.textContent = counterValue;
});

refs.btnRemove.addEventListener("click", () => {
  counterValue--;
  refs.spanEl.textContent = counterValue;
});
