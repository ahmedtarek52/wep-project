import React, { useState } from 'react';
import axios from 'axios';
import Joi from 'joi';
import { API_URL } from '../../utils/api';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../Context/Store';

export default function DonationForm() {
  let { organizations} =useContext(DataContext);
  const [errorList, setErrorList] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const [organizations, setOrganizations] = useState([]);
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
      const { data } = await axios.post(`${API_URL}/order/donataionorder`, mainForm);
      if (data.success === true) {
        setIsLoading(false);
        console.log(data);
      } else {
        setIsLoading(false);
        setError(data.message);
      }
    } catch (error) {
      setIsLoading(false);
      setError('An error occurred while sending data to the API.');
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
    setMainForm(userForm);
  }

  function submitData(e) { 
    e.preventDefault();
    setIsLoading(true);

    let validation = validateDonationForm();
    if (validation.error) {
      setIsLoading(false);
      setErrorList(validation.error.details);
    } else {
      sendDataToApi();
    }
  }

  function validateDonationForm() {
    let schema = Joi.object({
      itemsName: Joi.string().required(),
      location: Joi.string().required(),
      charity: Joi.string().required(),
      quantity: Joi.number().required(),
      phone: Joi.string().required(),
    });
    return schema.validate(mainForm, { abortEarly: false });
  }

  // async function getOrganizations() {
  //   try {
  //     const { data } = await axios.get(`${API_URL}/organizations`);
  //     setOrganizations(data.result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getOrganizations();
  // }, []);

  return (
    <>
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
                    className={`organization-img ${selectedOrganization === organization._id ? ' selected border border-primary' : ''}`}
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

          {errorList.map((err, index) => {
            if (err.context.label === 'charity') {
              return (
                <div key={index} className="alert alert-danger my-2">
                  Please select the charity
                </div>
              );
            } else {
              return (
                <div key={index} className="alert alert-danger my-2">
                  {err.message}
                </div>
              );
            }
          })}

          {error.length > 0 && <div className="alert alert-danger my-2">{error}</div>}

          
  <form onSubmit={submitData}>
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="itemsName1" className="form-label">Items Name</label>
        <input onChange={getUserData} type="text" className="form-control" name="itemsName" id="itemsName1" />
      </div>
      <div className="col-md-6">
        <label htmlFor="location1" className="form-label">Location</label>
        <input onChange={getUserData} type="text" className="form-control" name="location" id="location1" />
      </div>
    </div>
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="charity1" className="form-label">Charity</label>
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
      <div className="col-md-6">
        <label htmlFor="quantity1" className="form-label">Quantity</label>
        <input onChange={getUserData} type="number" className="form-control" name="quantity" id="quantity1" />
      </div>
    </div>
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="phone1" className="form-label">Phone</label>
        <input onChange={getUserData} type="text" className="form-control" name="phone" id="phone1" />
      </div>
    </div>
    <div className="buttons py-3">
      <button type="submit" className="text-uppercase text-light  btn btn-primary">
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
