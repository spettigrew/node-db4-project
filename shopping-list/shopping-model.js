const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    add,
    // update,
    remove
}

function find() {
    return db("shopping_list")
}

function findById(id) {
    return db("shopping_list")
        .where({ id })
        .first()
}

async function add(ingredient) {
    const [id] = await db("shopping_list")
        .insert(ingredient)
    return db("shopping_list")
        .where({ id })
        .first()
}

// function update(ingredients, id) {
//     return db("shopping_list")
//         .where({ id })
//         .update(ingredients)
// }

function remove(id) {
    return db("shopping_list")
        .where({ id })
        .del()
}
