const express = require('express');
const app = express();

const popularRecipes = require('./routes/popularRecipes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

//routes
app.use('/popular-recipes', popularRecipes);

//middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;