import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/blueLogo-removebg-preview.png"

export default function Navbar({logOut ,userData}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg  bg-light-subtle shadow-sm p-3  sticky-top">
    <div className="container-fluid">
    <Link className="navbar-brand" to='/'>
    <img src={logo} alt="logoimage" loading='lazy' className='navlogo' />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3 active" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3" to = {"/about"} >About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3" to={"/contact"}>contact</Link>
          </li>

          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle p-2 p-lg-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            donation details
          </Link>
          <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to={"/allforms"}>donation forms</Link></li>
            <li><Link className="dropdown-item" to={"/donation"}>donation</Link></li>
            {/* <li><Link className="dropdown-item" to={"/brands"}>brands</Link></li>
            <li><Link className="dropdown-item" to={"/organization"}>organization</Link></li> */}
          </ul>
        </li>
        <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3" to = {"/profile"} >profile</Link>
          </li>
          
          {userData?
          <li className="nav-item" onClick={logOut}>
            <Link className="nav-link p-2 p-lg-3"  >logout</Link>
          </li>
          :<li className="nav-item">
          <Link className="nav-link p-2 p-lg-3" to = {"/login"} >Login</Link>
          </li>}
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}
