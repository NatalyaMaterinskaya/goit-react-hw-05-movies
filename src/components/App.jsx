import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppLayuot } from './AppLayuot/AppLayuot';
import { GlobalStyle } from './GlobalStyle';

const HomePage = lazy(() => import('pages/HomePage')); 
const MoviesPage = lazy(() => import('pages/MoviesPage')); 
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast')); 
const Reviews = lazy(() => import('./Reviews/Reviews')); 


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayuot />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
