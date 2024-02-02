import React, { useState } from 'react';
import './Navbar.css';

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowLeft } from "react-icons/ai";


const Navbar = () => {
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  return (
    ( isMenuOpen ? 
    <nav className={`navbar ${isMenuOpen ? 'show' : ''}`}>
        <a href="/" className="nav-link">Home</a>
        <div className="nav-dropdown" onMouseEnter={() => setProjectsDropdownOpen(true)} onMouseLeave={() => setProjectsDropdownOpen(false)}>
            <button className="nav-link">Projects</button>
            <div className={`nav-dropdown-content ${isProjectsDropdownOpen ? 'show' : ''}`}>
              <a href="/qrhunter">QR Hunter</a>
              <a href="/thepregames">The Pregames</a>
              <a href="/netdrive">NetDrive Hockey</a>
              <a href="/analytics">Analytics</a>
            </div>
        </div>
        <a href="/experience" className="nav-link">Experience</a>
        <a href="/resume" className="nav-link">Resume</a>
    </nav>
    : 
    <div className='nav-title' style={{ left: isMenuOpen ? '-100%' : '0' }}>
        <GiHamburgerMenu className="hamburger" onClick={() => setIsMenuOpen(true)}/>
        <div className="animated-title">lukewismer.com&lt;/p&gt</div>
    </div>
    
    )
  );
};

export default Navbar;
