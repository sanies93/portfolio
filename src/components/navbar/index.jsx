import React from 'react';
import { Nav } from 'react-bootstrap';
import './style.css';
// import Header from './header';
// import About from './about';
// import Skills from './skills';
// import Projects from './projects';
// import Contact from './contact';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Nav className="navbar justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link className="navbar-link" href="/home">HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navbar-link" href="#about">ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navbar-link" href="#skills">SKILLS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navbar-link" href="#projects">PROJECTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navbar-link" href="#contact">CONTACT</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Navbar;