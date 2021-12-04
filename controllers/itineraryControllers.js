const Itinerary = require('../models/Itinerary');

const itineraryControllers = {
    getItineraries: (req, res) => {
        Itinerary.find().populate('city')
        .then((itineraries) => res.json({ response: itineraries }))
        .catch(err => console.log(err))
    },
    postItinerary: (req, res) => {
        const {src,firstName, lastName, price, duration, likes, hastags, city} = req.body 
        new Itinerary({src,firstName, lastName, price, duration, likes, hastags, city}).save()
        .then(() => res.json({success: true}))
        .catch(err => console.log(err))
    },
    getItinerary: (req, res) => {
        Itinerary.findOne({_id: req.params.id}).populate('city')
        .then((itinerary) => res.json({response:itinerary}))
    },
    deleteItinerary: (req, res) => {
        Itinerary.findOneAndDelete({_id: req.params.id})
        .then(() => res.json({ success: true}))
    },
    putItinerary: (req, res) => {
        Itinerary.findOneAndUpdate({_id: req.params.id}, {...req.body})
        .then(()=> res.json({success: true}))
    }, 
    getCityItineraries: (req, res) => {
        Itinerary.find({city: req.params.id}).populate('city')
        .then(itineraries => res.json({itineraries}))
    }
}

module.exports = itineraryControllers;
