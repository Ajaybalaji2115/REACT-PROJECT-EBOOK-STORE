// ContactPage.js
import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    message: '',
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
    alert("Message sent successfully!");
    // Add message sending logic here
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us for any queries or support.</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="admin-info">
            <div className="admin-detail">
              <label>Admin Name:</label>
              <p>AJAY BALAJI B</p>
            </div>
            <div className="admin-detail">
              <label>Admin Number:</label>
              <p>(+91) 9677631866</p>
            </div>
          </div>
          <div className="form-group">
            <label>Your Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Your Number:</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
            />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

