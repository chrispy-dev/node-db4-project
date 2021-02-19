const db = require('../../data/db-config');

const getRecipes = () => {
    return db('recipes');
};

const getShoppingList = (recipe_id) => {
    return db('recipes as r')
        .where('recipe_id', recipe_id)
        .then(recipe => {
            r = recipe[0];
            return db('recipes_ingredients as ri')
                .join('ingredients as i', 'ri.ingredient_id', 'i.ingredient_id')
                .where('ri.recipe_id', recipe_id)
                .select('i.ingredient_id as id', 'i.ingredient_name as ingredient')
                .then(ingredients => {
                    return {
                        id: recipe_id,
                        name: r.recipe_name,
                        ingredients: ingredients
                    }
                });
        });
};

module.exports = {
    getRecipes,
    getShoppingList
}