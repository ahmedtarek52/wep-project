import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils/api';


export default function Register() {
  const [errorList, seterrorList] = useState([])
  let navigate = useNavigate();
  const [error, setError] = useState('')
  const [isLoding, setisLoding] = useState(false)
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  function getUserData(eventInfo) {
    let myUser = { ...user };
    myUser[eventInfo.target.name] = eventInfo.target.value;
    setUser(myUser);
  }

  async function sendRegisterToApi() {
    let { data } = await axios.post(`${API_URL}/register`, user);

    if (data.success === true) {
      console.log(data);
      setisLoding(false);
      navigate('/login')
      // // login
    }
    else {
      setisLoding(false);
      setError(data.message);
    }
  }

  function submitRegisterForm(e) {
    e.preventDefault();
    setisLoding(true);
    
    let validation = validateRegisterform();
    // console.log(validation);
    if (validation.error) {
      setisLoding(false);
      seterrorList(validation.error.details);
      
    }
    else {
      sendRegisterToApi();
    }
  }

  function validateRegisterform() {
    let scheme = Joi.object({
      username: Joi.string().min(3).max(10).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      phone: Joi.string().min(11).max(11),
      password: Joi.string().required(),
      confirmpassword:Joi.ref('password'),
      confirmPassword: Joi.string()
      .valid(Joi.ref('password'))
      .required()
      .label('Confirm Password')
      .messages({
        'any.only': 'Confirm Password must match the Password',
      }),
    });
    // console.log(scheme.validate(user));
    return scheme.validate(user, { abortEarly: false });
  }

  return (<>

<Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
            </Helmet>
    
    <div className="container py-5">
    {errorList.map((err,index)=> {
      if(err.context.label === "password"){
        return <div key={index} className=" alert alert-danger my-2">password invalid</div>
      }
      else{
       return <div key={index} className=" alert alert-danger my-2">{err.message}</div>
      }
    })}


    {error.length > 0 ? <div className=" alert alert-danger my-2">{error}</div> : ''}
    <form onSubmit={submitRegisterForm} className='mt-5'>
      <label htmlFor="username" className=''>username:</label>
      <input onChange={getUserData} type="text" className='form-control my-input my-2' name='username' id="username"></input>

      <label htmlFor="email" className=''>email:</label>
      <input onChange={getUserData} type="email" className='form-control my-input my-2' name='email' id="email"></input>

      <label htmlFor="phone" className=''>phone:</label>
      <input onChange={getUserData} type="number" className='form-control my-input my-2' name='phone' id="phone"></input>

      <label htmlFor="password" className=''>password:</label>
      <input onChange={getUserData} type="password" className='form-control my-input my-2' name='password' id="password"></input>
      <label htmlFor="confirmpassword" className=''>confirmpassword:</label>

      <input onChange={getUserData} type="password" className='form-control my-input my-2' name='confirmPassword' id="confirmpassword"></input>
      {/* <button type='submit' className='btn btn-info'>
        {isLoding === true ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
      </button> */}
      <div className="buttons py-3">
              <button type="submit" className="text-uppercase text-light">
              {isLoding === true ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
              </button>
            </div>

      <p className="small fw-bold my-3 fs-6">
                  have an account?{" "}
                  <Link to="/login" className="mainColor">
                    login
                  </Link>
                </p>
    </form>
    </div>
  </>)
}