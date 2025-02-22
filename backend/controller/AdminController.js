import bcrypt from "bcrypt"
import { DoctorModel } from "../model/DoctorModel.js"
import jwt from "jsonwebtoken"
import { AppointmentModel } from "../model/AppointmentModel.js"
import { UserModel } from "../model/UserModel.js"

export const addDoctor = async (req, res) => {
    try {

        const { firstName, lastName, email, password, specialty, profileImage, experienceYears, education, ratings, certificates, availableTimes, bio, contact } = req.body
        if (!firstName || !lastName || !email || !password || !specialty || !profileImage || !experienceYears || !education || !ratings || !certificates || !availableTimes || !bio || !contact) {
            return res.json({ success: false, message: "Missing Details..." })
        }
        
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


export const allDoctors = async (req, res) => {
    try {
        const doctors = await DoctorModel.find({}).select("-password")
        res.json({ success: true, doctors })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

//Api to get all appointments list

export const appointmentsAdmin = async (req, res) => {

    try {

        const appointments = await AppointmentModel.find({})
        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//API for patients

export const allPatients = async (req, res) => {
    try {
        const patients = await UserModel.find({}).select("-password");
        res.json({ success: true, patients });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
//API for one patient
export const onePatient = async (req, res) => {
    try {
        const { id } = req.body; 
        if (!id) {
            return res.json({ success: false, message: "Patient ID is required" });
        }

        const patient = await UserModel.findById(id).select("-password");
        if (!patient) {
            return res.json({ success: false, message: "Patient not found" });
        }

        res.json({ success: true, patient });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};


//API for adding new patient
export const addPatient = async (req, res) => {
    try {
        const { name, surname, email, phone, dob, password } = req.body;

        if (!name || !surname || !email || !phone || !dob || !password) {
            return res.json({ success: false, message: "All fields are required." });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "User with this email already exists." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newPatient = new UserModel({
            name,
            surname,
            email,
            phone,
            dob,
            password: hashedPassword, // Hash olunmuş şifrə
        });

        await newPatient.save();
        res.json({ success: true, message: "Patient added successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

//API for update patient


export const updatePatient = async (req, res) => {
    try {
        const { id, password, confirmPassword, name, surname, email, address, gender, dob, phone } = req.body;

        if (!id) {
            return res.json({ success: false, message: "Patient ID is required" });
        }

        let updateData = { name, surname, email, address, gender, dob, phone };

        if (password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            updateData.password = hashedPassword;
        }

        const updatedPatient = await UserModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedPatient) {
            return res.json({ success: false, message: "Patient not found" });
        }

        res.json({ success: true, message: "Patient updated successfully", updatedPatient });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};


//API for delete patient
export const deletePatient = async (req, res) => {
    try {
        const { id } = req.params;
        await UserModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Patient deleted successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

//API for appointment cancellation

export const adminCancelAppointment = async (req, res) => {
    try {

        const { appointmentId } = req.body

        const appointmentData = await AppointmentModel.findById(appointmentId)

        await AppointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })

        //releasin doctor slot

        const { docId, slotDate, slotTime } = appointmentData
        const doctorData = await DoctorModel.findById(docId)

        let slots_booked = doctorData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(item => item !== slotTime)

        await DoctorModel.findByIdAndUpdate(docId, { slots_booked })

        res.json({ success: true, message: "Appointment cancelled" })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//API to get dashboard data for admin page

export const adminDashboard = async (req, res) => {

    try {

        const doctors = await DoctorModel.find({})
        const patients = await UserModel.find({})
        const appointments = await AppointmentModel.find({})

        const dashData = {
            doctors:doctors.length,
            appointments:appointments.length,
            patients:patients.length,
            latestAppointments:appointments.reverse().slice(0,5)
        }

        res.json({success:true,dashData})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}