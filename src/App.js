import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Nav } from 'react-bootstrap';
import Navbar from './components/navbar/index';
import Landing from './components/header/index';
import About from './components/about/index';
import './App.css';

// const SEL = 'custom-section';
// const SECTION_SEL = `.${SEL}`;

// const originalColors = ["#000000", "#FFFFFF", "#FBA9A6"];

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sectionsColor: [...originalColors],
//       fullpages: [
//         {
//           section: <Header />,
//         },
//         {
//           section: <About/>,
//         },
//         {
//           section: 'Section 3',
//         }
//       ],
//     };
//   }

//   render() {
//     const { fullpages } = this.state;

//     return (
//       <div className="App">
//         <Navbar />
//         <ReactFullpage
//           // fullpage options
//           licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
//           navigation
//           // anchors={['firstPage', 'secondPage', 'thirdPage']}
//           sectionSelector={SECTION_SEL}
//           sectionsColor={this.state.sectionsColor}

//           render={comp => (
//             <ReactFullpage.Wrapper>
//               {fullpages.map(({ section }) => (
//                 <div key={section} className={SEL}>
//                   <h1>{section}</h1>
//                 </div>
//               ))}
//             </ReactFullpage.Wrapper>
//           )}
//         />
//       </div>
//     );
//   }
// }

const Menu = () => (
  <div
    className="menu"
    style={{
      position: 'fixed',
      top: 0,
      zIndex: 100,
    }}
  >
    <ul class="actions">
      <li>
        <a href="#home">HOME</a>
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
);

const App = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
    navigation
    scrollingSpeed={1000} /* Options here */
    anchors={["home", "about", "projects", "contact"]}
    sectionsColor={["#000000", "#FFFFFF", "#FBA9A6"]}

    render={({ state, fullpageApi }) => {
      return (
        <div className="App">
          <Navbar />
          <ReactFullpage.Wrapper>
            <div className="section">
              <Landing />
            </div>
            <div className="section">
              <About className="about" />
            </div>
            <div className="section">
              <div className="slide">
                <h3>Slide 2.1</h3>
              </div>
              <div className="slide">
                <h3>Slide 2.2</h3>
              </div>
              <div className="slide">
                <h3>Slide 2.3</h3>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        </div>
      );
    }}
  />
);

export default App;
