import React, { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet';
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
import voltanir1 from "../images/avatar02.jpg"
import voltanir2 from "../images/avatar5.jpg"
import voltanir3 from "../images/avatar6.jpg"
import voltanir4 from "../images/avatar9.jpg"
import icon1 from "../images/icon-box.png"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../Context/Store';

import "./Home.css";
import Button from "../Ui/Button";


export default function Home() {
   let { brands } =useContext(DataContext);

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
         <Helmet>
            <meta charSet="utf-8" />
            <title>Home</title>
         </Helmet>

      {/* header*/}
         <section id="startPage">
            <div className="carousel vh-100 w-100  position-relative" ref={carouselRef}>
               <div className="list">
                  <div className="item  position-absolute carousel-item active">
                     <img className="w-100 h-100" src={startPage} alt="startPage" loading="lazy" />
                     <div className="content col-md-6  position-absolute text-light">
                        <p className="author">we help you</p>
                        <h1 className="topic text-uppercase">save the childrens</h1>
                        <p className="des ">Helping one person might not change the world, but it could change the world for one person.</p>
                        <div className="text-align-center d-flex buttons">
                           <Button to='/allforms' >denote now{' '}<span><i className="fa-solid fa-heart"></i> </span></Button>
                           <Button to='/allforms' className='bg-light' color='txt-orange-style'>denote now{' '}<span> <i className="fa-solid fa-circle-chevron-right"></i> </span></Button>
                        </div>
                     </div>
                  </div>
                  <div className="item position-absolute carousel-item active">
                     <img className="w-100 h-100" src={startPage1} alt="startPage" loading="lazy"/>
                     <div className="content col-md-6 position-absolute text-light ">
                        <p className="author">we help you</p>
                        <h1 className="topic text-uppercase">make differance today</h1>
                        <p className="des">In a world where you can be anything, be kind. Your kindness can change someone's day, or even their life.</p>
                        <div className="text-align-center d-flex buttons">
                           <Button to='/allforms' >denote now{' '}<span><i className="fa-solid fa-heart"></i> </span></Button>
                           <Button to='/allforms' className='bg-light' color='txt-orange-style'>denote now{' '}<span> <i className="fa-solid fa-circle-chevron-right"></i> </span></Button>
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

      {/* startUp*/}
         <section id="startUp">
            <div className="interface container pt-3 shadow-sm p-3 mb-5  rounded">
               <div className="row ">
                  <div className="icon-box col-md-4 px-lg-3 ">
                     <div className="ps-lg-4 text-center">
                        <div className="box d-lg-flex pe-2  align-items-center justify-content-center ">
                           <div className="only  py-3   d-flex align-items-center justify-content-center position-relative">
                              <img className="text-danger-subtle" src={icon1} alt="icon" loading="lazy" />
                              <span className=" position-absolute text-warning">
                                 <i className="fa-solid fa-hand-holding-heart fa-3x"></i>
                              </span>
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
                              <img className="text-danger-subtle" src={icon1} alt="icon" loading="lazy" />
                              <span className="position-absolute text-info">
                                 <i className="fa-solid fa-wallet fa-3x"></i>
                              </span>
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
                              <img className="text-danger-subtle" src={icon1} alt="icon" loading="lazy"/>
                              <span className=" position-absolute text-success">
                                 <i className="fa-solid fa-heart-circle-check fa-3x"></i>
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

         {/* land */}
         <section id="about  ">
            <div className="container py-5 ">
               <div className=" row  d-flex  ">
                  <div className="  col-lg-3 col-md-3 align-self-end pb-3 p-md-0 ">
                     <img className="rounded w-100" src={land2} alt="lnadImg" loading="lazy"/>
                  </div>
                  <div className="col-lg-3 col-md-3 ">
                     <img className="rounded w-100" src={land1} alt="landImg" loading="lazy"/>
                  </div>
                  <div className="fundraiser  col-lg-5 col-md-6 ms-lg-5  ">
                     <p className="orange-text pt-2">Help For the Community</p>
                     <h2 className="topic">2021 Fundraiser Campaigns For Social Justice</h2>
                     <img src={land3} alt="" />
                     <p className="text-muted py-3">
                     There are many ways to empower underprivileged kids, but the majority have lacked access to quality education, by fostering opportunities benevolence dolor sit amet, consectetur humanitarian elit, spreading joy and harmony universally. Practicing compassion and generosity, we strive to make a positive impact globally.
                     </p>
                     <p className="orange-border border-start  border-4 fw-bolder py-2 ps-3">
                        Helped Fund <span>78,743</span> Projects in <span>30</span> Countries, Benefiting Over <span>7.6</span> Million People.
                     </p>
                     <Button to='/allforms' devStyle='py-3'>denote now <span> <i className="fa-solid fa-heart"></i> </span></Button>
                  </div>
               </div>
            </div>
         </section>

         {/* causes */}
         <section id="causes">
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
                        <img src={cause1} className="card-img-top w-100" alt="causes" loading="lazy"/>
                        <div className="card-body">
                           <h5 className="card-title">Joy Amid Hardship</h5>
                           <p className="card-text">A heartwarming moment of a boy and his sister finding joy in the face of adversity</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="card">
                        <img src={cause2} className="card-img-top w-100" alt="causes" loading="lazy"/>
                        <div className="card-body">
                           <h5 className="card-title">Spreading Happiness</h5>
                           <p className="card-text">We aim to bring smiles to the faces of those in need, turning their sadness into happiness.</p>
                        </div>
                     </div>
                  </div>
                  <div className="  col-lg-4 col-md-6">
                     <div className="card">
                        <img src={cause3} className="card-img-top w-100" alt="causes" loading="lazy" />
                        <div className="card-body">
                           <h5 className="card-title">Building Better Lives</h5>
                           <p className="card-text">Our mission is to support families, helping them lead better lives.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* quote */}
         <section id="quote">
            <div className="quote my-5">
               <div className="container position-relative py-5">
                  <q>Pray! And listen to God! You can do this alone, but find somebody to do it with you</q>
                  {/* <span>charity name</span> */}
               </div>
            </div>
         </section>
         
         {/*  activites  */}
         <section id="activites">
            <div className=" activites container py-5 ">
               <div className=" orange-border border-start  border-4 fw-bolder py-2 ps-3">
                  <p className="orange-text m-0">Bringing Smile</p>
                  <h2 className="m-0">Our Activities</h2>
               </div>
               <p>Your little support can bring smile to the homeless people</p>
               <div className="row d-flex gy-3">
                  <div className="col-lg-4 col-md-6">
                     <div className=" image-container " >
                        <img className="w-100 img-fluid" src={activ1} alt="active" loading="lazy"/>
                        <p className="layer">Hope in Darkness</p>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="image-container">
                        <img className="w-100 img-fluid" src={activ2} alt="active" loading="lazy" />
                        <p className="layer">Kindness Feeds Souls</p>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="image-container">
                        <img className="w-100 img-fluid" src={activ3} alt="active" loading="lazy"/>
                        <p className="layer">Charity Heals Pain</p>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="image-container">
                        <img className="w-100 img-fluid" src={activ4} alt="active" loading="lazy"/>
                        <p className="layer">Giving Brings Joy</p>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="image-container">
                        <img className="w-100 img-fluid" src={activ5} alt="active" loading="lazy"/>
                        <p className="layer">Love Conquers Poverty</p>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="image-container">
                        <img className="w-100 img-fluid" src={activ6} alt="active" loading="lazy"/>
                        <p className="layer">Compassion Saves Lives</p>
                     </div>
                  </div>
               </div>

               
                  <Button to='/about' devStyle='text-center py-3'>All Activies</Button>
               
            </div>
         </section>

         {/*  our sponsors */}
         <section id="our sponsors">
            <div className="container py-3 ">
               <div className="sponsers text-center">
                  <span className="orange-text">Sponsors</span>
                  <h2 className="">Our Sponsers</h2>
                  <p className=" fs-5 text-black-50">No One Has Ever Become Poor by Giving.</p>
               </div>
               <div className="row pt-3 shadow-sm p-3 mb-5 rounded align-items-center  justify-content-center">
                  {brands.map((brand, index) => (
                     <div className="col-md-3 " key={index}>
                        <Link to={`/brandDetails/${brand._id}`}>
                           <div className="brand rounded d-flex justify-content-center ">
                              <img className="w-75 h-100" src={brand.image.url} alt={brand.title} loading="lazy"/>
                           </div>
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/*  testimoianl */}
         <section id="testimoianl" className="testimoianl  bg-light shadow-sm p-3 mb-5 rounded">
            <div className="text-center">
               <p className="orange-text m-0">Happy People</p>
               <h2 className="m-0">What People Say About Us</h2>
            </div>

            <div id="carouselExampleIndicators" className="carousel   text-center slide w-75 mx-auto py-5">
               <div className="carousel-inner ">
                  <div className="carousel-item  active">
                     <img className="clint-img shadow" src={voltanir1} alt="active" loading="lazy"/>
                     <div className="clint  p-5">
                        <h5 className="fw-bolder">ahmed tarek</h5>
                        <h6 className="text-muted">programmer</h6>
                        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, beatae.</p>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img className="clint-img shadow" src={voltanir2} alt="active" loading="lazy"/>
                     <div className="clint p-5">
                        <h5 className="fw-bolder">mahmoud shalaby</h5>
                        <h6 className="text-muted">developer</h6>
                        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, beatae.</p>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img className="clint-img shadow" src={voltanir3} alt="active" loading="lazy" />
                     <div className="clint p-5">
                        <h5 className="fw-bolder">hossam ramdan</h5>
                        <h6 className="text-muted">designer</h6>
                        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, beatae.</p>
                     </div>
                  </div>
               </div>
               <div className="carousel-indicators position-static m-3 ">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                     <img className="w-100 rounded-circle" src={voltanir1} alt="active" loading="lazy"/>
                  </button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                     <img className="w-100 rounded-circle" src={voltanir2} alt="active" loading="lazy"/>
                  </button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                     <img className="w-100 rounded-circle" src={voltanir3} alt="active" loading="lazy"/>
                  </button>
               </div>
            </div>
         </section>

         {/* team */}
         <section id="team " className="py-3 py-md-5 py-xl-8">
            <div className="container">
               <div className="row ">
                  <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 ">
                     <div className=" orange-border border-start  border-4 fw-bolder py-2 ps-3">
                        <p className="orange-text m-0">Bringing Smile</p>
                        <h2 className="m-0">Our Team</h2>
                     </div>
                     <p className=" mb-4 mb-md-5 ">With Our Team, you can expect personalized attention and engaging designs.</p>
                  </div>
               </div>
            </div>

            <div className="container overflow-hidden">
               <div className="row gy-4 gy-lg-0">
                  <div className="col-12 col-lg-3 col-md-6">
                     <div className="card border-0">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                           <a href="#!">
                              <img className="img-fluid w-100" loading="lazy" src={voltanir1} alt="voltanir" />
                           </a>
                        </figure>
                        <div className="card-body border bg-white p-4">
                           <h2 className="card-title h4 fw-bold mb-3">Flora Nyra</h2>
                           <p className="card-text text-secondary">Define the product vision and strategy and conduct user research to understand the needs of the target market.</p>
                        </div>
                        <div className="card-footer border border-top-0 bg-white p-4">
                           <ul className="nav mb-0 bsb-nav-sep">
                              <li className="nav-item text-secondary">
                                 <a className="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center" href="#!">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-lightbulb text-primary" viewBox="0 0 16 16">
                                       <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                                    </svg>
                                    <span className="ms-2 fs-6">Product Manager</span>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-12 col-lg-3 col-md-6">
                     <div className="card border-0">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                           <a href="#!">
                              <img className="img-fluid w-100" loading="lazy" src={voltanir2} alt="voltanir" />
                           </a>
                        </figure>
                        <div className="card-body border bg-white p-4">
                           <h2 className="card-title h4 fw-bold mb-3">James Levi</h2>
                           <p className="card-text text-secondary">Analyze financial statements to assess a company's financial performance and develop financial models for future performance.</p>
                        </div>
                        <div className="card-footer border border-top-0 bg-white p-4">
                           <ul className="nav mb-0 bsb-nav-sep">
                              <li className="nav-item text-secondary">
                                 <a className="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center" href="#!">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-layers text-primary" viewBox="0 0 16 16">
                                       <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                                    </svg>
                                    <span className="ms-2 fs-6">Financial Analyst</span>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-12 col-lg-3 col-md-6">
                     <div className="card border-0">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                           <a href="#!">
                              <img className="img-fluid w-100" loading="lazy" src={voltanir4} alt="voltanir" />
                           </a>
                        </figure>
                        <div className="card-body border bg-white p-4">
                           <h2 className="card-title h4 fw-bold mb-3">Taytum Elia</h2>
                           <p className="card-text text-secondary">Develop and oversee the visual concept for a product or brand and direct and review the work of other creative professionals.</p>
                        </div>
                        <div className="card-footer border border-top-0 bg-white p-4">
                           <ul className="nav mb-0 bsb-nav-sep">
                              <li className="nav-item text-secondary">
                                 <a className="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center" href="#!">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-brush text-primary" viewBox="0 0 16 16">
                                       <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
                                    </svg>
                                    <span className="ms-2 fs-6">Art Director</span>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-12 col-lg-3 col-md-6">
                     <div className="card border-0">
                        <figure className="card-img-top m-0 ">
                           <a href="#!">
                              <img className="img-fluid w-100 " loading="lazy" src={voltanir3} alt="voltanir" />
                           </a>
                        </figure>
                        <div className="card-body border bg-white p-4 ">
                           <h2 className="card-title h4 fw-bold mb-3">Taytum Elia</h2>
                           <p className="card-text text-secondary">Develop and oversee the visual concept for a product or brand and direct and review the work of other creative professionals.</p>
                        </div>
                        <div className="card-footer border border-top-0 bg-white p-4">
                           <ul className="nav mb-0 bsb-nav-sep">
                              <li className="nav-item text-secondary">
                                 <a className="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center" href="#!">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-brush text-primary" viewBox="0 0 16 16">
                                       <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
                                    </svg>
                                    <span className="ms-2 fs-6">Art Director</span>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>



         
      </>
   );
}




