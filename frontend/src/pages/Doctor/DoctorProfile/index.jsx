import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"
import axios from "axios"
function DoctorProfile() {
  const [profileData, setProfileData] = useState(false)
  const [dToken,setDToken] = useState(localStorage.getItem("doctorToken" ? localStorage.getItem("doctorToken") : ""))
  
  
  const getProfileData = async () => {
    try {

      const { data } = axios.get("http://localhost:3000/doctors/profile", {
        headers: {
          Authorization: `Bearer ${dToken}`,
        },
      })
      console.log(data)
      
      if(data.success){
        setProfileData(data.profileData)
        console.log(data.profileData)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() =>{
      getProfileData()
    
  },[])
  return (
    <div style={{ marginTop: "100px" }}>
      Doctor Profile
    </div>
  )
}

export default DoctorProfile
