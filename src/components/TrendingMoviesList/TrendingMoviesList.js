import { TrendingMoviesItem } from 'components/TrendingMoviesItem/TrendingMoviesItem';
import React from 'react';
import { Wrapper } from './TrendingMoviesList.styled';

export const TrendingMoviesList = ({ films }) => {
  return (
    <Wrapper>
      {films.map(film => (
        <TrendingMoviesItem key={film.id} film={film} />
      ))}
    </Wrapper>
  );
};
