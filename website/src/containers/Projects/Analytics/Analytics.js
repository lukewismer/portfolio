import "./Analytics.css";


import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const img1 = require('./img1.png');
const img2 = require('./img2.png');


const Analytics = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <div className="qrhunter">
            <div className="project-title-container">
                <div className="project-title">
                    Analytics
                </div>
                <div className="project-link-container-pregames">
                    <a href="https://github.com/lukewismer/Fantasy-Hockey" className='project-link'>View it in Github</a>
                    <a href="https://docs.google.com/document/d/1SS_yLO3nRJt-a_v5u213dzCRi2EmKkxthBEvYZbwt5w/edit?usp=sharing" className='project-link'>View full research paper</a>
                </div>
            </div>
            <div className="info-tech-row">
                <div className="card info-section">
                    <div className="card-header">Project Info</div>
                    <div className="made-date">Jan 2023 - Present</div>
                    <div className="collaborators">Collaborators: None</div>
                </div>
                <div className="card info-section">
                    <div className="card-header">Technologies Used</div>
                    <div className="tech-used">Python, Selenium, AWS, React.JS, mySQL, Node.JS, Tensorflow, AI Deep Learning</div>
                    
                </div>
            </div>
            <div className="images-row-pregames">
                <img src={img1} alt="Project Screenshot 1"/>
                <img src={img2} alt="Project Screenshot 2"/>
            </div>
            <div className="about-section">
                My Analytics work has so far been focused on the NHL. My first project I built is this Neural Network to forecast players points
                for the upcoming season. I applied some basic machine learning principles that I have learned in class to these models, to improve efficiency.
                I also have a project that scrapes the web and various api's for player stats and stores them in a database. Currently I am working on another research paper
                on NHL draft picks transitioning to the pros.
            </div>
            <Footer />
            </div>
        </div>   
    );
};

export default Analytics;
