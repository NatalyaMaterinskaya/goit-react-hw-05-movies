import React from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { Btn } from './FilmCard.styled';

export const FilmCard = ({
  film: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  const releaseDate = '(' + release_date?.slice(0, 4) + ')';
  return (
    <section>
      {title && (
        <>
          <Btn type="button">
            <RxArrowLeft />
            <span>Go back</span>
          </Btn>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width="360"
              height="300"
            ></img>
            <div>
              <h1>
                {title} {releaseDate}
              </h1>
              <p>User Score: {vote_average}</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              {genres?.map(genre => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};
