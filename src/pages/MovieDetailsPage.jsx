import { fetchMovieById } from 'api';
import { FilmCard } from 'components/FilmCard/FilmCard';
import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [film, setFilm] = useState('');
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(false);

  useEffect(() => {
    async function getFilm() {
      try {
        setIsLoading(true);
        setError(false);

        const response = await fetchMovieById(movieId);
        const newFilm = response;
        if (newFilm.length === 0) {
          throw new Error();
        }
        setFilm(newFilm);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getFilm();
  }, [movieId]);
  return <FilmCard film={film} />;
};
