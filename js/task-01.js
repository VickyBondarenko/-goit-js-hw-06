const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((categorie) => {
  const categorieHeader = categorie.querySelector("h2").textContent;
  const categorieQuantity = categorie.querySelectorAll("li").length;

  console.log(`Category: ${categorieHeader}`);
  console.log(`Elements: ${categorieQuantity}`);
});
