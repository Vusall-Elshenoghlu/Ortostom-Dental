import jwt from "jsonwebtoken"

//admin authentication middleware 

export const authAdmin = async (req,res,next) =>{
    try{

        const {atoken} = req.headers
        if (!atoken){
            return res.json({success:false,message:"Not Authorized Login Again..."})
        }
        const decodeToken = jwt.verify(atoken,process.env.ADMIN_JWT_SECRET)
        if (decodeToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"wrong password or email..."})
        }

        next()

    }catch(error){
        res.json({success:false,message:error.message})

    }
}