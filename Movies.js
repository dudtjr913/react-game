import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movies.css";

export default function Movies({ title, year, summary, rating, img, genres }) {
  return (
    <ul className="movie">
      <Link
        to={{
          pathname: "/detail",
          state: {
            title,
            year,
            summary,
            rating,
            img,
            genres,
          },
        }}
        className="movie__home"
      >
        <img className="movie__img" src={img} alt={title} title={title} />
      </Link>
      <h2 className="movie__title">{title}</h2>
      <h4 className="movie__year">{year}</h4>
      <h4 className="movie__rating">{rating} / 10</h4>
      <h5 className="movie__summary">{summary.slice(0, 190)}...</h5>
      <ul className="movie__genres">
        Genre :
        {genres.map((genre, i) => {
          return (
            <li key={i} className="genres__genre">
              {genre}
            </li>
          );
        })}
      </ul>
    </ul>
  );
}

Movies.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
