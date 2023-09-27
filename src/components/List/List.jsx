import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper } from './List.styled';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';

export const List = ({ films}) => {
  return (
    <Wrapper>
      {films.map(film => (
        <MoviesItem key={film.id} film={film} />
      ))}
    </Wrapper>
  );
};

List.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};
