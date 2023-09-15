import React from 'react';
import { LinkItem, ListItem } from './TrendingMoviesItem.styled';

export const TrendingMoviesItem = ({ film: { id, title } }) => {
  return (
    <ListItem>
      <LinkItem to={`/movies/${id}`}>{title}</LinkItem>
    </ListItem>
  );
};
