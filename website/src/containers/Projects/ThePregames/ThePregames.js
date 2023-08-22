import "./ThePregames.css";


import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const img1 = require('./img1.png');
const img2 = require('./img2.png');


const ThePregames = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <div className="qrhunter">
            <div className="project-title-container">
                <div className="project-title">
                    The Pregames
                </div>
                <div className="project-link-container-pregames">
                    <a href="https://github.com/lukewismer/thepregames" className='project-link'>View it in Github </a>
                    <a href="https://www.thepregames.ca" className='project-link-pregames'> View it in on the Web</a>
                </div>
            </div>
            <div className="info-tech-row">
                <div className="card info-section">
                    <div className="card-header">Project Info</div>
                    <div className="made-date">May 2023 - Present </div>
                    <div className="collaborators">Collaborators: None</div>
                </div>
                <div className="card info-section">
                    <div className="card-header">Technologies Used</div>
                    <div className="tech-used">React.JS, Python, Node.JS, Firebase, UI/UX</div>
                    
                </div>
            </div>
            <div className="images-row-pregames">
                <img src={img1} alt="Project Screenshot 1"/>
                <img src={img2} alt="Project Screenshot 2"/>
            </div>
            <div className="about-section">
                The Pregames is an exciting online gaming platform, uniting friends for interactive enjoyment. The collection of games range from classic card games to fresh, innovative challenges, appealing to diverse tastes.

                Crafted with React.js, the platform showcases a sleek, responsive interface for seamless engagement across devices.

                Powered by Firebase and Firestore, the system guarantees real-time data synchronization and high availability, amplifying the gaming delight.

                A strong backend with Node.js and custom APIs assures efficient game management and smooth user interaction.

                Python-driven data collection allows analysis of user behavior and trends, fostering continuous refinement and personalization.

                Born from popular demand, The Pregames has rapidly evolved into a top choice for social get-togethers and casual gaming, marked by its rich game selection and user-friendly design.
            </div>
            <Footer />
            </div>
        </div>   
    );
};

export default ThePregames;
