const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers');
const { getCities, postCity, getCity  } = citiesControllers;

Router.route('/cities')
.get(getCities)
.post(postCity)

Router.route('/cities/:id')
.get(getCity)



module.exports = Router;