const express = require('express');
const router = express.Router();

const popularRecipes = require('../controllers/popularRecipes');

router.get('/', popularRecipes);

module.exports = router;