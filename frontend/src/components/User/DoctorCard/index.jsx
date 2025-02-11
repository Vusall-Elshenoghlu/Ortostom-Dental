import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./DoctorCard.css"
import { LanguageContext } from "../../../context/LanguageContext";
const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate(); // useHistory yerine useNavigate istifadə olunur

  const handleClick = () => {
    navigate(`/doctors/${doctor._id}`);
  };
  const {doctorss,lang} = useContext(LanguageContext)

  return (
    <Card className="h-100 shadow-lg border-light rounded">
      <Card.Img variant="top" src={doctor.profileImage || "default-image.jpg"} />
      <Card.Body>
        <Card.Title>
          {doctor.firstName} {doctor.lastName}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{doctor.specialty}</Card.Subtitle>
        <Card.Text>
          <strong>{doctorss[lang].experience}: </strong>{doctor.experienceYears} {doctorss[lang].year}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>
          {doctorss[lang].showMore}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DoctorCard;
