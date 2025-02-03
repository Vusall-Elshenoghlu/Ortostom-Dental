import React from 'react'
import Sidebar from '../../components/Admin/SideBar'
import { Outlet } from 'react-router'

function AdminRoot() {
  return (
    <>
      <Sidebar/>
      <Outlet/>
    </>
  )
}

export default AdminRoot
