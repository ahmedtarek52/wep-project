import React, { useState } from 'react'
import axios from 'axios';
import { API_URL } from '../../utils/api';
import { useEffect } from 'react';

export default function Payment() {
const [token, settoken] = useState("");
  async function getPaymentToken(){
  let {data}  = await axios.get(`${API_URL}/payment/donate`);
  // console.log(data.token);
  settoken(data.token);
}
useEffect(() => {
  getPaymentToken()
}, [])


  return (
    <> 

    
     <iframe src={`https://accept.paymob.com/api/acceptance/iframes/783534?payment_token=${token}`} title="contact page" width="100%" height="900px" frameBorder="0"></iframe>
  
    </>
  )
}
