import React from 'react';
import { LinkItem, ListItem } from './MoviesItem.styled';
import { useLocation } from 'react-router-dom';

export const MoviesItem = ({ film: { id, title } }) => {
    const location = useLocation();
  return (
    <ListItem >
      <LinkItem to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </LinkItem>
    </ListItem>
  );
};
