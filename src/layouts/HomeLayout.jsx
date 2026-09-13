import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <Fragment>
        <Navbar />
        <Outlet />
    </Fragment>
  )
}

export default HomeLayout