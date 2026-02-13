import React from 'react';
import css from './trendingList.module.css';
import { Link } from 'react-router-dom';

function TrendingList({ movies }) {
  return (
    <ul className={css.movie}>
      {movies.map(
        movie =>
          movie.title && (
            <li className={css.movie_item} key={movie.id}>
              <Link className={css.movie_link} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          )
      )}
    </ul>
  );
}

export default TrendingList;
