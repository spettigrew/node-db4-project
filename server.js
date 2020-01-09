const express = require('express');

const recipeRouter = require('./recipes/recipe-router');

require('dotenv').config()

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);

server.get("/", (req, res, next) => {
    res.send("<h2>I am your sanity check. Hello!</h2>")
})

module.exports = server;