import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../../utils/api';

export default function Brands() {
   const [brands, setBrands] = useState([]);

   async function getBrands() {
      try {
         const response = await axios.get(`${API_URL}/brands`);
         console.log(response);
         setBrands(response.data.brands);
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      getBrands();
   }, []);



   return (
      <div className="container ">
         <div className="row g-3 align-items-center justify-content-center ">
            {brands.map((brand, index) => (
               <div className="col-md-4 text-center " key={index}>
                  <Link to={`/branddetails/${brand._id}`}>
                     <div className="brand rounded ">
                        <img className="w-75 h-100"  src={brand.image.url} alt={brand.title} />
                     </div>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
}
