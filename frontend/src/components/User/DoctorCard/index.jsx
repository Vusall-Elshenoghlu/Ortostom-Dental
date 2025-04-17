import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./DoctorCard.css";
import { LanguageContext } from "../../../context/LanguageContext";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  const { doctorss, lang,darkMode } = useContext(LanguageContext);

  const handleClick = () => {
    navigate(`/doctors/${doctor._id}`);
  };

  return (
    <Card className={`doctor-card h-100 shadow-lg border-light rounded ${darkMode ? "dark-mode" : ""}`}>
      <Card.Img variant="top" src={doctor.profileImage || "default-image.jpg"} />
      <Card.Body style={{backgroundColor:`${darkMode ? "#333" : "white"}`,color:`${darkMode ? "white" : "black"}`}}>
        <Card.Title className={`doctor-name`}>
          {doctor.firstName} {doctor.lastName}
        </Card.Title>
        <Card.Subtitle className="mb-2  doctor-subtitle">{doctor.specialty}</Card.Subtitle>
        <Card.Text>
          <strong>{doctorss[lang].experience}: </strong>
          {doctor.experienceYears} {doctorss[lang].year}
        </Card.Text>
        <Button variant="primary" className="view-button" onClick={handleClick}>
          {doctorss[lang].showMore}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DoctorCard;
