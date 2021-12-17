const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers');
const itineraryControllers = require('../controllers/itineraryControllers');
const userControllers = require("../controllers/userControllers");
const activityControllers = require('../controllers/activityControllers');
const { getCities, postCity, getCity, deleteCity, putCity  } = citiesControllers;
const { getItineraries, postItinerary, getItinerary, deleteItinerary, putItinerary, getCityItineraries } =  itineraryControllers;
const {addNewUser, signInUser, getUsers, getUser, deleteUser, putUser, verifyToken} = userControllers;
const {getActivities, postActivity, getActivity, deleteActivity, putActivity, getItineraryActivities} = activityControllers;
const validator = require("../controllers/validator");
const passport = require('../config/passport');



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

Router.route('/activities')
.get(getActivities)
.post(postActivity)

Router.route('/activities/:id')
.get(getActivity)
.delete(deleteActivity)
.put(putActivity)

Router.route('/activities/itinerary/:id')
.get(getItineraryActivities)

Router.route('/users')
.get(getUsers)

Router.route('/users/:id')
.get(getUser)
.delete(deleteUser)
.put(putUser)

Router.route('/users/signup')
.post(validator, addNewUser)

Router.route('/users/signin')
.post(signInUser)

Router.route('/verifytoken')
.get(passport.authenticate('jwt', {session:false}), verifyToken)

module.exports = Router;
