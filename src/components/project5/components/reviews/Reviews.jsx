import getMovieReviews from 'components/project5/api/getMovieReviews';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './reviews.module.css';

export default function Reviews() {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovieReviews = async () => {
      const movieReview = await getMovieReviews(movieId);
      if (!movieReview.ok) {
        throw new Error(`Sth went wrong: ${movieReview.status}`);
      }
      setReview(movieReview);
    };
    fetchMovieReviews().catch(err => {
      console.log(err);
    });
  }, [movieId]);

  return (
    <div className={css.review}>
      <ul>
        {review.map(r => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
