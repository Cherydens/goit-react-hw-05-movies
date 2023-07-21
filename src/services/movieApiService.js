import axios from 'axios';

// const API_KEY = '55796f17387279855c720b27f49c25f1';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTc5NmYxNzM4NzI3OTg1NWM3MjBiMjdmNDljMjVmMSIsInN1YiI6IjY0N2Y3MDYzNzFmZmRmMDEwYzg3YWIzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9AzF80qawQzmYwfptJjDK5gSiKy9M6ZEOpq2I4PFWtg';

const BASE_URL = 'https://api.themoviedb.org/3';

const TRENDING_DAY_ENDPOINT = '/trending/movie/day';
const TRENDING_WEEK_ENDPOINT = '/trending/movie/week';
const UPCOMING_ENDPOINT = '/movie/upcoming';
const BY_ID_ENDPOINT = '/movie';
const SEARCH_QUERY_ENDPOINT = '/search/movie';
const GENRE_ENDPOINT = '/genre/movie/list';

const LANGUAGE = 'en-US';
const ADULT = 'false';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.params = { language: LANGUAGE };

/**
 * Отримує трендові фільми дня
 * @param {String || Number} page
 * @returns {Promise} response data
 */
export async function fetchDayTrends(page = 1) {
  const { data } = await axios({
    url: TRENDING_DAY_ENDPOINT,
    params: {
      page,
    },
  });
  return data;
}

/**
 * Отримує трендові фільми тижня
 * @param {String || Number} page
 * @returns {Promise} response data
 */
export async function fetchWeekTrends(page = 1) {
  const { data } = await axios({
    url: TRENDING_WEEK_ENDPOINT,
    params: {
      page,
    },
  });
  return data;
}

/**
 * Отримує нові фільми
 * @param {String || Number} page
 * @returns {Promise} response data
 */
export async function fetchUpcomingThisMonth(page = 1) {
  const { data } = await axios({
    url: UPCOMING_ENDPOINT,
    params: {
      page,
    },
  });
  return data;
}

/**
 * Отримує фільм за ID
 * @param {String} id
 * @returns {Promise} response data
 */
export async function fetchMovieById(id) {
  const { data } = await axios({
    url: `${BY_ID_ENDPOINT}/${id}`,
  });
  return data;
}

/**
 * Отримує акторів до фільму за ID
 * @param {String} id
 * @returns {Promise} response data
 */
export async function fetchMovieCastById(id) {
  const { data } = await axios({
    url: `${BY_ID_ENDPOINT}/${id}/credits`,
  });
  return data;
}

/**
 * Отримує обзори до фільму за ID
 * @param {String} id
 * @returns {Promise} response data
 */
export async function fetchMovieReviewsById(id) {
  const { data } = await axios({
    url: `${BY_ID_ENDPOINT}/${id}/reviews`,
  });
  return data;
}

/**
 * Отримує фільми за пошуковим запитом
 * @param {String} query
 * @param {String || Number} page
 * @returns {Promise} response data
 */
export async function fetchMovieBySearchQuery(query, page = 1) {
  const { data } = await axios({
    url: SEARCH_QUERY_ENDPOINT,
    params: { query, page, include_adult: ADULT },
  });
  return data;
}

/**
 * Отримує фільм за пошуковим запитом та роком
 * @param {String} query
 * @param {String || Number} primary_release_year
 * @param {String || Number} page
 * @returns {Promise} response data
 */
export async function fetchMovieBySearchQueryAndYear(
  query,
  primary_release_year,
  page = 1
) {
  const { data } = await axios({
    url: SEARCH_QUERY_ENDPOINT,
    params: {
      query,
      page,
      include_adult: ADULT,
      primary_release_year,
    },
  });
  return data;
}

/**
 * Отримує відео до фільму за ID
 * @param {String} id
 * @returns {Promise} response data
 */
export async function fetchMovieVideosById(id) {
  const { data } = await axios({
    url: `${BY_ID_ENDPOINT}/${id}/videos`,
  });
  return data;
}

/**
 * Отримує перелік жанрів
 * @returns {Promise} response data
 */
export async function fetchGenresList() {
  const { data } = await axios({
    url: GENRE_ENDPOINT,
  });
  return data;
}
