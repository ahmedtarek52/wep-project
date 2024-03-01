import React from 'react'
import { Col, Container, Row } from "react-bootstrap"

import "./Footer.css"
export default function Footer() {
  return (
  
    <>
   <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Negr00</h1>
              </div>
              <p>• I'm Mostafa EL-Naggar motivated and dedicated computer science student , I'm a full stack web developer using HTML , CSS , 
                Bootstrap , .NET as a Back-end , React.JS Developer & expand my skills as a web developer.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
              <li><strong>• Degree :</strong> Computer Science</li>
              <li><strong>• University :</strong> Menofia University</li>
              <li><strong>• Training :</strong> ITI Web Development Training , ITI  React.JS Training , ITI .NET Training</li>
              <li><strong>• Year :</strong> 2021-2024</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Skills</h2>
              <ul>
              <li>  • Communication and presentation skill </li>
              <li>  • Time management </li>
              <li>  • Good with using Microsoft office (MS) </li>
              <li>  • Hard work , creative , has a good team spirit </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
              <li><strong>• Email :</strong> mostafanasser23456789@gmail.com</li>
              <li><strong>• Phone Num :</strong> +20 1554766333</li>
              <li><strong>• Address :</strong>Tanta-(Zefta)</li>
              </ul>
            </Col>
          </Row>
          <br></br>
          <p className="text-center">
            &copy; 2023 <ion-icon name="bag"></ion-icon> Negr00 . All rights reserved.</p>
        </Container>
    </footer>
    </>

  )
}
