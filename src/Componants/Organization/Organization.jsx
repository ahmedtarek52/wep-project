import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
               <Link to={`/organizationdetails/${organization._id}`}>
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

