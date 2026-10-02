const express = require('express');
const app = express();

const popularRecipes = require('./routes/popularRecipes');
const notFound = require('./middlewares/notFound');

app.use(express.json());

//routes
app.use('/popular-recipes', popularRecipes);

//middlewares
app.use(notFound);

module.exports = app;