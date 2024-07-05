import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet';
import { API_URL } from '../../utils/api';
import './Dontation.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../Context/Store';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Ui/Button';


export default function Donation() {


let { brands , organizations } =useContext(DataContext);


  const [donInfo, setDonInfo] = useState([]);

  async function getSingleDonation() {
    try {
      const { data } = await axios.get(`${API_URL}/donationcard/654a23eaeb5399d6d7875421`);
      setDonInfo(data.data);
      // console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }

   useEffect(() => {
    getSingleDonation()
  }, []);


  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <>
<Helmet>
  <meta charSet="utf-8" />
  <title>Donation</title>
</Helmet>
    
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


<section className="w-100 py-5 py-md-5 py-lg-5 bg-light">
<div className="container px-4 px-md-3">
<div className="d-flex flex-column align-items-center justify-content-center text-center">
<div className="mb-5">
<h2 className="h3 font-weight-bold">Giving Back to the Community</h2>
<p className="mx-auto text-muted" style={{ maxWidth: '800px' }}>
At our organization, we believe in making a positive impact on the world around us. Our mission is to support those in need through various charitable initiatives, from clothing drives to monetary donations.
</p>
</div>
<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
<div className="col">
<div className="card h-100 p-4">
  <h3 className="h4 font-weight-semibold">Clothing Donations</h3>
  <p className="text-muted">
    We accept gently used clothing, shoes, and accessories to distribute to local shelters and community centers.
  </p>
</div>
</div>
<div className="col">
<div className="card h-100 p-4">
  <h3 className="h4 font-weight-semibold">Monetary Donations</h3>
  <p className="text-muted">
    Your financial contributions help us fund our various outreach programs and support those in need.
  </p>
</div>
</div>
<div className="col">
<div className="card h-100 p-4">
  <h3 className="h4 font-weight-semibold">Material Goods</h3>
  <p className="text-muted">
    We also accept donations of household items, school supplies, and other essential goods to distribute to families in our community.
  </p>
</div>
</div>
</div>
</div>
</div>
</section>
   
     
<section>
<div className="row g-3 align-items-center">
  {organizations.map((organization) => (
  <div className="col-md-4" key={organization._id}>
        <Link to={`/organizationdetails/${organization._id}`}>
          <div className="text-center">
              <div className="organaztion-img">
                <img src={organization.images[0].url} alt={organization.title} />
              </div>
          </div>
        </Link>
    </div>
  ))}
</div>
</section>
      

<section className="text-center py-5">
<div className="container">
  <p className="lead">
    Our provision of humanitarian aid to civilians during armed conflict goes back to the very roots of our foundation in the 1990s. Over the years, we have begun to address longer-term challenges, such as the lack of access to quality education, health care, and environmental degradation.
  </p>
  <button className="btn btn-link text-danger" onClick={handleToggle}>
    {showMore ? 'HIDE TEXT' : 'ENTIRE TEXT'}
  </button>
  {showMore && (
    <p className="lead">
      How humanitarian aid and development aid differ:
      <br />
      Humanitarian aid is a rapid intervention designed to save lives, alleviate hardship, and get disaster victims back on their feet.
      Development aid is an effort to help people in their efforts to lift themselves out of poverty and develop further.
      We often follow up humanitarian activities with development projects to help prevent future crises and mitigate their negative impacts.
      <br />
      Our Humanitarian and Development Section operates in 22 countries and has permanent offices in 15 of them. Each year we carry out projects worth millions of Euros that help hundreds of thousands of people in disadvantaged areas of the world.
    </p>
  )}
</div>
</section>


<section>
<div className="container py-5 ">
    <div className="row">
        <div className="col-md-12">
            <div className="main-timeline">
                <Link href="#" className="timeline">
                    <div className="timeline-icon"><i className="fa fa-globe"></i></div>
                    <div className="timeline-content">
                        <h3 className="title">Web Designer</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                        </p>
                    </div>
                </Link>
                <Link href="#" className="timeline">
                    <div className="timeline-icon"><i className="fa fa-rocket"></i></div>
                    <div className="timeline-content">
                        <h3 className="title">Web Developer</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                        </p>
                    </div>
                </Link>
                <Link href="#" className="timeline">
                    <div className="timeline-icon"><i className="fa fa-briefcase"></i></div>
                    <div className="timeline-content">
                        <h3 className="title">Web Designer</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                        </p>
                    </div>
                </Link>
                <Link href="#" className="timeline">
                    <div className="timeline-icon"><i className="fa fa-mobile"></i></div>
                    <div className="timeline-content">
                        <h3 className="title">Web Developer</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
</div>
</section>

<section>
<div className="container ">
  <div className="row g-3 align-items-center justify-content-center ">
    {brands.map((brand, index) => (
        <div className="col-md-3 text-center " key={index}>
          <Link to={`/branddetails/${brand._id}`}>
              <div className="brand rounded ">
                <img className="w-75 h-100"  src={brand.image.url} alt={brand.title} />
              </div>
          </Link>
        </div>
    ))}
  </div>
</div>
</section>


<section className="w-100 py-5 py-md-5 py-lg-5 bg-light">
<div className="container px-4 px-md-3">
<div className="row g-4 g-md-4">
  <div className="col-md-6">
    <div className="mb-4">
      <div className="   px-3 py-1 orange-text">Charity Work</div>
    </div>
    <h2 className="display-5 font-weight-bold">Giving Back to the Community</h2>
    <p className="mx-auto text-muted" style={{ maxWidth: '700px' }}>
      At Acme Charity, our mission is to make a positive impact on the lives of those in need. We believe in the power of community and strive to support local organizations and individuals through various donation programs.
    </p>
    <div className="mt-4">
      <h3 className="h5 font-weight-semibold">Accepted Donations</h3>
      <ul className="list-unstyled text-muted mt-2">
        <li>Monetary Donations</li>
        <li>Clothing and Textiles</li>
        <li>Non-Perishable Food Items</li>
        <li>Household Goods and Furniture</li>
      </ul>
    </div>
    <div className="mt-4">
      <h3 className="h5 font-weight-semibold">Donation Process</h3>
      <p className="mt-2 text-muted">
        Donating to Acme Charity is easy and secure. You can contribute through our online payment portal or by submitting a donation form. For every donation, you'll receive Acme Coins that can be redeemed for exclusive discounts from our partner companies.
      </p>
    </div>
  </div>
  <div className="col-md-6 d-flex flex-column">
    <div className="mb-4">
      <div className="orange-text px-3 py-1 ">Impact</div>
    </div>
    <p className="mx-auto text-muted" style={{ maxWidth: '700px' }}>
      Your donations make a real difference in the lives of those we serve. From providing essential resources to supporting community-based initiatives, your generosity helps us positively impact the world around us.
    </p>
    <div className=" ">
      {Object.keys(donInfo).length > 0 ? (
        <>
          <div className="text-center">
          <img className='w-100' src={donInfo.image.url} alt={donInfo.title} />
          </div>
          <div>
            {/* <h3 className='text-center'>{donInfo.title}</h3> */}
            {/* <p>{donInfo.description}</p> */}
            {/* <p>{donInfo.info}</p> */}
          </div>
        <Button devStyle='py-3'>donate now</Button>
        </>
      ) : (
        <div>Loading...</div> // Display a loading state
      )}
    </div>
  </div>
</div>
</div>
</section>

      
</>
  )
}
