const popularCountries = require('../data/popularCountries');

const areaToCountry = (area) => {
    const country = popularCountries.filter((select) => {
        return (select.strArea == area);
    });

    return country[0].strCountry;
}

module.exports = areaToCountry;