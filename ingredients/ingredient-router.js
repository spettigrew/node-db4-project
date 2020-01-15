const express = require("express")
const db = require("../data/db-config/")

const Ingredient = require("./ingredient-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        return res.json(await Ingredient.find())
    }
    catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const ingredient = await Ingredient.findById(id)

        if (ingredient) {
            return res.status(201).json(ingredient)
        } else {
            return res.status(404).json({ message: "Could not find ingredient with this Id." })
        }
    }
    catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const [id] = await Ingredient.add(req.body)

        const ingredient = await Ingredient.findById(id)

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

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = await db("ingredients")
            .where({ id: req.params.id })
            .del()
        return res.status(200).json({ id: req.params.id })
    }
    catch (err) {
        next(err)
    }
})

module.exports = router