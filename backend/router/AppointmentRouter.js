import express from "express"
import { AppointmentController } from "../controller/AppointmentController.js"
import { AppointmentMiddleware } from "../middlewares/AppointmentMiddleware.js"
export const AppointmentRouter = express.Router()
AppointmentRouter.get("/",AppointmentMiddleware,AppointmentController.getAllAppointments)
AppointmentRouter.post("/",AppointmentController.createAppointment)
AppointmentRouter.get("/dates",AppointmentController.getReservedDates)
AppointmentRouter.delete("/:id",AppointmentController.deleteAppointment)