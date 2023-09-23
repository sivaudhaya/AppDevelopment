import React from 'react';
import './OrderHistorycss.css'; 

const OrderHistory = () => {
  const orders = [
    {
      orderId: 1,
      customerName: 'John Doe',
      orderDate: '2023-09-15',
      totalAmount: 50.0,
      status: 'Shipped',
    },
    {
      orderId: 2,
      customerName: 'Jane Smith',
      orderDate: '2023-09-14',
      totalAmount: 35.0,
      status: 'Delivered',
    },
    // Add more order data as needed
  ];

  return (
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
  );
};

export default OrderHistory;