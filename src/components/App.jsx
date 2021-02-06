import React from "react";
import Main from "./Main";
import PropTypes from 'prop-types';

const App = (props) => {
  const {filmInfo} = props;
  const {movies} = props;
  return <Main filmInfo = {filmInfo} movies = {movies}/>;
};

App.propTypes = {
  filmInfo: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired
};

export default App;
