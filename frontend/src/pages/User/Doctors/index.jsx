import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import DoctorCard from "../../../components/User/DoctorCard";
import { LanguageContext } from "../../../context/LanguageContext";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const {doctorss,lang} = useContext(LanguageContext)

  useEffect(() => {
    // Get doctors from API
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:3000/doctors/");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="container py-5"  id="doctors">
        <h1 className="text-center">{doctorss[lang].doctors}</h1>
        <br />
      <Row>
        {doctors.map((doctor) => (
          <Col sm={12} md={6} lg={4} key={doctor._id}>
            <DoctorCard doctor={doctor} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DoctorList;
