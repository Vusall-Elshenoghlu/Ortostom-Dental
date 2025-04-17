import express from "express"
import { addDoctor,addPatient,adminCancelAppointment,adminDashboard,allDoctors,allPatients,appointmentsAdmin,deleteDoctor,deletePatient,loginAdmin, onePatient, updatePatient, } from "../controller/AdminController.js"
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
AdminRouter.post("/all-patients", authAdmin, allPatients);
AdminRouter.post("/all-patients/id", authAdmin, onePatient);
AdminRouter.post("/add-patient", authAdmin, addPatient);
AdminRouter.post("/update-patient", authAdmin, updatePatient);
AdminRouter.delete("/delete-patient/:id", authAdmin, deletePatient);
AdminRouter.delete("/delete-doctor/:id",authAdmin,deleteDoctor);





