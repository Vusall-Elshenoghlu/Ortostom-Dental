import React from 'react'
import {Outlet} from "react-router-dom"
import UserNavbar from '../../components/User/UserNavbar'
import UserFooter from '../../components/User/UserFooter'
function UserRoot() {
  return (
    <>
      <UserNavbar/>
      <Outlet/>
      <UserFooter/>
    </>
  )
}

export default UserRoot
