import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function BrandDetails() {
  let { id } = useParams();
  console.log(id);
const [allDetails , setAllDetails] = useState ({})
console.log(allDetails);
   async function getBrandDetails(id){
    const {data} = await axios.get(`https://nervous-plum-walkingstick.cyclic.app/brands/${id}`);
    // console.log(data.data);
    setAllDetails(data.data);
    }
    useEffect(() => {
        getBrandDetails(id);
      }, []);
  return (
    <div>
      {allDetails.image ? (
        <div className="brand">
          <div className='w-50 '>
            <img className='w-100' src={allDetails.image.url} alt={allDetails.title} />
            <h4>{allDetails.title}</h4>
          </div>
          <p>{allDetails.info}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
