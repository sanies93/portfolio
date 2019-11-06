import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

class Contact extends React.Component {
    render() {
        return (
            <div className="contactContainer">
                <Container>
                    <Row>
                        <Col>
                            <div id="contactsection">Contact Me</div>
                            <p id="contactsummary">Feel free to get in touch. I am always open to discussing new projects, and opportunities to be part of your visionS.</p>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col> </Col>
                    </Row> */}
                    <Row>
                        <Col>
                            <a id="mail" href="mailto:sahra.anies@gmail.com">Let's Chat!</a>
                        </Col>
                    </Row>
                </Container>
                <footer>© Sahra Anies 2019</footer>
            </div>
        )
    }
}

export default Contact;