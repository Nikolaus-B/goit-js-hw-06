const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const elements = [];

for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredients[i];
  elements.push(li);
}

list.append(...elements);
