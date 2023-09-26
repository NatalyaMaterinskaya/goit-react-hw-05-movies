import { fetchMovie } from 'api';
import { List } from 'components/List/List';
import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

export const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    async function getFilms() {
      try {
        setIsLoading(true);
        if (!query) return;
        console.log('query', query);
        const response = await fetchMovie(query);
        console.log('response', response);
        const newQuery = response;
        if (newQuery.length === 0) {
          throw new Error();
        }
        setSearch(newQuery);
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
    getFilms();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('search', search);
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <section>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading ? <Loader /> : search.length > 0 && <List films={search} />}
    </section>
  );
};
