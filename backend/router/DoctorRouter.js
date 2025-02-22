import express from 'express';
import { appointmentCompleted, appointmentsDoctor, cancelAppointmentForDoctor, DoctorController, doctorDashboard, doctorProfile, loginDoctor, updateDoctdotProfile } from '../controller/DoctorController.js';
import { AuthDoctor } from '../middlewares/AuthDoctor.js';

export const DoctorRouter = express.Router();

DoctorRouter.get('/', DoctorController.getAllDoctors);

DoctorRouter.get('/:id', DoctorController.getDoctorById);
DoctorRouter.post('/login',loginDoctor);
DoctorRouter.post('/appointments',AuthDoctor, appointmentsDoctor);
DoctorRouter.post('/complete-appointment',AuthDoctor, appointmentCompleted);
DoctorRouter.post('/cancel-appointment',AuthDoctor, cancelAppointmentForDoctor);
DoctorRouter.post('/dashboard', AuthDoctor, doctorDashboard);  
DoctorRouter.post('/profile', AuthDoctor, doctorProfile);
DoctorRouter.post('/update-profile', AuthDoctor, updateDoctdotProfile);  




