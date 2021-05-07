import React from 'react';
import {} from 'react-router-dom';
//Apps
import HymnApp from './projects/HYMN/HymnApp';
import GameTownApp from './projects/GameTown/GameTownApp';
import CinePhileApp from './projects/CinePhile/CinePhileApp';
import OBS from './projects/OBS Visualizer/OBS';
import RCO from './projects/Smart RCO/RCO';
import Nomos from './projects/Nomos/Nomos';

//Pages
import About from './pages/About';
import Contact from './pages/Contact';
import AllWork from './pages/AllWork';
// Components
import Home from './pages/Home';
import Nav from './components/Nav';
import ReactSection from './pages/ReactSection';
import JSSection from './pages/JSSection';
import UXSection from './pages/UXSection';
// Styles
import GlobalStyles from './components/GlobalStyles';
// Routing
import {Switch, Route, useLocation} from 'react-router-dom';
// Animation
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/work" exact>
            <AllWork />
          </Route>
          <Route path="/work/react" exact>
            <ReactSection />
          </Route>
          <Route path="/work/js">
            <JSSection />
          </Route>
          <Route path="/work/ux" exact>
            <UXSection />
          </Route>
          <Route path="/work/react/hymn">
            <HymnApp />
          </Route>
          <Route path="/work/react/gametown">
            <GameTownApp />
          </Route>
          <Route path="/work/react/cinephile">
            <CinePhileApp />
          </Route>
          <Route path="/work/ux/obs">
            <OBS />
          </Route>
          <Route path="/work/ux/rco">
            <RCO />
          </Route>
          <Route path="/work/ux/nomos">
            <Nomos />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
