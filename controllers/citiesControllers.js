const City = require('../models/City')


const citiesControllers = {
    getCities: (req, res) => {
        City.find()
        .then((cities) => res.json({ response: cities }))
        .catch(err => console.log(err))
    },
    postCity: (req, res) => {
        const {city, country, src, description} = req.body    
        new City({city, country, src, description}).save()
        .then(() => res.json({success: true}))
        .catch(err => console.log(err))
    },
    getCity: (req, res) => {
        City.findOne({_id: req.params.id})
        .then((city) => res.json({response:city}))
    },
    deleteCity: (req, res) => {
        City.findOneAndDelete({_id: req.params.id})
        .then(() => res.json({ success: true}))
    },
    putCity: (req, res) => {
        City.findOneAndUpdate({_id: req.params.id}, {...req.body})
        .then(()=> res.json({success: true}))
    } 
}

module.exports = citiesControllers;

