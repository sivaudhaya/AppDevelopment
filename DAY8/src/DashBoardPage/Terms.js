import React from 'react';
import './Termscss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TermsAndConditions = () => {
  return (
    <div>
<div className='body-terms'>

    
    <div className="terms-and-conditions">
      <div className="header">
        <h1>Terms and Conditions</h1>
      </div>

      <h2> Acceptance of Terms</h2>
      <div className='aa'>
        <p>By accessing or using our services, you agree to comply with and be bound by these Terms and Conditions.</p>
      </div>

      <h2> User Responsibilities</h2>
      <div className='bb'>
        <p>As a user, you are responsible for:</p>
        <ul>
          <li>Complying with applicable laws and regulations</li>
          <li>Not engaging in unauthorized activities on our platform</li>
          {/* Add more user responsibilities as applicable */}
        </ul>
      </div>

      <h2> Service Availability</h2>
      <div>
        <p>We make no guarantee regarding the availability of our services and may modify or discontinue them at any time.</p>
      </div>

      {/* Add more sections for Disclaimers, Intellectual Property, Termination, Governing Law, etc. */}

      <div className="contact-info">
        <h2>  Contact Information</h2>
        <div className='cc'>
          <p>If you have any questions or concerns about our Terms and Conditions, please contact us at:</p>
          <p>Contact Email: your@email.com</p>
          <p>These Terms and Conditions were last updated on [Date].</p>
        </div>
      </div>
    </div>
     </div>
</div>
  );
};

export default TermsAndConditions;