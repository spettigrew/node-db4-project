
exports.up = async function(knex) {
    await knex.schema.createTable("shopping_list", (table) => {
        table.increments("id")
        table.integer("ingredient_id").notNullable()
        table.float("quantity")
        table.string("uom")
        .notNullable()
        .references("id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })
};

exports.down = function(knex) {
    await knex.schema.dropTableIfExists("shopping_list")
};

// Do I need inTable("") for this join table?