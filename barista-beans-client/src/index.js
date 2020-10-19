import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/navbar.css';
import './css/product.css';
import './css/shopcart.css';
import App from './App';
import Footer from './components/Footer'



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);