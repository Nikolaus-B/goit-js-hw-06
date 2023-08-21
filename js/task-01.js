const navEl = document.querySelector("#categories");
console.log(`Number of categories: ${navEl.children.length}`);

[...navEl.children].forEach((item) => {
  // console.log(item.firstElementChild);
  // console.log(item.lastElementChild);
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
