const express = require("express")
const db = require("../data/db-config/")

const Instructions = require("./instruction-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
       return res.json(await Instructions.find())
    }
    catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const instruction = await Instructions.findById(id)

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

router.post("/", async (req, res, next) => {
    try {
        const [id] = await Instructions.add(req.body)

        const instruction = await Instructions.findById(id)

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

router.delete("/:id", async (req, res, next) => {
    try {
        const { id }= await db("instructions")
            .where({ id: req.params.id })
            .del()
    }
    catch (err) {
        next(err)
    }
})

module.exports = router