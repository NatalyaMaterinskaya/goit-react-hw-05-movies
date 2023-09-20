import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';
import React from 'react'
import { Wrapper } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <Wrapper>
      {reviews &&
        reviews.map(review => <ReviewsItem key={review.id} review={review} />)}
    </Wrapper>
  );
};
