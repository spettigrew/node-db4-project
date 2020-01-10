const express = require("express")
const db = require("../data/db-config/")

const shoppingList = require("./shopping-model")

const router = express.Router()

router.get("/api/shoppingList", async (req, res, next) => {
    try {
        res.json(await db("shoppingList"))
    }
    catch (err) {
        next(err)
    }
})

router.post("/api/shoppingList", async (req, res, next) => {
    try {
        const [id] = await db("shoppingList")
            .insert(req.body)

        const recipe = await db("shoppingList")
            .where({ id })
            .first()

        return res.status(201).json(recipe)
    }
    catch (err) {
        next(err)
    }
})

router.del("/api/shoppingList/:id", async (req, res, next) => {
    try {
        const id = await db("shoppingList")
            .where({ id: req.params.id })
            .del()
    }
    catch (err) {
        next(err)
    }
})