import { validateDoctor } from "../validations/DoctorValidation.js";

export const doctorValidationMiddleware = (req, res, next) => {
  const { error } = validateDoctor(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
