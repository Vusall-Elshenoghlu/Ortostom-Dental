import Joi from 'joi';

const doctorValidationSchema = Joi.object({
  firstName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  lastName: Joi.string().required(),
  specialty: Joi.string().required(),
  profileImage: Joi.string().uri(),
  experienceYears: Joi.number().required(),
  education: Joi.string(),
  ratings: Joi.number().min(0).max(5),
  certificates: Joi.array().items(
    Joi.object({
      title: Joi.string().required(),
      date: Joi.date().required(),
      organization: Joi.string().required()
    })
  ),
  availableTimes: Joi.array().required(),
  bio: Joi.string(),
  contact: Joi.string()
});

export const validateDoctor = (data) => {
  return doctorValidationSchema.validate(data);
};
