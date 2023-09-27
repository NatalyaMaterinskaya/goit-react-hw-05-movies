import React from 'react';
import { useLocation } from 'react-router-dom';

import { LinkItem, ListItem } from './MoviesItem.styled';

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
