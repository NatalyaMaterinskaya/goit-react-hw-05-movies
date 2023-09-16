import React from 'react';
import { LinkItem, ListItem } from './TrendingMoviesItem.styled';
import { useLocation } from 'react-router-dom';

export const TrendingMoviesItem = ({ film: { id, title } }) => {
    const location = useLocation();
  return (
    <ListItem>
      <LinkItem to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </LinkItem>
    </ListItem>
  );
};
