import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap stilini daxil edirik

function AdminDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('adminToken'); 

  async function changeAvailability(docId){
    try{

      const {data} = await axios.post("http://localhost:3000/admin/change-availability",{docId},{
        headers: { 
          'Authorization': `Bearer ${token}` 
        }
      })
      if(data.success){
        toast.success(data.message)
        getAllDoctors()
      }else{
        toast.error(data.message)
      }
    
    }catch(error){
      toast.error(error.message)
    }
  }

  function getAllDoctors() {
    axios.post("http://localhost:3000/admin/all-doctors", {}, { 
      headers: { 
        'Authorization': `Bearer ${token}` 
      }
    })
    .then((res) => {
      console.log(res.data);
      if (res.data.success) {
        setDoctors(res.data.doctors);
      } else {
        toast.error(res.data.message);
      }
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
    });
  }
  
  useEffect(() => {
    if (token) {
      getAllDoctors();
    } else {
      toast.error("Token not found");
    }
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    toast.error(error.message);
  }

  return (
    <div style={{marginTop:"100px"}}>
      <h2>All Doctors</h2>
      <div className="container">
        <div className="row">
          {doctors.map((doctor, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img className="card-img-top" src={doctor.profileImage} alt="doctor" />
                <div className="card-body">
                  <h5 className="card-title">{doctor.firstName} {doctor.lastName}</h5>
                  <p className="card-text">{doctor.specialty}</p>
                  <div>
                    <div>
                      <input onChange={() =>changeAvailability(doctor._id)} type="checkbox" checked = {doctor.available} />
                      <p>Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDoctors;
