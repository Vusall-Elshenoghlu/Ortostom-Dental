import React, { useContext, useEffect, useState } from 'react'
import { toast } from "react-toastify"
import axios from "axios"
import { FaCalendar, FaRegCalendarCheck, FaTimes, FaUserMd } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { LanguageContext } from '../../../context/LanguageContext'
import { Helmet } from 'react-helmet-async'
function DashBoard() {
  const [dashData, setDashData] = useState(false)
  const [aToken, setAToken] = useState(localStorage.getItem("adminToken"))
  const navigate = useNavigate()
  const { darkMode } = useContext(LanguageContext)
  const getDashData = async () => {

    try {

      const { data } = await axios.get("http://localhost:3000/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${aToken}`,
        },
      });

      if (data.success) {
        setDashData(data.dashData)
        console.log(data)
        console.log(data.dashData)
      } else {
        toast.error(data.message)
      }


    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

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

  return dashData && (
    <div style={{ marginTop: "120px", marginLeft: "40px", }}>
      <Helmet>
        <title>
          Dashboard
        </title>
      </Helmet>
      <div className='d-flex flex-wrap g-3 gap-5'>

        <div
          className="d-flex align-items-center g-2 bg-white p-4 rounded gap-3"
          style={{
            minWidth: '13rem',
            borderWidth: '2px',
            borderColor: '#f7fafc',
            cursor: 'pointer',
            transition: 'all 0.2s',
            transform: 'scale(1)',
            height: "7rem",
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onClick={() => navigate("admin-doctors")}
        >
          <img style={{ width: "65px", height: "65px" }} src="../../../images/doctor.png" alt="" />
          <div>
            <p style={{ fontSize: "30px", fontWeight: "500", color: "black" }}>{dashData.doctors}</p>
            <p style={{ color: "gray", fontSize: "20px", fontWeight: "600" }}>Doctors</p>
          </div>
        </div>
        <div
          className="d-flex align-items-center g-2 bg-white p-4 rounded gap-3"
          style={{
            minWidth: '13rem',
            borderWidth: '2px',
            borderColor: '#f7fafc',
            cursor: 'pointer',
            transition: 'all 0.2s',
            transform: 'scale(1)',
            height: "7rem"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onClick={() => navigate("appointments")}

        >
          <FaRegCalendarCheck style={{ width: "65px", height: "65px", color: "black" }} />
          <div>
            <p style={{ fontSize: "30px", fontWeight: "500", color: "black" }}>{dashData.appointments}</p>
            <p style={{ color: "gray", fontSize: "20px", fontWeight: "600" }}>Appointments</p>
          </div>
        </div>
        <div
          className="d-flex align-items-center g-2 bg-white p-4 rounded gap-3"
          style={{
            minWidth: '13rem',
            borderWidth: '2px',
            borderColor: '#f7fafc',
            cursor: 'pointer',
            transition: 'all 0.2s',
            transform: 'scale(1)',
            height: "7rem"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onClick={() => navigate("all-patients")}
        >
          <img style={{ width: "65px", height: "65px" }} src="../../../images/hospitalisation.png" alt="" />
          <div>
            <p style={{ fontSize: "30px", fontWeight: "500", color: "black" }}>{dashData.patients}</p>
            <p style={{ color: "gray", fontSize: "20px", fontWeight: "600" }}>Patients</p>
          </div>
        </div>
      </div>

      <div className="card shadow-sm mt-4">
        <div className="card-header d-flex align-items-center gap-2">
          <img src="../../../images/clipboard.png" alt="Bookings" width="30" height="30" />
          <h5 className="m-0">Latest Bookings</h5>
        </div>
        <div className="list-group list-group-flush">
          {dashData.latestAppointments.map((item, index) => (
            <div key={index} className="list-group-item d-flex align-items-center gap-3">
              <img src={item.docData.profileImage} alt="Doctor" className="rounded-circle" width="50" height="50" />
              <div className="flex-grow-1">
                <p className="fw-medium m-0">Dr. {item.docData.firstName}</p>
                <p className="text-muted small m-0">{slotDateFormat(item.slotDate)}</p>
              </div>
              {
                item.cancelled
                  ? <p className="text-danger fs-6 fw-medium">Cancelled</p>
                  : item.isCompleted
                    ? <p className="text-success fs-6 fw-medium">Completed</p>
                    : <button className="btn btn-secondary btn-sm" onClick={() => cancelAppointment(appointment._id)}><FaTimes /></button>
              }
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default DashBoard
