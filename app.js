// Sample recipes data
const recipes = [
  { title: "Spaghetti", difficulty: "easy", time: 25 },
  { title: "Beef Stew", difficulty: "hard", time: 120 },
  { title: "Salad", difficulty: "easy", time: 10 },
  { title: "Chicken Curry", difficulty: "medium", time: 60 },
  { title: "Pancakes", difficulty: "easy", time: 20 },
  { title: "Lasagna", difficulty: "medium", time: 90 },
  { title: "Ratatouille", difficulty: "hard", time: 80 },
  { title: "Omelette", difficulty: "easy", time: 15 }
];

// State
let currentFilter = 'all';
let currentSort = 'none';

// DOM references
const recipeContainer = document.getElementById('recipe-container');
const filterButtons = document.querySelectorAll('#filter-buttons button');
const sortButtons = document.querySelectorAll('#sort-buttons button');

// Render recipes
function renderRecipes(recipesToRender) {
  recipeContainer.innerHTML = '';
  recipesToRender.forEach(recipe => {
    const card = document.createElement('div');
    card.classList.add('recipe-card');
    card.innerHTML = `
      <h3>${recipe.title}</h3>
      <p>Difficulty: ${recipe.difficulty}</p>
      <p>Time: ${recipe.time} mins</p>
    `;
    recipeContainer.appendChild(card);
  });
}

// Pure filter function
function applyFilter(recipes, filter) {
  switch(filter) {
    case 'easy': return recipes.filter(r => r.difficulty === 'easy');
    case 'medium': return recipes.filter(r => r.difficulty === 'medium');
    case 'hard': return recipes.filter(r => r.difficulty === 'hard');
    case 'quick': return recipes.filter(r => r.time <= 30);
    case 'all':
    default: return [...recipes];
  }
}

// Pure sort function
function applySort(recipes, sort) {
  switch(sort) {
    case 'name': return [...recipes].sort((a,b) => a.title.localeCompare(b.title));
    case 'time': return [...recipes].sort((a,b) => a.time - b.time);
    case 'none':
    default: return [...recipes];
  }
}

// Update active button states
function updateActiveButtons() {
  filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === currentFilter));
  sortButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.sort === currentSort));
}

// Main update function
function updateDisplay() {
  let result = applyFilter(recipes, currentFilter);
  result = applySort(result, currentSort);
  renderRecipes(result);
  updateActiveButtons();
}

// Event listeners
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;
    updateDisplay();
  });
});

sortButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentSort = btn.dataset.sort;
    updateDisplay();
  });
});

// Initial render
updateDisplay();