import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify"
import axios from "axios"
import { FaCalendar, FaRegCalendarCheck, FaUserMd } from "react-icons/fa"
function DashBoard() {
  const [dashData, setDashData] = useState(false)
  const [aToken, setAToken] = useState(localStorage.getItem("adminToken"))

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
  return dashData && (
    <div style={{ marginTop: "90px", marginLeft: "40px" }}>

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
            height:"7rem"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img style={{ width: "65px", height: "65px" }} src="../../../images/doctor.png" alt="" />
          <div>
            <p style={{fontSize:"30px",fontWeight:"500"}}>{dashData.doctors}</p>
            <p style={{color:"gray",fontSize:"20px",fontWeight:"600"}}>Doctors</p>
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
            height:"7rem"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <FaRegCalendarCheck style={{ width: "65px", height: "65px" }} />
          <div>
            <p style={{fontSize:"30px",fontWeight:"500"}}>{dashData.appointments}</p>
            <p style={{color:"gray",fontSize:"20px",fontWeight:"600"}}>Appointments</p>
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
            height:"7rem"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img style={{ width: "65px", height: "65px" }} src="../../../images/hospitalisation.png" alt="" />
          <div>
            <p style={{fontSize:"30px",fontWeight:"500"}}>{dashData.patients}</p>
            <p style={{color:"gray",fontSize:"20px",fontWeight:"600"}}>Patients</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          
        </div>
      </div>

    </div>
  )
}

export default DashBoard
