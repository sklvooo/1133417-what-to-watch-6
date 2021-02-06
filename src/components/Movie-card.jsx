import React from "react";
import Header from "./Header";
import CardInfo from "./Card-info";
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {filmInfo} = props;
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header/>
      <CardInfo filmInfo = {filmInfo}/>
    </section>
  );
};

MovieCard.propTypes = {
  filmInfo: PropTypes.object.isRequired,
};

export default MovieCard;
