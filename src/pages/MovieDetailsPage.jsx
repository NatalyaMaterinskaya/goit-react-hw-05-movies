import { fetchMovieById } from 'api';
import { FilmCard } from 'components/FilmCard/FilmCard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [film, setFilm] = useState('');
  const [, setIsLoading] = useState(false);

  useEffect(() => {
    async function getFilm() {
      try {
        setIsLoading(true);

        const response = await fetchMovieById(movieId);
        const newFilm = response;
        if (newFilm.length === 0) {
          throw new Error();
        }
        setFilm(newFilm);
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
    getFilm();
  }, [movieId]);
  return <FilmCard film={film} />;
};
