import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet"
import "./Login.css"; 
import { LanguageContext } from "../../../context/LanguageContext";
const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const { lang, setLang, translations } = useContext(LanguageContext);


  const loginUser = async (email, password) => {
    setError(null);
    try {
      const res = await axios.post("http://localhost:3000/users/login", { email, password });

      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user); 

      alert("Login successful");
      navigate("/confirm");
    } catch (err) {
      if (err.response?.data === "Invalid password") {
        setError("Invalid password");
      } else {
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

  return (
    <div className="auth-container">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form className="auth-form form-box" onSubmit={formik.handleSubmit}>
        <h2 className="form-title">{translations[lang].login}</h2>
        <input type="email" name="email" placeholder={translations[lang].email} {...formik.getFieldProps("email")} className="form-control input-field mt-2" />
        <input type="password" name="password" placeholder={translations[lang].password} {...formik.getFieldProps("password")} className="form-control input-field mt-2" />
        
        {error && <div className="text-danger mt-2">{error}</div>}

        <button type="submit" className="btn btn-primary submit-btn mt-3">{translations[lang].login}</button>
        <p className="redirect-text">{translations[lang].dontAccount} <a href="/register" className="redirect-link">{translations[lang].register}</a></p>
      </form>
    </div>
  );
};

export default Login;
