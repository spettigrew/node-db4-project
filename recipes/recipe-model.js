const db = require("../db-config")

module.exports = {
    find,
    findById,
    add,
    // update,
    remove
}

function find() {
    return db("recipes")
}

function findById(id) {
    return db("recipes")
    .where({ id })
    .first()
}

async function add(recipeName) {
    const [id] = await db("recipes")
    .insert(recipeName)
    return db("recipes")
    .where({ id })
    .first()
}

// function update(ingredients, id) {
//     return db("recipes")
//     .where({ id })
//     .update(ingredients)
// }

function remove(id) {
    return db("recipes")
    .where({ id })
    .del()
}

