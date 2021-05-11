import React, {useEffect, useState} from 'react';
// Styles
import GlobalStylesCP from './components/GlobalStylesCP';
import AllPopular from './components/AllPopular';
import NoResult from './components/NoResult';
import Nav from './components/Nav';
import Spinner from './components/Spinner';
import {POPULAR_ALL_API, Img_API, SEARCH_API} from './api';
// Animation
import {motion, AnimatePresence} from 'framer-motion';
import {pageAnimation} from '../Animation';

const CinePhileApp = () => {
  // All popular state
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(POPULAR_ALL_API)
      .then((res) => res.json())
      .then((data) => {
        setContents(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="SLApp"
    >
      <GlobalStylesCP />
      <Nav
        contents={contents}
        setContents={setContents}
        setLoading={setLoading}
      />
      {loading ? (
        <Spinner />
      ) : contents.length === 0 ? (
        <NoResult />
      ) : (
        <AllPopular contents={contents} setLoading={setLoading} />
      )}
    </motion.div>
  );
};

export default CinePhileApp;
