import React from 'react';



function Product(props) {

  function handleAddItem(){

    props.handleAddItem(props.product);
  }

  function handleRemoveItem(){
    props.handleRemoveItem(props.product);
  }

    return (
      <div className="product-container">
        <div>
            <img className="product-image" src={props.product.imgsrc} alt="No image" />
        </div>
    <h3 className="product-name"> {props.product.name}</h3> 
        {props.quantity > 0  ?
        <> 
          <button className="product-plus" onClick={handleAddItem}> + </button>
          <button className="product-minus"onClick={handleRemoveItem}> - </button>
          <div style={{ color: '#f1b41b',
            textShadow: '1px 1px rgba(0, 0, 0, 0.3)'}} > Quantity: {props.quantity}pcs</div>
        
          </>
        :
        <button className="product-button-add" onClick={handleAddItem}> Add To Cart </button> 
        }
      </div>
    );
  }
  
  export default Product;