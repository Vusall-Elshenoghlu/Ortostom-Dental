// AdminRoot.jsx
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Sidebar from '../../../components/Admin/SideBar';
import AdminNavbar from '../../../components/Admin/AdminNavbar';
import './AdminRoot.css';

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
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminRoot;
