import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { API_URL } from '../../utils/api';

export default function Brands() {
   const [brands, setBrands] = useState([]);

   async function getBrands() {
      try {
         const response = await axios.get(`${API_URL}/brands`);
         console.log(response); // Check the value of response.data.data
         setBrands(response.data.brands);
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      getBrands();
   }, []);

   // console.log(brands); // Check the value of brands

   return (
      <div className="container">
         <div className="row g-3 align-items-center justify-content-center">
            {brands.map((brand, index) => (
               <div className="col-md-4 text-center " key={index}>
                  <Link to={`/brandDetails/${brand._id}`}>
                     <div className="brand rounded ">
                        <img className="w-75" src={brand.image.url} alt={brand.title} />
                     </div>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
}
=======

export default function Brands() {
  const [brands, setBrands] = useState([]);

  async function getBrands() {
    try {
      const response = await axios.get('https://nervous-plum-walkingstick.cyclic.app/brands');
      console.log(response.data.data); // Check the value of response.data.data
      setBrands(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBrands();
  }, []);

  // console.log(brands); // Check the value of brands

  return (
    <>
      <div className="row">
     
      {brands.map((brand, index) => (
           
            <div className="col-md-3 d-flex justify-content-center  align-items-center " key={index}>
               <Link to={`/brandDetails/${brand._id}`}>
                <div className="brand rounded border border-3 border-dark ">                 
                  <img className='w-100' src={brand.image.url} alt={brand.title} />                 
                </div>
                </Link>
              </div>
            
        ))}

      </div>
    </>
  );
}
>>>>>>> 407829ea4c51cec6532e07e26c5ceddd7840fe7b
