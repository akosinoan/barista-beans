import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/navbar.css'
import App from './App';
import NavBar from './components/NavBar'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);