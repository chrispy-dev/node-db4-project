
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { recipes_ingredients_id: 1, recipe_id: 1, ingredient_id: 1},
        { recipes_ingredients_id: 2, recipe_id: 1, ingredient_id: 2},
        { recipes_ingredients_id: 3, recipe_id: 2, ingredient_id: 1},
        { recipes_ingredients_id: 4, recipe_id: 2, ingredient_id: 2},
      ]);
    });
};
