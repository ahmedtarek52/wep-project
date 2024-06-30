import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { API_URL } from '../../utils/api';
import about1 from "../images/about-img-1.jpg"
import blog1 from "../images/blog-image-1.jpg"
import blog2 from "../images/blog-image-2.jpg"
import blog3 from "../images/blog-image-3.jpg"
import blog4 from "../images/blog-image-4.jpg"
import shirt  from "../images/shirt3.jpg"
import shirt2  from "../images/shirt1.jpg"

export default function BrandDetails() {
  let { id } = useParams();
  // console.log(id);
const [allDetails , setAllDetails] = useState ({})
// console.log(allDetails);
   async function getBrandDetails(id){

    const { data } = await axios.get(`${API_URL}/brands/${id}`);

    setAllDetails(data.data);
    }
    useEffect(() => {
        getBrandDetails(id);
      }, []);
  return (
    <>
    
    <div>
      {allDetails.image ? (
        <div className="brand container py-5">
          <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
          <div className='w-50 '>
            <img className='w-100' src={allDetails.image.url} alt={allDetails.title} />
          </div>
          </div>
          <div className="col-md-6">
           
            <h3 className=' text-uppercase'>we are {allDetails.title} group </h3>
          <p>{allDetails.info}</p>
          </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>



    <section className="py-3 py-md-5">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img className="img-fluid rounded" loading="lazy" src={about1} alt="About 1" />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="mb-3">Who Are We?</h2>
                <p className="lead fs-4 text-secondary mb-3">we are {allDetails.title} group. Our perspective is to furnish outstanding captivating services.</p>
                <p className="mb-5">{allDetails.info}</p>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="h4 mb-3">Versatile Brand</h2>
                        <p className="text-secondary mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="h4 mb-3">Digital Agency</h2>
                        <p className="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
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



<section className="py-3 py-md-5">
  <div className="container overflow-hidden">
    <div className="row gy-5">
      <div className="col-12">
        <div className="row align-items-center gy-3 gy-md-0 gx-xl-5">
          <div className="col-xs-12 col-md-6">
            <div className="img-wrapper position-relative bsb-hover-push">
              <a href="#!">
                <span className="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">Sports</span>
                <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src={blog1} alt="Sports"/>
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div>
              <p className="text-secondary mb-1">Nov 11, 2022</p>
              <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Useful Skateboarding Tips For Beginners</a></h2>
              <p className="mb-4">Learning how to skateboard can be a simultaneously exciting and terrifying experience. Explore the 20 top tips for beginner skaters.</p>
              <a className="btn btn-primary" href="#!" target="_self">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
          <div className="col-xs-12 col-md-6">
            <div className="img-wrapper position-relative bsb-hover-push">
              <a href="#!">
                <span className="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">Travel</span>
                <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src={blog2} alt="Travel"/>
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div>
              <p className="text-secondary mb-1">Oct 9, 2022</p>
              <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Strange Facts About Hot Air Balloons</a></h2>
              <p className="mb-4">You think the Wright Brothers were impressive? Hot air balloons were carrying people through the air almost a century before the Wright Brothers were even born.</p>
              <a className="btn btn-primary" href="#!" target="_self">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="row align-items-center gy-3 gy-md-0 gx-xl-5">
          <div className="col-xs-12 col-md-6">
            <div className="img-wrapper position-relative bsb-hover-push">
              <a href="#!">
                <span className="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">Photography</span>
                <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src={blog3} alt="Photography"/>
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div>
              <p className="text-secondary mb-1">Sep 17, 2022</p>
              <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Reasons Why Photography Is an Art Form</a></h2>
              <p className="mb-4">Before the first photo was captured in the 18th century, lifelike images of what the eyes can see could only be made by talented artists.</p>
              <a className="btn btn-primary" href="#!" target="_self">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
          <div className="col-xs-12 col-md-6">
            <div className="img-wrapper position-relative bsb-hover-push">
              <a href="#!">
                <span className="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">Food</span>
                <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src={blog4} alt="Food"/>
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div>
              <p className="text-secondary mb-1">Aug 23, 2022</p>
              <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Benefits of Having a Heavy Breakfast Every Morning</a></h2>
              <p className="mb-4">Running late for work or school? "Let’s skip the breakfast!" Well, this might sound like the most ideal idea to save time when you are on the run.</p>
              <a className="btn btn-primary" href="#!" target="_self">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<section className="bsb-post-pagination-2 bg-light py-3 py-md-5 py-xl-8">
  <div className="container overflow-hidden">
    <div className="row justify-content-lg-center">
      <div className="col-12 col-lg-10 col-xl-8">
        <div className="bg-white p-4 p-md-5 border border-light-subtle border-bottom-0">
          <div className="row gy-3 gy-md-0 align-items-md-center">
            <div className="col-12 col-md-2">
              <a href="#!">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
              </a>
            </div>
            <div className="col-12 col-md-8">
              <a href="#!" className="d-block px-md-3 text-decoration-none">
                <h5 className="link-secondary fw-bold fs-6 mb-3">Previous Post</h5>
                <h2 className="link-dark fs-5">Useful Skateboarding Tips For Beginners</h2>
              </a>
            </div>
            <div className="col-12 col-md-2">
              <a href="#!" className="bsb-hover-image d-block rounded overflow-hidden">
                <img className="img-fluid author-avatar bsb-scale bsb-hover-scale-up" loading="lazy" src={shirt} alt="Useful Skateboarding Tips For Beginners"/>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 p-md-5 border border-light-subtle">
          <div className="row gy-3 align-items-md-center">
            <div className="col-12 col-md-2">
              <a href="#!" className="bsb-hover-image d-block rounded overflow-hidden">
                <img className="img-fluid author-avatar bsb-scale bsb-hover-scale-up" loading="lazy" src={shirt2} alt="Reasons Why Photography Is an Art Form"/>
              </a>
            </div>
            <div className="col-12 col-md-8 text-end">
              <a href="#!" className="d-block px-md-3 text-decoration-none">
                <h5 className="link-secondary fw-bold fs-6 mb-3">Next Post</h5>
                <h2 className="link-dark fs-5">Reasons Why Photography Is an Art Form</h2>
              </a>
            </div>
            <div className="col-12 col-md-2 text-end">
              <a href="#!">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </a>
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
