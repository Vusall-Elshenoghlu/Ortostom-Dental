import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LanguageContext } from "../../../context/LanguageContext";
import Helmet from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import { toast } from "react-toastify";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { lang, translations, darkMode } = useContext(LanguageContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      surname: Yup.string().required("Surname is required"),
      email: Yup.string()
        .email("Invalid email")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Enter a valid email"
        )
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      console.log(values)
      axios
        .post("http://localhost:3000/users/register", values)
        .then(() => {
          toast.success("User has registered successfully");
          navigate("/login");
        })
        .catch(() => alert("Registration failed"));
    },
  });

  return (
    <>
      <div className={`registration ${darkMode ? "registration-dark-mode" : ""}`}>
        <div className="register-container">
          <Helmet>
            <title>Register</title>
          </Helmet>
          <div className="register-box">
            <h2 className="register-title">{translations[lang].register}</h2>
            <form onSubmit={formik.handleSubmit} className="register-form">
              <input
                type="text"
                name="name"
                placeholder={translations[lang].name}
                {...formik.getFieldProps("name")}
                className={`register-input ${darkMode ? "registerr-dark-mode" : ""}`}
              />
              <input
                type="text"
                name="surname"
                placeholder={translations[lang].surname}
                {...formik.getFieldProps("surname")}
                className={`register-input ${darkMode ? "registerr-dark-mode" : ""}`}
              />
              <input
                type="email"
                name="email"
                placeholder={translations[lang].email}
                {...formik.getFieldProps("email")}
                className={`register-input ${darkMode ? "registerr-dark-mode" : ""}`}
              />

              {/* Şifrə inputu */}
              <div className="position-relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder={translations[lang].password}
                  {...formik.getFieldProps("password")}
                  className={`register-input ${darkMode ? "registerr-dark-mode" : ""}`}
                  style={{ width: "100%" }}
                />
                <div
                  className="position-absolute"
                  style={{ right: '20px', top: '35%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              {/* Şifrəni təsdiqləmə inputu */}
              <div className="position-relative">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  placeholder={translations[lang].confirmPassword}
                  {...formik.getFieldProps("confirmPassword")}
                  className={`register-input ${darkMode ? "registerr-dark-mode" : ""}`}
                  style={{ width: "100%" }}
                />
                <div
                  className="position-absolute"
                  style={{
                    right: '20px',
                    top: '35%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                >
                  {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="text-danger">{formik.errors.confirmPassword}</div>
                ) : null}
              </div>
              <button type="submit" className={`register-button ${darkMode ? "register-button-dark" : ""}`}>
                {translations[lang].register}
              </button>
            </form>
            <p className="register-redirect">
              {translations[lang].account}{" "}
              <a href="/login" className="register-link">
                {translations[lang].login}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
