import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from "react-bootstrap"
import { LanguageContext } from '../../../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  let token = localStorage.getItem("token");

  const { daysOfWeek, lang, darkMode } = useContext(LanguageContext)
  const months = {
    az: ["", "Yan", "Fev", "Mar", "Apr", "May", "İyun", "İyul", "Avq", "Sen", "Okt", "Noy", "Dek"],
    en: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    ru: ["", "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]
  };

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_")
    return dateArray[0] + " " + months[lang][Number(dateArray[1])] + " " + dateArray[2]
  }
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

  const cancelAppointment = async (appointmentId) => {

    try {

      const { data } = await axios.post("http://localhost:3000/users/cancel-appointment", { appointmentId }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }

  }

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div className="container mt-5">
      <h2 className={`text-center mb-4 ${darkMode ? "text-light" : "text-muted"}`}>
        {lang === "az" ? "Rezervasiyalarım" : lang === "ru" ? "Мои бронирования" : "My Appointments"}
      </h2>

      <Helmet>
        <title>
          Appointments
        </title>
      </Helmet>
      <div className="row mb-3" style={{ padding: "4px" }} >
        {appointments.length > 0 ? (
          appointments.map((item, index) => (
            <div className="col-12 mb-4" key={index} >
              <div className={`d-flex flex-column flex-md-row align-items-start gap-4 p-3 border rounded-3 shadow-sm ${darkMode ? "bg-dark text-light" : "bg-light"}`}>
                <div className="d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
                  <img
                    className="img-fluid"
                    src={item.docData.profileImage}
                    alt={`Dr. ${item.docData.firstName}`}
                    style={{ objectFit: 'cover', borderRadius: '8px', width: '80px', height: '80px' }}
                  />
                </div>
                <div className="flex-grow-1">
                  <h5 className={`${darkMode ? "text-light" : "text-dark"} fw-semibold`}>Dr. {item.docData.firstName}</h5>
                  <p className={`${darkMode ? "text-secondary" : "text-muted"}`}>{item.docData.specialty}</p>
                  <p className={`${darkMode ? "text-secondary" : "text-muted"}`}>
                    <span className="fw-medium">{lang === "az" ? "Tarix və Saat" : lang === "ru" ? "Дата и Время" : "Date & Time"}:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}
                  </p>
                </div>

                {!item.cancelled && !item.isCompleted && (
                  <Button
                    variant='warning'
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'red'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                    onClick={() => cancelAppointment(item._id)}
                  >
                    {lang === "az" ? "Ləğv et" : lang === "ru" ? "Отменить запись" : "Cancel appointment"}
                  </Button>
                )}

                {item.cancelled && (
                  <Button variant='danger' style={{ backgroundColor: "#fff", border: "2px solid red", color: "red" }}>
                    {lang === "az" ? "Rezervasiya ləğv edildi" : lang === "ru" ? "Запись отменена" : "Appointment cancelled"}
                  </Button>
                )}
                {
                  item.isCompleted && (
                    <Button variant='success' style={{ backgroundColor: "#fff", border: "2px solid green", color: "green" }}>
                      {lang === "az" ? "Tamamlandı" : lang === "ru" ? "Завершено" : "Completed"}
                    </Button>
                  )


                }

              </div>
            </div>
          ))
        ) : (
          <div className="col-12" style={{ height: "35vh" }}>
            <div className="alert alert-warning text-center" role="alert">
              {lang === "az" ? "Sizin heç bir rezervasiyanız yoxdur." : lang === "ru" ? "У вас нет записей на прием." : "You have no appointments scheduled."}
            </div>
          </div>
        )}
      </div>
    </div>
  );

}
export default MyAppointments;
