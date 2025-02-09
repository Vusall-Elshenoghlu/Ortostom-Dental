import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    notes: { type: String, trim: true },
    reservationCode: { type: String, required: true }, // Random rezervasiya kodu əlavə olunur
    createdAt: { type: Date, default: Date.now },
});

const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);
export default AppointmentModel;
