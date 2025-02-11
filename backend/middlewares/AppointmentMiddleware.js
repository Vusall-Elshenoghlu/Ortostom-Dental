import { AppointmentValidationSchema } from "../validations/AppointmentValidation.js";

export const AppointmentMiddleware = (req, res, next) => {
    const { error } = AppointmentValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};
