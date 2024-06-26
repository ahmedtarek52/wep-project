import React, { useEffect, useState } from 'react'
import './About.css'
import helthicon from '../images/charity.png'
import arrow from '../images/arrows.png'
import axios from 'axios'
import { API_URL } from '../../utils/api';
import { Link } from 'react-router-dom';
import aboutus from "../images/1.png"
import aboutus2 from "../images/we_need_help_img_2.jpg"
import { useContext } from 'react';
import { DataContext } from '../../Context/Store';



export default function About() {
  let { organizations} =useContext(DataContext);
    const [donCard, setDonCard] = useState([]);

    
      async function getDonationCard(){
        try {
        const {data} = await axios.get(`${API_URL}/donationcard`)
        setDonCard(data.data)
        console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDonationCard()
 }, []);
  return (
    <>
      <div className="main-banner">
        <div className="title ">
          <h1>about us</h1>

          <div className="hello  ">
            <p className="text-light">
              <Link to="/" className="unstyled-link">
                <span>home</span>{" "}
              </Link>{" "}
              &gt; <span>about</span>
            </p>
          </div>
        </div>
      </div>

      <section id="about  ">
        <div className="container py-5 ">
          <div className=" row  d-flex  ">
            <div className="   col-md-5  ">
              <img className="rounded w-100" src={aboutus} alt="aboutus" loading='lazy' />
            </div>
            <div className="fundraiser   col-md-6 offset-md-1   ">
              <div className="help pt-2">
                <h1>Helping Today</h1>
              </div>
              <h1 className="topic">Our Goal is to Help Poor People</h1>
              <div className="text-muted ">
                <h5>
                  Today, we supported the education of 20000 children born in
                  poor families cross 12 undeveloped countries over the world .
                  in the future, our goals are
                </h5>
              </div>
              <div className="abouticon  ">
                <div className="icon-with-text">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Have enough food for life. </span>
                </div>
                <div className="icon-with-text">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Poor children can return to school.</span>
                </div>
                <div className="icon-with-text ">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Support poor people to have better jobs. </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="help-today text-light  ">
          <div className="container ">
            <div className="row">
              <div className="col-md-5 ">
                <div className="author">Helping Today</div>
                <h2>We are Helping People in Need Around the World</h2>
                <div className="d-flex">
                  <div className="play-box mt-5 me-5">
                    <span className="fa fa-play fa-2x text-black"></span>
                  </div>
                  {/* <a href=""> */}
                  <img className="arrow" src={arrow} alt="arrow" loading='lazy' />
                  {/* </a> */}
                </div>
              </div>
              <div className="col-md-6 offset-md-1 ">
                <div className="big-box d-flex py-5">
                  <span className="main-box ">
                    <img className=" small-icon" src={helthicon} alt="" loading='lazy'/>
                  </span>
                  <div className="ps-4">
                    <h4>Healthy Food</h4>
                    <p>
                      Millions of people have not enough food, so we're working
                      to feed the hungry.
                    </p>
                  </div>
                </div>
                <hr />
                <div className="big-box d-flex py-5">
                  <span className="main-box ">
                    <img className=" small-icon" src={helthicon} alt="" loading='lazy'/>
                  </span>
                  <div className="ps-4">
                    <h4>Quality Education</h4>
                    <p>
                    Millions of people lack access to quality education, so we're working to
                     ensure learning opportunities for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div > 
        <div className='container'>
        <p>
          We are proud to announce our collaboration with those charities, a
          dedicated organizations those shares our vision for a better future.
          Through this partnership, we aim to amplify our efforts and bring
          about meaningful change. Together, we are committed to making a
          positive impact in our community and beyond. Join us as we work hand
          in hand to support our project and uplift those in need.
        </p>
        </div>
     
        <div className="row g-3 align-items-center">
        {organizations.map((organization) => (
          <div className="col-md-4" key={organization._id}>
            <Link to={`/organizationdetails/${organization._id}`}>
              <div className="text-center">
                <div className="organaztion-img">
                  <img
                    src={organization.images[0].url}
                    alt={organization.title}
                    loading='lazy'
                  />
                </div>
                {/* <h4>{organization.title}</h4> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
      </div>

      <section id="about  ">
        <div className="container py-5 ">
          <div className=" row  d-flex  ">
            <div className="fundraiser  col-md-5 ">
              <div className="help pt-2">
                <h1>Asked Quesitons</h1>
              </div>
              <h1 className="topic">We Need Your Help</h1>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed border border-primary rounded-pill my-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                     Clothe a Life, Spread Warmth
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
               <div className="accordion-body">
  <strong>Clothe a Life, Spread Warmth.</strong>{" "}
  Your donations can provide essential clothing for those in need. We accept new and gently used clothing items of all sizes and types. Every piece of clothing can make a significant difference in someone's life. 
  From warm winter coats to summer dresses, your contributions help keep families clothed throughout the year. 
  Clothing is a basic necessity that many take for granted, it's a luxury they cannot afford. 
  By donating, you are ensuring that everyone has the dignity and comfort of appropriate attire.
</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button  collapsed border border-primary rounded-pill my-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Empower Families, Transform Lives
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                <div className="accordion-body">
  <strong>Empower Families, Transform Lives.</strong>{" "}
  Your monetary donations can have a profound effect on poor families. Financial contributions enable us to provide immediate assistance, support sustainable development, and create lasting change in the lives of those in need. 
  With your help, we can fund educational programs, healthcare initiatives,
  Every dollar donated goes directly to those in need, helping to break the cycle of poverty and build a brighter future. 
  Your generosity can transform lives, providing hope and opportunity where it is needed most.
</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed border border-primary rounded-pill my-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Nourish and Furnish Hope
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
  <strong>Nourish and Furnish Hope.</strong>{" "}
  Your support in providing food and furniture can drastically improve the quality of life for many families. Donations of non-perishable food items and gently used furniture are greatly appreciated and will be put to good use. 
  Imagine the joy and relief of a family receiving a hearty meal or a comfortable bed to sleep in. 
  Your contributions ensure that no one has to go hungry or live in an empty home. 
  Together, we can nourish bodies and furnish homes, spreading hope and comfort to those who need it most.
</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  col-md-6 offset-md-1 align-self-end pb-3 p-md-0 ">
              <img className="need-help rounded" src={aboutus2} alt="about" loading='lazy'/>
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
                  <img
                    className="w-100 " loading='lazy'
                    src={donCard[0].image.url}
                    alt={donCard[0].title}
                  />
                </div>
                <div className="col-md-6">
                  <h3>{donCard[0].title}</h3>
                  <div>{donCard[0].info}</div>
                  <hr />
                  <div>{donCard[0].description}</div>
                  <Link to={"/donation"}>
                    <div className="buttons py-3">
                      <button className="text-uppercase text-light  ">
                        all details{" "}
                        <span>
                          {" "}
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


 
    </>
  );
}
