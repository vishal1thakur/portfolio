import React from 'react';
// Components and pages
import Home from './pages/Home';
import Nav from './components/Nav';
// Styles
import GlobalStylesGT from './components/GlobalStyles';
// Router
import {Route} from 'react-router-dom';

function GameTownApp() {
  return (
    <div className="App" style={{marginLeft: '100px'}}>
      <GlobalStylesGT />
      <Nav />
      <Route path={['/work/react/gametown/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default GameTownApp;
