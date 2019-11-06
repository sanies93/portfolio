import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from './components/navbar/index';
import Landing from './components/landing/index';
import About from './components/about/index';
import Projects1 from './components/projects/index';
import Projects2 from './components/projects/index2';
import Projects3 from './components/projects/index3';
import Contact from './components/contact/index';
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
      sectionsColor={["#000000", "#FFFFFF", "rgb(265, 190, 190)"]}

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
                  <h3><Projects1 /></h3>
                </div>
                <div className="slide">
                  <h3><Projects2 /></h3>
                </div>
                <div className="slide">
                  <h3><Projects3 /></h3>
                </div>
              </div>
              <div className="section">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          </div>
        );
      }}
    />
  </div>
);

export default App;
