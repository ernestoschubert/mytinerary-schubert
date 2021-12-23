const Itinerary = require('../models/Itinerary');
const User = require('../models/User');

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
        Itinerary.find({city: req.params.id}).populate('comments.userId')
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
    },
    getAllComments: async(req, res)=>{
        try {
           const itineraryId = req.params.id
           var itinerarySelected = await Itinerary.findOne({_id:itineraryId})
        }catch(err){
           console.log('getAllComments catch: ', err)
        }
        res.json({response: itinerarySelected.comments})
    },
    addNewComment: async(req, res)=>{
        try {
            var {userId, comment, itineraryId } = req.body
            var userInfo = await User.findOne({_id: userId})
            var itineraryCommented = await Itinerary.findOneAndUpdate(
                {_id: itineraryId},
                {$push: {comments: {userId, userName: userInfo.firstName, userImg: userInfo.userImg, comment}}}, 
                {new: true}
            ) 
        }catch (err){
            console.log('addNewComment catch: ', err)
        }
        res.json({response: itineraryCommented.comments})
    },
    editComment: async(req, res)=>{
        try {
            const itineraryId = req.params.id
            const commentId = req.body.commentId
            const newComment = req.body.newComment
            var itineraryModified = await Itinerary.findOneAndUpdate( 
                {_id: itineraryId, "comments.userId": commentId},  
                {$set: {"comments.$.comment": newComment}},            
                {new: true}
            )
        }catch(err){
            console.log('editComment catch: ', err)
        }
        res.json({response: itineraryModified.comments})
    },
    deleteComment: async(req, res)=>{
        try {
            const itineraryId = req.body.itineraryId
            const commentId = req.body.commentId
            var itineraryModified = await Itinerary.findOneAndUpdate(
                {_id: itineraryId},
                {$pull: {comments: {_id: commentId}}}, 
                {new: true}
            ) 

        }catch(err){
            console.log('deleteComment catch: ', err)
        }
        res.json({response: itineraryModified.comments})
    }  
}

module.exports = itineraryControllers;
