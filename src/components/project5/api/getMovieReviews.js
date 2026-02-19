import { API_KEY, BASE_URL } from './keys';

const REVIEW_ENDPOINT = '/movie';

const getMovieReviews = async movieId => {
  const searchParams = new URLSearchParams({
    language: 'en-US',
    api_key: API_KEY,
  });

  const response = await fetch(
    `${BASE_URL}${REVIEW_ENDPOINT}/${movieId}/reviews?${searchParams}`
  );
  if (!response.ok) {
    throw new Error(`Sth went wrong, ${response.status}`);
  }
  const data = response.json();
  return data;
};

export default getMovieReviews;
