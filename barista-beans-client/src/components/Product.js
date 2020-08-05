import React from 'react';


function Product(props) {
    return (
      <div className="product-container">
        <div className="product-image">
            <img className="product-image" src={props.imgsrc} alt="No Image" />
        </div>
        <div className="product-name"> {props.name} </div> 
        <div className="product-price">  {props.price} </div> 
        <button className="product-button-add"> Add To Cart </button> 
       
      </div>
    );
  }
  
  export default Product;