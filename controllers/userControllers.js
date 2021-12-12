const User = require('../models/User');
const bcryptjs = require('bcryptjs');


const userControllers = { 
    addNewUser: async (req, res) => {
        const {firstName, lastName, email, password, userImg, country, googleAccount} = req.body
        const hashedPassword = bcryptjs.hashSync(password)
        const newUser = new User({firstName, lastName, email, password: hashedPassword,userImg,country, googleAccount})
        try {
            console.log(newUser)
            let repeatedUser = await User.findOne({email})
            if(repeatedUser) throw new Error
            await newUser.save()
            res.json({success: true, response: {firstName: newUser.firstName, _id: newUser._id}, error: null})
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    },
    getUsers: (req, res) => {
        User.find()
        .then((users) => res.json({ response: users }))
        .catch(err => console.log(err))
    },
    getUser: (req, res) => {
        User.findOne({_id: req.params.id})
        .then((user) => res.json({response: user}))
        .catch(err => console.error(err))
    },
    deleteUser: (req, res) => {
        User.findOneAndDelete({_id: req.params.id})
        .then(() => res.json({ success: true}))
        .catch(err => console.error(err))
    },
    putUser: (req, res) => {
        User.findOneAndUpdate({_id: req.params.id}, {...req.body})
        .then(()=> res.json({success: true}))
        .catch(err => console.error(err))
    } 
}


module.exports = userControllers;
