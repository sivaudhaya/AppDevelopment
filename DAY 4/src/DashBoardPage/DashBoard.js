import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DashBoardcss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const DashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <nav className="navbar">
        {/* Add navbar content here */}
        <ul>
          <li><Link to="/home">Home </Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Contact</li>
          <li>Customer Feedback</li>
          {/* Add more links or content as needed */}
        </ul>
      </nav>

      <aside className="sidebar">
       
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

      <div className="content">
        <header className="dashboard-header">
          <h1>Custom T-Shirt Printing Dashboard</h1>
        </header>
        <section className="metrics">
          <div className="metric">
            <h2>Total Orders</h2>
            <p>10,000</p>
          </div>
          <div className="metric">
            <h2>Total Revenue</h2>
            <p>5%</p>
          </div>
          <div className="metric">
            <h2>Pending orders</h2>
            <p>0</p>
          </div>
          <div className="metric">
            <h2>Completed orders</h2>
            <p>10,000</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashBoard;