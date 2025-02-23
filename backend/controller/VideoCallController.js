import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

export const sendVideoCallEmail = async (req, res) => {
    console.log(req.body)
    const userEmail = req.body.email;  
    const doctorEmail = "hvusal085@gmail.com"; 

    if (!userEmail || !req.body.link) {
        return res.status(400).json({ error: "İstifadəçi emaili və ya link göndərilməyib" });
    }

    try {
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: doctorEmail,
            subject: 'Yeni Video Zəng!',
            text: `Salam, ${userEmail} sizinlə görüşmək üçün video zəng linki göndərdi: ${req.body.link}`
        });

        res.status(200).json({ message: "E-poçt həkimə göndərildi!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "E-poçt göndərilə bilmədi" });
    }
};
