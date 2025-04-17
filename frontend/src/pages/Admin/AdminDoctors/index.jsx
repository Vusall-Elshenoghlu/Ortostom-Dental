import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet-async';
import { Button } from 'react-bootstrap';
import Swal from "sweetalert2"

function AdminDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('adminToken');

  async function changeAvailability(docId) {
    try {

      const { data } = await axios.post("http://localhost:3000/admin/change-availability", { docId }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (data.success) {
        toast.success(data.message)
        getAllDoctors()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }


  function deleteDoctor(doctorId) {
    console.log(doctorId)
    axios.delete("http://localhost:3000/admin/delete-doctor/" + doctorId, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        toast.success(res.data.message)
        setDoctors(doctors.filter(doctor => doctor._id !== doctorId))
        setLoading(false)
      }).catch((err) => {
        setError(err)
        setLoading(false)
      })



  }

  function handleDelete(doctorId){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDoctor(doctorId)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
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
    <div style={{ marginTop: "100px" }}>
      <Helmet>
        <title>
          Doctors
        </title>
      </Helmet>
      <h2>All Doctors</h2>
      <div className="container">
        <div className="row">
          {doctors.map((doctor, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="card">
                <img className="card-img-top" src={doctor.profileImage} alt="doctor" />
                <div className="card-body d-flex flex-column" style={{ justifyContent: "space-between" }}>
                  <div>
                    <h5 className="card-title">{doctor.firstName} {doctor.lastName}</h5>
                    <p className="card-text">{doctor.specialty}</p>
                    <div>
                      <div>
                        <input onChange={() => changeAvailability(doctor._id)} type="checkbox" checked={doctor.available} />
                        <p>Available</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant='danger'
                    onClick={() => handleDelete(doctor._id)}
                    style={{
                      height: "50px",
                      width: "100%",  // Düymənin eni bütün kartı əhatə edəcək
                      borderRadius: "5px",  // Küncləri yuvarlaqlaşdırır
                      padding: "10px",  // İçəridəki mətni mərkəzə yerləşdirmək üçün
                      fontWeight: "bold",  // Mətni qalınlaşdırmaq
                      textTransform: "uppercase",  // Mətnin hərflərini böyük edir
                      transition: "all 0.3s ease",  // Hover effekti üçün keçid əlavə edir
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#d9534f"}  // Hover zamanı rəngi dəyişir
                    onMouseOut={(e) => e.target.style.backgroundColor = "#dc3545"}  // Mouse çıxdıqda əvvəlki rəngə qayıdır
                  >
                    Delete Doctor
                  </Button>                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDoctors;
