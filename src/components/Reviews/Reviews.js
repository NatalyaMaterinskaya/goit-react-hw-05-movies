import { fetchMovieReviews } from 'api';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState('');
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(false);

  useEffect(() => {
    async function getFilmReviews() {
      try {
        setIsLoading(true);
        setError(false);

        const response = await fetchMovieReviews(movieId);
        console.log('reviews', response);
        const newReviews = response;
        if (newReviews.length === 0) {
          throw new Error();
        }
        setReviews(newReviews);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getFilmReviews();
  }, [movieId]);
      return <ReviewsList reviews={reviews} />;
}
