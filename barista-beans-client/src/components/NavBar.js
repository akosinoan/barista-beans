import React from 'react';
import NavLink from './NavLink'


function NavBar() {
  return (
    
    <div className="NavBar-container">
        <div className="NavBar">
            <div className="NavBarlogo">
                <img 
                    style= {{maxWidth:200}}
                    alt="Barista Beans"
                    src="https://coffeebeansshop.com.au/wp-content/uploads/2019/09/coffee-beans-shop-australia-logo-online-best-buy-YES.svg"
                     />
            </div>
            <div className="NavLinks">
                <NavLink name="Product"/>
                <NavLink name="About"/>
                <NavLink name="Cart"/>
                <NavLink name="Price"/>            
            </div>
        </div>
        
    </div>
  );
}

export default NavBar;
