import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaRegCalendarCheck, FaTimes, FaUserMd } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet-async';


function DoctorDashBoard() {
  const [dToken, setDToken] = useState(localStorage.getItem("doctorToken") ? localStorage.getItem("doctorToken") : "")
  const [dashData, setDashData] = useState(false)
  const navigate = useNavigate()

  const getDashData = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/doctors/dashboard",  
        { docId: dToken },  
        {
          headers: {
            Authorization: `Bearer ${dToken}`,  
          },
        }
      );
      // console.log(data);
      if (data.success) {
        console.log(data.dashData);
        setDashData(data.dashData);  
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
      getDashData()
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


  return dashData && (
      <div style={{ marginTop: "110px", marginLeft: "40px" }}>
        <Helmet>
          <title>
            Doctor-Dashboard
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
              height: "7rem"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img style={{ width: "65px", height: "65px" }} src="../../../images/hospitalisation.png" alt="" />
            <div>
              <p style={{ fontSize: "30px", fontWeight: "500" }}>{dashData.patients}</p>
              <p style={{ color: "gray", fontSize: "20px", fontWeight: "600" }}>Patients</p>
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
            onClick={() =>navigate("appointments")}
  
          >
            <FaRegCalendarCheck style={{ width: "65px", height: "65px" }} />
            <div>
              <p style={{ fontSize: "30px", fontWeight: "500" }}>{dashData.appointments}</p>
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
            onClick={() =>navigate("profile")}
  
          >
            <FaUserMd style={{ width: "65px", height: "65px" }} />
            <div>
              <p style={{ color: "gray", fontSize: "20px", fontWeight: "600" }}>Profile</p>
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
                <p>{item.userData.name + " " + item.userData.surname}</p>
                <div className="flex-grow-1">
                  <p className="text-muted small ">{slotDateFormat(item.slotDate)}</p>
                </div>
                {item.cancelled ? (
                  <span className="text-danger fw-bold">Cancelled</span>
                ) : (
                  <button className="btn btn-outline-danger btn-sm">
                    <FaTimes />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
  
      </div>
    )
  }
  
  export default DoctorDashBoard
  