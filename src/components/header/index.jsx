import React from 'react';
import Navbar from '../navbar/index';
import './style.css';

class Header extends React.Component {
    render() {
        return (
            <section id="home">
                <div className="container">
                    {/* <Navbar /> */}
                    <span className="text1">Sahra Anies</span>
                    <span className="text2">Software Engineer</span>
                </div>
            </section>
        )
    }
}

export default Header;