import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
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
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm "
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" for="name">
                                {" "}
                                Full Name
                              </label>
                              <input
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
                              <label className="label" for="email">
                                Email Address
                              </label>
                              <input
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
                              <label className="label" for="subject">
                                Subject
                              </label>
                              <input
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
                              <label className="label" for="#">
                                Message
                              </label>
                              <textarea
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
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn "
                              ></input>
                              {/* <button className='btn text-white '>Send Message</button> */}
                              {/* <div className="submitting"></div> */}
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
