const expressAsyncHandler = require('express-async-handler');
const express = require('express');
const route = express.Router();
const cities_service = require('./cities.service');


route.get('/:zipCode', expressAsyncHandler(async (req, res) => {
    let cityInfo = await cities_service.getCityByZipCode(req.params.zipCode)
    
    res.send(cityInfo);
}))

module.exports = route;