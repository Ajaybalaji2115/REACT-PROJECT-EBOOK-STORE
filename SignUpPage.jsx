import React, { useState } from 'react';
import './SignUpPage.css'; // Import the CSS file for styling

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert("Signed Up Successfully");
    }
  };

  return (
    <div className="page-container">
      <div className="signup-container">
      <h1 className="signup-title">Create Your Account</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
          <label className="input-label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
          <label className="input-label">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
    </div>
    
  );
};

export default SignUpPage;
