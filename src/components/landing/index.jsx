import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './style.css';

class Landing extends React.Component {
    render() {
        return (
            <div className="container">
                <span className="text1">Sahra Anies</span>
                <span className="text2">Software Engineer</span>
                <li className="links"><a className="icons" href="https://www.linkedin.com/in/sahra-anies-424113183/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className="icons" href="https://github.com/sanies93" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a className="icons" href="#"><FontAwesomeIcon icon={faTwitterSquare} /></a></li>
            </div>
        )
    }
} 

export default Landing;