import React from 'react';
import Navbar from '../navbar/index';
import './style.css';

class About extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <span className="text1">Sahra Anies</span>
                    <span className="text2">Web Developer</span>
                </div>
            </div>
        )
    }
}

export default About;