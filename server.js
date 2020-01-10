const express = require('express');
const helmet = require("helmet");

const recipeRouter = require('./recipes/recipe-router');
const ingredientRouter = require('./ingredients/ingredient.router');
const instructionRouter = require('./instructions/instruction-router');
const shoppingListRouter = require('./shopping-list/shopping-router')

require('dotenv').config()

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientRouter);
server.use('/api/instructions', instructionRouter);
server.use('/api/shopping-list', shoppingListRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something is wrong, check again.",
    })
})

module.exports = server;

