import express from "express"
import { addDoctor,adminCancelAppointment,adminDashboard,allDoctors,appointmentsAdmin,loginAdmin } from "../controller/AdminController.js"
import { doctorValidationMiddleware } from "../middlewares/DoctorMiddleware.js"
import { authAdmin } from "../middlewares/AuthAdmin.js"
import { changeAvailability } from "../controller/DoctorController.js"

export const AdminRouter = express.Router()
AdminRouter.post("/add-doctor",authAdmin,doctorValidationMiddleware,addDoctor)
AdminRouter.post("/login",loginAdmin)
AdminRouter.post("/all-doctors",authAdmin,allDoctors)
AdminRouter.post("/change-availability",authAdmin,changeAvailability)
AdminRouter.get("/all-appointments",authAdmin,appointmentsAdmin)
AdminRouter.post("/cancel-appointment",authAdmin,adminCancelAppointment)
AdminRouter.get("/dashboard",authAdmin,adminDashboard)


