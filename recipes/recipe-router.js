const express = require("express")
const db = require("../data/db-config/")

const recipes = require("./recipe-model")

const router =  express.Router()

router.get("/api/recipes", async (req, res, next) => {
    try {
        res.json(await db("recipes"))
    } 
    catch(err) {
        next(err)
    }
})

router.get("/api/recipes/:id" , async (req, res, next) => {
    try {
        const { id } = req.params
        const recipe = await db("recipes")
        .where({ id })
        .first()

        if (recipe) {
            return res.json(recipe)
        } else {
            return res.status(404).json({ message: "Could not find recipe with this Id." })
        }
    }
    catch(err) {
        next(err)
    }
})

router.post("/api/recipes", async (req, res, next) => {
    try {
        const [id] = await db("recipes")
        .insert(req.body)

        const recipe = await db("recipes")
        .where({ id })
        .first()

        return res.status(201).json(recipe)
    }
    catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const recipe = await recipeModel.update(id, req.body)

        if (recipe) {
            res.json(recipe)
        } else {
            res.status(404).json({
                message: "Could not find recipe with given ID",
            })
        }
    } catch (err) {
        next(err)
    }
})

router.del("/api/recipes/:id", async (req, res, next) => {
    try {
        const id = await db("recipes")
        .where({ id: req.params.id })
        .del()
    }
    catch (err) {
        next(err)
    }
})