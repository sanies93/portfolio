import React from 'react';
import { withRouter } from 'react-router';
import './style.css';

class Navbar extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.addActiveClass= this.addActiveClass.bind(this);
    //     this.state = {
    //         addClass: [
    //             {
    //                 id: 0,
    //                 active: true
    //             },
    //             {
    //                 id: 1,
    //                 active: false
    //             },
    //             {
    //                 id: 2,
    //                 active: false
    //             },
    //             {
    //                 id: 3,
    //                 active: false
    //             }
    //         ]
    //     };
    // }

    // toggleClass = () => {
        // const currentState0 = this.state.addClass[0].active;
        // const currentState1 = this.state.addClass[1].active;
        // const currentState2 = this.state.addClass[2].active;
        // const currentState3 = this.state.addClass[3].active;
        // console.log(window.location.pathname);
        // this.setState({
        //     addClass: [
        //         {
        //             id: 0,
        //             active: !currentState0
        //         },
        //         {
        //             id: 1,
        //             active: !currentState1
        //         },
        //         {
        //             id: 2,
        //             active: !currentState2
        //         },
        //         {
        //             id: 3,
        //             active: !currentState3
        //         },
        //     ]
        // });
    // }

    render() {
        return (
            <div className="menu">
                <ul>
                    <li>
                        <a href="#home" className='active'>HOME</a>
                    </li>
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;