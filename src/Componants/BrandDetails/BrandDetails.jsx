import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { API_URL } from '../../utils/api';


export default function BrandDetails() {
  let { id } = useParams();
  console.log(id);
const [allDetails , setAllDetails] = useState ({})
console.log(allDetails);
   async function getBrandDetails(id){

    const { data } = await axios.get(`${API_URL}/brands/${id}`);

    setAllDetails(data.data);
    }
    useEffect(() => {
        getBrandDetails(id);
      }, []);
  return (
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
  )
}
