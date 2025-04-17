import express from "express"
import  {bookAppointment, cancelAppointment, forgotPassword, getProfile, resetPassword, updateUser, UserController, userListAppointments, verifyResetToken}  from "../controller/UserController.js"
import { authUser } from "../middlewares/AuthUser.js"
export const userRoute = express.Router()

userRoute.get("/",UserController.getAll)
userRoute.post("/register",UserController.register)
userRoute.post("/login",UserController.login)
userRoute.get("/get-profile",authUser,getProfile)
userRoute.post("/update-profile",authUser,updateUser)
userRoute.post("/book-appointment",authUser,bookAppointment)
userRoute.get("/list-appointment",authUser,userListAppointments)
userRoute.post("/cancel-appointment",authUser,cancelAppointment)
userRoute.post("/forgot-password",forgotPassword)
userRoute.get("/verify-reset-token",verifyResetToken)
userRoute.post("/reset-password",resetPassword)
