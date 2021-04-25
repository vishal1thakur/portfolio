import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.svg';

const Nav = ({setLibraryStatus, libraryStatus}) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <img className="logo" src={logo} alt="" />
      <button
        className={libraryStatus ? 'library-active' : ''}
        onClick={openLibraryHandler}
      >
        Library
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;
