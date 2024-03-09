
import React, { useEffect, useRef, useState } from "react";
import startPage from "../images/home1.jpg";
import startPage1 from "../images/home2.jpg";
import land1 from "../images/cha-childrens-1.jpg";
import land2 from "../images/cha-childrens1-1-1.jpg";
import land3 from "../images/sub-border-1.png";
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
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../../utils/api';

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


// ####for brands #####
  const [brands, setBrands] = useState([]);

   async function getBrands() {
      try {
         const response = await axios.get(`${API_URL}/brands`);
         console.log(response); // Check the value of response.data.data
         setBrands(response.data.brands);
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      getBrands();
   }, []);


// ####################


  return (
    <>
    <section id="startPage">
    <div
        className="carousel vh-100 w-100  position-relative"
        ref={carouselRef}
      >
        <div className="list">
          <div className="item  position-absolute carousel-item active">
            <img className="w-100 h-100" src={startPage} alt="" />
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
            <img className="w-100 h-100" src={startPage1} alt="" />
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
     
    <section id="startUp"  >
      <div className="interface container pt-3 shadow-sm p-3 mb-5  rounded">
        <div className="row ">
          <div className="icon-box col-md-4 px-lg-3 ">
            <div className="ps-lg-4 text-center">
            <div className="box d-lg-flex pe-2  align-items-center justify-content-center ">
             <div className="only  py-3   d-flex align-items-center justify-content-center position-relative">
             <img className="text-danger-subtle" src={icon1} alt="" />
              <span className=" position-absolute text-warning"><i className="fa-solid fa-hand-holding-heart fa-3x"></i></span>
             </div>
             <h3 className="  fs-5  fw-bold mx-md-3 ps-1 pe-lg-5 ">Become Volunteer</h3>
            </div>
            <p className=" text-lg-start  fw-lighter fs-5 text-light-emphasis px-md-0  ">Become a volunteer if you are motivated & ready to support people and the community.</p>
            </div>
          </div>
          <div className="icon-box  col-md-4 px-lg-3 ">
            <div className="ps-lg-4 text-center">
            <div className="box d-lg-flex pe-2  align-items-center justify-content-center ">
             <div className="only  py-3   d-flex align-items-center justify-content-center position-relative">
             <img className="text-danger-subtle" src={icon1} alt="" />
              <span className="position-absolute text-info"><i class="fa-solid fa-wallet fa-3x"></i></span>
             </div>
             <h3 className="  fs-5  fw-bold mx-md-3 ps-1 pe-lg-5 ">Quick Fundraise</h3>
            </div>
            <p className=" text-lg-start  fw-lighter fs-5 text-light-emphasis px-md-0  ">The simplest and quickest way to make a donation, so you can support people in need.</p>
            </div>
          </div>
          <div className="icon-box  col-md-4 px-lg-3 ">
            <div className="ps-lg-4 text-center">
            <div className="box d-lg-flex pe-2  align-items-center justify-content-center ">
             <div className="only  py-3   d-flex align-items-center justify-content-center position-relative">
             <img className="text-danger-subtle" src={icon1} alt="" />
              <span className=" position-absolute text-success"><i class="fa-solid fa-heart-circle-check fa-3x"></i></span>
             </div>
             <h3 className="  fs-5  fw-bold mx-md-3 ps-1 pe-lg-5 ">Start Donating</h3>
            </div>
            <p className=" text-lg-start  fw-lighter fs-5 text-light-emphasis px-md-0  ">Start donating for our campaigns to support poor people and children returning to school.</p>
            </div>
          </div>
        </div>
          
      </div>
    </section>

      {/* satart land */}
      <section id="about  ">
        <div className="container py-5 ">
          <div className=" row  d-flex  ">
            <div className="  col-lg-3 col-md-3 align-self-end pb-3 p-md-0 ">
              <img className="rounded w-100" src={land2} alt="" />
            </div>
            <div className="col-lg-3 col-md-3 ">
              <img className="rounded w-100" src={land1} alt="" />
            </div>
            <div className="fundraiser  col-lg-5 col-md-6 ms-lg-5  ">
              <p className="orange-text pt-2">Help For the Community</p>
              <h2 className="topic">
                2021 Fundraiser Campaigns For Social Justice
              </h2>
              <img src={land3} alt="" />
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
      {/* satart land */}

      <section id="teams">
        <div className="container bg-light  py-5">
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
            <p className="orange-text m-0">Bringing Smile</p>
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


      {/* start our sponsors */}
      <section>
      <div className="container py-3 ">
       <div className="sponsers text-center">
       <span className="orange-text">Sponsors</span>
        <h2 className=''>Our Sponsers</h2>
        <p className=" fs-5 text-black-50">No One Has Ever Become Poor by Giving.</p>
       </div>
         <div className="row pt-3 shadow-sm p-3 mb-5 rounded align-items-center ">
            {brands.map((brand, index) => (
               <div className="col-md-3" key={index}>
                  <Link to={`/brandDetails/${brand._id}`}>
                     <div className="brand rounded ">
                        <img className="w-75 h-100"  src={brand.image.url} alt={brand.title} />
                     </div>
                  </Link>
               </div>
            ))}
         </div>
      </div>
      </section>
      {/* end our sponsors */}

    

   



<section className="testimoianl  bg-light shadow-sm p-3 mb-5 rounded">


<div className="text-center">
            <p className="orange-text m-0">Happy People</p>
            <h2 className="m-0">What People Say About Us</h2>
          </div>
 
<div id="carouselExampleIndicators" class="carousel   text-center slide w-75 mx-auto py-5">
  
  <div class="carousel-inner ">
    <div class="carousel-item  active">
      
      <img className="clint-img shadow" src={activ1} alt="" />
      <div class="clint  p-5">
        <h5 class="fw-bolder">ahmed tarek</h5>
        <h6 class="text-muted">programmer</h6>
        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, beatae.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img className="clint-img shadow" src={activ1} alt="" />
      <div class="clint p-5">
        <h5 class="fw-bolder">ahmed tarek</h5>
        <h6 class="text-muted">programmer</h6>
        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, beatae.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img className="clint-img shadow" src={activ1} alt="" />
      <div class="clint p-5">
        <h5 class="fw-bolder">ahmed tarek</h5>
        <h6 class="text-muted">programmer</h6>
        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, beatae.</p>
      </div>
    </div>
  </div>
  <div class="carousel-indicators position-static m-3 ">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
      
      <img className="w-100 rounded-circle" src={activ1} alt="" />
    </button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
    <img className="w-100 rounded-circle" src={activ1} alt="" />
    </button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
    <img className="w-100 rounded-circle" src={activ1} alt="" />
    </button>
  </div>
</div>
</section>

  
  






      
    </>

)}
