import { UserValidationSchema } from "../validations/UserValidation.js";
export const UserMiddleware = (req,res,next) =>{
    let {error} = UserValidationSchema.validate(req.body)
    if (error){
        return res.status(400).json({message: error.details[0].message})
    }
    next()
}