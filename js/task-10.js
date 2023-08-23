function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    refs.boxes.append(box);
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

refs.btnCreate.addEventListener("click", () => {
  createBoxes(Number(refs.input.value));
});

refs.btnDestroy.addEventListener("click", destroyBoxes);
