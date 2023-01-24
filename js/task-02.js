const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsHTML = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// console.log(ingredientsHTML);
const ingredientsHTML = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");

  return item;
});
const ingredientsList = document.querySelector("#ingredients");

ingredientsList.append(...ingredientsHTML);
