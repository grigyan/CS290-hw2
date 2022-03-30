const NotFoundError = require('../errors/not-found.error');
let citiesRepo = require('./cities.repository');

async function getCityByZipCode(zipCode) {
    try {
        let getCityData = await citiesRepo.getCityDataByZipCode(zipCode);

        if (getCityData) {
            return getCityData;
        }
    } catch {
        throw new NotFoundError("No Cities Found");
    }
}

module.exports = {getCityByZipCode}