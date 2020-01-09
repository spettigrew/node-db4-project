
exports.seed = async (knex) => {
  await knex("recipes").insert([
        { id: 1, name: "Easy Chocolate Fudge Cake" },
        { id: 2, name: "Chocolate Chip Tea Bread" },
        { id: 3, name: "Chocolate & Raspberry Souffles" },
        { id: 4, name: "Chocolate Puddle Cake" }
      ])
}
