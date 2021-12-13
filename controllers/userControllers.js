const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userControllers = { 
    addNewUser: async (req, res) => {
        const {firstName, lastName, email, password, userImg, country, googleAccount} = req.body
        console.log(req)
        const hashedPassword = bcryptjs.hashSync(password)
        const newUser = new User({firstName, lastName, email, password: hashedPassword,userImg,country, googleAccount})
        try {
            const repeatedUser = await User.findOne({email})
            if(repeatedUser) throw new Error
            const token = jwt.sign({...newUser}, process.env.SECRETKEY)
            await newUser.save()
            res.json({success: true, response: {firstName: newUser.firstName, lastName: newUser.lastName, userImg: newUser.userImg, _id: newUser._id, token}, error: null})
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    },
    signInUser:  async (req,res) => {
        const {email, password, google} = req.body 
        try {
            const user = await User.findOne({email})
            if (!user) throw new Error ("Email or password incorrect");
            if (user.googleAccount && !google) throw new Error ("Invalid email");
            const isPassword = bcryptjs.compareSync(password, user.password);
            if (!isPassword) throw new Error ("Email or password incorrect");
            const token = jwt.sign({...user}, process.env.SECRETKEY)
            res.json({success: true, response:{token, firstName: user.firstName, userImg: user.userImg, lastName: user.lastName}})
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    },
    verifyToken : (req, res) => {
        res.json({firstName: req.user.firstName, userImg:req.user.userImg, lastName:req.user.lastName})
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
