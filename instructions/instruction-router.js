const express = require("express")
const db = require("../data/db-config/")

const instructions = require("./instruction-model")

const router = express.Router()

router.get("/api/instructions", async (req, res, next) => {
    try {
        res.json(await db("instructions"))
    }
    catch (err) {
        next(err)
    }
})

router.post("/api/instructions", async (req, res, next) => {
    try {
        const [id] = await db("instructions")
            .insert(req.body)

        const recipe = await db("instructions")
            .where({ id })
            .first()

        return res.status(201).json(recipe)
    }
    catch (err) {
        next(err)
    }
})

router.del("/api/instructions/:id", async (req, res, next) => {
    try {
        const id = await db("instructions")
            .where({ id: req.params.id })
            .del()
    }
    catch (err) {
        next(err)
    }
})