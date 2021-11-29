const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    src: {type: String, required: true},
    activity: {type: String, required: true},
    duration: {type: String, required: true},
    price: {type: Number, required: true}
});

const Itinerary = mongoose.model('itinerary', itinerarySchema);

module.exports = Itinerary;
