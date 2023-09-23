import React from 'react';
import './App.css';
import Login from './Login/Loginjs';
import Signup from './Signup/Signupjs';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './DashBoardPage/DashBoard';
import OrderHistory from './DashBoardPage/OrderHistory';

import ProductList from './DashBoardPage/ProductList';

import Homepage from './HomePage/Homepage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/order" element={<OrderHistory/>} />
   
      
        <Route path="/productlist" element={<ProductList/>} />
     
      </Routes>
    </Router>
    
      </header>
    </div>
  );
}

export default App;