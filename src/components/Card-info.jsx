import React from "react";
import PropTypes from 'prop-types';

const CardInfo = (props) => {
  const {filmInfo} = props;
  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{filmInfo.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{filmInfo.genre}</span>
            <span className="movie-card__year">{filmInfo.date}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardInfo.propTypes = {
  filmInfo: PropTypes.object.isRequired,
};

export default CardInfo;
