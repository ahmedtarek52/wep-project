import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils/api';



export default function Login() {
   const [errorList, seterrorList] = useState([]);
   let navigate = useNavigate();
   const [error, setError] = useState('');
   const [isLoding, setisLoding] = useState(false);
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
    let { data } = await axios.post(`${API_URL}/Login`, user);
    if (data.success === true) {
      setisLoding(false);
      localStorage.setItem('token', data.token);
      navigate('/')
      // // login
    }
    else {
      setisLoding(false);
      setError(data.message);
    }
  }

   function submitLoginForm(e) {
      e.preventDefault();
      setisLoding(true);

      let validation = validateLoginform();
      // console.log(validation);
      if (validation.error) {
         setisLoding(false);
         seterrorList(validation.error.details);
      } else {
         sendLoginToApi();
      }
   }

  function validateLoginform() {
    let scheme = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().required(),
      confirmpassword:Joi.ref('password'),
     
    });
   //  console.log(scheme.validate(user));
    return scheme.validate(user, { abortEarly: false });
  };



   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Login</title>
         </Helmet>
         <div className="container py-5">
            {errorList.map((err, index) => {
               if (err.context.label === 'password') {
                  return (
                     <div key={index} className=" alert alert-danger my-2">
                        password invalid
                     </div>
                  );
               } else {
                  return (
                     <div key={index} className=" alert alert-danger my-2">
                        {err.message}
                     </div>
                  );
               }
            })}

            {error.length > 0 ? <div className=" alert alert-danger my-2">{error}</div> : ''}
            <form onSubmit={submitLoginForm} className="mt-5 ">
               <label htmlFor="email" className="">
                  email:
               </label>
               <input onChange={getUserData} type="email" className="form-control my-input my-2" name="email" id="email"></input>

               <label htmlFor="password" className="">
                  password:
               </label>
               <input onChange={getUserData} type="password" className="form-control my-input my-2" name="password" id="password"></input>

               {/* <button type='submit' className='btn btn-info'>
        {isLoding === true ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
      </button> */}
              <div className="buttons py-3">
                 <button type="submit" className="text-uppercase text-light">
                    {isLoding === true ? <i className="fas fa-spinner fa-spin"></i> : 'Login'}
                 </button>
              </div>
              <p className="small fw-bold my-3 fs-6">
                 Don't have an account? <Link to="/register">register</Link>
              </p>

  
           </form>
        </div>
     </>
  );
}