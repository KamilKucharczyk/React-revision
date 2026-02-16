import { API_KEY, BASE_URL } from './keys';

const SEARCH_ENDPOINT = '/search/movie';

const getMovieByQuery = async query => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    query: query,
  });

  const response = await fetch(`${BASE_URL}${SEARCH_ENDPOINT}?${searchParams}`);
  if (!response.ok) {
    throw new Error(`Error fetching movies by quer: ${response.status}`);
  }

  const data = await response.json();
  const results = data.results;
  if (!results) {
    return [];
  }
  return results;
};

export default getMovieByQuery;
