import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { API_URL } from '../../utils/api';

export default function OrganizationDetails() {
   let { id } = useParams();
   // console.log(id);
   const [organDetails, setOrganDetails] = useState({});

   async function getOrganDetails() {
      try {
         const { data } = await axios.get(`${API_URL}/organizations/${id}`);
         console.log(data);

         setOrganDetails(data.data);
      } catch (error) {
         console.error(error);
         // Handle the error, e.g., display an error message or set a default value for organDetails
      }
   }

   useEffect(() => {
      getOrganDetails();
   }, []);

   return (
      <>
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
      </>
   );
}
