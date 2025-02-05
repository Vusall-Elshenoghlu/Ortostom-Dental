import Joi from "joi";
export const UserValidationSchema = Joi.object({
    name:Joi.string().min(2).max(30).required(),
    surname:Joi.string().min(2).max(50).required(),
    email:Joi.string().min(2).max(30).required(),
    password:Joi.string().min(4).max(25)
})