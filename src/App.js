import React from 'react';
import LandingScreen from './screens/Landing';
import AboutScreen from './screens/About';
import ProjectScreen from './screens/Project'
import './screens/pageCSS.scss'

function App() {
  return (
    <div>
      <LandingScreen />
      <AboutScreen />
      <ProjectScreen />
    </div>
  );
}

export default App;
