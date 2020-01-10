
exports.up = async function(knex) {
    await knex.schema.createTable("shopping_list", (table) => {
        table.integer("recipe_id")
            .notNullable()
            .references("id")
            .inTable("recipes")
        table.increments("id")
        table.integer("ingredient_id").notNullable()
        table.float("quantity")
        table.string("uom")
            .notNullable()
            .references("id")
            .inTable("ingredients")
        // table.primary(["recipe_id", "ingredient_id"]) //creates a primary key as columns
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("shopping_list")
};

// Do I need inTable("") for this join table?