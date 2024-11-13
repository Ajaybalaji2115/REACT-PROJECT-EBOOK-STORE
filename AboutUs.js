import React from 'react';
import './AboutUs.css';
import ajay from "./asserts/ajay.jpeg"
const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <img 
          src={ajay}
          alt="About Us" 
          className="about-image" 
        />
        <h1>About Us</h1>
        <p className="about-text">
        Welcome to our eBook store, where the love of reading meets cutting-edge technology. We are passionate about bringing stories to life and making them accessible to everyone, anywhere, at any time. Our mission is to create an online bookstore that caters to all readers—whether you're a casual reader, a student, or a seasoned book lover.

Our team is made up of dedicated individuals who share a deep appreciation for literature and a commitment to delivering a top-notch user experience. We believe that books have the power to change lives, and our goal is to make it as easy as possible for you to find and enjoy the stories that matter to you.

At the heart of our store is a vast collection of eBooks across all genres. We are constantly updating our catalog to include the latest releases as well as timeless classics. Our easy-to-navigate interface, responsive design, and secure payment options ensure that your journey from browsing to reading is as smooth and enjoyable as possible.

Thank you for choosing our eBook store. Whether you’re looking for the latest bestseller or a hidden gem, we’re here to help you find your next great read.


        </p>
      </div>
    </div>
  );
};

export default AboutUs;
