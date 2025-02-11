import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');
  const [reservationCode, setReservationCode] = useState('');

  useEffect(() => {
    // Görüş tarixləri və saatları gətirmək üçün API çağırışı
    axios.get('http://localhost:3000/appointments/')
      .then((response) => {
        setAppointments(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!patientName || !email || !selectedDate || !selectedTime) {
      alert('Zəhmət olmasa bütün sahələri doldurun');
      return;
    }

    const appointmentData = {
      patientName,
      email,
      appointmentDate: selectedDate,
      time: selectedTime
    };

    try {
      const response = await axios.post('/appointments', appointmentData);
      setReservationCode(response.data.reservationCode); // Yeni kodu əldə et
      alert('Rezervasiya təsdiq olundu! Kodunuz emailinizə göndəriləcək.');
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Appointment Booking</h2>
      
      {/* Rezervasiya formu */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label htmlFor="patientName">Ad və Soyad</label>
          <input 
            type="text" 
            className="form-control" 
            id="patientName" 
            value={patientName} 
            onChange={(e) => setPatientName(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="appointmentDate">Tarix</label>
          <input 
            type="date" 
            className="form-control" 
            id="appointmentDate" 
            value={selectedDate} 
            onChange={handleDateChange} 
            required 
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="appointmentTime">Saat</label>
          <select 
            className="form-select" 
            id="appointmentTime" 
            value={selectedTime} 
            onChange={handleTimeChange} 
            required
          >
            <option value="">Saat seçin</option>
            {appointments.filter(app => app.appointmentDate === selectedDate) 
              .map(app => (
                <option key={app.time} value={app.time}>
                  {app.time}
                </option>
              ))
            }
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-4">Rezervasiya et</button>
      </form>

      {reservationCode && (
        <div> 
          <h3>Rezervasiya kodu: {reservationCode}</h3>
          <p>Bu kodu klinikaya gələndə təqdim edin.</p>
        </div>
      )}
    </div>
  );
};

export default UserAppointment;
