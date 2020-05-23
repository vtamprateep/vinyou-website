import React from 'react';
import LandingScreen from './screens/Landing';
import AboutScreen from './screens/About';
import ResumeScreen from './screens/Resume';
import ProjectScreen from './screens/Project'
import { ParallaxProvider } from 'react-scroll-parallax';
import './screens/pageCSS.scss'

function App() {
  return (
    <div className="App">
      <LandingScreen />
      <AboutScreen />
      <ProjectScreen />
      {/* <ResumeScreen /> */}
    </div>
  );
}

export default App;
