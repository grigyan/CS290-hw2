const errorHandler = require('./error-handler.middleware');
const citiesController = require('./cities/cities.controller');
const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Server Is Running!")
})

app.use('/cities', citiesController);
app.use(errorHandler);