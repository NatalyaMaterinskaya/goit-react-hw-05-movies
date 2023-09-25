import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import React from 'react';
import { Wrapper } from './List.styled';

export const List = ({ films, children }) => {
  return (
    <Wrapper>
      {films.map(film => (
        <MoviesItem key={film.id} film={film} />
      ))}
    </Wrapper>
  );
};
