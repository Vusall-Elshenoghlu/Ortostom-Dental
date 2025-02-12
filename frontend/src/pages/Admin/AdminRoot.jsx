import React, { useEffect } from 'react';
import Sidebar from '../../components/Admin/SideBar';
import { Outlet, useNavigate } from 'react-router';

function AdminRoot() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default AdminRoot;
