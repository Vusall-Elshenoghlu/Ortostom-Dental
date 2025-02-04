import Joi from "joi";
export const ProductValidationSchema = Joi.object({
    image: Joi.string().min(5).max(500).required(),
    title:Joi.string().min(1).max(200).required(),
    description:Joi.string().min(10).max(1000).required(),
    price:Joi.number().positive().integer().min(5).max(2000).required()
})
