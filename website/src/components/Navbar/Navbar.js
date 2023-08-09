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
            <a href="/project1">Project 1</a>
            <a href="/project2">Project 2</a>
            </div>
        </div>
        <a href="/resume" className="nav-link">Resume</a>
        <a href="/references" className="nav-link">References</a>
        <a href="/leet-code" className="nav-link">Leet Code</a>
        <a href="/contact" className="nav-link">Contact</a>
    </nav>
    : 
    <div className='nav-title' style={{ left: isMenuOpen ? '-100%' : '0' }}>
        <GiHamburgerMenu className="hamburger" onClick={() => setIsMenuOpen(true)}/>
        <div className="animated-title">lukewismer.dev&lt;/p&gt</div>
    </div>
    
    )
  );
};

export default Navbar;
