import { DoctorModel } from "../model/DoctorModel.js";

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
  },}


export const changeAvailability = async (req,res) =>{
  try{

    const {docId} = req.body

    const docData = await DoctorModel.findById(docId)
    await DoctorModel.findByIdAndUpdate(docId,{available: !docData.available })
    res.json({success:true,message:"Availablity has changed...."})

  }catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
  }
}