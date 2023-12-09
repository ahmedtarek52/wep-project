import React, { useEffect, useRef } from 'react';
import cha from '../images/home1.jpg';
import cha1 from '../images/home2.jpg';
import cha2 from '../images/cha-childrens-1.jpg';
import cha3 from '../images/cha-childrens1-1-1.jpg';
import cha4 from '../images/sub-border-1.png';
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
      <div className="carousel vh-100 w-100  position-relative" ref={carouselRef}>
        <div className="list">
          <div className="item  position-absolute carousel-item active">
            <img className="w-100 h-100" src={cha} alt="" />
            <div className="content col-md-6  position-absolute text-light">
              <div className="author">we help you</div>
              <div className="topic text-uppercase">save the childrens</div>
              <div className="des ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat,
                itaque eum
              </div>
              <div className="buttons text-align-center d-flex ">
                <button className="text-uppercase text-light  ">denote now <span><i className="fa-solid fa-heart"></i></span></button>
                <button className="text-uppercase bg-light ">contact us <span><i className="fa-solid fa-circle-chevron-right"></i></span></button>
              </div>
            </div>
          </div>
          <div className="item position-absolute carousel-item active">
            <img className="w-100 h-100" src={cha1} alt="" />
            <div className="content col-md-6 position-absolute text-light ">
              <div className="author">we help you</div>
              <div className="topic text-uppercase">make differance today</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat,
                itaque eum neque
              </div>
              <div className="buttons text-align-center d-flex ">
                <button className="text-uppercase text-light ">denote now <span><i className="fa-solid fa-heart"></i></span></button>
                <button className="text-uppercase bg-light ">contact us <span><i className="fa-solid fa-circle-chevron-right"></i></span></button>
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
{/* satart land */}
    <section className='about py-5 '>
      <div className="container  ">
        <div className=" row  d-flex  ">          
           <div className="  col-lg-3 col-md-3 align-self-end pb-3 p-md-0 ">
           <img className='rounded w-100' src={cha3} alt="" />
           </div>
           <div className="col-lg-3 col-md-3 ">
           <img className='rounded w-100' src={cha2} alt="" />
            </div>
          <div className="fundraiser  col-lg-5 col-md-6 ms-lg-5  ">
            <p className='help pt-2'>Help For the Community</p>
            <h2 className='topic'>2021 Fundraiser Campaigns For Social Justice</h2>
            <img src={cha4} alt="" />
            <p className='text-muted py-3'>There are many variations of passages of orem Ipsum available, but the majority have suffered alteration in some form, by cted ipsum dolor sit amet, consectetur adipisicing elit, sed do usmod temponcid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi.</p>
            <p className="border-start  border-4 fw-bolder py-2 ps-3">Helped Fund <span>78,743</span> Projects in <span>30</span> Countries, Benefiting Over <span>7.6</span> Million People.</p>
            <div className="buttons py-3">
            <button className="text-uppercase text-light  ">denote now <span><i className="fa-solid fa-heart"></i></span></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}