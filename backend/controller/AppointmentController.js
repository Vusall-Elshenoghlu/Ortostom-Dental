import AppointmentModel from "../model/AppointmentModel.js";
import nodemailer from "nodemailer";
import crypto from "crypto"; // Random kod yaratmaq üçün

export const AppointmentController = {
    createAppointment: async (req, res) => {
        const { patientName, dentistName, appointmentDate, contactInfo } = req.body;
        try {
            const reservationCode = crypto.randomBytes(3).toString('hex'); // 6 simvol uzunluğunda

            const newAppointment = new AppointmentModel({
                patientName,
                dentistName,
                appointmentDate,
                contactInfo,
                reservationCode
            });

            await newAppointment.save();

            sendReservationCodeToEmail(contactInfo.email, reservationCode);

            res.status(201).json(newAppointment);
        } catch (err) {
            res.status(500).json({ error: "Rezervasiya ləğv olundu." });
        }
    },

    getAllAppointments: async (req, res) => {
        try {
            const appointments = await AppointmentModel.find();
            res.status(200).json(appointments);
        } catch (err) {
            res.status(500).json({ error: "Ops..Məlumat əldə olunmadı" });
        }
    },

    getReservedDates: async (req, res) => {
        try {
            const reservedAppointments = await AppointmentModel.find({}, "appointmentDate");
            const reservedDates = reservedAppointments.map(appointment => appointment.appointmentDate);
            res.status(200).json(reservedDates);
        } catch (err) {
            res.status(500).json({ error: "Opss...Tarixləri əldə etməkdə problem var" });
        }
    },

    deleteAppointment: async (req, res) => {
        try {
            const { id } = req.params;
            await AppointmentModel.findByIdAndDelete(id);
            res.status(200).json({ message: "Rezervasiya silindi." });
        } catch (err) {
            res.status(500).json({ message: "Silinmə baş tutmadı." });
        }
    }
};

const sendReservationCodeToEmail = (email, reservationCode) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS   
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Rezervasiya Kodunuz',
        text: `Salam,\n\nSizin rezervasiya kodunuz: ${reservationCode}. Klinikaya yaxınlaşarkən bu kodu təqdim edin.\n\nSağlamlıqla!`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Email göndərilmədi:", error);
        } else {
            console.log('Email göndərildi:', info.response);
        }
    });
};
