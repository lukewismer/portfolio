import React from 'react';
import "./QRProject.css";

import Navbar from '../../../components/Navbar/Navbar';

import Footer from '../../../components/Footer/Footer';

const img1 = require('./img1.png');
const img2 = require('./img2.png');
const img3 = require('./img3.png');

const QRProject = () => {
  return (
    <div className='wrapper'>
        <Navbar />
        <div className="qrhunter">
            <div className="project-title-container">
                <div className="project-title">
                    QR Hunter
                </div>
                <div className="project-link-container">
                    <a href="https://github.com/CMPUT301W23T21/QR-Project" className='project-link'>View it in Github</a>
                </div>
            </div>
            <div className="info-tech-row">
                <div className="card info-section">
                    <div className="card-header">Project Info</div>
                    <div className="made-date">January 2023 - April 2023 </div>
                    <div className="collaborators">Collaborators: CMPUT 301 Team 21</div>
                </div>
                <div className="card info-section">
                    <div className="card-header">Technologies Used</div>
                    <div className="tech-used">Java, XML, Android Studio, Firebase</div>
                    
                </div>
            </div>
            <div className="images-row">
                <img src={img1} alt="Project Screenshot 1"/>
                <img src={img2} alt="Project Screenshot 2"/>
                <img src={img3} alt="Project Screenshot 3"/>
            </div>
            <div className="about-section">
                This project was developed for CMPUT 301 at the University of Alberta, focusing on the creation of an Android application that turns QR code scanning into a competitive game. Much like Pokémon Go, players hunt for QR codes to earn points. Upon scanning a QR code, the location is revealed on a map, and a name and score are automatically generated based on the QR code's hash.

                Players can interact by adding friends, commenting on profiles and individual QR codes, and engaging in competition through a leaderboard feature. The leaderboard showcases the top QR codes and player profiles, with filters to view standings among friends or on a global scale. Users can also view QR codes on the map, allowing them to strategically hunt them down and collect scores. The game's engaging features provide a unique twist on QR code interaction, turning it into a social and strategic experience.
            </div>
            <Footer />
        </div>
    </div>
  );
};

export default QRProject;
