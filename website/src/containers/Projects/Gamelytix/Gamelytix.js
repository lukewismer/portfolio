import "./Gamelytix.css";


import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const img1 = require('./img1.png');
const img2 = require('./img2.png');


const Gamelytix = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <div className="qrhunter">
            <div className="project-title-container">
                <div className="project-title">
                    NetDrive Hockey
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
                Gamelytix is an innovative and comprehensive sports analytics platform with a special focus on hockey. Developed using cutting-edge technologies such as React.js, Selenium, BeautifulSoup, AWS, MySQL, TensorFlow, Sci-kit Learn, Python, Java, and Javascript, the platform aims to redefine sports analysis. Gamelytix features a dynamic fantasy hockey platform that offers a captivating experience by blending real-time statistics with an interactive and highly customizable interface. It also hosts a dedicated youth sports stats portal, empowering stakeholders with data-driven AI decision-making tools. Through deep learning AI models, Gamelytix provides sophisticated team and player rankings, transcending traditional metrics to offer nuanced insights into performance. Its advanced NHL analytics utilizes AI algorithms to offer in-depth game and player analyses, revealing valuable patterns and trends. Currently in development, Gamelytix embodies the fusion of technology, data, and passion, and is poised to become a central hub for sports enthusiasts, analysts, and professionals, providing an unmatched experience in the realm of sports analytics.
            </div>
            <Footer />
            </div>
        </div>   
    );
};

export default Gamelytix;
