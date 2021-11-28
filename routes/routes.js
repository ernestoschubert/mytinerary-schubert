const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers');
const { getCities, postCity, getCity, deleteCity, putCity  } = citiesControllers;

Router.route('/cities')
.get(getCities)
.post(postCity)

Router.route('/cities/:id')
.get(getCity)
.delete(deleteCity)
.put(putCity)



module.exports = Router;