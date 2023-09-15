import { fetchTrendingMovies } from 'api';
import {TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import React, { useEffect, useState } from 'react';

export const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(false);

  useEffect(() => {
    async function getTrendingFilms() {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetchTrendingMovies();

        const newFilms = response;
        if (newFilms.length === 0) {
          throw new Error();
        }
        setTrendingFilms([...newFilms]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getTrendingFilms();
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      {trendingFilms.length>0 && <TrendingMoviesList films={trendingFilms} />}
    </section>
  );
};
