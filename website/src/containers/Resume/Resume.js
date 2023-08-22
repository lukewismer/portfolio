import "./Resume.css";


import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const img1 = require('./img1.png');


const Resume = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <div className="qrhunter">
            <div className="project-title-container">
                <div className="project-title">
                    Resume
                </div>
                <div className="project-link-container-pregames">
                    <a href="https://docs.google.com/document/d/1sZkiyI364m8NhOJbOl437stQ4zNvMj_z/edit?usp=sharing&ouid=103510890813439934111&rtpof=true&sd=true" className='project-link'>Open my resume</a>
                </div>
            </div>
            <div className="info-tech-row">
                <div className="card info-section">
                    <div className="card-header">My Info</div>
                    <div className="made-date">Date of Birth: Jan 21, 2003</div>
                    <div className="collaborators">Address: 7423 106 St NW, T6E 4W1 Edmonton Alberta</div>
                </div>
                <div className="card info-section">
                    <div className="card-header">Contact Me</div>
                    <div className="tech-used">lukewismer77@gmail.com</div>
                    <div className="tech-used">604-703-6791</div>
                    
                </div>
            </div>
            <div className="images-row-resume">
                <img src={img1} alt="Project Screenshot 1"/>
            </div>
            <Footer />
            </div>
        </div>   
    );
};

export default Resume;
