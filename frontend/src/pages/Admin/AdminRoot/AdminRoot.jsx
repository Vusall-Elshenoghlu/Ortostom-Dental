// AdminRoot.jsx
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Sidebar from '../../../components/Admin/SideBar';
import AdminNavbar from '../../../components/Admin/AdminNavbar';
import './AdminRoot.css';
import DashBoard from '../DashBoard';

function AdminRoot() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <div className="admin-root">
      <AdminNavbar />
      <div className="admin-layout">
        <Sidebar />
      </div>
    </div>
  );
}

export default AdminRoot;
