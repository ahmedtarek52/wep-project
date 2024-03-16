import React, { useEffect, useState } from 'react';
import './About.css';
import helthicon from '../images/ttshirt.png';
import arrow from '../images/arrows.png';
import axios from 'axios';
import { API_URL } from '../../utils/api';
import { Link } from 'react-router-dom';
import aboutus from '../images/1.png';
import aboutus2 from '../images/Add a little bit of body text.png';

export default function About() {
   const [donCard, setDonCard] = useState([]);

   async function getDonationCard() {
      const { data } = await axios.get(`${API_URL}/donationcard`);
      setDonCard(data.data);
      console.log(data);
      console.log(data.data);
   }
   useEffect(() => {
      getDonationCard();
   }, []);
   return (
      <>
         <div className="main-banner">
            <div className="title ">
               <h1>about us</h1>

               <div className="hello  ">
                  <p className="text-light">
                     <Link to="/" className="unstyled-link">
                        <span>home</span>{' '}
                     </Link>{' '}
                     &gt; <span>about</span>
                  </p>
               </div>
            </div>
         </div>

         <section className="py-5">
            <div className="help-today text-light  ">
               <div className="container">
                  <div className="row">
                     <div className="col-md-5 ">
                        <p className="author">Helping Today</p>
                        <h2>We’re Helping People in Need Around the World</h2>
                        <div className="d-flex">
                           <div className="play-box mt-5 me-5">
                              <span className="fa fa-play fa-2x text-black"></span>
                           </div>
                           <img className="arrow" src={arrow} alt="" />
                        </div>
                     </div>
                     <div className="col-md-6 offset-md-1 ">
                        <div className="big-box d-flex py-5">
                           <span className="main-box ">
                              <img className=" small-icon" src={helthicon} alt="" />
                           </span>
                           <div className="ps-4">
                              <h4>Healthy Food</h4>
                              <p>Millions of people have not enough food, so we're working to feed the hungry.</p>
                           </div>
                        </div>
                        <hr />
                        <div className="big-box d-flex py-5">
                           <span className="main-box ">
                              <img className=" small-icon" src={helthicon} alt="" />
                           </span>
                           <div className="ps-4">
                              <h4>Healthy Food</h4>
                              <p>Millions of people have not enough food, so we're working to feed the hungry.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="container py-3">
               <div className="row pt-3 shadow-sm p-3 mb-5  rounded ">
                  {donCard.length > 0 && (
                     <>
                        <div className="col-md-6">
                           <img className="w-100 " src={donCard[0].image.url} alt={donCard[0].title} />
                        </div>
                        <div className="col-md-6">
                           <h3>{donCard[0].title}</h3>
                           <div>{donCard[0].info}</div>
                           <hr />
                           <div>{donCard[0].description}</div>
                           <Link to={'/donation'}>
                              <div className="buttons py-3">
                                 <button className="text-uppercase text-light  ">
                                    all details{' '}
                                    <span>
                                       {' '}
                                       <i className="fa-solid fa-circle-chevron-right"></i>
                                    </span>
                                 </button>
                              </div>
                           </Link>
                        </div>
                     </>
                  )}
               </div>
            </div>
         </section>
         <section id="about  ">
            <div className="container py-5 ">
               <div className=" row ">
                  <div className="col-md-5 ">
                     <img className="rounded w-100" src={aboutus} alt="" />
                  </div>
                  <div className="fundraiser offset-md-1  col-md-6 ">
                     <p className="help pt-2">
                        <h1>Helping Today</h1>
                     </p>
                     <h1 className="topic">Our Goal is to Help Poor People</h1>
                     <p className="text-muted py-3">
                        <h5>Today, we supported the education of 20000 children born in poor families cross 12 undeveloped countries over the world . in the future, our goals are</h5>
                     </p>
                     <div className="abouticon">
                        <div className="icon-with-text">
                           <i class="fa-regular fa-circle-check"></i>
                           <span>Have enough food for life. </span>
                        </div>
                        <div className="icon-with-text">
                           <i class="fa-regular fa-circle-check"></i>
                           <span>Poor children can return to school.</span>
                        </div>
                        <div className="icon-with-text">
                           <i class="fa-regular fa-circle-check"></i>
                           <span>Support poor people to have better jobs. </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="about  ">
            <div className="container py-5 ">
               <div className=" row justify-content-center align-items-center">
                  <div className="col-md-5">
                     <img className="rounded w-100" src={aboutus2} alt="" />
                  </div>
                  <div className="fundraiser offset-md-1 col-md-6">
                     <p className="help pt-2">
                        <h1>Asked Quesitons</h1>
                     </p>
                     <h1 className="topic">We Need Your Help</h1>
                     <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                           <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                 Accordion Item #1
                              </button>
                           </h2>
                           <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                 <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each
                                 element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                 our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item">
                           <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                 Accordion Item #2
                              </button>
                           </h2>
                           <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                 <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each
                                 element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                 our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item">
                           <h2 class="accordion-header">
                              <button
                                 className="accordion-button collapsed"
                                 type="button"
                                 data-bs-toggle="collapse"
                                 data-bs-target="#collapseThree"
                                 aria-expanded="false"
                                 aria-controls="collapseThree">
                                 Accordion Item #3
                              </button>
                           </h2>
                           <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                 <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each
                                 element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                 our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
