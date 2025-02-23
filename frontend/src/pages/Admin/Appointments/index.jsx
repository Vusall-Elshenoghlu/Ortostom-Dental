import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";

const Appointments = () => {
  const slotDateFormat = (slotDate) => {
    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (!slotDate) {
      return "Invalid Date";  
    }

    const dateArray = slotDate.split("_");

    if (dateArray.length !== 3) {
      return "Invalid Date Format";  
    }

    return `${dateArray[0]} ${months[Number(dateArray[1])]} ${dateArray[2]}`;
  };



  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);

    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };

  const [appointments, setAppointments] = useState([]);
  const [aToken, setAToken] = useState(localStorage.getItem("adminToken"));

  const getAllAppointments = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/admin/all-appointments", {
        headers: {
          Authorization: `Bearer ${aToken}`,
        },
      });
      setAppointments(data.appointments);

      if (data.success) {
        setAppointments(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post("http://localhost:3000/admin/cancel-appointment", { appointmentId }, {
        headers: {
          Authorization: `Bearer ${aToken}`,
        },
      });


      if (data.success) {
        toast.success(data.message);
        getAllAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div style={{ marginTop: "100px", marginLeft: "10px" }}>
      <h2 className="mb-4 text-center">All Appointments</h2>
      <table className="table table-bordered table-striped" style={{ width: "100%", minWidth: "800px" }}>
        <thead className="table-dark text-center">
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "20%" }}>Patient</th>
            <th style={{ width: "10%" }}>Age</th>
            <th style={{ width: "15%" }}>Date & Time</th>
            <th style={{ width: "20%" }}>Doctor Name</th>
            <th style={{ width: "10%" }}>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {appointments.length > 0 ? (
            appointments.reverse().map((appointment, index) => (
              <tr key={appointment._id}>
                <td>{index + 1}</td>
                <td>{appointment.userData.name + " " + appointment.userData.surname}</td>
                <td>{calculateAge(appointment.userData.dob)}</td>
                <td>{slotDateFormat(appointment.slotDate)}, {appointment.slotTime}</td>
                <td style={{ display: "flex", justifyContent: "center" }}>
                  <img className="w-25 full-rounded-circle" style={{ marginRight: "50px" }} src={appointment.docData.profileImage} alt="" />
                  <p style={{ marginRight: "100px" }}>Dr.{appointment.docData.firstName}</p>
                </td>
                <td>
                  {
                    appointment.cancelled
                      ? <p className="text-danger fs-6 fw-medium">Cancelled</p>
                      : appointment.isCompleted
                        ? <p className="text-success fs-6 fw-medium">Completed</p>
                        : <button className="btn btn-secondary btn-sm" onClick={() => cancelAppointment(appointment._id)}><FaTimes /></button>
                  }
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-3">No appointments available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
