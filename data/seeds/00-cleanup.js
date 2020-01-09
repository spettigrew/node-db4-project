
exports.seed = async function(knex) {
 await knex("recipes").truncate()
 await knex("ingredients").truncate()
 await knex("instructions").truncate()
 await knex("shopping_list").truncate()
};
