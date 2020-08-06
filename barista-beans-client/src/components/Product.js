import React from 'react';


function Product(props) {
    return (
      <div className="product-container">
        <div className="product-image">
            <img className="product-image" src={props.imgsrc} alt="No Image" />
        </div>
        <h3 className="product-name"> {props.name} </h3> 
        <h4 className="product-price">  {props.price} </h4> 
        <button className="product-button-add"> Add To Cart </button> 
       
      </div>
    );
  }
  
  export default Product;