import mongoose from 'mongoose';

export const doctorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  specialty: { type: String, required: true },
  profileImage: { type: String }, 
  experienceYears: { type: Number, required: true }, 
  education: { type: String }, 
  ratings: { type: Number, default: 0 }, 
  certificates: [
    {
      title: { type: String, required: true }, 
      date: { type: Date, required: true }, 
      organization: { type: String, required: true }, 
    }
  ],
  availableTimes: { type: Array, required: true }, 
  bio: { type: String }, 
  contact: { type: String }, 
});

export const DoctorModel = mongoose.model('Doctor', doctorSchema);
