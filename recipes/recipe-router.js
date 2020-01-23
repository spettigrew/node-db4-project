const express = require("express")
const db = require("../data/db-config")

const Recipes = require("./recipe-model")

const router =  express.Router()

router.get("/", async (req, res, next) => {
    try {
        return res.json(await Recipes.find())
    } 
    catch(err) {
        next(err)
    }
})

router.get("/:id" , async (req, res, next) => {
    try {
        const { id } = req.params
        const recipe = await Recipes.findById(id)

        if (recipe) {
            return res.status(201).json(recipe)
        } else {
            return res.status(404).json({ message: "Could not find recipe with this Id." })
        }

        }
        catch(err) {
            next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const [id] = await Recipes.add(req.body) //returns an array

        const recipe = await Recipes.findById(id)

        return res.status(201).json(recipe)
    }
    catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params //returns an object
        const recipe = await recipeModel.update(id, req.body)

        if (recipe) {
            res.json(recipe)
        } else {
            return res.status(404).json({
                message: "Could not find recipe with given ID",
            })
        }
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = await db("recipes")
        .where({ id: req.params.id })
        .del()
        return res.status(200).json({ id: req.params.id })
    }
    catch (err) {
        next(err)
    }
})

module.exports = router