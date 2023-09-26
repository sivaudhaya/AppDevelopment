import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DashBoardcss.css';
import Footer from './Footer';
import { Chart, initTE } from "tw-elements";

initTE({ Chart });

const DashBoard = () => {
  // Monthly progress data
  const dataPie = {
    type: 'pie',
    id:'pie-chart',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Monthly Progress',
          data: [15, 22, 30, 18, 25, 35], // Replace with your monthly progress data values
          backgroundColor: [
            'red', 'green', 'blue', 'orange', 'purple', 'pink'
          ], // Replace with desired colors
        },
      ],
    },
  };

  useEffect(() => {
    new Chart(document.getElementById('pie-chart'), dataPie);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className='dashuh'>
      <div className='dashboard-container'>
        <nav className="navbar">
          {/* Add navbar content here */}
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Contact</li>
            <li>Customer Feedback</li>
            {/* Add more links or content as needed */}
          </ul>
        </nav>

        <aside className="sidebar">
          <ul>
            <li>
              <Link to="/dash" className='disline'>Dashboard</Link>
            </li>
            <li>
              <Link to="/order" className='disline'>Order History</Link>
            </li>
            <li>
              <Link to="/productlist" className='disline'>Product Lists</Link>
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
              <h2>Pending Orders</h2>
              <p>0</p>
            </div>
            <div className="metric">
              <h2>Completed Orders</h2>
              <p>10,000</p>
            </div>
          </section>
          <div className="pie-chart-container">
            <canvas id="pie-chart" width="400" height="400"></canvas>
          </div>
        </div>
        {/* Add a div to hold the pie chart */}
      </div>
      <Footer />
    </div>
  );
};

export default DashBoard;
