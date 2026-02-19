import getMovieCast from 'components/project5/api/getMovieCast';
import React, { useEffect, useState } from 'react';
import css from './cast.module.css';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovieCast = async () => {
      const credits = await getMovieCast(movieId);
      if (!credits.ok) {
        throw new Error(`Sth went wrong: ${credits.status}`);
      }
      setCast(credits.cast);
    };
    fetchMovieCast().catch(err => {
      console.error(err);
    });
    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={css.cast}>
      <ul>
        {cast.map(
          actor =>
            actor.profile_path && (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
