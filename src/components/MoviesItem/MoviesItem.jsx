import React from 'react';
import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

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

MoviesItem.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};