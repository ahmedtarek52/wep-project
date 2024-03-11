import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../utils/api';
import './Dontation.css'
import { Link } from 'react-router-dom';

export default function Donation() {
  const [donInfo, setDonInfo] = useState([]);

  async function getSingleDonation() {
    try {
      const { data } = await axios.get(`${API_URL}/donationcard/654a23eaeb5399d6d7875421`);
      setDonInfo(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }

   useEffect(() => {
    getSingleDonation()
  }, []);
  return (
    <>
<section>
<div className="main-banner">
    <div className="title ">
        <h1>donation</h1>      
     
        <div className='hello  '>
              <p className='text-light'>
              <Link to='/' className="unstyled-link"><span>home</span> </Link> &gt; <span>donation</span>
              </p>
            </div>
      </div>
</div>
</section>

<section>
        <div className="container ">
          {Object.keys(donInfo).length > 0 ? (
            <>
             <div className="text-center">
             <img className='w-100' src={donInfo.image.url} alt={donInfo.title} />
             </div>
              <div>
                <h3 className='text-center'>{donInfo.title}</h3>
                <p>{donInfo.description}</p>
                <p>{donInfo.info}</p>
              </div>
              <div className="buttons py-3">
                <button className="text-uppercase text-light">
                  denote now{" "}
                  <span> <i className="fa-solid fa-heart"></i></span>
                </button>
              </div>
            </>
          ) : (
            <div>Loading...</div> // Display a loading state
          )}
        </div>
      </section>

</>
  )
}
