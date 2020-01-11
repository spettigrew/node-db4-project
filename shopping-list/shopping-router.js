const express = require("express")
const db = require("../data/db-config/")

const ShoppingList = require("./shopping-model")

const router = express.Router()

router.get("/api/shoppingList", async (req, res, next) => {
    try {
        return res.json(await ShoppingList.find())
    }
    catch (err) {
        next(err)
    }
})

router.get("/api/shoppingList/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const list = await ShoppingList.findById(id)

        if (list) {
            return res.json(list)
        } else {
            return res.status(404).json({ message: "Could not find list with this Id." })
        }
    }
    catch (err) {
        next(err)
    }
})

router.post("/api/shoppingList", async (req, res, next) => {
    try {
        const [id] = await ShoppingList.add(req.body)

        const list = await ShoppingList.findById(id)

        return res.status(201).json(list)
    }
    catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const updatedId = req.params
        const list = await listModel.update(updatedId, req.body)

        if (list) {
            res.json(list)
        } else {
            res.status(404).json({
                message: "Could not find list with given ID",
            })
        }
    } catch (err) {
        next(err)
    }
})

router.del("/api/shoppingList/:id", async (req, res, next) => {
    try {
        const { id }= await db("shoppingList")
            .where({ id: req.params.id })
            .del()
    }
    catch (err) {
        next(err)
    }
})