import React, { useState } from 'react';
import css from './Movie.module.css';
import getMovieByQuery from 'components/project5/api/getMovieByQuery';
import SearchedMovies from 'components/project5/components/searchedMovies/SearchedMovies';

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  const handleSearch = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    setSearchParam(e.target.value);
  };
  try {
    const foundMovies = getMovieByQuery(searchParam);
    setMovies(foundMovies);
  } catch (error) {
    console.error('No movies found', error.message);
    setMovies([]);
  }

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSearch}>
        <input
          className={css.input}
          name="query"
          placeholder="Search movie"
          value={searchParam}
          onChange={handleChange}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <SearchedMovies movies={movies} />
    </div>
  );
}
