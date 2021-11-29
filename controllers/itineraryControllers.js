const Itinerary = require('../models/Itinerary');

const itineraryControllers = {
    getItineraries: (req, res) => {
        Itinerary.find()
        .then((itineraries) => res.json({ response: itineraries }))
        .catch(err => console.log(err))
    },
    postItinerary: (req, res) => {
        const addItinerary = new Itinerary({
            src: req.body.src,
            activity: req.body.activity,
            duration: req.body.duration,
            price: req.body.price
        })
        addItinerary.save()
        .then(() => res.json({ success: true }))
        .catch(err => console.log(err))
        
    },
    getItinerary: (req, res) => {
        Itinerary.findOne({_id: req.params.id})
        .then((itinerary) => res.json({response:itinerary}))
    },
    deleteItinerary: (req, res) => {
        Itinerary.findOneAndDelete({_id: req.params.id})
        .then(() => res.json({ success: true}))
    },
    putItinerary: (req, res) => {
        Itinerary.findOneAndUpdate({_id: req.params.id}, {...req.body})
        .then(()=> res.json({success: true}))
    } 
}

module.exports = itineraryControllers;
