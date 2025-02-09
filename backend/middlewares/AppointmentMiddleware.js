import { AppointmentValidation } from "../validations/AppointmentValidation.js";

export const AppointmentMiddleware = (req,res,next) =>{
    const isLoogedIn = req.user ? true : false
    const {error} = AppointmentValidation(req.body,isLoogedIn)

    if (error) {
        return res.status(400).json({message:error.details[0].message})
    }

    next()
}