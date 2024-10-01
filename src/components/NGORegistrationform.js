// NGORegistrationform.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NGORegistrationform.css';
import { useNavigate } from 'react-router-dom'; // Use useNavigate from react-router-dom v6
import { Link } from 'react-router-dom';

function NGORegistrationform() {
  const [formData, setFormData] = useState({
    ngoName: '',
    registrationNumber: '',
    establishmentDate: '',
    emailAddress: '',
    phoneNumber: '',
    tin: '',
    complianceDocs: '',
    city: '',
    facebookPage: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Declare navigate

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== 'complianceDocs') {
        newErrors[key] = 'This field is required';
      }
    });
    if (formData.complianceDocs && formData.complianceDocs.size === 0) {
      newErrors.complianceDocs = 'Please upload compliance documents';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fill in all required fields.');
      return;
    }

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        body: form
      });
      const result = await response.json();
      alert(result.message);

      // After successful registration, navigate to NGO user page
      navigate('/ngouserpage'); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container p-3 border rounded shadow">
      <h4 className="contenth4">NGO Registration</h4>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="ngoName"
                name="ngoName"
                placeholder="NGO Name"
                value={formData.ngoName}
                onChange={handleChange}
              />
              {errors.ngoName && <div className="error-message">{errors.ngoName}</div>}
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="registrationNumber"
                name="registrationNumber"
                placeholder="Registration Number"
                value={formData.registrationNumber}
                onChange={handleChange}
              />
              {errors.registrationNumber && <div className="error-message">{errors.registrationNumber}</div>}
            </div>
            <div className="mb-3">
              <input
                type="date"
                className="form-control"
                id="establishmentDate"
                name="establishmentDate"
                value={formData.establishmentDate}
                onChange={handleChange}
              />
              {errors.establishmentDate && <div className="error-message">{errors.establishmentDate}</div>}
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="emailAddress"
                name="emailAddress"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={handleChange}
              />
              {errors.emailAddress && <div className="error-message">{errors.emailAddress}</div>}
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="tin"
                name="tin"
                placeholder="Tax Identification Number (TIN)"
                value={formData.tin}
                onChange={handleChange}
              />
              {errors.tin && <div className="error-message">{errors.tin}</div>}
            </div>
            <div className="mb-2">
              <input
                type="file"
                className="form-control"
                id="complianceDocs"
                name="complianceDocs"
                onChange={handleChange}
              />
              {errors.complianceDocs && <div className="error-message">{errors.complianceDocs}</div>}
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="Address"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <div className="error-message">{errors.city}</div>}
            </div>
            <div className="mb-3">
              <input
                type="url"
                className="form-control"
                id="facebookPage"
                name="facebookPage"
                placeholder="Facebook Page URL"
                value={formData.facebookPage}
                onChange={handleChange}
              />
              {errors.facebookPage && <div className="error-message">{errors.facebookPage}</div>}
            </div>
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </div>
      </form>
      <p className="signin-link">
        Already have an account? <Link to="/ngosignin">Sign In</Link>
      </p>
    </div>
  );
}

export default NGORegistrationform;
