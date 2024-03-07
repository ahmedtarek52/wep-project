import React from 'react'
import './About.css'
import helthicon from '../images/ttshirt.png'
import shirticon from '../images/tshirt_9495337.png'
import arrow from '../images/arrows.png'
export default function About() {
  return (
    <>
<div className="aboutus">
    <div className="title ">
        <h1>about us</h1>      
     
        <div className='hello  '>
            <h2 className='text-light'>home</h2>
            <h2 className='text-light'>about </h2>
        </div>
      </div>
</div>


{/* <section class="news-detail-header-section text-center">
            <div class="section-overlay"></div>

            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-12">
                        <h1 class="text-white">News Listing</h1>
                    </div>

                </div>
            </div>
        </section> */}


        <section className='py-5'>
            <div className="help-today text-light  ">
                <div className='container '>
                    <div className="row">
                        <div className="col-md-5 ">   
                            <p className='smile'>Helping Today</p>
                            <h2>We’re Helping People in Need Around the World</h2>
                            <div className='d-flex'>
                                <div className='play-box mt-5 me-5'>
                                <span className='fa fa-play fa-2x text-black'></span>
                                </div>
                                <img className='arrow' src={arrow} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-1 ">
                            <div className='big-box d-flex py-5'>
                                <span className='main-box '>
                                    <img className=' small-icon' src={helthicon} alt="" />
                                </span>
                                <div className='ps-4'>
                                    <h4>Healthy Food</h4>
                                    <p>Millions of people have not enough food, so we're working to feed the hungry.</p>
                                </div>
                            </div>
                            <hr />
                            <div className='big-box d-flex py-5'>
                                <span className='main-box '>
                                    <img className=' small-icon' src={helthicon} alt="" />
                                </span>
                                <div className='ps-4'>
                                    <h4>Healthy Food</h4>
                                    <p>Millions of people have not enough food, so we're working to feed the hungry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
