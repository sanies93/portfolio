import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';
import image4 from './img/giphy.gif';
import image5 from './img/trivia.gif';
import image6 from './img/guess.gif';
import './style.css';

class Projects2 extends React.Component {
    render() {
        return (
            <div>
                <div id="projectsection">Some More Work</div>
                <div id="projectsContainer">
                    <Card className="projectcard">
                        <Card.Body>
                            <Card.Img src={image4}></Card.Img>
                            <Card.Title>GifTastic</Card.Title>
                            <Card.Link href="https://sanies93.github.io/GifTastic/" target="_blank">Demo</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="projectcard">
                        <Card.Body>
                            <Card.Img src={image5}></Card.Img>
                            <Card.Title>Trivia Game</Card.Title>
                            <Card.Link href="https://sanies93.github.io/TriviaGame/" target="_blank">Demo</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="projectcard">
                        <Card.Body>
                            <Card.Img src={image6}></Card.Img>
                            <Card.Title>Word Guess</Card.Title>
                            <Card.Link href="https://sanies93.github.io/Word-Guess-Game/" target="_blank">Demo</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Projects2;