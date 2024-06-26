// Payment.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/api';
import Spinner from '../Spinner/Spinner';


export default function Payment() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  async function getPaymentToken() {
    try {
      let { data } = await axios.get(`${API_URL}/payment/donate`);
      setToken(data.token);
    } catch (error) {
      console.error('Error fetching payment token:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPaymentToken();
  }, []);

  return (
    <> 
      {loading ? (
        <Spinner/>
      ) : (
        <iframe
          src={`https://accept.paymob.com/api/acceptance/iframes/783534?payment_token=${token}`}
          title="Payment"
          width="100%"
          height="900px"
        ></iframe>
      )}
    </>
  );
}
