import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { API_URL } from '../../utils/api';
import process from "../images/process-img-1.png"
import team from "../images/fact-img-1.webp"
import YouTube from 'react-youtube';
import Spinner from '../Spinner/Spinner';

export default function OrganizationDetails() {
   let { id } = useParams();
   // console.log(id);
   const [organDetails, setOrganDetails] = useState({});
   const [loading, setLoading] = useState(true);

   async function getOrganDetails() {
      try {
         const { data } = await axios.get(`${API_URL}/organizations/${id}`);
        //  console.log(data);

         setOrganDetails(data.data);
      } catch (error) {
         console.error(error);
         
      }
      finally{
        setLoading(false);
      }
   }

   useEffect(() => {
      getOrganDetails();
   }, );


   const videoId = 'y-tqxFjVrxA';
   return (


    
      <>
{loading ? (
        <Spinner/>
      ) : (<div>



<div className="container py-5">
            <h2 className='text-center'>Organisation Details</h2>
            <div className="row bg-light">
               <div className="col-md-6 ">
                  {organDetails.images && (
                     <Carousel>
                        {organDetails.images.slice(1).map((image, i) => (
                           <div key={image._id}>
                              <img className="w-75" src={image.url} alt={organDetails.title} loading='lazy' />
                           </div>
                        ))}
                     </Carousel>
                  )}
               </div>
               <div className="col-md-6">
                  <h2>We Make a Difference in their Life</h2>
                  <p>We help poor people to break the cycle of poverty through education, build healthcare systems in remote areas to help poor people to stay healthier.</p>
               </div>
            </div>
            <h4 className="text-center">{organDetails.title}</h4>
            <h4 className="  text-dark-emphasis fw-light ">{organDetails.organizationInfo}</h4>
         </div>


<section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row gy-5 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img className="img-fluid rounded" loading="lazy" src={process} alt="" />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-end">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3">Our Design Process</h2>
                <p className="lead fs-4 text-secondary mb-5">Our design approach is very organized to ensure satisfaction for our esteemed clients.</p>
                <div className="d-flex mb-4">
                  <div>
                    <span className="btn btn-primary bsb-btn-circle pe-none me-4">1</span>
                  </div>
                  <div>
                    <h4 className="mb-3">Planning</h4>
                    <p className="mb-0 text-secondary">Etiam facilisis, erat ac ullamcorper dictum, nulla erat pretium erat, ac tempus ligula sem ac erat.</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div>
                    <span className="btn btn-primary bsb-btn-circle pe-none me-4">2</span>
                  </div>
                  <div>
                    <h4 className="mb-3">Launch</h4>
                    <p className="mb-0 text-secondary">Etiam facilisis, erat ac ullamcorper dictum, nulla erat pretium erat, ac tempus ligula sem ac erat.</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <span className="btn btn-primary bsb-btn-circle pe-none me-4">3</span>
                  </div>
                  <div>
                    <h4 className="mb-3">Finalize Product</h4>
                    <p className="mb-0 text-secondary">Etiam facilisis, erat ac ullamcorper dictum, nulla erat pretium erat, ac tempus ligula sem ac erat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


      <div className=' justify-content-center align-items-center d-flex' style={{ maxWidth: '100%' }}>
      <YouTube videoId={videoId} />
    </div>
      

<section class="bg-light py-3 py-md-5">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h3 class="fs-6 text-secondary mb-2 text-uppercase text-center">Our Success</h3>
        <h2 class="mb-4 display-5 text-center">We have a proven track record of success.</h2>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row gy-4 gy-lg-0 align-items-lg-center">
      <div class="col-12 col-lg-6">
        <img class="img-fluid rounded" loading="lazy" src={team} alt="Our Success"/>
      </div>
      <div class="col-12 col-lg-6">
        <div class="row justify-content-xl-end">
          <div class="col-12 col-xl-11">
            <div class="row gy-4 gy-sm-0 overflow-hidden">
              <div class="col-12 col-sm-6">
                <div class="card border-0 border-bottom border-primary shadow-sm mb-4">
                  <div class="card-body text-center p-4 p-xxl-5">
                    <h3 class="display-2 fw-bold mb-2">60</h3>
                    <p class="fs-5 mb-0 text-secondary">Finished Projects</p>
                  </div>
                </div>
                <div class="card border-0 border-bottom border-primary shadow-sm">
                  <div class="card-body text-center p-4 p-xxl-5">
                    <h3 class="display-2 fw-bold mb-2">18k+</h3>
                    <p class="fs-5 mb-0 text-secondary">Issues Solved</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="card border-0 border-bottom border-primary shadow-sm mt-lg-6 mt-xxl-8 mb-4">
                  <div class="card-body text-center p-4 p-xxl-5">
                    <h3 class="display-2 fw-bold mb-2">10k+</h3>
                    <p class="fs-5 mb-0 text-secondary">Happy Customers</p>
                  </div>
                </div>
                <div class="card border-0 border-bottom border-primary shadow-sm">
                  <div class="card-body text-center p-4 p-xxl-5">
                    <h3 class="display-2 fw-bold mb-2">78</h3>
                    <p class="fs-5 mb-0 text-secondary">Awwwards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</div>)}
      </>
   );
}
