import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
    <div className="container-fluid">
    <Link className="navbar-brand" to='/'>charity logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      {/* <Link className="navbar-brand" to="/" /> */}
        {/* <img src="imgs/logo.png" alt="logoimage" loading='lazy' /> */}
  
      <div className="collapse navbar-collapse" id="main">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3 active" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3" to ={"/brands"} >brands</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3" to = {"/organization"} >organizations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3" to = {"/about"} >About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3" to={"/contact"}>contact</Link>
          </li>
        </ul>
        
        <Link className="btn rounded-pill main-btn" to = {"/login"} >Login</Link>
      </div>
    </div>
  </nav>
    </>
  )
}
