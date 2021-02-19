exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_id: 1, recipe_name: "Grilled Cheese"},
        { recipe_id: 2, recipe_name: "Mozzerella Sticks"},
        { recipe_id: 3, recipe_name: "Cheese and Crackers"}
      ]);
    });
};
