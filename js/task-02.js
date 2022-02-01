const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = [];

const createIngredient = parts => {
  parts.forEach(ingredient => {
    const ingredientRef = document.createElement("li");
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add("item");
    elements.push(ingredientRef);
  });
}

createIngredient(ingredients);

document.querySelector("#ingredients").append(...elements);
