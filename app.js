const recipes = [
  { id: 1, title: "Pasta", time: 20, difficulty: "easy", description: "Simple pasta", category: "food" },
  { id: 2, title: "Pizza", time: 60, difficulty: "medium", description: "Cheesy pizza", category: "food" },
  { id: 3, title: "Burger", time: 30, difficulty: "easy", description: "Juicy burger", category: "food" },
  { id: 4, title: "Salad", time: 10, difficulty: "easy", description: "Healthy salad", category: "food" },
  { id: 5, title: "Cake", time: 90, difficulty: "hard", description: "Sweet cake", category: "food" },
  { id: 6, title: "Soup", time: 25, difficulty: "easy", description: "Hot soup", category: "food" },
  { id: 7, title: "Noodles", time: 35, difficulty: "medium", description: "Tasty noodles", category: "food" },
  { id: 8, title: "Steak", time: 120, difficulty: "hard", description: "Grilled steak", category: "food" }
];

const recipeContainer = document.querySelector('#recipe-container');

const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card">
      <h3>${recipe.title}</h3>
      <p>${recipe.time} min</p>
      <p class="difficulty ${recipe.difficulty}">${recipe.difficulty}</p>
      <p>${recipe.description}</p>
    </div>
  `;
};

const renderRecipes = (recipesToRender) => {
  const html = recipesToRender.map(createRecipeCard).join('');
  recipeContainer.innerHTML = html;
};

renderRecipes(recipes);