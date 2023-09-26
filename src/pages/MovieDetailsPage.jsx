import { fetchMovieById } from 'api';
import { FilmCard } from 'components/FilmCard/FilmCard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [film, setFilm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getFilm() {
      try {
        setIsLoading(true);

        const response = await fetchMovieById(movieId);
        const newFilm = response;
                console.log('newFilms', newFilm);
        if (!newFilm) {
          throw new Error();
        }
        setFilm(newFilm);
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
    getFilm();
  }, [movieId]);
   return (
     <>
       {isLoading ? <Loader /> : film && <FilmCard film={film} />}
     </>
   );
};
