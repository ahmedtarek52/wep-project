<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import cha from '../images/home1.jpg';
import cha1 from '../images/home2.jpg';
import cha2 from '../images/cha-childrens-1.jpg';
import cha3 from '../images/cha-childrens1-1-1.jpg';
import cha4 from '../images/sub-border-1.png';
import cause1 from '../images/causes-1.jpg';
import cause2 from '../images/causes-2.jpg';
import cause3 from '../images/causes-3.jpg';
import activ1 from '../images/activities1.jpg';
import activ2 from '../images/activities2.jpg';
import activ3 from '../images/activities3.jpg';
import activ4 from '../images/activities4.jpg';
import activ5 from '../images/activities5.jpg';
import activ6 from '../images/activities6.jpg';
import icon1 from '../images/icon-box.png';
import './Home.css';

export default function Home() {
   const carouselRef = useRef(null);

   useEffect(() => {
      const carousel = carouselRef.current;
      const prevButton = carousel.querySelector('#prev');
      const nextButton = carousel.querySelector('#next');
      const items = carousel.querySelectorAll('.carousel-item');

      let currentItemIndex = 0;

      const showItem = (index) => {
         items.forEach((item) => item.classList.remove('active'));
         items[index].classList.add('active');
      };

      const showNextItem = () => {
         currentItemIndex = (currentItemIndex + 1) % items.length;
         showItem(currentItemIndex);
      };

      const showPrevItem = () => {
         currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
         showItem(currentItemIndex);
      };

      prevButton.addEventListener('click', showPrevItem);
      nextButton.addEventListener('click', showNextItem);

      return () => {
         prevButton.removeEventListener('click', showPrevItem);
         nextButton.removeEventListener('click', showNextItem);
      };
   }, []);

   return (
      <>
         <section id="startPage">
            <div className="carousel vh-100 w-100  position-relative" ref={carouselRef}>
               <div className="list">
                  <div className="item  position-absolute carousel-item active">
                     <img className="w-100 h-100" src={cha} alt="" />
                     <div className="content col-md-6  position-absolute text-light">
                        <p className="author">we help you</p>
                        <h1 className="topic text-uppercase">save the childrens</h1>
                        <p className="des ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum</p>
                        <div className="buttons text-align-center d-flex ">
                           <button className="text-uppercase text-light  ">
                              denote now{' '}
                              <span>
                                 <i className="fa-solid fa-heart"></i>
                              </span>
                           </button>
                           <button className="text-uppercase bg-light ">
                              contact us{' '}
                              <span>
                                 <i className="fa-solid fa-circle-chevron-right"></i>
                              </span>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="item position-absolute carousel-item active">
                     <img className="w-100 h-100" src={cha1} alt="" />
                     <div className="content col-md-6 position-absolute text-light ">
                        <p className="author">we help you</p>
                        <h1 className="topic text-uppercase">make differance today</h1>
                        <p className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque</p>
                        <div className="buttons text-align-center d-flex ">
                           <button className="text-uppercase text-light ">
                              denote now{' '}
                              <span>
                                 <i className="fa-solid fa-heart"></i>
                              </span>
                           </button>
                           <button className="text-uppercase bg-light ">
                              contact us{' '}
                              <span>
                                 <i className="fa-solid fa-circle-chevron-right"></i>
                              </span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="arrows position-absolute d-flex align-item-center">
                  <button className="text-light" id="prev">
                     {'<'}
                  </button>
                  <button className="text-light" id="next">
                     {'>'}
                  </button>
               </div>
            </div>
         </section>

         {/* satart land */}
         <section id="about  ">
            <div className="container py-5 ">
               <div className=" row  d-flex  ">
                  <div className="  col-lg-3 col-md-3 align-self-end pb-3 p-md-0 ">
                     <img className="rounded w-100" src={cha3} alt="" loading="lazy" />
                  </div>
                  <div className="col-lg-3 col-md-3 ">
                     <img className="rounded w-100" src={cha2} alt="" loading="lazy" />
                  </div>
                  <div className="fundraiser  col-lg-5 col-md-6 ms-lg-5  ">
                     <p className="help pt-2">Help For the Community</p>
                     <h2 className="topic">2021 Fundraiser Campaigns For Social Justice</h2>
                     {/* <img src={cha4} alt="" loading="lazy" /> */}
                     <p className="text-muted py-3">
                        There are many variations of passages of orem Ipsum available, but the majority have suffered alteration in some form, by cted ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do usmod temponcid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi.
                     </p>
                     <p className="border-start  border-4 fw-bolder py-2 ps-3">
                        Helped Fund <span>78,743</span> Projects in <span>30</span> Countries, Benefiting Over <span>7.6</span> Million People.
                     </p>
                     <div className="buttons py-3">
                        <button className="text-uppercase text-light  ">
                           denote now{' '}
                           <span>
                              <i className="fa-solid fa-heart"></i>
                           </span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="teams">
            <div className="container bg-light py-5">
               <div className="row justify-content-center pb-5 mb-3">
                  <div className="col-md-7 heading-section text-center ftco-animate">
                     <span className="author">Our Causes</span>
                     <h2 className="">Donate to charity causes around the world</h2>
                  </div>
               </div>
               <div className="row">
                  <div className="  col-lg-4 col-md-6">
                     <div className="card">
                        <img src={cause1} className="card-img-top w-100" alt="..." loading="lazy" />
                        <div className="card-body">
                           <h5 className="card-title">Card title</h5>
                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                     </div>
                  </div>
                  <div className="  col-lg-4 col-md-6">
                     <div className="card">
                        <img src={cause2} className="card-img-top w-100" alt="..." loading="lazy" />
                        <div className="card-body">
                           <h5 className="card-title">Card title</h5>
                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                     </div>
                  </div>
                  <div className="  col-lg-4 col-md-6">
                     <div className="card">
                        <img src={cause3} className="card-img-top w-100" alt="..." loading="lazy" />
                        <div className="card-body">
                           <h5 className="card-title">Card title</h5>
                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* <!-- start quote --> */}
         <section id="quote">
            <div className="quote my-5">
               <div className="container position-relative py-5">
                  <q>Pray! And listen to God! You can do this alone, but find somebody to do it with you</q>
                  {/* <span>charity name</span> */}
               </div>
            </div>
         </section>
         {/* <!-- end quote --> */}

         <section id="activites">
            <div className=" activites container py-5 ">
               <div className="border-start  border-4 fw-bolder py-2 ps-3">
                  <p className="smile m-0">Bringing Smile</p>
                  <h2 className="m-0">Our Activities</h2>
               </div>
               <p>Your little support can bring smile to the homeless people</p>
               <div className="row d-flex gy-3">
                  <div className="col-lg-4 col-md-6">
                     <div className=" image-container" data-work="winter ">
                        <img className="w-100 img-fluid" src={activ1} alt="" loading="lazy"/>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="image-container">
                        <img className="w-100 img-fluid" src={activ2} alt="" loading="lazy"/>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="image-container">
                        <img className="w-100 img-fluid" src={activ3} alt="" loading="lazy"/>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="image-container">
                        <img className="w-100 img-fluid" src={activ4} alt="" loading="lazy"/>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="image-container">
                        <img className="w-100 img-fluid" src={activ5} alt="" loading="lazy"/>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="image-container">
                        <img className="w-100 img-fluid" src={activ6} alt="" loading="lazy" />
                     </div>
                  </div>
               </div>

               <div className="buttons py-5  text-center">
                  <button className="text-uppercase text-light  ">All Activies</button>
               </div>
            </div>
         </section>

         <section id="startUp">
            <div className="container my-5 ">
               <div className="row py-5 ">
                  <div className=" col-md-4 px-lg-3 ">
                     <div className="ps-lg-4 text-center">
                        <div className="box d-lg-flex pe-2  align-items-center justify-content-center ">
                           <div className="only  py-3   d-flex align-items-center justify-content-center position-relative">
                              <img className="text-danger-subtle" src={icon1} alt="" loading="lazy" />
                              <span className="heart-icon position-absolute text-warning">
                                 <i className="fa-solid fa-hand-holding-heart fa-3x"></i>
                              </span>
                           </div>
                           <h3 className="  fs-5  fw-bold mx-md-3 ps-1 pe-lg-5 ">Become Volunteer</h3>
                        </div>
                        <p className=" text-lg-start  fw-lighter fs-5 text-light-emphasis px-md-0  ">Become a volunteer if you are motivated & ready to support people and the community.</p>
                     </div>
                  </div>
                  <div className=" col-md-4 px-lg-3 ">
                     <div className="ps-lg-4 text-center">
                        <div className="box d-lg-flex pe-2  align-items-center justify-content-center ">
                           <div className="only  py-3   d-flex align-items-center justify-content-center position-relative">
                              <img className="text-danger-subtle" src={icon1} alt="" loading="lazy" />
                              <span className="position-absolute text-info">
                                 <i className="fa-solid fa-hand-holding-heart fa-3x"></i>
                              </span>
                           </div>
                           <h3 className="  fs-5  fw-bold mx-md-3 ps-1 pe-lg-5 ">Quick Fundraise</h3>
                        </div>
                        <p className=" text-lg-start  fw-lighter fs-5 text-light-emphasis px-md-0  ">The simplest and quickest way to make a donation, so you can support people in need.</p>
                     </div>
                  </div>
                  <div className=" col-md-4 px-lg-3 ">
                     <div className="ps-lg-4 text-center">
                        <div className="box d-lg-flex pe-2  align-items-center justify-content-center ">
                           <div className="only  py-3   d-flex align-items-center justify-content-center position-relative">
                              <img className="text-danger-subtle" src={icon1} alt="" loading="lazy" />
                              <span className="position-absolute text-success">
                                 <i className="fa-solid fa-hand-holding-heart fa-3x"></i>
                              </span>
                           </div>
                           <h3 className="  fs-5  fw-bold mx-md-3 ps-1 pe-lg-5 ">Start Donating</h3>
                        </div>
                        <p className=" text-lg-start  fw-lighter fs-5 text-light-emphasis px-md-0  ">Start donating for our campaigns to support poor people and children returning to school.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
=======
import React, { useEffect, useRef } from "react";
import cha from "../images/home1.jpg";
import cha1 from "../images/home2.jpg";
import cha2 from "../images/cha-childrens-1.jpg";
import cha3 from "../images/cha-childrens1-1-1.jpg";
import cha4 from "../images/sub-border-1.png";
import cause1 from "../images/causes-1.jpg";
import cause2 from "../images/causes-2.jpg";
import cause3 from "../images/causes-3.jpg";
import activ1 from "../images/activities1.jpg";
import activ2 from "../images/activities2.jpg";
import activ3 from "../images/activities3.jpg";
import activ4 from "../images/activities4.jpg";
import activ5 from "../images/activities5.jpg";
import activ6 from "../images/activities6.jpg";
import icon1 from "../images/icon-box.png"
import "./Home.css";

export default function Home() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const prevButton = carousel.querySelector("#prev");
    const nextButton = carousel.querySelector("#next");
    const items = carousel.querySelectorAll(".carousel-item");

    let currentItemIndex = 0;

    const showItem = (index) => {
      items.forEach((item) => item.classList.remove("active"));
      items[index].classList.add("active");
    };

    const showNextItem = () => {
      currentItemIndex = (currentItemIndex + 1) % items.length;
      showItem(currentItemIndex);
    };

    const showPrevItem = () => {
      currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
      showItem(currentItemIndex);
    };

    prevButton.addEventListener("click", showPrevItem);
    nextButton.addEventListener("click", showNextItem);

    return () => {
      prevButton.removeEventListener("click", showPrevItem);
      nextButton.removeEventListener("click", showNextItem);
    };
  }, []);

  return (
    <>
    <section id="startPage">
    <div
        className="carousel vh-100 w-100  position-relative"
        ref={carouselRef}
      >
        <div className="list">
          <div className="item  position-absolute carousel-item active">
            <img className="w-100 h-100" src={cha} alt="" />
            <div className="content col-md-6  position-absolute text-light">
              <p className="author">we help you</p>
              <h1 className="topic text-uppercase">save the childrens</h1>
              <p className="des ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum
              </p>
              <div className="buttons text-align-center d-flex ">
                <button className="text-uppercase text-light  ">
                  denote now{" "}
                  <span>
                    <i className="fa-solid fa-heart"></i>
                  </span>
                </button>
                <button className="text-uppercase bg-light ">
                  contact us{" "}
                  <span>
                    <i className="fa-solid fa-circle-chevron-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="item position-absolute carousel-item active">
            <img className="w-100 h-100" src={cha1} alt="" />
            <div className="content col-md-6 position-absolute text-light ">
              <p className="author">we help you</p>
              <h1 className="topic text-uppercase">make differance today</h1>
              <p className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
              </p>
              <div className="buttons text-align-center d-flex ">
                <button className="text-uppercase text-light ">
                  denote now{" "}
                  <span>
                    <i className="fa-solid fa-heart"></i>
                  </span>
                </button>
                <button className="text-uppercase bg-light ">
                  contact us{" "}
                  <span>
                    <i className="fa-solid fa-circle-chevron-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="arrows position-absolute d-flex align-item-center">
          <button className="text-light" id="prev">
            {"<"}
          </button>
          <button className="text-light" id="next">
            {">"}
          </button>
        </div>
      </div>
    </section>
     
      {/* satart land */}
      <section id="about  ">
        <div className="container py-5 ">
          <div className=" row  d-flex  ">
            <div className="  col-lg-3 col-md-3 align-self-end pb-3 p-md-0 ">
              <img className="rounded w-100" src={cha3} alt="" />
            </div>
            <div className="col-lg-3 col-md-3 ">
              <img className="rounded w-100" src={cha2} alt="" />
            </div>
            <div className="fundraiser  col-lg-5 col-md-6 ms-lg-5  ">
              <p className="help pt-2">Help For the Community</p>
              <h2 className="topic">
                2021 Fundraiser Campaigns For Social Justice
              </h2>
              <img src={cha4} alt="" />
              <p className="text-muted py-3">
                There are many variations of passages of orem Ipsum available,
                but the majority have suffered alteration in some form, by cted
                ipsum dolor sit amet, consectetur adipisicing elit, sed do usmod
                temponcid idunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco aboris nisi.
              </p>
              <p className="border-start  border-4 fw-bolder py-2 ps-3">
                Helped Fund <span>78,743</span> Projects in <span>30</span>{" "}
                Countries, Benefiting Over <span>7.6</span> Million People.
              </p>
              <div className="buttons py-3">
                <button className="text-uppercase text-light  ">
                  denote now{" "}
                  <span>
                    <i className="fa-solid fa-heart"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="teams">
        <div className="container bg-light py-5">
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="author">Our Causes</span>
              <h2 className="">Donate to charity causes around the world</h2>
            </div>
          </div>
          <div className="row">
            <div className="  col-lg-4 col-md-6">
              <div className="card">
                <img src={cause1} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>                
                </div>
              </div>
            </div>
            <div className="  col-lg-4 col-md-6">
              <div className="card">
                <img src={cause2} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>                 
                </div>
              </div>
            </div>
            <div className="  col-lg-4 col-md-6">
              <div className="card">
                <img src={cause3} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* <!-- start quote --> */}
      <section  id="quote" >
     <div className="quote my-5">
          <div className="container position-relative py-5">
            <q>
              Pray! And listen to God! You can do this alone, but find somebody
              to do it with you
            </q>
            {/* <span>charity name</span> */}
          </div>
        </div>
      </section>
      {/* <!-- end quote --> */}

      <section id="activites">
        <div className=" activites container py-5 ">
          <div className="border-start  border-4 fw-bolder py-2 ps-3">
            <p className="smile m-0">Bringing Smile</p>
            <h2 className="m-0">Our Activities</h2>
          </div>
          <p>Your little support can bring smile to the homeless people</p>
          <div className="row d-flex gy-3">
            <div className="col-lg-4 col-md-6">
              <div className=" image-container" data-work="winter ">
                <img className="w-100 img-fluid" src={activ1} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="image-container">
                <img className="w-100 img-fluid" src={activ2} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="image-container">
                <img className="w-100 img-fluid" src={activ3} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="image-container">
                <img className="w-100 img-fluid" src={activ4} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="image-container">
                <img className="w-100 img-fluid" src={activ5} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="image-container">
                <img className="w-100 img-fluid" src={activ6} alt="" />
              </div>
            </div>
          </div>

          <div className="buttons py-5  text-center">
            <button className="text-uppercase text-light  ">
              All Activies
            </button>
          </div>
        </div>
      </section>

    <section id="startUp">
      <div className="container my-5 ">
        <div className="row py-5 ">
          <div className=" col-md-4 px-lg-3 ">
            <div className="ps-lg-4 text-center">
            <div className="box d-lg-flex pe-2  align-items-center justify-content-center ">
             <div className="only  py-3   d-flex align-items-center justify-content-center position-relative">
             <img className="text-danger-subtle" src={icon1} alt="" />
              <span className="heart-icon position-absolute text-warning"><i className="fa-solid fa-hand-holding-heart fa-3x"></i></span>
             </div>
             <h3 className="  fs-5  fw-bold mx-md-3 ps-1 pe-lg-5 ">Become Volunteer</h3>
            </div>
            <p className=" text-lg-start  fw-lighter fs-5 text-light-emphasis px-md-0  ">Become a volunteer if you are motivated & ready to support people and the community.</p>
            </div>
          </div>
          <div className=" col-md-4 px-lg-3 ">
            <div className="ps-lg-4 text-center">
            <div className="box d-lg-flex pe-2  align-items-center justify-content-center ">
             <div className="only  py-3   d-flex align-items-center justify-content-center position-relative">
             <img className="text-danger-subtle" src={icon1} alt="" />
              <span className="position-absolute text-info"><i className="fa-solid fa-hand-holding-heart fa-3x"></i></span>
             </div>
             <h3 className="  fs-5  fw-bold mx-md-3 ps-1 pe-lg-5 ">Quick Fundraise</h3>
            </div>
            <p className=" text-lg-start  fw-lighter fs-5 text-light-emphasis px-md-0  ">The simplest and quickest way to make a donation, so you can support people in need.</p>
            </div>
          </div>
          <div className=" col-md-4 px-lg-3 ">
            <div className="ps-lg-4 text-center">
            <div className="box d-lg-flex pe-2  align-items-center justify-content-center ">
             <div className="only  py-3   d-flex align-items-center justify-content-center position-relative">
             <img className="text-danger-subtle" src={icon1} alt="" />
              <span className="position-absolute text-success"><i className="fa-solid fa-hand-holding-heart fa-3x"></i></span>
             </div>
             <h3 className="  fs-5  fw-bold mx-md-3 ps-1 pe-lg-5 ">Start Donating</h3>
            </div>
            <p className=" text-lg-start  fw-lighter fs-5 text-light-emphasis px-md-0  ">Start donating for our campaigns to support poor people and children returning to school.</p>
            </div>
          </div>
        </div>
          
      </div>
    </section>
      
    </>
  );
>>>>>>> 407829ea4c51cec6532e07e26c5ceddd7840fe7b
}
