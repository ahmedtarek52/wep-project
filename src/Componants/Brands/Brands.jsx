import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function Brands() {
  const [brands, setBrands] = useState([]);

  async function getBrands() {
    try {
      const response = await Axios.get('https://nervous-plum-walkingstick.cyclic.app/brands');
      console.log(response.data.data); // Check the value of response.data.data
      setBrands(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBrands();
  }, []);

  console.log(brands); // Check the value of brands

  return (
    <>
      <div className="row">
      {brands.map((brand, index) => (
          <div className="col-md-3" key={index}>
            <div className="brand">
              <h4>{brand.title}</h4>
              <img className='w-100' src={brand.image.url} alt={brand.title} />
              <p>{brand.info}</p>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}