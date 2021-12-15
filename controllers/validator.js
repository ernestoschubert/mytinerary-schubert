const joi = require('joi');

const validator = (req, res, next) => {
    const schema = joi.object({
        firstName: joi.string().trim().min(2).required().messages({
            "string.empty" : 'You must complete the field "First Name"',
            "string.min": "Your name must be at least 2 characters long"
        }),
        lastName: joi.string().trim().min(2).required().messages({
            "string.empty" : 'You must complete the field "Last Name"',
            "string.min": "Your name must be at least 2 characters long"
        }),
        email: joi.string().email().trim().required(),
        password: joi.string().trim().min(6).required().messages({
            "string.empty": 'You must complete the field "Password"',
            "string.min": 'Password: Length must be at least 6 characters long'

        }),
        userImg: joi.string().trim().messages({
            "string.empty": 'You must complete the field "URL Profile Image"'
        }),
        country: joi.string().required().messages({
            "string.empty": "Please select a country"
        }),
        googleAccount: joi.boolean()
    })
    const validation = schema.validate(req.body, { abortEarly: false })
    if (!validation.error) {
        next()
    } else {
        res.json({success: false, errors: validation.error.details})
    }
}

module.exports = validator;