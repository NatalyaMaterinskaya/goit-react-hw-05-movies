import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import toast from 'react-hot-toast';

import { fetchMovieReviews } from 'api';

import { Loader } from 'components/Loader/Loader';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getFilmReviews() {
      try {
        setIsLoading(true);

        const response = await fetchMovieReviews(movieId);
        let newReviews = response;
        if (newReviews.length === 0) {
          newReviews = null;
        }
        setReviews(newReviews);
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
    getFilmReviews();
  }, [movieId]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
          reviews ? <ReviewsList reviews={reviews} /> :
          <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};

export default Reviews;