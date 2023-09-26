// ProductList.js
import React from 'react';
import './ProductListcss.css'; // Add your CSS file here
import Footer from './Footer';

const products = [
  {
    name: 'Product 1',
    price: '₹899',
    features: 'Feature 1, Feature 2, Feature 3',
    imageSrc: 'https://i.pinimg.com/236x/fd/08/2a/fd082a849fea4044f2a6a768755c0c7e.jpg',
  },
  {
    name: 'Product 2',
    price: '₹899',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://i.pinimg.com/564x/97/eb/66/97eb660eef0787d3fdbd3267d4f7b062.jpg',
  },
  {
    name: 'Product 3',
    price: '₹999',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://i.pinimg.com/236x/ff/af/b2/ffafb2914493b65c9dd4b8c424eccdbb.jpg',
  },
  {
    name: 'Product 4',
    price: '₹899',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://i.pinimg.com/236x/e1/d7/36/e1d736e574bfd3eed7b89ee0f6aec258.jpg',
  },{
    name: 'Product 5',
    price: '₹799',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://i.pinimg.com/236x/9b/e2/93/9be293da2c37e017c884472938aca3d0.jpg',
  },{
    name: 'Product 6',
    price: '₹999',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://i.pinimg.com/236x/6a/3a/7a/6a3a7a8d487fa3f89f84ea2919eae39b.jpg',
  },
  // Add more products here
];

function ProductList() {
  return (
    <div className='pro'>
    <div className="transparent-container">
    <div className="container">
      <h1 className="title">Product List</h1>
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
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.imageSrc} alt={product.name} />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <p className="product-features">{product.features}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
    <Footer/>
  </div>
  );
}

export default ProductList;