import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from './components/navbar/index';
import Landing from './components/landing/index';
import About from './components/about/index';
import Projects from './components/projects/index';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <ReactFullpage
      //fullpage options
      licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
      navigation
      scrollingSpeed={1000}
      anchors={["home", "about", "projects", "contact"]}
      sectionsColor={["#000000", "#FFFFFF", "#FBA9A6"]}

      render={({ state, fullpageApi }) => {
        return (
          <div className="App">
            <ReactFullpage.Wrapper>
              <div className="section">
                <Landing />
              </div>
              <div className="section">
                <About className="about" />
              </div>
              <div className="section">
                <div className="slide">
                  <h3><Projects /></h3>
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
  </div>
);

export default App;
