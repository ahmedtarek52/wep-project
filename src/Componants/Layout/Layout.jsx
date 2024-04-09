// import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Layout({ userData, setuserData }) {
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem('token');
    setuserData(null);
    navigate('/login');
  }

  return (
    <>
      <Navbar logOut={logOut} userData={userData} />
      <Outlet />
      <Footer />
    </>
  );
}
