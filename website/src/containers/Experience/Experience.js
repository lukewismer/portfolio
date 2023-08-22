import "./Experience.css";


import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const img1 = require('./img1.png');


const Experience = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <div className="qrhunter">
            <div className="project-title-container">
                <div className="project-title">
                    Experience
                </div>
            </div>
            <div className="info-tech-row">
                <div className="card info-section">
                    <div className="card-header">Application Developer</div>
                    <div className="made-date">The Answer Company</div>
                    <div className="collaborators">8 Month Internship, May 2022 - Dec 2022</div>
                </div>
                <div className="card info-section">
                    <div className="card-header">Application Developer</div>
                    <div className="tech-used">The Answer Company</div>
                    <div className="tech-used">4 Month Internship, May 2023 - August 2023</div>
                    
                </div>
            </div>
            <div className="images-row-resume">
                <img src={img1} alt="Project Screenshot 1"/>
            </div>
            <div className="about-section">
                During my internships at The Answer Co, I made strides in various critical projects, enhancing both responsibilities and impact. I accomplished 5 custom integrations between major ERP systems and Sage Intacct using the C# .NET framework and Azure functions, customizing solutions to meet client needs. I also pioneered in cloud programming with Azure, successfully migrating an internal integration for project management and time entry, resulting in significant monthly savings. My work in API development with Stripe and Intacct APIs, including two additional Sage Intacct integrations using Azure Functions V4, showcased real-world application and value. I led innovation by proposing a project leveraging Azure AI and OpenAI generative AI systems and refactored the development team's code libraries to boost reusability, stability, and performance. Through knowledge sharing presentations and integrating tools like SendGrid, I fostered collaboration within the team. My experiences at The Answer Co have significantly deepened my expertise in areas such as C# .NET, Azure development, and cloud technologies, allowing me to align our efforts with the company's goals and drive innovation and efficiency.
            </div>
            <Footer />
            </div>
        </div>   
    );
};

export default Experience;
