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
    }
}


module.exports = userControllers;
