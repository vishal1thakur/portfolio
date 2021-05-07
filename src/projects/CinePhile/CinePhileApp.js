import React from 'react';
// Styles
import GlobalStylesCP from './components/GlobalStylesCP';
import PopularMovie from './components/PopularMovie';

const CinePhileApp = () => {
  return (
    <div className="SLApp">
      <GlobalStylesCP />
      <PopularMovie />
    </div>
  );
};

export default CinePhileApp;
