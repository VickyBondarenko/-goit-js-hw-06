// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsHTML = ingredients
//   .map((ingredient) => `<li>${ingredient}</li>`)
//   .join("");
// console.log(ingredientsHTML);
const ingredientsHTML = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  console.log(item);
  return item;
});
const ingredientsList = document.querySelector("#ingredients");

ingredientsList.append(...ingredientsHTML);
