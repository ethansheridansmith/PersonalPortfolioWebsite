import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContext } from './AppContext';  // Import the context
import './App.css'; 
import Home from './pages/Home'; 
import Education from './pages/Education';  
import Projects from './pages/Projects';  
import Experience from './pages/Experience';  
import ContactInformation from './pages/ContactInformation';
import NavBar from './components/NavBar';

function App() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const toggleNavbar = useCallback(() => {
    setIsNavbarExpanded(prev => !prev);
  }, []);

  return (
    <AppContext.Provider value={{ isNavbarExpanded, toggleNavbar }}>
      <div className='container'>
        <Router>
          <NavBar />
          <div className={`App ${isNavbarExpanded ? 'navbar-expanded' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path='/contact_information' element={<ContactInformation />} />
          </Routes>
          </div>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
