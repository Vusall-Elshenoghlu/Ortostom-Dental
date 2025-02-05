import jwt from "jsonwebtoken"
const secretKey = "SECRETKEY"

export const AuthMiddleware = (req,res,next) =>{
    const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null    
    console.log(token)
    if(!token) {
        return res.send("sizinn tokeniniz yoxdur...")
    }
    try{
        let decoded = jwt.verify(token,secretKey)
        req.user = decoded
        next()
    }catch(error){
        res.send("Sizin tokeniniz yanlisdir")
    }
}