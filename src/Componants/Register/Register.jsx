import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils/api';
import registerImg from "../images/register.png";

export default function Register() {
  const [errorList, setErrorList] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  function getUserData(eventInfo) {
    const { name, value } = eventInfo.target;
    setUser({ ...user, [name]: value });
  }

  async function sendRegisterToApi() {
    try {
      const { data } = await axios.post(`${API_URL}/register`, user);

      if (data.success) {
        setIsLoading(false);
        navigate('/login');
      } else {
        setIsLoading(false);
        setError(data.message);
      }
    } catch (err) {
      setIsLoading(false);
      setError(err.response ? err.response.data.message : 'An error occurred. Please try again.');
    }
  }

  function submitRegisterForm(e) {
    e.preventDefault();
    setIsLoading(true);

    const validation = validateRegisterForm();
    if (validation.error) {
      setIsLoading(false);
      setErrorList(validation.error.details);
    } else {
      sendRegisterToApi();
    }
  }

  function validateRegisterForm() {
    const schema = Joi.object({
      username: Joi.string().min(3).max(10).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      phone: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
      password: Joi.string().required(),
      confirmPassword: Joi.string().valid(Joi.ref('password')).required().label('Confirm Password').messages({
        'any.only': 'Confirm Password must match the Password',
      }),
    });

    return schema.validate(user, { abortEarly: false });
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>

      <div className="container py-1">
        <div className='row d-flex justify-content-center align-items-center'>
          <div className="col-md-6">
            {errorList.map((err, index) => (
              <div key={index} className="alert alert-danger my-2">
                {err.message}
              </div>
            ))}

            {error && <div className="alert alert-danger my-2">{error}</div>}

            <form onSubmit={submitRegisterForm} className='mt-5'>
              <label htmlFor="username">Username:</label>
              <input onChange={getUserData} type="text" className='form-control my-input my-2' name='username' id="username" placeholder='User Name' />

              <label htmlFor="email">Email:</label>
              <input onChange={getUserData} type="email" className='form-control my-input my-2' name='email' id="email" placeholder='Email' />

              <label htmlFor="phone">Phone:</label>
              <input onChange={getUserData} type="text" className='form-control my-input my-2' name='phone' id="phone" placeholder='Phone' />

              <label htmlFor="password">Password:</label>
              <input onChange={getUserData} type="password" className='form-control my-input my-2' name='password' id="password" placeholder='Password' />

              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input onChange={getUserData} type="password" className='form-control my-input my-2' name='confirmPassword' id="confirmPassword" placeholder='Confirm Password' />

              <div className="buttons py-3">
                <button type="submit" className="text-uppercase text-light w-100">
                  {isLoading ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
                </button>
              </div>

              <p className="small fw-bold my-3 fs-6">
                Have an account? <Link to="/login" className="mainColor">Login</Link>
              </p>
            </form>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img className='w-100' src={registerImg} alt="registerImg" loading='lazy' />
          </div>
        </div>
      </div>
    </>
  );
}
