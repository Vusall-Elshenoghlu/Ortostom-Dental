import jwt from "jsonwebtoken"
export const AuthDoctor = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        console.log("Authorization Header:", authHeader);

        if (!authHeader) {
            return res.json({ success: false, message: "Not Authorized. Login Again..." });
        }

        const token = authHeader.split(' ')[1];
        console.log("Extracted Token:", token);

        const decodeToken = jwt.verify(token, process.env.DOCTOR_JWT_SECRET);
        console.log("Decoded Token:", decodeToken);

        req.body.docId = decodeToken.id;  
        console.log("Updated req.body (after adding docId):", req.body); 

        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
