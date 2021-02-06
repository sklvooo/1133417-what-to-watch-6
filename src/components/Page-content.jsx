import React from "react";
import Footer from "./Footer";
import Genres from "./Genres";
import SmallMovie from "./Small-movie";
import PropTypes from 'prop-types';

const PageContent = (props) => {
  const {movies} = props;
  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <Genres/>
        <div className="catalog__movies-list">
          {movies.map((movie, i) => <SmallMovie key = {movie + i} movie = {movie}/>)}
        </div>
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

PageContent.propTypes = {
  movies: PropTypes.array.isRequired
};

export default PageContent;
