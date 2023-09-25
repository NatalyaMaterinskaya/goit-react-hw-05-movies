import { fetchTrendingMovies } from 'api';
import { List } from 'components/List/List';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTrendingFilms() {
      try {
        setIsLoading(true);
        const response = await fetchTrendingMovies();

        const newFilms = response;
        if (newFilms.length === 0) {
          throw new Error();
        }
        setTrendingFilms([...newFilms]);
        toast.success('Downloaded!');
      } catch (error) {
        console.log(error);
        toast.success('Oops!Something went wrong! Please reload the page!', {
          duration: 5000,
        });
      } finally {
        setIsLoading(false);
      }
    }
    getTrendingFilms();
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      {trendingFilms.length > 0 && <List films={trendingFilms} />}
    </section>
  );
};
