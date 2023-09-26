import React from 'react';
import './Footercss.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a href='/privacy'>Privacy</a>
        <p>&copy; 2023 T shirt. All Rights Reserved.</p>
        <a href='/faq'>.   FAQ</a>

        <p><Link to='/term'>Terms and Conditions</Link></p>
      </div>
    </footer>
  );
}

export default Footer;