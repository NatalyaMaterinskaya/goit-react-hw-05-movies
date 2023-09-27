import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import toast from 'react-hot-toast';

import { fetchMovieCast } from 'api';

import { CastList } from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getFilmCast() {
      try {
        setIsLoading(true);

        const response = await fetchMovieCast(movieId);
        let newCast = response;
        if (newCast.length === 0) {
           newCast = null;
        }
        setCast(newCast);
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
    getFilmCast();
  }, [movieId]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
          cast ? <CastList cast={cast} /> :
          <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};

export default Cast;