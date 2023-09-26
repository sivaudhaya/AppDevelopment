
import React from 'react';
import './Privacycss.css';



const PrivacyPolicy = () => {
  return (
    <div className='body-privacy'>


    <div className="privacy-policy">
      <div className="header">
      
        <h1>Privacy Policy</h1>
      </div>

      <h2>Data Controller</h2>
      <div className='aa'>
      <p>Your Company Name</p>
      <p>Your Company Address</p>
      <p>Contact Email: your@email.com</p>
      </div>
        

      <h2>Types of Data Collected</h2>
      <div className='bb'>

      <p>We may collect the following types of data from you:</p>
      <ul>
        <li>Personal Information (e.g., name, email address, phone number)</li>
        <li>Usage Data (e.g., IP address, browser type, pages visited)</li>
        {/* Add more types of data as applicable */}
      </ul>
      </div>

      <h2> Collection and Use of Data</h2>
      <div>

      <p>We collect and use your data for various purposes, including:</p>
      <ul>
        <li>Providing and maintaining our services</li>
        <li>Notifying you about changes to our services</li>
        {/* Add more purposes as applicable */}
      </ul>
      </div>

      {/* Add more sections for Data Sharing, Data Retention, User Rights, Cookies, Security Measures, etc. */}

      <div className="contact-info">
        <h2> Contact Information</h2>
        <div className='cc'>
          
        <p>If you have any questions or concerns about our Privacy Policy, please contact us at:</p>
        <p>Contact Email: your@email.com</p>
        <p>This Privacy Policy was last updated on [Date].</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PrivacyPolicy;