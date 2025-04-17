import React, { useEffect, useState } from 'react'
import axios from "axios"
import { toast } from "react-toastify"
import { FaCheck, FaChess, FaTimes, FaUniversalAccess } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async';

function DoctorAppointments() {

  const [appointments, setAppointments] = useState([])
  const [dToken, setDToken] = useState(localStorage.getItem("doctorToken") ? localStorage.getItem("doctorToken") : "")
  const getAppointments = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/doctors/appointments",
        {},
        {
          headers: {
            Authorization: `Bearer ${dToken}`,
          },
        }
      );

      if (data.success) {
        // console.log(data.appointments)
        setAppointments(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (dToken) {
      getAppointments()
    }
  }, [dToken])

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

  const completeAppointment = async (appointmentId) => {
    try {

      const { data } = await axios.post("http://localhost:3000/doctors/complete-appointment",
        { appointmentId },
        {
          headers: {
            Authorization: `Bearer ${dToken}`,
          },
        }
      )
      if (data.success) {
        toast.success(data.message)
        getAppointments()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {

      const { data } = await axios.post("http://localhost:3000/doctors/cancel-appointment",
        { appointmentId },
        {
          headers: {
            Authorization: `Bearer ${dToken}`,
          },
        }
      )
      if (data.success) {
        toast.success(data.message)
        getAppointments()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div style={{ marginTop: "100px",marginLeft:"50px" }}>
      <Helmet>
        <title>
          Doctor-Appointments
        </title>
      </Helmet>
      <div className="container my-5" style={{ width: "90vh", }}>
        <h1 className='text-center'>All Appointments</h1>
        <div className="bg-white border rounded small overflow-auto mt-4" style={{ maxHeight: "80vh", minHeight: "50vh" }}>
          <table className="table table-bordered text-center">
            <thead className="bg-primary text-white">
              <tr>
                <th>#</th>
                <th>Patient</th>
                <th>Age</th>
                <th>Date & Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                appointments.reverse().map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.userData.name + " " + item.userData.surname}</td>
                    <td>{calculateAge(item.userData.dob)}</td>
                    <td>{slotDateFormat(item.slotDate)},{item.slotTime}</td>
                    {
                      item.cancelled
                        ? <p style={{color:"red"}}>Cancelled</p>
                        : item.isCompleted
                          ? <p style={{color:'green'}}>Completed</p>
                          :

                          <td className='d-flex gap-2'>
                            <button className="btn btn-secondary btn-sm" onClick={() => cancelAppointment(item._id)}><FaTimes /></button>
                            <button className='btn btn-success btn-sm' onClick={() => completeAppointment(item._id)}><FaCheck /></button>
                          </td>
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}


export default DoctorAppointments
