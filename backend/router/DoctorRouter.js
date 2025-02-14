import express from 'express';
import { DoctorController } from '../controller/DoctorController.js';

export const DoctorRouter = express.Router();

DoctorRouter.get('/', DoctorController.getAllDoctors);

DoctorRouter.get('/:id', DoctorController.getDoctorById);




