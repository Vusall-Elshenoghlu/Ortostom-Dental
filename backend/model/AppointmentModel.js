import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    patientName: { type: String, required: true, trim: true },  
    dentistName: { type: String, required: true, trim: true },  
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    appointmentDate: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    notes: { type: String, trim: true },
    reservationCode: { type: String, required: true }, 
    createdAt: { type: Date, default: Date.now },
});

const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);
export default AppointmentModel;
