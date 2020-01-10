// JOIN Table
exports.seed = async (knex) => {
  await knex('shopping_list').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 14, uom: "ounces"},
    { recipe_id: 1, ingredient_id: 3, quantity: 1_3/4, uom: "sticks"},
    { recipe_id: 1, ingredient_id: 2, quantity: 4, uom: ""},
    { recipe_id: 1, ingredient_id: 4, quantity: 2/3, uom: "cup"},
    { recipe_id: 1, ingredient_id: 9, quantity: 2/3, uom: "cup"},
    { recipe_id: 1, ingredient_id: 10, quantity: 1_3/4, uom: "cups"},
    { recipe_id: 1, ingredient_id: 7, quantity: 1_3/4, uom: "teaspoons"},
    { recipe_id: 2, ingredient_id: 3, quantity: 1, uom: "stick"},
    { recipe_id: 2, ingredient_id: 2, quantity: 2, uom: ""},
    { recipe_id: 2, ingredient_id: 5, quantity: 1/3, uom: "cup"},
    { recipe_id: 2, ingredient_id: 6, quantity: 15, uom: "ounces"},
    { recipe_id: 2, ingredient_id: 8, quantity: 4, uom: "tablespoons"},
    { recipe_id: 2, ingredient_id: 12, quantity: 2/3, uom: "cup"},
    { recipe_id: 2, ingredient_id: 10, quantity: 1, uom: "cup"},
    { recipe_id: 2, ingredient_id: 7, quantity: 1, uom: "teaspoon"},
    { recipe_id: 1, ingredient_id: 11, quantity: 2/3, uom: "cup"}
    // { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    // { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    // { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    // { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""},
    // { recipe_id: 1, ingredient_id: 1, quantity: 1, uom: ""}
  ])
}