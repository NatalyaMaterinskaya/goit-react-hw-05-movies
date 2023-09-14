import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '7c83871a8057d820fb4534d1c907b95e';

export const fetchTrendingMovies = async (query, page) => {
  const response = await axios.get('/trending/day', {
    params: {
      key: API_KEY,
      language: 'en-US',
    //   per_page: 20,
    },
  });
//   const data = {
//     totalHits: response.data.totalHits,
//     hits: response.data.hits,
//   };
//   return data;
};
