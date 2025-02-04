import { ProductValidationSchema } from "../validations/ProductValidation.js"
export const ProductMiddleware = (req,res,next) =>{
    let {error} = ProductValidationSchema.validate(req.body)
    if (error){
        return res.status(400).json({message: error.details[0].message})
    }
    next();
}