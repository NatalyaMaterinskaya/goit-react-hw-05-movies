import React from 'react'

import PropTypes from 'prop-types';

import { ListItem, Text } from './ReviewsItem.styled';

export const ReviewsItem = ({ review: { author, content } }) => {
 return (
   <ListItem>
     <Text>{author}</Text>
     <p>{content}</p>
   </ListItem>
 );
};

ReviewsItem.propTypes = {
  review: PropTypes.object.isRequired,
};
