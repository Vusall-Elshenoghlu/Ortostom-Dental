import express from "express"
import  {bookAppointment, getProfile, updateUser, UserController, userListAppointments}  from "../controller/UserController.js"
import { authUser } from "../middlewares/AuthUser.js"
export const userRoute = express.Router()

userRoute.get("/",UserController.getAll)
userRoute.post("/register",UserController.register)
userRoute.post("/login",UserController.login)
userRoute.get("/get-profile",authUser,getProfile)
userRoute.post("/update-profile",authUser,updateUser)
userRoute.post("/book-appointment",authUser,bookAppointment)
userRoute.get("/list-appointment",authUser,userListAppointments)