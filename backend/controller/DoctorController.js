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
  },

  createDoctor: async (req, res) => {
    try {
      const newDoctor = new DoctorModel(req.body);
      await newDoctor.save();
      res.status(201).json(newDoctor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateDoctor: async (req, res) => {
    try {
      const updatedDoctor = await DoctorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedDoctor) return res.status(404).json({ message: "Həkim tapılmadı." });
      res.status(200).json(updatedDoctor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteDoctor: async (req, res) => {
    try {
      const deletedDoctor = await DoctorModel.findByIdAndDelete(req.params.id);
      if (!deletedDoctor) return res.status(404).json({ message: "Həkim tapılmadı." });
      res.status(200).json({ message: "Həkim uğurla silindi." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
