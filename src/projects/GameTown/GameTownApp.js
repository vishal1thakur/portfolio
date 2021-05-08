import React from 'react';
//Components and pages
import Home from './pages/Home';
import Nav from './components/NavGT';
//Styles
import GlobalStyles from './components/GlobalStylesGT';
//Router
import {Route} from 'react-router-dom';
// Animation
import {motion} from 'framer-motion';

function GameTownApp() {
  return (
    <motion.div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={['/work/react/gametown/game/:id', '/work/react/gametown']}>
        <Home />
      </Route>
    </motion.div>
  );
}

export default GameTownApp;
