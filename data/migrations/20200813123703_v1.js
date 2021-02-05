exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("id");
      tbl.real("quantity").notNullable().defaultTo(0);
      tbl.string("name", 255).notNullable().unique()
      tbl.string("unit")
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
