import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
    <div className="container">
      <Link className="navbar-brand" href="#">
        <img src="imgs/logo.png" alt="" />
      </Link>
     
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
            <Link className="nav-link p-2 p-lg-3" to={"/profile"}>Profile</Link>
          </li>
        </ul>
        
        <Link className="btn rounded-pill main-btn" to = {"/login"} >Login</Link>
      </div>
    </div>
  </nav>
    </>
  )
}
