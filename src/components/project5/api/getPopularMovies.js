import { API_KEY, BASE_URL } from './keys';

const POPULAR_ENDPOINT = '/trending/all/day';

const getPopularMovies = async () => {
  const searchParams = new URLSearchParams({
    language: 'en-US',
    api_key: API_KEY,
  });
  const response = await fetch(
    `${BASE_URL}${POPULAR_ENDPOINT}?${searchParams}`
  );
  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.status}`);
  }
  const data = await response.json();
  const results = data.results;

  return results;
};

export default getPopularMovies;
