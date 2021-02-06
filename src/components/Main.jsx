import React from "react";
import MovieCard from "./Movie-card";
import PageContent from "./Page-content";
import PropTypes from 'prop-types';

const Main = (props) => {
  const {filmInfo} = props;
  const {movies} = props;
  return (
    <>
      <MovieCard filmInfo = {filmInfo}/>
      <PageContent movies = {movies}/>
    </>
  );
};

Main.propTypes = {
  filmInfo: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired
};

export default Main;
