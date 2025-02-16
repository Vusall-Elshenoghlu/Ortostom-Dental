import mongoose from 'mongoose';

export const doctorSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    specialty: { type: String, required: true },
    profileImage: { type: String },
    experienceYears: { type: Number, required: true },
    education: { type: String },
    ratings: { type: Number, default: 0 },
    certificates: { type: Array, default: [] },
    availableTimes: { type: Array, required: true },
    available: { type: Boolean, default: true },
    bio: { type: String },
    contact: { type: String },
    slots_booked: { type: Object, default: {} }
  },
  { minimize: false } // Boş obyektlərin saxlanmasını təmin edir
);

export const DoctorModel = mongoose.model('Doctor', doctorSchema);
