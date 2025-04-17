import React from 'react'
import {Outlet} from "react-router-dom"
import UserNavbar from '../../components/User/UserNavbar'
import UserFooter from '../../components/User/UserFooter'
import ScrollToTop from './ScrollToTop'
function UserRoot() {
  return (
    <>
      <UserNavbar/>
      <ScrollToTop/>
      <Outlet/>
      <UserFooter/>
    </>
  )
}

export default UserRoot
