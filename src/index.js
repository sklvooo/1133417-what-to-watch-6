import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

const filmInfo = {
  title: `mu-mu`,
  genre: `horror`,
  date: `1999`
};

const movies = new Array(20).fill(`Snatch`);

ReactDOM.render(
    <App filmInfo = {filmInfo} movies = {movies}/>,
    document.querySelector(`#root`)
);
