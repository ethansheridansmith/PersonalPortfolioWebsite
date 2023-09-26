import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'; // Import the CSS

function NavBar() {
  return (
    <div className='navbar'>
        <div className='toggleButton'>
            <button></button>
        </div>
        <div className='Links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/education">Education</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/contact_information">Contact Information</Link>
        </div>
    </div>
  );
}

export default NavBar