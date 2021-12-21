const Itinerary = require('../models/Itinerary');

const itineraryControllers = {
    getItineraries: (req, res) => {
        Itinerary.find().populate('city')
        .then((itineraries) => res.json({ response: itineraries }))
        .catch(err => console.log(err))
    },
    postItinerary: (req, res) => {
        const {src,firstName, lastName, price, duration, likes, hastags, city, title, comments} = req.body 
        new Itinerary({src,firstName, lastName, price, duration, likes, hastags, city, title, comments}).save()
        .then(() => res.json({success: true}))
        .catch(err => console.log(err))
    },
    getItinerary: (req, res) => {
        Itinerary.findOne({_id: req.params.id}).populate('city')
        .then((itinerary) => res.json({response:itinerary}))
        .catch(err => console.log(err))
    },
    deleteItinerary: (req, res) => {
        Itinerary.findOneAndDelete({_id: req.params.id})
        .then(() => res.json({ success: true}))
        .catch(err => console.log(err))
    },
    putItinerary: (req, res) => {
        Itinerary.findOneAndUpdate({_id: req.params.id}, {...req.body})
        .then(()=> res.json({success: true}))
        .catch(err => console.log(err))
    }, 
    getCityItineraries: (req, res) => {
        Itinerary.find({city: req.params.id}).populate('city')
        .then(itineraries => res.json({response:itineraries}))
        .catch(err => console.log(err))
    },
    likeItinerary:(req,res) =>{
        Itinerary.findOne({_id: req.params.id})
        .then((itinerary) =>{
            if(itinerary.likes.includes(req.user._id)){
               Itinerary.findOneAndUpdate({_id:req.params.id}, {$pull:{likes:req.user.id}},{new:true})
               .then((newItinerary)=> res.json({success:true, response:newItinerary.likes}))
               .catch((error) => console.log(error))
            }else{
                Itinerary.findOneAndUpdate({_id: req.params.id}, {$push:{likes:req.user.id}},{new:true})
                .then((newItinerary) => res.json({success:true, response:newItinerary.likes}))
                .catch((error) => console.log(error))
            }
        })
        .catch((error) => res.json({success:false, response:error}))
    }
}

module.exports = itineraryControllers;
