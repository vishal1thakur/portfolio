import React from 'react';
import {} from 'react-router-dom';
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
          <Route path="/work/react">
            <ReactSection />
          </Route>
          <Route path="/work/js">
            <JSSection />
          </Route>
          <Route path="/work/ux">
            <UXSection />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
