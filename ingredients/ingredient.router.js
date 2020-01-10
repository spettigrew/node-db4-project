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

router.get("/api/ingredients/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const ingredient = await db("ingredients")
            .where({ id })
            .first()

        if (ingredient) {
            return res.json(ingredient)
        } else {
            return res.status(404).json({ message: "Could not find ingredient with this Id." })
        }
    }
    catch (err) {
        next(err)
    }
})

router.post("/api/ingredients", async (req, res, next) => {
    try {
        const [id] = await db("ingredients")
            .insert(req.body)

        const ingredient = await db("ingredients")
            .where({ id })
            .first()

        return res.status(201).json(ingredient)
    }
    catch (err) {
        next(err)
    }
})


router.put("/:id", async (req, res, next) => {
    try {
        const updatedId = req.params
        const ingredient = await ingredientModel.update(updatedId, req.body)

        if (ingredient) {
            res.json(ingredient)
        } else {
            res.status(404).json({
                message: "Could not find ingredient with given ID",
            })
        }
    } catch (err) {
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