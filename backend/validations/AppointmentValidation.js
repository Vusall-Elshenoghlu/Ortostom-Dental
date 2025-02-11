import Joi from "joi";

export const AppointmentValidationSchema = Joi.object({
    patientName: Joi.string().min(3).max(50).required().trim(),
    dentistName: Joi.string().min(3).max(50).required().trim(),  
    email: Joi.string().email().required().trim(),
    phone: Joi.string().min(8).max(15).required().trim(),
    appointmentDate: Joi.date().required(),
    time: Joi.string().min(5).max(5).required(),
    status: Joi.string().valid('pending', 'confirmed', 'cancelled').default('pending'),
    notes: Joi.string().max(500).optional(),
    reservationCode: Joi.string().min(6).max(12).optional(),
    createdAt: Joi.date().default(Date.now), 
});

export const validateAppointment = (data) => {
    return AppointmentValidationSchema.validate(data);
};
