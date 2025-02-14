import jwt from "jsonwebtoken"

//user authentication middleware 

export const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.json({ success: false, message: "Not Authorized. Login Again..." });
        }

        const token = authHeader.split(' ')[1]; 
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
        
        req.body.userId = decodeToken.id

        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

