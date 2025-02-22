import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const EditUser = () => {
    const [patient, setPatient] = useState({ name: "", surname: "", email: "", phone: "", dob: "", password: "" });
    const { id } = useParams();
    const navigate = useNavigate();
    const aToken = localStorage.getItem("adminToken");

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const { data } = await axios.post(
                    "http://localhost:3000/admin/all-patients/id",
                    { id },
                    { headers: { Authorization: `Bearer ${aToken}` } }
                );

                if (data.success) {
                    setPatient(data.patient);
                } else {
                    toast.error("Failed to fetch patient data");
                }
            } catch (error) {
                toast.error("Error fetching patient data: " + error.message);
            }
        };

        fetchPatient();
    }, [id]);

    const handleChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3000/admin/update-patient",
                {
                    id,
                    name: patient.name,
                    surname: patient.surname,
                    email: patient.email,
                    address: patient.address,
                    gender: patient.gender,
                    dob: patient.dob,
                    phone: patient.phone,
                    password: patient.password
                },
                { headers: { Authorization: `Bearer ${aToken}` } }
            );
    
            if (data.success) {
                toast.success("Patient updated successfully");
                navigate("/dashboard/all-patients");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Error updating patient: " + error.message);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row w-100 justify-content-center" style={{marginTop:"100px",marginLeft:"300px"}}>
                    <div className="card p-4 shadow-lg border-0 rounded-4">
                        <h2 className="text-center mb-4">Edit Patient</h2>
                        <form onSubmit={handleSubmit} style={{width:"500px"}}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={patient.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Surname</label>
                                <input type="text" className="form-control" name="surname" value={patient.surname} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={patient.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" name="phone" value={patient.phone} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" name="dob" value={patient.dob} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" value={patient.password} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Update</button>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default EditUser;