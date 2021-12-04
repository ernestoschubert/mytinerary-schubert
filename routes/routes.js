const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers');
const itineraryControllers = require('../controllers/itineraryControllers');
const { getCities, postCity, getCity, deleteCity, putCity  } = citiesControllers;
const { getItineraries, postItinerary, getItinerary, deleteItinerary, putItinerary, getCityItineraries } =  itineraryControllers;

Router.route('/cities')
.get(getCities)
.post(postCity)

Router.route('/cities/:id')
.get(getCity)
.delete(deleteCity)
.put(putCity)

Router.route('/itineraries')
.get(getItineraries)
.post(postItinerary)

Router.route('/itineraries/:id')
.get(getItinerary)
.delete(deleteItinerary)
.put(putItinerary)

Router.route('/itineraries/city/:id')
.get(getCityItineraries)

module.exports = Router;