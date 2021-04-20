import React, {useState} from 'react';
import {} from 'react-router-dom';
//Pages
import About from './pages/About';
import Contact from './pages/Contact';
import AllWork from './pages/AllWork';
// Components
import Home from './pages/Home';
import Nav from './components/Nav';
// Styles
import GlobalStyles from './components/GlobalStyles';
// Dependencies
import {Switch, Route} from 'react-router-dom';
import data from './data';

function App() {
  // State
  const [projects, setProjects] = useState(data());
  const [currentProject, setCurrentProject] = useState(projects[0]);
  console.log(projects[0]);
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/work">
          <AllWork projects={projects} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
