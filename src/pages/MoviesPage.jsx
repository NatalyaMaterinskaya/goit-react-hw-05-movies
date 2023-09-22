import { fetchMovie } from 'api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    async function getFilms() {
      try {
        setIsLoading(true);
        setError(false);
        if (query === '') return;
        const response = await fetchMovie(query);
        console.log('query', response);
        const newQuery = response;
        if (newQuery.length === 0) {
          throw new Error();
        }
        setSearch(newQuery);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getFilms();
  }, [query]);

  
  const handleSubmit = e => {
    e.preventDefault();
    console.log('first', 'first')
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return  <Searchbar onSubmit={handleSubmit} />
};
