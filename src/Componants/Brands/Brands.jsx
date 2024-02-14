import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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