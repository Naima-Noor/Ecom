import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with form data
    const formData = {
      name,
      fatherName,
      contactNumber,
      email,
      address,
      gender,
      description,
    };

    // Perform form validation here if needed

    // Send the form data to the server using Axios
    axios.post('http://localhost:5000/register', formData)
      .then((response) => {
        // Handle the response from the server if needed
        console.log('Form submitted successfully!', response.data);
        // Reset the form fields after successful submission if desired
        setName('');
        setFatherName('');
        setContactNumber('');
        setEmail('');
        setAddress('');
        setGender('');
        setDescription('');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Handle errors if necessary
      });
  };

  return (
    <div className="container">
      <h1 className="mt-4"  style={{color: '#088178' }}>REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="f_name">Father Name:</label>
          <input
            type="text"
            className="form-control"
            id="f_name"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Contact Number:</label>
          <input
            type="number"
            className="form-control"
            id="phone"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              id="male"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
            />
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              id="female"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
            />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};


export default Registration;
