import React, { useEffect, useState } from 'react'
import './About.css'
import helthicon from '../images/ttshirt.png'
import arrow from '../images/arrows.png'
import axios from 'axios'
import { API_URL } from '../../utils/api';
import { Link } from 'react-router-dom';


export default function About() {
    const [donCard, setDonCard] = useState([]);

 async function getDonationCard(){
    const {data} = await axios.get(`${API_URL}/donationcard`)
    setDonCard(data.data)
    console.log(data);
    console.log(data.data);
  }
  useEffect(() => {
    getDonationCard()
 }, []);
  return (
    <>
<div className="main-banner">
    <div className="title ">
        <h1>about us</h1>      
     
        <div className='hello  '>
        <p className='text-light'>
          <Link to='/' className="unstyled-link"><span>home</span> </Link> &gt; <span>about</span>
        </p>
        </div>
      </div>
</div>




        <section className='py-5'>
            <div className="help-today text-light  ">
                <div className='container '>
                    <div className="row">
                        <div className="col-md-5 ">   
                            <p className='author'>Helping Today</p>
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


        <section>
            
            <div className='container py-3'>
                <div  className="row pt-3 shadow-sm p-3 mb-5  rounded ">
                {donCard.length > 0 && (
                        <>
                   <div className="col-md-6">
                    <img className="w-100 "  src={donCard[0].image.url} alt={donCard[0].title} /> 
                    </div>
                    <div className="col-md-6">
                    <h3>{donCard[0].title}</h3>
                        <div>{donCard[0].info}</div>
                        <hr />
                        <div>{donCard[0].description}</div>
                        <Link to={'/donation'}>
                <div className="buttons py-3">
                <button className="text-uppercase text-light  ">
                  all details{" "}
                  <span> <i className="fa-solid fa-circle-chevron-right"></i></span>
                </button>
              </div>
              </Link>
                    </div>
                    </>
                    )}
                </div>   
            </div>
            
        </section>




    </>
  )
}
