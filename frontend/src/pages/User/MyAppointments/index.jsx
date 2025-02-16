import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  let token = localStorage.getItem("token");

  async function getUserAppointments() {
    try {
      const { data } = await axios.get("http://localhost:3000/users/list-appointment", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-muted">My Appointments</h2>

      <div className="row">
        {appointments.length > 0 ? (
          appointments.map((item, index) => (
            <div className="col-12 mb-4" key={index}>
              <div className="d-flex flex-column flex-md-row align-items-start gap-4 p-3 border rounded-3 shadow-sm bg-light">
                <div className="d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
                  <img
                    className="img-fluid"
                    src={item.docData.profileImage}
                    alt={`Dr. ${item.docData.firstName}`}
                    style={{ objectFit: 'cover', borderRadius: '8px', width: '80px', height: '80px' }}
                  />
                </div>
                <div className="flex-grow-1">
                  <h5 className="text-dark fw-semibold">Dr. {item.docData.firstName}</h5>
                  <p className="text-muted">{item.docData.specialty}</p>
                  <p className="text-muted">
                    <span className="fw-medium">Date & Time:</span> {item.slotDate} | {item.slotTime}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-warning text-center" role="alert">
              You have no appointments scheduled.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyAppointments;
