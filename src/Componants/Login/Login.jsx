import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils/api';
import loginImg from "../images/login.png";

export default function Login({ saveUserData }) {
  const [errorList, setErrorList] = useState([]);
  let navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
 
  function getUserData(eventInfo) {
    let myUser = { ...user };
    myUser[eventInfo.target.name] = eventInfo.target.value;
    setUser(myUser);
  }

  async function sendLoginToApi() {
    try {
      let { data } = await axios.post(`${API_URL}/Login`, user);
      if (data.success) {
        setIsLoading(false);
        alert("Login is successful");
        localStorage.setItem('token', data.token);
        saveUserData();
        navigate('/');
      } else {
        setIsLoading(false);
        setError(data.message);
      }
    } catch (err) {
      setIsLoading(false);
      setError(err.response ? err.response.data.message : 'An error occurred. Please try again.');
    }
  }

  function submitLoginForm(e) {
    e.preventDefault();
    setIsLoading(true);

    let validation = validateLoginForm();
    if (validation.error) {
      setIsLoading(false);
      setErrorList(validation.error.details);
    } else {
      sendLoginToApi();
    }
  }

  function validateLoginForm() {
    let schema = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().required()
    });
    return schema.validate(user, { abortEarly: false });
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <div className="d-flex justify-content-center align-items-center pt-5">
        <div className="custom-container custom-mobile-style">
          <div className="mx-5 my-5">
            <div className="d-flex justify-content-center align-items-center py-5 position-relative">
              <img className="w-100 rounded-circle position-absolute" src={loginImg} alt="loginImg" loading="lazy" />
            </div>
            <div className='text-center pt-5'>
              <h1 className='fw-semibold'>Login</h1>
            </div>
            {errorList.map((err, index) => {
              if (err.context.label === 'password') {
                return (
                  <div key={index} className="alert alert-danger my-2">
                    Password is invalid
                  </div>
                );
              } else {
                return (
                  <div key={index} className="alert alert-danger my-2">
                    {err.message}
                  </div>
                );
              }
            })}

            {error.length > 0 ? <div className="alert alert-danger my-2">{error}</div> : ''}
            <form onSubmit={submitLoginForm} className=" ">
              <label htmlFor="email" className="">
                {/* email: */}
              </label>
              <input onChange={getUserData} type="email" className="form-control my-input" name="email" id="email" placeholder='Email'></input>

              <label htmlFor="password" className="">
                {/* password: */}
              </label>
              <input onChange={getUserData} type="password" className="form-control my-input" name="password" id="password" placeholder='Password'></input>

              <div className="buttons py-3">
                <button type="submit" className="text-uppercase text-light w-100">
                  {isLoading === true ? <i className="fas fa-spinner fa-spin"></i> : 'Login'}
                </button>
              </div>
              <p className="small fw-bold my-3 fs-6">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
