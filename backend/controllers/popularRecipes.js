const axios = require('axios');

const areaToCountry = require('../utils/areaToCountry');

const { InternalServerError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

const popularRecipes = async (req, res) => {
    const { area } = req.params;

    try {
        let response = null;

        response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);

        if(!response.data.meals) {
            const country = areaToCountry(area);

            response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
        }

        response = response.data.meals.slice(0, 4);

        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        throw new InternalServerError('Unable to fetch data');
    }
}

module.exports = popularRecipes;