import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(4, 'Too Short!').max(20, 'Too Long!').required('Required'),
});

const DoctorLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [dToken, setDToken] = useState(localStorage.getItem("doctorToken" ? localStorage.getItem("doctorToken") : ""))


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <div className="card shadow-lg" style={{ width: '25rem' }}>
        <div className="card-body p-4">
          <h1 className="text-center mb-4">Doctor Login</h1>
          <Helmet>
            <title>
              Doctor-Login
            </title>
          </Helmet>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const response = await axios.post('http://localhost:3000/doctors/login', values);

                if (response.data.success) {
                  localStorage.setItem('doctorToken', response.data.token);
                  setDToken(response.data.token)
                  toast.success("Login successfull");
                  console.log(response.data.token)
                  navigate("/doctor-dashboard")
                } else {
                  toast.error('Invalid email or password');
                }
              } catch (error) {
                console.error('Error during login:', error);
                toast.error('An error occurred during login');
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                  />
                  {errors.email && touched.email ? (
                    <div className="invalid-feedback">{errors.email}</div>
                  ) : null}
                </div>

                <div className="mb-3 position-relative">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type={passwordVisible ? 'text' : 'password'} // Parolun tipini dəyişirik
                    className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                  />
                  <div
                    className="position-absolute"
                    style={{ right: '10px', top: '35px', cursor: 'pointer' }}
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </div>
                  {errors.password && touched.password ? (
                    <div className="invalid-feedback">{errors.password}</div>
                  ) : null}
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Logging in...' : 'Login'}
                  </button>
                  <div style={{ display: "flex", gap: "20px" }}>
                    Admin Login? <a href="/admin">Admin</a>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
