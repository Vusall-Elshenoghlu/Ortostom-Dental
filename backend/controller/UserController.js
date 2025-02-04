import { UserModel } from "../model/UserModel.js"
import bcrypt from "bcrypt"
import nodemailer from "nodemailer"
import dotenv from "dotenv"

// .env faylını yükləyir
dotenv.config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    secure:true
  });
export const UserContoller = {
    getAll:async (req,res) =>{
        let users = await UserModel.find()
        res.send(users)
    },
    getById:async (req,res) =>{
        let id = req.params.id
        let myUser = await UserModel.findById(id)
        res.send(myUser)
    },
    deleteUser:async (req,res) =>{
        let id = req.params.id
        await UserModel.findByIdAndDelete(id)
        res.send("Success delete....")
    },
    editUser:async (req,res) =>{
        let id = req.params.id
        let updatedUser = await UserModel.findByIdAndUpdate(id,req.body,{new:true})
        res.send({
            message:"Success edit...",
            data:updatedUser
        })
    },
    register:async (req,res) =>{
        const {email,username,password} = req.body
        const user = await UserModel.find({email:email})
        if (user.length !== 0) {
            res.send("There is already exist this user with this email...")
        }else{
            let hashPassword = await bcrypt.hash(password,10)
            let newUser = await UserModel({
                username,
                password:hashPassword,
                email
            })
            await newUser.save()
            res.send(newUser)
        }
    },
    login:async(req,res) =>{
        let {email,password} = req.body
        const user = await UserModel.findOne({email:email})
        if (user.length === 0){
            return res.send("you have to register first...")
        }
        else{
            let isTruePassword = await bcrypt.compare(password,user.password)
            if (!isTruePassword){
                res.send("Wrong password...")
            }else{
                let confirmCode = Math.floor(Math.random() * 999999)
                user.confirmPassword = confirmCode
                await user.save()
                const info = await transporter.sendMail({
                    from: process.env.SMTP_USER, // sender address
                    to: user.email, // list of receivers
                    subject: "Hello ✔", // Subject line
                    text: "Hello world?", // plain text body
                    html: `Sizin Confirm kodunuz: ${confirmCode}`, // html body
                  });
            }
            res.send(user)
        }
    },
    confirm: async (req,res) =>{
        let confirmPassword = req.body.confirmPassword
        let user = await UserModel.findOne({confirmPassword:confirmPassword})
        if(!user){
            res.send("your confirm password is incorrect...")
        }else{
            res.send("Confirmed....")
        }
    }
}
