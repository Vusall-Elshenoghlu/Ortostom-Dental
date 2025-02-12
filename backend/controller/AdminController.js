import bcrypt from "bcrypt"
import { DoctorModel } from "../model/DoctorModel.js"
import jwt from "jsonwebtoken"
//API for adding doctor

export const addDoctor = async (req, res) => {
    try {

        const { firstName, lastName, email, password, specialty, profileImage, experienceYears, education, ratings, certificates, availableTimes, bio, contact } = req.body
        //checking for all data to add doctor
        if (!firstName || !lastName || !email || !password || !specialty || !profileImage || !experienceYears || !education || !ratings || !certificates || !availableTimes || !bio || !contact) {
            return res.json({ success: false, message: "Missing Details..." })
        }

        //hashing doctor password
        const doctor = await DoctorModel.findOne({ email });

        if (doctor) {
            return res.status(400).send("Doctor with this email already exists.");
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const doctorData = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            specialty,
            profileImage,
            experienceYears,
            education,
            ratings,
            certificates,
            availableTimes,
            bio,
            contact
        }

        const newDoctor = new DoctorModel(doctorData)
        await newDoctor.save()

        res.json({ success: true, message: "Doctor has added successfully...." })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


//API for admin login 

export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const token = jwt.sign(email + password, process.env.ADMIN_JWT_SECRET)
            res.json({ success: true, token })

        } else {
            res.json({ success: false, message: "Invalid credencials..." })
        }
    } catch (error) {
        res.json({ success: false, message: error.message })

    }
}


