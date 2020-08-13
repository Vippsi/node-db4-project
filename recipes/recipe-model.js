const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
return db("ingredients as i")
    .select("i.name", 'i.quantity')
    .where({recipe_id})
    .join('recipe_ingredients as ri', "ri.ingredient_id", "i.id")
    .join('recipes as r', "r.id", "ri.recipe_id")
}

function getInstructions(recipe_id) {
return db("steps as s")
    .select("r.name", "s.name", "r.id")
    .where({recipe_id})
    .join('recipes as r',"r.id", 's.recipe_id')
}
