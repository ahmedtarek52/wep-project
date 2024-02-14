import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../images/home1.jpg'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();

  const [validateForm, setValidate] = useState({})
  const notify = () => toast.error(validateForm, {
    position: "top-left",
  });
  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  });
  function takeUserData(e) {
    const userData = { ...loginData };
    userData[e.target.name] = e.target.value;
    setloginData(userData);
  }
  async function sendData() {
    try{
      await axios.post(`https://nervous-plum-walkingstick.cyclic.app/login`, loginData);
      navigate('/about');
    }
    catch(err){
      if (!err.response.data.success){
        setValidate(err.response.data.message);
        notify();
      }
    }
  }
function handleSubmit(e) {
    e.preventDefault();
      sendData();
  }
 return (
    <>
    
    <section className="row">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src={loginImg}
              className="img-fluid"
              alt="loginImage"
              loading='lazy'
            />
          </div>
          <div className="col-md-6 px-3">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  name="email"
                  onChange={takeUserData}
                />
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
              </div>
              <div className="text-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-outline-danger btn-block mb-4 fs-5"
                >
                  Login
                </button>
                <ToastContainer />
                <p className="small fw-bold mb-3 fs-6">
                  Don't have an account?{" "}
                  <Link to="/register" className="mainColor">
                    register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    
    </>
 )
}