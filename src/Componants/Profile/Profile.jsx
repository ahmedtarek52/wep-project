import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { API_URL } from "../../utils/api";
import Spinner from '../Spinner/Spinner';

export default function Profile() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);
  const token = localStorage.getItem("token");

  async function getprofileData() {
    const headers = {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    try {
      const { data } = await axios.get(`${API_URL}/profile`, { headers });
      setProfile(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getprofileData();
  }, []);

  // Profile update
  const [updateProfile, setUpdateProfile] = useState({
    username: "",
    phone: "",
  });

  function getUpdatedData(eventInfo) {
    let profileData = { ...updateProfile };
    profileData[eventInfo.target.name] = eventInfo.target.value;
    setUpdateProfile(profileData);
  }

  async function sendProfileDataToApi() {
    const headers = {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    try {
      let { data } = await axios.put(`${API_URL}/profile/update`, updateProfile, { headers });
      if (data.success === true) {
        setUpdateProfile({
          username: "",
          phone: "",
        });
        setError('');
      } else {
        console.log("No data");
        setError(data.message);
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : 'An error occurred. Please try again.');
    }
  }

  function submitProfileForm(e) {
    e.preventDefault();
    sendProfileDataToApi();
  }

  // Password update
  const [updatePassword, setUpdatePassword] = useState({
    password: "",
    confirmPassword: "",
  });

  function getPasswordData(eventInfo) {
    let passwordData = { ...updatePassword };
    passwordData[eventInfo.target.name] = eventInfo.target.value;
    setUpdatePassword(passwordData);
  }

  async function updatePasswordDataToApi() {
    const headers = {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    try {
      let { data } = await axios.put(`${API_URL}/profile/update`, updatePassword, { headers });
      if (data.success) {
        console.log(data);
        setUpdatePassword({
          password: "",
          confirmPassword: "",
        });
        setPasswordError('');
      } else {
        console.log(data);
        setPasswordError(data.message);
      }
    } catch (error) {
      setPasswordError(error.response ? error.response.data.message : 'An error occurred. Please try again.');
    }
  }

  function submitPasswordForm(e) {
    e.preventDefault();
    updatePasswordDataToApi();
  }
  // update photo
  const [successMessage, setSuccessMessage] = useState('');
  const [updatePhoto, setUpdatePhoto] = useState({
    image: null,
  });
  
  async function updatePhotoDataToApi() {
    const headers = {
      authorization: `Bearer ${token}`,
    };
    const formData = new FormData();
    formData.append('image', updatePhoto.image);
  
    try {
      const { data } = await axios.put(`${API_URL}/profile/uploadphoto`, formData, { headers });
      if (data.success) {
        console.log(data);
        setSuccessMessage('Your Photo Is Updated successfully!');
      } else {
        console.log(error.response);
      }
    } catch (error) {
      console.log(error.response);
    }
  }
  
  function submitPhotoForm(e) {
    e.preventDefault();
    updatePhotoDataToApi();
  }
  
  function handleFileChange(e) {
    const file = e.target.files[0];
    setUpdatePhoto((prev) => ({ ...prev, image: file }));
  }

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = profile.orders?.slice(indexOfFirstItem, indexOfLastItem) || [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil((profile.orders?.length || 0) / itemsPerPage);


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile</title>
      </Helmet>
      {loading ? (
        <Spinner />
      ) : (
        <section className="bg-light py-3 py-md-5 py-xl-8">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 className="mb-4 display-5 text-center">Profile</h2>
                <p className="text-secondary text-center lead fs-4 mb-5">
                  The Profile page is your digital hub, where you can fine-tune
                  your experience. Here's a closer look at the settings you can
                  expect to find in your profile page.
                </p>
                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row gy-4 gy-lg-0">
              {/* left side  */}
              <div className="col-12 col-lg-4 col-xl-3">
                <div className="row gy-4">
                  <div className="col-12">
                    <div className="card widget-card border-light shadow-sm">
                      <div className="card-header custom-bg text-white">
                        Welcome, {profile.username}
                      </div>
                      <div className="card-body">
                        <div className="text-center mb-3">
                          <img src={profile.profilephoto?.url}
                            className="img-fluid w-100 rounded-circle"  alt="profile img" loading="lazy" />
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

              {/* center nav-tap  */}
              <div className="col-12 col-lg-8 col-xl-9">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-body p-4">
                    <ul className="nav nav-tabs" id="profileTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview-tab-pane" type="button"
                          role="tab" aria-controls="overview-tab-pane" aria-selected="true" >
                          Overview
                         </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link"  id="profile-tab" data-bs-toggle="tab"  data-bs-target="#profile-tab-pane"type="button"
                          role="tab" aria-controls="profile-tab-pane" aria-selected="false" >
                          Profile
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="qrcode-tab"  data-bs-toggle="tab" data-bs-target="#qrcode-tab-pane"  type="button"
                          role="tab" aria-controls="qrcode-tab-pane"  aria-selected="false" >
                          qrcode
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="email-tab" data-bs-toggle="tab"  data-bs-target="#email-tab-pane" type="button"
                            role="tab" aria-controls="email-tab-pane"  aria-selected="false" >
                            Donation orders
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="password-tab"  data-bs-toggle="tab" data-bs-target="#password-tab-pane" type="button"
                          role="tab" aria-controls="password-tab-pane" aria-selected="false" >
                          Password
                        </button>
                      </li>
                    </ul>

                    <div className="tab-content pt-4" id="profileTabContent">
                    {/* Overview */}
                      <div className="tab-pane fade show active" id="overview-tab-pane" role="tabpanel"  aria-labelledby="overview-tab"  tabIndex="0">
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

                      {/* Profile */}
                      <div className="tab-pane fade" id="profile-tab-pane"  role="tabpanel"  aria-labelledby="profile-tab"  tabIndex="0">
                      {error && <div className="alert alert-danger">{error}</div>}
                      {successMessage && <div className="alert alert-success my-2">{successMessage}</div>}
                      <form onSubmit={submitPhotoForm}>
                            <div className="col-12">
                            <div className="row gy-2">
                              <label className="col-12 form-label m-0"> Profile Image </label>
                              <div className="col-3">
                                <img    src={profile.profilephoto?.url} className="img-fluid w-100"  alt="profileimg"  />
                              </div>
                              <div className="col-12 d-flex gap-3 py-3">
                              <input   onChange={handleFileChange}  type="file"   className="form-control w-50"   name="image"  id="image"  />
                                <button className=" border-0 orange link-light  p-2 rounded" type="submit"> <i className="fa-solid fa-pen-to-square"></i></button>
                              </div>
                            </div>
                          </div>
                        </form>

                        <form  onSubmit={submitProfileForm}  action="#!" className="row gy-3 gy-xxl-4">     
                          <div className="col-12 col-md-6">
                            <label htmlFor="inputFirstName" className="form-label" >username</label>
                            <input onChange={getUpdatedData}  value={updateProfile.username}
                              type="text" name="username" className="form-control"  id="inputFirstName" placeholder="username"/>
                          </div>
                          <div className="col-12 col-md-6">
                            <label htmlFor="inputPhone" className="form-label"> Phone </label>
                            <input onChange={getUpdatedData} value={updateProfile.phone}
                              type="tel" name="phone" className="form-control"  id="inputPhone" placeholder="Phone" />
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn orange text-light">
                              update
                            </button>
                          </div>
                        </form>
                      </div>

                      {/* qrcode */}
                      <div
                        className="qrcode tab-pane fade" id="qrcode-tab-pane" >
                        <p className="lead text-capitalize">
                          go to our brands partners and scan you qrcode to
                          exchange coins and get your discount</p>
                        <img src={profile.qrcode}  alt="qrcodeimage"  loading="lazy"  />
                      </div>

                      {/* Donation orders */}
                      <div className="tab-pane fade" id="email-tab-pane" role="tabpanel" aria-labelledby="email-tab" tabIndex="0">
                        <form action="#!">
                          <ul>
                            {currentOrders.length > 0 ? (
                              currentOrders.map((order) => (
                                <li key={order._id} className="order-item">
                                  <h3>
                                  <span className="fw-semibold fs-5"> Item: </span>
                                    <span className="fs-5 text-primary">{order.itemsName}</span>
                                  </h3>
                                  <p>
                                    <span className="fw-semibold fs-5">Location: </span>
                                    <span className="fs-5 text-primary">{order.location}</span>
                                  </p>
                                  <p>
                                    <span className="fw-semibold fs-5">Charity: </span>
                                    <span className="fs-5 text-primary">{order.charity.title}</span>
                                  </p>
                                  <p>
                                    <span className="fw-semibold fs-5">Quantity: </span>
                                    <span className="fs-5 text-primary">{order.quantity}</span>
                                  </p>
                                  <p>
                                    <span className="fw-semibold fs-5">Status: </span>
                                    <span className="fs-5 text-primary">{order.status}</span>
                                  </p>
                                  <div style={{height: 300}}>
                                    <img  className="w-100 h-100" src={order.image.url} alt="donationimg" loading="lazy"/>
                                  </div>
                                </li>
                              ))
                            ) : (
                              <li>No orders available</li>
                            )}
                          </ul>
                        </form>
                        {/* Pagination Controls */}
                        <nav>
                          <ul className="pagination">
                            {[...Array(totalPages).keys()].map((page) => (
                              <li key={page + 1} className={`page-item ${currentPage === page + 1 ? "active" : ""}`}>
                                <button className="page-link" onClick={() => handlePageChange(page + 1)}>
                                  {page + 1}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </div>

                      {/* Password */}
                      <div className="tab-pane fade"  id="password-tab-pane"  role="tabpanel"  aria-labelledby="password-tab"  tabIndex="0">
                      {passwordError && <div className="alert alert-danger">{passwordError}</div>}
                        <form action="#!"
                        onSubmit={submitPasswordForm}
                        >
                          <div className="row gy-3 gy-xxl-4">
                            <div className="col-12">
                              <label  htmlFor="newPassword"  className="form-label"  >
                                {" "}
                                 Password
                              </label>
                              <input onChange={getPasswordData}  type="password"   className="form-control"
                                id="newPassword" name="password" value={updatePassword.password} placeholder="password" />
                            </div>
                            <div className="col-12">
                              <label  htmlFor="confirmPassword"    className="form-label"  >
                                {" "}
                                Confirm Password{" "}
                              </label>
                              <input onChange={getPasswordData}  type="password"    className="form-control" 
                               id="confirmPassword" name="confirmPassword"  value={updatePassword.confirmPassword} placeholder="confirmPassword" />
                            </div>
                            <div className="col-12">
                              <button type="submit" className="btn orange text-light">
                                Change Password
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
