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
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main"
        aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="main">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3 active" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3" href="#">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3" href="#">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3" href="#">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link p-2 p-lg-3" href="#">Contact</Link>
          </li>
        </ul>
        <div className="search ps-3 pe-3 d-none d-lg-block">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <Link className="btn rounded-pill main-btn" href="#">Login</Link>
      </div>
    </div>
  </nav>
    </>
  )
}
