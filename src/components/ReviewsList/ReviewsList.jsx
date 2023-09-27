import React from 'react'

import PropTypes from 'prop-types';

import { Wrapper } from './ReviewsList.styled';
import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';

export const ReviewsList = ({ reviews }) => {

  return (
    <Wrapper>
      {reviews &&
        reviews.map(review => <ReviewsItem key={review.id} review={review} />)}
    </Wrapper>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};