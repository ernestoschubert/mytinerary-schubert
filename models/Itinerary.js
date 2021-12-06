const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    src: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    price: {type: Number, required: true},
    duration: {type: Number, required: true},
    likes: {type: Array},
    hastags: {type: Array},
    title: {type: String, required: true},
    comments: { type: String },
    city:  {type:[{type: mongoose.Types.ObjectId, ref: 'city', required: true}], required: true}
});

const Itinerary = mongoose.model('itinerary', itinerarySchema);

module.exports = Itinerary;
