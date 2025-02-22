import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

const Users = () => {
    const [patients, setPatients] = useState([]);
    const [aToken, setAToken] = useState(localStorage.getItem("adminToken"));
    const navigate = useNavigate();

    const getAllPatients = async () => {
        try {
            const { data } = await axios.post("http://localhost:3000/admin/all-patients", {}, {
                headers: {
                    Authorization: `Bearer ${aToken}`,
                },
            });
            
            if (data.success) {
                setPatients(data.patients);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const deletePatient = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:3000/admin/delete-patient/${id}`, {
                        headers: {
                            Authorization: `Bearer ${aToken}`,
                        },
                    });
                    toast.success("Patient deleted successfully");
                    getAllPatients();
                } catch (error) {
                    toast.error(error.message);
                }
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    };

    useEffect(() => {
        if (aToken) {
            getAllPatients();
        }
    }, [aToken]);

    return (
        <div style={{ marginTop: "100px", marginLeft: "150px" }}>
            <h2 className="mb-4 text-center">All Patients</h2>
            <button onClick={() => navigate("/dashboard/add-patient")} className="btn btn-primary mb-3">Add Patient</button>
            <table className="table table-bordered table-striped" style={{ width: "100%", minWidth: "800px" }}>
                <thead className="table-dark text-center">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {patients.length > 0 ? (
                        patients.map((patient, index) => (
                            <tr key={patient._id}>
                                <td>{index + 1}</td>
                                <td>{patient.name} {patient.surname}</td>
                                <td>{patient.email}</td>
                                <td>{patient.phone}</td>
                                <td>{new Date().getFullYear() - new Date(patient.dob).getFullYear()}</td>
                                <td>
                                    <button className="btn btn-warning me-2" onClick={() => navigate(`/dashboard/edit-patient/${patient._id}`)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => deletePatient(patient._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center py-3">No patients available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
