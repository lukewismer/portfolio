import "./NetDrive.css";


import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const img1 = require('./img1.png');
const img2 = require('./img2.png');


const NetDrive = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <div className="qrhunter">
            <div className="project-title-container">
                <div className="project-title">
                    NetDrive Hockey
                </div>
                <div className="project-link-container-pregames">
                    <a href="https://github.com/NetDriveHockey/main-site" className='project-link'>View it in Github </a>
                    <a href="https://netdrive-218b0.web.app" className='project-link-pregames'> View it in on the Web</a>
                </div>
            </div>
            <div className="info-tech-row">
                <div className="card info-section">
                    <div className="card-header">Project Info</div>
                    <div className="made-date">May 2023 - August 2023 </div>
                    <div className="collaborators">Collaborators: None</div>
                </div>
                <div className="card info-section">
                    <div className="card-header">Technologies Used</div>
                    <div className="tech-used">React.JS, Node.JS, Firebase, Cloud Functions, Google Cloud Platform</div>
                    
                </div>
            </div>
            <div className="images-row-pregames">
                <img src={img1} alt="Project Screenshot 1"/>
                <img src={img2} alt="Project Screenshot 2"/>
            </div>
            <div className="about-section">
                For NetDrive Hockey, I developed a comprehensive and user-friendly React website that significantly streamlined the camp and tournament registration process. The platform integrates seamlessly with Google Sheets and Google Drive, providing real-time updates and synchronization of registration data, thus eliminating manual entry. This allowed participants to register with ease and digitally sign waivers, saving 21 hours per tournament and 6 hours per camp. Through these automations, the website not only reduced administrative burdens but also simplified the entire process, reflecting an annual time-saving of 18 hours for camps. The success of this project transcends efficiency; it showcases a tailored solution that reinforces NetDrive Hockey's reputation for innovation and customer-centric service, making it a vital tool in the company's operations.
            </div>
            <Footer />
            </div>
        </div>   
    );
};

export default NetDrive;
