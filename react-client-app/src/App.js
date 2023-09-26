import React from 'react';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; 
import Education from './pages/Education';  
import Projects from './pages/Projects';  
import Experience from './pages/Experience';  
import ContactInformation from './pages/ContactInformation';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path='/contact_information' element={<ContactInformation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
