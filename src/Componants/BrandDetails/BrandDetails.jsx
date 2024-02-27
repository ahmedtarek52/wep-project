import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import { API_URL } from '../../utils/api';
=======
>>>>>>> 407829ea4c51cec6532e07e26c5ceddd7840fe7b

export default function BrandDetails() {
  let { id } = useParams();
  console.log(id);
const [allDetails , setAllDetails] = useState ({})
console.log(allDetails);
   async function getBrandDetails(id){
<<<<<<< HEAD
    const { data } = await axios.get(`${API_URL}/brands/${id}`);
=======
    const {data} = await axios.get(`https://nervous-plum-walkingstick.cyclic.app/brands/${id}`);
    // console.log(data.data);
>>>>>>> 407829ea4c51cec6532e07e26c5ceddd7840fe7b
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
