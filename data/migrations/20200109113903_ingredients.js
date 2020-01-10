
exports.up = async function(knex) {
    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.string("name").notNullable()
    })

    await knex.schema.createTable("shopping_list", (table) => {
        table.integer("ingredients_id")
            .notNullable()
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
};

exports.down = function(knex) {
    await knex.schema.dropTableIfExists("shopping_list")
    await knex.schema.dropTableIfExists("ingredients")
};
