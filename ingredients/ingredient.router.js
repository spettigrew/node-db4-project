const express = require("express")
const db = require("../data/db-config/")

const ingredients = require("./ingredient-model")

const router = express.Router()

router.get("/api/ingredients", async (req, res, next) => {
    try {
        res.json(await db("ingredients"))
    }
    catch (err) {
        next(err)
    }
})

router.post("/api/ingredients", async (req, res, next) => {
    try {
        const [id] = await db("ingredients")
            .insert(req.body)

        const recipe = await db("ingredients")
            .where({ id })
            .first()

        return res.status(201).json(recipe)
    }
    catch (err) {
        next(err)
    }
})

router.del("/api/ingredients/:id", async (req, res, next) => {
    try {
        const id = await db("ingredients")
            .where({ id: req.params.id })
            .del()
    }
    catch (err) {
        next(err)
    }
})