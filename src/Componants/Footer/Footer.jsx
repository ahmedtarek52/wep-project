import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
   return (
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#00152E' }}>
      {/* Section: Social media */}
      <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#6351ce' }}>
        {/* Left */}
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <Link href="" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="" className="text-white me-4">
            <i className="fab fa-google"></i>
          </Link>
          <Link href="" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link href="" className="text-white me-4">
            <i className="fab fa-github"></i>
          </Link>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold">Sadaka</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
              Join us in making a difference. Whether through donations, volunteering, or spreading awareness, your contribution can help transform lives and bring hope to those who need it most.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Pages</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
                <Link to={'/'} className="text-white">Home</Link>
              </p>
              <p>
                <Link to={'/contact'} className="text-white">Contact</Link>
              </p>
              <p>
                <Link to={'/allforms'} className="text-white">All Forms</Link>
              </p>
              <p>
                <Link to={'/profile'} className="text-white"> Profile</Link>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
                <a href="#!" className="text-white">Your Account</a>
              </p>
              <p>
                <a href="#!" className="text-white">Our Team</a>
              </p>
              <p>
                <a href="#!" className="text-white">testimonial</a>
              </p>
              <p>
                <a href="#!" className="text-white">Help</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><i className="fas fa-home mr-3"></i> Egypt, Menofia, US</p>
              <p><i className="fas fa-envelope mr-3"></i> Sadaka@example.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">Sadaka.com</a>
      </div>
      {/* Copyright */}
    </footer>
    /* Footer */
   );
}
