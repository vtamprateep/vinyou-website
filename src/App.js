import React from 'react';
import LandingScreen from './screens/Landing';
import AboutScreen from './screens/About';
import ResumeScreen from './screens/Resume';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div>
      {/* <LandingScreen /> */}
      <AboutScreen />
      {/* <ResumeScreen /> */}
    </div>
  );
}

export default App;
