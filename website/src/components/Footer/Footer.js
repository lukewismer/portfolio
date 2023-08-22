import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="find-me-container">
            <div className="find-me-content">
                <a href="https://github.com/lukewismer" className="icon-a"><AiFillGithub className='icon' /> </a>
                <a href="www.linkedin.com/in/luke-wismer" className="icon-a"><AiFillLinkedin className='icon' /> </a>
            </div>
        </div>
    );
};

export default Footer;