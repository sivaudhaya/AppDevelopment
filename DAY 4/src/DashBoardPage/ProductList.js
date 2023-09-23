// ProductList.js
import React from 'react';
import './ProductListcss.css'; // Add your CSS file here

const products = [
  {
    name: 'Product 1',
    price: '$25.99',
    features: 'Feature 1, Feature 2, Feature 3',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3vwKZNNWxnvzYnTzhE7wouwiQ4eg_3TL0w&usqp=CAU',
  },
  {
    name: 'Product 2',
    price: '$19.99',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNLgYVS2p7R1Kfi2KyaBiMLrfCvJQIPBfsBsK3Dv7zlh_8vsNjvuMSLrjQla1hXinSzc&usqp=CAU',
  },
  {
    name: 'Product 3',
    price: '$19.99',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://m.media-amazon.com/images/I/B1qmQK-r4OS._AC_CLa%7C2140%2C2000%7C91BxvPG-tjL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png',
  },
  {
    name: 'Product 4',
    price: '$19.99',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://m.media-amazon.com/images/I/71eOP2uYPFL._AC_SY350_QL65_.jpg',
  },{
    name: 'Product 5',
    price: '$19.99',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://res.cloudinary.com/teepublic/image/private/s--kaWO0t7N--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829017:production:blanks:qe3008lhp5hquxmwp4a0,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1617862128/production/designs/20929723_0.jpg',
  },{
    name: 'Product 6',
    price: '$19.99',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32Fao5fdA3FGDeJLXvkAWQMxrUyaJneM2nn9-kiCubf12ge9FXCLbGdEtGsQk7mi0TwY&usqp=CAU',
  },
  // Add more products here
];

function ProductList() {
  return (
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
  );
}

export default ProductList;