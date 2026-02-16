import React from 'react';
import { Link } from 'react-router-dom';

const SearchedMovies = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies?.map(
          movie =>
            movie.title && (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default SearchedMovies;
