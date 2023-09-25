import React from 'react';
import {Link} from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className='navbar'>
        <div className='toggleButton'>
            <button></button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
            <Link to="/education"> Education </Link>
        </div>
    </div>
  );
}

export default NavBar