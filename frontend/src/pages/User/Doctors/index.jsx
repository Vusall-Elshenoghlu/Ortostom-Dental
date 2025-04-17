import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import DoctorCard from "../../../components/User/DoctorCard";
import { LanguageContext } from "../../../context/LanguageContext";
import { motion } from "framer-motion"; 

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const { doctorss, lang } = useContext(LanguageContext);

  useEffect(() => {
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

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },  
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },  
  };

  return (
    <div className="container py-5" id="doctors">
      <h1 className="text-center">{doctorss[lang].doctors}</h1>
      <br />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animationVariants}
        viewport={{ once: true }}  
      >
        <Row>
          {doctors.map((doctor) => (
            <Col sm={12} md={6} lg={4} key={doctor._id} style={{marginTop:"15px"}}>
              <DoctorCard doctor={doctor}/>
            </Col>
          ))}
        </Row>
      </motion.div>
    </div>
  );
};

export default DoctorList;
