import React from 'react'
import nophoto from "../images/no-photo-large-m.png";


export default function Profile() {
  return (
    <>
    <div className="profile  mb-5">
    <div className=' bg-info py-5'>
        <h3 className='text-center'>profile</h3>
        <div className=''> 
        <img className=' border  border-3  border-dark rounded-circle' src={nophoto} alt="" />
        </div>
    </div>
    </div>


    
    </>
  )
}
