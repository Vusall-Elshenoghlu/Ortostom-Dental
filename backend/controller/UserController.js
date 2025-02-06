import { UserModel } from "../model/UserModel.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

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

    getById: async (req, res) => {
        let id = req.params.id;
        let myUser = await UserModel.findById(id);
        res.send(myUser);
    },

    deleteUser: async (req, res) => {
        let id = req.params.id;
        await UserModel.findByIdAndDelete(id);
        res.send("User deleted successfully.");
    },

    editUser: async (req, res) => {
        let id = req.params.id;
        let updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        res.send({
            message: "User updated successfully.",
            data: updatedUser
        });
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

        let confirmCode = Math.floor(100000 + Math.random() * 900000); 
        user.confirmPassword = confirmCode;
        await user.save();

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: user.email,
            subject: "Confirmation Code",
            text: `Your confirmation code: ${confirmCode}`,
            html: `<p>Your confirmation code: <strong>${confirmCode}</strong></p>`,
        });

        res.send({ message: "Confirmation code sent to your email.", userId: user._id,confirmCode ,user});
    },

    confirm: async (req, res) => {
        let { userId, confirmPassword } = req.body;
        let user = await UserModel.findOne({ _id: userId, confirmPassword });
    
        if (!user) {
            return res.status(400).send("Incorrect confirmation code.");
        }
    
        let token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: "1h" });
    
        user.confirmPassword = null;
        await user.save();
    
        res.send({ message: "Login successful.", token });
    
    }
};
