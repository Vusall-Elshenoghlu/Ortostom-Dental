import jwt from "jsonwebtoken"

//admin authentication middleware 

export const authAdmin = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.json({ success: false, message: "Not Authorized. Login Again..." });
        }

        const token = authHeader.split(' ')[1]; 
        const decodeToken = jwt.verify(token, process.env.ADMIN_JWT_SECRET);
        
        if (decodeToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Wrong password or email..." });
        }

        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

