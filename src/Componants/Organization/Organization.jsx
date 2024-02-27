import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { API_URL } from '../../utils/api';

export default function Organization() {
   const [organizations, setOrganizations] = useState([]);

   async function getOrganizations() {
      try {
         const { data } = await axios.get(`${API_URL}/organizations`);
         setOrganizations(data.allOrganizaions);
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      getOrganizations();
   }, []);

   return (
      <div className="row g-3 align-items-center">
         {organizations.map((organization) => (
          <div className="col-md-4" key={organization._id}>
               <Link to={`/organizationDetails/${organization._id}`}>
                  <div className="text-center">
                     <div className="organaztion-img">
                        <img src={organization.images[0].url} alt={organization.title} />
                     </div>
                     {/* <h4>{organization.title}</h4> */}
                  </div>
               </Link>
            </div>
         ))}
      </div>
   );
}
=======

export default function Organization() {
  const [organizations, setOrganizations] = useState([]);

  async function getOrganizations() {
    try {
      const { data } = await axios.get('https://nervous-plum-walkingstick.cyclic.app/getorganizaion');
      setOrganizations(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOrganizations();
  }, []);

  return (
    <div className="row">
      {organizations.map((organization) => (
        <div className="col-md-3 bg-danger  py-5" key={organization._id}>
          <Link to={`/organizationDetails/${organization._id}`}>   
          
             
              <div className='Box d-flex align-items-center position-relative justify-content-center bg-info w-100 h-100  '>
               <div className='text-center   rounded border border-3 border-dark w-75 h-75 bg-primary py-4 d-flex align-items-center justify-content-center'> 
               <img className=" w-auto  "  src={organization.images[0].url} alt={organization.title} />
               </div>
              
              
              </div>
         <h4 className='text-center '>{organization.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}
>>>>>>> 407829ea4c51cec6532e07e26c5ceddd7840fe7b
