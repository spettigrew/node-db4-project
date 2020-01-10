
exports.up = async function(knex) {
    await knex.schema.createTable("instructions", (table) => {
        table.increments("id")
        table.string("name").notNullable()
        table.integer("step").notNullable()
        table.string("number").notNullable()
        // OR
        // table.string("one").notNullable()
        //table.string("two").notNullable()
        //table.string("three").notNullable()
        //table.string("four").notNullable()
    })

    await knex.schema.createTable("shopping_list", (table) => {
        table.integer("instructions_id")
            .notNullable()
            .references("id")
            .inTable("instructions")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
};

exports.down = function(knex) {
    await knex.schema.dropTableIfExists("shopping_list")
    await knex.schema.dropTableIfExists("instructions")
};
