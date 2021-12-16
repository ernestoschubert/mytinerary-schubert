const Activity = require('../models/Itinerary');

const activityControllers = {
    getActivities: (req, res) => {
        Activity.find().populate('city')
        .then((itineraries) => res.json({ response: activities }))
        .catch(err => console.log(err))
    },
    postActivity: (req, res) => {
        const {activityTitle, activityImg, actDescription, city} = req.body 
        new Activity({activityTitle, activityImg, actDescription, city}).save()
        .then(() => res.json({success: true}))
        .catch(err => console.log(err))
    },
    getActivity: (req, res) => {
        Activity.findOne({_id: req.params.id}).populate('city')
        .then((activity) => res.json({response:activity}))
        .catch(err => console.log(err))
    },
    deleteActivity: (req, res) => {
        Activity.findOneAndDelete({_id: req.params.id})
        .then(() => res.json({ success: true}))
        .catch(err => console.log(err))
    },
    putActivity: (req, res) => {
        Activity.findOneAndUpdate({_id: req.params.id}, {...req.body})
        .then(()=> res.json({success: true}))
        .catch(err => console.log(err))
    }, 
    getItineraryActivities: (req, res) => {
        Activity.find({city: req.params.id}).populate('city')
        .then(activities => res.json({response:activities}))
        .catch(err => console.log(err))
    }
}

module.exports = itineraryControllers;
