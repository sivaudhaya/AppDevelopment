import React from 'react';
import './App.css';
import Login from './Login/Loginjs';
import Signup from './Signup/Signupjs';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './DashBoardPage/DashBoard';
import OrderHistory from './DashBoardPage/OrderHistory';

import ProductList from './DashBoardPage/ProductList';

import Homepage from './HomePage/Homepage';
import About from './About/About';
import PrivacyPolicy from './DashBoardPage/Privacy';
import TermsAndConditions from './DashBoardPage/Terms';
import Appone from './Land/Land';
import FAQ from './DashBoardPage/Faq';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/order" element={<OrderHistory/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/term" element={<TermsAndConditions/>} />
        <Route path="/" element={<Appone/>} />
        <Route path="/faq" element={<FAQ/>} />
   
      
        <Route path="/productlist" element={<ProductList/>} />
     
      </Routes>
    </Router>
    
      </header>
    </div>
  );
}

export default App;