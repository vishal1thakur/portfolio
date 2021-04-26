import React from 'react';
//Components and pages
import Home from './pages/Home';
import Nav from './components/NavGT';
//Styles
import GlobalStyles from './components/GlobalStylesGT';
//Router
import {Route} from 'react-router-dom';

function GameTownApp() {
  return (
    <div className="App" style={{marginLeft: '100px'}}>
      <GlobalStyles />
      <Nav />
      <Route path={['/work/react/gametown/game/:id', '/work/react/gametown']}>
        <Home />
      </Route>
    </div>
  );
}

export default GameTownApp;
