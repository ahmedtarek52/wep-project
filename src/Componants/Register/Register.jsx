import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupImg from "../images/home2.jpg";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Joi from 'joi';

export default function Register() {
    const navigate = useNavigate();
  const [validateForm, setvalidate] = useState([])
  const notify = () => toast.success('your account created Successfully!', {
    position: "top-left",
  });
  const [signupData, setsignupData] = useState({
      username:'',
      phone:'',
      email:'',
      password:''
  });
  function takeUserData(e){
    const userData={...signupData};
    userData[e.target.name]= e.target.value;
    setsignupData(userData);
  }
  async function sendData(){
    const { data } = await axios.post('http://localhost:5000/signup',signupData);
    if(data.success){
      notify();
      navigate('/register')
    }
  }
  function handleSummit(e){
    e.preventDefault();
    const validate = validation();
    if (validate.error) {
      setvalidate(validate.error.details);
    }
    else{
      sendData();
    }
  }
  function validation(){
    const schema = Joi.object({
      username: Joi.string().min(3).max(12).required(),
      phone:Joi.number().min(11).required(),
      email: Joi.string()
        .email({ minDomainSegments: 3, tlds: { allow: ['com', 'net','io'] } }),
      password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),   
    })
      return schema.validate(signupData,{abortEarly:true});
  }
  return (
    <section className="row">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={signupImg} className="img-fluid" alt="signupImage" loading='lazy' />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4">
            <form onSubmit={handleSummit}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="full name">
                  user name
                </label>
                <input
                  type="text"
                  id="full name"
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                  name="username"
                  onChange={takeUserData}
                />
                {validateForm.length > 0 ? <p className="text-danger">{validateForm.filter((el) => el.context.label ==="username")[0]?.message}</p> :''}
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="phone">
                  phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter a phone number"
                  name="phone"
                  onChange={takeUserData}
                />
                {validateForm.length > 0 ? <p className="text-danger">{validateForm.filter((el) => el.context.label === "phone")[0]?.message}</p> : ''}

              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email"
                  name="email"
                  onChange={takeUserData}
                />
                {validateForm.length > 0 ? <p className="text-danger">{validateForm.filter((el) => el.context.label === "email")[0]?.message}</p> : ''}
              </div>
              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg "
                  placeholder="Enter password"
                  name="password"
                  onChange={takeUserData}
                />
                {validateForm.length > 0 ? <p className="text-danger">{validateForm.filter((el) => el.context.label === "password")[0]?.message}</p> : ''}
              </div>
              <div className="text-start mt-4 pt-2">
              <ToastContainer/>
                <button type="submit" className="btn bgBtn btn-block mb-4 fs-5">
                  create account
                </button>
                <p className="small fw-bold mb-3 fs-6">
                  have an account?{" "}
                  <Link to="/login" className="mainColor">
                    login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
