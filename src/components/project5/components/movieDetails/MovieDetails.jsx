import React, { useEffect, useState } from 'react';
import css from './movieDetails.module.css';
import getMovieDetails from 'components/project5/api/getMovieDetails';
import { Link, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(movieId);
      if (!details.ok) {
        throw new Error(`Sth went wrong, ${details.status}`);
      }
      setMovieDetails(details);
      setIsLoading(false);
    };
    fetchMovieDetails().catch(err => {
      console.log(err);
      setError(true);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Something went wrong {error.message}</p>;
  }
  return (
    <div className={css.movie}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <h2 className={css.movie__title}>{movieDetails.title}</h2>
      <p className={css.movie__overview}>
        {movieDetails.overview}
        <p className={css.movie__genres}>
          {movieDetails.genres.map(g => g.name).join(', ')}
        </p>
      </p>
      <div>
        Additional information
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
