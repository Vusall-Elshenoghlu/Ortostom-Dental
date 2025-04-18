import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet"
import "./Login.css";
import { LanguageContext } from "../../../context/LanguageContext";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import {toast} from "react-toastify"
const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const { lang, setLang, translations,darkMode } = useContext(LanguageContext);
  const [passwordVisible, setPasswordVisible] = useState(false)


  const loginUser = async (email, password) => {
    setError(null);
    try {
      const res = await axios.post("http://localhost:3000/users/login", { email, password });
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      sessionStorage.setItem("userEmail",res.data.user.email)
      setUser(res.data.user);

      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      console.log(err.response?.data)
      if (err.response?.data === "Wrong password." || err.response?.data === "You need to register first.") {
        setError("Invalid email or password...");
        toast.error("Invalid email or password")
      }
       else {
        setError("This email is not registered");
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: ({ email, password }) => {
      loginUser(email, password);
    },
  });

  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible)
  }
  return (
    <>
      <div className={`loginn ${darkMode ? "dark-login" : ""}`}>
        <div className="auth-container">
          <Helmet>
            <title>Login</title>
          </Helmet>
          <form className="auth-form form-box" onSubmit={formik.handleSubmit}>
            <h2 className="form-title">{translations[lang].login}</h2>
            <input 
            type="email" 
            name="email" 
            placeholder={translations[lang].email} {...formik.getFieldProps("email")} 
            className={`form-control input-field mt-2 ${darkMode ? "dark-email" : ""}`}
            
            />
            <div className="position-relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder={translations[lang].password}
                {...formik.getFieldProps("password")}
                className={`register-input ${darkMode ? "dark-password" : ""}`}
                style={{ width: "100%" }}

              />
              <div
                className="position-absolute"
                style={{ right: '20px', top: '35%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {error && <div className="text-danger mt-2">{error}</div>}
            
            <Link to={"/forgot-password"} style={{color:"#7b42f6"}}>Forgot password?</Link>
            <button type="submit" className={`btn btn-primary submit-btn mt-3 ${darkMode ? "submit-btn-dark" : ""}`}>{translations[lang].login}</button>
            <p className="redirect-text">{translations[lang].dontAccount} <a href="/register" className="redirect-link">{translations[lang].register}</a></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
