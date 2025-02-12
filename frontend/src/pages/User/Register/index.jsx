import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LanguageContext } from "../../../context/LanguageContext";
import Helmet from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";  // Göz ikonları
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // Parolun görünüşünü idarə etmək üçün state
  const navigate = useNavigate();
  const { lang, setLang, translations } = useContext(LanguageContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      surname: Yup.string().required("Surname is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:3000/users/register", values)
        .then(() => {
          alert("User has registered successfully");
          navigate("/login");
        })
        .catch(() => alert("Registration failed"));
    },
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="registration">
        <div className="register-container">
          <Helmet>
            <title>Register</title>
          </Helmet>
          <div className="register-box">
            <h2 className="register-title">{translations[lang].register}</h2>
            <form onSubmit={formik.handleSubmit} className="register-form">
              <input type="text" name="name" placeholder={translations[lang].name} {...formik.getFieldProps("name")} className="register-input" />
              <input type="text" name="surname" placeholder={translations[lang].surname} {...formik.getFieldProps("surname")} className="register-input" />
              <input type="email" name="email" placeholder={translations[lang].email} {...formik.getFieldProps("email")} className="register-input" />

              <div className="position-relative">
                <input
                  type={passwordVisible ? "text" : "password"} 
                  name="password"
                  placeholder={translations[lang].password}
                  {...formik.getFieldProps("password")}
                  className="register-input"
                  style={{width:"100%"}}
                  
                />
                <div
                  className="position-absolute"
                  style={{ right: '20px', top: '35%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              <button type="submit" className="register-button">{translations[lang].register}</button>
            </form>
            <p className="register-redirect">{translations[lang].account} <a href="/login" className="register-link">{translations[lang].login}</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
