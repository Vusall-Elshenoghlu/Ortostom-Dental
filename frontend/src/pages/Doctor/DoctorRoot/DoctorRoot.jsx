// AdminRoot.jsx
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Sidebar from '../../../components/Admin/SideBar';
import './DoctorRoot.css';
import DoctorNavbar from '../../../components/Doctor/DoctorNavbar';
import DoctorSidebar from '../../../components/Doctor/DoctorSidebar';

function DoctorRoot() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('doctorToken');

    if (!token) {
      navigate('/doctor');
    }
  }, [navigate]);

  return (
    <div className="doctor-root">
      <DoctorNavbar />
      <div className="doctor-layout">
        <DoctorSidebar />
      </div>
    </div>
  );
}

export default DoctorRoot;
