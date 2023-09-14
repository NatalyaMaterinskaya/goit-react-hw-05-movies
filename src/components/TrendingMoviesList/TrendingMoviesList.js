import { TrendingMoviesItem } from 'components/TrendingMoviesItem/TrendingMoviesItem';
import React from 'react'

export const TrendingMoviesList = ({films}) => {
  return (
    <ul>
      {films?.map(film => (
        <TrendingMoviesItem key={film.id} image={film} />
      ))}
    </ul>
  );
}
