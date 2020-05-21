import React from 'react';
import LandingScreen from './screens/Landing';
import AboutScreen from './screens/About';
import ResumeScreen from './screens/Resume';
import ProjectScreen from './screens/Project'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div>
      {/* <LandingScreen /> */}
      {/* <AboutScreen /> */}
      <ResumeScreen />
      {/* <ProjectScreen /> */}
    </div>
  );
}

export default App;
