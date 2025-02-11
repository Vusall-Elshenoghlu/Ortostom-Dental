import express from 'express';
import { DoctorController } from '../controller/DoctorController.js';
import { doctorValidationMiddleware } from '../middlewares/DoctorMiddleware.js';

const DoctorRouter = express.Router();

DoctorRouter.get('/', DoctorController.getAllDoctors);

DoctorRouter.get('/:id', DoctorController.getDoctorById);

DoctorRouter.post('/', doctorValidationMiddleware, DoctorController.createDoctor);

DoctorRouter.put('/:id', doctorValidationMiddleware, DoctorController.updateDoctor);

DoctorRouter.delete('/:id', DoctorController.deleteDoctor);

export default DoctorRouter;
