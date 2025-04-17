import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { LanguageContext } from "../../../context/LanguageContext";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";

const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [doctors, setDoctors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { doctorss, lang, translations, daysOfWeek, darkMode } = useContext(LanguageContext);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [userAppointments, setUserAppointments] = useState([])
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:3000/doctors/");
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const fetchAppointments = async () => {
    if (!token) return;
    try {
      const { data } = await axios.get("http://localhost:3000/users/list-appointment", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.success) {
        setUserAppointments(data.appointments);
        console.log(data.appointments)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  async function getAvailableSlots() {
    if (!doctor || !doctor.slots_booked) {
      return;
    }

    setDocSlots([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        const slotDate = day + "_" + month + "_" + year;
        const slotTime = formattedTime;

        const isSlotAvailable = doctor.slots_booked[slotDate] && doctor.slots_booked[slotDate].includes(slotTime) ? false : true;

        if (isSlotAvailable) {
          timeSlots.push({
            dateTime: new Date(currentDate),
            time: formattedTime,
          });
        }

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  }


  useEffect(() => {
    axios
      .get(`http://localhost:3000/doctors/${id}`)
      .then((response) => {
        setDoctor(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Həkim məlumatları alınarkən xəta baş verdi");
        setLoading(false);
      });
  }, [id]);

  const bookAppointment = async () => {
    if (!token) {
      toast.warn(`${lang == "az" ? "Rezervasiya üçün daxil olun" : lang == "en" ? "Please Login to book Appointment" : "Bойдите в аккаунт, чтобы записаться на прием"}`)
      return navigate("/login")
    }

    try {
      console.log(doctor.slots_booked);


      const date = docSlots[slotIndex][0].dateTime
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      const slotDate = day + "_" + month + "_" + year

      const isTimeBooked = userAppointments.some(app => app.slotDate === slotDate && app.slotTime === slotTime);
      if (isTimeBooked) {
        return toast.warn(`${lang == "az" ? "Bu saat üçün artıq rezervasiyanız var!" : lang == "en" ? "You already have an appointment at this time!" : "У вас уже есть запись на это время!"}`);
      }
      const docId = doctor._id
      const { data } = await axios.post("http://localhost:3000/users/book-appointment", { docId, slotDate, slotTime }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (data.success) {
        toast(data.message)
        fetchDoctors()
        navigate("/my-appointments")
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getAvailableSlots();
  }, [doctor]);

  useEffect(() => {
    fetchAppointments()
  }, [token])

  if (loading) {
    return <p>Yüklənir...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      <Helmet>
        <title>
          Appointment
        </title>
      </Helmet>
      <h1 className="my-4">{doctor.firstName} {doctor.lastName}</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={doctor.profileImage || "default-image.jpg"} />
            <Card.Body style={{ backgroundColor: `${darkMode ? "#333" : "white"}`, color: `${darkMode ? "white" : "black"}` }}>
              <Card.Title>{doctor.specialty}</Card.Title>
              <Card.Text>{doctor.bio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <h4>{doctorss[lang].experience}: {doctor.experienceYears} {doctorss[lang].year}</h4>
          <h4>{doctorss[lang].education}: {doctor.education}</h4>
          <h4>{translations[lang].contact}: {doctor.contact}</h4>
          <h5>{doctorss[lang].certificart}:</h5>
          <ul>
            {doctor.certificates.map((certificate, index) => (
              <li key={index}>
                <strong>{certificate.title}</strong> - {new Date(certificate.date).toLocaleDateString()} - {certificate.organization}
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-start gap-3 overflow-auto mt-4 p-2">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-4 px-3 rounded-pill ${slotIndex === index
                    ? "bg-primary text-white"
                    : darkMode
                      ? "border border-secondary bg-dark"
                      : "border border-secondary bg-light"
                    }`}

                  style={{ minWidth: "4rem", cursor: "pointer", color: `${darkMode ? "white" : "black"}` }}
                >
                  <p className="mb-0 fw-bold">
                    {item[0] && daysOfWeek[lang][item[0].dateTime.getDay()]}
                  </p>
                  <p className="mb-0">{item[0] && item[0].dateTime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className={`d-flex align-items-center gap-3 w-100 overflow-auto mt-4`}>
            {docSlots.length > 0 &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  style={{ cursor: "pointer", backgroundColor: `${darkMode ? "#333" : "white"}`, color: `${darkMode ? "white" : "#333"}` }}
                  className={`small fw-light flex-shrink-0 px-3 py-2 rounded-pill ${item.time === slotTime
                      ? "bg-primary text-white"
                      : darkMode
                        ? "border border-secondary bg-dark"
                        : "border border-secondary bg-light"

                    } "text-muted border border-secondary"`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          <Button className="mt-3 mb-1" variant="primary" onClick={bookAppointment}>{doctorss[lang].appoint}</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorDetail;
