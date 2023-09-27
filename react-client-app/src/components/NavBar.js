import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; // Import the CSS
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FolderIcon from '@mui/icons-material/Folder';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useContext } from 'react';
import { AppContext } from '../AppContext';  

function NavBar() {
  const { isNavbarExpanded, toggleNavbar } = useContext(AppContext);

  return (
        <div 
            className='navbar' 
            id={isNavbarExpanded ? "open" : "close"}
            onMouseEnter={toggleNavbar}
            onMouseLeave={toggleNavbar} 
        >
          <div className="icon-top">
          <ReorderIcon style={{ color: '#c5beaa' }} />
          </div>
          <div className='Links'>
            <Link to="/"><HomeIcon />{isNavbarExpanded && ' Home'}</Link>
            <Link to="/projects"><FolderIcon />{isNavbarExpanded && ' Projects'}</Link>
            <Link to="/education"><SchoolIcon />{isNavbarExpanded && ' Education'}</Link>
            <Link to="/experience"><WorkIcon />{isNavbarExpanded && ' Experience'}</Link>
            <Link to="/contact_information"><ContactMailIcon />{isNavbarExpanded && ' Contact Information'}</Link>
          </div>
      </div>
  );
}

export default NavBar;