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

router.get("/api/instructions/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const instruction = await db("instructions")
            .where({ id })
            .first()

        if (instruction) {
            return res.json(instruction)
        } else {
            return res.status(404).json({ message: "Could not find instructions with this Id." })
        }
    }
    catch (err) {
        next(err)
    }
})

router.post("/api/instructions", async (req, res, next) => {
    try {
        const [id] = await db("instructions")
            .insert(req.body)

        const instruction = await db("instructions")
            .where({ id })
            .first()

        return res.status(201).json(instruction)
    }
    catch (err) {
        next(err)
    }
})


router.put("/:id", async (req, res, next) => {
    try {
        const updatedId = req.params
        const instruction = await instructionModel.update(updatedId, req.body)

        if (instruction) {
            res.json(instruction)
        } else {
            res.status(404).json({
                message: "Could not find instruction with given ID",
            })
        }
    } catch (err) {
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