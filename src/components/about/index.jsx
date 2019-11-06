import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faReact, faNodeJs, faGit, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import image from './img/me.jpg';
import './style.css';

class About extends React.Component {
    render() {
        return (
            <div>
                <Container id="aboutContainer">
                    <Row className="justify-content-md-center">
                        <Col xs={4} className="imageCol">
                            <Row className="justify-content-md-center">
                                <Col>
                                    <Image id="aboutImage" src={image} fluid />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={7}>
                            <div id="aboutme">About Me</div>
                            <p>I am a web developer with experience in front-end and back-end. I build clean code to create functional designs with the end user always in mind.</p>
                            <p>I am an avid learner continually looking to further expand my knowledge and expertise.</p>
                            <div id="skills">Skills</div>
                            <p><strong>Include but not limited to</strong></p>
                            <div className="skills"><FontAwesomeIcon icon={faHtml5} /> <FontAwesomeIcon icon={faCss3Alt} /> <FontAwesomeIcon icon={faJsSquare} /> <FontAwesomeIcon icon={faBootstrap} /> <FontAwesomeIcon icon={faReact} /> <FontAwesomeIcon icon={faNodeJs} /> <FontAwesomeIcon icon={faGit} /> <FontAwesomeIcon icon={faGithubSquare} /></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;