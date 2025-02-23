import { UserModel } from "../model/UserModel.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { DoctorModel } from "../model/DoctorModel.js"
import { AppointmentModel } from "../model/AppointmentModel.js"

dotenv.config();

const secretKey = process.env.JWT_SECRET;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    secure: true
});

export const UserController = {
    getAll: async (req, res) => {
        let users = await UserModel.find();
        res.send(users);
    },



    register: async (req, res) => {
        const { email, name, surname, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (user) {
            return res.status(400).send("User with this email already exists.");
        }

        let hashPassword = await bcrypt.hash(password, 10);
        let newUser = new UserModel({
            name,
            surname,
            password: hashPassword,
            email
        });

        await newUser.save();
        res.send(newUser);
    },

    login: async (req, res) => {

        let { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).send("You need to register first.");
        }

        let isTruePassword = await bcrypt.compare(password, user.password);
        if (!isTruePassword) {
            return res.status(401).send("Wrong password.");
        }

        console.log("Found UserID:", user._id);

        let token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: "1h" });
        user.confirmPassword = null;
        await user.save();

        res.send({ message: "Login successful.", token, userId: user._id, user });
    }
}

export const getProfile = async (req, res) => {

    try {

        const { userId } = req.body
        const userData = await UserModel.findById(userId).select("-password")
        res.json({ success: true, userData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { userId, name, phone, address, dob, gender } = req.body;
        console.log(req.body)
        if (!name || !phone || !dob || !gender) {
            return res.json({ success: false, message: "Missing Data..." });
        }

        let parsedAddress;
        if (typeof address === 'string') {
            try {
                parsedAddress = JSON.parse(address);
            } catch (err) {
                return res.json({ success: false, message: "Invalid address format" });
            }
        } else {
            parsedAddress = address;
        }

        await UserModel.findByIdAndUpdate(userId, { name, phone, address: parsedAddress, dob, gender });

        res.json({ success: true, message: "Profile Updated" });
        console.log(req.body)
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//Api to book appointment

export const bookAppointment = async (req, res) => {

    try {

        const { userId, docId, slotDate, slotTime } = req.body

        const docData = await DoctorModel.findById(docId).select("-password")
        if (!docData.available) {
            return res.json({ success: false, message: "Doctor is not available" })
        }

        let slots_booked = docData.slots_booked
        //checking for slots availability

        if (slots_booked[slotDate]) {
            if (slots_booked[slotDate].includes(slotTime)) {
                return res.json({ success: false, message: "Slot is not available" })
            } else {
                slots_booked[slotDate].push(slotTime)
            }
        } else {
            slots_booked[slotDate] = []
            slots_booked[slotDate].push(slotTime)
        }

        const userData = await UserModel.findById(userId).select("-password")

        delete docData.slots_booked

        const appointmentData = {
            userId,
            docId,
            userData,
            docData,
            slotTime,
            slotDate,
            date: Date.now()
        }

        const newAppointment = new AppointmentModel(appointmentData)

        await newAppointment.save()

        //save new slots data in docData

        await DoctorModel.findByIdAndUpdate(docId, { slots_booked })
        res.json({ success: true, message: "Appointment Booked..." })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//API to get user appointments for frontend  my-appointment page

export const userListAppointments = async (req, res) => {


    try {

        const { userId } = req.body
        const appointments = await AppointmentModel.find({ userId })
        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//Api for cancellation appointment
export const cancelAppointment = async (req, res) => {
    try {

        const {userId,appointmentId} = req.body

        const appointmentData = await AppointmentModel.findById(appointmentId)

        if(appointmentData.userId !== userId){
            return res.json({success:false,message:"Unauthorized action..."})
        }

        await AppointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})

        const {docId,slotDate,slotTime} = appointmentData
        const doctorData = await DoctorModel.findById(docId)

        let slots_booked = doctorData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(item => item !== slotTime)

        await DoctorModel.findByIdAndUpdate(docId,{slots_booked})

        res.json({success:true,message:"Appointment cancelled"})


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}