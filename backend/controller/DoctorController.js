import { DoctorModel } from "../model/DoctorModel.js";
import { AppointmentModel } from "../model/AppointmentModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import mongoose from 'mongoose';

export const DoctorController = {
  getAllDoctors: async (req, res) => {
    try {
      const doctors = await DoctorModel.find();
      res.status(200).json(doctors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getDoctorById: async (req, res) => {
    try {
      const doctor = await DoctorModel.findById(req.params.id);
      if (!doctor) return res.status(404).json({ message: "Həkim tapılmadı." });
      res.status(200).json(doctor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
}


export const changeAvailability = async (req, res) => {
  try {

    const { docId } = req.body

    const docData = await DoctorModel.findById(docId)
    await DoctorModel.findByIdAndUpdate(docId, { available: !docData.available })
    res.json({ success: true, message: "Availablity has changed...." })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

//API for doctor login

export const loginDoctor = async (req, res) => {

  try {

    const {email, password} = req.body
    const doctor = await DoctorModel.findOne({email})
    if(!doctor){
      return res.json({success:false,message:"Invalid credencials.."})
    }

    const isMatch = await bcrypt.compare(password,doctor.password)

    if (isMatch){

      const token = jwt.sign({id:doctor._id},process.env.DOCTOR_JWT_SECRET)

      res.json({success:true,token})

    }else{
      return res.json({success:false,message:""})
    }

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }

}

//API to get doctor appointments to doctorPanel

export const appointmentsDoctor = async (req, res) => {
  try {
    console.log(req.body)
    const { docId } = req.body;
    if (!mongoose.Types.ObjectId.isValid(docId)) {
      return res.status(400).json({ success: false, message: "Invalid doctor ID" });
    }
    
    const appointments = await AppointmentModel.find({ docId }); 
    res.json({ success: true, appointments });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//API to mark appointment completed for Doctor panel

export const appointmentCompleted = async (req,res) =>{

  try{

    const {docId,appointmentId} = req.body

    const appointmentData = await AppointmentModel.findById(appointmentId)

    if(appointmentData && appointmentData.docId === docId){
      await AppointmentModel.findByIdAndUpdate(appointmentId,{isCompleted: true})
      return res.json({success:true,message:"Appointment Completed..."})
    } else{
      return res.json({success :false,message:"Mark failed..."})
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }

}

//API to cancel appointment for Doctor panel

export const cancelAppointmentForDoctor = async (req,res) =>{

  try{

    const {docId,appointmentId} = req.body

    const appointmentData = await AppointmentModel.findById(appointmentId)

    if(appointmentData && appointmentData.docId === docId){
      await AppointmentModel.findByIdAndUpdate(appointmentId,{cancelled: true})
      return res.json({success:true,message:"Appointment cancelled successfully"})
    } else{
      return res.json({success :false,message:"Cancellation failed..."})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }

}


export const doctorDashboard = async (req, res) => {
  try {
    const { docId } = req.body;  
    console.log("Fetching dashboard data for doctor with ID:", docId); 

    const appointments = await AppointmentModel.find({ docId });
    let patients = [];

    appointments.map((item) => {
      if (!patients.includes(item.userId)) {
        patients.push(item.userId);
      }
    });

    const dashData = {
      appointments: appointments.length,
      patients: patients.length,
      latestAppointments: appointments.reverse().slice(0, 5), 
    };

    console.log("Dashboard data:", dashData);  
    res.json({ success: true, dashData });  
  } catch (error) {
    console.log("Error in doctorDashboard:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//API to get Doctor Profile to doctor panel

export const doctorProfile = async (req,res) =>{

  try{
    const {docId} = req.body
    const profileData = await DoctorModel.findById(docId).select("-password")

    res.json({success:true,profileData})


  }catch (error) {
    console.log("Error in doctorDashboard:", error);
    res.status(500).json({ success: false, message: error.message });
  }
}
//API for update doctor data in doctor panel
export const updateDoctdotProfile = async (req, res) => {
  try {
      const { docId, available, bio } = req.body;

      const updatedDoctor = await DoctorModel.findOneAndUpdate(
          { _id: docId },  
          { available, bio },  
          { new: true }  
      );

      if (!updatedDoctor) {
          return res.status(404).json({ success: false, message: "Doctor not found" });
      }

      res.json({ success: true, message: "Profile updated...", doctor: updatedDoctor });

  } catch (error) {
      console.log("Error in doctorDashboard:", error);
      res.status(500).json({ success: false, message: error.message });
  }
};
