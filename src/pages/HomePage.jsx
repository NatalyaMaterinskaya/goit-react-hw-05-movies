import React, { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import { fetchTrendingMovies } from 'api';

import { Loader } from 'components/Loader/Loader';
import { List } from 'components/List/List';

const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        toast.error('Oops!Something went wrong!', {
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
      {isLoading ? (
        <Loader/>
      ) : (
      trendingFilms.length > 0 && <List films={trendingFilms} />
    )} 
    </section>
  );
};

export default HomePage;