import React from 'react';
import {} from 'react-router-dom';
// Components
import Home from './pages/Home';
import Nav from './components/Nav';
// Styles
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
