import React from 'react';
import './OrderHistorycss.css'; 
import Footer from './Footer';

const OrderHistory = () => {
  const orders = [
    {
      orderId: 1,
      customerName: 'Shery',
      orderDate: '2023-09-15',
      totalAmount: 50.0,
      status: 'Shipped',
    },
    {
      orderId: 2,
      customerName: 'udhaya',
      orderDate: '2023-09-14',
      totalAmount: 35.0,
      status: 'Delivered',
    },
    {
      orderId: 3,
      customerName: 'reegan',
      orderDate: '2023-09-14',
      totalAmount: 35.0,
      status: 'Delivered',
    },
    {
      orderId: 4,
      customerName: 'tamil',
      orderDate: '2023-09-14',
      totalAmount: 35.0,
      status: 'Delivered',
    },
    {
      orderId: 5,
      customerName: 'sai',
      orderDate: '2023-09-14',
      totalAmount: 35.0,
      status: 'Delivered',
    },
    // Add more order data as needed
  ];

  return (
    <div className='orderuuu'>
    <div className="order-history">
      <nav className="navbar">
        {/* Add navbar content here */}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Customer Feedback</li>
          {/* Add more links or content as needed */}
        </ul>
      </nav>
      <h2 className="order-history-header">Order History</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      <Footer/>
    </div>
  );
};

export default OrderHistory;