// JOIN Table
exports.seed = async (knex) => {
  await knex('shopping_list').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""}
  ])
}