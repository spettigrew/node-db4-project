
exports.up = async function(knex) {
    await knex.schema.createTable("shopping_list", (table) => {
        table.increments("id")
        table.integer("recipe_id")
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("ingredient_id")
            .notNullable()
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.float("quantity")
        table.string("uom")
            // table.primary(["recipe_id", "ingredient_id"]) //creates a primary key as columns
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("shopping_list")
};

// Do I need inTable("") for this join table? - Yes!