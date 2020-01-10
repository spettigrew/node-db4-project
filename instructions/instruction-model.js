const db = require("../db-config")

module.exports = {
    find,
    findById,
    add,
    // update,
    remove
}

function find() {
    return db("instructions")
}

function findById(id) {
    return db("instructions")
        .where({ id })
        .first()
}

async function add(recipeName) {
    const [id] = await db("instructions")
        .insert(recipeName)
    return db("instructions")
        .where({ id })
        .first()
}

// function update(ingredients, id) {
//     return db("instructions")
//         .where({ id })
//         .update(ingredients)
// }

function remove(id) {
    return db("instructions")
        .where({ id })
        .del()
}
