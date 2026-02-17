import { API_KEY, BASE_URL } from './keys';

const CAST_ENDPOINT = '/movie';

const getMovieCast = async movieId => {
  const searchParams = new URLSearchParams({
    language: 'en-US',
    api_key: API_KEY,
  });

  const response = await fetch(
    `${BASE_URL}${CAST_ENDPOINT}/${movieId}/credits?${searchParams}`
  );
  if (!response.ok) {
    throw new Error(`Sth went wrong, ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export default getMovieCast;
