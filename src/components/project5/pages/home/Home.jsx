import React, { useEffect, useState } from 'react';
import css from './Home.module.css';
import getPopularMovies from 'components/project5/api/getPopularMovies';
import TrendingList from 'components/project5/components/trendingList/TrendingList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchPopularMovies = async () => {
      const trendingMovies = await getPopularMovies();
      if (!trendingMovies.ok) {
        throw new Error(`Sth went wrong: ${trendingMovies.status}`);
      }
      setMovies(trendingMovies);
      setIsLoading(false);
    };
    fetchPopularMovies().catch(err => {
      console.log(err);
      setError(true);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Something went wrong {error.message}</p>;
  }
  return (
    <div className={css.container}>
      <h2 className={css.title}>Trending today</h2>
      <TrendingList movies={movies} />
    </div>
  );
}
