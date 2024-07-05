import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import Joi from 'joi';
import { API_URL } from '../../utils/api';
import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/Store';

export default function DonationForm() {
  const token = localStorage.getItem("token");
  const { organizations } = useContext(DataContext);
  const [errorList, setErrorList] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mainForm, setMainForm] = useState({
    itemsName: "",
    location: "",
    charity: "",
    quantity: 0,
    phone: "",
    image: null,
  });
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [selectedOrganizationTitle, setSelectedOrganizationTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState('');

  async function sendDataToApi() {
    const formData = new FormData();
    for (const key in mainForm) {
      formData.append(key, mainForm[key]);
    }

    try {
      const headers = {
        authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      };

      const { data } = await axios.post(`${API_URL}/order/donataionorder`, formData, { headers });

      if (data.success) {
        setIsLoading(false);
        setSuccessMessage('Your Donation was sent successfully!');
        setMainForm({
          itemsName: " ",
          location: " ",
          charity: " ",
          quantity: 0,
          phone: " ",
          image: null,
        });
        console.log(data);
      } else {
        setIsLoading(false);
        setError(data.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.error('API request failed:', error);
      setError('An error occurred while sending data to the API.');
    }
  }

  function getUserData(e) {
    const { name, value } = e.target;
    setMainForm(prev => ({ ...prev, [name]: value }));
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    setMainForm(prev => ({ ...prev, image: file }));
  }

  function submitData(e) {
    e.preventDefault();
    setIsLoading(true);

    const validation = validateDonationForm();
    if (validation.error) {
      setIsLoading(false);
      setErrorList(validation.error.details);
    } else {
      sendDataToApi();
    }
  }

  function validateDonationForm() {
    const schema = Joi.object({
      itemsName: Joi.string().required(),
      location: Joi.string().required(),
      charity: Joi.string().required(),
      quantity: Joi.number().required(),
      phone: Joi.string().required(),
      image: Joi.required(),
    });
    return schema.validate(mainForm, { abortEarly: false });
  }

  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Donation Form</title>
      </Helmet>
      <section>
        <div className="main-banner">
          <div className="title">
            <h1>Donation</h1>
            <div className='hello'>
              <p className='text-light'>
                <Link to='/' className="unstyled-link"><span>Home</span></Link> &gt; <span>About</span>
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
                    className={`organization-img ${selectedOrganization === organization._id ? 'selected border border-primary' : ''}`}
                    onClick={() => {
                      setSelectedOrganization(organization._id);
                      setSelectedOrganizationTitle(organization.title);
                      setMainForm(prev => ({ ...prev, charity: organization._id }));
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

          {errorList.map((err, index) => (
            <div key={index} className="alert alert-danger my-2">
              {err.message}
            </div>
          ))}

          {error && <div className="alert alert-danger my-2">{error}</div>}
          {successMessage && <div className="alert alert-success my-2">{successMessage}</div>}
          <form onSubmit={submitData}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="itemsName1" className="form-label">Items Name</label>
                <input onChange={getUserData} value={mainForm.itemsName} type="text" className="form-control" name="itemsName" id="itemsName1" />
              </div>
              <div className="col-md-6">
                <label htmlFor="location1" className="form-label">Location</label>
                <input onChange={getUserData} value={mainForm.location} type="text" className="form-control" name="location" id="location1" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="charity1" className="form-label">Charity</label>
                <input
                  type="text"
                  className="form-control"
                  name="charity"
                  id="charity1"
                  value={selectedOrganizationTitle}
                  readOnly
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="quantity1" className="form-label">Quantity</label>
                <input onChange={getUserData} value={mainForm.quantity} type="number" className="form-control" name="quantity" id="quantity1" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="phone1" className="form-label">Phone</label>
                <input onChange={getUserData} value={mainForm.phone} type="text" className="form-control" name="phone" id="phone1" />
              </div>
              <div className="col-md-6">
                <label htmlFor="image" className="form-label">Image</label>
                <input onChange={handleFileChange} type="file" className="form-control" name="image" id="image" />
              </div>
            </div>
            <div className="buttons py-3">
              <button type="submit" className="text-uppercase text-light btn btn-primary">
                {isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Donate Now'}
                <span> <i className="fa-solid fa-heart" /></span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
