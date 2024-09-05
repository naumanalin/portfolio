import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
    return <>
    <div className="container contact" id="contact">
        <h1>CONTACT US</h1>
        <div className="contact-icons" data-aos="zoom-in-up" data-aos-duration="1000">
            <a href="#" target="_blank" className="items">
                <FaFacebook className="icons" />
            </a>
            <a href="#" target="_blank" className="items">
            <FaLinkedin className="icons" />
            </a>
            <a href="https://github.com/naumanalin" target="_blank" className="items">
            <FaGithub className="icons" />
            </a>
            <a href="mailto:naumanalin865@gmail.com" target="_blank" className="items">
            <BiLogoGmail className="icons" />
            </a>
        </div>
    </div>
    
    </>
}

export default Contact;