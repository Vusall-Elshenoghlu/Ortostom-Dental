import AppointmentModel from "../model/AppointmentModel.js";
import nodemailer from "nodemailer";
import crypto from "crypto"; 

export const AppointmentController = {
    createAppointment: async (req, res) => {
        const { patientName, dentistName, email, phone, appointmentDate, time, notes } = req.body;
        try {
            const reservationCode = crypto.randomBytes(3).toString('hex'); 

            const newAppointment = new AppointmentModel({
                patientName,
                dentistName,
                email,
                phone,
                appointmentDate,
                time,
                notes,
                reservationCode
            });

            await newAppointment.save();

            sendReservationCodeToEmail(email, reservationCode);

            res.status(201).json(newAppointment);
        } catch (err) {
            res.status(500).json({ error: "Rezervasiya ləğv olundu." });
        }
    },

    getAllAppointments: async (req, res) => {
        try {
            const { dentistName } = req.query; // Query-dən həkimin adını alırıq
            const filter = dentistName ? { dentistName } : {}; 

            const appointments = await AppointmentModel.find(filter);
            res.status(200).json(appointments);
        } catch (err) {
            res.status(500).json({ error: "Ops..Məlumat əldə olunmadı" });
        }
    },

    getReservedDates: async (req, res) => {
        try {
            const { dentistName } = req.query;
            const filter = dentistName ? { dentistName } : {};

            const reservedAppointments = await AppointmentModel.find(filter, "appointmentDate");
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
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        secure: true
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
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
