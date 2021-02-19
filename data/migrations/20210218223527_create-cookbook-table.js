exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments("recipe_id");
            tbl.string('recipe_name', 128)
                .notNullable()
                .unique();
        })
        .createTable('ingredients', tbl => {
            tbl.increments("ingredient_id");
            tbl.string('ingredient_name', 128)
                .notNullable()
                .unique();
        })
        .createTable('recipes_ingredients', tbl => {
            tbl.increments("recipes_ingredients_id");
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete("CASCADE");
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete("CASCADE");
        })
        .createTable('instructions', tbl => {
            tbl.increments('instruction_id');
            tbl.text('instruction_name', 128)
                .notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete("CASCADE");
        })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
