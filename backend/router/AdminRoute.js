import express from "express"
import { addDoctor,loginAdmin } from "../controller/AdminController.js"
import { doctorValidationMiddleware } from "../middlewares/DoctorMiddleware.js"
import { authAdmin } from "../middlewares/AuthAdmin.js"

export const AdminRouter = express.Router()
AdminRouter.post("/add-doctor",authAdmin,doctorValidationMiddleware,addDoctor)
AdminRouter.post("/login",loginAdmin)


