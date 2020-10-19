import React from 'react';
import ShopCart from './ShopCart'
//import NavLink from './NavLink'


function NavBar(props) {
  return (
    
    <div className="NavBar-container">
       
            <div className="NavBarlogo">
                <img 
                    alt="Barista Beans"
                    src={process.env.PUBLIC_URL + "/images/Neahara_logo.png"} />
            </div>

            <ShopCart itemsInCart={props.itemsInCart} 
                      cartItemCount={props.cartItemCount}
                      handleAddItem={props.handleAddItem}  
                      handleRemoveItem={props.handleRemoveItem}
            />
      {/*}
            <div className="NavLinks">
                <NavLink name="Products" isActive="nav-active"/>
                <NavLink name="About Us"/>
                            
            </div>
      */} 

    </div>
  );
}

export default NavBar;
