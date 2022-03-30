const axios = require('axios');

async function getCityDataByZipCode(zipCode) {
    const cityData = await axios.get("https://api.zippopotam.us/us/" + zipCode);


    return cityData.data['places'][0]['place name'] +", " 
    + cityData.data['places'][0]['state abbreviation'] + ", "
    + cityData.data.country;
}

module.exports = {getCityDataByZipCode};