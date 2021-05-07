import React from 'react';
// Styles
import GlobalStylesCP from './components/GlobalStylesCP';
import PopularMovie from './components/PopularMovie';
import Nav from './components/Nav';

const CinePhileApp = () => {
  return (
    <div className="SLApp">
      <GlobalStylesCP />
      <Nav />
      <PopularMovie />
    </div>
  );
};

export default CinePhileApp;
