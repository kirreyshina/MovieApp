import { get } from './api';

export const fetch = (currentPage) => {
  return get('/discover/movie', {
    params: { page: currentPage } });
};

export const search = (query) => {
  return get('/search/movie', { 
    params: { query } });
};

export const trailerMovies = (movies) => {
  return get(`/movie/${movies}/videos`, {params: {}});
}; 
