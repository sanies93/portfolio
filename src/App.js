import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from './components/navbar/index';
import Header from './components/header/index';
import About from './components/about/index';
import './App.css';

// const SEL = 'custom-section';
// const SECTION_SEL = `.${SEL}`;

// const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sectionsColor: [...originalColors],
//       fullpages: [
//         {
//           text: 'Section 1',
//         },
//         {
//           text: 'Section 2',
//         },
//         {
//           text: 'Section 3',
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
//               {fullpages.map(({ text }) => (
//                 <div key={text} className={SEL}>
//                   <h1>{text}</h1>
//                 </div>
//               ))}
//             </ReactFullpage.Wrapper>
//           )}
//         />
//       </div>
//     );
//   }
// }

const App = () => (
  // <Navbar />
  <ReactFullpage
    //fullpage options
    licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
    navigation
    scrollingSpeed={1000} /* Options here */
    // anchors={["firstPage", "secondPage", "thirdPage"]}
    sectionsColor={["#000000", "#FFFFFF", "#FBA9A6"]}

    render={({ state, fullpageApi }) => {
      // const Menu = () => (
      //   <div
      //     className="menu"
      //     style={{
      //       position: 'fixed',
      //       top: 0,
      //       zIndex: 100,
      //     }}
      //   >
      //     <ul class="actions">
      //       <li>
      //         <button onClick={() => this.handleAddSection()}>Add Section</button>
      //         <button onClick={() => this.handleRemoveSection()}>
      //           Remove Section
      //         </button>
      //         <button onClick={() => this.handleChangeColors()}>
      //           Change background colors
      //         </button>
      //         <button onClick={() => this.moveSectionDown()}>
      //           Move Section Down
      //         </button>
      //       </li>
      //     </ul>
      //   </div>
      // );

      return (
        <div className="App">
          <ReactFullpage.Wrapper>
            <div className="section">
              <Header />
              {/* <button onClick = {() => fullpageApi.moveSectionDown()}>
            Click me to move fown
          </button> */}
            </div>
            <div className="section">
              <About />
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

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div><Header /></div>
//       <div><About /></div>
//     </div>
//   );
// }

export default App;
