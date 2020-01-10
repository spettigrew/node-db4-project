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