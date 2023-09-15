import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzgzODcxYTgwNTdkODIwZmI0NTM0ZDFjOTA3Yjk1ZSIsInN1YiI6IjY1MDFiNmM1NmEyMjI3MDBmZDIwZTFjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hn9lRjusBKTt2Wm-flc9PolTLNyZXMudu4EWzNxmmy4';

export const fetchTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day', {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    params: {
      language: 'en-US',
    },
  });
return response.data.results;
};

export const fetchMovieById = async filmId => {
  const response = await axios.get(`/movie/${filmId}`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    params: {
      language: 'en-US',
    },
  });
  return response.data;
};
