
exports.up = async function(knex) {
    await knex.schema.createTable("instructions", (table) => {
        table.increments("id")
        table.string("name").notNullable()
        table.integer("steps").notNullable()
        // table.string("step_number").notNullable()
        
        // OR
        table.string("one").notNullable()
        table.string("two").notNullable()
        table.string("three").notNullable()
        table.string("four").notNullable()
        table.string("instructions")
        table.integer("recipe_id").notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("instructions")
};
