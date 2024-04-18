import joi from 'joi';

export const registerUser=joi.object().required().keys({
    firstName: joi.string().min(2).max(15).pattern(/^[A-za-z ]+$/).trim().required(),
    lastName: joi.string().min(2).max(15).pattern(/^[A-za-z ]+$/).trim().required(),
    email: joi.string().email().required().trim(),
    password:joi.string().required(),
    confirmPassword:joi.string().required().valid(joi.ref('password'))

})