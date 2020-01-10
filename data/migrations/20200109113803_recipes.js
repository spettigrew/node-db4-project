
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
      table.increments("id")
      table.string("name").notNullable()
  })

  await knex.schema.createTable("shopping_list", (table) => {
      table.integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = function(knex) {     
  await knex.schema.dropTableIfExists("shopping_list")
  await knex.schema.dropTableIfExists("recipes")
};


// float — table.float(column, [precision], [scale])