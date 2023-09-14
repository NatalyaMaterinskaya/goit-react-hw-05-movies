import { HomePage } from 'pages/HomePage';
import { GlobalStyle } from './GlobalStyle';
import { MoviesPage } from 'pages/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import { AppLayuot } from './AppLayuot/AppLayuot';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayuot />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies:movieId" element={<MovieDetailsPage />}>
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
