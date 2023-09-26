import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Aboutcss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Footer from '../DashBoardPage/Footer';

const About= () => {
  const [sidebarOpen2, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen2);
  };
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <nav className="navbar22">
        {/* Add navbar content here */}
        <ul>
          <li><Link to="/home">Home </Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Contact </li>
          <li>Customer Feedback</li>
          {/* Add more links or content as needed */}
        </ul>
      </nav>

      <aside className="sidebar22">
       
        <ul>
          <li>
            <Link to="/dash" className='disline'>Dashboard </Link>
          </li>
          <li>
            <Link to="/order" className='disline'> Order History</Link>
          </li>
          <li>
            <Link to="/productlist" className='disline'> Product Lists</Link>
          </li>
          <li>
            <Link to="/productlist" className='disline'>Admin Details</Link>
          </li>
        </ul>
      </aside>
       
      <main className="content2">
        <h2 className="content-header2">Welcome to the About us page</h2>
       
      </main>

    <Footer/>
    </div>
  );
};

export default About;