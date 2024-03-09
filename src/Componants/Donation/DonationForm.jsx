import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/api';
import { Link } from 'react-router-dom';
// import './Dontation.css'


export default function DonationForm() {
  const [organizations, setOrganizations] = useState([]);
  const [mainForm, setMainForm] = useState({
    itemsName: "",
    location: "",
    charity: "",
    quantity: 0,
    phone: ""
  });
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [selectedOrganizationTitle, setSelectedOrganizationTitle] = useState("");



  async function sendDataToApi() {
    try {
      let { data } = await axios.post(`${API_URL}/order/donataionorder`, mainForm);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function getUserData(e) {
    let userForm = { ...mainForm };
    userForm[e.target.name] = e.target.value;

    if (e.target.name === "charity") {
      const selectedOrg = organizations.find(org => org._id === selectedOrganization);
      userForm.charity = selectedOrg ? selectedOrg._id : "";
      setSelectedOrganizationTitle(selectedOrg ? selectedOrg.title : "");
    }
    console.log(userForm);
    setMainForm(userForm);
  }

  function submitData(e) {
    e.preventDefault();

    if (mainForm.charity) {
      sendDataToApi();
    } else {
      console.log("Please select an organization before submitting the form.");
    }
  }

  async function getOrganizations() {
    try {
      const { data } = await axios.get(`${API_URL}/organizations`);
      setOrganizations(data.allOrganizaions);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOrganizations();
  }, []);

  return (
    <>
      <section>
        <div className="main-banner">
          <div className="title">
            <h1>donation</h1>

            <div className='hello  '>
              <p className='text-light'>
              <Link to='/' className="unstyled-link"><span>home</span> </Link> &gt; <span>about</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-3 align-items-center">
            {organizations.map((organization) => (
              <div className="col-md-4" key={organization._id}>
                <div className="text-center">
                  <div
                    className={`organaztion-img ${selectedOrganization === organization._id ? 'selected border border-primary' : ''}`}
                    onClick={() => {
                      setSelectedOrganization(organization._id);
                      setSelectedOrganizationTitle(organization.title);
                    }}
                  >
                    <img src={organization.images[0].url} alt={organization.title} />
                  </div>
                  {selectedOrganization === organization._id && (
                    <p>{organization.title}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={submitData}>
            <div className="mb-3">
              <label htmlFor="itemsName1" className="form-label">itemsName</label>
              <input onChange={getUserData} type="text" className="form-control" name="itemsName" id="itemsName1"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="location1" className="form-label">location</label>
              <input onChange={getUserData} type="text" className="form-control" name="location" id="location1"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="charity1" className="form-label">charity</label>
              <input
                onChange={getUserData}
                type="text"
                className="form-control"
                name="charity"
                id="charity1"
                value={selectedOrganizationTitle}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity1" className="form-label">quantity</label>
              <input onChange={getUserData} type="number" className="form-control" name="quantity" id="quantity1"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="phone1" className="form-label">phone</label>
              <input onChange={getUserData} type="number" className="form-control" name="phone" id="phone1"></input>
            </div>

            <div className="buttons py-3">
              <button type="submit" className="text-uppercase text-light">
                donate now{" "}
                <span> <i className="fa-solid fa-heart" /></span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}