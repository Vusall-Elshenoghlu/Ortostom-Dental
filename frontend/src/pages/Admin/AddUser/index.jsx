import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const AddUser = () => {
    const [patient, setPatient] = useState({ name: "", surname: "", email: "", phone: "", dob: "", password: "" });
    const navigate = useNavigate();
    const aToken = localStorage.getItem("adminToken");

    const handleChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/admin/add-patient", patient, {
                headers: { Authorization: `Bearer ${aToken}` },
            });
            toast.success("Patient added successfully");
            navigate("/dashboard/all-patients");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow-lg" style={{marginTop:"150px",marginLeft:"300px",width:"500px"}}>
                <h2 className="text-center mb-4">Add Patient</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Name" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="surname" placeholder="Surname" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" name="email" placeholder="Email" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="phone" placeholder="Phone" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="date" className="form-control" name="dob" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
