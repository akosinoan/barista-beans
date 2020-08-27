import React from 'react';


function NavLink(props) {
  return (
        <a className={props.isActive}> {props.name} </a>
  );
}

export default NavLink;
