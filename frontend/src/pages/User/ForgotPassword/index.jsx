import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { LanguageContext } from '../../../context/LanguageContext';
import { toast } from "react-toastify";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { darkMode, lang, translations } = useContext(LanguageContext);
  const [message,setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/users/forgot-password/", { email });
      toast.success(res.data.message || "Check your email for reset link.");
      setEmail("");
      setMessage(res.data.message)
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <>
      <div className={`loginn ${darkMode ? "dark-login" : ""}`}>
        <div className="auth-container">
          <Helmet>
            <title>Forgot Password</title>
          </Helmet>
          {message && <p>{message}</p>}
          <form className="auth-form form-box" onSubmit={handleSubmit}>
            <h2 className="form-title">{translations[lang].forgotPassword}</h2>
            <input
              type="email"
              name="email"
              placeholder={translations[lang].email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-control input-field mt-2 ${darkMode ? "dark-email" : ""}`}
              required
            />
            <button
              type="submit"
              className={`btn btn-primary submit-btn mt-3 ${darkMode ? "submit-btn-dark" : ""}`}
            >
              {translations[lang].resetLink || "Send Reset Link"}
            </button>
            <p className="redirect-text">
              {translations[lang].remember || "Remembered your password?"}{" "}
              <a href="/login" className="redirect-link">
                {translations[lang].login}
              </a>
            </p>
          </form>
          
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
