import React from 'react';
import NavLink from './NavLink'


function NavBar() {
  return (
    
    <div className="NavBar-container">
       
            <div className="NavBarlogo">
                <img 
                    alt="Barista Beans"
                    src={process.env.PUBLIC_URL + "/images/BaristaLogo.png"} />
            </div>

            <div className="NavLinks">
                <NavLink name="Products" isActive="nav-active"/>
                <NavLink name="About Us"/>
                          
            </div>
        
    </div>
  );
}

export default NavBar;
