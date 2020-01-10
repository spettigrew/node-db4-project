const db = require("../db-config")

module.exports = {
    find,
    findById,
    add,
    // update,
    remove
}

function find() {
    return db("ingredients")
}

function findById(id) {
    return db("ingredients")
        .where({ id })
        .first()
}

async function add(recipeName) {
    const [id] = await db("ingredients")
        .insert(recipeName)
    return db("ingredients")
        .where({ id })
        .first()
}

// function update(ingredients, id) {
//     return db("ingredients")
//         .where({ id })
//         .update(ingredients)
// }

function remove(id) {
    return db("ingredients")
        .where({ id })
        .del()
}
