import { fetchMovieCast } from 'api';
import { CastList } from 'components/CastList/CastList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState('');
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(false);

  useEffect(() => {
    async function getFilmCast() {
      try {
        setIsLoading(true);
        setError(false);

        const response = await fetchMovieCast(movieId);
        const newCast = response;
        if (newCast.length === 0) {
          throw new Error();
        }
        setCast(newCast);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getFilmCast();
  }, [movieId]);
  return <CastList cast={cast} />;
};
