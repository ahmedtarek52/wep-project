import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/api';
import ChangePassword from './ChangePassword';

export default function Profile() {
   const [profile, setProfile] = useState([]);
   const token = localStorage.getItem('token');
   async function getprofileData() {
      const headers = {
         authorization: `Bearer ${token}`,
         'Content-Type': 'application/`json',
      };
      try {
         const { data } = await axios.get(`${API_URL}/profile `, { headers });
         setProfile(data.data);
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      getprofileData();
   }, []);

   const [updateProfile, setupdateProfile] = useState({
      username: '',
      phone: '',
   });

   function getUpdatedData(eventInfo) {
      let profileData = { ...updateProfile };
      profileData[eventInfo.target.name] = eventInfo.target.value;
      setupdateProfile(profileData);
      // console.log(profileData);
   }
   async function sendProfileDataToApi() {
      const headers = {
         authorization: `Bearer ${token}`,
         'Content-Type': 'application/json',
      };
      let { data } = await axios.put(`${API_URL}/profile/update`, updateProfile, { headers });
      if (data) {
         console.log(data);
      } else {
         console.log('nodata');
      }
   }
   function submitProfileForm(e) {
      e.preventDefault();
      sendProfileDataToApi();
   }

   return (
      <>
         <section className="bg-light py-3 py-md-5 py-xl-8">
            <div className="container">
               <div className="row justify-content-md-center">
                  <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                     <h2 className="mb-4 display-5 text-center">Profile</h2>
                     <p className="text-secondary text-center lead fs-4 mb-5">
                        The Profile page is your digital hub, where you can fine-tune your experience. Here's a closer look at the settings you can expect to find in your profile page.
                     </p>
                     <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                  </div>
               </div>
            </div>

            <div className="container">
               <div className="row gy-4 gy-lg-0">
                  <div className="col-12 col-lg-4 col-xl-3">
                     <div className="row gy-4">
                        <div className="col-12">
                           <div className="card widget-card border-light shadow-sm">
                              <div className="card-header text-bg-primary">Welcome, {profile.username}</div>
                              <div className="card-body">
                                 <div className="text-center mb-3">
                                    <img src={profile.profilephoto?.url} className="img-fluid w-100 rounded-circle" alt="Luna John" />
                                 </div>
                                 <h5 className="text-center mb-1">{profile.username}</h5>
                                 <p className="text-center text-secondary mb-4">{profile.role}</p>
                                 <ul className="list-group list-group-flush mb-4">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                       <h6 className="m-0">orders</h6>
                                       <span>{profile.orders?.length}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                       <h6 className="m-0">coins</h6>
                                       <span>{profile.coins}</span>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-12 col-lg-8 col-xl-9">
                     <div className="card widget-card border-light shadow-sm">
                        <div className="card-body p-4">
                           <ul className="nav nav-tabs" id="profileTab" role="tablist">
                              <li className="nav-item" role="presentation">
                                 <button
                                    className="nav-link active"
                                    id="overview-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#overview-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="overview-tab-pane"
                                    aria-selected="true">
                                    Overview
                                 </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button
                                    className="nav-link"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="profile-tab-pane"
                                    aria-selected="false">
                                    Profile
                                 </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button
                                    className="nav-link"
                                    id="qrcode-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#qrcode-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="qrcode-tab-pane"
                                    aria-selected="false">
                                    qrcode
                                 </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button
                                    className="nav-link"
                                    id="email-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#email-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="email-tab-pane"
                                    aria-selected="false">
                                    Donation orders
                                 </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button
                                    className="nav-link"
                                    id="password-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#password-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="password-tab-pane"
                                    aria-selected="false">
                                    Password
                                 </button>
                              </li>
                           </ul>
                           <div className="tab-content pt-4" id="profileTabContent">
                              <div className="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabIndex="0">
                                 <h5 className="mb-3">Profile</h5>
                                 <div className="row g-0">
                                    <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                       <div className="p-2">username</div>
                                    </div>
                                    <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                       <div className="p-2">{profile.username}</div>
                                    </div>
                                    <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                       <div className="p-2">Phone</div>
                                    </div>
                                    <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                       <div className="p-2">{profile.phone}</div>
                                    </div>
                                    <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                       <div className="p-2">Email</div>
                                    </div>
                                    <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                       <div className="p-2 ">{profile.email}</div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                                 <form onSubmit={submitProfileForm} action="#!" className="row gy-3 gy-xxl-4">
                                    <div className="col-12">
                                       <div className="row gy-2">
                                          <label className="col-12 form-label m-0">Profile Image</label>
                                          <div className="col-3">
                                             <img src={profile.profilephoto?.url} className="img-fluid w-100" alt="Luna John" />
                                          </div>
                                          <div className="col-12">
                                             <a href="#!" className="d-inline-block bg-primary link-light lh-1 p-2 rounded">
                                                <i className="fa-solid fa-pen-to-square"></i>{' '}
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                       <label htmlFor="inputFirstName" className="form-label">
                                          username
                                       </label>
                                       <input onChange={getUpdatedData} type="text" name="username" className="form-control" id="inputFirstName" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                       <label htmlFor="inputPhone" className="form-label">
                                          Phone
                                       </label>
                                       <input onChange={getUpdatedData} type="tel" name="phone" className="form-control" id="inputPhone" />
                                    </div>
                                    <div className="col-12">
                                       <button type="submit" className="btn btn-primary">
                                          update
                                       </button>
                                    </div>
                                 </form>
                              </div>

                              <div className="tab-pane fade" id="email-tab-pane" role="tabpanel" aria-labelledby="email-tab" tabIndex="0"></div>
                              <div className="qrcode tab-pane fade" id="qrcode-tab-pane">
                                 <p className="lead text-capitalize">go to our brands partners and scan you qrcode to exchange coins and get your discount</p>
                                 <img src={profile.qrcode} alt="qrcodeimage" loading="lazy" />
                              </div>
                              <ChangePassword />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
