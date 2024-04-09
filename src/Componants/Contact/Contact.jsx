import React, { useState } from "react";
import axios from 'axios';
import Joi from 'joi';
import { API_URL } from '../../utils/api';
import "./Contact.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Contact() {
const [errorList, seterrorList] = useState([])
const [error, setError] = useState('')
const [isLoding, setisLoding] = useState(false)
const [contatData , setcontactData]=useState({
  name:'',
  email:'',
  subject:'',
  message:''
});
function getcontactData(eventInfo) {
  let sendData = { ...contatData};
  sendData[eventInfo.target.name] = eventInfo.target.value;
  setcontactData(sendData);
  // console.log(contatData);
}

async function sendDataToApi() {
  let { data } = await axios.post(`${API_URL}/complaints/contact`, contatData);
  if (data.success === true) {
    setisLoding(false);
    console.log(data);
  }
  else {
    setisLoding(false);
    setError(data.message);
 }
  }


  function submitContactForm(e) {
    e.preventDefault();
    setisLoding(true);
    
    let validation = validateContactform();
      // console.log(validation);
      if (validation.error) {
         setisLoding(false);
         seterrorList(validation.error.details);
      } else {
        sendDataToApi();
      }
  
  }

  function validateContactform() {
    let scheme = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      name: Joi.string().required(),
      subject: Joi.string(),
      message: Joi.string().required(),
    });
   //  console.log(scheme.validate(user));
    return scheme.validate(contatData, { abortEarly: false });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
      <section>
        <div className="main-banner">
          <div className="title ">
            <h1>contact us</h1>
            <div className="hello  ">
              <p className="text-light">
                <Link to="/" className="unstyled-link">
                  <span>home</span>{" "}
                </Link>{" "}
                &gt; <span>contact</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section  my-5 py-5 ">
        <div className="row justify-content-center m-0">
          <div className="col-md-6 text-center ">
            <p className="ask-me">Asked Quesitons</p>
            <h2 className="heading-section">Contact With Us</h2>
          </div>
        </div>
        <div className="container border-1 border">
          <div className="row justify-content-center">
            <div className="col-md-12 ">
              <div className="wrapper">
                <div className="row no-gutters ">
                  <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch p-0 ">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Get in touch</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      {/* <div id="form-message-success" className="mb-4">
                                        Your message was sent, thank you!
                                        </div> */}

{errorList.map((err, index) => {
  if (err.context.label === 'email') {
    return (
      <div key={index} className=" alert alert-danger my-2">
        Email invalid
      </div>
    );
  } else if (err.context.label === 'subject' && contatData.subject === '') {
    // Check if subject field is empty before displaying the error
    return null;
  } else {
    return (
      <div key={index} className=" alert alert-danger my-2">
        {err.message}
      </div>
    );
  }
})}


    {error.length > 0 ? <div className=" alert alert-danger my-2">{error}</div> : ''}
                      <form
                      onSubmit={submitContactForm}
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm "
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="name">
                                {" "}
                                Full Name
                              </label>
                              <input
                              onChange={getcontactData}
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="email">
                                Email Address
                              </label>
                              <input
                              onChange={getcontactData}
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="subject">
                                Subject
                              </label>
                              <input
                              onChange={getcontactData}
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="message">
                                Message
                              </label>
                              <textarea
                              onChange={getcontactData}
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                         <div className="buttons py-3">
                              <button type="submit" className="text-uppercase text-light">
                                  {isLoding === true ? <i className="fas fa-spinner fa-spin"></i> : 'Send Message'}
                              </button>
                            </div>                
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className=" col-lg-4 col-md-5  d-flex align-items-stretch p-0">
                    <div className="info-wrap bg-light border-end  w-100 p-md-5 p-4">
                      <h3 className=" text-black">Let's get in touch</h3>
                      <p className="mb-4 text-black-50">
                        We're open for any suggestion or just to have a chat
                      </p>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text ps-3">
                          <p className=" text-black-50">
                            <span className=" text-black">Address:</span> 198
                            West 21th Street, Suite 721 New York NY 10016
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center  ">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text ps-3">
                          <p>
                            <span>Phone:</span>{" "}
                            <Link
                              className="text-black-50"
                              href="tel://1234567920"
                            >
                              + 1235 2355 98
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text ps-3">
                          <p>
                            <span>Email:</span>{" "}
                            <Link
                              className="text-black-50"
                              href="mailto:info@yoursite.com"
                            >
                              info@yoursite.com
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text ps-3">
                          <p>
                            <span>Website</span>{" "}
                            <Link className="text-black-50" href="#">
                              yoursite.com
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5022.543095684396!2d0.142365!3d50.992654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df679f6b51b00d%3A0xef738b9c1bd69607!2sHanna&#39;s%20Bakery%20UK!5e0!3m2!1sen!2seg!4v1692179642910!5m2!1sen!2seg"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="contact page"
          ></iframe>
        </div>
      </section>
    </>
  );
}
