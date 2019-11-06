import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';
import image7 from './img/train.gif';
import image8 from './img/crystal.gif';
import './style.css';

class Projects3 extends React.Component {
    render() {
        return (
            <div>
                <div id="projectsection">And A Little Bit More Work</div>
                <div id="projectsContainer">
                    <Card className="projectcard">
                        <Card.Body>
                            <Card.Img src={image7}></Card.Img>
                            <Card.Title>Train Scheduler</Card.Title>
                            <Card.Link href="https://sanies93.github.io/train-scheduler/" target="_blank">Demo</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="projectcard">
                        <Card.Body>
                            <Card.Img src={image8}></Card.Img>
                            <Card.Title>Crystals Collector</Card.Title>
                            <Card.Link href="https://sanies93.github.io/unit-4-game/" target="_blank">Demo</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Projects3;