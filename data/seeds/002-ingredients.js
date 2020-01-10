
exports.seed = async (knex) => {
  await knex("ingredients").insert([
    { id: 1, name: "Semisweet Chocolate" },
    { id: 2, name: "Eggs" },
    { id: 3, name: "Salted Butter" },
    { id: 4, name: "Light Cream" },
    { id: 5, name: "Unsweetened Cocoa Powder" },
    { id: 6, name: "Milk Chocolate" },
    { id: 7, name: "Raspberries" },
    { id: 8, name: "Unsalted Butter" },
    { id: 9, name: "Fine White Sugar" },
    { id: 10, name: "All-Purpose Flour" },
    { id: 11, name: "Baking Powder" },
    { id: 12, name: "Light Brown Sugar" },
    { id: 13, name: "Powdered Sugar" },
    { id: 14, name: "Boiling Water" }
  ])
}