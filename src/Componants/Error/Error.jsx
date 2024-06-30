import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <>
 <div style={{height: "100vh"}} className=" d-flex justify-content-center align-items-center ">
    <div className="d-flex flex-column justify-content-between align-items-center">
    <h1 className=" fs-1 fw-bolder">404</h1>
    <p className="error-message">page not found</p>
    <Link to="/" replace={true}>
    How about going back to safty?
    </Link>
    </div>
 </div>
    </>
  )
}
