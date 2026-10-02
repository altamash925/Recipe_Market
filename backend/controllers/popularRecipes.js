const axios = require('axios');
const popularCountries = require('../data/popularCountries');
const areaToCountry = require('../utils/areaToCountry');

const popularRecipes = async (req, res) => {
    const { area } = req.params;

    try {
        let response = null;

        response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);

        if(!response.data.meals) {
            const country = areaToCountry(area);

            response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
        }

        res.json(response.data);
    } catch (error) {
        console.log(error);
    }

    // res.send(`this is where you will get your popular recipes of this area ${area}`);
}

module.exports = popularRecipes;