import Joi from "joi"
export const AppointmentValidation = (data,isLoggedIn) =>{
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        phone: Joi.string().min(8).max(15).required(),
        date: Joi.date().required(),
        time: Joi.string().required(),
        email: isLoggedIn ? Joi.string().allow(null) : Joi.string().email().required(),
        status: Joi.string().valid('pending', 'confirmed', 'cancelled').default('pending'),
        notes: Joi.string().allow('', null),
    });
}