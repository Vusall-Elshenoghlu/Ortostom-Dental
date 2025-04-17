import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LanguageContext } from '../../../context/LanguageContext';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./ResetPassword.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const token = searchParams.get("token");
  const navigate = useNavigate();
  const { darkMode, lang, translations } = useContext(LanguageContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match...");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/users/reset-password/", { token, password });
      setMessage(res.data.message);

      if (res.data.success) {
        alert("Password successfully changed!");
        navigate("/login");
      }

    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className={`loginn ${darkMode ? "dark-login" : ""}`}>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <div className='auth-container'>
        <form className="auth-form form-box" onSubmit={handleSubmit}>
          <h2 className="form-title">Reset Password</h2>

          <div className="position-relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`form-control input-field ${darkMode ? "dark-password" : ""}`}
            />
            <div
              className="position-absolute"
              style={{ right: '20px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <div className="position-relative mb-3">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`form-control input-field ${darkMode ? "dark-password" : ""}`}
            />
            <div
              className="position-absolute"
              style={{ right: '20px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {message && <div className="text-danger mb-2">{message}</div>}

          <button type="submit" className={`btn btn-primary submit-btn ${darkMode ? "submit-btn-dark" : ""}`}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
